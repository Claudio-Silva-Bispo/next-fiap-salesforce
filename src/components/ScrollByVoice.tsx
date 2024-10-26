import { useEffect, useState } from 'react';

const ScrollByVoice = () => {
  const [isActive, setIsActive] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const componentIds = [
    'hero',
    'parceiros',
    'about',
    'contact',
    'contact-networks',
    'quote',
    'received-feedbacks',
    'accordion',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToNextComponent = () => {
    if (currentIndex < componentIds.length - 1) {
      const nextComponent = document.getElementById(componentIds[currentIndex + 1]);
      nextComponent?.scrollIntoView({ behavior: 'smooth' });
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const scrollToPreviousComponent = () => {
    if (currentIndex > 0) {
      const previousComponent = document.getElementById(componentIds[currentIndex - 1]);
      previousComponent?.scrollIntoView({ behavior: 'smooth' });
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.shiftKey && (event.key === 'D' || event.key === 'd') && isActive) {
      scrollToNextComponent();
    }
    if (event.shiftKey && (event.key === 'I' || event.key === 'i')) {
      scrollToPreviousComponent(); // Agora 'I' volta para o componente anterior
    }
    if (event.shiftKey && (event.key === 'G' || event.key === 'g')) {
      // Ativa a navegação por voz
      setIsActive((prev) => !prev);
      if (!isActive) {
        // mostrar um modal de explicação
        setShowInstructions(true);
        setCurrentIndex(0); // Reseta o índice ao ativar
      }
    }

    if (event.shiftKey && (event.key === 'F' || event.key === 'f' )) {
      setShowInstructions(false);
    }

    if (event.shiftKey && (event.key === 'J' || event.key === 'j' )) {
      setIsActive(false);
      setCurrentIndex(0);
    }
  };

  const listenForVoiceCommands = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const command = event.results[event.resultIndex][0].transcript.toLowerCase();
      if (command.includes("próximo")) {
        scrollToNextComponent();
      } else if (command.includes("voltar")) {
        scrollToPreviousComponent();
      }
    };

    recognition.start();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    
    if (isActive) {
      listenForVoiceCommands();
    }

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isActive, currentIndex]);

  const closeInstructionsModal = () => {
    setShowInstructions(false);
  };

  return (
    <div>
      <button 
        onClick={() => {
          setIsActive((prev) => !prev);
          if (!isActive) {
            setCurrentIndex(0); // Reseta o índice ao ativar
          }
        }}
        className={`fixed top-8 mt-8 left-10 bg-blue-500 text-white px-4 py-2 rounded ${isActive ? 'bg-red-500' : 'bg-blue-500'}`}
      >
        {isActive ? 'Desativar Navegação por Voz' : 'Ativar Navegação por Voz'}
      </button>
      {/*<p className="fixed mt-8 top-20 left-10 bg-white text-black px-4 py-2 rounded">
        Pressione 'D' para descer, 'I' para voltar, 'G' para ativar/desativar navegação por voz, 'J' para desativar completamente.
      </p>*/}

      {/* Modal de instruções */}
      {showInstructions && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Instruções de Navegação por Voz</h2>
            <p>Você ativou a navegação por voz.</p>
            <p>Comandos disponíveis:</p>
            <ul className="list-disc list-inside">
              <li>Diga "próximo" para descer para o próximo componente.</li>
              <li>Diga "voltar" para subir para o componente anterior.</li>
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

export default ScrollByVoice;
