import './App.css'
import { HeroSection } from './component/HeroSection/HeroSection'
import { Works } from './component/Works/Works'
import { LanguagesAndTools } from './component/LanguagesAndTools/LanguagesAndTools'
import Experience from './component/Experience/Experience'
import ContactUs from './component/ContactUs/ContactUs'

function App() {

  return (
    <>
    <HeroSection />
    <Works />
    <Experience />
    <LanguagesAndTools />
    <ContactUs />
    </>
  )
}

export default App
