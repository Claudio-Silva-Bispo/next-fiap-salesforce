import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../globals.css';
        
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/Dashboard');

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Navbar />}
        <main className="flex-1">
          <Component {...pageProps} />
          
        </main>
        {!isDashboard && <Footer />}
    </div>
  );
}

export default MyApp;
