import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

// import {StrictMode} <--- siis võetakse tükk sellest moodulist
// import App from <--- siis võetakse terve moodul kasutusele
// from "react" <-- node_modulest
// from "react-dom/client" <-- node_modules kaustast
// import "./index.css" <-- samast kaustas olevast failist
//import App from './App.jsx' <-- samas kaustas
// import MIDAGI from "kuskilt" <-- kehtib ainult siin failis
// import "./index.css"  <-- kehtib igas failis

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

// npm run build --> pakib koodi kokku (gzip)
// firebase deploy --> saadab koodi Firebase suunal