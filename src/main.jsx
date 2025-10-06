import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppCopy from './App copy.jsx'
import Navigation from './components/Navigation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/copy" element={<AppCopy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
