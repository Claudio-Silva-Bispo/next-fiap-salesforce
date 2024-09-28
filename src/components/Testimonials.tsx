export default function Testimonials() {
    return (
        <div className="testimonials-background bg-primeira relative min-h-[210vh] md:min-h-full">
            <div className="flex flex-col justify-center items-center max-w-2xl h-80 w-full md:gap-5">
                <h2 className="text-white text-4xl p-5 md:p-0 pt-56 md:pt-0">Participe da nossa pesquisa</h2>
                <p className="text-white md:text-center text-xl p-5">Sua opinião é fundamental! Responda a nossa pesquisa e ajude-nos a melhorar nossos serviços.</p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-quarta text-gray-50">Responder</a>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-white text-primeira">Entrar em contato</a>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center max-w-2xl h-80 absolute bottom-0 right-0 w-full md:gap-5">
                <h2 className="text-white text-4xl p-5 md:p-0">Feedbacks recebidos dos Clientes</h2>
                <p className="text-white md:text-center text-xl p-5">Veja o que nossos clientes estão dizendo sobre nós. Seus feedbacks são muito importantes para nós!</p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mb-44 md:mb-0">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-quarta text-gray-50">Conheça</a>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-white text-primeira">Orçamento grátis</a>
                </div>
            </div>
        </div>
    );
}
