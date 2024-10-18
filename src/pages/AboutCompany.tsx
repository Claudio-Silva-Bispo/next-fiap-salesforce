import React from 'react';
import Image from 'next/image';

export default function AboutCompany() {
    return (
        <div className="bg-[#DEE8FE] py-12" id='sobre-empresa'>
            <div className="container mx-auto px-6 lg:px-20 mt-10">
                
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    
                    <div className='flex flex-col justify-center items-center gap-10'>
                        
                        <div>
                            <h1 className="text-5xl font-bold mb-3 text-gray-700 ">Sobre a empresa</h1>
                            <p className="text-2xl text-gray-600 leading-10">Fundada com amor e dedicação, nossa missão é transformar cada casa em um lar acolhedor.</p>
                        </div>
                        
                        <div className="flex flex-col justify-center text-start lg:text-left">
                            <h2 className="text-4xl font-bold text-gray-700 mb-3">Missão</h2>
                            
                            <p className="text-2xl text-gray-600 leading-10">Transformar espaços com cuidado e dedicação, proporcionando lares limpos, organizados e vibrantes, onde cada detalhe reflete nosso zelo e atenção.</p>

                        </div>

                        <div className="text-start">
                            <h2 className="text-4xl font-bold text-gray-700 mb-3">Visão</h2>
                            <p className="text-2xl text-gray-600 leading-10">Ser reconhecida como a empresa que traz aconchego e renovação para cada lar, destacando-se pela excelência na criação de espaços que inspiram conforto e bem-estar.</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center rounded-md">
                        <Image width={800} height={400} src='/assets/AboutCompany/imagem2.jpg' alt="Foto da equipe aqui"/>
                    </div>

                </section>

            </div>
        </div>
    );
}
