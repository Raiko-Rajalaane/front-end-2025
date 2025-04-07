import { useState } from "react";
import kasutajadFailist from "../../data/kasutajad.json"
import { Link } from "react-router-dom";

function HaldaKasutajad() {
  const [kasutajad, uuendaKasutajad] = useState(kasutajadFailist.slice());

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Muuda nupp</th>
          </tr>
        </thead>
        <tbody>
          {kasutajad.map((kasutaja, index) =>
          <tr key={kasutaja.email}>
            <td>{kasutaja.email}</td>
            <td><Link to={"/muuda-kasutaja/" + index}><button>Muuda</button></Link></td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaKasutajad

// KODUS