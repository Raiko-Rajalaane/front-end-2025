import { useState } from "react"

function LisaTegelane() {
  const [sonum, uuendaSonum] = useState("");

  return (
    <div>
      {sonum}
      <label>Tegelase nimi</label> <br />
      <input type="text" /> <br />
      <button onClick={() => uuendaSonum("Tegelane lisatud!")}>Lisa uus</button>
    </div>
  )
}

export default LisaTegelane
