import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBuilding, faPhone, faCalendarAlt, faCalendarTimes, faComments, faChevronDown, faUsers, faThumbsUp, faShareAlt, faEnvelope, faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
// Instalar npm install primeicons
// Desinstalar npm uninstall primeicons
//import 'primeicons/primeicons.css';
import Link from 'next/link';
import { ReadingContext } from './RightSidebar'; 
import  FocusableComponent from '../components/FocusableComponent';
import TextReader from "./TextReader";

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeHash, setActiveHash] = useState('');
  const router = useRouter();
  const { isReadingEnabled } = useContext(ReadingContext);

  const menuItems = [
    { item: 'Home', path: '/', icon: faHome },
    { item: 'Login', path: '/Login', icon: faBuilding },
    { item: 'Contatos', path: '/Contato', icon: faPhone },
    { item: 'Produtos', path: '/FormularioDescoberta', icon: faCalendarAlt },
    { item: 'Dashboard', path: '/Dashboard', icon: faCalendarTimes },
    { item: 'Feedback', path: '/Feedback', icon: faComments },
    { item: 'Dicas', path: '/Dicas', icon: faThumbsUp },
    { item: 'Time', path: '/Team', icon: faUsers },
    { item: 'Documentação', path: '/Documentacao', icon: faGlobe },
    { item: 'Acessibilidade', path: '/SuporteAcessibilidade', icon: faGlobe },
  ];

  const sections = [

    {
      title: 'Login',
      icon: faBuilding,
      description: 'Faça login agora',
      path: '/Login',
    },
    {
      title: 'Produtos',
      icon: faCalendarTimes,
      description: 'Acesse nosso formulário de sugestões de novos produtos',
      path: '/FormularioDescoberta',
    },
    {
      title: 'Contatos',
      icon: faPhone,
      description: 'Lista com todos os contatos',
      path: '/Contato',
    },
    {
      title: 'Dashboard',
      icon: faComments,
      description: 'Saiba tudo para o seu negócio',
      path: '/Dashboard',
    },
    {
      title: 'Feedbacks',
      icon: faThumbsUp,
      description: 'O que nossos clientes andam falando',
      path: '/Feedback',
    },
    {
      title: 'Dicas',
      icon: faShareAlt,
      description: 'Fique ligado nas melhores dicas.',
      path: '/Dicas',
    },
    {
      title: 'Time',
      icon: faUsers,
      description: 'Conheça nosso time',
      path: '/Time',
    },
    
    {
      title: 'Novidades',
      icon: faEnvelope,
      description: 'Fique por dentro das novidades',
      path: '/Novidade',
    },
    {
      title: 'Documentação',
      icon: faGlobe,
      description: 'Saiba tudo que foi feito',
      path: '/Documentacao',
    },
  ];

  // Rotas 

  const handleHashLinkClick = (hash: string) => {
    if (hash.startsWith('#')) {
      if (router.pathname === '/') {
        // Se estiver na home, rolar para a seção
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Caso contrário, navega para a home e rola para a seção
        router.push(`/`).then(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else {
      router.push(hash);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('#habilitar-menu') as HTMLElement | null;

      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight - 100) {
          setIsHeroVisible(false);
        } else {
          setIsHeroVisible(true);
        }
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.pathname]);

  return (
    <header className={`p-4 fixed top-0 w-full z-50 hidden md:flex`} >
      <div className="container flex items-center justify-between h-10 mx-auto w-full">
        <div className="flex items-center justify-center flex-grow space-x-3 text-lg">
          <TextReader text="Inicio" isReadingEnabled={isReadingEnabled}>
            <FocusableComponent id="text1" tabIndex={1}>
                <Link href="/" className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
                  <FontAwesomeIcon icon={faHome} />
                  <span>Inicio</span>
                </Link>
            </FocusableComponent>
          </TextReader>

          <TextReader text="Contato" isReadingEnabled={isReadingEnabled}>
            <FocusableComponent id="text2" tabIndex={1}>
              <Link  href="/Contato" className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2" onClick={() => handleHashLinkClick('#FormQuote')}>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>Contato</span>
              </Link>
            </FocusableComponent>
          </TextReader>

          <TextReader text="Acessibilidade" isReadingEnabled={isReadingEnabled}>
            <FocusableComponent id="text3" tabIndex={2}>
              <Link href="/Documentacao" className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2" onClick={() => handleHashLinkClick('/SuporteAcessibilidade')}>
                <FontAwesomeIcon icon={faHeart} />
                <span>Acessibilidade</span>
              </Link>
            </FocusableComponent>
          </TextReader>

          <div className="relative" ref={dropdownRef}>
            <button onClick={handleDropdownToggle} className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
              <TextReader text="Sessões" isReadingEnabled={isReadingEnabled}>
                <FocusableComponent id="text4" tabIndex={3}>
                  <span>Seções</span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </FocusableComponent>
            </TextReader>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] bg-white shadow-lg rounded-md z-50">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {sections.map((section) => (
                    <Link key={section.title} href={section.path} className="flex items-start space-x-3 p-2 hover:bg-gray-100 rounded-md" onClick={() => handleHashLinkClick(section.path)}>
                      <div className="bg-gray-200 p-2 rounded-md w-10 h-10 flex items-center justify-center">
                        <FontAwesomeIcon icon={section.icon} className="text-gray-700" />
                      </div>
                      <div>
                        <div className="font-semibold">{section.title}</div>
                        <div className="text-sm text-gray-600">{section.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
        </div>
        <div className="hidden lg:flex items-center">
          <TextReader text="Ligue agora" isReadingEnabled={isReadingEnabled}>
            <FocusableComponent id="text5" tabIndex={4}>
              <a href="tel:+5511999999999" className="px-4 py-2 bg-gray-500 text-white rounded-md">Contato 0800 878-5109</a>
            </FocusableComponent>
          </TextReader>
        </div>
        <button onClick={toggleMobileMenu} className="lg:hidden p-4 text-gray-800">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 z-40 flex flex-col lg:hidden">
          <button onClick={toggleMobileMenu} className="self-end text-gray-800 pt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className='text-white'/>
            </svg>
          </button>

          <ul className="flex flex-col items-start space-y-4 px-3">
            {menuItems.map((menuItem) => (
              <li key={menuItem.item} className="w-full border-b border-white last:border-none">
                <Link href={menuItem.path} className="text-md text-white flex items-center space-x-3 py-3" onClick={() => handleHashLinkClick(menuItem.path)}>
                  <FontAwesomeIcon icon={menuItem.icon} />
                  <span>{menuItem.item}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto p-5 w-full m:flex m:justify-center hidden">
            <Image width={100} height={100} src={""} alt="Logo da empresa" className="w-44 h-auto hidden" />
          </div>
        </div>
      )}
    </header>
  );
}
