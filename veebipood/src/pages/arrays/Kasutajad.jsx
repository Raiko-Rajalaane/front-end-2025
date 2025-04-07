import { useState } from "react"
import kasutajadFailist from "../../data/kasutajad.json"
import { Link } from "react-router-dom";


function Kasutajad() {
  const [kasutajad, setKasutajad] = useState(kasutajadFailist.slice());

  const sorteeriAZ = () => {
    kasutajad.sort((a, b) => a.email.localeCompare(b.email));
    setKasutajad(kasutajad.slice());
  }

  const sorteeriTahedKasv = () => {
    kasutajad.sort((a, b) => a.email.length - b.email.length);
    setKasutajad(kasutajad.slice());
  }

  return (
    <div>
      <br />
      <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
      <button onClick={sorteeriTahedKasv} >Sorteeri tähemärgid kasvavalt</button>
      <br /> <br />
      {kasutajad.map((kasutaja, index) => 
      <div key={kasutaja.email}>
        {kasutaja.email}
        <Link to={"/kasutaja/" + index}>
          <button>Vt. lähemalt</button>
        </Link>
      </div>)}
    </div>
  )
}

export default Kasutajad
