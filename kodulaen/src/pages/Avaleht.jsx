import { useState } from "react";
import { useRef } from "react";


function Avaleht() {
  const [laenusumma, setLaenusumma] = useState(75000);
  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();
  const [intress, setIntress] = useState(4.44);
  const perioodRef = useRef();
  const [kuumakse, setKuumakse] = useState();


  const arvutaLaenusumma = () => {
    setLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value);
    arvutaKuumakse();
  }

  const arvutaIntress = () => {
    setIntress(Number(marginaalRef.current.value) + Number(euriborRef.current.value));
    arvutaKuumakse();
  }

  const arvutaKuumakse = () => {
     setKuumakse(
      (ostuhindRef.current.value - sissemakseRef.current.value) /
      (perioodRef.current.value * 12) *
      (Number(marginaalRef.current.value) + Number(euriborRef.current.value))
     );
  }
 


  return (
    <div>
      <label>Kinnisvara ostuhind</label>
      <input defaultValue={75000} onChange={arvutaLaenusumma} ref={ostuhindRef} type="number" /> <br />
      <label>Sissemakse</label>
      <input defaultValue={0} onChange={arvutaLaenusumma} ref={sissemakseRef} type="number" /> <br />
      <div>Laenusumma: {laenusumma}</div>
      <label>Periood</label>
      <input defaultValue={30} onChange={arvutaKuumakse} ref={perioodRef} type="number" /> <br />
      <label>Marginaal</label>
      <input defaultValue={1.7} onChange={arvutaIntress} ref={marginaalRef} type="number" /> <br />
      <label>Euribor</label>
      <input defaultValue={2.74} onChange={arvutaIntress} ref={euriborRef} type="number" /> <br />
      <div>Intress kokku: {intress.toFixed(2)}</div>
      <br /><br />
      <div>Kuumakse: {kuumakse}</div>
    </div>
  )
}

export default Avaleht
