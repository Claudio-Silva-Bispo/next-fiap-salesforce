import React, { useEffect, useState } from 'react';

interface TextReaderProps {
    text: string;
    children: React.ReactNode;
    isReadingEnabled: boolean;
}

const TextReader: React.FC<TextReaderProps> = ({ text, children, isReadingEnabled }) => {
    const [isCompletelyDisabled, setIsCompletelyDisabled] = useState(false);

    useEffect(() => {
        // Cancela a leitura se isReadingEnabled for false ou se a leitura estiver completamente desativada
        if (!isReadingEnabled || isCompletelyDisabled) {
            window.speechSynthesis.cancel();
        }
    }, [isReadingEnabled, isCompletelyDisabled]);

    const handleClick = () => {
        if (!isReadingEnabled || isCompletelyDisabled) {
            console.error('Leitura de tela desativada.');
            return;
        }

        console.log('Texto para ser lido:', text);

        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'pt-BR';
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Seu navegador não suporta a síntese de fala.');
        }
    };

    const handleFocus = () => {
        handleClick();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.shiftKey) {
            switch (event.key) {
                case 'Q':
                case 'q':
                    // Desativa a leitura atual se estiver em execução
                    window.speechSynthesis.cancel();
                    console.log('Leitura do texto atual desativada.');
                    break;

                case 'T':
                case 't':
                    // Desativa completamente a leitura
                    setIsCompletelyDisabled(true);
                    console.log('Leitura completamente desativada.');
                    break;

                case 'X':
                case 'x':
                    // Reativa a leitura
                    setIsCompletelyDisabled(false);
                    console.log('Leitura reativada.');
                    break;

                default:
                    break;
            }
        }
    };

    // Adiciona o listener de teclado quando o componente é montado
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div
            onClick={handleClick}
            onFocus={handleFocus}
            style={{ cursor: 'pointer' }}
            tabIndex={0}
        >
            {children}
        </div>
    );
};

export default TextReader;
