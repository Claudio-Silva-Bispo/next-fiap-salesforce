// src/contexts/ConfiguracaoContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ConfiguracaoContextType {
    backgroundClass: string;
    textClass: string;
    setBackgroundClass: (bgClass: string) => void;
    setTextClass: (textClass: string) => void;
}

const ConfiguracaoContext = createContext<ConfiguracaoContextType | undefined>(undefined);

export const ConfiguracaoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [backgroundClass, setBackgroundClass] = useState<string>('bg-white');
    const [textClass, setTextClass] = useState<string>('text-black');

    useEffect(() => {
        const savedBackgroundClass = localStorage.getItem('backgroundClass') || 'bg-white';
        const savedTextClass = localStorage.getItem('textClass') || 'text-black';
        setBackgroundClass(savedBackgroundClass);
        setTextClass(savedTextClass);
    }, []);

    useEffect(() => {
        localStorage.setItem('backgroundClass', backgroundClass);
    }, [backgroundClass]);

    useEffect(() => {
        localStorage.setItem('textClass', textClass);
    }, [textClass]);

    return (
        <ConfiguracaoContext.Provider value={{ backgroundClass, textClass, setBackgroundClass, setTextClass }}>
            {children}
        </ConfiguracaoContext.Provider>
    );
};

export const useConfiguracao = () => {
    const context = useContext(ConfiguracaoContext);
    if (context === undefined) {
        throw new Error('useConfiguracao deve ser usado dentro do ConfiguracaoProvider');
    }
    return context;
};
