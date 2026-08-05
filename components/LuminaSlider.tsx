'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Slide = {
  title: string;
  description: string;
  media: string;
};

const SLIDES: Slide[] = [
  {
    title: 'SEO that compounds',
    description:
      'Rank higher on Google and turn search traffic into paying customers with technical SEO, local SEO, and content that compounds.',
    media: '/slides/seo.jpg',
  },
  {
    title: 'Ads built for leads',
    description:
      'Google Ads and Meta Ads campaigns optimized for cost-per-lead — with tracking, creative, and weekly optimization.',
    media: '/slides/ads.jpg',
  },
  {
    title: 'Sites that convert',
    description:
      'Fast, mobile-first websites built for search visibility and conversions — including custom WordPress builds.',
    media: '/slides/web.jpg',
  },
];

const TRANSITION_DURATION = 2.5;
const AUTO_SLIDE_SPEED = 5000;
const PROGRESS_UPDATE_INTERVAL = 50;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture1, uTexture2;
  uniform float uProgress;
  uniform vec2 uResolution, uTexture1Size, uTexture2Size;
  uniform float uRefraction, uChromatic, uClarity, uEdgeGlow, uLiquidFlow;
  varying vec2 vUv;

  vec2 getCoverUV(vec2 uv, vec2 textureSize) {
    vec2 s = uResolution / textureSize;
    float scale = max(s.x, s.y);
    vec2 scaledSize = textureSize * scale;
    vec2 offset = (uResolution - scaledSize) * 0.5;
    return (uv * uResolution - offset) / scaledSize;
  }

  void main() {
    float time = uProgress * 5.0;
    vec2 uv1 = getCoverUV(vUv, uTexture1Size);
    vec2 uv2 = getCoverUV(vUv, uTexture2Size);

    float maxR = length(uResolution) * 0.85;
    float br = uProgress * maxR;
    vec2 p = vUv * uResolution;
    vec2 c = uResolution * 0.5;
    float d = length(p - c);
    float nd = d / max(br, 0.001);
    float param = smoothstep(br + 3.0, br - 3.0, d);

    vec4 img;
    if (param > 0.0) {
      float ro = 0.08 * uRefraction * pow(smoothstep(0.3 * uClarity, 1.0, nd), 1.5);
      vec2 dir = (d > 0.0) ? (p - c) / d : vec2(0.0);
      vec2 distUV = uv2 - dir * ro;
      distUV += vec2(sin(time + nd * 10.0), cos(time * 0.8 + nd * 8.0))
                * 0.015 * uLiquidFlow * nd * param;

      float ca = 0.02 * uChromatic * pow(smoothstep(0.3, 1.0, nd), 1.2);
      img = vec4(
        texture2D(uTexture2, distUV + dir * ca * 1.2).r,
        texture2D(uTexture2, distUV + dir * ca * 0.2).g,
        texture2D(uTexture2, distUV - dir * ca * 0.8).b,
        1.0
      );

      float rim = smoothstep(0.95, 1.0, nd) * (1.0 - smoothstep(1.0, 1.01, nd));
      img.rgb += rim * 0.08 * uEdgeGlow;
    } else {
      img = texture2D(uTexture2, uv2);
    }

    vec4 oldImg = texture2D(uTexture1, uv1);
    if (uProgress > 0.95) img = mix(img, texture2D(uTexture2, uv2), (uProgress - 0.95) / 0.05);
    gl_FragColor = mix(oldImg, img, param);
  }
