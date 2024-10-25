import { useEffect, useRef, useState } from 'react';

export default function FormularioDescoberta() {
    const [campo1, setCampo1] = useState('');
    const [campo2, setCampo2] = useState('');
    const [campo3, setCampo3] = useState('');
    const [campo4, setCampo4] = useState('');
    const [campo5, setCampo5] = useState('');
    const [campo6, setCampo6] = useState('');
    const [campo7, setCampo7] = useState('');
    const [campo8, setCampo8] = useState('');
    const [campo9, setCampo9] = useState('');
    const [campo10, setCampo10] = useState('');
    const [campo11, setCampo11] = useState('');
    const [campo12, setCampo12] = useState('');
    const [campo13, setCampo13] = useState('');
    const [campo14, setCampo14] = useState('');
    const [campo15, setCampo15] = useState('');
    const [campo16, setCampo16] = useState('');
    const [campo17, setCampo17] = useState('');
    const [campo18, setCampo18] = useState('');
    const [campo19, setCampo19] = useState('');
    const [campo20, setCampo20] = useState('');
    const [campo21, setCampo21] = useState('');
    const [campo22, setCampo22] = useState('');
    const [campo23, setCampo23] = useState('');
    const [instruction, setInstruction] = useState('Clique no botão abaixo ou aperte TAB no teclado para começar a preencher os campos por voz.');
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const [currentField, setCurrentField] = useState(0); // Controla o campo atual

    // Estado para controlar a seção atual
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.lang = 'pt-BR';

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                switch (currentField) {
                    case 0:
                        setCampo1(transcript);
                        setInstruction('Agora, por favor, diga a segunda resposta ou clique no botão correspondente.');
                        break;
                    case 1:
                        setCampo2(transcript);
                        setInstruction('Agora, por favor, diga a terceira resposta ou clique no botão correspondente.');
                        break;
                    case 2:
                        setCampo3(transcript);
                        setInstruction('Obrigado! Todos os campos da primeira seção estão preenchidos. Por favor, prossiga para a próxima seção.');
                        setCurrentField(3); // Muda para a próxima seção
                        break;
                    case 3:
                        setCampo4(transcript);
                        setInstruction('Agora, por favor, diga a quinta resposta ou clique no botão correspondente.');
                        break;
                    case 4:
                        setCampo5(transcript);
                        setInstruction('Agora, por favor, diga a sexta resposta ou clique no botão correspondente.');
                        break;
                    case 5:
                        setCampo6(transcript);
                        setInstruction('Obrigado! Todos os campos da segunda seção estão preenchidos. Por favor, prossiga para a próxima seção.');
                        setCurrentField(6); // Muda para a próxima seção
                        break;
                    case 6:
                        setCampo7(transcript);
                        setInstruction('Agora, por favor, diga a oitava resposta ou clique no botão correspondente.');
                        break;
                    case 7:
                        setCampo8(transcript);
                        setInstruction('Agora, por favor, diga a nona resposta ou clique no botão correspondente.');
                        break;
                    case 8:
                        setCampo9(transcript);
                        setInstruction('Obrigado! Todos os campos da terceira seção estão preenchidos. Por favor, prossiga para a próxima seção.');
                        setCurrentField(9); // Muda para a próxima seção
                        break;
                    case 9:
                        setCampo10(transcript);
                        setInstruction('Agora, por favor, diga a décima primeira resposta ou clique no botão correspondente.');
                        break;
                    case 10:
                        setCampo11(transcript);
                        setInstruction('Agora, por favor, diga a décima segunda resposta ou clique no botão correspondente.');
                        break;
                    case 11:
                        setCampo12(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 12:
                        setCampo13(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 13:
                        setCampo14(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 14:
                        setCampo15(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 15:
                        setCampo16(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 16:
                        setCampo17(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 17:
                        setCampo18(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 18:
                        setCampo19(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 19:
                        setCampo20(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 20:
                        setCampo21(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 21:
                        setCampo22(transcript);
                        setInstruction('Obrigado! Todos os campos estão preenchidos.');
                        break;
                    case 22:
                        setCampo23(transcript);
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

    // Função para mudar para a próxima seção
    const nextSection = () => {
        if (currentSection < 5) {
            setCurrentSection(currentSection + 1);
        }
    };

    // Função para voltar para a seção anterior
    const previousSection = () => {
        if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
        }
    };

    const handleFieldChange = (field: number) => {
        setCurrentField(field);
        switch (field) {
            case 0:
                setInstruction('Por favor, diga a primeira resposta.');
                break;
            case 1:
                setInstruction('Por favor, diga a segunda resposta.');
                break;
            case 2:
                setInstruction('Por favor, diga a terceira resposta.');
                break;
            case 3:
                setInstruction('Por favor, diga a quarta resposta.');
                break;
            case 4:
                setInstruction('Por favor, diga a quinta resposta.');
                break;
            case 5:
                setInstruction('Por favor, diga a sexta resposta.');
                break;
            case 6:
                setInstruction('Por favor, diga a sétima resposta.');
                break;
            case 7:
                setInstruction('Por favor, diga a oitava resposta.');
                break;
            case 8:
                setInstruction('Por favor, diga a nona resposta.');
                break;
            case 9:
                setInstruction('Por favor, diga a décima resposta.');
                break;
            case 10:
                setInstruction('Por favor, diga a décima primeira resposta.');
                break;
            case 11:
                setInstruction('Por favor, diga a esposta.');
                break;
            case 12:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 13:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 14:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 15:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 16:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 17:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 18:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 19:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 20:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 21:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 22:
                setInstruction('Por favor, diga a resposta.');
                break;
            case 23:
                setInstruction('Por favor, diga a resposta.');
                break;
            default:
                break;
        }
    };

    return (
        <section className="py-3 bg-terceira text-gray-900 min-h-[80vh] flex justify-center items-center" id="descoberta">
            <div className="grid grid-cols-1 px-3 mx-auto lg:px-8 md:grid-cols-2 md:divide-x md:pt-20">
                <div className='p-20'>
                    <h1 className="text-5xl font-bold text-white">Formulário de Descoberta</h1>

                    <p className="pt-3 text-2xl text-gray-100">Descubra produtos personalizados com nosso formulário de Descoberta</p>

                    <p className="pt-3 pb-4 text-xl text-gray-600">Estamos empolgados em apresentar nosso inovador Formulário de Descoberta, uma ferramenta projetada para ajudá-lo a encontrar os produtos que melhor atendem às suas necessidades. Ao preencher este formulário, você receberá uma lista personalizada de produtos que se adaptam perfeitamente ao seu perfil e preferências.</p>

                    <h2 className="text-2xl text-gray-100">Facilidade de Preenchimento</h2>
                    <p className="pt-3 pb-4 text-xl text-gray-600">Para tornar a experiência ainda mais acessível, oferecemos duas maneiras de preencher o formulário: você pode optar por digitar suas respostas ou utilizar a funcionalidade de reconhecimento de voz. Com a opção de áudio, você pode simplesmente falar suas respostas, tornando o processo mais rápido e conveniente. Essa flexibilidade é especialmente útil para aqueles que preferem ou necessitam de uma abordagem mais inclusiva.</p>

                    <h2 className="text-2xl text-gray-100">Sugestões Personalizadas</h2>
                    <p className="pt-3 pb-4 text-xl text-gray-600">Após completar o formulário, nossa inteligência irá analisar suas respostas e gerar uma lista de produtos recomendados. Isso garante que você receba opções que realmente correspondem ao que você busca, economizando tempo e esforço na pesquisa de produtos.</p>

                    <p className="pb-4 text-xl text-gray-600">Experimente nosso Formulário de Descoberta e descubra como é fácil encontrar o que você precisa com apenas algumas respostas! Sua satisfação é nossa prioridade, e estamos aqui para tornar sua jornada de compra mais simples e adaptável às suas necessidades.</p>
                </div>

                <form className="flex flex-col py-6 space-y-4 md:py-0 md:px-6">
                    
                {/* Seção 1 */}
                {currentSection === 0 && (
                    <div className='flex flex-col justify-center gap-3'>
                        <p className="text-lg text-gray-800">{instruction}</p>
                        <h2 className="text-2xl font-bold text-white">Informações pessoais</h2>
                        <label className="block">
                            <span className="mb-1 text-gray-600">Nome</span>
                            <input
                                type="text"
                                placeholder="Por favor, insira a primeira resposta."
                                value={campo1}
                                onChange={(e) => setCampo1(e.target.value)}
                                onFocus={() => handleFieldChange(0)}
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                            />
                        </label>
                        <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(0)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                            Usar voz para preencher o Nome
                        </button>

                        <label className="block">
                            <span className="mb-1 text-gray-600">Telefone</span>
                            <input
                                type="text"
                                placeholder="Por favor, insira a segunda resposta."
                                value={campo2}
                                onChange={(e) => setCampo2(e.target.value)}
                                onFocus={() => handleFieldChange(1)}
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                            />
                        </label>
                        <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(1)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                            Usar voz para preencher o Telefone
                        </button>

                        <label className="block">
                            <span className="mb-1 text-gray-600">Email</span>
                            <input
                                type="text"
                                placeholder="Por favor, insira a terceira resposta."
                                value={campo3}
                                onChange={(e) => setCampo3(e.target.value)}
                                onFocus={() => handleFieldChange(2)}
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                            />
                        </label>
                        <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(2)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                            Usar voz para preencher o Email
                        </button>

                        <label className="block">
                            <span className="mb-1 text-gray-600">Genero</span>
                            <input
                                type="text"
                                placeholder="Por favor, insira a quarta resposta."
                                value={campo4}
                                onChange={(e) => setCampo3(e.target.value)}
                                onFocus={() => handleFieldChange(3)}
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                            />
                        </label>
                        <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(3)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                            Usar voz para preencher o Genero
                        </button>
                    </div>
                    )}


                    {/* Seção 2 */}
                    {currentSection === 1 && (
                        <div className='flex flex-col justify-center gap-3'>
                            <h2 className="text-2xl font-bold text-white">Informações sobre a empresa</h2>
                            <label className="block">
                                <span className="mb-1 text-gray-600">Segmento</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira o segmento da empresa: serviços, industria, financeiro."
                                    value={campo5}
                                    onChange={(e) => setCampo4(e.target.value)}
                                    onFocus={() => handleFieldChange(4)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(4)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher o Segmento
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Tamanho</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira o tamanho sendo pequena, média ou grande."
                                    value={campo6}
                                    onChange={(e) => setCampo5(e.target.value)}
                                    onFocus={() => handleFieldChange(5)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(5)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher o Tamanho
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Área que vai receber o produto</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira sobre a área, por exemplo Qualidade, Financeiro, Operacional, Comercial, entre outras."
                                    value={campo7}
                                    onChange={(e) => setCampo6(e.target.value)}
                                    onFocus={() => handleFieldChange(6)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(6)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher o Área afetada
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Função</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira sua função na empresa."
                                    value={campo8}
                                    onChange={(e) => setCampo6(e.target.value)}
                                    onFocus={() => handleFieldChange(7)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(7)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher a Função
                            </button>
                        </div>
                        )}

                    {/* Seção 3 */}
                    {currentSection === 2 && (
                      <div className='flex flex-col justify-center gap-3'>
                        <h2 className="text-2xl font-bold text-white">Detalhes das atividades</h2>
                        <label className="block">
                            <span className="mb-1 text-gray-600">Quais estratégias de marketing mais eficientes você gostaria de implementar?</span>
                            <input
                                type="text"
                                placeholder="Por favor, insira a sétima resposta."
                                value={campo9}
                                onChange={(e) => setCampo7(e.target.value)}
                                onFocus={() => handleFieldChange(8)}
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                            />
                        </label>
                        <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(8)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                            Usar voz para preencher a Estratégia
                        </button>

                        <label className="block">
                            <span className="mb-1 text-gray-600">Como você gostaria de utilizar IA e automações nas atividades operacionais?</span>
                            <input
                                type="text"
                                placeholder="Por favor, insira a oitava resposta."
                                value={campo10}
                                onChange={(e) => setCampo8(e.target.value)}
                                onFocus={() => handleFieldChange(9)}
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                            />
                        </label>
                        <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(9)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                            Usar voz para preencher IA
                        </button>

                        <label className="block">
                            <span className="mb-1 text-gray-600">Quais estratégias de atendimento eficientes você deseja desenvolver?</span>
                            <input
                                type="text"
                                placeholder="Por favor, insira a nona resposta."
                                value={campo11}
                                onChange={(e) => setCampo9(e.target.value)}
                                onFocus={() => handleFieldChange(10)}
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                            />
                        </label>
                        <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(10)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                            Usar voz para preencher sobre Atendimento
                        </button>

                        <label className="block">
                            <span className="mb-1 text-gray-600">De que forma você espera aumentar a produtividade da sua equipe?</span>
                            <input
                                type="text"
                                placeholder="Por favor, insira a nona resposta."
                                value={campo12}
                                onChange={(e) => setCampo9(e.target.value)}
                                onFocus={() => handleFieldChange(11)}
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                            />
                        </label>
                        <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(11)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                            Usar voz para preencher
                        </button>
                    </div>
                    )}

                    {/* Seção 4 */}
                    {currentSection === 3 && (
                        <div className='flex flex-col justify-center gap-3'>
                             <h2 className="text-2xl font-bold text-white">Estratégias da empresa</h2>
                            <label className="block">
                                <span className="mb-1 text-gray-600">Como você gostaria de melhorar a comunicação entre seus clientes e sua equipe de atendimento?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima resposta."
                                    value={campo13}
                                    onChange={(e) => setCampo10(e.target.value)}
                                    onFocus={() => handleFieldChange(12)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(12)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher o Campo 10
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Como um ambiente integrado pode ajudar sua equipe a se manter entrosada?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima primeira resposta."
                                    value={campo14}
                                    onChange={(e) => setCampo11(e.target.value)}
                                    onFocus={() => handleFieldChange(13)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(13)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Como você deseja melhorar a capacitação das suas equipes de CRM?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima segunda resposta."
                                    value={campo15}
                                    onChange={(e) => setCampo12(e.target.value)}
                                    onFocus={() => handleFieldChange(14)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(14)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">O que você espera em relação à redução no custo de suporte e atendimento aos clientes?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima segunda resposta."
                                    value={campo16}
                                    onChange={(e) => setCampo12(e.target.value)}
                                    onFocus={() => handleFieldChange(15)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(15)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>
                        </div>
                    )}

                    {/* Seção 5 */}
                    {currentSection === 4 && (
                        <div className='flex flex-col justify-center gap-3'>
                             <h2 className="text-2xl font-bold text-white">Estratégias da empresa</h2>
                            <label className="block">
                                <span className="mb-1 text-gray-600">Como você planeja aumentar a conversão da sua loja virtual?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima resposta."
                                    value={campo16}
                                    onChange={(e) => setCampo10(e.target.value)}
                                    onFocus={() => handleFieldChange(16)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(16)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Quais canais online você deseja potencializar para vendas?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima primeira resposta."
                                    value={campo17}
                                    onChange={(e) => setCampo11(e.target.value)}
                                    onFocus={() => handleFieldChange(16)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(16)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Como você deseja acelerar e aumentar as vendas através de dados e ferramentas qualificadas?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima segunda resposta."
                                    value={campo18}
                                    onChange={(e) => setCampo12(e.target.value)}
                                    onFocus={() => handleFieldChange(17)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(17)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Que tipo de riqueza de dados você precisa para análise integrada do seu time de vendas?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima segunda resposta."
                                    value={campo19}
                                    onChange={(e) => setCampo12(e.target.value)}
                                    onFocus={() => handleFieldChange(18)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(18)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>
                        </div>
                    )}

                    {/* Seção 6 */}
                    {currentSection === 5 && (
                        <div className='flex flex-col justify-center gap-3'>
                             <h2 className="text-2xl font-bold text-white">Estratégias da empresa</h2>
                            <label className="block">
                                <span className="mb-1 text-gray-600">Como você espera melhorar a experiência do cliente com uma equipe de atendimento assertiva?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima resposta."
                                    value={campo20}
                                    onChange={(e) => setCampo10(e.target.value)}
                                    onFocus={() => handleFieldChange(19)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(19)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Quais diferenciais da sua marca você gostaria de mostrar aos clientes?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima primeira resposta."
                                    value={campo21}
                                    onChange={(e) => setCampo11(e.target.value)}
                                    onFocus={() => handleFieldChange(20)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(20)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Como você deseja criar jornadas personalizadas na segmentação dos seus clientes?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima segunda resposta."
                                    value={campo22}
                                    onChange={(e) => setCampo12(e.target.value)}
                                    onFocus={() => handleFieldChange(21)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(21)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>

                            <label className="block">
                                <span className="mb-1 text-gray-600">Por fim, como você pretende desenvolver um marketing de oportunidade eficiente?</span>
                                <input
                                    type="text"
                                    placeholder="Por favor, insira a décima segunda resposta."
                                    value={campo23}
                                    onChange={(e) => setCampo12(e.target.value)}
                                    onFocus={() => handleFieldChange(22)}
                                    className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3"
                                />
                            </label>
                            <button type="button" onClick={startRecognition} onFocus={() => handleFieldChange(22)} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-600 focus:ring-quinta hover:ring-quinta w-full">
                                Usar voz para preencher
                            </button>
                        </div>
                    )}

                    <div className="flex justify-between">
                        {currentSection > 0 && (
                            <button type="button" onClick={previousSection} className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-500">
                                Voltar
                            </button>
                        )}
                        {currentSection < 5 ? (
                            <button type="button" onClick={nextSection} className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">
                                Próximo
                            </button>
                        ) : (
                            <button type="submit" className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-500">
                                Enviar
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
