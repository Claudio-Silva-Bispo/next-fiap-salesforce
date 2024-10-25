import React, { useState } from 'react';

const TestPage: React.FC = () => {
    const [isReadingEnabled, setIsReadingEnabled] = useState(true);

    const handleReadText = () => {
        const text = "Olá! Este é um teste para ouvir o áudio usando a síntese de fala.";

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

    return (
        <div style={{ padding: '20px' }}>
            <h1 className='pt-44'>Teste de Áudio Simplificado</h1>
            <button onClick={() => setIsReadingEnabled(prev => !prev)}>
                {isReadingEnabled ? 'Desativar Leitura' : 'Ativar Leitura'}
            </button>
            <button onClick={handleReadText} style={{ marginTop: '10px' }}>
                Ler Texto
            </button>
        </div>
    );
};

export default TestPage;
