import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../globals.css';
        
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccessibilityMenu from '@/components/MenuAcessibilidade'; 
import { FontSizeProvider } from '@/contexts/FontSizeContext';
import VoiceNavigation from '@/components/VoiceNavigation';
import SearchNavigation  from '@/components/SearchNavigator';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/Dashboard');

  return (
    <FontSizeProvider>
      <div className="flex flex-col min-h-screen">
        {!isDashboard && <Navbar />}
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        {!isDashboard && <Footer />}
        <VoiceNavigation />
        <AccessibilityMenu />   
        <SearchNavigation />
      </div>
    </FontSizeProvider>
  );
}

export default MyApp;
