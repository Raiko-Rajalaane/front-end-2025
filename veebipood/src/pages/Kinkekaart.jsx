import { useRef, useState } from "react"
import ostukorvFailist from "../data/ostukorv.json"

function Kinkekaart() {
  const [summa, setSumma] = useState(20);
  const [kogus, setKogus] = useState(1);
  const [sonum, setSonum] = useState("");
  const emailRef = useRef();
  
  const sisesta = () => {
    if (emailRef.current.value.includes("@") === false) {
      setSonum("Email pole korrektne");
      return; //lõpetab funktsiooni
    }

    if (emailRef.current.value.length < 6) {
      setSonum("Email pole korrektne");
      return; //lõpetab funktsiooni
    }
    
    setSonum("Email edukalt lisatud");

  }

  const lisaOstukorvi = () => {
    const kinkekaart = {
      "nimi": "Kinkekaart",
      "hind": summa * kogus,
      "aktiivne": true,
      "pilt": "https://saksavorst.ee/wp-content/uploads/2023/05/pw-gift-card.png"
    }

    ostukorvFailist.push(kinkekaart);
    setSonum("Kinkekaart edukalt ostukorvi lisatud");
  }

  return (
    <div>
      <button className ={summa === 20 ? "aktiivne" : undefined} onClick={() => setSumma(20)}>20€</button>
      <button className ={summa === 50 ? "aktiivne" : undefined} onClick={() => setSumma(50)}>50€</button>
      <button className ={summa === 100 ? "aktiivne" : undefined} onClick={() => setSumma(100)}>100€</button>
      <div>Kinkekaart {summa} €</div>

      <br /><br />

      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br /><br />

      <div>{sonum}</div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button>

      <br /><br />

      <button onClick={lisaOstukorvi}>Lisa kinkekaart ostukorvi</button>
    </div>
    
  )
}

export default Kinkekaart
