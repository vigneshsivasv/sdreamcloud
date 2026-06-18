import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="page-main">
        {children}
      </main>
      <Footer />
    </>
  );
}
