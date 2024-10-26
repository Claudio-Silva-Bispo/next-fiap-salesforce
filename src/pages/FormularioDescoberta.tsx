'use client'

import React, { useState, useRef } from 'react';

type FormDataChangeHandler = (name: string, value: string) => void;


export default function FormQuote() {

  const formRef = useRef<HTMLFormElement>(null); 

    // Estado para controlar a etapa atual do formulário
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    genero: "",
    segmento: "",
    tamanho: "",
    areaProduto: "",
    funcao: "",
    estrategiaMarketing: "",
    ia: "",
    estrategiaAtendimento: "",
    aumentoProdutividade: "",
    comunicacao: "",
    ambienteIntegrado: "",
    capacitacao: "",
    reducaoCusto: "",
    conversao: "",
    vendas: "",
    ferramentas: "",
    timeVendas: "",
    estrategiaEmpresa: "",
    marca: "",
    jornada: "",
    marketingOportunidade: "",
    });

  const handleFormDataChange: FormDataChangeHandler = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Função para avançar para a próxima etapa
  const nextStep = () => {
    console.log(formData);
    setCurrentStep(currentStep + 1);
  };

  // Função para voltar à etapa anterior
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Renderiza a etapa atual do formulário
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <InformacoesPessoais onChange={handleFormDataChange} />;
      case 2:
        return <InformacoesEmpresa onChange={handleFormDataChange} />;
      case 3:
        return <DetalhesAtividade onChange={handleFormDataChange} />;
      case 4:
        return <EstrategiaEmpresa onChange={handleFormDataChange} />;
    case 5:
        return <EstrategiaEmpresaDois onChange={handleFormDataChange} />;
    case 6:
        return <EstrategiaEmpresaTres onChange={handleFormDataChange} />;
      default:
        return <InformacoesPessoais onChange={handleFormDataChange} />;
    
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevenir a submissão do formulário se não estiver na última etapa
    if (currentStep < 4) {
      event.preventDefault();
      
      nextStep();

      console.log('Dados preenchidos', formData);

    } else {
      // Se estiver na última etapa, envia os dados para a API
      console.log('Enviando o formulário...', formData);

      // Validação de campos obrigatórios
      if (!formData.nome || !formData.telefone  || !formData.email || !formData.genero || !formData.segmento || !formData.tamanho || !formData.areaProduto || !formData.funcao || !formData.estrategiaMarketing || !formData.ia || !formData.estrategiaAtendimento || !formData.aumentoProdutividade || !formData.comunicacao || !formData.ambienteIntegrado || !formData.capacitacao || !formData.reducaoCusto || !formData.conversao || !formData.vendas || !formData.ferramentas || !formData.timeVendas || !formData.estrategiaEmpresa || !formData.marca || !formData.jornada || !formData.marketingOportunidade) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; 
    }

    console.log('Enviando o formulário com os dados:', formData);

      try {
          const response = await fetch('/api/criarDescoberta', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),

              
          });

          if (response.ok) {
              const result = await response.json();
              console.log('Resposta do servidor:', result);
              alert('Formulário enviado com sucesso!');
          } else {
              throw new Error('Falha ao enviar formulário.');
          }
      } catch (error) {
          console.error('Erro ao enviar dados:', error, formData);
          alert('Formulário cadastrado com sucesso!');
      }
  }
    
  };

  return (
    
    <form 
    ref={formRef}
    name='form-descoberta' 
    method='post'
    onSubmit={handleSubmit}
    id="FormDescoberta"
    className='grid md:flex px-5 md:px-10 justify-center items-center min-h-[80vh]'>
        
        <input type="hidden" name="form-name" value="form-descoberta" />
        <input type="hidden" name="nome" value={formData.nome} />
        <input type="hidden" name="telefone" value={formData.telefone} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="genero" value={formData.genero} />
        <input type="hidden" name="segmento" value={formData.segmento} />
        <input type="hidden" name="tamanho" value={formData.tamanho} />
        <input type="hidden" name="areaProduto" value={formData.areaProduto} />
        <input type="hidden" name="funcao" value={formData.funcao} />
        <input type="hidden" name="estrategiaMarketing" value={formData.estrategiaMarketing} />
        <input type="hidden" name="ia" value={formData.ia} />
        <input type="hidden" name="estrategiaAtendimento" value={formData.estrategiaAtendimento} />
        <input type="hidden" name="aumentoProdutividade" value={formData.aumentoProdutividade} />
        <input type="hidden" name="comunicacao" value={formData.comunicacao} />
        <input type="hidden" name="ambienteIntegrado" value={formData.ambienteIntegrado} />
        <input type="hidden" name="capacitacao" value={formData.capacitacao} />
        <input type="hidden" name="reducaoCusto" value={formData.reducaoCusto} />
        <input type="hidden" name="conversao" value={formData.conversao} />
        <input type="hidden" name="vendas" value={formData.vendas} />
        <input type="hidden" name="ferramentas" value={formData.ferramentas} />
        <input type="hidden" name="timeVendas" value={formData.timeVendas} />
        <input type="hidden" name="estrategiaEmpresa" value={formData.estrategiaEmpresa} />
        <input type="hidden" name="marca" value={formData.marca} />
        <input type="hidden" name="jornada" value={formData.jornada} />
        <input type="hidden" name="marketingOportunidade" value={formData.marketingOportunidade} />
        
        <div className="bg-quinta rounded-xl h-[580px] md:h-[550px] w-[100%] md:w-[50%] p-10 order-2 md:order-1 mb-20 md:mb-0 ">
        
        {renderStep()}
            <div className="flex justify-between">
            {currentStep > 1 && (
                <button type="button" onClick={prevStep} className="mt-4 bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded">
                Previous
                </button>
            )}
            {currentStep < 6 && (
                <button type="button" onClick={nextStep} className="mt-4 bg-white hover:bg-[#B3CEE5] text-quinta py-2 px-4 rounded">
                Next
                </button>
            )}
            {currentStep === 6 && (
                <button className="mt-4 bg-white hover:bg-primeira text-quinta py-2 px-4 rounded" type='submit'>
                Send
                </button>
            )}
            </div>

            
        </div>

        <div className='p-10 w-1/2'>
                    <h1 className="text-5xl font-bold">Formulário de Descoberta</h1>

                    <p className="pt-3 text-2xl">Descubra produtos personalizados com nosso formulário de Descoberta</p>

                    <p className="pt-3 pb-4 text-md">Estamos empolgados em apresentar nosso inovador Formulário de Descoberta, uma ferramenta projetada para ajudá-lo a encontrar os produtos que melhor atendem às suas necessidades. Ao preencher este formulário, você receberá uma lista personalizada de produtos que se adaptam perfeitamente ao seu perfil e preferências.</p>

                    <h2 className="text-2xl">Facilidade de Preenchimento</h2>
                    <p className="pt-3 pb-4 text-md">Para tornar a experiência ainda mais acessível, oferecemos duas maneiras de preencher o formulário: você pode optar por digitar suas respostas ou utilizar a funcionalidade de reconhecimento de voz. Com a opção de áudio, você pode simplesmente falar suas respostas, tornando o processo mais rápido e conveniente. Essa flexibilidade é especialmente útil para aqueles que preferem ou necessitam de uma abordagem mais inclusiva.</p>

                    <h2 className="text-2xl ">Sugestões Personalizadas</h2>
                    <p className="pt-3 pb-4 text-md">Após completar o formulário, nossa inteligência irá analisar suas respostas e gerar uma lista de produtos recomendados. Isso garante que você receba opções que realmente correspondem ao que você busca, economizando tempo e esforço na pesquisa de produtos.</p>

                    <p className="pb-4 text-md">Experimente nosso Formulário de Descoberta e descubra como é fácil encontrar o que você precisa com apenas algumas respostas! Sua satisfação é nossa prioridade, e estamos aqui para tornar sua jornada de compra mais simples e adaptável às suas necessidades.</p>
                </div>

    </form>

    
  );
};



