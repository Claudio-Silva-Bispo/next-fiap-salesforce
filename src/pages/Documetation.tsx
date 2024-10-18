

export default function Documetation(){
    return(
        <section className="bg-[#DEE8FE] min-h-[80vh] flex flex-col justify-start p-6 md:p-10 gap-5">
            <h1 className="text-5xl font-bold mb-10 text-start pt-20 text-gray-700">Documentação</h1>

            <div className="flex flex-col gap-3">
                <h2 className='font-bold text-2xl sm:text-xl text-gray-700'>Sobre o desenvolvedor</h2>

                <span className='font-bold'>1. Linkedin</span>

                <p className="text-gray-600 text-lg">http://linkedin.com/</p>

                <span className='font-bold'>2. Email para contato</span>

                <p className="text-gray-600 text-lg">claudio_cssp@hotmail.com</p>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className='font-bold text-2xl sm:text-xl text-gray-700'>Material de apoio</h3>

                <span className='font-bold'>Banco de dados</span>

                <p>Todas as informações de clientes são armazenadas no banco de dados e não são disponibilizadas para terceiros. O proprietário entra em contato com o cliente e depois disso, apaga as informações.</p>
            </div>

            <div className="flex flex-col gap-3">
                <h4 className='font-bold text-2xl sm:text-xl text-gray-700'>Informações importantes</h4>
            
                <p className="text-gray-600 text-lg">Conteúdo criado com o apoio de materiais disponíveis na internet de forma gratuíta mas que precisam ser mencionadas, devido aos privilégios de desenvolvimento.</p>

                <span className='font-bold'>1. Site com imagens personalizadas</span>

                <p className="text-gray-600 text-lg">https://www.freepik.com/</p>

                <span className='font-bold'>2. Alguns textos foram construidos com uso da inteligência artificicial</span>

                <p className="text-gray-600 text-lg">https://chat.openai.com/</p>

            </div>
        </section>
    );
}