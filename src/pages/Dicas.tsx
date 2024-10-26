import * as React from 'react';
// Como integrar componentes visuais do React com a Lightning Web Component (LWC)?
// Quais pacotes são recomendados para adicionar interatividade no front-end com Salesforce?

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AnalyticsIcon from '@mui/icons-material/Analytics';

// Como utilizar ícones padrão do Salesforce Lightning Design System (SLDS) no React?
// Há uma maneira eficiente de incorporar ícones personalizados para componentes específicos no Salesforce?

import CleanHandsIcon from '@mui/icons-material/CleanHands';
import AddHomeIcon from '@mui/icons-material/AddHome';
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

export default function Dicas(){
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return(

        <section className="min-h-[80vh] flex flex-col
         justify-start items-start lg:pt-20 p-6">
            <div>
                <h1 className="text-5xl font-bold mb-10 text-start pt-20 ">Dúvidas sobre Salesforce</h1>
            </div>

            <div className="space-y-4">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <AddHomeIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>Como configurar a Lightning Experience no Salesforce para uma melhor experiência de usuário?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                        A interface Lightning Experience é conhecida por melhorar a produtividade, mas quais são as melhores práticas para customizar o layout e otimizar a navegação do usuário?

                        <span className='font-bold'>1. Personalização da Página Inicial</span>
                        Quais são as opções de personalização da página inicial no Salesforce Lightning? Como incluir componentes específicos para diferentes perfis de usuários?

                        <span className='font-bold'>2. Utilização de Templates de Página</span>
                        Como criar templates de páginas para maximizar a eficiência e manter a consistência nas diferentes páginas de objetos no Salesforce?

                        <span className='font-bold'>3. Gerenciamento de Acessos</span>
                        Como definir permissões e acessos baseados em perfis ou grupos para uma experiência Lightning mais eficiente?

                        <span className='font-bold'>4. Adição de Ações Rápidas</span>
                        Como configurar e personalizar ações rápidas no Salesforce Lightning para facilitar o uso de funcionalidades críticas?

                        <span className='font-bold'>5. Otimização para Dispositivos Móveis</span>
                        Quais são as melhores práticas para garantir que a interface Lightning seja otimizada para usuários que acessam o Salesforce em dispositivos móveis?

                        <span className='font-bold'>6. Configuração de Aplicativos Lightning</span>
                        Como criar e personalizar aplicativos Lightning que atendam às necessidades específicas das equipes de vendas e suporte?

                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <CleanHandsIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>Quais são as melhores práticas de segurança no Salesforce?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                        Quais são as práticas recomendadas para proteger os dados no Salesforce, incluindo autenticação multifatorial e controles de acesso?

                        <span className='font-bold'>1. Configuração de Autenticação Multifatorial</span>
                        Como configurar a autenticação multifatorial (MFA) no Salesforce para garantir maior segurança sem impactar a experiência do usuário?

                        <span className='font-bold'>2. Criação de Perfis de Usuário</span>
                        Quais são as melhores práticas para criar perfis de usuários com o mínimo de privilégios necessários, evitando vulnerabilidades?

                        <span className='font-bold'>3. Monitoramento de Atividades de Login</span>
                        Como monitorar e rastrear atividades suspeitas de login ou acessos não autorizados no Salesforce?

                        <span className='font-bold'>4. Proteção de Dados Sensíveis</span>
                        Como proteger dados sensíveis de clientes, como informações financeiras ou pessoais, no Salesforce?

                        <span className='font-bold'>5. Revisão de Logs de Segurança</span>
                        Quais ferramentas estão disponíveis no Salesforce para revisar e auditar logs de segurança?

                        <span className='font-bold'>6. Implementação de Políticas de Senhas</span>
                        Como implementar políticas de senhas robustas para garantir que todos os usuários do Salesforce sigam boas práticas de segurança?

                        </Typography>
                    </AccordionDetails>
                    
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <CloudIcon className='mr-3'/>
                    <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                        Benefícios da migração para o Salesforce Cloud
                    </Typography>
                </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-gray-600 text-sm'>
                            Migrar suas operações para o Salesforce Cloud pode transformar a maneira como sua equipe de vendas trabalha, oferecendo flexibilidade, escalabilidade e integração perfeita com outros sistemas.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <IntegrationInstructionsIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                            Integração do Salesforce com ferramentas externas
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-gray-600 text-sm'>
                            Integrar o Salesforce com outras ferramentas, como ERPs e plataformas de marketing, pode aumentar a eficiência e centralizar dados. Veja as melhores práticas para integrações.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <DashboardIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                            Como criar dashboards eficientes no Salesforce
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-gray-600 text-sm'>
                            Os dashboards do Salesforce são ferramentas poderosas para monitorar KPIs e métricas de vendas. Veja como configurá-los para maximizar insights.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                        <InsightsIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                            Uso de inteligência artificial no Salesforce
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-gray-600 text-sm'>
                            O Einstein AI do Salesforce pode prever leads de maior sucesso e personalizar recomendações. Descubra como a inteligência artificial pode otimizar suas operações de vendas.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                        <AutoGraphIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                            Automação de vendas com Salesforce
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-gray-600 text-sm'>
                            O Salesforce oferece uma série de ferramentas para automação de vendas, como fluxos de trabalho automáticos e triggers. Aprenda a configurar essas automações para agilizar o processo de vendas.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                        <SupervisorAccountIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                            Gerenciamento de equipes de vendas com Salesforce
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-gray-600 text-sm'>
                            O Salesforce facilita o gerenciamento de equipes de vendas, permitindo rastrear a performance, atribuir tarefas e monitorar o progresso em tempo real. Veja como otimizar o uso para sua equipe.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                    <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
                        <AssignmentTurnedInIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                            Melhores práticas para pipeline de vendas no Salesforce
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-gray-600 text-sm'>
                            Manter um pipeline de vendas bem organizado no Salesforce é crucial para o sucesso. Veja como monitorar leads, oportunidades e conversões de forma eficiente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                    <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                        <AnalyticsIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                            Análise de dados no Salesforce: o que medir?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='text-gray-600 text-sm'>
                            A análise de dados no Salesforce permite monitorar o desempenho e melhorar decisões estratégicas. Saiba quais métricas são essenciais para acompanhar o progresso da sua empresa.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    )
}
