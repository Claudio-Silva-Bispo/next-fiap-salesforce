import * as React from 'react';
// Instalar npm install @mui/material @emotion/react @emotion/styled
// Instalar npm install @mui/icons-material

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Ícones
import PublicIcon from '@mui/icons-material/Public';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import AddHomeIcon from '@mui/icons-material/AddHome';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  marginBottom: '8px',
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
  padding: '16px',
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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <section className='min-h-[60vh] flex flex-col justify-center p-5 m:pt-20'>
      
      <div className="before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:bg-gray-700 pt-20 md:p-0 flex flex-col mb-6">
        <h2 className="text-5xl text-gray-700 md:mb-0 font-bold">Principais dúvidas</h2>
      </div>

      <div className="space-y-4">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <PublicIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Cidades de atendimento</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              Oferecemos nossos serviços em diversas cidades, garantindo atendimento rápido e eficiente. Confira se a sua cidade está na nossa lista!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <AddHomeIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Como configurar sua conta Salesforce?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              Para configurar sua conta Salesforce, siga os passos abaixo:
              <span className='font-bold'>1. Acesse o site da Salesforce</span>
              Crie uma conta utilizando seu e-mail corporativo e siga as instruções para verificar sua conta.
              <span className='font-bold'>2. Personalize sua dashboard</span>
              Adicione os widgets que você mais utiliza e organize a visualização das informações.
              <span className='font-bold'>3. Treine sua equipe</span>
              Proporcione sessões de treinamento para garantir que todos saibam como usar as funcionalidades da plataforma.
              <a href='/Tips' className='text-quinta'>Saiba mais clicando aqui</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <CleanHandsIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Como otimizar o uso do Salesforce?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              Maximize sua produtividade no Salesforce com as seguintes dicas:
              <span className='font-bold'>1. Utilize automações</span>
              Automatize tarefas recorrentes para economizar tempo e reduzir erros.
              <span className='font-bold'>2. Integre com outras ferramentas</span>
              Conecte o Salesforce com suas ferramentas de marketing e vendas para uma gestão mais eficiente.
              <span className='font-bold'>3. Personalize relatórios</span>
              Crie relatórios que atendam às necessidades específicas da sua equipe.
              <a href='/Tips' className='font-bold text-quinta'>Saiba mais clicando aqui</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <PhoneForwardedIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Contatos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-700 text-sm m:text-xl'>
              <span className='font-bold'>1. Ligue</span>
              Nossos atendentes estão disponíveis pelo telefone +(206) 9999-999
              <span className='font-bold'>2. Email</span>
              Entre em contato pelo nosso e-mail: suporte@salesforce.com
              <span className='font-bold'>3. SMS</span>
              Você pode enviar mensagens SMS para +(206) 9999-999
              <span className='font-bold'>4. WhatsApp</span>
              Estamos disponíveis no WhatsApp pelo número +(206) 9999-999
              <span className='font-bold'>5. Redes Sociais</span>
              Não esqueça de nos seguir nas redes sociais: Instagram e Facebook.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <CalendarMonthIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Horário de atendimento</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              Nossos serviços estão disponíveis de segunda a sexta, das 08:00 às 18:00, e também atendemos aos sábados sob agendamento prévio.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <LibraryAddIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Dicas para aproveitar ao máximo a Salesforce</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              <span>Aumente sua eficiência com estas dicas:</span>
              <span className='font-bold'>1. Explore a AppExchange</span>
              Acesse a AppExchange para encontrar aplicativos que complementem sua experiência Salesforce.
              <span className='font-bold'>2. Participe de webinars e eventos</span>
              Fique por dentro das novidades e melhore suas habilidades com os webinars oferecidos pela Salesforce.
              <span className='font-bold'>3. Contribua com a comunidade</span>
              Participe de fóruns e comunidades online para compartilhar experiências e aprender com outros usuários.
              <a href='/Tips' className='font-bold'>Saiba mais clicando aqui</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
