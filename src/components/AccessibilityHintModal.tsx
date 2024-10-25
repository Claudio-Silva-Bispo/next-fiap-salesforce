import { useEffect, useState, useRef } from 'react';

const AccessibilityHintModal = () => {
  const [isOpen, setIsOpen] = useState(true); // Abre automaticamente ao carregar a página
  const [isReading, setIsReading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Função para parar a leitura
  const stopReading = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'u') {
        stopReading(); // Para a leitura ao pressionar 'U'
      } else if (event.key.toLowerCase() === 'f') {
        setIsOpen(false); // Fecha o modal ao pressionar 'F'
        stopReading();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen && !isReading) {
      setIsReading(true);
      const textToRead = `Bem-vindo! Nosso site possui recursos que podem facilitar a sua navegação. Ouça com atenção para aprender mais sobre este modelo.
      A qualquer momento, você pode pressionar algumas teclas para obter ajuda:
      
      Aperte H para abrir o menu de suporte.
      Aperte Y para ativar a leitura por voz.
      Aperte U uma vez para desativar a leitura ou duas vezes para parar o suporte.
      Aperte F para fechar este modal.
      Aperte V para navegar entre páginas por voz
      Aperte E para ativar mudança de fontes e r para desativar.
      Saiba todos os comandos na nossa página de Documentação.`;

      const speech = new SpeechSynthesisUtterance(textToRead);
      window.speechSynthesis.speak(speech);

      speech.onend = () => {
        setIsReading(false); // Marca a leitura como concluída
      };
    }
  }, [isOpen, isReading]);

  const closeModal = () => {
    setIsOpen(false);
    stopReading(); // Para a leitura ao fechar o modal
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal(); // Fecha ao clicar fora
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white p-8 rounded-md max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Dicas de Acessibilidade</h2>
        <p>Aperte H para abrir o menu de suporte.</p>
        <p>Aperte Y para ativar a leitura por voz.</p>
        <p>Aperte U uma vez para desativar a leitura ou U duas vezes para parar o suporte.</p>
        <p>Aperte F para fechar este modal.</p>
      </div>
    </div>
  );
};

export default AccessibilityHintModal;
