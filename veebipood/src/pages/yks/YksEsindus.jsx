import { Link, useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"

function YksEsindus() {
  const {jrknr} = useParams();
  const leitud = esindusedFailist[jrknr];

  if (leitud === undefined) {
    return <div>
      Esindust ei leitud! <br /> <br />
      <Link to="/esindused">
        <button>Tagasi esindusi vaatama</button>
      </Link>
      </div>
  }


  return (
    <div>
      <div>Keskus: {leitud.keskus}</div>
      <div>Telefoni nr: {leitud.tel}</div> 
      <div>Aadress: {leitud.aadress}</div>
      <br />
      <Link to="/esindused">
        <button>Tagasi esindusi vaatama</button>
      </Link>
    </div>
  )
}

export default YksEsindus
