import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import Esindused from './pages/Esindused';
import LisaToode from './pages/LisaToode';
import Menu from './components/Menu';
import Kinkekaart from './pages/Kinkekaart';
import NotFound from './pages/NotFound';
import Kalkulaator from './pages/Kalkulaator';


function App() {
  // vasakpoolne --> välja näitamiseks
  // parempoolne --> muutmiseks
  // useState sulgude sees on algväärtus
  const [count, setCount] = useState(0)
  // const --> keelab muutuja võrdusmärgiga muutmise

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
          <Route path='/osta-kinkekaart' element={ <Kinkekaart /> } />
          <Route path='/kalkulaator' element={ <Kalkulaator /> } />
          <Route path='/*' element={ <NotFound /> } />
        </Routes>
        
    </>
  )
}

export default App
