import { Link } from "react-router-dom"

function Menu() {
  return (
    <div>
   <Link to="/">
    <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Nobe%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0061%29.jpg" alt="" />
  </Link>

  {/* <span className="tekst">Osta meie tooteid</span> */}

  <Link to="/ostukorv">
    <button>Ostukorvi</button>
  </Link>

  
  <Link to="/seaded">
    <button>Seaded</button>
  </Link>

  <Link to="/lisa-toode">
    <button>Lisa toode</button>
  </Link>

  <Link to="/osta-kinkekaart">
    <button>Kinkekaardid</button>
  </Link>

  <Link to="/kalkulaator">
    <button>Kalkulaator</button>
  </Link>

  <Link to="/arrays-home">
    <button>Arrays</button>
  </Link>

  <Link to="/halda-home">
    <button>Admin: Halda</button>
  </Link>

  </div>
  )
}

export default Menu