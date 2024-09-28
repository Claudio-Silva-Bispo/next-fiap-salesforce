export default function Hero() {
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="bg-segunda flex relative p-5 md:p-0">
                
                <div className="container flex flex-col justify-center text-start md:px-5 lg:px-10 text-gray-50 z-10 min-h-screen md:min-h-[90vh]">
                    <h1 className="text-3xl md:text-5xl md:leading-none max-w-2xl lg:max-w-4xl text-gray-50 text-start pt-10">Nossa dedicação é proporcionar um ambiente limpo e seguro.</h1>
                    <p className="mt-10 mb-8 text-lg md:text-xl lg:text-2xl sm:mb-12 max-w-md lg:max-w-xl text-gray-50 text-start leading-relaxed ">Na Alves Cleaning Service, cuidamos de cada detalhe para garantir que sua casa, seu negócio ou qualquer necessidade especial, como mudanças, sejam tratados com a máxima atenção e profissionalismo.</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start mb-44 md:mb-0">
                        <button type="button" className="px-8 py-3 md:m-2 text-lg rounded bg-gray-100 text-gray-900 w-full md:w-fit">Orçamento grátis</button>
                        <button type="button" className="px-8 py-3 md:m-2 text-lg rounded bg-gray-100 text-gray-900 w-full md:w-fit mt-3">Nossos serviços</button>
                    </div>
                </div>

                <div className="absolute right-0 bottom-0 w-full md:w-2/3">
                    <img src="/assets/Mockup/hero-sem-fundo.png" alt="mockup created by IA" className='min-h-full object-cover' />
                </div>
            </div>
        </section>
    );
}
