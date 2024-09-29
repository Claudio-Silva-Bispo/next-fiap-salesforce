import React, { useState, useEffect } from 'react';

const feedbacks = [
    "O serviço de limpeza foi excelente! A equipe organizou os ambientes de maneira muito eficiente, o que me ajudou a deixar tudo em ordem rapidamente. Recomendo a todos!",
    "A qualidade do serviço de limpeza é incomparável. Sempre rápido, eficiente e com preços justos. Não escolheria outra empresa!",
    "Impressionado com a rapidez e a qualidade da limpeza. Muito satisfeito e com certeza utilizarei os serviços novamente!",
    "Trabalho excelente! A equipe foi amigável, eficiente e deixou tudo impecável. Recomendo muito os serviços de limpeza deles."
];



export default function ReceivedFeedbacks() {
    const [activeFeedback, setActiveFeedback] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveFeedback((currentFeedback) => (currentFeedback + 1) % feedbacks.length);
        }, 5000); // Changes feedback every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className='feedback-background min-h-[150vh] md:min-h-[90vh] flex justify-end items-center text-start'>

            <div className="relative flex flex-col gap-10 p-5">

                <div className="text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primeira mt-20 md:mt-10 pt-36 p-5 md:p-0 flex flex-col gap-3 items-center md:items-end lg:items-start">
                    <h3 className="text-3xl text-primeira mb-5 md:mb-0 text-center md:text-end lg:text-start ">Venha e Saiba Mais</h3>
                    
                    <span className="text-md md:text-lg tracking-wider text-segunda md:max-w-md lg:max-w-lg md:text-end lg:text-start">
                    O que as pessoas estão dizendo sobre nós nas redes sociais e em avaliações
                    </span>
                </div>
                
                <p className="text-2xl md:text-2xl text-center md:max-w-md xl:max-w-3xl text-terceira leading-normal md:text-end xl:text-start">
                    "{feedbacks[activeFeedback]}"
                </p>

                <div className='grid md:flex gap-5'>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-50 focus:ring-terceira hover:ring-terceira">Veja mais feedback</button>

                    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-50 focus:ring-terceira hover:ring-terceira">Nossos contatos</button>
                </div>

            </div>
            
        </section>
    );
}
