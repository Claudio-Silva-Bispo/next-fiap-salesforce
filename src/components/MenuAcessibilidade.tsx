import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMinus, faMoon, faPlus, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useFontSize } from '@/contexts/FontSizeContext';

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado que controla se o menu está aberto ou fechado
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado para o tema escuro
  const [isAudioEnabled, setIsAudioEnabled] = useState(true); // Estado para controlar se o áudio está habilitado
  const menuRef = useRef<HTMLDivElement>(null); // Referência para o menu
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize(); // Desestruturar do contexto de tamanho de fonte

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Alterna o estado do menu
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Fecha o menu se clicar fora dele
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.shiftKey && (event.key === 'M' || event.key === 'm')) {
      event.preventDefault();
      toggleMenu(); // Abre/fecha o menu com a tecla M
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle('bg-gray-800', newTheme);
      document.documentElement.classList.toggle('text-white', newTheme);
      return newTheme; // Retorna o novo estado do tema
    });
  };

  const interruptAudio = () => {
    const audioElements = document.querySelectorAll('audio');
    if (isAudioEnabled) {
      audioElements.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0; // Interrompe todos os elementos de áudio
      });
    }
    setIsAudioEnabled((prev) => !prev); // Alterna o estado do áudio
  };

  return (
    <div>
      <button
        onClick={toggleMenu} // Abre/fecha o menu ao clicar
        aria-expanded={isOpen} // Indica se o menu está aberto
        aria-controls="accessibility-menu"
        className="fixed right-4 top-1/3 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-lg z-50"
      >
        <FontAwesomeIcon icon={faCog} size="lg" />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          id="accessibility-menu"
          className="fixed right-0 top-0 w-[280px] h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0"
          role="dialog"
          aria-labelledby="accessibility-menu-title"
        >
          <button 
            onClick={toggleMenu} // Fecha o menu ao clicar no botão de fechar
            className="absolute top-4 right-4" 
            aria-label="Fechar menu de acessibilidade"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <h2 id="accessibility-menu-title" className="font-bold text-center my-4 text-gray-800">Acessibilidade</h2>
          <ul className="flex flex-col items-start space-y-4 px-10">
            <li className="flex items-center">
              <button onClick={increaseFontSize} className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Aumentar Fonte
              </button>
            </li>
            <li className="flex items-center">
              <button onClick={decreaseFontSize} className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={faMinus} className="mr-2" />
                Diminuir Fonte
              </button>
            </li>
            <li className="flex items-center">
              <span className="text-gray-700" style={{ fontSize: `${fontSize}px` }}>
                Fonte atual: {fontSize}px
              </span>
            </li>
            <li className="flex items-center">
              <button onClick={toggleTheme} className="text-gray-700 flex items-center">
                {isDarkTheme ? (
                  <FontAwesomeIcon icon={faSun} className="mr-2" />
                ) : (
                  <FontAwesomeIcon icon={faMoon} className="mr-2" />
                )}
                {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
              </button>
            </li>
            <li className='text-gray-800'>
              <a href="/ConfiguracaoPage">Personalização</a>
            </li>
            <li className='text-gray-800'>
              <a href='http://t.me/challengefiap_bot' target="_blank" rel="noopener noreferrer" className="flex items-center">
                <FontAwesomeIcon icon={faCog} className="mr-2" />
                ChatBot
              </a>
            </li>
            <li className='text-gray-800'>
              <a href="/Documentacao" className="flex items-center">
                <FontAwesomeIcon icon={faCog} className="mr-2" />
                Documentação
              </a>
            </li>
            <li className="flex items-center">
              <button onClick={interruptAudio} className="text-gray-700 flex items-center">
                <FontAwesomeIcon icon={isAudioEnabled ? faTimes : faCog} className="mr-2" />
                {isAudioEnabled ? 'Interromper Áudio' : 'Ativar Áudio'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;
