import tootedFailist from "../../data/tooted.json"
import { Link, useParams } from "react-router-dom"

function YksToode() {
  const {i} = useParams();
  const valitudToode = tootedFailist[i];

  if (valitudToode === undefined) {
    return <div>
      <div>Toodet ei leitud!</div>
      <Link to="/tooted">
        <button>Tagasi tooteid vaatama</button>
      </Link>
    </div>
  }


  return (
    <div>
      <div>Toode: {valitudToode.nimi}</div>
      <div>Hind: {valitudToode.hind}€</div>
      <div>Aktiivne:{valitudToode.aktiivne}</div> <br />
      <Link to="/tooted">
        <button>Tagasi tooteid vaatama</button>
      </Link>
    </div>
  )
}

export default YksToode
