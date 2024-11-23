import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NavBar } from './component/NavBar/NavBar.jsx'
import { Footer } from './common/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
    <Footer />
  </StrictMode>,
)
