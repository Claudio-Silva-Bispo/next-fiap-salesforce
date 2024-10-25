import React, { useEffect } from 'react';

interface TextReaderProps {
    text: string;
    children: React.ReactNode;
    isReadingEnabled: boolean;
}

const TextReader: React.FC<TextReaderProps> = ({ text, children, isReadingEnabled }) => {
    useEffect(() => {
        if (!isReadingEnabled) {
            window.speechSynthesis.cancel(); // Interrompe qualquer fala em andamento se a leitura for desativada
        }
    }, [isReadingEnabled]);

    const handleClick = () => {
        if (!isReadingEnabled) {
            console.error('Leitura de tela desativada.');
            return;
        }

        console.log('Texto para ser lido:', text);

        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Interrompe qualquer fala em andamento

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
