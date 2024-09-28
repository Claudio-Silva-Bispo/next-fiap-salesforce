import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import logo from '../../public/assets/Navbar/logo-alves-cleaning.png';

export default function Navbar(){
  return (
    
    <header className="p-4 bg-white text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
            
            <img src={logo.src} alt="Logo of company" />
            <ul className="items-stretch hidden space-x-3 lg:flex text-lg">
              <li className="flex">
                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-">Home</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border- text-primeira border-quarta">About</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-">Contact</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-">Services</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-">Testimonials</a>
              </li>
            </ul>
            
        </div>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="px-8 py-3 font-semibold rounded bg-primeira text-gray-50 text-lg">Contact +(980)273-9078</button>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
  </header>
  );
}
