import { useState } from "react"

function Kontakt() {
  const [aadress, määraAadress] = useState("Tallinn");
  const [telefon, määraTelefon] = useState("5512345");
  const [email, määraEmail] = useState("bla@baa.com")
  const [ingliseKeelne, vahetaKeelt] = useState("ei");

function määraBla() {
  määraAadress("england");
  määraTelefon("123123123")
  määraEmail("english@england.com")
  vahetaKeelt("jah")
}
  return (
    <div>
      <div>{aadress}</div>
      <div>{telefon}</div>
      <div>{email}</div> <br />
      <button onClick={() => määraBla()}>Muuda inglise keelseks</button> <br />
      {ingliseKeelne === "jah" && <div>Leht on inglise keelne</div>}
      {}
    </div>
  )
}

export default Kontakt