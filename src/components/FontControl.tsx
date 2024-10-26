import React, { useEffect, useState } from 'react';
import { useFontSize } from '@/contexts/FontSizeContext';

const FontControl = () => {
  const { increaseFontSize, decreaseFontSize } = useFontSize();
  const [isActive, setIsActive] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const speechRecognition = new (window as any).webkitSpeechRecognition();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = false;
    setRecognition(speechRecognition);

    speechRecognition.onresult = (event: any) => {
      const command = event.results[event.resultIndex][0].transcript.toLowerCase();
      if (command.includes("aumentar")) {
        increaseFontSize(); // Aumenta a fonte
      } else if (command.includes("diminuir")) {
        decreaseFontSize(); // Diminui a fonte
      }
    };

    return () => {
      speechRecognition.stop();
    };
  }, [increaseFontSize, decreaseFontSize]);

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.shiftKey && (event.key === 'E' || event.key === 'e') && !isActive) {
      setShowInstructions(true);
      setIsActive(true);
      recognition.start(); 
    }
    if ( event.shiftKey && (event.key === 'R' || event.key === 'r') && isActive) {
      setIsActive(false);
      recognition.stop();
      setShowInstructions(false); // Fecha o modal ao desativar
    }

    if (event.shiftKey && (event.key === 'F' || event.key === 'f')) {
      setShowInstructions(false); // Fecha o modal ao pressionar Shift + F
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isActive, recognition]);

  const closeInstructionsModal = () => {
    setShowInstructions(false);
  };

  return (
    <div>
      <p className='hidden'>
        Use 'E' para ativar o controle de voz para aumentar ou diminuir a fonte, e 'R' para desativar.
      </p>

      {/* Modal de instruções */}
      {showInstructions && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeInstructionsModal} // Fecha o modal ao clicar fora
        >
          <div
            className="bg-white p-8 rounded-md max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Impede o clique dentro do modal de fechá-lo
          >
            <h2 className="text-2xl font-bold mb-4">Instruções de Navegação por Voz</h2>
            <p>Você ativou a navegação por voz.</p>
            <p>Comandos disponíveis:</p>
            <ul className="list-disc list-inside">
              <li>Diga "Aumentar" para aumentar as fontes e aguarde.</li>
              <li>Diga "Diminuir" para reduzir as fontes e aguarde.</li>
            </ul>
            <button
              onClick={closeInstructionsModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FontControl;
