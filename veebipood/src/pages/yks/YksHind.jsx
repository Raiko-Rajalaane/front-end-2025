import { useParams } from "react-router-dom";
import hinnadFailist from "../../data/hinnad.json"

function YksHind() {
  const {i} = useParams();
  const leitud = hinnadFailist[i];

  return (
    <div>
      <div>Hind: {leitud.arv}€</div>
      <div>Lisas: {leitud.lisaja}</div>
    </div>
  )
}

export default YksHind
