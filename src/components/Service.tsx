
import imageOne from '../../public/assets/Carrosel/sala/IMG-20200204-WA0032.jpg';

export default function Service(){
    return (
        <section className="bg-terceira text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 md:pt-22">

                <div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug md:leading-relaxed mb-10 md:mb-0">Conheça os serviços
                        <span className="text-white"> feitos</span> de forma <span className="text-white">única</span> para você.
                    </h2>
                </div>

                <div rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50 rounded-md">
                    <img src="/assets/Service/louca.webp" alt="services photos" className="object-fill w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold md:text-4xl mb-5 uppercase">Regular Cleaning</h3>
                        <p>Nosso serviço de limpeza regular é ideal para manter sua casa ou escritório sempre limpos e organizados. Com visitas programadas de acordo com sua necessidade, nossa equipe garante um ambiente agradável e higienizado, permitindo que você se concentre no que realmente importa.</p>
                    </div>
                </div>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 rounded-md">
                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 rounded-md">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="/assets/Service/servico-residencial.png" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold mb-5 uppercase">Serviços Comerciais</h3>
                            <p>Entendemos a importância de um ambiente de trabalho limpo e bem cuidado. Nossos serviços de limpeza comercial são personalizados para atender às necessidades específicas do seu negócio, proporcionando um espaço profissional e acolhedor para seus colaboradores e clientes.</p>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 rounded-md">
                        <img role="presentation" className="object-fill w-full rounded h-44 bg-gray-500" src="/assets/Carrosel/sala/IMG-20200204-WA0032.jpg" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold mb-5 uppercase">Move In / Move Out</h3>
                            <p>Mudanças podem ser estressantes, mas nossa equipe está aqui para ajudar. Oferecemos serviços de limpeza completos para quando você estiver se mudando para um novo local ou saindo de um antigo. Garantimos que tudo esteja impecável para a nova fase da sua vida.</p>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 rounded-md">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="/assets/Service/chao.webp" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold mb-5 uppercase">Deep Cleaning</h3>
                            <p>Para uma limpeza mais profunda e detalhada, nosso serviço de deep cleaning é a escolha perfeita. Ideal para ocasiões especiais ou para uma renovação completa do ambiente, nossa equipe utiliza técnicas e produtos avançados para alcançar até os cantos mais difíceis.</p>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block rounded-md">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="/assets/Service/quarto1.png" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline mb-5">Eventos</h3>
                            <p>Planejar um evento pode ser desafiador, mas a limpeza não precisa ser uma preocupação. Oferecemos serviços de limpeza antes, durante e após o seu evento, garantindo que tudo esteja perfeito para seus convidados e que o local seja deixado em ordem após a celebração.</p>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block rounded-md">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="/assets/Service/fogao.webp" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline mb-5">Serviços Personalizados</h3>
                            <p>Cada casa tem suas particularidades, e nós estamos aqui para atender às suas necessidades específicas. Oferecemos serviços personalizados onde você pode solicitar a limpeza de áreas específicas, como dentro da geladeira, do fogão, dos armários, e outros cantos difíceis de alcançar. Nossa equipe está pronta para deixar cada detalhe impecável, exatamente como você deseja.</p>
                        </div>
                    </div>

                    <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50 hidden sm:block rounded-md">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="/assets/Service/quarto2.png" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline mb-5">Demais serviços</h3>
                            <p>Garagens e porões, ou até mesmo dentro do guarda roupa, podem acumular muita sujeira e desorganização ao longo do tempo. Nosso serviço especializado de limpeza para essas áreas garante que cada canto seja limpo e organizado, proporcionando um espaço mais funcional e agradável. Deixe a sujeira e a bagunça conosco, e aproveite um ambiente renovado e bem cuidado.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600">Faça um orçamento sem compromisso</button>
                </div>
            </div>
        </section>
    );
}
