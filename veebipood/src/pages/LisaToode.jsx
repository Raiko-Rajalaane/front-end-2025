import { useRef, useState } from "react"
import autodFailist from "../data/autod.json"
import tootedFailist from "../data/tooted.json"

function LisaToode() {
  const [sonum, setSonum] = useState("");
  const nimiRef = useRef(); //inputist väärtuste lugemiseks
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const valikAutoRef = useRef();
  const valikToodeRef = useRef();

  const sisesta = () => {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimetusega ei saa toodet lisada");
      return;
    }
    
    if (hindRef.current.value === "") {
      setSonum("Tühja hinnaga ei saa toodet lisada");
      return;
    }

    if (valikAutoRef.current.checked === false &&
      valikToodeRef.current.checked === false
    ) {
      setSonum("Pead valima tüübi");
      return;
    }

    const objekt = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "aktiivne": aktiivneRef.current.checked, 
      "pilt": piltRef.current.value
    }

    if (valikAutoRef.current.checked) {
      setSonum("Auto edukalt lisatud");
      autodFailist.push(objekt);
    }

    if (valikToodeRef.current.checked) {
      setSonum("Toode edukalt lisatud");
      tootedFailist.push(objekt);
    }

    setSonum("Toode edukalt lisatud");
    
  }

  return (
    <div>
        <div>{sonum}</div>
        <label>Toote nimi</label>
        <input type="text" ref={nimiRef} /> <br />
        <label>Toote hind</label>
        <input type="number" ref={hindRef} /> <br />
        <label>Toote pilt</label>
        <input type="text" ref={piltRef} /> <br />
        <label>Toode aktiivne</label>
        <input type="checkbox" ref={aktiivneRef}/> <br />
        <label>Auto</label>
        <input type="radio" name="valik" ref={valikAutoRef} /> <br />
        <label>Toode</label>
        <input type="radio" name="valik" ref={valikToodeRef} /> <br />
        <button onClick={sisesta}>Sisesta</button>
    </div>
  )
}

export default LisaToode