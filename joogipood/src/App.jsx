
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './assets/pages/Avaleht'
import LisaJook from './assets/pages/LisaJook'
import HaldaJooke from './assets/pages/HaldaJooke'
import Jook from './assets/pages/Jook'

function App() {


  return (
    <>
    <Link to="/">
      <button>Avalehele</button>
    </Link>

    <Link to="/lisa">
      <button>Lisa</button>
    </Link>

    <Link to="/halda">
      <button>Halda</button>
    </Link>



     <Routes>
        <Route path="/" element={ <Avaleht /> }/>
        <Route path="/lisa" element={ <LisaJook /> }/>
        <Route path="/halda" element={ <HaldaJooke /> }/>
        <Route path="/jook/:number" element={ <Jook /> } />
     </Routes>
    </>
  )
}

export default App
