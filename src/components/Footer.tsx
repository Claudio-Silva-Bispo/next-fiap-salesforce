import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp, FaSms } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="footercontent" className="min-w-full">
      <div className="container mx-auto p-5 min-w-full">
        {/* Alinhamento da imagem, textos e ícones */}
        <div className="flex flex-col gap-5 md:flex-row justify-between items-center mb-5 w-full">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              width={100}
              height={100}
              src="/assets/Footer/salesforce-logo.svg"
              alt="Logo da empresa"
              className="w-32"
            />
          </div>

          {/* Links de navegação */}
          <div className="flex justify-center items-center gap-6">
            <button className="hover:text-gray-400 text-start">Terms</button>
            <button className="hover:text-gray-400 text-start"><a href="/Documetation">Documentation</a></button>
            <button className="hover:text-gray-400 text-start"><a href="/AboutCompany">About</a></button>
          </div>

          {/* Ícones de redes sociais */}
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/cacaulovers" target="_blank" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-quinta hover:bg-gray-50 text-gray-50 hover:text-blue-500">
              <FaInstagram className="h-4 w-4 md:h-6 md:w-6" />
            </a>
            <a href="mailto:contato@cacaushow.com.br" title="Email" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-quinta hover:bg-gray-50 text-gray-50 hover:text-blue-500">
              <FaEnvelope className="h-4 w-4 md:h-6 md:w-6" />
            </a>
            <a href="tel:+5511999999999" title="Telefone" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-quinta hover:bg-gray-50 text-gray-50 hover:text-blue-500">
              <FaPhone className="h-4 w-4 md:h-6 md:w-6" />
            </a>
            <a href="tel:+5511999999999" title="WhatsApp" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-quinta hover:bg-gray-50 text-gray-50 hover:text-blue-500">
              <FaWhatsapp className="h-4 w-4 md:h-6 md:w-6" />
            </a>
            <a href="tel:+5511999999999" title="SMS" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-quinta hover:bg-gray-50 text-gray-50 hover:text-blue-500">
              <FaSms className="h-4 w-4 md:h-6 md:w-6" />
            </a>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Texto de direitos reservados */}
        <div className="text-center text-sm">
          © Copyright 2024. Todos os direitos reservados ao grupo Tokito Techs. projeto Salesforce + FIAP
        </div>
      </div>
    </footer>
  );
};

export default Footer;
