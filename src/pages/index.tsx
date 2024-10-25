import Hero from '../components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Parceiros from '@/components/Parceiros'
import ContactNetworks from '@/components/ContactNetworks'
import Quote from '@/pages/FormularioDescoberta'
import ReceivedFeedbacks from '@/components/ReceivedFeedbacks'
import Accordion from '@/components/Accordion'
import ScrollByVoice from '@/components/ScrollByVoice'; 

export default function Home() {

  return (
    <div> 
      <section id="hero"><Hero /></section>
      <section id="parceiros"><Parceiros /></section>
      <section id="about"><About /></section>
      <section id="contact-networks"><ContactNetworks /></section>
      <section id="contact"><Contact /></section>
      <section id="received-feedbacks"><ReceivedFeedbacks /></section>
      <section id="accordion"><Accordion /></section>

      <ScrollByVoice /> {/* Componente de Scroll por voz */}
    </div>
  )
}
