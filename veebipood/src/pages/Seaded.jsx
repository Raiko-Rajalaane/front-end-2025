import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Seaded() {
  const [keel, setKeel] = useState("est");
  const aadressRef = useRef();
  const emailRef = useRef();
  const telefonRef = useRef();

  const sisestaAadress = () => {
    if (aadressRef.current.value.length < 4) {
      toast.error("Aadress liiga lühike");
      return;
    } 
      toast.success("Aadress sisestatud: " + aadressRef.current.value)
  }

  const sisestaEmail = () => {
    if (emailRef.current.value.includes("@") === false) {
      toast.error("Ei saa ilma @ märgita e-maili lisada");
      return;
    } 
    toast.success("Email sisestatud: " + emailRef.current.value)

  }

  const sisestaTelefon = () => {
    if (telefonRef.current.value.startsWith("+372") === false) {
      toast.error("Pead sisestama Eesti suunakoodi");
      return;
    } 
    toast.success("Telefon sisestatud: " + telefonRef.current.value)

  }

  return (
    <div>
        <label>Aadress: </label>
        <input ref={aadressRef} type="text" />
        <button onClick={sisestaAadress}>Sisesta</button>

        <br /> <br />

        <label>Email: </label>
        <input ref={emailRef} type="text" />
        <button onClick={sisestaEmail}>Sisesta</button>

        <br /> <br />

        <label>Telefon: </label>
        <input ref={telefonRef} type="text" />
        <button onClick={sisestaTelefon}>Sisesta</button>


        <br /> <br />
        <div>Hetkel aktiivse keele lühend: {keel}</div>
        <button className={keel === "est" ? "aktiivne-keel" : undefined} onClick={() => setKeel("est")}>Eesti</button>
        <button className={keel === "eng" ? "aktiivne-keel" : undefined} onClick={() => setKeel("eng")}>English</button>
        <button className={keel === "rus" ? "aktiivne-keel" : undefined} onClick={() => setKeel("rus")}>Pycckij</button>
        <button className={keel === "esp" ? "aktiivne-keel" : undefined} onClick={() => setKeel("esp")}>Espanol</button>
        
        {keel === "est" && <div>Leht on eesti keelne</div>}
        {keel === "eng" && <div>Page is in English</div>}
        {keel === "rus" && <div>Страница на русском языке</div>}
        {keel === "esp" && <div>La página está en español</div>}
        <br />
        {keel !== "est" && <div><i>Translations other than Estonian are not ready</i></div>}
    
     <ToastContainer />
     <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="light"
        />
    </div>
  )
}

export default Seaded