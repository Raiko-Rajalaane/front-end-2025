
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Avaleht /> } />
        <Route path='/*' element={ <NotFound /> } />
      </Routes>


    </>
  )
}

export default App
