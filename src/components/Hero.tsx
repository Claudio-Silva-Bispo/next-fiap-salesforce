import { ReadingContext } from './RightSidebar'; 
import  FocusableComponent from '../components/FocusableComponent';
import TextReader from "./TextReader";
import { useContext } from 'react';

export default function Hero() {

    const { isReadingEnabled } = useContext(ReadingContext);
    
    return (
        <section id="habilitar-menu">
            <div
                className="relative bg-primeira min-h-[75vh]"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/Hero/imagem2.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container flex flex-col items-start px-4 py-16 pb-24 mx-auto text-start lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-50">
                    <TextReader text="Bem vindo à SalesForce" isReadingEnabled={isReadingEnabled}>
                        <FocusableComponent id="text6" tabIndex={5}>
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50 pt-10">
                                Bem vindo à SalesForce
                            </h1>
                        </FocusableComponent>
                    </TextReader>

                    <TextReader text="Cada produto que oferecemos desempenha um papel na construção de conexões que impulsionam o sucesso, e esse sucesso pode ser aproveitado para criar mudanças positivas." isReadingEnabled={isReadingEnabled}>
                        <FocusableComponent id="text7" tabIndex={6}>
                            <p className="mt-6 mb-8 text-4xl sm:mb-12 xl:max-w-5xl text-gray-50">
                            Cada produto que oferecemos desempenha um papel na construção de conexões que impulsionam o sucesso, e esse sucesso pode ser aproveitado para criar mudanças positivas.
                            </p>
                        </FocusableComponent>
                    </TextReader>
                    {/* Ajustes de layout responsivo */}
                    <div className="flex flex-col s:flex-col sm:flex-row justify-start w-full gap-4">
                        <button
                            type="button"
                            className="w-full s:w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded bg-gray-100 text-gray-900 hover:bg-primeira focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta"
                        >
                            <a href="/ContactSection">Entre em Contato</a>
                        </button>
                        <button
                            type="button"
                            className="w-full s:w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded bg-quinta text-gray-50 hover:bg-primeira focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta"
                        >
                            <a href="/Services">Produtos</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
