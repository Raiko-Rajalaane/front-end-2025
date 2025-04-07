import { useRef, useState } from "react"

function Tagasiside() {
    const [tagasisided, setTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]) ;
    const tagasisideRef = useRef();

    const kustuta = (index) => {
      tagasisided.splice(index, 1);
      setTagasisided(tagasisided.slice());
    }

    const lisaTagasiside = () => {
      tagasisided.push(tagasisideRef.current.value);
      setTagasisided(tagasisided.slice());

    }

  return (
    <div> 
        {tagasisided.map((element, index) => 
          <div>
          <span>{element}</span>
          <button onClick={() => kustuta(index)}>X</button>
        </div>)}
        <br />
        <label>Lisa uus tagasiside:</label>
        <input ref={tagasisideRef} type="text" />
        <button onClick={() => lisaTagasiside()}>Sisesta</button>
    </div>
  )
}

export default Tagasiside
