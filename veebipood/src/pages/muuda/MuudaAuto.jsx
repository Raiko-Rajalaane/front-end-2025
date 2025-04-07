import { useNavigate, useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"
import { useRef } from "react";

function MuudaAuto() {
  const {i} = useParams();
  const found = autodFailist[i];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  const navigate = useNavigate();

  const muuda = () => {
    autodFailist[i] = {
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value),
      "aktiivne": aktiivneRef.current.checked,
      "pilt": piltRef.current.value
    }
    navigate("/halda-autod")
  }

  return (
    <div>
      <label>Auto nimi</label>
      <input type="text" defaultValue={found.nimi} ref={nimiRef} /> <br />
      <label>Auto hind</label>
      <input type="number" defaultValue={found.hind} ref={hindRef} /> <br />
      <label>Auto pilt</label>
      <input type="text" defaultValue={found.pilt} ref={piltRef} /> <br />
      <label>Auto aktiivne</label>
      <input type="checkbox" defaultChecked={found.aktiivne} ref={aktiivneRef}/> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaAuto
