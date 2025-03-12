import { useState } from "react";

// tumesinine - (function, const, div, button) liigitus
// tavaline sinine - (laigitud) muutujad
// helesinine - (onClick, current.value, alt, src) omadused
// kollane - funktsioonid
// lillad - (import, return, export) käsklused
// valge - (&&, koma, =, ===, tekst HTMLis, !, ?:) märgid ja tekst HTML'is
// tumeroheline - kommentaar
// heleroheline - numberväärtus
// oranž - sõnaline väärtus
// tumesinine - boolean väärtus
// suure tähega Roheline - imporditav klass
// {{{[[[((()))]]]}}}

// = <-- väärtuse andmiseks
// === <-- vasaku ja parema poole identsuse leidmiseks
// == <-- sama mis === ehk identsuse leidmiseks, aga tüübi kontrollita
// () <-- funktsiooni käivitamiseks
// [] <-- array, list
// {} <-- koodiblokk if{}  function(){}, HTMLs JavaScripti tähistus
// ; <-- vabatahtlik. rea lõpetamise tähis
// && <-- kui vasakul on tõde, siis paremat näidatakse
// ? : <-- kui enne küsimärki on tõde, siis näidatakse enne koolonit, 
// kui väär, siis pärast koolonit olevat väärtust
// () => {} funktsionaalsuse tähis
// ! <-- keerab tagurpidi


function Avaleht() {
  const [laigitud, setLaigitud] = useState(false);
  const [kogus, setKogus] = useState(0);
  const [sonum, setSonum] = useState("Muuda kogust!");

  const vahendaKogust = () => {
    setKogus(kogus - 1)
    setSonum("Kogus vähendatud!")
  }

  const suurendaKogust = () => {
    setKogus(kogus + 1)
    setSonum("Kogus suurendatud!")
  }
  
  return (
    <div>
        {laigitud === true && <img src="/laigitud.svg" alt="" />}
        {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
        <button onClick={() => setLaigitud(!laigitud)}>Muuda like-i</button>

        <br /><br />
        <div>{sonum}</div>
        <button disabled={kogus === 0} onClick={vahendaKogust}>-</button>
        <span>{kogus}</span>
        <button onClick={suurendaKogust}>+</button>
    </div>
  )
}

export default Avaleht