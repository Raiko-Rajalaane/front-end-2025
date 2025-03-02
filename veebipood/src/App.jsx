import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import Esindused from './pages/Esindused';
import LisaToode from './pages/LisaToode';
import Menu from './components/Menu';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Menu />

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Routes>
          <Route path='/' element={ <Avaleht /> } />
          <Route path='/ostukorv' element={ <Ostukorv /> } />
          <Route path='/seaded' element={ <Seaded /> } />
          <Route path='/lisa-toode' element={ <LisaToode /> } />
          <Route path='/esindused' element={ <Esindused /> } />
        </Routes>
        
    </>
  )
}

export default App
