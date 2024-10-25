import React, { useState, useEffect, createContext, useContext } from 'react';
import { FolderMinusIcon, MoonIcon, GlobeAltIcon, ArrowUpIcon, ArrowDownIcon, ChatBubbleBottomCenterIcon, MegaphoneIcon, ComputerDesktopIcon, LockClosedIcon } from '@heroicons/react/20/solid';
import { useChangeLanguage } from './useChangeLanguage';

// Crie um contexto para o estado de leitura
const ReadingContext = createContext({
    isReadingEnabled: true,
    toggleReading: () => {},
    disableReading: () => {},
});

export const useReading = () => useContext(ReadingContext);

const solutions = [
    { name: 'Documentação', description: 'Conheça o que foi criado e como utilizar cada recurso para acessibilidade', href: '/Documentation', icon: FolderMinusIcon },
    { name: 'Tema', description: 'Defina entre claro ou escuro', href: '#', icon: MoonIcon, action: 'toggleDarkMode' },
    { name: 'Idioma', description: 'Defina o idioma da sua página', href: '/Idioma', icon: GlobeAltIcon, action: 'ChangeLanguage' },
    { name: 'Aumentar fonte', description: 'Defina o tamanho da fonte usando a seta para cima para aumentar a fonte', href: '#', icon: ArrowUpIcon, action: 'toggleFontIncrease' },
    { name: 'Diminuir fonte', description: 'Defina o tamanho da fonte usando seta para baixo para diminuir a fonte', href: '#', icon: ArrowDownIcon, action: 'toggleFontDecrease' },
    { name: 'ChatBot', description: 'Contato 24 horas por dia, sobre qualquer assunto.', href: 'http://t.me/challengefiap_bot', icon: ChatBubbleBottomCenterIcon, action: 'CustomChat' },
    { name: 'Suporte Fala', description: 'Interromper a leitura de tela.', href: '#', icon: MegaphoneIcon, action: 'toggleReading' },
    { name: 'Desativar Leitor de Tela', description: 'Desativa o leitor de tela completamente.', href: '#', icon: LockClosedIcon, action: 'disableReading' },
    { name: 'Configurações', description: 'Personalize a aparência do site.', href: '/Settings', icon: ComputerDesktopIcon },
];

const Sidebar: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const { isReadingEnabled, toggleReading, disableReading } = useReading();

    const [isFontUpEnabled, setIsFontUpEnabled] = useState(false);
    const [isFontDownEnabled, setIsFontDownEnabled] = useState(false);

    const { isLanguageOn, toggleAlterLanguage } = useChangeLanguage();
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const toggleFontIncrease = () => {
        setIsFontUpEnabled(prevState => {
            const newState = !prevState;
            localStorage.setItem('isFontUpEnabled', String(newState));
            return newState;
        });
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('isFontUpEnabled');
        setIsFontUpEnabled(storedValue === 'true');
    }, []);

    const toggleFontDecrease = () => {
        setIsFontDownEnabled(prevState => {
            const newStateDecrease = !prevState;
            localStorage.setItem('isFontDownEnabled', String(newStateDecrease));
            return newStateDecrease;
        });
    };

    useEffect(() => {
        const storedValueDecrease = localStorage.getItem('isFontDownEnabled');
        setIsFontDownEnabled(storedValueDecrease === 'true');
    }, []);

    const handleClick = (action: string | undefined, href: string) => {
        if (!action) return;

        switch (action) {
            case 'toggleDarkMode':
                const htmlElement = document.documentElement;
                const isDarkMode = htmlElement.classList.contains('dark');
                htmlElement.classList.toggle('dark', !isDarkMode);
                break;

            case 'toggleFontIncrease':
                toggleFontIncrease();
                break;

            case 'toggleFontDecrease':
                toggleFontDecrease();
                break;

            case 'ChangeLanguage':
                toggleAlterLanguage();
                break;

            case 'CustomChat':
                setIsChatOpen(true);
                break;

            case 'toggleReading':
                toggleReading();
                break;

            case 'disableReading':
                disableReading();
                break;

            default:
                console.log('Ação não reconhecida:', action);
        }
    };

    return (
        <nav
            className={`fixed ${isMobile ? 'bottom-0 left-0 w-full flex justify-between' : 'top-0 right-0'} bg-gray-800 p-4 ${isMobile ? 'md:hidden' : 'hidden md:flex md:flex-col md:justify-start md:h-full'}`}
            onMouseEnter={() => !isMobile && setExpanded(true)}
            onMouseLeave={() => !isMobile && setExpanded(false)}
            onClick={toggleExpand}
        >
            {solutions.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className="text-white flex items-center p-2 hover:bg-gray-700"
                    onClick={() => handleClick(item.action, item.href)}
                >
                    <item.icon className="h-6 w-6 mr-2" />
                    <span className={expanded && !isMobile ? 'block' : 'hidden'}>{item.name}</span>
                </a>
            ))}
        </nav>
    );
};

export default Sidebar;
export { ReadingContext };
