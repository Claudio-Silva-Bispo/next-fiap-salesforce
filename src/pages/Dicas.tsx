import * as React from 'react';
// Instalar npm install @mui/material @emotion/react @emotion/styled
// Instalar npm install @mui/icons-material

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Icones
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import AddHomeIcon from '@mui/icons-material/AddHome';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: '1px solid #e5e7eb', // Estilo da borda como no exemplo
  borderRadius: '8px', // Bordas arredondadas como no exemplo
  marginBottom: '8px', // Espaçamento entre os accordions
  '&:last-child': {
    marginBottom: '0',
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(() => ({
  backgroundColor: '#ffffff', 
  padding: '16px', // Espaçamento interno
  '& .MuiAccordionSummary-content': {
    marginLeft: '8px',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-root': {
    fontSize: '1rem',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '16px',
  backgroundColor: '#f9fafb',
}));

export default function Dicas(){
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return(

        <section className="bg-[#DEE8FE] min-h-[80vh] flex flex-col
         justify-start items-start lg:pt-20 p-6">
            <div>
                <h1 className="text-5xl font-bold mb-10 text-start pt-20 text-gray-700">Dicas úteis para você</h1>
            </div>

            <div className="space-y-4">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <AddHomeIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>Como preparar sua casa para um serviço de limpeza profissional Cleaning?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                        Contratar um serviço de limpeza profissional é uma excelente maneira de garantir que sua casa permaneça impecável, mesmo nas semanas mais corridas. No entanto, há alguns passos que você pode seguir antes da chegada da equipe de limpeza para maximizar a eficiência e garantir que você aproveite ao máximo a visita. Aqui está um guia sobre como preparar sua casa para um serviço de limpeza profissional.
                        
                        <span className='font-bold'>1. Desapegue das áreas comuns</span>
                        A limpeza ao redor da bagunça pode atrasar o processo de limpeza. Reserve alguns minutos para guardar itens como brinquedos, roupas, louças e outros pertences pessoais das bancadas, pisos e mesas. Isso permite que a equipe de limpeza se concentre na limpeza profunda em vez de arrumar a bagunça.

                        <span className='font-bold'>2. Guarde itens valiosos e pessoais</span>
                        Embora os serviços de limpeza profissional sejam confiáveis, é uma boa prática guardar itens valiosos ou sensíveis, como jóias, dinheiro, documentos importantes ou pequenos eletrônicos. Isso lhe dá tranquilidade e garante que nada seja acidentalmente deslocado durante a limpeza.
                        
                        <span className='font-bold'>3. Comunique instruções especiais </span>
                        Cada casa é diferente, então, se houver áreas específicas que você deseja que a equipe de limpeza foque ou evite, informe-os com antecedência. Seja um item frágil que requer manuseio cuidadoso ou um cômodo específico que precisa de atenção extra, a comunicação clara garante que suas necessidades sejam atendidas.

                        <span className='font-bold'>4. Forneça acesso a produtos e equipamentos de limpeza</span>
                        A maioria dos serviços de limpeza profissional traz seus próprios suprimentos, mas se você tiver produtos específicos que prefere que eles usem, certifique-se de que estejam facilmente acessíveis. Além disso, verifique se todas as áreas necessárias da sua casa, como armários de utilidades ou porões, estão destrancadas e acessíveis.

                        <span className='font-bold'>5. Coloque os animais de estimação em um espaço seguro</span>
                        Animais de estimação podem ficar curiosos e ansiosos com pessoas novas,
                        especialmente quando há equipamentos de limpeza envolvidos. Para garantir
                        que seus animais de estimação estejam confortáveis e que a equipe de
                        limpeza possa trabalhar sem distrações, coloque-os em um espaço seguro e
                        protegido, como um cômodo separado ou suas gaiolas, durante a limpeza.

                        <span className='font-bold'>6. Anote áreas problemáticas</span>
                        Se houver manchas, derramamentos ou áreas específicas que precisam de
                        atenção extra, faça uma lista ou aponte-as para a equipe de limpeza quando
                        eles chegarem. Isso ajuda a equipe a abordar suas principais preocupações e
                        garante que você fique satisfeito com os resultados.

                        <span className='font-bold'>7.  Prepare sua casa para o serviço</span>
                        Para certos tipos de limpeza, como limpeza de carpetes ou limpeza profunda
                        da cozinha, pode haver etapas adicionais que você precisa seguir, como
                        mover móveis ou esvaziar armários. Verifique com seu serviço de limpeza
                        com antecedência para ver se há preparações especiais necessárias.

                        <span className='font-bold'>8. Garanta fácil acesso à sua casa</span>
                        Se você não estiver em casa durante a limpeza, faça arranjos para que a
                        equipe de limpeza possa entrar. Você pode deixar uma chave em um local
                        seguro, fornecer um código de porta ou pedir a um vizinho para deixá-los
                        entrar. Instruções claras garantem que a equipe possa começar no horário
                        sem atrasos.

                        <span className='font-bold'>9. Discuta suas preferências</span>
                        Se você tiver preferências sobre como as camas são feitas, produtos
                        específicos que deseja que sejam usados ou certas técnicas de limpeza,
                        discuta essas preferências com seu serviço de limpeza com antecedência
                        para garantir que sua casa seja limpa exatamente como você gosta.

                        <span className='font-bold'>10. Revise o plano de serviço</span>
                        Antes do dia da limpeza, revise o plano de serviço ou a lista de verificação
                        fornecida pela empresa de limpeza. Isso lhe dará uma ideia clara das tarefas
                        que serão realizadas e do que você pode precisar preparar. Se tiver dúvidas
                        ou pedidos adicionais, não hesite em perguntar.

                        <span className='font-bold'>Benefícios</span>
                        Preparar sua casa para um serviço de limpeza profissional não precisa ser uma
                        tarefa assustadora. Seguindo esses passos simples, você pode ajudar a equipe de
                        limpeza a trabalhar de forma mais eficiente, garantindo que sua casa seja limpa de
                        acordo com suas expectativas. Na Splendid Cleaning, nos esforçamos para tornar o
                        processo o mais tranquilo possível. Entre em contato conosco hoje para agendar
                        sua próxima limpeza e experimente os benefícios de uma casa bem preparada!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <CleanHandsIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>Como manter um escritório em casa limpo e organizado em Seattle e
                        Região?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                        Com o aumento do trabalho remoto, mais residentes de Seattle estão montando
                        escritórios em casa para se manterem produtivos e focados. No entanto, trabalhar
                        de casa traz seus próprios desafios, especialmente quando se trata de manter seu
                        espaço de trabalho limpo e organizado. Um escritório em casa arrumado não só
                        aumenta a produtividade, mas também cria um ambiente de trabalho mais
                        agradável. Aqui estão algumas dicas para ajudar você a manter um escritório em
                        casa limpo e organizado em Seattle.
                        
                        <span className='font-bold'>1. Desapegue regularmente</span>
                        A bagunça pode se acumular rapidamente em um escritório em casa,
                        especialmente se você estiver lidando com várias tarefas. Reserve alguns
                        minutos no final de cada dia para arrumar sua mesa, guardar papéis e
                        remover quaisquer itens que não pertençam ao local. Desapegar
                        regularmente ajuda a manter um espaço de trabalho claro e reduz as
                        distrações.

                        <span className='font-bold'>2. Estabeleça um sistema de arquivamento</span>
                        Papéis e documentos podem se acumular facilmente se não forem
                        gerenciados adequadamente. Crie um sistema de arquivamento para
                        documentos importantes, faturas e anotações. Use pastas rotuladas ou
                        arquivos para manter tudo organizado e fácil de encontrar. Para arquivos
                        digitais, considere usar armazenamento em nuvem e organizá-los em pastas
                        para acesso rápido.
                        
                        <span className='font-bold'>3. Mantenha sua mesa limpa</span>
                        Uma mesa livre de bagunça é essencial para um dia de trabalho produtivo.
                        Limite os itens em sua mesa ao essencial: seu computador, um caderno e
                        alguns suprimentos usados com frequência. Use organizadores de gaveta ou
                        bandejas de mesa para guardar canetas, clipes de papel e outros pequenos
                        itens fora da vista.

                        <span className='font-bold'>4. Limpe seus eletrônicos</span>
                        Seu computador, teclado e mouse são alguns dos itens mais usados em seu
                        escritório em casa e podem acumular poeira e germes ao longo do tempo.
                        Limpe seus eletrônicos regularmente com um pano de microfibra e use ar
                        comprimido para limpar seu teclado. Isso mantém seu equipamento limpo e
                        prolonga sua vida útil.

                        <span className='font-bold'>5. Crie uma rotina de limpeza</span>
                        Incorpore a limpeza do escritório em sua rotina de limpeza regular. Reserve
                        um tempo a cada semana para tirar o pó das superfícies, aspirar o chão e
                        limpar sua mesa. Isso evita o acúmulo de sujeira e poeira e garante que seu
                        espaço de trabalho permaneça fresco e convidativo.

                        <span className='font-bold'>6. Gerencie cabos e fios</span>
                        Cabos e fios podem se emaranhar e ficar bagunçados rapidamente, fazendo
                        seu escritório parecer desorganizado. Use ferramentas de gerenciamento de
                        cabos, como clipes, laços ou capas, para manter os cabos organizados e fora
                        da vista. Rotular seus cabos também pode facilitar a identificação e
                        desconexão de dispositivos quando necessário.

                        <span className='font-bold'>7. Otimize seu armazenamento</span>
                        Um armazenamento eficiente é fundamental para um escritório em casa
                        organizado. Use prateleiras, armários e caixas de armazenamento para
                        manter suprimentos e documentos bem guardados. Considere soluções de
                        armazenamento vertical para maximizar o espaço, especialmente em
                        escritórios menores. Um sistema de armazenamento bem organizado reduz a
                        bagunça e facilita encontrar o que você precisa.

                        <span className='font-bold'>8. Incorpore plantas</span>
                        Adicionar plantas ao seu escritório em casa não só melhora a estética, mas
                        também ajuda a purificar o ar. Escolha plantas de baixa manutenção, como
                        suculentas, plantas-snake ou pothos, que prosperam em ambientes internos.
                        As plantas também podem melhorar seu humor e criatividade, tornando seu
                        espaço de trabalho mais agradável.

                        <span className='font-bold'>9. Personalize seu espaço</span>
                        Embora manter a limpeza seja importante, não se esqueça de personalizar
                        seu espaço de trabalho. Adicione alguns toques pessoais, como fotos, obras
                        de arte ou uma caneca favorita, para tornar seu escritório mais convidativo.
                        Apenas tome cuidado para não sobrecarregar sua mesa com muitos itens.

                        <span className='font-bold'>10. Fazer pausas regulares</span>
                        Ao longo do dia de trabalho não é apenas bom para sua produtividade, mas
                        também é uma oportunidade para arrumar seu espaço de trabalho. Use essas
                        pausas para se alongar, limpar qualquer bagunça e organizar seu espaço.
                        Esse hábito mantém seu escritório organizado e ajuda você a se concentrar
                        quando voltar ao trabalho.

                        <span className='font-bold'>Resumo</span>
                        Manter um escritório em casa limpo e organizado é crucial para a produtividade,
                        especialmente à medida que o trabalho remoto se torna mais comum em Seattle.
                        Seguindo essas dicas, você pode criar um espaço de trabalho funcional e inspirador.
                        Se você precisar de uma ajudinha extra para manter sua casa ou escritório limpos, a
                        Splendid Cleaning está aqui para ajudar. Entre em contato conosco hoje para
                        agendar um serviço de limpeza profissional adaptado às suas necessidades!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <LibraryAddIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>10 Dicas de limpeza para moradores de Seattle e Região</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>

                        <span className='font-bold'>Mantenha seu espaço brilhando o ano TODO</span>

                        Viver em Seattle traz um conjunto único de desafios, especialmente quando se trata
                        de manter sua casa limpa. O clima chuvoso da cidade pode fazer com que manter
                        um espaço arrumado pareça uma tarefa difícil. No entanto, com algumas dicas e
                        truques estratégicos, você pode manter sua casa brilhando o ano todo, faça chuva
                        ou faça sol. Aqui estão nossas 10 principais dicas de limpeza:
                        
                        <span className='font-bold'>1. Invista em capachos de qualidade</span>
                        A temporada de chuvas em Seattle pode resultar em pegadas enlameadas e
                        manchas de água. Coloque capachos de alta qualidade tanto do lado de fora
                        quanto do lado de dentro de cada entrada para capturar a sujeira e a umidade
                        antes que se espalhem pela casa. Lembre-se de limpar os capachos
                        regularmente para garantir que permaneçam eficazes.

                        <span className='font-bold'>2. Mantenha a casa livre de sapatos</span>
                        Incentive uma política de não usar sapatos dentro de casa. Esta regra simples
                        ajuda a reduzir a quantidade de sujeira, água da chuva e detritos que entram.
                        Considere fornecer chinelos ou meias confortáveis para os convidados como
                        um toque adicional de hospitalidade.
                        
                        <span className='font-bold'>3. Combata a umidade com desumidificadores</span>
                        O clima úmido de Seattle pode levar ao excesso de umidade em sua casa,
                        causando mofo e bolor. Combata isso usando desumidificadores,
                        especialmente em porões, banheiros e closets. Verifique e limpe seus
                        desumidificadores regularmente para mantê-los funcionando de maneira
                        eficiente.

                        <span className='font-bold'>4. Crie um cronograma de limpeza semanal</span>
                        A consistência é fundamental para manter uma casa limpa. Desenvolva uma
                        rotina de limpeza semanal que cubra todas as áreas essenciais, incluindo tirar
                        o pó, aspirar e passar pano. Dividir as tarefas ao longo da semana torna a
                        limpeza mais gerenciável e garante que nada seja esquecido.

                        <span className='font-bold'>5. Usar panos de microfibra</span>
                        São uma revolução quando se trata de limpeza. Eles são altamente eficazes
                        para capturar poeira, sujeira e até bactérias sem a necessidade de produtos
                        químicos agressivos. Tenha alguns à mão para diferentes superfícies, como
                        bancadas, janelas e eletrônicos.

                        <span className='font-bold'>6. Mantenha as janelas cristalinas</span>
                        O clima nublado de Seattle pode fazer sua casa parecer escura, então janelas
                        limpas são essenciais. Use uma solução de vinagre e água para limpar suas
                        janelas regularmente, permitindo a entrada de mais luz natural. Não se
                        esqueça de limpar os peitoris e trilhos das janelas, que podem acumular
                        sujeira ao longo do tempo.

                        <span className='font-bold'>7. Gerencie os pelos de animais de estimação</span>
                        Se você tem animais de estimação, saiba como os pelos podem se espalhar
                        rapidamente pela casa. Escove seus animais regularmente para minimizar a
                        queda de pelos e aspire os pisos, móveis e estofados pelo menos duas vezes
                        por semana. Considere investir em um aspirador específico para animais de
                        estimação para obter os melhores resultados.

                        <span className='font-bold'>8. Limpe e gire os tapetes</span>
                        Tapetes podem capturar sujeira e umidade, especialmente em áreas de alto
                        tráfego. Aspire os tapetes regularmente e considere girá-los a cada poucos
                        meses para equilibrar o desgaste. Se possível, leve-os para fora para sacudir
                        a sujeira solta ou mande-os limpar profissionalmente.

                        <span className='font-bold'>9. Mantenha a lavanderia em dia</span>
                        Dias chuvosos muitas vezes significam roupas e lençóis úmidos. Não deixe a
                        lavanderia acumular—faça disso um hábito lavar e secar roupas
                        regularmente. Use folhas de secador para reduzir a eletricidade estática e
                        considere secar certos itens, como toalhas, em um varal para evitar mofo.

                        <span className='font-bold'>10. Faça limpezas profundas regularmente</span>
                        Além da sua rotina de limpeza semanal, agende sessões regulares de limpeza
profunda. Concentre-se em áreas frequentemente negligenciadas, como atrás
de eletrodomésticos, dentro de armários e embaixo dos móveis. Isso evitará o
acúmulo de sujeira e manterá sua casa sempre fresca e limpa.

                        <span className='font-bold'>Resumo</span>
                        O clima de Seattle pode ser imprevisível, mas sua rotina de limpeza não precisa ser.
                        Incorporando essas dicas na manutenção regular da sua casa, você pode desfrutar
                        de um espaço limpo e convidativo, independentemente da previsão do tempo. Para
                        aqueles momentos em que a vida fica muito corrida, lembre-se de que a Splendid
                        Cleaning está aqui para ajudar a manter sua casa em Seattle em excelente estado o
                        ano todo. Entre em contato conosco hoje para serviços de limpeza profissional
                        adaptados às suas necessidades!
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    );
}