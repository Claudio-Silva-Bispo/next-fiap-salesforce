

export default function CarroselSimple(){
    return (
        <section id="carrosel">
            <div
                className="container flex flex-col mx-auto lg:flex-row min-h-screen p-6"
                style={{
                    backgroundImage: "url('/assets/Service/imagem2.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    // Define a opacidade com base no breakpoint
                    opacity: "0.6", // Opacidade padrão para mobile
                }}
                id="carrosel">
                <div className="flex flex-col w-full lg:w-1/3 md:p-8 lg:p-12 bg-opacity-80 ">
                    <h1 className="text-5xl font-bold leading-none mb-6 pt-10">Serviços realizados</h1>
                    <p className="text-lg mb-6">
                        Descubra a transformação que nossos serviços de limpeza podem proporcionar! Com uma atenção especial aos detalhes, mostramos o impacto positivo que uma limpeza profissional pode ter na sua casa ou empresa. Confira nossos projetos de antes e depois e surpreenda-se com os resultados!
                    </p>
                    <p className="text-lg mb-6">
                        Logo abaixo, saiba mais sobre os serviços que oferecemos.
                    </p>
                    <button
                            type="button"
                            className="w-full s:w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded bg-gray-100 text-gray-900"
                        >
                            visite a galeria
                        </button>
                </div>
            </div>



            <div className="relative w-full flex gap-4 py-6 overflow-x-hidden">
                <div className="flex gap-4 animate-marquee">
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/sala/20200813_115950.jpg" alt="Room photo" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/sala/20201125_151608.jpg" alt="Image 2" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/sala/20201217_095105.jpg" alt="Image 3" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/banheiro/20201125_105927.jpg" alt="Image 4" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/banheiro/20201125_151240.jpg" alt="Image 5" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/banheiro/20201217_151100.jpg" alt="Image 6" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/cozinha/20200211_175828.jpg" alt="Image 7" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/cozinha/20200701_143833.jpg" alt="Image 8" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/cozinha/20200701_143913.jpg" alt="Image 9" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/cozinha/20200701_150549.jpg" alt="Image 10" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/personalizado/20201202_112536.jpg" alt="Image 11" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/personalizado/20201202_112842.jpg" alt="Image 12" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/personalizado/20201217_123521.jpg" alt="Image 13" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/quarto/20200123_150451.jpg" alt="Image 14" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/quarto/20201028_142814.jpg" alt="Image 15" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/quarto/20201125_151146.jpg" alt="Image 16" />
                    <img className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="assets/Carrosel/quarto/20201230_155117.jpg" alt="Image 17" />

                </div>
            </div>

        </section>
    );
}