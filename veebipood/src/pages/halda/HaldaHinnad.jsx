import { useRef, useState } from "react";
import hinnadFailist from "../../data/hinnad.json";

function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());
  const hindRef = useRef();

  const kustuta = (index) => {
    hinnadFailist.splice(index, 1);
    setHinnad(hinnadFailist.slice());
  }

  const sisesta = () => {
    hinnadFailist.push(Number(hindRef.current.value))
    setHinnad(hinnadFailist.slice());
    hindRef.current.value = "";
  }

  const arvutaKokku = () => {
    let summa = 0;
    hinnad.forEach(hind => summa += hind)
    return summa;
  }

  return (
    <div>
      <label htmlFor="hind">Lisa uus hind</label> <br />
      <input id="hind" ref={hindRef} type="number" /> <br />
      <button onClick={sisesta}>Sisesta</button> <br />

      <div>{hinnad.length}tk</div>
      <table>
        <thead>
            <tr>
            <th>Järjekorranumber: alates 1-st</th>
            <th>Index: alates 0-st</th>
            <th>Hind</th>
            <th>Kustuta nupp</th>
            </tr>
        </thead>
        <tbody>
            {hinnad.map((auto, index) =>
                <tr key={auto}>
                <td>{index+1}</td>
                <td>{index}</td>
                <td>{auto}</td>
                <td><button onClick={() => kustuta(index)}>X</button></td>
                </tr>
            )}
        </tbody>
        </table>
        <div>Hinnad kokku: {arvutaKokku()}€</div>
    </div>
  )
}

export default HaldaHinnad
