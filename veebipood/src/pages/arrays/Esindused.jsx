import { useState } from "react"
import esindusedFailist from "../../data/esindused.json"
import { Link } from "react-router-dom";


function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [esindused, setEsindused] = useState(esindusedFailist.slice());

  const reset = () => {
    setEsindused(esindusedFailist.slice());
  }

  const sorteeriAZ = () => {
    esindused.sort((a, b) => a.keskus.localeCompare(b.keskus, "et"));
    setEsindused(esindused.slice());
  }

  const sorteeriZA = () => {
    esindused.sort((a, b) => b.keskus.localeCompare(a.keskus, "et"));
    setEsindused(esindused.slice());
  }

  const sorteeriKasv = () => {
    esindused.sort((a, b) => a.keskus.length - b.keskus.length);
    setEsindused(esindused.slice());
  }

  const sorteeriKah = () => {
    esindused.sort((a, b) => b.keskus.length - a.keskus.length);
    setEsindused(esindused.slice());
  }
  
  const sorteeriNeljas = () => {
    esindused.sort((a, b) => a.keskus[3].localeCompare(b.keskus[3]));
    setEsindused(esindused.slice());
  }

  const filterE = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.keskus.endsWith("e"));
    setEsindused(vastus);
  }

  const filterVah7 = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.keskus.length >= 7);
    setEsindused(vastus);
  }

  const filter9 = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.keskus.length === 9);
    setEsindused(vastus);
  }

  const filterIS = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.keskus.includes("is"));
    setEsindused(vastus);
  }

  const filter4onS = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.keskus[3] === "s");
    setEsindused(vastus);
  }

  const filterPaaris = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.keskus.length % 2 === 0);
    setEsindused(vastus);
  }

  return (
    <div>
        <br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriKasv}>Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriKah}>Sorteeri tähed kahanevalt</button>
        <button onClick={sorteeriNeljas}>Sorteeri neljanda tähe järgi A-Z</button>
        <br /> <br />
        <button onClick={filterE}>Filtreeri e-ga lõppevad</button>
        <button onClick={filterVah7}>Filtreeri vähemalt 7-tähelised</button>
        <button onClick={filter9}>Filtreeri täpselt 9-tähelised</button>
        <button onClick={filterIS}>Filreeri "is" lühendit sisaldavad</button>
        <button onClick={filter4onS}>Filtreeri, kel 4. täht on "s"</button>
        <button onClick={filterPaaris}>Filtreeri paarisarv tähti sisaldavad</button>
        <br /><br />
        <button onClick={reset}>Reset</button>
        <br /> <br />
        <div>Hetkel aktiivne linn: {linn}</div>
        <div>Esindusi kokku: {esindused.length}tk</div>
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

          {esindused.map((esindus, index) => 
          <div key={esindus.keskus}>
            {esindus.keskus}  (+372{esindus.tel})
            <Link to={"/esindus/"+ index}>
              <button>Vt esindust</button>
            </Link>
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