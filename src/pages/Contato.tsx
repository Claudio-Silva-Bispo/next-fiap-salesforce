import { useEffect, useRef, useState } from 'react';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
 
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/criarContato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok){
                alert('Contato foi salvo!');
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                  
                });
            } else {
                alert('Error sending message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    //const [name, setName] = useState('');
    //const [email, setEmail] = useState('');
    //const [message, setMessage] = useState('');
    const [instruction, setInstruction] = useState('Clique no botão abaixo ou aperte TAB no teclado para começar a preencher os campos por voz.');
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const [currentField, setCurrentField] = useState(0); // Controla o campo atual

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.lang = 'pt-BR';

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                switch (currentField) {
                    case 0:
                        setFormData(prev => ({ ...prev, name: transcript }));
                        setInstruction('Agora, por favor, diga seu email ou clique no botão correspondente.');
                        break;
                    case 1:
                        setFormData(prev => ({ ...prev, email: transcript }));
                        setInstruction('Por último, deixe sua mensagem ou clique no botão correspondente.');
                        break;
                    case 2:
                        setFormData(prev => ({ ...prev, message: transcript }));
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    default:
                        break;
                }
            };

            recognitionRef.current.onerror = (event) => {
                console.error('Erro no reconhecimento de fala:', event.error);
            };
        } else {
            console.error('Reconhecimento de fala não suportado no seu navegador.');
        }
    }, [currentField]);

    const startRecognition = () => {
        if (recognitionRef.current) {
            recognitionRef.current.start();
        }
    };

    const handleFieldChange = (field: number) => {
        setCurrentField(field);
        switch (field) {
            case 0:
                setInstruction('Seu nome, por favor.');
                break;
            case 1:
                setInstruction('Qual seu email?');
                break;
            case 2:
                setInstruction('Deixe sua mensagem.');
                break;
            default:
                break;
        }
    };

    return (
        <section className="py-3 bg-terceira text-gray-900" id="contact">
            <div className="grid grid-cols-1 px-3 mx-auto lg:px-8 md:grid-cols-2 md:divide-x md:pt-20">
                <div>
                    <div className="py-6 md:py-0 md:px-6 flex flex-col justify-start">
                        <h1 className="text-5xl font-bold text-white">Entre em contato</h1>
                        <p className="pt-5 pb-4 text-2xl text-gray-600">Preenchendo este formulário simples, nossa equipe entrará em contato com você dentro de duas horas.</p>
                    </div>

                    <div className="py-6 md:py-0 md:px-6 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-3xl font-bold text-white mb-5 pt-5">Dados para contato</h2>
                        <p className="flex items-center mb-3 text-gray-700 text-2xl">Fake address, 9999 City</p>
                        <p className="flex items-center mb-3 text-gray-600 text-2xl">123456789</p>
                        <p className="flex items-center mb-3 text-gray-600 text-2xl">contact@business.com</p>
                    </div>

                    <div className="py-6 md:py-0 md:px-6 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-3xl font-bold text-white mb-5 pt-5">Sobre o formulário acessível</h2>
                        <p className="pb-4 text-2xl text-gray-600">
                        Nosso formulário é fácil de usar e oferece duas maneiras de preenchê-lo: 1. você pode digitar suas respostas ou 2. simplesmente falar, e o sistema vai entender o que você está dizendo. Isso facilita o processo para todos, tornando-o rápido e acessível, seja no computador ou no celular. Basta escolher a forma que for mais conveniente para você!
                        </p>
                    </div>

                    
                </div>

                <form 
                className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
                onSubmit={handleSubmit}
                name="contact-form"
                method="post">
                    <p className="text-lg text-gray-800">{instruction}</p>
                    <label className="block">
                        <span className="mb-3 text-gray-600">Nome</span>
                        <input
                            type="text"
                            placeholder="Por favor, insira seu nome."
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFieldChange(0)}
                            className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                        />
                    </label>
                    <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(0)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                        Usar voz para preencher o nome
                    </button>

                    <label className="block">
                        <span className="mb-1 text-gray-600">Email</span>
                        <input
                            type="email"
                            placeholder="leroy@jenkins.com"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFieldChange(1)}
                            className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                        />
                    </label>
                    <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(1)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                        Usar voz para preencher o email
                    </button>

                    <label className="block">
                        <span className="mb-1 text-gray-600">Mensagem</span>
                        <textarea
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => handleFieldChange(2)}
                            className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 mt-3"
                        ></textarea>
                    </label>
                    <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(2)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                        Usar voz para preencher a mensagem
                    </button>

                    <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}
