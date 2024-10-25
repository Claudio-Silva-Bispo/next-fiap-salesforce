import { useEffect, useState, useRef } from 'react';

const HelpModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRead, setShouldRead] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && (event.key === 'H' || event.key === 'h')) {
        setIsOpen(true); // Abre o modal ao apertar 'H'
      } else if (isOpen && event.shiftKey && (event.key === 'F' || event.key === 'f')) {
        setIsOpen(false); // Fecha o modal ao apertar 'F'
      } 
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const handleKeyPress = (event: KeyboardEvent) => {
        if (event.shiftKey && (event.key === 'Y' || event.key === 'y')) {
          setShouldRead(true);
        } else if (event.shiftKey && (event.key === 'U' || event.key === 'u')) {
          setShouldRead(false);
        }
      };
      
      window.addEventListener('keydown', handleKeyPress);

      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (shouldRead && !isReading) {
      setIsReading(true);
      const textToRead = `Este é o menu de ajuda.
        Você pode navegar usando o Tab.
        Aperte a tecla SHIFT + V para habilitar a navegação por voz.
        Aperte SHIFT + S para abrir o suporte de acessibilidade.`;
      
      const speech = new SpeechSynthesisUtterance(textToRead);
      window.speechSynthesis.speak(speech);
        
      // Marcar a leitura como concluída quando terminar
      speech.onend = () => {
        setIsReading(false);
      };
    }
  }, [shouldRead, isReading]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }
    
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Função para interromper a fala
  const stopReading = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-md max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Ajuda de Acessibilidade</h2>
        <p>Você quer que a explicação seja lida em voz alta? Aperte Y para sim ou U para não.</p>
        <p className="mt-6">Navegue usando o Tab.</p>
        <p>Aperte V para habilitar a navegação de página por voz.</p>
        <p>Aperte S para abrir o suporte de acessibilidade.</p>
        <p className="mt-6 font-bold">Pressione F para fechar este modal.</p>
      </div>
    </div>
  );
};

export default HelpModal;
