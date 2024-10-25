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
import { ConfiguracaoProvider } from '@/contexts/ConfiguracaoContext';
import { ReadingContext } from '../components/RightSidebar';
import { useEffect, useState } from 'react';
import VLibras from '@djpfs/react-vlibras';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/Dashboard');
  const [isReadingEnabled, setIsReadingEnabled] = useState(true);

  useEffect(() => {
    const storedValue = localStorage.getItem('isReadingEnabled');
    setIsReadingEnabled(storedValue !== 'false');
  }, []);

  const toggleReading = () => {
    setIsReadingEnabled(prevState => {
        const newState = !prevState;
        localStorage.setItem('isReadingEnabled', String(newState));
        if (!newState) {
            window.speechSynthesis.cancel(); // Interrompe qualquer fala em andamento imediatamente
        }
        return newState;
    });
  };

  const disableReading = () => {
    setIsReadingEnabled(false);
    localStorage.setItem('isReadingEnabled', 'false');
    window.speechSynthesis.cancel(); // Interrompe qualquer fala em andamento imediatamente
  };

  return (
    <ConfiguracaoProvider>
        <ReadingContext.Provider value={{ isReadingEnabled, toggleReading, disableReading }}>
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
              <VLibras forceOnload={true} />
            </div>
          </FontSizeProvider>
      </ReadingContext.Provider>
    </ConfiguracaoProvider>
  );
}



export default MyApp;
