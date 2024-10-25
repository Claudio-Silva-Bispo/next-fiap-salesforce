// contexts/FontSizeContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface FontSizeContextType {
  fontSize: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<number>(16); // Tamanho padrão em pixels

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`; // Define o tamanho da fonte na raiz
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize(prevSize => Math.min(prevSize + 2, 32)); // Limita o aumento a 32px
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => Math.max(prevSize - 2, 10)); // Limita a diminuição a 10px
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
};
