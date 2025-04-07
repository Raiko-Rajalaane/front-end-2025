import { useState } from "react"
import esindusedFailist from "../../data/esindused.json"
import { Link } from "react-router-dom";

function HaldaEsindused() {
  const [esindused, uuendaEsindused] = useState(esindusedFailist.slice());

  const kustuta = (index) => {
    esindused.splice(index, 1);
    uuendaEsindused(esindused.slice());
  }

  return (
    <div>
      <label>Keskus:</label> <br />
      <input type="text" /> <br />
      <label htmlFor="">Telefoni nr:</label> <br />
      <input type="text" /> <br />
      <label htmlFor="">Aadress:</label> <br />
      <input type="text" /> <br />
      <button>Lisa uus keskus</button>

      <br />

      <div>Esindusi tabelis kokku: {esindused.length}tk</div>

      <table>
        <thead>
          <tr>
            <th>Järjekorra nr</th>
            <th>Index</th>
            <th>Keskus</th>
            <th>Number</th>
            <th>Aadress</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {esindused.map((esindus, index) =>
            <tr key={esindus.keskus}>
              <td>{index + 1}</td>
              <td>{index}</td>
              <td>{esindus.keskus}</td>
              <td>{esindus.tel}</td>
              <td>{esindus.aadress}</td>
              <td><button onClick={() => kustuta(index)}>X</button></td>
              <td><Link to={"/muuda-esindus/" + index}><button>Muuda</button></Link></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaEsindused

