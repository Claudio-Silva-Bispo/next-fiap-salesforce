
export default function NewsLetter() {
    return (
        <section className="px-5 py-10 bg-gray-100 text-gray-800 min-h-[80vh] flex justify-center items-center">
            <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
                <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                    <div className="flex flex-col space-y-8 md:space-y-12">
                        {["Dicas para manter a casa limpa", "Como organizar sua rotina de limpeza", "Descubra nossos métodos de higienização."].map((text, index) => (
                            <div className="flex flex-col space-y-2" key={index}>
                                <h3 className="flex items-center space-x-2 text-gray-600">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-quinta"></span>
                                    <span className="text-xs font-bold tracking-wider uppercase">Notícias</span>
                                </h3>
                                <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{text}</a>
                                <p className="text-xs text-gray-600">{index === 0 ? '47 minutos atrás' : index === 1 ? '2 horas atrás' : '4 horas atrás'} por
                                    <a rel="noopener noreferrer" href="#" className="hover:underline text-quinta">  Cleaning Service</a>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                        <div className="flex w-full h-1 bg-opacity-10 bg-quinta">
                            <div className="w-1/2 h-full bg-quinta"></div>
                        </div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
                            <span className="text-xs font-bold tracking-wider uppercase">Veja mais novidades</span>
                            <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent text-quinta">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="relative flex col-span-12 bg-cover xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{ backgroundImage: "url('/assets/About/imagem2.jpg')" }}>
                    <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 text-gray-800 border-quinta">Dicas de organização e limpeza</span>
                    <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via- flex-grow-1 bg-gradient-to-b from-gray-50">
                        <span className="flex items-center mb-4 space-x-2 text-[#eb5e28]">
                            <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-[#eb5e28]">
                                <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-[#eb5e28]"></span>
                            </span>
                            <span className="text-sm font-bold">Importante</span>
                        </span>
                        <h1 className="font-serif text-2xl font-semibold  text-white">Saiba como mantemos sua casa impecável</h1>
                    </a>
                </div>

                <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                    <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-[#eb5e28]">
                        <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-[#eb5e28]">Últimas notícias</button>
                        <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 text-gray-600">Popular</button>
                    </div>
                    <div className="flex flex-col divide-y divide-gray-300">
                        {[
                            { title: "Não perca nossas promoções de limpeza!", time: "5 minutos atrás", category: "Promoções", imgUrl: "/assets/background.jpg" },
                            { title: "Como manter sua casa limpa por mais tempo", time: "14 minutos atrás", category: "Dicas", imgUrl: "/assets/background-dois.jpg" },
                            { title: "Serviço de limpeza para eventos especiais", time: "22 minutos atrás", category: "Serviços", imgUrl: "/assets/background-quatro.jpg" },
                            { title: "Limpeza especializada para sua empresa", time: "37 minutos atrás", category: "Empresas", imgUrl: "/assets/background-cinco.jpg" },
                        ].map((item, index) => (
                            <div className="flex px-1 py-4" key={index}>
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src={item.imgUrl} />
                                <div className="flex flex-col flex-grow">
                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{item.title}</a>
                                    <p className="mt-auto text-xs text-gray-600">{item.time}
                                        <a rel="noopener noreferrer" href="#" className="block 
                                        text-[#4CD7D0] lg:ml-2 lg:inline hover:underline">{item.category}</a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
