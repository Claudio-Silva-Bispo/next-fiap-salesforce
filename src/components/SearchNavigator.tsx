
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FaMicrophone } from 'react-icons/fa';

const SearchNavigation = () => {
    const router = useRouter();
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const [isListening, setIsListening] = useState(false);

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

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        } else {
            console.error('Reconhecimento de fala não suportado no seu navegador.');
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.shiftKey && (event.key === 'V' || event.key === 'v')) { 
                startRecognition();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown); 
        };
    }, []);

    const startRecognition = () => {
        if (recognitionRef.current) {
            setIsListening(true);
            recognitionRef.current.start();
        }
    };

    const handleNavigation = (input: string) => {
        if (input.includes('contato')) {
            router.push('/Contato');
        } else if (input.includes('sobre')) {
            router.push('/Sobre'); 
        } else if (input.includes('home')) {
            router.push('/');
        } else if (input.includes('acessbilidade')) {
            router.push('/Acessibilidade');
        } else if (input.includes('documentacao')) {
            router.push('/Documentacao');
        } else if (input.includes('feedback')) {
            router.push('/Feedback');
        } else if (input.includes('configuracao')) {
            router.push('/ConfiguracaoPage');
        } else if (input.includes('descoberta')) {
            router.push('/FormularioDescoberta');
        } else if (input.includes('dicas')) {
            router.push('/Dicas');
        } else if (input.includes('visao')) {
            router.push('/BlinkScroll');
        }
        setIsListening(false);
    };

    return (
        <div className="fixed top-5 left-5">
            <button
                onClick={startRecognition}
                className="p-3 bg-blue-500 text-white rounded-full shadow"
                aria-label="Ativar navegação por voz"
            >
                <FaMicrophone />
            </button>
            {isListening && <p className="text-white">Escutando...</p>}
        </div>
    );
};

export default SearchNavigation;
