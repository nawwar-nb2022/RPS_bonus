import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CounterProvider } from './context/useRes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <CounterProvider>
      
      <App />
    
    </CounterProvider>
  
  </StrictMode>
)
