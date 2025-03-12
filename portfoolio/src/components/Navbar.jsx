import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
     <img className='main-picture' src="https://cdn.pixabay.com/photo/2015/11/19/08/52/banner-1050629_640.jpg" alt="" />
     <div className='rectangle'></div>

     <div className='navigation-pictures'>
      <Link to="work">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg" alt="" />
        <p>Tööde lehele</p>
      </Link>
      <Link to="hobbies">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg" alt="" />
      <p>Hobide lehele</p>
      </Link>
      <Link to="courses">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg" alt="" />
      <p>Kursuste lehele</p>
      </Link>
     </div>

    </div>
  )
}

export default Navbar
