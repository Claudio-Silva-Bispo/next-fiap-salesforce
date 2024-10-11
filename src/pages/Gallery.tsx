import React, { useState } from 'react';

const services = {
  rooms: [
    { id: 1, name: 'Cozinha', images: ['imagem-um.jpg', 'imagem-dois.jpg'] },
    { id: 2, name: 'Banheiro', images: ['imagem-tres.jpg', 'imagem-quatro.jpg'] },
    { id: 3, name: 'Sala', images: ['imagem-cinco.jpg'] },
    { id: 4, name: 'Quarto', images: ['imagem-seis.jpg', 'imagem-sete.jpg', 'imagem-oito.jpg'] },
    { id: 5, name: 'Demais', images: ['imagem-nove.jpg', 'imagem-dez.jpg'] }
  ]
};

export default function Gallery() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedRoomIndex((prevIndex) =>
      prevIndex === 0 ? services.rooms.length - 1 : prevIndex - 1
    );
    scrollToTop();
  };

  const handleNextClick = () => {
    setSelectedRoomIndex((prevIndex) =>
      prevIndex === services.rooms.length - 1 ? 0 : prevIndex + 1
    );
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const selectedRoom = services.rooms[selectedRoomIndex];
  const { name } = selectedRoom;

  return (
    <div>
      {/* Seção do nome e setas de navegação */}
      <section className="py-6 bg-[#111827] pt-32">
        <div className="container mx-auto text-center mb-8">
          <div className="flex justify-center items-center">
            <button
              onClick={handlePrevClick}
              className="p-2 bg-white text-black rounded-l-full mr-4"
            >
              Anterior
            </button>
            <h2 className="text-white text-3xl font-bold">{name}</h2>
            <button
              onClick={handleNextClick}
              className="p-2 bg-white text-black rounded-r-full ml-4"
            >
              Próximo
            </button>
          </div>
          
        </div>

        {/* Seção da galeria de imagens */}
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img src="/assets/Carrosel/imagem-um.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/imagem-cinco.jpg" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/imagem-tres.jpg" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/imagem-quatro.jpg" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/imagem-seis.jpg" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/imagem-sete.jpg" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/imagem-oito.jpg" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/imagem-nove.jpg" />
          <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/imagem-dez.jpg" />
          <img src="/assets/Carrosel/imagem-dois.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
        </div>

        {/* Botões de navegação na parte inferior */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handlePrevClick}
            className="p-2 bg-gray-700 text-white rounded-l-full"
          >
            Anterior
          </button>
          <button
            onClick={handleNextClick}
            className="p-2 bg-gray-700 text-white rounded-r-full"
          >
            Próximo
          </button>
        </div>
      </section>
    </div>
  );
}
