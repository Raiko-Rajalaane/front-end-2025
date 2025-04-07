import { useNavigate, useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"
import { useRef } from "react";

function MuudaTootaja() {
  const {i} = useParams();
  const valitudTootaja = tootajadFailist[i];

  const eesnimiRef = useRef();
  const vanusRef = useRef();
  const ametRef = useRef();

  const navigeeri = useNavigate();

  const muuda = () => {
     tootajadFailist[i] = {
      "eesnimi": eesnimiRef.current.value,
      "vanus": Number(vanusRef.current.value),
      "amet": ametRef.current.value
    }
    navigeeri("/halda-tootajad")
  }

  return (
    <div>
      <label htmlFor="">Töötaja eesnimi:</label>
      <input type="text" defaultValue={valitudTootaja.eesnimi} ref={eesnimiRef}/> <br />
      <label htmlFor="">Vanus:</label>
      <input type="text" defaultValue={valitudTootaja.vanus} ref={vanusRef}/> <br />
      <label htmlFor="">Amet:</label>
      <input type="text" defaultValue={valitudTootaja.amet} ref={ametRef} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaTootaja
