export default function Quote() {
    return (
        <div className="quote-background relative md:min-h-full p-5">
            <h2>Solicite seu Orçamento Personalizado</h2>
            <p>Para garantirmos que você receba o melhor serviço, é fundamental que o preenchimento do orçamento seja feito com atenção aos detalhes. Quanto mais informações você fornecer, mais preciso e adequado será o orçamento às suas necessidades. Não hesite em compartilhar suas expectativas e requisitos!</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-primeira text-gray-50">Responder</a>
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-white text-primeira">Ligue agora</a>
            </div>
        </div>
    );
}
