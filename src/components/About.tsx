import Image from "next/image";

export default function About() {
    return (
        <section className=" text-gray-800 min-h-[75vh] p-3 flex justify-center items-center">
            <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-white flex flex-col gap-3 lg:gap-5">
                    <span className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-700">Sobre nós</span>
                    <p className="text-lg xl:max-w-3xl text-gray-600">
                    A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. É uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.
                    </p>
                    <span className="font-bold leading-none sm:text-2xl xl:max-w-3xl text-gray-700">O que é a Salesforce faz?</span>
                    <p className="text-lg xl:max-w-3xl text-gray-600">
                    Juntos, conectamos as empresas aos seus clientes. Utilizando o Salesforce Customer 360, nossa plataforma de CRM integrada, sua empresa oferece experiências personalizadas para seus clientes. Nossa solução fornece produtos poderosos e conectados para melhorar seu marketing, vendas, commerce, atendimento ao cliente, TI e muito mais.
                    </p>
       

                </div>
                <Image src="/assets/Navbar/imagem.svg" alt="Limpeza Profissional" className="object-cover w-full rounded-md xl:col-span-3 " width={800} height={400}/>
            </div>
        </section>
    );
}
