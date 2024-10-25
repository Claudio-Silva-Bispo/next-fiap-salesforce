import React, { useEffect, useState } from 'react';
import { useFontSize } from '@/contexts/FontSizeContext';

const FontControl = () => {
  const { increaseFontSize, decreaseFontSize } = useFontSize();
  const [isActive, setIsActive] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const speechRecognition = new (window as any).webkitSpeechRecognition();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = false;
    setRecognition(speechRecognition);

    speechRecognition.onresult = (event: any) => {
      const command = event.results[event.resultIndex][0].transcript.toLowerCase();
      if (command.includes("aumentar")) {
        increaseFontSize(); // Aumenta a fonte através do contexto
      } else if (command.includes("diminuir")) {
        decreaseFontSize(); // Diminui a fonte através do contexto
      }
    };

    return () => {
      speechRecognition.stop();
    };
  }, [increaseFontSize, decreaseFontSize]);

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key.toLowerCase() === 'e' && !isActive) {
      setIsActive(true);
      recognition.start(); // Inicia o reconhecimento de voz
    }
    if (event.key.toLowerCase() === 'r' && isActive) {
      setIsActive(false);
      recognition.stop(); // Para o reconhecimento de voz
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isActive, recognition]);

  return (
    <div>
      <p>
        Use 'E' para ativar o controle de voz para aumentar ou diminuir a fonte, e 'R' para desativar.
      </p>
    </div>
  );
};

export default FontControl;
