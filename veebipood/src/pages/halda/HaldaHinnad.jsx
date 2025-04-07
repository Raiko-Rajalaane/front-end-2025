import { useRef, useState } from "react";
import hinnadFailist from "../../data/hinnad.json";
import { Link } from "react-router-dom";

function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());
  const hindRef = useRef();
  const lisajaRef = useRef();

  const kustuta = (index) => {
    hinnadFailist.splice(index, 1);
    setHinnad(hinnadFailist.slice());
  }

  const sisesta = () => {
    hinnadFailist.push({
    "arv": Number(hindRef.current.value),
    "lisaja": lisajaRef.current.value
  });
    setHinnad(hinnadFailist.slice());
    hindRef.current.value = "";
    lisajaRef.current.value = "";
  }

  const arvutaKokku = () => {
    let summa = 0;
    hinnad.forEach(hind => summa += hind.arv)
    return summa;
  }

  return (
    <div>
      <label>Uus hind:</label> 
      <input  ref={hindRef} type="number" /> 
      <button onClick={sisesta}>Sisesta</button> <br />

      <label>Lisaja:</label> 
      <input ref={lisajaRef} type="text" /> 
      <button onClick={sisesta}>Sisesta</button> <br />

      <div>{hinnad.length}tk</div>
      <table>
        <thead>
            <tr>
            <th>Järjekorranumber: alates 1-st</th>
            <th>Index: alates 0-st</th>
            <th>Hind</th>
            <th>Lisaja</th>
            <th>Kustuta nupp</th>
            <th>Muuda nupp</th>
            </tr>
        </thead>
        <tbody>
            {hinnad.map((hind, index) =>
                <tr key={hind.arv}>
                <td>{index+1}</td>
                <td>{index}</td>
                <td>{hind.arv}</td>
                <td>{hind.lisaja}</td>
                <td><button onClick={() => kustuta(index)}>X</button></td>
                <td><Link to={"/muuda-hind/" + index}><button>Muuda</button></Link></td>
                </tr>
            )}
        </tbody>
        </table>
        <div>Hinnad kokku: {arvutaKokku()}€</div>
    </div>
  )
}

export default HaldaHinnad
