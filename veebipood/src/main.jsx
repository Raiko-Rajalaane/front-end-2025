import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

// Navigeerimiseks (URL vahetuseks ja seeläbi ka sisu vahetuseks):
// 1. npm install react-router-dom
// 2. import BrowserRouter
// 3. ümbritseda <App/> BrowserRouteriga
// 4. App.js failis tekitada URL/HTML seoseid

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
