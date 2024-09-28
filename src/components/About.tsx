import imagem from '../../public/assets/Network/Frame Mockup  (2).png';

export default function About() {
    return (
        <div className="relative w-full min-h-screen flex flex-col-reverse md:flex-row text-black">
            
            <div className='w-full'>
                <img 
                    src={imagem.src} 
                    alt="Image about cleaning room" 
                    className="inset-0 w-full h-full object-fill z-0" 
                />
            </div>

            <div className="flex flex-col max-w-3xl mx-auto p-6 sm:p-10 md:p-5   md:w-full xl:w-[60%] bg-[#93BF4C] md:bg-[#679F20] pt-20 md:pt-0 pb-20 md:pb-0 justify-center">
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-5xl text-left">
                            Sobre nós
                        </h2>
                        <p className="text-xs text-white pb-5">
                            By <a href="#" className="hover:underline">Alves Cleaning Service</a>
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 text-left text-md lg:text-xl">
                        <p>Nossa missão é proporcionar ambientes limpos, seguros e acolhedores para nossos clientes. Com uma equipe altamente treinada e dedicada, oferecemos serviços de limpeza personalizados para residências, empresas e situações especiais, como mudanças, eventos e até partes mais difíceis de seus lares.</p>

                        <h2 className="text-2xl md:text-5xl sm:text-2xl">O que Buscamos?</h2>

                        <p>Buscamos sempre a excelência em cada serviço prestado, garantindo a satisfação total de nossos clientes. Nosso compromisso é com a qualidade, a confiança e o cuidado em cada detalhe, para que você possa desfrutar de um espaço impecável e confortável. Valorizamos a transparência, a ética e o respeito em todas as nossas interações, construindo relacionamentos duradouros e de confiança.</p>
                    </div>
            </div>
        </div>
    );
}
