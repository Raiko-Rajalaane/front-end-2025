import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Work from './pages/Work'
import Hobbies from './pages/Hobbies'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={ <Navbar />} />
      <Route path="work" element={ <Work /> } />
      <Route path="hobbies" element={ <Hobbies /> } />
      <Route path="courses" element={ <Courses /> } />
     </Routes>

     <a className='linkedin-nupuke' href="linkedin.com/itboss">
      <br />
      <img src="/linkedin.png" alt="" />
      <p>LinkedIn</p>
     </a>

    </>
  )
}

export default App