`;

export default function LuminaSlider() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const canvas = root.querySelector<HTMLCanvasElement>('.webgl-canvas');
    const titleEl = root.querySelector<HTMLElement>('.slide-title');
    const descEl = root.querySelector<HTMLElement>('.slide-description');
    const navEl = root.querySelector<HTMLElement>('.slides-navigation');
    const numberEl = root.querySelector<HTMLElement>('.slide-number');
    const totalEl = root.querySelector<HTMLElement>('.slide-total');
    if (!canvas || !titleEl || !descEl || !navEl) return;

    let disposed = false;
    let frameId = 0;
    let progressTimer: ReturnType<typeof setInterval> | null = null;
    let restartTimer: ReturnType<typeof setTimeout> | null = null;
    let contentTimer: ReturnType<typeof setTimeout> | null = null;
    let currentIndex = 0;
    let isTransitioning = false;
    let ready = false;
    const textures: THREE.Texture[] = [];

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture1: { value: null },
        uTexture2: { value: null },
        uProgress: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uTexture1Size: { value: new THREE.Vector2(1, 1) },
        uTexture2Size: { value: new THREE.Vector2(1, 1) },
        uRefraction: { value: 1.0 },
        uChromatic: { value: 1.0 },
        uClarity: { value: 1.0 },
        uEdgeGlow: { value: 1.0 },
        uLiquidFlow: { value: 1.0 },
      },
      vertexShader,
      fragmentShader,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const resize = () => {
      const { width, height } = root.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      material.uniforms.uResolution.value.set(width, height);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(root);
    resize();

    const splitText = (text: string) =>
      text
        .split('')
        .map(
          (char) =>
            `<span style="display:inline-block;opacity:0">${
              char === ' ' ? '&nbsp;' : char
            }</span>`,
        )
        .join('');

    const setProgress = (index: number, percent: number) => {
      const fill = navEl.children[index]?.querySelector<HTMLElement>(
        '.slide-progress-fill',
      );
      if (fill) fill.style.width = `${percent}%`;
    };

    const stopTimers = () => {
      if (progressTimer) clearInterval(progressTimer);
      if (restartTimer) clearTimeout(restartTimer);
      progressTimer = null;
      restartTimer = null;
    };

    const startTimer = () => {
      stopTimers();
      if (!ready || disposed) return;
      let percent = 0;
      const step = (100 / AUTO_SLIDE_SPEED) * PROGRESS_UPDATE_INTERVAL;
      progressTimer = setInterval(() => {
        percent += step;
        setProgress(currentIndex, percent);
        if (percent >= 100) {
          stopTimers();
          setProgress(currentIndex, 0);
          goTo((currentIndex + 1) % SLIDES.length);
        }
      }, PROGRESS_UPDATE_INTERVAL);
    };

    const updateContent = (index: number) => {
      gsap.to(titleEl.children, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power2.in',
      });
      gsap.to(descEl, { y: -10, opacity: 0, duration: 0.4, ease: 'power2.in' });

      contentTimer = setTimeout(() => {
        if (disposed) return;
        titleEl.innerHTML = splitText(SLIDES[index].title);
        descEl.textContent = SLIDES[index].description;

        const chars = titleEl.children;
        gsap.set(chars, { opacity: 0 });
        gsap.set(descEl, { y: 20, opacity: 0 });

        if (index % 3 === 1) {
          gsap.set(chars, { filter: 'blur(10px)', scale: 1.4, y: 0 });
          gsap.to(chars, {
            filter: 'blur(0px)',
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: { amount: 0.5, from: 'random' },
            ease: 'power2.out',
          });
        } else if (index % 3 === 2) {
          gsap.set(chars, { x: 30, y: 0 });
          gsap.to(chars, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power3.out',
          });
        } else {
          gsap.set(chars, { y: 20 });
          gsap.to(chars, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power3.out',
          });
        }

        gsap.to(descEl, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
        });
      }, 500);
    };

    const goTo = (index: number) => {
      if (isTransitioning || index === currentIndex || !ready) return;
      const from = textures[currentIndex];
      const to = textures[index];
      if (!from || !to) return;

      stopTimers();
      setProgress(currentIndex, 0);
      isTransitioning = true;

      material.uniforms.uTexture1.value = from;
      material.uniforms.uTexture2.value = to;
      material.uniforms.uTexture1Size.value = from.userData.size;
      material.uniforms.uTexture2Size.value = to.userData.size;

      updateContent(index);
      currentIndex = index;
      if (numberEl) numberEl.textContent = String(index + 1).padStart(2, '0');
      Array.from(navEl.children).forEach((el, i) =>
        el.classList.toggle('active', i === index),
      );

      gsap.fromTo(
        material.uniforms.uProgress,
        { value: 0 },
        {
          value: 1,
          duration: TRANSITION_DURATION,
          ease: 'power2.inOut',
          onComplete: () => {
            if (disposed) return;
            material.uniforms.uProgress.value = 0;
            material.uniforms.uTexture1.value = to;
            material.uniforms.uTexture1Size.value = to.userData.size;
            isTransitioning = false;
            restartTimer = setTimeout(startTimer, 100);
          },
        },
      );
    };

    navEl.innerHTML = '';
    SLIDES.forEach((slide, i) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = `slide-nav-item${i === 0 ? ' active' : ''}`;
      item.innerHTML = `<span class="slide-progress-line"><span class="slide-progress-fill"></span></span><span class="slide-nav-title">${slide.title}</span>`;
      item.addEventListener('click', () => goTo(i));
      navEl.appendChild(item);
    });
    if (numberEl) numberEl.textContent = '01';
    if (totalEl) totalEl.textContent = String(SLIDES.length).padStart(2, '0');

    titleEl.innerHTML = splitText(SLIDES[0].title);
    descEl.textContent = SLIDES[0].description;
    gsap.fromTo(
      titleEl.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.03, ease: 'power3.out', delay: 0.3 },
    );
    gsap.fromTo(
      descEl,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 },
    );

    const loader = new THREE.TextureLoader();
    const loadTexture = (src: string) =>
      new Promise<THREE.Texture>((resolve, reject) => {
        loader.load(
          src,
          (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.userData = {
              size: new THREE.Vector2(texture.image.width, texture.image.height),
            };
            resolve(texture);
          },
          undefined,
          reject,
        );
      });

    Promise.all(SLIDES.map((slide) => loadTexture(slide.media)))
      .then((loaded) => {
        if (disposed) {
          loaded.forEach((t) => t.dispose());
          return;
        }
        textures.push(...loaded);
        material.uniforms.uTexture1.value = loaded[0];
        material.uniforms.uTexture2.value = loaded[1] ?? loaded[0];
        material.uniforms.uTexture1Size.value = loaded[0].userData.size;
        material.uniforms.uTexture2Size.value = (loaded[1] ?? loaded[0]).userData.size;
        ready = true;
        root.classList.add('loaded');
        restartTimer = setTimeout(startTimer, 500);
      })
      .catch(() => {
        root.classList.add('loaded');
      });

    const render = () => {
      frameId = requestAnimationFrame(render);
      renderer.render(scene, camera);
    };
    render();

    const onVisibility = () =>
      document.hidden ? stopTimers() : !isTransitioning && startTimer();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      stopTimers();
      if (contentTimer) clearTimeout(contentTimer);
      document.removeEventListener('visibilitychange', onVisibility);
      observer.disconnect();
      gsap.killTweensOf(material.uniforms.uProgress);
      gsap.killTweensOf(descEl);
      textures.forEach((texture) => texture.dispose());
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="showcase" className="lumina-section" aria-label="Growth systems showcase">
      <div className="container-lux lumina-section__intro">
        <p className="eyebrow" data-reveal>
          Digital Marketing Agency
        </p>
        <h2 className="section-title" data-reveal>
          Built to turn attention into pipeline.
        </h2>
      </div>

      <div ref={rootRef} className="lumina-slider">
        <canvas className="webgl-canvas" aria-hidden="true" />
        <div className="lumina-slider__shade" aria-hidden="true" />

        <div className="slide-counter">
          <span className="slide-number">01</span>
          <span className="slide-total">03</span>
        </div>

        <div className="slide-content">
          <h3 className="slide-title" />
          <p className="slide-description" />
        </div>

        <nav className="slides-navigation" aria-label="Showcase slides" />
      </div>
    </section>
  );
}
