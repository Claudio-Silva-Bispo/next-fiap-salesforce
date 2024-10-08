import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBuilding, faPhone, faCalendarAlt, faCalendarTimes, faComments } from '@fortawesome/free-solid-svg-icons';
import logo from '../../public/assets/Navbar/Logo-novo-dois.png';

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { item: 'Home', path: '/', icon: faHome },
    { item: 'About Us', path: '#about', icon: faBuilding },
    { item: 'Contact', path: '#contact', icon: faPhone },
    { item: 'Quote', path: '#quote', icon: faCalendarAlt },
    { item: 'Services', path: '#services', icon: faCalendarTimes },
    { item: 'Feedback', path: '/Feedback', icon: faComments },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <header className="p-4 bg-white text-gray-800 fixed top-0 w-full z-50">
      <div className="container flex justify-between h-10 mx-auto">
        <div className="flex h-10 w-40">
          <a href="/"><img src={logo.src} alt="Logo of company" /></a>
        </div>
        <div className="hidden lg:flex items-center space-x-3 text-lg">
          {menuItems.map((menuItem) => (
            <a key={menuItem.item} href={menuItem.path} className="px-4 py-2">
              {menuItem.item}
            </a>
          ))}
        </div>
        <button onClick={toggleMobileMenu} className="lg:hidden p-4 text-gray-800">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-primeira z-40 flex flex-col lg:hidden">
          <button onClick={toggleMobileMenu} className="self-end p-4 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
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
            <img src={logo.src} alt="Logo" className="w-24 h-auto" />
          </div>
        </div>
      )}
    </header>
  );
}
