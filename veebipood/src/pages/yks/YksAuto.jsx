import { useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"

function YksAuto() {
  const {jarjekorranumber} = useParams();
  const leitud = autodFailist[jarjekorranumber]

  if (leitud === undefined) {
    return <div>Autot ei leitud!</div>
  }

  return (
    <div>
      <div>Mark: {leitud.nimi}</div>
      <div>Hind: {leitud.hind}€</div>
    </div>
  )
}

export default YksAuto
