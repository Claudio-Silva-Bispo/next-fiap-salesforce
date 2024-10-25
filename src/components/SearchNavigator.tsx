// components/SearchNavigation.tsx
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

        // Escutar eventos de teclado
        const handleKeyDown = (event: KeyboardEvent) => {
            // Verifique se a tecla pressionada é uma tecla específica, como 'F1'
            if (event.key === 'v') { // Altere a tecla conforme necessário
                startRecognition();
            }
        };

        // Adiciona o listener de teclado
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown); // Limpa o listener ao desmontar
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
