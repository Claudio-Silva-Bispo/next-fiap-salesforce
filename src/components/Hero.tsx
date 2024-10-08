export default function Hero() {
    return (
        <section className="bg-gray-100 text-gray-800" id="hero">
            <div className="bg-segunda flex relative p-5 md:p-0 pt-24 md:pt-0">
                
                <div className="container flex flex-col justify-center text-start md:px-5 lg:px-10 text-gray-50 z-10 min-h-screen md:min-h-[90vh]">
                    <h1 className="text-3xl md:text-6xl md:leading-none max-w-2xl lg:max-w-4xl text-gray-50 text-start font-bold">Our commitment is to provide a clean and safe environment.</h1>
                    <p className="mt-5 mb-8 text-xl md:text-xl lg:text-2xl sm:mb-12 max-w-md lg:max-w-xl text-gray-50 text-start leading-relaxed ">At Alves Cleaning Service, we take care of every detail to ensure that your home, business, or any special needs, such as relocations, are handled with the utmost attention and professionalism.</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start mb-44 md:mb-0">
                        <button type="button" className="px-8 py-3 md:m-2 text-lg rounded bg-gray-100 text-gray-900 w-full md:w-fit"> <a href="#contact">Free estimate</a></button>
                        <button type="button" className="px-8 py-3 md:m-2 text-lg rounded bg-quarta text-white w-full md:w-fit mt-3"><a href="#services">Our services</a></button>
                    </div>
                </div>

                <div className="absolute right-0 bottom-0 w-full md:w-2/3">
                    <img src="/assets/Mockup/hero-sem-fundo.png" alt="mockup created by IA" className='min-h-full object-cover' />
                </div>
            </div>
        </section>
    );
}
