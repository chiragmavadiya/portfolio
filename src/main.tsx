import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "leaflet/dist/leaflet.css";
import "./utils/fixLeafletIcon";
import './index.css'
import App from './App.tsx'
import { ToastProvider } from './contexts/ToastContext'
import { NavigationProvider } from './contexts/NavigationContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </ToastProvider>
  </StrictMode>,
)
