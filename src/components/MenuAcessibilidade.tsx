import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMinus, faMoon, faPlus, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useFontSize } from '@/contexts/FontSizeContext';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
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
    if (event.key === 'Escape') {
      setIsOpen(false);
    }

    if (event.key === 's') { // Abrir o menu com a tecla 'S'
      setIsOpen(true);
    }

    if (event.key === 'f') { // Fechar o menu com a tecla 'F'
      setIsOpen(false);
    }

    if (event.shiftKey && event.key === 'A') {
      toggleMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (!isDarkTheme) {
      document.documentElement.classList.add('bg-gray-800', 'text-white');
    } else {
      document.documentElement.classList.remove('bg-gray-800', 'text-white');
    }
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
        className="fixed right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full shadow-lg z-50"
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
            onClick={toggleMenu} 
            className="absolute top-4 right-4" 
            aria-label="Fechar menu de acessibilidade"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <h2 id="accessibility-menu-title" className="font-bold text-center my-4 text-gray-800">Acessibilidade</h2>
          <ul className="flex flex-col items-start space-y-4 px-2">
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;
