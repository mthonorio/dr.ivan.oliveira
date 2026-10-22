import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Credentials from './components/Credentials.jsx'
import Areas from './components/Areas.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import Instagram from './components/Instagram.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credentials />
        <Areas />
        <HowItWorks />
        <About />
        <Testimonials />
        <Instagram />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
