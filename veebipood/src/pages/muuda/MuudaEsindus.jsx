import { useNavigate, useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"
import { useRef } from "react";


function MuudaEsindus() {
  const {i} = useParams();
  const valitudEsindus = esindusedFailist[i];

  const keskusRef = useRef();
  const telRef = useRef();
  const aadressRef = useRef();

  const navigeeri = useNavigate();

  const muuda = () => {
    esindusedFailist[i] = {
      "keskus": keskusRef.current.value,
      "tel": telRef.current.value,
      "aadress": aadressRef.current.value
    }
    navigeeri("/halda-esindused");
  }

  return (
    <div>
      <label htmlFor="">Keskuse nimi:</label>
      <input type="text" defaultValue={valitudEsindus.keskus} ref={keskusRef} /> <br />
      <label htmlFor="">Telefoni number:</label>
      <input type="text" defaultValue={valitudEsindus.tel} ref={telRef} /> <br />
      <label htmlFor="">Aadress:</label>
      <input type="text" defaultValue={valitudEsindus.aadress} ref={aadressRef} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaEsindus
