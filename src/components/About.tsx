
export default function About() {
    return (
        <section className="bg-segunda text-gray-800 min-h-[75vh] p-6 flex justify-center items-center">
            <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-white">
                    <span className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl pt-10">Sobre nós</span>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl ">
                        Serviços de Limpeza Personalizados. Na nossa empresa, garantimos um ambiente limpo e seguro, atendendo às suas necessidades específicas com profissionalismo e atenção aos detalhes. Nossa equipe está comprometida em oferecer soluções de limpeza que superam suas expectativas.
                    </p>
                </div>
                <img src="/assets/About/imagem2.jpg" alt="Limpeza Profissional" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
            </div>
        </section>
    );
}
