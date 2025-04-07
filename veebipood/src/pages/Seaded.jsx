import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

// Salvestuseks:
// 1) Andmebaas --> vaja eraldiseisvat teenusepakkujat
// 2) LocalStorage

// LocalStorage eksisteerib ainult sellest arvutis, selles brauseris

function Seaded() {  
  const [keel, setKeel] = useState(localStorage.getItem("keel") || "et");
  const aadressRef = useRef();
  const emailRef = useRef();
  const telefonRef = useRef();

  const { t, i18n } = useTranslation();

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

  const muudaKeelEst = () => {
    setKeel("et");
    localStorage.setItem("keel", "et");
    i18n.changeLanguage("et");
  }

  const muudaKeelEng = () => {
    setKeel("en");
    localStorage.setItem("keel", "en");
    i18n.changeLanguage("en");
  }

  const muudaKeelRus = () => {
    setKeel("ru");
    localStorage.setItem("keel", "ru");
    i18n.changeLanguage("ru");
  }

  const muudaKeelEsp = () => {
    setKeel("es");
    localStorage.setItem("keel", "es");
  }

  

  return (
    <div>
        <label>{t("settings.address")}</label>
        <input ref={aadressRef} type="text" />
        <button onClick={sisestaAadress}>{t("button.insert")}</button>

        <br /> <br />

        <label>Email: </label>
        <input ref={emailRef} type="text" />
        <button onClick={sisestaEmail}>{t("button.insert")}</button>

        <br /> <br />

        <label>{t("settings.telephone")}</label>
        <input ref={telefonRef} type="text" />
        <button onClick={sisestaTelefon}>{t("button.insert")}</button>


        <br /> <br />
        <div>Hetkel aktiivse keele lühend: {keel}</div>
        <button className={keel === "et" ? "aktiivne-keel" : undefined} onClick={muudaKeelEst}>Eesti</button>
        <button className={keel === "en" ? "aktiivne-keel" : undefined} onClick={muudaKeelEng}>English</button>
        <button className={keel === "ru" ? "aktiivne-keel" : undefined} onClick={muudaKeelRus}>Pycckij</button>
        <button className={keel === "es" ? "aktiivne-keel" : undefined} onClick={muudaKeelEsp}>Espanol</button>
        
        {keel === "et" && <div>Leht on eesti keelne</div>}
        {keel === "en" && <div>Page is in English</div>}
        {keel === "ru" && <div>Страница на русском языке</div>}
        {keel === "es" && <div>La página está en español</div>}
        <br />
        {keel !== "et" && <div><i>Translations other than Estonian are not ready</i></div>}
    
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