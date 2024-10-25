/* Preciso chamar o use client para simular visão do cliente, sem ele da erro */
'use client'

/* Importar UseState */
import { useState, useContext, useEffect } from 'react'


/* Importação dos componentes */
import TextReader from "../components/TextReader";
import VideoComponent from '../components/VideoComponent';
import { ReadingContext } from '@/components/RightSidebar'; // Importe o contexto

export default function Documentacao(){

    const { isReadingEnabled } = useContext(ReadingContext);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Evita a renderização no lado do servidor
    }

    return(
        
        <section className="px-5 md:p-10 min-h-[100vh]">
            
            <div className="md:px-4 md:py-16 mx-auto md:space-y-8 flex flex-col justify-center gap-10 mt-10 md:mt-0">
                
                <TextReader text="Documentação para acessibilidade" isReadingEnabled={isReadingEnabled}>
                <h2 className="text-4xl md:text-6xl font-bold">Documentação para acessibilidade</h2>
                </TextReader>

                <TextReader text="Descubra tudo sobre acessibilidade! Nossa página de documentação foi criada para oferecer recursos acessíveis a todos. Aqui você encontrará explicações detalhadas em texto, fotos com passo a passo e vídeos com descrições para tornar o aprendizado sobre acessibilidade fácil e acessível a todos. Explore nosso conteúdo e aprenda como tornar sua experiência digital inclusiva e amigável para todos os usuários." isReadingEnabled={isReadingEnabled}>
                <p className="font-manrope text-md md:text-2xl leading-7 md:leading-10">Descubra tudo sobre acessibilidade! Nossa página de documentação foi criada para oferecer recursos acessíveis a todos. Aqui você encontrará explicações detalhadas em texto, fotos com passo a passo e vídeos com descrições para tornar o aprendizado sobre acessibilidade fácil e acessível a todos. Explore nosso conteúdo e aprenda como tornar sua experiência digital inclusiva e amigável para todos os usuários.</p>
                </TextReader>

                {/* Vídeos com descrição */}
                <div>
                        
                        <TextReader text="Vídeos com descrição" isReadingEnabled={isReadingEnabled}>
                            <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700">Vídeos com descrição</h3>
                            </TextReader>
    
                            <div className="flex justify-start items-center gap-3 mb-5">
    
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-[#3EA0E7]">
                                            <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                            <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                        </svg>
    
                                        <TextReader text="Descrição" isReadingEnabled={isReadingEnabled}>
                                        <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                        </TextReader>
    
                                    </div>
                            
                                    <ul className="space-y-4">
    
                                        <div className="flex items-center space-x-2">
                                        
                                        <TextReader text="Assista a vídeos com acessibilidade! Nossos vídeos estão disponíveis com legendas para facilitar a compreensão. Além disso, oferecemos uma descrição do conteúdo abaixo do vídeo para explicar o que está sendo apresentado, caso a pessoa não possa ler as legendas. Dessa forma, garantimos que nosso conteúdo seja acessível a todos os públicos, independentemente de suas necessidades de acessibilidade." isReadingEnabled={isReadingEnabled}>
                                            <h4 className="font-manrope text-md leading-7 md:leading-10">Assista a vídeos com acessibilidade! Nossos vídeos estão disponíveis com legendas para facilitar a compreensão. Além disso, oferecemos uma descrição do conteúdo abaixo do vídeo para explicar o que está sendo apresentado, caso a pessoa não possa ler as legendas. Dessa forma, garantimos que nosso conteúdo seja acessível a todos os públicos, independentemente de suas necessidades de acessibilidade.</h4>
                                            </TextReader>
    
                                        </div>

                                        <VideoComponent videoSrc="/assets/Videos/video10-Documentacao.mp4" />
    
                                    </ul>
                        </div>
                
                <div className="space-y-8 flex flex-col justify-center gap-10">
                    
                    {/* Navegação usando TAB */}
                    <div>
                        
                    <TextReader text="Navegação" isReadingEnabled={isReadingEnabled}>
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 text-white">Navegação</h3>
                        </TextReader>

                            <div className="flex justify-start items-center gap-3 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-[#3EA0E7]">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>

                                <TextReader text="Curiosidade" isReadingEnabled={isReadingEnabled}>
                                <h2 className="font-bold text-xl md:text-2xl">Curiosidade</h2>
                                </TextReader>

                            </div>

                            <div className="font-manrope text-md leading-7 md:leading-10 flex flex-col gap-5">

                            <TextReader text="Ter um item de navegação pelo site que permita a navegação pelo teclado, especialmente usando a tecla tab, é fundamental para garantir a acessibilidade e a usabilidade do seu site. Essa prática facilita a interação para pessoas que não utilizam o mouse, como aquelas com deficiências motoras ou que preferem a navegação pelo teclado." isReadingEnabled={isReadingEnabled}>
                                <p>Ter um item de navegação pelo site que permita a navegação pelo teclado, especialmente usando a tecla tab, é fundamental para garantir a acessibilidade e a usabilidade do seu site. Essa prática facilita a interação para pessoas que não utilizam o mouse, como aquelas com deficiências motoras ou que preferem a navegação pelo teclado.</p>
                                </TextReader>

                                <TextReader text="A navegação usando a tecla tab é uma prática comum para muitos usuários, principalmente aqueles que utilizam apenas o teclado para navegar na web. Ter uma ordem lógica e previsível de foco ao usar a tecla tab torna a navegação mais fácil e eficiente. Isso também beneficia pessoas com deficiência visual, que podem utilizar softwares de leitura de tela que dependem dessa ordem para fornecer uma experiência de navegação fluida e compreensível." isReadingEnabled={isReadingEnabled}>
                                <p><strong>A navegação usando a tecla tab</strong> é uma prática comum para muitos usuários, principalmente aqueles que utilizam apenas o teclado para navegar na web. Ter uma ordem lógica e previsível de foco ao usar a tecla tab torna a navegação mais fácil e eficiente. Isso também beneficia pessoas com deficiência visual, que podem utilizar softwares de leitura de tela que dependem dessa ordem para fornecer uma experiência de navegação fluida e compreensível.</p>
                                </TextReader>

                                <TextReader text="Além disso, a navegação pelo teclado é útil em situações em que o uso do mouse é impraticável ou impossível </strong>, como em dispositivos com tela sensível ao toque ou em ambientes de trabalho onde o uso do mouse é desencorajado. Portanto, ter um site que suporte a navegação pelo teclado usando a tecla tab é essencial para garantir que todas as pessoas possam acessar e interagir com o seu conteúdo de forma eficaz e inclusiva." isReadingEnabled={isReadingEnabled}>
                                <p>Além disso, a navegação pelo teclado é útil em <strong> situações em que o uso do mouse é impraticável ou impossível </strong>, como em dispositivos com tela sensível ao toque ou em ambientes de trabalho onde o uso do mouse é desencorajado. Portanto, ter um site que suporte a navegação pelo teclado usando a tecla tab é essencial para garantir que todas as pessoas possam acessar e interagir com o seu conteúdo de forma eficaz e inclusiva.</p>
                                </TextReader>


                            </div>

                        <div className="flex justify-start items-center gap-3 mb-5">


                        </div>

                        <div className="flex justify-start items-center gap-3 mb-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Descrição" isReadingEnabled={isReadingEnabled}>
                                    <h2 className="font-bold text-xl md:text-2xl">Descrição</h2>
                                    </TextReader>

                        </div>
                        
                        <ul className="space-y-4">
                            <li className="space-y-1">
                                
                                <div className="flex items-center space-x-2">
                                    
                                <TextReader text="Explore nossa página com facilidade! Você pode navegar usando a tecla TAB para mover o foco entre os campos. Cada elemento receberá destaque conforme você navega, facilitando a identificação. Se estiver usando um leitor de tela, ele irá descrever cada elemento à medida que você navega. Se preferir, também é possível usar o mouse para navegar, com conteúdos claros e dinâmicos que se destacam conforme você interage com eles." isReadingEnabled={isReadingEnabled}>
                                    <h4 className="font-manrope text-md leading-7 md:leading-10">Explore nossa página com facilidade! Você pode navegar usando a tecla TAB para mover o foco entre os campos. Cada elemento receberá destaque conforme você navega, facilitando a identificação. Se estiver usando um leitor de tela, ele irá descrever cada elemento à medida que você navega. Se preferir, também é possível usar o mouse para navegar, com conteúdos claros e dinâmicos que se destacam conforme você interage com eles.</h4>
                                    </TextReader>

                                </div>
                             
                            </li>

                            <li className="space-y-1 flex flex-col gap-5">
                                
                                <div className="flex items-center space-x-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Processo" isReadingEnabled={isReadingEnabled}>
                                    <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                    </TextReader>

                                </div>

                                <TextReader text="Etapa 1" isReadingEnabled={isReadingEnabled}>
                                <p className="pt-5"><strong>Etapa 1</strong></p>
                                </TextReader>

                                <TextReader text="Explore nossa página inicial: com um menu simples, garantimos que tudo seja fácil e agradável para uma experiência ainda mais tranquila." isReadingEnabled={isReadingEnabled}>
                                <p className="font-sen text-md">Explore nossa página inicial: com um menu simples, garantimos que tudo seja fácil e agradável para uma experiência ainda mais tranquila.</p>
                                </TextReader>

                                <div className='border border-[#3EA0E7] rounded border-0'>
                                    <img src="/assets/Documentation/imagem1.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                                <TextReader text="Etapa 2" isReadingEnabled={isReadingEnabled}>
                                <p className="pt-5"><strong>Etapa 2</strong></p>
                                </TextReader>

                                <TextReader text="Para começar, selecione 'Acessibilidade' no menu." isReadingEnabled={isReadingEnabled}>
                                <p className="font-sen text-md">Para começar, selecione 'Acessibilidade' no menu.</p>
                                </TextReader>

                                <div className='border border-[#3EA0E7] rounded border-0'>
                                    <img src="/assets/Documentation/imagem2.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                                <TextReader text="Etapa 3" isReadingEnabled={isReadingEnabled}>
                                <p className="pt-5"><strong>Etapa 3</strong></p>
                                </TextReader>

                                <TextReader text="Em seguida, clique em 'Documentação' para entender o que foi criado e como utilizar cada recurso." isReadingEnabled={isReadingEnabled}>
                                <p className="font-sen text-md">Em seguida, clique em 'Documentação' para entender o que foi criado e como utilizar cada recurso.</p>
                                </TextReader>

                                <div className='border border-[#3EA0E7] rounded border-0'>
                                    <img src="/assets/Documentation/imagem3.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                                <TextReader text="tapa 4" isReadingEnabled={isReadingEnabled}>
                                <p className="pt-5"><strong>Etapa 4</strong></p>
                                </TextReader>

                                <TextReader text="O diferente desse passo a passo é que ele já é integrado com a leitura de tela, então se o usuário tiver  deficiência parcial ou
                                Total da visão, ele consegue saber por onde esta navegando e quais opções clicar." isReadingEnabled={isReadingEnabled}>
                                <p className="font-sen text-md">O diferente desse passo a passo é que ele já é integrado com a leitura de tela, então se o usuário tiver  deficiência parcial ou
                                Total da visão, ele consegue saber por onde esta navegando e quais opções clicar.</p>
                                </TextReader>

                                <div className='border border-[#3EA0E7] rounded border-0'>
                                    <img src="/assets/Documentation/imagem4.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                                <TextReader text="Etapa 5" isReadingEnabled={isReadingEnabled}>
                                <p className="pt-5"><strong>Etapa 5</strong></p>
                                </TextReader>

                                <TextReader text="Explore nossa documentação completa! 
                                    Nossa documentação é projetada para atender a todos os públicos, oferecendo três modelos de explicação: texto, fotos e vídeos. Se você prefere aprender lendo, temos explicações detalhadas em texto. Se prefere uma abordagem visual, oferecemos fotos passo a passo. E se prefere aprender assistindo, temos vídeos explicativos. Com esses três modelos, garantimos que você aprenda de forma simples e prática, independentemente do seu estilo de aprendizado." isReadingEnabled={isReadingEnabled}>
                                <p className="font-sen text-md">Explore nossa documentação completa! 
                                    Nossa documentação é projetada para atender a todos os públicos, oferecendo três modelos de explicação: texto, fotos e vídeos. Se você prefere aprender lendo, temos explicações detalhadas em texto. Se prefere uma abordagem visual, oferecemos fotos passo a passo. E se prefere aprender assistindo, temos vídeos explicativos. Com esses três modelos, garantimos que você aprenda de forma simples e prática, independentemente do seu estilo de aprendizado.
                                    </p>
                                    </TextReader>

                                <div className='border border-[#3EA0E7] rounded border-0'>
                                    <img src="/assets/Documentation/imagem5.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                            </li>

                            <li className="space-y-1">

                                <div className="flex items-center space-x-2 mb-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Vídeo" isReadingEnabled={isReadingEnabled}>
                                    <h4 className="font-bold text-xl md:text-2xl">Vídeo</h4>
                                    </TextReader>
                                    
                                    
                                </div>

                                <div>
                                    <VideoComponent videoSrc="/assets/Videos/video8-Tab.mp4" />
                                </div>


                            </li>
                        </ul>

                    </div>

                    {/* Leitor de tela */}
                    <div>
                        
                    <TextReader text="Leitor de tela" isReadingEnabled={isReadingEnabled}>
                        <h3 className="mb-5 text-2xl md:text-4xl font-bold text-red-700 text-white">Leitor de tela</h3>
                        </TextReader>

                            <div className="flex justify-start items-center gap-3 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-[#3EA0E7]">
                                    <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                    <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                </svg>

                                <TextReader text="Curiosidade" isReadingEnabled={isReadingEnabled}>
                                <h2 className="font-bold text-xl md:text-2xl">Curiosidade</h2>
                                </TextReader>

                            </div>

                            <div className="font-manrope text-md leading-7 md:leading-10 flex flex-col gap-5">
                                
                            <TextReader text="A leitura de texto parcial, também conhecida como text-to-speech (TTS) seletivo, é uma funcionalidade que permite ao usuário selecionar um trecho específico de texto em uma página da web e ouvi-lo em vez de lê-lo. Essa funcionalidade é especialmente útil para pessoas com dificuldades de leitura, déficits de atenção ou deficiências visuais." isReadingEnabled={isReadingEnabled}>
                                <p>A leitura de texto parcial, também conhecida como "text-to-speech" (TTS) seletivo, é uma funcionalidade que permite ao usuário selecionar um trecho específico de texto em uma página da web e ouvi-lo em vez de lê-lo. Essa funcionalidade é especialmente útil para pessoas com dificuldades de leitura, déficits de atenção ou deficiências visuais.</p>
                                </TextReader>

                                <TextReader text="Segundo a Organização Mundial da Saúde (OMS), estima-se que aproximadamente 2,2 bilhões de pessoas em todo o mundo tenham alguma forma de deficiência visual ou cegueira. No Brasil, de acordo com o último Censo do IBGE, cerca de 6,7% da população declarou ter alguma deficiência visual, o que representa aproximadamente 13 milhões de pessoas. Esses números destacam a relevância de implementar recursos de acessibilidade, como a leitura de texto parcial, para atender às necessidades dessa parcela significativa da população." isReadingEnabled={isReadingEnabled}>
                                <p className="text-[red]">Segundo a Organização Mundial da Saúde (OMS), estima-se que aproximadamente 2,2 bilhões de pessoas em todo o mundo tenham alguma forma de deficiência visual ou cegueira. No Brasil, de acordo com o último Censo do IBGE, cerca de 6,7% da população declarou ter alguma deficiência visual, o que representa aproximadamente 13 milhões de pessoas. Esses números destacam a relevância de implementar recursos de acessibilidade, como a leitura de texto parcial, para atender às necessidades dessa parcela significativa da população.</p>
                                </TextReader>

                                <TextReader text="Inclusão e Acessibilidade: A implementação da leitura de texto parcial torna o conteúdo mais acessível para pessoas com deficiência visual, dislexia, dificuldades de leitura e outros desafios que podem dificultar a compreensão do texto escrito." isReadingEnabled={isReadingEnabled}>
                                <p><strong>Inclusão e Acessibilidade:</strong> A implementação da leitura de texto parcial torna o conteúdo mais acessível para pessoas com deficiência visual, dislexia, dificuldades de leitura e outros desafios que podem dificultar a compreensão do texto escrito.</p>
                                </TextReader>
                                
                                <TextReader text="Melhoria da Experiência do Usuário: Oferecer a opção de ouvir o texto selecionado em vez de lê-lo pode melhorar a experiência do usuário, tornando a navegação mais fácil e agradável." isReadingEnabled={isReadingEnabled}>
                                <p><strong>Melhoria da Experiência do Usuário:</strong> Oferecer a opção de ouvir o texto selecionado em vez de lê-lo pode melhorar a experiência do usuário, tornando a navegação mais fácil e agradável.</p>
                                </TextReader>

                                <TextReader text="Atendimento a Diferentes Preferências de Consumo de Conteúdo: Nem todos os usuários preferem ou conseguem consumir conteúdo escrito. O TTS seletivo oferece uma alternativa valiosa para aqueles que preferem ou precisam ouvir o conteúdo." isReadingEnabled={isReadingEnabled}>
                                <p>Atendimento a Diferentes Preferências de Consumo de Conteúdo: Nem todos os usuários preferem ou conseguem consumir conteúdo escrito. O TTS seletivo oferece uma alternativa valiosa para aqueles que preferem ou precisam ouvir o conteúdo.</p>
                                </TextReader>

                                


                            </div>

                        <div className="flex justify-start items-center gap-3 mb-5 mt-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Processo" isReadingEnabled={isReadingEnabled}>
                                    <h4 className="font-bold text-xl md:text-2xl">Processo</h4>
                                    </TextReader>

                        </div>

                        <ul className="space-y-4">
                            <li className="space-y-1 flex flex-col gap-5">
                                
                                <div className="flex items-center space-x-2">
                                    
                                    <TextReader text="Explore nossa página inicial: com um menu simples, garantimos que tudo seja fácil e agradável para uma experiência ainda mais tranquila." isReadingEnabled={isReadingEnabled}>
                                    <p className="font-sen text-md">Explore nossa página inicial: com um menu simples, garantimos que tudo seja fácil e agradável para uma experiência ainda mais tranquila.</p>
                                    </TextReader>

                                </div>
                             
                            </li>

                            <li className="space-y-1 flex flex-col gap-5">
                                
                                <div className="flex items-center space-x-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Acessibilidade" isReadingEnabled={isReadingEnabled}>
                                    <h4 className="font-bold text-xl md:text-2xl">Acessibilidade</h4>
                                    </TextReader>

                                </div>

                                <TextReader text="Nossa documentação é projetada para atender a todos os públicos, oferecendo três modelos de explicação: texto, fotos e vídeos. Se você prefere aprender lendo, temos explicações detalhadas em texto. Se prefere uma abordagem visual, oferecemos fotos passo a passo. E se prefere aprender assistindo, temos vídeos explicativos. Com esses três modelos, garantimos que você aprenda de forma simples e prática, independentemente do seu estilo de aprendizado." isReadingEnabled={isReadingEnabled}>
                                <p className="font-sen text-md">Nossa documentação é projetada para atender a todos os públicos, oferecendo três modelos de explicação: texto, fotos e vídeos. Se você prefere aprender lendo, temos explicações detalhadas em texto. Se prefere uma abordagem visual, oferecemos fotos passo a passo. E se prefere aprender assistindo, temos vídeos explicativos. Com esses três modelos, garantimos que você aprenda de forma simples e prática, independentemente do seu estilo de aprendizado.</p>
                                </TextReader>

                                <div className='border border-[#3EA0E7] rounded border-0'>
                                    <img src="/assets/Documentation/imagem5.png" alt="Imagem que mostra o processo para acessar a documentação de acessibilidade" />
                                </div>

                            </li>

                            <li className="space-y-1">

                                <div className="flex items-center space-x-2 mb-5">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-[#3EA0E7]">
                                        <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                        <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>

                                    <TextReader text="Texto" isReadingEnabled={isReadingEnabled}>
                                    <h4 className="font-bold text-xl md:text-2xl">Texto</h4>
                                    </TextReader>
                                    
                                    
                                </div>

                                <div>
                                    <VideoComponent videoSrc="/assets/Videos/video8-Tab.mp4" />
                                </div>

                            </li>
                        </ul>

                    </div>
                    
                </div>

            </div>
        </section>
    )
}
