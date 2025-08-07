import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CSSModules  from './CSSModules/CSSModules.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CSSModules/>
  </StrictMode>,
)
