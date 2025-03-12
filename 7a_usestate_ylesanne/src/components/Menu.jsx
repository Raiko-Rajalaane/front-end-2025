import { Link } from "react-router-dom"

function Menu() {
  return (
    <div>
      <Link to="/">
      <button>Avaleht</button>
      </Link>

      <Link to="/kontakt">
        <button>Kontakteeru meiega</button>
      </Link>

      <Link to="/meist">
        <button>Info meist</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

    </div>
  )
}

export default Menu