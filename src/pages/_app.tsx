import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../globals.css';
        
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccessibilityMenu from '@/components/MenuAcessibilidade'; 
import { FontSizeProvider } from '@/contexts/FontSizeContext';
import VoiceNavigation from '@/components/VoiceNavigation';
import SearchNavigation  from '@/components/SearchNavigator';
import HelpModal from '@/components/HelpModal';
import AccessibilityHintModal from '@/components/AccessibilityHintModal';
import ScrollByVoice from '@/components/ScrollByVoice';
import FontControl from '@/components/FontControl';
import VoiceThemeToggle from '@/components/VoiceThemeToggle';
import Chat from '@/components/Chat';

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
        <HelpModal/>
        <AccessibilityHintModal />
        <ScrollByVoice />
        <FontControl />
        <VoiceThemeToggle />
        <Chat />
      </div>
    </FontSizeProvider>
  );
}

export default MyApp;
