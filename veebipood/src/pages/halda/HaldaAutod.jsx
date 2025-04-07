import { useRef, useState } from "react";
import autodFailist from "../../data/autod.json";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function HaldaAutod() {
    const [autod, setAutod] = useState(autodFailist.slice());
    const nimiRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();
    const piltRef = useRef();

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
        if (nimiRef.current.value === "") {
          toast.error("Ei saa ilma nimeta lisada")
          return;
        }

        if (Number(hindRef.current.value) <= 0) {
          toast.error("Ei saa hind olla negatiivne");
          return;

        }
        autodFailist.push({
            "nimi": nimiRef.current.value,
            "hind": Number(hindRef.current.value), // sõna -> numbriks
            "aktiivne": aktiivneRef.current.value.checked, // sõna -> booleaniks
            "pilt": piltRef.current.value
        });
        setAutod(autodFailist.slice());
        nimiRef.current.value = "";
        hindRef.current.value = "";
        aktiivneRef.current.checked = false;
        piltRef.current.value = "";
        toast.success("Auto lisatud")
        
    }

    const arvutaKokku = () => {
        let summa = 0;
        autod.forEach(auto => summa += auto.nimi.length)
        return summa;
      }

      const arvutaHinnadKokku = () => {
        let summa = 0;
        autod.forEach(auto => summa += auto.hind)
        return summa;
      }

  return (
    <div>
      <label>Auto nimi </label> 
      <input ref={nimiRef} type="text" /> 
      <button onClick={sisesta}>Sisesta</button> <br />

      <label>Auto hind </label> 
      <input ref={hindRef} type="number" /> 
      <button onClick={sisesta}>Sisesta</button> <br />

      <label>Auto pilt </label> 
      <input ref={piltRef} type="text" /> 
      <button onClick={sisesta}>Sisesta</button> <br />

      <label>Auto aktiivne </label> 
      <input ref={aktiivneRef} type="checkbox" /> 
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
            <th>Auto hind</th>
            <th>Auto pilt</th>
            <th>Auto aktiivne</th>
            <th>Kustuta nupp</th>
            <th>Muuda nupp</th>
            </tr>
        </thead>
        <tbody>
            {autod.map((auto, index) =>
                <tr key={auto.nimi}>
                <td>{index+1}</td>
                <td>{index}</td>
                <td>{auto.nimi}</td>
                <td>{auto.hind}</td>
                <td> <img className="auto-pilt" src={auto.pilt} alt="" /> </td>
                <td>{auto.aktiivne ? "Aktiivne" : "Mitteaktiivne"}</td>
                <td><button onClick={() => kustuta(index)}>X</button></td>
                <td><Link to={"/muuda-auto/" + index}><button>Muuda</button></Link></td>
                </tr>
            )}
        </tbody>
        </table>
        <div>Tähemärgid kokku: {arvutaKokku()}tk</div>
        <div>Hinnad kokku: {arvutaHinnadKokku()}€</div>

        <ToastContainer />
        <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="light"
        />
    </div>
  )
}

export default HaldaAutod
