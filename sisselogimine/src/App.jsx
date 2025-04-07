
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import Seaded from './pages/Seaded'
import Menu from './components/Menu'
import { use, useRef, useState } from 'react'


function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

function logiSisse() {
  if (paroolRef.current.value === "123") {
    muudaSisselogitud("jah");
    muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud");
  } else {
    muudaSonum("Vale parool");
  }
}

function logiVälja() {
  muudaSisselogitud("ei");
  muudaSonum("");

}  

  return (
    <div className="App">
      
      <div>{sonum}</div>
      {sisselogitud === "ei" && 
        <div>
          <label>Kasutajanimi:</label>
          <input ref={kasutajaNimiRef} type="text" /> <br />
          <label>Parool:</label>
          <input ref ={paroolRef} type="password" /> <br />
        </div>}
        
     
      {sisselogitud === "ei" && <button onClick={() => logiSisse()}>Logi sisse</button>}
      {sisselogitud === "jah" && <button onClick={() => logiVälja()}>Logi välja</button>} <br />
      
      <br /> <Menu />

      <Routes>
        <Route to path="/" element={ <Avaleht />}/>
        <Route path="/kontakt" element={ <Kontakt />}/>
        <Route path="/meist" element={ <Meist />}/>
        <Route path="/seaded" element={ <Seaded />}/>
      </Routes>
    </div>
  )
}

export default App
