import React, { useState, useEffect } from 'react';

const VoiceThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    if (!isDarkTheme) {
      document.documentElement.classList.add('bg-gray-800', 'text-white');
    } else {
      document.documentElement.classList.remove('bg-gray-800', 'text-white');
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.shiftKey && (event.key === 'K' || event.key === 'k')) {
        event.preventDefault();
        setIsDarkTheme(true);
        document.documentElement.classList.add('bg-gray-800', 'text-white');
      } else if (event.shiftKey && (event.key === 'L' || event.key === 'l')) {
        event.preventDefault();
        setIsDarkTheme(false);
        document.documentElement.classList.remove('bg-gray-800', 'text-white');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDarkTheme]);

  return (
    <div>
      <button onClick={toggleTheme} className="p-2 bg-gray-200 rounded-md hidden">
        {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
      </button>
      <p className="mt-2 hidden">Pressione K para tema escuro e L para tema claro.</p>
    </div>
  );
};

export default VoiceThemeToggle;
