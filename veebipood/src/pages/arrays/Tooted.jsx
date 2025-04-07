import { useRef, useState } from "react"
import tootedFailist from "../../data/tooted.json"
import { Link } from "react-router-dom";
// import ostukorvFailist from "../../data/ostukorv.json"

function Tooted() {
  const [tooted, setTooted] = useState(tootedFailist.slice());
  const otsingRef = useRef();

  const reset = () => {
    setTooted(tootedFailist.slice())
  }

  const sorteeriAZ = () => {
    tooted.sort((a, b) => a.nimi.localeCompare(b.nimi));
    setTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a, b) => b.nimi.localeCompare(a.nimi));
    setTooted(tooted.slice());
  }

  const sorteeriTahedKasv = () => {
    tooted.sort((a, b) => a.nimi.length -b.nimi.length);
    setTooted(tooted.slice());
  }

  const sorteeriTahedKah = () => {
    tooted.sort((a, b) => b.nimi.length - a.nimi.length);
    setTooted(tooted.slice());
  }

  const sorteeriTeineTahtAZ = () => {
    tooted.sort((a, b) => a.nimi[1].localeCompare(b.nimi[1], "et"));
    setTooted(tooted.slice());
  }

  const filtreeriTahemarkeKuni6 = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.length <= 6)
    setTooted(vastus);
  }

  const filtreeriTahemarke6 = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.length === 6);
    setTooted(vastus);
  }

  const filtreeriLoppebTahegaA = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.endsWith("a"));
    setTooted(vastus);
  }

  const filtreeriLoppebTahegaY = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.endsWith("y"));
    setTooted(vastus);
  }

  const filtreeriPaarisarvud = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.length % 2 === 0)
    setTooted(vastus);
  }

  const otsi = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi
      .toLowerCase()
      .includes(otsingRef.current.value.toLowerCase())
    );
    setTooted(vastus);
  }


  const lisaOstukorvi = (klikitudToode) => {
    // ostukorvFailist.push(klikitudToode);
    const ostukorv = JSON.parse(localStorage.getItem("ostukorv")) || [];
    ostukorv.push(klikitudToode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }

  // 1. võtta localStorage-st vana ostukorvi seis (localStorage.getItem)
  // 1b. kui on tühi, siis võtta tühi array (|| [])
  //    2. võtta localStorage-st saadud väärtustelt jutumärgid ära (JSON.parse)
  // 3. lisama ühe toote localStorage-st võetud seisule juurde (.push)
  //    4. panema localStorage-sse lisatava väärtustele jutumärgid tagasi (JSON.stringify)
  // 5. panema localStorage-sse selle lisatud tootega tagasi (localStorage.setItem)
  

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teise tähe järgi A-Z</button>
      <br />
      <button onClick={filtreeriTahemarkeKuni6}>Filtreeri välja kuni 6-tähelised</button>
      <button onClick={filtreeriTahemarke6}>Filtreeri välja täpselt 6-tähelised</button>
      <button onClick={filtreeriLoppebTahegaA}>Filtreeri välja a-tähega lõppevad</button>
      <button onClick={filtreeriLoppebTahegaY}>Filtreeri välja y-tähega lõppevad</button>
      <button onClick={filtreeriPaarisarvud}>Filtreeri paarisarvu tähti sisaldavad</button>
      <br />
      <button onClick={reset}>Reset</button>
      <div>Tooteid kokku: {tooted.length}tk</div>
      <br />
      <label htmlFor="otsingriba">Otsi:</label>
      <input ref={otsingRef} onChange={otsi} id="otsingriba" type="text" />
      {tooted.map((toode, index) => 
      <div key={toode.nimi}>
        {toode.nimi}
        <Link to={"/toode/" + index}>
          <button>Vt. lähemalt</button>
        </Link>
        <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>  
      </div>)}
    </div>
  )
}



export default Tooted
