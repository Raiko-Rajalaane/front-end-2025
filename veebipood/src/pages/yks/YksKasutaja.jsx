import { Link, useParams } from "react-router-dom"
import kasutajadFailist from "../../data/kasutajad.json"

function YksKasutaja() {
  const {suvaline} = useParams();
  const valitudKasutaja = kasutajadFailist[suvaline];

  if (valitudKasutaja === undefined) {
    return <div>
      Kasutajat ei leitud! <br />
      <Link to="/kasutajad">
        <button>Tagasi kasutajaid vaatama</button>
      </Link>
      </div>
  }

  return (
    <div>
      <div>Kasutaja: {valitudKasutaja.email}</div> <br />
      <Link to="/kasutajad">
        <button>Tagasi kasutajaid vaatama</button>
      </Link>
    </div>
  )
}

export default YksKasutaja
