import Image from "next/image";

export default function About() {
    return (
        <section className="bg-segunda text-gray-800 min-h-[75vh] p-3 flex justify-center items-center">
            <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-white flex flex-col gap-3 lg:gap-5">
                    <span className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-700">Sobre nós</span>
                    <p className="text-lg xl:max-w-3xl text-gray-600">
                        Garantimos um ambiente limpo e seguro, atendendo às suas necessidades específicas com profissionalismo e atenção aos detalhes. Nossa equipe está comprometida em oferecer soluções de limpeza que superam suas expectativas.
                    </p>
                    <p className="text-lg xl:max-w-3xl text-gray-600">
                        Estamos em busca de atender a cada cliente conforme sua necessidade, seja escolhendo o dia, o modelo de frequência (diário, semanal, quinzenal, mensal ou pontual), com o melhor horário e condições diferenciadas no valor.
                    </p>
                    <p className="text-lg xl:max-w-3xl text-gray-600">
                        Nossa equipe é composta de profissionais treinados e capacitados para realizar a limpeza de forma profissional, da maneira que o cliente personaliza.
                    </p>

                </div>
                <Image src="/assets/About/imagem2.jpg" alt="Limpeza Profissional" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" width={800} height={400}/>
            </div>
        </section>
    );
}
