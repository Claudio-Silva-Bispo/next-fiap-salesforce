import Image from "next/image";
import imagem from "../../public/assets/Service/imagem1.jpg"

export default function AboutFeedback() {
    return (
        <section className="bg-quinta text-gray-700">
            <div className="container flex flex-col justify-center p-3 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between pt-20 md:pt-0">
                <div className="flex flex-col justify-center md:p-6 md:text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left md:pt-20 lg:pt-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-none uppercase md:text-left font-bold">
                    The Importance of
                        <span className="text-white"> Feedback</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 md:text-xl md:text-left text-gray-700">
                    Feedback is essential for continuously improving our services. It allows us to understand your needs and expectations, helping us provide increasingly better and more personalized service.
                        <br className="hidden md:inline lg:hidden" />
                        Your opinion is crucial for our growth and improvement.
                    </p>
                    
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mb-10 md:mb-0">
                        
                        <button rel="noopener noreferrer" className="px-8 py-3 text-lg rounded bg-segunda  text-gray-600 font-bold text-center focus:ring hover:ring focus:ring-opacity-75 focus:ring-segunda hover:ring-segunda">
                        <a href="/Feedback">Preencha agora</a>
                        </button>

                        <button rel="noopener noreferrer" className="px-8 py-3 text-lg rounded bg-white  text-gray-700 font-bold text-center focus:ring hover:ring focus:ring-opacity-75 focus:ring-segunda hover:ring-segunda">
                        <a href="/Testimonials">Feedback recebidos</a>
                        </button>
                    </div>
                </div>
                
                <div>
                    <Image src={imagem.src} width={800} height={400} alt="Imagem para demonstração do feedback" className="rounded"></Image>
                </div>

            </div>

        </section>
    );
}
