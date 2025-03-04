import { useState } from "react"

// 1 võrdusmärk --> väärtuse andmiseks
// 2 võrdusmärki --> identsuse kontrolliks,
// aga ilma tüübi kontrollita  (kogemata võib olla integer 7 sama mis string "7")

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");

  return (
    <div>
        <div>Hetkel aktiivne linn: {linn}</div>
        <button className={linn === "Tallinn" ? "aktiivne-linn" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
        <button className={linn === "Tartu" ? "aktiivne-linn" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
        <button className={linn === "Narva" ? "aktiivne-linn" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
        <button className={linn === "Pärnu" ? "aktiivne-linn" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

        {linn === "Tallinn" && 
        <>
          <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div>
        </>
        }

        {linn === "Tartu" && 
        <>
          <div>Raatuse</div>
          <div>Lõunakeskus</div>
        </>
        }

        {linn === "Narva" && <div>Fama</div>}

        {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused