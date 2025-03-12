import { useState } from "react";


function Kontakt() {
  const [n2itaTelSolaris, muudaN2itaTelSolaris] = useState(false);
  const [n2itaTelPlaza, muudaN2itaTelPlaza] = useState(false);
  const [n2itaTelMustam2e, muudaN2itaTelMustam2e] = useState(false);

  return (
    <div>
      <div>See on kontaktide leht, nähtav localhost:5173/kontakt aadressil</div>
      <div>Võta meiega ühendust:</div>
      <br />
      <div className={n2itaTelSolaris === true ? "valitud" : undefined} onClick={() => muudaN2itaTelSolaris(!n2itaTelSolaris)}>Apollo kino Solaris</div>
      {n2itaTelSolaris && <div className="valitud">+08135835</div>}
      <div className={n2itaTelSolaris === true ? "valitud" : undefined}>Jaanimäe 35</div>
      <br />
      <div className={n2itaTelPlaza === true ? "valitud" : undefined} onClick={() => muudaN2itaTelPlaza(!n2itaTelPlaza)}>Apollo kino Coca-Cola Plaza</div>
      {n2itaTelPlaza && <div className="valitud">+98137515</div>}
      <div className={n2itaTelPlaza === true ? "valitud" : undefined}>Peetruse 16</div>
      <br />
      <div className={n2itaTelMustam2e === true ? "valitud" : undefined} onClick={() => muudaN2itaTelMustam2e(!n2itaTelMustam2e)}>Apollo Kino Mustamäe</div>
      {n2itaTelMustam2e && <div className="valitud">+9108375</div>}
      <div className={n2itaTelMustam2e === true ? "valitud" : undefined}>Sõpruse pst 56</div>
    </div>
  )
}

export default Kontakt
