import { useState } from "react";
import { useRef } from "react";

function LaenuKalkulaator() {
  const ostuhindRef = useRef(); // ei kasutata HTML-is .current.value (ainult inputi sees)
  const perioodRef = useRef();
  const [kuumakse, setKuumakse] = useState(250); // hoopis useState muudab HTML-is muutujaid
  const [ostuhind, setOstuhind] = useState(75000); // ainult veateate pärast teeme selle useState'i

// function uuendaKuumakse() {

const uuendaKuumakse = () => {
  setKuumakse(ostuhindRef.current.value / perioodRef.current.value / 12 * 1.20);
  setOstuhind(ostuhindRef.current.value);
}
  return (
    <div>
      <label>Kinnisvara ostuhind</label> <br />
      <input ref={ostuhindRef} onChange={uuendaKuumakse} defaultValue={75000} type="number" /><br />
      <label>Periood</label> <br />
      <select ref={perioodRef} onChange={uuendaKuumakse} defaultValue={30}>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
      </select>

      {ostuhind >= 20000 && ostuhind <= 10000000 && <div>Kuumakse: {kuumakse.toFixed(2)}</div>}
      {(ostuhind < 20000 || ostuhind > 10000000) &&
        <div className="red">Laenusumma võib olla vahemikus 20 000-10 000 000 eurot.
      </div>}
    </div>
  )
}

export default LaenuKalkulaator
