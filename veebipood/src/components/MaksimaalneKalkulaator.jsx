import { useRef, useState } from "react";

 function MaksimaalneKalkulaator() {
  const ylalPeetavadRef = useRef();
  const sissetulekRef = useRef();
  const kohustusedRef = useRef();
  const [maksimaalne, setMaksimaalne] = useState(80000);
  const [vaikeSissetulek, setVaikeSissetulek] = useState(false);

  const uuendaMaksimaalneSumma = () => {
    if (sissetulekRef.current.value - kohustusedRef.current.value < 700) {
      setVaikeSissetulek(true)
    } else {
      setVaikeSissetulek(false)
    }
    
    setMaksimaalne((sissetulekRef.current.value - kohustusedRef.current.value)*100 - ylalPeetavadRef.current.value*10000);
  }

   return (
     <div>
       <label>Ülalpeetavate arv</label> <br />
       <select ref={ylalPeetavadRef} onChange={uuendaMaksimaalneSumma} defaultValue={1}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option value="3">3+</option>
       </select>
       <br /><label>Netosissetulek</label> <br />
       <input ref={sissetulekRef} onChange={uuendaMaksimaalneSumma} defaultValue={900} type="number" /> <br />
       <label >Igakuised kohustused</label> <br />
       <input ref={kohustusedRef} onChange={uuendaMaksimaalneSumma} defaultValue={0} type="number" /> <br />
       {vaikeSissetulek === false && <div>Maksimaalne summa: {maksimaalne}</div>}
       {vaikeSissetulek === true &&
        <div>
          Maksimaalse limiidi arvutamiseks on netosissetulek liiga väike või igakuised kohustused liiga suured.
        </div>
       }
      </div>
       
   )
 }
 
 export default MaksimaalneKalkulaator
 