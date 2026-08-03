import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticHover from '@/components/MagneticHover';
import SmoothHashScroll from '@/components/SmoothHashScroll';

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <SkipLink />
      <CustomCursor />
      <ScrollReveal />
      <MagneticHover />
      <SmoothHashScroll />
      <Header />
      <main id="main-content" className="page-main">
        {children}
      </main>
      <Footer />
    </>
  );
}
