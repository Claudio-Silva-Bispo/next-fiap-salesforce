import Hero from '../components/Hero'
import ServiceCarousel from '@/components/ServiceCarousel'
import About from '@/components/About'
import Contact from '@/components/Contact'
import CarroselSimple from '@/components/CarroselSimple'
import ContactNetworks from '@/components/ContactNetworks'
import Quote from '@/components/Quote'
import ReceivedFeedbacks from '@/components/ReceivedFeedbacks'
import Accordion from '@/components/Accordion'

export default function Home() {

  return (
    <div> 
      <Hero/>
      <About/>
      <Contact/>
      <ServiceCarousel/>
      <CarroselSimple/>
      <ContactNetworks/>
      <Quote/>
      <ReceivedFeedbacks/>
      <Accordion/>
    </div>
    
  )
}