interface InformacoesPessoaisProps {
    onChange: FormDataChangeHandler;
  }
  
  const InformacoesPessoais: React.FC<InformacoesPessoaisProps> = ({ onChange }) => {
    return (
      <div className="mb-5">
        <h2 className="text-lg font-orelega leading-7 text-white uppercase">Informações pessoais</h2>
        <div className="mt-5 flex gap-x-1 gap-y-6 flex-col">
          <div className="sm:col-span-3">
            <label htmlFor="nome" className="block text-sm font-sen leading-6 text-gray-900">
              Nome
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="nome"
                id="nome"
                autoComplete="nome"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </div>
          </div>
  
          <div className="sm:col-span-3">
            <label htmlFor="telefone" className="block text-sm font-sen leading-6 text-gray-900">
              Telefone
            </label>
            <div className="mt-2">
              <input
                type="phone"
                name="telefone"
                id="telefone"
                autoComplete="phone"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </div>
          </div>
  
          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-sen leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              />
            </div>
          </div>
  
          <div className="sm:col-span-3">
            <label htmlFor="genero" className="block text-sm font-sen leading-6 text-gray-900">
              Gênero
            </label>
            <div className="mt-2">
              <select
                id="genero"
                name="genero"
                autoComplete="genero"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              >
                <option>Por favor, selecione o gênero</option>
                <option>Masculino</option>
                <option>Feminino</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  interface InformacoesEmpresaProps {
    onChange: FormDataChangeHandler;
  }
  
  const InformacoesEmpresa: React.FC<InformacoesEmpresaProps> = ({ onChange }) => {
    return (
      <div className="mb-5">
        <h2 className="text-lg font-orelega leading-7 text-white uppercase">Informações da empresa</h2>
        <div className="mt-5 flex gap-x-1 gap-y-6 flex-col">
          <div className="sm:col-span-3">
            <label htmlFor="segmento" className="block text-sm font-sen leading-6 text-gray-900">
              Segmento
            </label>
            <div className="mt-2">
              <select
                id="segmento"
                name="segmento"
                autoComplete="segmento"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              >
                <option>Por favor, selecione</option>
                <option>Finanças</option>
                <option>Comércio</option>
                <option>Saúde</option>
              </select>
            </div>
          </div>
  
          <div className="sm:col-span-3">
            <label htmlFor="tamanho" className="block text-sm font-sen leading-6 text-gray-900">
              Tamanho
            </label>
            <div className="mt-2">
              <select
                id="tamanho"
                name="tamanho"
                autoComplete="tamanho"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              >
                <option>Por favor, selecione</option>
                <option>Pequena</option>
                <option>Média</option>
                <option>Grande</option>
              </select>
            </div>
          </div>
  
          <div className="sm:col-span-3">
            <label htmlFor="areaProduto" className="block text-sm font-sen leading-6 text-gray-900">
              Área do Produto
            </label>
            <div className="mt-2">
              <select
                id="areaProduto"
                name="areaProduto"
                autoComplete="areaProduto"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              >
                <option>Por favor, selecione</option>
                <option>Desenvolvimento</option>
                <option>Vendas</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
  
          <div className="sm:col-span-3">
            <label htmlFor="funcao" className="block text-sm font-sen leading-6 text-gray-900">
              Função
            </label>
            <div className="mt-2">
              <select
                id="funcao"
                name="funcao"
                autoComplete="funcao"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                onChange={(e) => onChange(e.target.name, e.target.value)}
              >
                <option>Por favor, selecione</option>
                <option>Gerente</option>
                <option>Analista</option>
                <option>Assistente</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  interface DetalhesAtividadeProps {
    onChange: FormDataChangeHandler;
}

const DetalhesAtividade: React.FC<DetalhesAtividadeProps> = ({ onChange }) => {
    return (
        <div className="mb-5">
            <h2 className="text-lg font-orelega leading-7 text-white uppercase">Atividade</h2>

            <div className="mt-5 flex gap-x-1 gap-y-6 flex-col">
                <div className='sm:col-span-3'>
                    <label htmlFor="estrategiaMarketing" className="block text-sm font-sen leading-6 text-gray-900">
                        Estratégia de Marketing
                    </label>
                    <div className="mt-2">
                        <select
                            id="estrategiaMarketing"
                            name="estrategiaMarketing"
                            autoComplete="estrategiaMarketing"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione</option>
                            <option>Marketing Digital</option>
                            <option>Marketing de Conteúdo</option>
                            <option>Marketing de Influência</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="ia" className="block text-sm font-sen leading-6 text-gray-900">
                        Inteligência Artificial
                    </label>
                    <div className="mt-2">
                        <select
                            id="ia"
                            name="ia"
                            autoComplete="ia"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione</option>
                            <option>Sim</option>
                            <option>Não</option>
                            <option>Em avaliação</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="estrategiaAtendimento" className="block text-sm font-sen leading-6 text-gray-900">
                        Estratégia de Atendimento
                    </label>
                    <div className="mt-2">
                        <select
                            id="estrategiaAtendimento"
                            name="estrategiaAtendimento"
                            autoComplete="estrategiaAtendimento"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione</option>
                            <option>Atendimento Pessoal</option>
                            <option>Atendimento Online</option>
                            <option>Atendimento Híbrido</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="aumentoProdutividade" className="block text-sm font-sen leading-6 text-gray-900">
                        Aumento de Produtividade
                    </label>
                    <div className="mt-2">
                        <select
                            id="aumentoProdutividade"
                            name="aumentoProdutividade"
                            autoComplete="aumentoProdutividade"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione</option>
                            <option>Sim</option>
                            <option>Não</option>
                            <option>Em progresso</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface EstrategiaEmpresaProps {
    onChange: FormDataChangeHandler;
}

const EstrategiaEmpresa: React.FC<EstrategiaEmpresaProps> = ({ onChange }) => {
    return (
        <div className="mb-5">
            <h2 className="text-lg font-orelega leading-7 text-white uppercase ">Estratégias da empresa</h2>

            <div className="mt-5 flex gap-x-1 gap-y-6 flex-col">
                <div className='sm:col-span-3'>
                    <label htmlFor="comunicacao" className="block text-sm font-sen leading-6 text-gray-900">
                        Comunicação
                    </label>
                    <div className="mt-2">
                        <select
                            id="comunicacao"
                            name="comunicacao"
                            autoComplete="comunicacao"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione a estratégia de comunicação</option>
                            <option>Interna</option>
                            <option>Externa</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="ambienteIntegrado" className="block text-sm font-sen leading-6 text-gray-900">
                        Ambiente Integrado
                    </label>
                    <div className="mt-2">
                        <select
                            id="ambienteIntegrado"
                            name="ambienteIntegrado"
                            autoComplete="ambienteIntegrado"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione a estratégia de ambiente integrado</option>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="capacitacao" className="block text-sm font-sen leading-6 text-gray-900">
                        Capacitação
                    </label>
                    <div className="mt-2">
                        <select
                            id="capacitacao"
                            name="capacitacao"
                            autoComplete="capacitacao"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione a estratégia de capacitação</option>
                            <option>Presencial</option>
                            <option>Online</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="reducaoCusto" className="block text-sm font-sen leading-6 text-gray-900">
                        Redução de Custo
                    </label>
                    <div className="mt-2">
                        <select
                            id="reducaoCusto"
                            name="reducaoCusto"
                            autoComplete="reducaoCusto"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione a estratégia de redução de custo</option>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface EstrategiaEmpresaDoisProps {
    onChange: FormDataChangeHandler;
}

const EstrategiaEmpresaDois: React.FC<EstrategiaEmpresaDoisProps> = ({ onChange }) => {
    return (
        <div className="mb-5">
            <h2 className="text-lg font-orelega leading-7 text-white uppercase">Estratégias da empresa parte dois</h2>
            <div className="mt-5 flex gap-x-1 gap-y-6 flex-col">

                <div className='sm:col-span-3'>
                    <label htmlFor="conversao" className="block text-sm font-sen leading-6 text-gray-900">
                        Conversão
                    </label>
                    <div className="mt-2">
                        <select
                            id="conversao"
                            name="conversao"
                            autoComplete="conversao"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione a conversão</option>
                            <option>Opção 1</option>
                            <option>Opção 2</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="vendas" className="block text-sm font-sen leading-6 text-gray-900">
                        Vendas
                    </label>
                    <div className="mt-2">
                        <select
                            id="vendas"
                            name="vendas"
                            autoComplete="vendas"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione as vendas</option>
                            <option>Opção 1</option>
                            <option>Opção 2</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="ferramentas" className="block text-sm font-sen leading-6 text-gray-900">
                        Ferramentas
                    </label>
                    <div className="mt-2">
                        <select
                            id="ferramentas"
                            name="ferramentas"
                            autoComplete="ferramentas"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione as ferramentas</option>
                            <option>Opção 1</option>
                            <option>Opção 2</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="timeVendas" className="block text-sm font-sen leading-6 text-gray-900">
                        Time de Vendas
                    </label>
                    <div className="mt-2">
                        <select
                            id="timeVendas"
                            name="timeVendas"
                            autoComplete="timeVendas"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione o time de vendas</option>
                            <option>Opção 1</option>
                            <option>Opção 2</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
    );
};

interface EstrategiaEmpresaTresProps {
    onChange: FormDataChangeHandler;
}

const EstrategiaEmpresaTres: React.FC<EstrategiaEmpresaTresProps> = ({ onChange }) => {
    return (
        <div className="mb-5">
            <h2 className="text-lg font-orelega leading-7 text-white uppercase">Estratégias da empresa parte três</h2>

            <div className="mt-5 flex gap-x-1 gap-y-6 flex-col">

            <div className='sm:col-span-3'>
                    <label htmlFor="marca" className="block text-sm font-sen leading-6 text-gray-900">
                        Estratégia empresa
                    </label>

                    <div className="mt-2">
                        <select
                            id="estrategiaEmpresa"
                            name="estrategiaEmpresa"
                            autoComplete="estrategiaEmpresa"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione uma estratégia</option>
                            <option>Conectar todo processo</option>
                            <option>Automatizar</option>
                            <option>Criar o ambiente</option>
                            <option>Não sabe</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="marca" className="block text-sm font-sen leading-6 text-gray-900">
                        Marca
                    </label>

                    <div className="mt-2">
                        <select
                            id="marca"
                            name="marca"
                            autoComplete="marca"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione a marca</option>
                            <option>Marca A</option>
                            <option>Marca B</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="jornada" className="block text-sm font-sen leading-6 text-gray-900">
                        Jornada
                    </label>

                    <div className="mt-2">
                        <select
                            id="jornada"
                            name="jornada"
                            autoComplete="jornada"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione a jornada</option>
                            <option>Jornada 1</option>
                            <option>Jornada 2</option>
                        </select>
                    </div>
                </div>

                <div className='sm:col-span-3'>
                    <label htmlFor="marketingOportunidade" className="block text-sm font-sen leading-6 text-gray-900">
                        Oportunidade de Marketing
                    </label>

                    <div className="mt-2">
                        <select
                            id="marketingOportunidade"
                            name="marketingOportunidade"
                            autoComplete="marketingOportunidade"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                            <option>Por favor, selecione a oportunidade</option>
                            <option>Oportunidade 1</option>
                            <option>Oportunidade 2</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};









