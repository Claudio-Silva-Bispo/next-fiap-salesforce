import React, { useState, useEffect } from 'react';

const feedbacks = [
    "O serviço de limpeza foi excelente! A equipe organizou os espaços de forma muito eficiente, o que me ajudou a colocar tudo em ordem rapidamente. Recomendo a todos!",
    "A qualidade do serviço de limpeza é incomparável. Sempre rápido, eficiente e com preços justos. Eu não escolheria outra empresa!",
    "Impressionado com a rapidez e a qualidade da limpeza. Muito satisfeito e definitivamente usarei os serviços novamente!",
    "Trabalho excelente! A equipe foi amigável, eficiente e deixou tudo impecável. Recomendo muito os serviços de limpeza deles."
];

export default function ReceberFeedbacks() {
    const [feedbackAtivo, setFeedbackAtivo] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFeedbackAtivo((feedbackAtual) => (feedbackAtual + 1) % feedbacks.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className='feedback-background min-h-[70vh] flex justify-start items-center text-start' id='receber-feedback' style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/Feedback/imagem1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>

            <div className="relative flex flex-col gap-10 p-3">

                <div className="text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-quinta pt-36 p-5 md:p-0 flex flex-col gap-3 items-center md:items-end lg:items-start">
                    <h3 className="text-5xl text-white mb-5 md:mb-0 text-center md:text-end lg:text-start font-bold">Saiba mais</h3>
                    
                    <span className="text-md md:text-lg tracking-wider text-white md:max-w-md lg:max-w-lg md:text-end lg:text-start">
                    O que as pessoas estão dizendo sobre nós nas redes sociais e em avaliações.
                    </span>
                </div>
                
                <p className="text-2xl md:text-2xl text-center md:max-w-md xl:max-w-3xl text-white leading-normal md:text-end xl:text-start">
                    "{feedbacks[feedbackAtivo]}"
                </p>

                <div className='grid md:flex gap-5'>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-quinta text-gray-50 focus:ring-terceira hover:ring-terceira">Ver mais feedback</button>

                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-quinta text-gray-50 focus:ring-terceira hover:ring-terceira">Orçamento grátis</button>
                </div>

            </div>
         
        </section>
    );
}
