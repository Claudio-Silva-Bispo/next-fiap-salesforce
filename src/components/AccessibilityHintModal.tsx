import { useEffect, useState, useRef } from 'react';

const AccessibilityHintModal = () => {
  const [isOpen, setIsOpen] = useState(false); // Começar com o modal fechado
  const [isReading, setIsReading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const stopReading = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Abrir o modal com Shift + S
      if (event.shiftKey && (event.key === 'S' || event.key === 's')) {
        event.preventDefault();
        setIsOpen(true);
      } 
      // Fechar o modal com Shift + F
      else if (event.shiftKey && (event.key === 'F' || event.key === 'f') && isOpen) {
        event.preventDefault();
        setIsOpen(false);
        stopReading();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !isReading) {
      setIsReading(true);
      const textToRead = `Bem-vindo! Nosso site possui recursos que podem facilitar a sua navegação. Ouça com atenção para aprender mais sobre este modelo.

      A qualquer momento, você pode pressionar algumas teclas para obter ajuda:

      Todos comandos precisam ser usados com o Shift + LETRA de ativação.

      Exemplo um: Shift + K: Ativar tema escuro.

      Demais:
      A: Alternar entre o menu aberto e fechado.
      C: Ativar/desativar o chat.
      D: Ativar scroll para baixo.
      F: Fechar o chat ou qualquer outro modal específico.
      G: Ativar Scroll na tela (rolar para cima ou para baixo).
      H: Abrir menu de suporte.
      I: Ativar scroll para cima.
      J: Desativar completamente o scroll pelo teclado.
      L: Ativar tema claro.
      K: Ativar tema escuro.
      M: Abrir/fechar o menu lateral direita.
      U: Desativar ou ativar fala no navegador.
      V: Ativar navegação por voz.
      Y: Ativar fala no menu de suporte
      Esc: Fechar o menu ou modal ativo.
      Espaco: Desativar menus.`;

      const speech = new SpeechSynthesisUtterance(textToRead);
      window.speechSynthesis.speak(speech);

      speech.onend = () => {
        setIsReading(false);
      };
    }
  }, [isOpen, isReading]);

  const closeModal = () => {
    setIsOpen(false);
    stopReading();
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white p-8 rounded-md max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Dicas de Acessibilidade</h2>
        <h3 className="text-xl font-bold mb-4 pt-3">Lista completa das teclas de atalho que podemos usar como ativadores para diferentes funcionalidades nas suas atividades:</h3>
        <h4 className="text-md font-bold mb-4 pt-3">Todos comandos precisam ser usados com o Shift + LETRA de ativação.</h4>
        <p className="text-md font-bold mb-4 pt-3">Exemplo um: Shift + K: Ativar tema escuro.</p>
        <p>A: Alternar entre o menu aberto e fechado.</p>
        <p>C: Ativar/desativar o chat.</p>
        <p>D: Ativar scroll para baixo.</p>
        <p>F: Fechar o chat ou qualquer outro modal específico.</p>
        <p>G: Ativar Scroll na tela (rolar para cima ou para baixo).</p>
        <p>H: Abrir menu de suporte.</p>
        <p>I: Ativar scroll para cima.</p>
        <p>J: Desativar completamente o scroll pelo teclado.</p>
        <p>L: Ativar tema claro.</p>
        <p>K: Ativar tema escuro.</p>
        <p>M: Abrir/fechar o menu lateral direita.</p>
        <p>U: Desativar ou ativar fala no navegador.</p>
        <p>V: Ativar navegação por voz.</p>
        <p>Y: Ativar fala no menu de suporte</p>
        <p>Esc: Fechar o menu ou modal ativo.</p>
        <p>Espaco: Desativar menus.</p>
        <span className='font-bold text-red-600'>Aperte Shift + F para fechar este modal.</span>
      </div>
    </div>
  );
};

export default AccessibilityHintModal;
