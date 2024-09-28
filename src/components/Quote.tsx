export default function Quote() {
    return (
        <div className="quote-background relative md:min-h-full p-5">
            <div className="flex flex-col justify-end items-start md:items-end">
                <h2 className="text-5xl md:text-6xl md:leading-none max-w-2xl lg:max-w-4xl text-primeira md:text-end pt-10">Solicite seu orçamento </h2>
                <p className="mt-10 mb-8 text-lg md:text-xl sm:mb-12 text-gray-900 md:text-end leading-relaxed max-w-4xl">Para garantirmos que você receba o melhor serviço, é fundamental que o preenchimento do orçamento seja feito com atenção aos detalhes. Quanto mais informações você fornecer, mais preciso e adequado será o orçamento às suas necessidades. Não hesite em compartilhar suas expectativas e requisitos!</p>
            </div>

            <div className="flex flex-col space-y-4 sm:items-start sm:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-end mb-96">
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-primeira text-gray-50 ">Preencher</a>
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-white text-primeira">Ligue agora</a>
            </div>
        </div>
    );
}
