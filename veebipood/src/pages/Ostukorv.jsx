import { useState } from "react"
import { Link } from "react-router-dom"
// import ostukorvFailist from "../data/ostukorv.json"
import { useTranslation } from "react-i18next";

function Ostukorv() {

  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);
  const { t } = useTranslation();

  const kustuta = (index) => {
   tooted.splice(index,1);
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }

  const hinnadKokku = () => {
    let kokku = 0;
    tooted.forEach(toode => kokku += toode.hind);
    return kokku;
  }

  return (
    <div>
        {tooted.length > 0 && <button onClick={() => setTooted([])}>Tühjenda</button>}
        {tooted.map((toode, index) => 
         <div key={index}>
           {toode.nimi}: {toode.hind}€
           <button onClick={() => kustuta(index)}>X</button>
          </div>)}

        {tooted.length === 0 && <div>{t("cart.is-empty")}<Link to="/tooted">Mine tooteid lisama.</Link></div>}

        {tooted.length > 0 && <div>Summa kokku: {hinnadKokku()}€</div>}
    </div>
  )
}

export default Ostukorv