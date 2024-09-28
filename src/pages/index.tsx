import Hero from '../components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Network from '@/components/Network'
import Service from '@/components/Service'
import Carrosel from '@/components/Carrosel'
import Testimonials from '@/components/Testimonials'
import Quote from '@/components/Quote'
import ContactNetworks from '@/components/ContactNetworks'

export default function Home() {

  return (
    <div> 
      <Hero/>
      <About/>
      <Network/>
      <Contact/>
      <Service/>
      <Carrosel/>
      <Testimonials/>
      <Quote/>
      <ContactNetworks/>
    </div>
    
  )
}