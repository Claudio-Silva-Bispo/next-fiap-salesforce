import React, { useState } from 'react';
import TextReaderContext from './TextReaderContext'; // ajuste o caminho conforme necessário

const TextReaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <TextReaderContext.Provider value={{ isSpeaking, setIsSpeaking }}>
      {children}
    </TextReaderContext.Provider>
  );
};

export default TextReaderProvider;
