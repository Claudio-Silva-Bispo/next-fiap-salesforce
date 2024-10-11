import * as React from 'react';
//Instalar npm install @mui/material @emotion/react @emotion/styled
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

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
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
))(({ theme }) => ({
  backgroundColor: '#B9E6F7',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: '#B9E6F7',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid border-[#B9E6F7]',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <section className='min-h-[60vh] flex flex-col justify-center  p-5'>
      
        <div className="before:block before:w-24 before:h-3 before:mb-5 before:rounded-md  before:bg-gray-700 pt-36 md:p-0 flex flex-col mb-6">
            <h3 className="text-5xl text-gray-700 md:mb-0 font-bold">Principais dúvidas</h3>
        </div>

        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <PublicIcon className='mr-3'/>
                  <Typography>Cidades de atendimento</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <AddHomeIcon className='mr-3'/>
                  <Typography>Dicas para preparar a casa antes da visita</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
              <a href="/" className='p-4'>Saiba mais</a>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <CleanHandsIcon className='mr-3'/>
                  <Typography>Dicas para manter a casa limpa</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                  <PhoneForwardedIcon className='mr-3'/>
                  <Typography>Contatos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                  <CalendarMonthIcon className='mr-3'/>
                  <Typography>Detalhes dos serviços</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Personalize o serviço, escolhendo até mesmo se será diário, semanal, quinzenal ou mensal. Agenda o horário conforme sua necessidade. 
                  Estamos disponíveis de segunda a sábado.
                </Typography>
              </AccordionDetails>
            </Accordion>
        </div>

    </section>
  );
}