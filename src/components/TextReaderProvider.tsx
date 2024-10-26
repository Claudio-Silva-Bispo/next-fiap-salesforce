import React, { useState } from 'react';
import TextReaderContext from '../contexts/TextReaderContext'; 

const TextReaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <TextReaderContext.Provider value={{ isSpeaking, setIsSpeaking }}>
      {children}
    </TextReaderContext.Provider>
  );
};

export default TextReaderProvider;
