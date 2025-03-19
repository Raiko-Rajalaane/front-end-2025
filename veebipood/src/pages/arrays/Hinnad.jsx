import { useRef, useState } from "react"
import hinnadFailist from "../../data/hinnad.json"

function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice())
  const otsingRef = useRef();
  
  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a - b);
    setHinnad(hinnad.slice());

    // hinnad.sort((a, b) => a - b);
    // setHinnad([...hinnad]);

    // const vastus = hinnad.toSorted((a, b) => a - b);
    // setHinnad(vastus);
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b - a);
    setHinnad(hinnad.slice());
  }

  const filtreeriVaiksemad1000 = () => {
    const vastus = hinnadFailist.filter(hind => hind < 1000)
    setHinnad(vastus); //HTMLi uuenduseks
  }

  const filtreeriSuuremad500 = () => {
    const vastus = hinnadFailist.filter(hind => hind > 500)
    setHinnad(vastus);
  }

  const reset = () => {
    setHinnad(hinnadFailist.slice());
  }

  const otsi = () => {
    const vastus = hinnadFailist.filter(hind => 
      hind.toString().includes(otsingRef.current.value));
    setHinnad(vastus);
  }

  // .length sõna peal --> mitu tähemärki on?
  // .length array peal --> mitu komaga eristatud elementi on?

  return (
    <div>
      <label>Otsi: </label>
      <input ref={otsingRef} onChange={otsi} type="number" /> <br />
      <br />
      <div>Hindu kokku: {hinnad.length}tk</div>
      <button onClick={reset}>Võta filtrid maha</button> <br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button> <br />
      <button onClick={filtreeriVaiksemad1000}>Jäta alles väiksemad kui 1000</button>
      <button onClick={filtreeriSuuremad500}>Jäta alles suuremad kui 500</button>
      {hinnad.map(hind => <div key={hind}>{hind}€</div>)}
    </div>
  )
}

export default Hinnad
