import { useRef, useState } from "react"
import tootajadFailist from "../../data/tootajad.json"
import { Link } from "react-router-dom";

function Tootajad() {
  const [tootajad, muudaTootajad] = useState(tootajadFailist.slice());
  const otsingRef = useRef();

  const otsi = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi
      .toLowerCase()
      .includes(otsingRef.current.value.toLowerCase())
    );
    muudaTootajad(vastus);
  }

  const reset = () => {
    muudaTootajad(tootajadFailist.slice());
  }

  const sorteeriAZ = () => {
    tootajad.sort((a, b) => a.eesnimi.localeCompare(b.eesnimi));
    muudaTootajad(tootajad.slice());
  }

  const sorteeriZA = () => {
    tootajad.sort((a, b) => b.eesnimi.localeCompare(a.eesnimi));
    muudaTootajad(tootajad.slice());
  }

  const sorteeriTahedKasv = () => {
    tootajad.sort((a, b) => a.eesnimi.length - b.eesnimi.length);
    muudaTootajad(tootajad.slice());
  }

  const sorteeriTahedKah = () => {
    tootajad.sort((a, b) => b.eesnimi.length - a.eesnimi.length);
    muudaTootajad(tootajad.slice( ));
  }

  const sorteeriNeljasTaht = () => {
    tootajad.sort((a, b) => a.eesnimi[3].localeCompare(b.eesnimi[3]));
    muudaTootajad(tootajad.slice());
  }

  const filtreeriLõpusN = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.endsWith("n"))
    muudaTootajad(vastus);
  }

  const filtreeriVah6 = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.length >= 6)
    muudaTootajad(vastus);
  }

  const filtreeriTapselt6 = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.length === 6)
    muudaTootajad(vastus);
  }

  const filtreeriLuhend = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.includes("rl"));
    muudaTootajad(vastus);
  }

  const filtreeriNeljasM = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi[3] === "m")
    muudaTootajad(vastus);
  }

  const filtreeriPaarisarv = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.eesnimi.length % 2 === 0);
    muudaTootajad(vastus);
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriNeljasTaht}>Sorteeri neljanda tähe järgi</button>
      <br />
      <button onClick={filtreeriLõpusN}>Filtreeri n-tähega lõppevad</button>
      <button onClick={filtreeriVah6}>Filtreeri vähemalt 6-tähelised</button>
      <button onClick={filtreeriTapselt6}>Filtreeri täpselt 6-tähelised</button>
      <button onClick={filtreeriLuhend}>Filtreeri lühendit "rl" sisaldavad</button>
      <button onClick={filtreeriNeljasM}>Filtreeri, kel 4. täht on "m"</button>
      <button onClick={filtreeriPaarisarv}>Filtreeri, kel paarisarv tähti</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <label>Otsi:</label>
      <input ref={otsingRef} onChange={otsi} type="text" />
      <div>Töötajaid kokku: {tootajad.length}tk</div>
      {tootajad.map((tootaja, index) => 
      <div>
        {tootaja.eesnimi}
        <Link to={"/tootaja/" + index}>
          <button>Vt. lähemalt</button>
        </Link>
      </div>)}
    </div>
  )
}

export default Tootajad
