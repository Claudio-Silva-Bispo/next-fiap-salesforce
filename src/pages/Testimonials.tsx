import React, { useEffect, useState } from 'react';

interface Feedback {
    _id: string;
    nome: string;
    mensagem: string;
    nota: number;
    mostrar_tela: string;
}

export default function Testimonials() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [loadingError, setLoadingError] = useState(false);

    useEffect(() => {
        fetch('https://olivercleaningservice.com/api/buscarFeedbacks')
            .then(response => response.json())
            .then((data: Feedback[]) => {
                const filteredFeedbacks = data.filter(feedback => feedback.mostrar_tela);
                const sortedFeedbacks = filteredFeedbacks.sort((a, b) => a.mostrar_tela.localeCompare(b.mostrar_tela));
                setFeedbacks(sortedFeedbacks);
                setLoadingError(false);
            })
            .catch(error => {
                console.error('Erro ao buscar feedbacks:', error);
                setLoadingError(true);
            });
    }, []);

    const renderStars = (nota: number) => (
        Array.from({ length: nota }, (_, index) => (
            <span key={index} className="text-yellow-500">&#9733;</span> // Icone de estrela
        ))
    );

    const placeholders = [
        {_id: 'placeholder-1', nome: 'Cliente 1', mensagem: 'Excelente serviço! A casa sempre fica impecável e o profissional é muito confiável.', nota: 5, mostrar_tela: '1'},
        {_id: 'placeholder-2', nome: 'Cliente 2', mensagem: 'Serviço pontual e muito bem feito. A equipe é sempre atenciosa e detalhista.', nota: 5, mostrar_tela: '2'},
        {_id: 'placeholder-3', nome: 'Cliente 3', mensagem: 'Uso o serviço há muitos anos e nunca tive problemas. Recomendo para todos!', nota: 4, mostrar_tela: '3'},
        {_id: 'placeholder-4', nome: 'Cliente 4', mensagem: 'Profissionais dedicados e cuidadosos. O atendimento é excelente, vale muito a pena.', nota: 5, mostrar_tela: '4'},
        {_id: 'placeholder-5', nome: 'Cliente 5', mensagem: 'O serviço é incrível, a casa fica perfeita sempre! Não troco por nada.', nota: 5, mostrar_tela: '5'},
        {_id: 'placeholder-6', nome: 'Cliente 6', mensagem: 'Recomendo demais! Profissionalismo e qualidade no serviço prestado.', nota: 5, mostrar_tela: '6'}
    ];

    return (
        <section className="bg-[#DEE8FE] flex flex-col justify-center min-h-screen" id="Testimonials">
            <div className="container flex flex-col justify-start md:justify-center mx-auto pt-16">
                <h1 className="text-5xl font-semibold leading-none text-start text-gray-700 p-6 sm:p-16">Avaliações recebidas</h1>
            </div>

            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly">
                {(loadingError || feedbacks.length === 0 ? placeholders : feedbacks).map((feedback) => (
                    <div className="flex flex-col max-w-md mx-4 my-6 bg-white shadow-lg rounded-lg" key={feedback._id}>
                        <div className="px-4 py-12 sm:px-8 md:px-12 h-40">
                            <p className="relative px-6 py-1 m:text-xl italic text-center text-gray-800">
                                {feedback.mensagem}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-b-lg">
                            <p className="text-2xl font-semibold leading-tight text-gray-800">{feedback.nome}</p>
                            <div className="flex mt-2 text-2xl">
                                {renderStars(feedback.nota)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
