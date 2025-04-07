import { useRef, useState } from "react"
import autodFailist from "../../data/autod.json";
import ostukorvFailist from "../../data/ostukorv.json"
import { Link } from "react-router-dom";

function Autod() {
  const [autod, setAutod] = useState(autodFailist.slice());
  const otsingRef = useRef();

  const reset = () => {
    setAutod(autodFailist.slice());
  }

  const sorteeriHindKasvavalt = () => {
    autod.sort((a, b) => a.hind - b.hind);
    setAutod(autod.slice());
  }

  const sorteeriHindKahanevalt = () => {
    autod.sort((a, b) => b.hind - a.hind);
    setAutod(autod.slice());
  }

  const sorteeriAZ = () => {
    autod.sort((a, b) => a.nimi.localeCompare(b.nimi));
    setAutod(autod.slice());
  }

  const sorteeriZA = () => {
    autod.sort((a, b) => b.nimi.localeCompare(a.nimi));
    setAutod(autod.slice());
  }

  const sorteeriKolmasTahtAZ = () => {
    autod.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
    setAutod(autod.slice());
  }
  

  const sorteeriKasvavalt = () => {
    autod.sort((a, b) => a.nimi.length - b.nimi.length);
    setAutod(autod.slice());
  }

  const sorteeriKahanevalt = () => {
    autod.sort((a, b) => b.nimi.length - a.nimi.length);
    setAutod(autod.slice());
  }

  const filtreeriTeineTahtO = () => {
    const vastus = autodFailist.filter(auto => auto.nimi[1] === "o");
    setAutod(vastus);
  }

  const filtreeriSisaldabA = () => {
    const vastus = autodFailist.filter(auto => auto.nimi.includes("a"));
    setAutod(vastus);
  }

  const filtreeriTahemarke4 = () => {
    const vastus = autodFailist.filter(auto => auto.nimi.length === 4);
    setAutod(vastus);
  }

  const filtreeriTahemarkeVah5 = () => {
    const vastus = autodFailist.filter(auto => auto.nimi.length >= 5);
    setAutod(vastus);
  }

  const filtreeriLoppebTahegaI = () => {
    const vastus = autodFailist.filter(auto => auto.nimi.endsWith("i"));
    setAutod(vastus);
  }



  const otsi = () => {
    const vastus = autodFailist.filter(auto => auto.nimi
      .toLowerCase()
      .includes(otsingRef.current.value.toLowerCase()) 
    );
    setAutod(vastus);
  }

  const lisaOstukorvi = (auto) => {
    ostukorvFailist.push(auto);
  }

  return (
    <div>
      <label>Otsi: </label>
      <input ref={otsingRef} onChange={otsi} type="text" /> <br />
      <div>{autod.length}tk</div>
      <br />
      <div>Autosid on kokku: {autod.length}</div>
      <button onClick={reset}>Reset</button><br />
      <button onClick={sorteeriHindKasvavalt}>Sorteeri hinnad kasvavalt</button>
      <button onClick={sorteeriHindKahanevalt}>Sorteeri hinnad kahanevalt</button> <br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button> <br />
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmanda tähe järgi A-Z</button> <br />
      <button onClick={sorteeriKasvavalt}>Sorteeri tähemärgid kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri tähemärgid kahanevalt</button>
      <br /><br />
      <button onClick={filtreeriTeineTahtO}>Jäta alles kelle teine täht on 'o'</button>
      <button onClick={filtreeriSisaldabA}>Jäta alles kellel on sõnas väike 'a' täht </button>
      <button onClick={filtreeriTahemarke4}>Jäta alles kellel tähemärke täpselt 4</button>
      <button onClick={filtreeriTahemarkeVah5}>Jäta alles kellel tähemärke vähemalt 5</button>
      <button onClick={filtreeriLoppebTahegaI}>Jäta alles kes lõppeb 'i' tähega</button>
      
      
      {autod.map((auto, index) => 
      <div key={auto.nimi}>
        {auto.nimi} - {auto.hind}€
        <button onClick={() => lisaOstukorvi(auto)} >Lisa ostukorvi</button>
        
        <Link to={"/auto/" + index}>
          <button>Vt lähemalt</button>
        </Link>
      </div>)}
    </div>
  )
}

// key --> siia tuleb panna, mis teeb selle ühe elemendi unikaalseks. praegu tema nimetus.
// muidu läheb sinna kas ID või nimi (kui see on unikaalne)

// React soovib tsükli sisu mällu jätta, et ta ei peaks seda korduvalt tegema. iga kord kui
// läheb käima funktsioon, mis uuendab muutujat (praegusel juhul setAutod()), siis tehake
// re-renderdus ja iga re-renderdus kuvab HTMLi uuesti, aga kõik on mälus peale tsüklite HTMLs.
// selle jaoks, et tsükkel oleks mälus, peab lisama key={}

export default Autod

