import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

function Menu() {
  const { t, i18n } = useTranslation();

  const muudaKeelEst = () => {
    localStorage.setItem("keel", "et");
    i18n.changeLanguage("et");
  }

  const muudaKeelEng = () => {
   
    localStorage.setItem("keel", "en");
    i18n.changeLanguage("en");
  }

  return (
    <div>
      
   <Link to="/">
    <img className="pilt" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Nobe%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0061%29.jpg" alt="" />
  </Link>

  {/* <span className="tekst">Osta meie tooteid</span> */}

  <Link to="/ostukorv">
    <button>{t("nav.cart")}</button>
  </Link>

  
  <Link to="/seaded">
    <button>{t("nav.settings")}</button>
  </Link>

  <Link to="/lisa-toode">
    <button>Lisa toode</button>
  </Link>

  <Link to="/osta-kinkekaart">
    <button>Kinkekaardid</button>
  </Link>

  <Link to="/kalkulaator">
    <button>Kalkulaator</button>
  </Link>

  <Link to="/logi-sisse">
    <button>Logi sisse</button>
  </Link>

  <Link to="/registreeru">
    <button>Registreeru</button>
  </Link>

  <Link to="/arrays-home">
    <button>Arrays</button>
  </Link>

  <Link to="/halda-home">
    <button>Admin: Halda</button>
  </Link>

  <Link to="/kaart">
    <button>Kaart</button>
  </Link>

  <Link to="/kontakteeru">
    <button>Kontakteeru</button>
  </Link>

  <br /><br />

  <button onClick={muudaKeelEst}>EST</button>
    <button onClick={muudaKeelEng}>ENG</button>

    <br /><br />

 

  </div>
  )
}

export default Menu