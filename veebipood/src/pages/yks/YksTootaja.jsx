import { Link, useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"

function YksTootaja() {
  const {i} = useParams();
  const valitudTootaja =tootajadFailist[i];

  if (valitudTootaja === undefined) {
    return <div>
      Töötajat ei leitud! <br />
      <Link to="/tootajad"> 
        <button>Tagasi töötajaid vaatama</button>
      </Link>
    </div>
  }

  return (
    <div>
      <div>Eesnimi: {valitudTootaja.eesnimi} </div>
      <div>Vanus: {valitudTootaja.vanus}</div>
      <div>Amet: {valitudTootaja.amet}</div> 
      <Link to="/tootajad">
        <button>Tagasi töötajaid vaatama</button>
      </Link>
    </div>
  )
}

export default YksTootaja
