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
import PublicIcon from '@mui/icons-material/Public';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import AddHomeIcon from '@mui/icons-material/AddHome';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
  backgroundColor: '#ffffff', // Fundo branco
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
  padding: '16px', // Padding igual ao exemplo
  backgroundColor: '#f9fafb', // Fundo claro
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <section className='min-h-[60vh] flex flex-col justify-center p-5 m:pt-20'>
      
      <div className="before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:bg-gray-700 pt-20 md:p-0 flex flex-col mb-6">
        <h3 className="text-5xl text-gray-700 md:mb-0 font-bold">Principais dúvidas</h3>
      </div>

      <div className="space-y-4">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <PublicIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Cidades de atendimento</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-700 text-sm m:text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <AddHomeIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Como preparar sua casa para um serviço de limpeza profissional Cleaning?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-700 text-sm m:text-xl'>
            <p>Contratar um serviço de limpeza profissional é uma excelente maneira de garantir que sua casa permaneça impecável, mesmo nas semanas mais corridas. No entanto, há alguns passos que você pode seguir antes da chegada da equipe de limpeza para maximizar a eficiência e garantir que você aproveite ao máximo a visita. Aqui está um guia sobre como preparar sua casa para um serviço de limpeza profissional.
            </p>

            <span className='font-bold'>1. Desapegue das áreas comuns</span>
            A limpeza ao redor da bagunça pode atrasar o processo de limpeza. Reserve alguns minutos para guardar itens como brinquedos, roupas, louças e outros pertences pessoais das bancadas, pisos e mesas. Isso permite que a equipe de limpeza se concentre na limpeza profunda em vez de arrumar a bagunça.

            <span className='font-bold'>2. Guarde itens valiosos e pessoais</span>
            Embora os serviços de limpeza profissional sejam confiáveis, é uma boa prática guardar itens valiosos ou sensíveis, como jóias, dinheiro, documentos importantes ou pequenos eletrônicos. Isso lhe dá tranquilidade e garante que nada seja acidentalmente deslocado durante a limpeza.
            
            <span className='font-bold'>3. Comunique instruções especiais </span>
            Cada casa é diferente, então, se houver áreas específicas que você deseja que a equipe de limpeza foque ou evite, informe-os com antecedência. Seja um item frágil que requer manuseio cuidadoso ou um cômodo específico que precisa de atenção extra, a comunicação clara garante que suas necessidades sejam atendidas.

            <a href='/Tips' className='text-red-400'>Saiba mais clicando aqui</a>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <CleanHandsIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Como manter um escritório em casa limpo e organizado em Washington?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-700 text-sm m:text-xl'>
            <p>Com o aumento do trabalho remoto, mais residentes de Washington estão montando escritórios em casa para se manterem produtivos e focados. No entanto, trabalhar de casa traz seus próprios desafios, especialmente quando se trata de manter seu espaço de trabalho limpo e organizado. Um escritório em casa arrumado não só aumenta a produtividade, mas também cria um ambiente de trabalho mais agradável. Aqui estão algumas dicas para ajudar você a manter um escritório em casa limpo e organizado.
            </p>

            <span className='font-bold'>1. Desapegue regularmente</span>
            A bagunça pode se acumular rapidamente em um escritório em casa, especialmente se você estiver lidando com várias tarefas. Reserve alguns minutos no final de cada dia para arrumar sua mesa, guardar papéis e remover quaisquer itens que não pertençam ao local. Desapegar regularmente ajuda a manter um espaço de trabalho claro e reduz as distrações.

            <span className='font-bold'>2. Estabeleça um sistema de arquivamento</span>
            Papéis e documentos podem se acumular facilmente se não forem gerenciados adequadamente. Crie um sistema de arquivamento para documentos importantes, faturas e anotações. Use pastas rotuladas ou arquivos para manter tudo organizado e fácil de encontrar. Para arquivos digitais, considere usar armazenamento em nuvem e organizá-los em pastas para acesso rápido.
            
            <span className='font-bold'>3. Mantenha sua mesa limpa</span>
            Uma mesa livre de bagunça é essencial para um dia de trabalho produtivo. Limite os itens em sua mesa ao essencial: seu computador, um caderno e alguns suprimentos usados com frequência. Use organizadores de gaveta ou bandejas de mesa para guardar canetas, clipes de papel e outros pequenos itens fora da vista.

            <a href='/Tips' className='font-bold'>Saiba mais clicando aqui</a>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel1d-header">
            <PhoneForwardedIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Contatos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-700 text-sm m:text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel1d-header">
            <CalendarMonthIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Horário de atendimento</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-700 text-sm m:text-xl'>
              <p>Nossos serviços podem ser personalizados para diário, semanal, quinzenal, mensal, um única vez, de acordo com a sua necessidade.</p>
              <p>Estamos atendendo de segunda a sábado, das 08:00 am até as 18:00 pm.</p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel6d-content" id="panel3d-header">
            <LibraryAddIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>10 Dicas de limpeza para moradores de Washington
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-700 text-sm m:text-xl'>
            <h3>Mantenha seu espaço brilhando o ano TODO
            </h3>
            <p>Viver em Seattle traz um conjunto único de desafios, especialmente quando se trata de manter sua casa limpa. O clima chuvoso da cidade pode fazer com que manter um espaço arrumado pareça uma tarefa difícil. No entanto, com algumas dicas e truques estratégicos, você pode manter sua casa brilhando o ano todo, faça chuva ou faça sol. Aqui estão nossas 10 principais dicas de limpeza:

            </p>

            <span className='font-bold'>1. Invista em capachos de qualidade</span>
            A temporada de chuvas em Seattle pode resultar em pegadas enlameadas e manchas de água. Coloque capachos de alta qualidade tanto do lado de fora quanto do lado de dentro de cada entrada para capturar a sujeira e a umidade antes que se espalhem pela casa. Lembre-se de limpar os capachos regularmente para garantir que permaneçam eficazes.
            
            <span className='font-bold'>2. Mantenha a casa livre de sapatos</span>
            Incentive uma política de não usar sapatos dentro de casa. Esta regra simples ajuda a reduzir a quantidade de sujeira, água da chuva e detritos que entram. Considere fornecer chinelos ou meias confortáveis para os convidados como um toque adicional de hospitalidade.

            
            <span className='font-bold'>3. Combata a umidade com desumidificadores</span>
            O clima úmido de Seattle pode levar ao excesso de umidade em sua casa, causando mofo e bolor. Combata isso usando desumidificadores, especialmente em porões, banheiros e closets. Verifique e limpe seus desumidificadores regularmente para mantê-los funcionando de maneira eficiente.

            <a href='/Tips' className='font-bold'>Saiba mais clicando aqui</a>

            </Typography>
          </AccordionDetails>
        </Accordion>


      </div>

    </section>
  );
}
