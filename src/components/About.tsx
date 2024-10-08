import imagem from '../../public/assets/Network/Frame Mockup  (2).png';

export default function About() {
    return (
        <div className="relative w-full min-h-screen flex flex-col-reverse md:flex-row text-black" id='about'>
            
            <div className='w-full'>
                <img 
                    src={imagem.src} 
                    alt="Image about cleaning room" 
                    className="inset-0 w-full h-full object-fill z-0" 
                />
            </div>

            <div className="flex flex-col max-w-3xl mx-auto p-6 sm:p-10 md:p-5   md:w-full xl:w-[60%] bg-[#93BF4C] md:bg-[#679F20] pt-10 md:pt-0 pb-20 md:pb-0 justify-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-4xl xl:text-6xl text-left font-bold uppercase">
                        Who We Are
                        </h2>
                        <p className="text-md text-white pb-5">
                            By <a href="#" className="hover:underline">Alves Cleaning Service</a>
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 text-left text-xl md:text-lg lg:text-xl">
                        <p>Our mission is to provide clean, safe, and welcoming environments for our clients. With a highly trained and dedicated team, we offer customized cleaning services for homes, businesses, and special situations such as relocations, events, and even the more challenging areas of your home.</p>

                        <h2 className="text-2xl md:text-2xl xl:text-4xl uppercase font-bold">What do we strive For?</h2>

                        <p>We constantly strive for excellence in every service we provide, ensuring total customer satisfaction. Our commitment is to quality, trust, and attention to detail, so you can enjoy a spotless and comfortable space. We value transparency, ethics, and respect in all our interactions, building long-lasting and trustworthy relationships.</p>
                    </div>
            </div>
        </div>
    );
}
