import { useState } from "react"

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  
  return (
    <>
      <div>See on meist leht, nähtav localhost:5173/meist aadressil</div>
      <div>Meie töötajad:</div>
      <br />
      <div>Jaan Poppel</div>
      <div>Koristaja</div>
      <button onClick={() => n2itaKontakt('+09187365916')}>Võta ühendust</button>
      <br /> <br />
      <div>Kusti Liiv</div>
      <div>Autojuht</div>
      <button onClick={() => n2itaKontakt('+981732591')}>Võta ühendust</button>
      <br /> <br />
      <div>Peeter Teras</div>
      <div>Sekretär</div>
      <button onClick={() => n2itaKontakt('+9081396161361')}>Võta ühendust</button>
      <br /> <br />
      <div>Tom Collins</div>
      <div>Tootejuht</div>
      <button onClick={() => n2itaKontakt('+1346235754378')} >Võta ühendust</button>
      { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </>
  )
}

export default Meist
