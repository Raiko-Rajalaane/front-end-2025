import { useState } from "react";

function Seaded() {
  const [keel, setKeel] = useState("est");

  return (
    <div>
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
    </div>
  )
}

export default Seaded