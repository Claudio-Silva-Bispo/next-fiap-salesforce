import Hero from '../components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Parceiros from '@/components/Parceiros'
import ContactNetworks from '@/components/ContactNetworks'
import Quote from '@/components/Quote'
import ReceivedFeedbacks from '@/components/ReceivedFeedbacks'
import Accordion from '@/components/Accordion'

export default function Home() {

  return (
    <div> 
      <Hero/>
      <Parceiros/>
      <About/>
      <Contact/>
      <ContactNetworks/>
      <Quote/>
      <ReceivedFeedbacks/>
      <Accordion/>
    </div>
    
  )
}