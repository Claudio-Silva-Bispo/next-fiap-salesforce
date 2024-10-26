import { useState } from "react";

export default function Feedback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: 0,
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Submitting form:', formData);

        try {
            const response = await fetch('/api/criarFeedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Feedback cadastrado com sucesso.');
                setFormData({
                    name: "",
                    email: "",
                    rating: 0,
                    message: "",
                });
            } else {
                alert('Error ao cadastrar um feedback.' + console.log(formData));
            }
        } catch (error) {
            console.error('Error Error ao cadastrar um feedback:', error);
            alert('Error ao cadastrar um feedback.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleStarClick = (rating: number) => {
        setFormData({ ...formData, rating });
    };

    return (
        <section className="bg-quinta pt-20">
            
            <div className="container flex flex-col lg:flex-row m:pt-20 md:pt-0">
                <div className="flex flex-col p-4 md:p-20 space-y-6 rounded-sm lg:w-2/3 xl:w-3/5">
                    <h1 className="text-4xl uppercase text-gray-700 font-bold">Sobre nossos serviços, como foi sua experiência?</h1>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug text-gray-700">Produtos</p>
                            <p className="leading-snug text-gray-600">Produtos e atendimentos rápido e eficiente para seu negócio</p>
                        </div>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug text-gray-700">Operacional</p>
                            <p className="leading-snug text-gray-600">Mantenha tudo conectado.</p>
                        </div>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>

                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug text-gray-700">Diário, Semanal, Mensal, Personalizado</p>
                            <p className="leading-snug text-gray-600">Acompanhe seus números através das nossas plataformas compatilhadas e saiba tudo que está acontecendo conforme sua personalização.</p>
                        </div>
                    </div>

                    <div className="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div className="space-y-2">
                            <p className="text-lg font-medium leading-snug text-gray-700">Contato</p>
                            <p className="leading-snug text-gray-600">Escolha o melhor método de contato para você: Telefone, SMS, WhatsApp, E-mail? Preecha nosso formulário de Desconberta e tenha sugestão de produtos e saiba se encaixam nas suas necessidades.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-2/3 xl:w-3/5 bg-quinta">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <div className="flex flex-col max-w-2xl p-6 shadow-sm rounded-xl lg:p-12 bg-white text-gray-700">
                            
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col items-center w-full">
                                    
                                    <div className="flex flex-col items-center py-6 space-y-3">
                                        <span className="text-center text-xl">How was your experience?</span>
                                        <div className="flex space-x-3">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => handleStarClick(star)}
                                                    title={`Rate ${star} stars`}
                                                    aria-label={`Rate ${star} stars`}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className={`w-8 h-8 m:w-16 m:h-16 ${formData.rating >= star ? 'text-yellow-300' : 'text-gray-100'}`}
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <textarea
                                            rows={3}
                                            placeholder="Message..."
                                            className="p-4 rounded-md resize-none text-gray-800 bg-gray-100"
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>

                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="p-4 rounded-md resize-none text-gray-800 mt-3 bg-gray-100"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />

                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="p-4 rounded-md resize-none text-gray-800 mt-3 bg-gray-100"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        
                                        <button type="submit" className="py-4 my-4  rounded-md text-gray-700" style={{ backgroundColor: '#DEE8FE' }}>
                                            Leave your message
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center justify-center">
                                <a rel="noopener noreferrer" href="/" className="text-sm text-gray-600">Return to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
