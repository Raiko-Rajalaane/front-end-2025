
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import LisaTegelane from './pages/LisaTegelane'
import Avaleht from './pages/Avaleht'
import ValitudTegelased from './pages/ValitudTegelased'

function App() {
  
  return (
    <>
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/lisa-tegelane">
        <button>Tegelast lisama</button>
      </Link>

      <Link to="/valitud-tegelased">
        <button>Valitud tegelaste juurde</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht />} />
        <Route path="lisa-tegelane" element={ <LisaTegelane />} />
        <Route path="valitud-tegelased" element={ <ValitudTegelased />} />
      </Routes>
    </>
  )
}

export default App
