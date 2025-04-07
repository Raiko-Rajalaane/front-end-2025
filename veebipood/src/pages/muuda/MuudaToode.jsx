import { useNavigate, useParams } from "react-router-dom"
import tootedFailist from "../../data/tooted.json"
import { useRef } from "react";

function MuudaToode() {
  const {i} = useParams();
  const found = tootedFailist[i]

  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  const navigate = useNavigate();

    const muuda = () => {
      tootedFailist[i] = {
        "nimi": nimiRef.current.value,
        "hind": Number(hindRef.current.value),
        "aktiivne": aktiivneRef.current.checked,
        "pilt": piltRef.current.value
      }
      navigate("/halda-tooted")
    }

  return (
    <div>
      <label>Toote nimi</label>
      <input type="text" defaultValue={found.nimi} ref={nimiRef} /> <br />
      <label>Toote hind</label>
      <input type="number" defaultValue={found.hind} ref={hindRef} /> <br />
      <label>Toote pilt</label>
      <input type="text" defaultValue={found.pilt} ref={piltRef} /> <br />
      <label>Toode aktiivne</label>
      <input type="checkbox" defaultChecked={found.aktiivne} ref={aktiivneRef}/> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode
