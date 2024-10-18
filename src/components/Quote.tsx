'use client'

import React, { useState, useRef } from 'react';

type FormDataChangeHandler = (name: string, value: string) => void;


export default function Quote() {

  const formRef = useRef<HTMLFormElement>(null); 

  // Estado para controlar a etapa atual do formulário
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    room: '',
    pet: '',
    frequency:'',
    date: '',
    hour:'',
    message:''
    
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
        return <PersonalInfo onChange={handleFormDataChange} />;
      case 2:
        return <ResidenceInfo onChange={handleFormDataChange} />;
      case 3:
        return <AdditionalInfo onChange={handleFormDataChange} />;
      case 4:
        return <Schedule onChange={handleFormDataChange} />;
      default:
        return <PersonalInfo onChange={handleFormDataChange} />;
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
      if (!formData.firstName || !formData.phone || !formData.email || !formData.streetAddress || !formData.city || !formData.region || !formData.postalCode || !formData.room || !formData.pet || !formData.frequency || !formData.date || !formData.hour || !formData.message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; // interrompe o envio se algum campo obrigatório estiver vazio
    }

    console.log('Enviando o formulário com os dados:', formData);

      try {
          const response = await fetch('/api/criarOrcamento', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
                
                {
                  ...formData,
                  room: formData.room.toString(),  // Garantir que valores numéricos são convertidos para strings, se necessário
                  pet: formData.pet,
                  frequency: formData.frequency
                }
              ),

              
          });

          if (response.ok) {
              const result = await response.json();
              console.log('Resposta do servidor:', result);
              alert('Orçamento enviado com sucesso!');
          } else {
              throw new Error('Falha ao enviar orçamento.');
          }
      } catch (error) {
          console.error('Erro ao enviar dados:', error, formData);
          alert('Your request was sent');
      }
  }
    
  };

  return (
    
    <form 
    ref={formRef}
    name='form-quote-oliver' 
    method='post'
    data-netlify="true"
    netlify-honeypot="bot-field"
    onSubmit={handleSubmit}
    id="quote"
    className='bg-primeira grid md:flex p-3 justify-center items-center min-h-[640px]'>
        
        <input type="hidden" name="form-name" value="form-quote-oliver" />
        <input type="hidden" name="firstName" value={formData.firstName} />
        <input type="hidden" name="phone" value={formData.phone} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="streetAddress" value={formData.streetAddress} />
        <input type="hidden" name="city" value={formData.city} />
        <input type="hidden" name="region" value={formData.region} />
        <input type="hidden" name="postalCode" value={formData.postalCode} />
        <input type="hidden" name="room" value={formData.room} />
        <input type="hidden" name="pet" value={formData.pet} />
        <input type="hidden" name="frequency" value={formData.frequency} />
        <input type="hidden" name="date" value={formData.date} />
        <input type="hidden" name="hour" value={formData.hour} />
        <input type="hidden" name="message" value={formData.message} />
        
        <div className="bg-white rounded-xl h-[580px] md:h-[550px] w-[100%] md:w-[50%] p-10 order-2 md:order-1 mb-20 md:mb-0">
        
        {renderStep()}
            <div className="flex justify-between">
            {currentStep > 1 && (
                <button type="button" onClick={prevStep} className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta">
                Previous
                </button>
            )}
            {currentStep < 4 && (
                <button type="button" onClick={nextStep} className="mt-4 bg-primeira hover:bg-primeira text-gray-600 py-2 px-4 rounded focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta">
                Next
                </button>
            )}
            {currentStep === 4 && (
                <button className="mt-4 bg-primeira hover:bg-green-700 text-white py-2 px-4 rounded" type='submit'>
                Send
                </button>
            )}
            </div>

            
        </div>

        <div className="grid md:flex md:flex-col md:justify-center mt-0 w-[100%] order-1 m:p-10">
                
          <h1 className='text-4xl m:text-6xl tracking-tight text-[#FFFF] uppercase mt-10 md:mt-0'>Obtenha seu Orçamento Hoje</h1>
          <p className='mt-5 mb-5 text-xl md:text-2xl text-gray-600 w-[100%]'>Para agendar um serviço de limpeza ou solicitar um orçamento, basta preencher o formulário.</p>
          <p className='mt-5 mb-5 text-xl md:text-2xl text-gray-600 w-[100%]'>Deixe-nos saber os detalhes do serviço que você precisa, seja para limpeza residencial, comercial ou para um evento especial.</p>
          <p className='mt-5 mb-10 text-xl md:text-2xl text-gray-600 w-[100%]'>Estamos aqui para atender suas necessidades e garantir a limpeza e o conforto que você merece.</p>

        </div>


    </form>

    
  );
};

interface PersonalInfoProps {
    onChange: FormDataChangeHandler;
  }

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onChange }) => {
  // Formulário de informações pessoais
  return (
    <div className="mb-5">
                    
        <h2 className="text-lg leading-7 text-segunda font-bold uppercase ">Personal information</h2>

        <div className="mt-5 flex gap-x-1 gap-y-6  flex-col">
        
            <div className="sm:col-span-3">

                <label htmlFor="firstName" className="block text-sm leading-6 text-gray-600">
                    Full name
                </label>

                <div className="mt-2">
                    
                    <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </div>

            </div>

            <div className="sm:col-span-3">

                <label htmlFor="phone" className="block text-sm leading-6 text-gray-600">
                    Phone number
                </label>

                <div className="mt-2">
                    
                    <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </div>
            </div>

            <div className="sm:col-span-4">

                <label htmlFor="email" className="block text-sm leading-6 text-gray-600">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    />

                </div>

            </div>

        </div>
    </div>
  );
};

interface ResidenceInfoProps {
    onChange: FormDataChangeHandler;
  }

const ResidenceInfo: React.FC<ResidenceInfoProps> = ({ onChange }) => {
  // Formulário de informações da residência
  return (
                    
    <div className="w-full">

        <h2 className="text-lg leading-7 text-segunda font-bold mt-10 uppercase">Home information</h2>
        
        <div className="mt-5 flex-col md:block md:grid-cols-1 md:gap-x-6 md:gap-y-5 ">
            
            <div className="col-span-full">
                
                <label htmlFor="street-address" className="block text-sm leading-2 text-gray-600">
                    Street address
                </label>

                <div className="mt-2">
                    
                    <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    autoComplete="streetAddress"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </div>

            </div>

            <div className="sm:col-span-2 sm:col-start-1">
                
                <label htmlFor="city" className="block text-sm leading-6 text-gray-600">
                    City
                </label>

                <div className="mt-2">
                    
                    <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="city"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </div>

            </div>

            <div className="sm:col-span-2">
            
                <label htmlFor="region" className="block text-sm leading-6 text-gray-600">
                    State / Province
                </label>

                <div className="mt-2">
                    
                    <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="region"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </div>

            </div>

            <div className="sm:col-span-2">

                <label htmlFor="postal-code" className="block text-sm leading-6 text-gray-600">
                    ZIP / Postal code
                </label>

                <div className="mt-2">
                    
                    <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    autoComplete="postalCode"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </div>
            </div>

        </div>
    </div>
                    
  );
};

interface AdditionalInfoProps {
    onChange: FormDataChangeHandler;
  }

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ onChange }) => {
  // Formulário de informações adicionais
  return (
    <div className="w-full">

        <h2 className="text-lg leading-7 uppercase text-segunda mt-10 font-bold">Additional information</h2>
                    
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:flex-col">

            <div className='sm:col-span-3'>
                
                <label htmlFor="rooms" className="block text-sm leading-6 text-gray-600">
                How many rooms?
                </label>
                
                <div className="mt-2">
                        
                        <select
                        id="room"
                        name="room"
                        autoComplete="room"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Select an option</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>More</option>
                        </select>
                </div>

            </div>

            <div className='sm:col-span-3'>
                    
                <label htmlFor="pets" className="block text-sm leading-6 text-gray-600">
                Do you have pets?
                </label>
                
                <div className="mt-2">
                    
                    <select
                        id="pet"
                        name="pet"
                        autoComplete="pet"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Select an option</option>
                        <option>Yes</option>
                        <option>No</option>

                    </select>
                </div>

            </div>

            <div className='sm:col-span-3'>
                    
                <label htmlFor="frequency" className="block text-sm leading-6 text-gray-600">
                What is the frequency?
                </label>
                
                <div className="mt-2">
                    <select
                        id="frequency"
                        name="frequency"
                        autoComplete="frequency"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        >
                        <option>Select an option</option>
                        <option>Once</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Biweekly</option>
                        <option>Monthly</option>

                    </select>
                </div>

            </div>

        </div>
    </div>
  );
};

interface ScheduleProps {
    onChange: FormDataChangeHandler;
  }

const Schedule: React.FC<ScheduleProps> = ({ onChange }) => {
  // Formulário de agendamento
  return (


    <section className="w-full" id="FormQuote">
                    
        <h2 className="text-lg leading-7 uppercase text-segunda mt-10 font-bold">Appointment</h2>

        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
            
            <div className='sm:col-span-3'>
                
                <label htmlFor="date" className="block text-sm leading-6 text-gray-600">
                    Date
                </label>
                
                <div className="mt-2">
                        
                        <input type="date"
                        id="date"
                        name="date"
                        autoComplete="date"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-5 bg-white"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        ></input>
                </div>

            </div>

            <div className='sm:col-span-3'>
                
                <label htmlFor="hour" className="block text-sm leading-6 text-gray-600">
                    Hour
                </label>
                
                <div className="mt-2">
                        
                        <input type="time"
                        id="hour"
                        name="hour"
                        autoComplete="hour"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 p-5 bg-white"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        />
                </div>
            </div>

            <div className="sm:col-span-6">

                <label htmlFor='message' className="flex mb-2 text-sm text-gray-600">Aditional information</label>

                <textarea id="message" name='message' rows={5} className="block w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-5" placeholder="Leave a comment..." onChange={(e) => onChange(e.target.name, e.target.value)}></textarea>

            </div>

        </div>

    
    </section>
  );
};
