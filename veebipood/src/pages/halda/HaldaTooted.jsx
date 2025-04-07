import { useState } from "react"
import tootedFailist from "../../data/tooted.json"
import { Link } from "react-router-dom";

function HaldaTooted() {
  const [tooted, setTooted] = useState(tootedFailist.slice());

  const kustuta = (index) => {
    tooted.splice(index, 1);
    setTooted(tooted.slice());
  }

  return (
    <div>
      <div>Tooteid kokku: {tooted.length}tk</div>

      <table>
        <thead>
          <tr>
            <th>Järjekorra nr: al 1-st</th>
            <th>Index: al 0-st</th>
            <th>Toote nimi</th>
            <th>Toote hind</th>
            <th>Toode aktiivne</th>
            <th>Toote pilt</th>
            <th>Kustuta nupp</th>
            <th>Muuda nupp</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, index) =>
            <tr>
              <td>{index + 1}</td>
              <td>{index}</td>
              <td>{toode.nimi}</td>
              <td>{toode.hind}</td>
              <td>{toode.aktiivne ? "Aktiivne" : "Mitteaktiivne"}</td>
              <td>{toode.pilt}</td>
              <td><button onClick={() => kustuta(index)}>X</button></td>
              <td><Link to={"/muuda-toode/" + index}><button>Muuda</button></Link></td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  )
}

export default HaldaTooted

// {"nimi": "", "hind": 35000, aktiivne: true, "pilt": ""},