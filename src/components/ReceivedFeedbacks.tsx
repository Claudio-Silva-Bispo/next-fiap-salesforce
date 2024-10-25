import React, { useState, useEffect } from 'react';

const feedbacks = [
    "A Salesforce revolucionou a forma como gerenciamos nossos clientes. A plataforma é intuitiva e oferece funcionalidades que realmente fazem a diferença no nosso dia a dia!",
    "O suporte da Salesforce é excepcional! Sempre que tivemos dúvidas, a equipe esteve pronta para nos ajudar rapidamente.",
    "A integração com outras ferramentas é perfeita. Conseguimos automatizar diversos processos e economizar muito tempo!",
    "A personalização da dashboard é uma das melhores características da Salesforce. Agora, conseguimos visualizar as informações que realmente importam para o nosso negócio."
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
