import { useState } from "react"

function Kinkekaart() {
  const [summa, setSumma] = useState(20);

  return (
    <div>
      <button className ={summa === 20 ? "aktiivne" : undefined} onClick={() => setSumma(20)}>20€</button>
      <button className ={summa === 50 ? "aktiivne" : undefined} onClick={() => setSumma(50)}>50€</button>
      <button className ={summa === 100 ? "aktiivne" : undefined} onClick={() => setSumma(100)}>100€</button>
      <div>Kinkekaart {summa} €</div>
    </div>
  )
}

export default Kinkekaart
