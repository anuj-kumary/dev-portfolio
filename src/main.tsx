import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { NavBar } from './component/NavBar/NavBar.js'
import { Footer } from './common/Footer/Footer.js'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <NavBar />
      <App />
      <Footer />
    </StrictMode>
  );
}
