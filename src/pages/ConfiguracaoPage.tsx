// src/pages/ConfiguracaoPage.tsx
import React from 'react';
import { useConfiguracao } from '../contexts/ConfiguracaoContext';

const ConfiguracaoPage: React.FC = () => {
    const { backgroundClass, textClass, setBackgroundClass, setTextClass } = useConfiguracao();

    return (
        <div className={`${backgroundClass} ${textClass} min-h-screen w-full p-6 border flex flex-col justify-center items-center`}>
            <h1 className="text-6xl mb-4">Configurações de Aparência</h1>
            <div className="mb-4">
                <h2 className="text-xl mb-5">Selecione a Cor de Fundo:</h2>
                <div className="flex gap-4">
                    {['bg-white', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900', 'bg-blue-400', 'bg-red-400', 'bg-yellow-400', 'bg-green-400'].map(bgClass => (
                        <button
                            key={bgClass}
                            className={`w-10 h-10 ${bgClass}`}
                            onClick={() => setBackgroundClass(bgClass)}
                        />
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-xl mb-5">Selecione a Cor do Texto:</h2>
                <div className="flex gap-4">
                    {['text-black', 'text-gray-700', 'text-gray-500', 'text-gray-300', 'text-white', 'text-red-400', 'text-blue-400', 'text-yellow-400', 'text-green-400'].map(textClass => (
                        <button
                            key={textClass}
                            className={`p-2 border ${textClass}`}
                            onClick={() => setTextClass(textClass)}
                        >
                            {textClass.split('-')[1]}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConfiguracaoPage;
