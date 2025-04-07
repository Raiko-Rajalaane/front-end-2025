import { useNavigate, useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"
import { useRef } from "react";

function MuudaHind() {
  const {index} = useParams();
  const leitud = hinnadFailist[index];

  const arvRef = useRef();
  const lisajaRef = useRef();

  const navigeeri = useNavigate();

  const muuda = () => {
    hinnadFailist[index] = {
      "arv": Number(arvRef.current.value),
      "lisaja": lisajaRef.current.value
    }
    navigeeri("/halda-hinnad");
  }

  return (
    <div>
      <label>Hind</label> <br />
      <input ref={arvRef} type="number" defaultValue={leitud.arv} /> <br />
      <label>Lisaja</label> <br />
      <input ref={lisajaRef} type="text" defaultValue={leitud.lisaja} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaHind
