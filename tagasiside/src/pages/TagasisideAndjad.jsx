import { useRef, useState } from "react"
import nimedFailist from "../data/nimed.json"

function TagasisideAndjad() {
    const [nimed, muudaNimed] = useState(nimedFailist.slice());
    const uusnimiRef = useRef();

    const kustuta = (index) => {
        nimed.splice(index, 1);
        muudaNimed(nimed.slice());
    }

    const sisesta = () => {
        nimed.push(uusnimiRef.current.value)
        muudaNimed(nimed.slice());
    }

    const insertEST = () => {
        const vastus = nimed.map(nimi => "EST-" + nimi);
        muudaNimed(vastus);
    }

    const filtreeriAlgabM = () => {
        const vastus = nimed.filter(nimi => nimi.startsWith("M"))
        muudaNimed(vastus);
    }

    const filtreeriPikkus6 = () => {
        const vastus = nimed.filter(nimi => nimi.length === 6)
        muudaNimed(vastus);
    }

    const filteeriLoppebY = () => {
        const vastus = nimed.filter(nimi => nimi.endsWith("y"));
        muudaNimed(vastus);
    }
    
    const sorteeriZA = () => {
        nimed.sort((a, b) => b.localeCompare(a));
        muudaNimed(nimed.slice());
    }

    const filteeriRaiko = () => {
        const vastus = nimed.filter(nimi => nimi.includes("Raiko"));
        muudaNimed(vastus);
    }


  return (
    <div>
        <button onClick={filtreeriAlgabM}>Filtreeri M-tähega algavad</button>
        <button onClick={filtreeriPikkus6}>Filtreeri 6-kohalised</button>
        <button onClick={filteeriLoppebY}>Filtreeri Y-tähega lõppevad</button>
        <button onClick={filteeriRaiko}>Filtreeri "Raiko"</button>
        <br />
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={insertEST}>Lisa kõigi ette "EST-"</button>
        <div>Kokku: {nimed.length}tk</div>

        <label>Sisesta uus nimi:</label>
        <input ref={uusnimiRef} type="text" />
        <button onClick={sisesta}>Sisesta</button>

        {nimed.map((nimi, index) => 
            <div>
                {nimi}
                <button onClick={() => kustuta(index)}>X</button>
            </div>)}
    </div>
  )
}

export default TagasisideAndjad
