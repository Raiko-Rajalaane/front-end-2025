import { useState } from "react";

function Avaleht() {
  const [laigitud, setLaigitud] = useState(false);

  return (
    <div>
        {laigitud === true && <img src="/laigitud.svg" alt="" />}
        {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
        <button onClick={() => setLaigitud(!laigitud)}>Muuda like-i</button>

        <br /><br />

        <button>-</button>
        <span>1</span>
        <button>+</button>
    </div>
  )
}

export default Avaleht