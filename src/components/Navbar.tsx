import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBuilding, faPhone, faCalendarAlt, faCalendarTimes, faComments, faChevronDown, faUsers, faThumbsUp, faShareAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const menuItems = [
    { item: 'Home', path: '/', icon: faHome },
    { item: 'Sobre nós', path: '/AboutCompany', icon: faBuilding },
    { item: 'Contatos', path: '#contact', icon: faPhone },
    { item: 'Orçamento', path: '#quote', icon: faCalendarAlt },
    { item: 'Serviços', path: '#services', icon: faCalendarTimes },
    { item: 'Feedback', path: '/Feedback', icon: faComments },
    { item: 'Testimonials', path: '#testimonials', icon: faThumbsUp },
    { item: 'Redes Sociais', path: '#social-media', icon: faShareAlt },
    { item: 'Time', path: '#team', icon: faUsers },
    { item: 'Galeria', path: '/Gallery', icon: faGlobe },
  ];

  const sections = [

    {
      title: 'Sobre nós',
      icon: faBuilding,
      description: 'Aprenda mais sobre nós',
      path: '/AboutCompany',
    },
    {
      title: 'Serviços',
      icon: faCalendarTimes,
      description: 'Lista de serviços',
      path: '#services',
    },
    {
      title: 'Contato',
      icon: faPhone,
      description: 'Get in touch with us',
      path: '#contact',
    },
    {
      title: 'Feedback',
      icon: faComments,
      description: 'Deixe seu feedback',
      path: '/Feedback',
    },
    {
      title: 'Testimonials',
      icon: faThumbsUp,
      description: 'O que nossos clientes andam falando',
      path: '#testimonials',
    },
    {
      title: 'Redes Sociais',
      icon: faShareAlt,
      description: 'Siga nossa empresa nas redes',
      path: '#social-media',
    },
    {
      title: 'Time',
      icon: faUsers,
      description: 'Conheça nosso time',
      path: '/Team',
    },
    
    {
      title: 'Newsletter',
      icon: faEnvelope,
      description: 'Receba novidades e promoções',
      path: '#newsletter',
    },
    {
      title: 'Galeria',
      icon: faGlobe,
      description: 'Fotos dos principais serviços',
      path: '#global-reach',
    },
  ];

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

      if (router.pathname === '/Schedule' || router.pathname === '/Event' || router.pathname === '/Gallery' || router.pathname === '/Team') {
          setIsHeroVisible(false);
          return;
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.pathname]);

  return (
    <header className={`p-4 fixed top-0 w-full z-50 ${isHeroVisible ? 'bg-transparent text-white hover:text-gray-700' : 'bg-segunda'}`} >
      <div className="container flex justify-between h-10 mx-auto w-full">
        <div className="flex h-10 w-40">
          <a href="/"><img src={""} alt="Logo da empresa" /></a>
        </div>
        <div className="hidden lg:flex items-center space-x-3 text-lg">
          <a href="/" className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </a>
          <a href="#quote" className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Orçamento</span>
          </a>
          <div className="relative" ref={dropdownRef}>
            <button onClick={handleDropdownToggle} className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center space-x-2">
              <span>Seções</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] bg-white shadow-lg rounded-md z-50">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {sections.map((section) => (
                    <a key={section.title} href={section.path} className="flex items-start space-x-3 p-2 hover:bg-gray-100 rounded-md">
                      <div className="bg-gray-200 p-2 rounded-md w-10 h-10 flex items-center justify-center">
                        <FontAwesomeIcon icon={section.icon} className="text-gray-700" />
                      </div>
                      <div>
                        <div className="font-semibold">{section.title}</div>
                        <div className="text-sm text-gray-600">{section.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
        </div>
        <div className="hidden lg:flex items-center">
          <a href="tel:+5511999999999" className="px-4 py-2 bg-gray-500 text-white rounded-md">Contato +(206) 9999-8888</a>
        </div>
        <button onClick={toggleMobileMenu} className="lg:hidden p-4 text-gray-800">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 z-40 flex flex-col lg:hidden">
          <button onClick={toggleMobileMenu} className="self-end text-gray-800">
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

          <ul className="flex flex-col items-start space-y-4 px-6">
            {menuItems.map((menuItem) => (
              <li key={menuItem.item} className="w-full border-b border-white last:border-none">
                <a href={menuItem.path} className="text-lg text-white flex items-center space-x-3 py-3">
                  <FontAwesomeIcon icon={menuItem.icon} />
                  <span>{menuItem.item}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto p-5 w-full flex justify-center">
            <img src={""} alt="Logo da empresa" className="w-44 h-auto" />
          </div>
        </div>
      )}
    </header>
  );
}
