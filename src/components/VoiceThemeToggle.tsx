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
      if (event.key === 'k') {
        setIsDarkTheme(true);
        document.documentElement.classList.add('bg-gray-800', 'text-white');
      } else if (event.key === 'l') {
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
      <button onClick={toggleTheme} className="p-2 bg-gray-200 rounded-md">
        {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
      </button>
      <p className="mt-2">Pressione K para tema escuro e L para tema claro.</p>
    </div>
  );
};

export default VoiceThemeToggle;
