import React from 'react';
import { FaBroom, FaSoap, FaHome, FaBuilding, FaWarehouse, FaTruckMoving, FaDoorOpen, FaDoorClosed, FaArrowRight } from 'react-icons/fa';

const ServiceCarousel: React.FC = () => {
  const services = [
    { title: 'Regular Cleaning', description: 'Standard cleaning services for your home.', icon: FaBroom, details: 'Saiba mais' },
    { title: 'Deep Cleaning', description: 'Thorough cleaning for every nook and cranny.', icon: FaSoap, details: 'Saiba mais' },
    { title: 'Move In Cleaning', description: 'Cleaning services for your new home before you move in.', icon: FaHome, details: 'Saiba mais' },
    { title: 'Move Out Cleaning', description: 'Ensure your old home is spotless before you leave.', icon: FaDoorClosed, details: 'Saiba mais' },
    { title: 'Commercial Cleaning', description: 'Professional cleaning services for your business.', icon: FaBuilding, details: 'Saiba mais' },
    { title: 'Warehouse Cleaning', description: 'Specialized cleaning for large warehouse spaces.', icon: FaWarehouse, details: 'Saiba mais' },
    { title: 'Post-Construction Cleaning', description: 'Cleaning services after construction work.', icon: FaTruckMoving, details: 'Saiba mais' },
    { title: 'Event Cleaning', description: 'Cleaning services before and after events.', icon: FaDoorOpen, details: 'Saiba mais' },
  ];

  return (

    <section className='scrollbar-none p-6 bg-segunda'>

        <div className="bg-white text-gray-800 min-h-[75vh] p-3 flex justify-center items-center rounded-md">
                    <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5 b">
                        <img src="/assets/Service/imagem4.jpg" alt="Limpeza Profissional" className="object-cover w-full rounded-md xl:col-span-3 bg-primeira" />
                        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-white">
                            <span className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl pt-10">Serviços</span>
                            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl ">
                                Nosso compromisso é proporcionar uma experiência excepcional, cuidando de cada aspecto para que sua casa ou empresa seja mantida com a máxima qualidade e atenção, inclusive em situações especiais como mudanças.
                            </p>

                            <div className="flex flex-col s:flex-col sm:flex-row justify-start w-full gap-4">
                                <button
                                    type="button"
                                    className="w-full  px-8 py-3 text-lg font-semibold rounded bg-segunda text-white"
                                >
                                    Contato
                                </button>
                                <button
                                    type="button"
                                    className="w-full px-8 py-3 text-lg font-semibold rounded bg-quarta text-white"
                                >
                                    Orçamento
                                </button>
                            </div>
                        </div>

                        
                        
                    </div>
        </div>

        <div className="relative w-full flex gap-2 py-6 overflow-x-auto scrollbar-custom">
        {services.map((service, index) => (
            <div key={index} className="min-w-[38vh] sm:min-w-[60vh] h-80 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-800">
            <div className="flex justify-start mb-4">
                <service.icon className="text-4xl text-quinta" />
            </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <a href="/Service">{service.details}</a>
            </div>
            
        ))}

        </div>

        <div className='flex justify-end mb-3 pt-3 m-3'>
            <button className="p-2 bg-quinta rounded-full hover:bg-gray-300 text-white">
            <FaArrowRight />
            </button>
        </div>
    </section>
  );
};

export default ServiceCarousel;
