import { useRef, useState } from "react"

function LisaToode() {
  const [sonum, setSonum] = useState("");
  const nimiRef = useRef(); //inputist väärtuste lugemiseks

  const sisesta = () => {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimetusega ei saa toodet lisada");
    } else {
      setSonum("Toode edukalt lisatud");
    }
  }

  return (
    <div>
        <div>{sonum}</div>
        <label>Toote nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={sisesta}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode