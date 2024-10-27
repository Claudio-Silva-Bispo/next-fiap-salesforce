// components/VoiceNavigation.tsx
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const VoiceNavigation = () => {
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const router = useRouter();

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.lang = 'pt-BR';

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                handleNavigation(transcript);
            };

            recognitionRef.current.onerror = (event) => {
                console.error('Erro no reconhecimento de fala:', event.error);
            };
        } else {
            console.error('Reconhecimento de fala não suportado no seu navegador.');
        }
    }, []);

    const startRecognition = () => {
        if (recognitionRef.current) {
            recognitionRef.current.start();
        }
    };

    const handleNavigation = (input: string) => {
        if (input.includes('contato')) {
            router.push('/Contato'); 
        }
        else if (input.includes('sobre')) {
            router.push('/sobre'); 
        } else if (input.includes('home')) {
            router.push('/');
        } else if (input.includes('documentacao')) {
            router.push('/Documentacao'); 
        } else if (input.includes('feedback')) {
            router.push('/Feedback'); 
        } else if (input.includes('time')) {
            router.push('/Time'); 
        } else if (input.includes('configuracao')) {
            router.push('/ConfiguracaoPage'); 
        } else if (input.includes('dicas')) {
            router.push('/Dicas'); 
        } else if (input.includes('descoberta')) {
            router.push('/FormularioDescoberta'); 
        } else if (input.includes('visao')) {
            router.push('/BlinkScroll'); 
        } else if (input.includes('acessibilidade')) {
            router.push('/SuporteAcessibilidade'); 
        } else if (input.includes('suporte')) {
            router.push('/SuporteAcessibilidade'); 
        }
        
    };

    return (
        <button
            onClick={startRecognition}
            className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition"
            title="Falar para navegar"
        >
            <span role="img" aria-label="microfone">🎤</span> {/* Ícone de microfone */}
        </button>
    );
};

export default VoiceNavigation;
