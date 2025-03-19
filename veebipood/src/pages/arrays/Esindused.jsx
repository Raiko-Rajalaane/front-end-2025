import { useState } from "react"
import esindusedFailist from "../../data/esindused.json"

// 1 võrdusmärk --> väärtuse andmiseks
// 2 võrdusmärki --> identsuse kontrolliks,
// aga ilma tüübi kontrollita  (kogemata võib olla integer 7 sama mis string "7")

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [esindused, setEsindused] = useState(esindusedFailist.slice());


// sorteeri A-Z
// sorteeri Z-A
// tähed kasvavalt
// tähed kahanevalt
// neljas täht A-Z
// sorteeri sõnad arvu järgi

// filtreeri e'ga lõppevad
// vähemalt 7 tähelised
// täpselt 9 tähelised
// "is" lühendit sisaldavad
// kellel on 4's täht "s"
// paarisarv tähti sisaldavad

  return (
    <div>
        <div>Hetkel aktiivne linn: {linn}</div>
        <button className={linn === "Tallinn" ? "aktiivne-linn" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
        <button className={linn === "Tartu" ? "aktiivne-linn" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
        <button className={linn === "Narva" ? "aktiivne-linn" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
        <button className={linn === "Pärnu" ? "aktiivne-linn" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

        {linn === "Tallinn" && 
        <>
          {/* <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div> */}

          {esindused.map(esindus => 
          <div key={esindus.keskus}>
            {esindus.keskus} (+372{esindus.tel})
          </div>)}
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