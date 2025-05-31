import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Footer.jsx'
import ETFDisclaimer from './components/ETFDisclaimer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ETFDisclaimer />
    <App />
    <Footer />

  </StrictMode>,
)
