import { useRef, useState } from "react";
import autodFailist from "../../data/autod.json";

function HaldaAutod() {
    const [autod, setAutod] = useState(autodFailist.slice());
    const nimiRef = useRef();

    // const kustutaEsimene = () => {
    //     autod.splice(0, 1);
    //     setAutod(autod.slice());
    // }

    // const kustutaTeine = () => {
    //     autod.splice(1, 1);
    //     setAutod(autod.slice());
    // }
    
    // const kustutaKolmas = () => {
    //     autod.splice(2, 1);
    //     setAutod(autod.slice());
    // }
    
    // const kustutaNeljas = () => {
    //     autod.splice(3, 1);
    //     setAutod(autod.slice());
    // }

    const kustuta = (index) => {
        autodFailist.splice(index, 1);
        setAutod(autodFailist.slice());
    }

    const sisesta = () => {
        autodFailist.push(nimiRef.current.value);
        setAutod(autodFailist.slice());
    }

    const arvutaKokku = () => {
        let summa = 0;
        autod.forEach(auto => summa += auto.length)
        return summa;
      }


  return (
    <div>
      <label>Auto nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button> <br />

      <div>Kokku: {autod.length}</div>
      {/* <button onClick={kustutaEsimene}>Kustuta esimene</button>
      <button onClick={kustutaTeine}>Kustuta teine</button>
      <button onClick={kustutaKolmas}>Kustuta kolmas</button>
      <button onClick={kustutaNeljas}>Kustuta neljas</button> */}
        <table>
        <thead>
            <tr>
            <th>Järjekorranumber: alates 1-st</th>
            <th>Index: alates 0-st</th>
            <th>Auto nimi</th>
            <th>Kustuta nupp</th>
            </tr>
        </thead>
        <tbody>
            {autod.map((auto, index) =>
                <tr key={auto}>
                <td>{index+1}</td>
                <td>{index}</td>
                <td>{auto}</td>
                <td><button onClick={() => kustuta(index)}>X</button></td>
                </tr>
            )}
        </tbody>
        </table>
        <div>Tähemärgid kokku: {arvutaKokku()}tk</div>
    </div>
  )
}

export default HaldaAutod
