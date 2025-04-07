import { useRef } from "react";
import kasutajadFailist from "../../data/kasutajad.json"
import { useNavigate, useParams } from "react-router-dom"

function MuudaKasutaja() {
  const {i} = useParams();
  const valitudKasutaja = kasutajadFailist[i];

  const emailRef = useRef();

  const navigeeri = useNavigate();

  const muuda = () => {
    kasutajadFailist[i] = {
      "email": emailRef.current.value
    }
    navigeeri("/halda-kasutajad")

  }

  return (
    <div>
      <label htmlFor="">Kasutaja email:</label>
      <input type="text" defaultValue={valitudKasutaja.email} ref={emailRef} />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaKasutaja
