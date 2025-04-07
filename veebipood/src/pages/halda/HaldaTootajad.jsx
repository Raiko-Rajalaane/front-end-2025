import { useRef, useState } from "react"
import tootajadFailist from "../../data/tootajad.json"
import { Link } from "react-router-dom";

function HaldaTootajad() {
  const [tootajad, muudaTootajad] = useState(tootajadFailist.slice());
  const nimiRef = useRef();
  const vanusRef = useRef();
  const ametRef = useRef();

  const lisaUus = () => {
    tootajadFailist.push({
      "eesnimi": nimiRef.current.value,
      "vanus": Number(vanusRef.current.value),
      "amet": ametRef.current.value
    });
    muudaTootajad(tootajadFailist.slice());
    nimiRef.current.value = "";
    vanusRef.current.value = "";
    ametRef.current.value =  "";
  }

  const kustuta = (index) => {
    tootajad.splice(index, 1);
    muudaTootajad(tootajad.slice());
  }

  const arvutaTahemargid = () => {
    let tahemargid = 0;
    tootajad.forEach(töötaja => tahemargid += töötaja.eesnimi.length);
    return tahemargid;
  }

  return (
    <div>
      
      <label>Töötaja nimi:</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Töötaja vanus:</label> <br />
      <input ref={vanusRef} type="text" /> <br />
      <label>Töötaja amet:</label> <br />
      <input ref={ametRef} type="text" /> <br />
      <button onClick={lisaUus}>Lisa uus töötaja</button>

      <br /><br />

      <div>Töötajaid kokku: {tootajad.length}tk</div>
      <div>Tähemärke kokku: {arvutaTahemargid()}tk</div>
      <table>
        <thead>
          <tr>
            <th>Järjekorranumber: al 1-st</th>
            <th>Index: al 0-st</th>
            <th>Töötaja nimi</th>
            <th>Kustuta</th>
            <th>Muuda nupp</th>
          </tr>
        </thead>
        <tbody>
          {tootajad.map((töötaja, index) =>
            <tr key={töötaja.eesnimi}>
              <td>{index + 1}</td>
              <td>{index}</td>
              <td>{töötaja.eesnimi}</td>
              <td><button onClick={() => kustuta(index)}>X</button></td>
              <td><Link to={"/muuda-tootaja/" + index}><button>Muuda</button></Link></td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  )
}

export default HaldaTootajad
