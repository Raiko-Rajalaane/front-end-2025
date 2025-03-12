import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Menu from './lehe osad/Menu';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';

function App() {
  return (
    <>
    <Menu />

    <Routes>
      <Route path='' element={ <Avaleht /> } />
      <Route path='uudised' element={ <Uudised /> }/>
      <Route path='kontakt' element={ <Kontakt /> } />
      <Route path='meist' element={ <Meist /> } />
    </Routes>
      
    </>
  );
}

export default App
