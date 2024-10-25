import Image from "next/image";

export default function About() {
    return (
        <section className="text-gray-800 min-h-[75vh] p-3 flex justify-center items-center">
            <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-white flex flex-col gap-3 lg:gap-5">
                    <span className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-700">Sobre nós</span>
                    <p className="text-lg xl:max-w-3xl text-gray-600">
                        A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.
                    </p>
                    <span className="font-bold leading-none sm:text-2xl xl:max-w-3xl text-gray-700">O que a Salesforce faz?</span>
                    <p className="text-lg xl:max-w-3xl text-gray-600">
                        Juntos, conectamos as empresas aos seus clientes. Utilizando o Salesforce Customer 360, nossa plataforma de CRM integrada, sua empresa oferece experiências personalizadas para seus clientes. Nossa solução fornece produtos poderosos e conectados para melhorar seu marketing, vendas, commerce, atendimento ao cliente, TI e muito mais.
                    </p>

                    <span className="font-bold leading-none sm:text-2xl xl:max-w-3xl text-gray-700">O que a Tokito Techs trouxe de novidades?</span>

                    <p className="text-lg xl:max-w-3xl text-gray-600">
                    Nosso objetivo é tornar a navegação mais fácil e acessível para cada usuário, com uma abordagem personalizada e cuidadosa. Oferecemos suporte completo para navegação via teclado, além de navegação por voz, permitindo preencher formulários e navegar pelas páginas de maneira intuitiva. Também disponibilizamos uma página dedicada para explicar detalhadamente os recursos oferecidos, ajudando cada usuário a aprender e explorar nossos serviços de forma simples e eficaz.
                    </p>
                </div>
                <div className="relative w-full h-full xl:col-span-3 flex justify-center items-center">
                    <Image 
                        src="/assets/Menu/imagem.svg" 
                        alt="Limpeza Profissional" 
                        className="object-cover rounded-md" 
                        layout="responsive" 
                        width={800} 
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
}
