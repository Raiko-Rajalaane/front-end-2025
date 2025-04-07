import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import Esindused from './pages/arrays/Esindused';
import LisaToode from './pages/LisaToode';
import Menu from './components/Menu';
import Kinkekaart from './pages/Kinkekaart';
import NotFound from './pages/NotFound';
import Kalkulaator from './pages/Kalkulaator';
import Autod from './pages/arrays/Autod';
import Hinnad from './pages/arrays/Hinnad';
import Kasutajad from './pages/arrays/Kasutajad';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import ArraysHome from './pages/arrays/ArraysHome';
import HaldaHome from './pages/halda/HaldaHome';
import HaldaAutod from './pages/halda/HaldaAutod';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaKasutajad from './pages/halda/HaldaKasutajad';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';
import YksAuto from './pages/yks/yksAuto';
import YksEsindus from './pages/yks/yksEsindus';
import YksHind from './pages/yks/yksHind';
import YksKasutaja from './pages/yks/YksKasutaja';
import YksTootaja from './pages/yks/yksTootaja';
import YksToode from './pages/yks/yksToode';
import MuudaAuto from './pages/muuda/MuudaAuto';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaKasutaja from './pages/muuda/MuudaKasutaja';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import MuudaToode from './pages/muuda/MuudaToode';
import LogiSisse from './pages/LogiSisse';
import Registreeru from './pages/Registreeru';
import Kaart from './pages/Kaart';
import { Kontakteeru } from './pages/Kontakteeru';


function App() {
  // vasakpoolne --> välja näitamiseks
  // parempoolne --> muutmiseks
  // useState sulgude sees on algväärtus
  // const --> keelab muutuja võrdusmärgiga muutmise

  const [dark, setDark] = useState(localStorage.getItem("theme") || "false");

  const muudaLight = () => {
    setDark("false");
    localStorage.setItem("theme", "false")
  }

  const muudaDark = () => {
    setDark("true");
    localStorage.setItem("theme", "true")
  }

  return (
    <div className={dark === "true" ? "dark" : "light"}>
        <Menu />

        <button onClick={muudaLight}>Light</button>
        <button onClick={muudaDark}>Dark</button>

        <br /><br />

        <Routes>
          <Route path='/' element={ <Avaleht /> } />
          <Route path='/ostukorv' element={ <Ostukorv /> } />
          <Route path='/seaded' element={ <Seaded /> } />
          <Route path='/lisa-toode' element={ <LisaToode /> } />
          <Route path='/osta-kinkekaart' element={ <Kinkekaart /> } />
          <Route path='/kalkulaator' element={ <Kalkulaator /> } /> 
          
          
          <Route path='/arrays-home' element={ <ArraysHome /> } />
          <Route path='/autod' element={ <Autod /> } />
          <Route path='/esindused' element={ <Esindused /> } />
          <Route path='/hinnad' element={ <Hinnad /> } />
          <Route path='/kasutajad' element={ <Kasutajad /> } />
          <Route path='/tootajad' element={ <Tootajad /> } />
          <Route path='/tooted' element={ <Tooted /> } />

          <Route path='/halda-home' element={ <HaldaHome /> } />
          <Route path='/halda-autod' element={ <HaldaAutod /> } />
          <Route path='/halda-esindused' element={ <HaldaEsindused /> } />
          <Route path='/halda-hinnad' element={ <HaldaHinnad /> } />
          <Route path='/halda-kasutajad' element={ <HaldaKasutajad /> } />
          <Route path='/halda-tootajad' element={ <HaldaTootajad /> } />
          <Route path='/halda-tooted' element={ <HaldaTooted /> } />

          <Route path='/auto/:jarjekorranumber' element={ <YksAuto /> } />
          <Route path='/esindus/:jrknr' element={ <YksEsindus /> } />
          <Route path='/hind/:i' element={ <YksHind /> } />
          <Route path='/kasutaja/:suvaline' element={ <YksKasutaja /> } />
          <Route path='/tootaja/:i' element={ <YksTootaja /> } />
          <Route path='/toode/:i' element={ <YksToode /> } />

          <Route path='/muuda-auto/:i' element={ <MuudaAuto /> } />
          <Route path='/muuda-esindus/:i' element={ <MuudaEsindus /> } />
          <Route path='/muuda-hind/:i' element={ <MuudaHind /> } />
          <Route path='/muuda-kasutaja/:i' element={ <MuudaKasutaja /> } />
          <Route path='/muuda-toode/:i' element={ <MuudaToode /> } />
          <Route path='/muuda-tootaja/:i' element={ <MuudaTootaja /> } />

          <Route path='/logi-sisse' element={ <LogiSisse /> } />
          <Route path='/registreeru' element={ <Registreeru /> } />
          <Route path='/kaart' element={ <Kaart /> } /> 
          <Route path='/kontakteeru' element={ <Kontakteeru /> } />

          <Route path='/*' element={ <NotFound /> } />
        </Routes>
        
    </div>
  )
}

export default App
