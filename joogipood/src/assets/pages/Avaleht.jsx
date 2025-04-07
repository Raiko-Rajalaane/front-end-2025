import { useState } from "react";
import { Link } from "react-router-dom";
import joogidFailist from "../../data/joogid.json"

function Avaleht() {
  const [joogid, uuendaJoogid] = useState(joogidFailist);
   
  return (
    <div>
     {joogid.map((element, index) =>
      <Link to={"/jook/" + index}>
        <span>{element}</span>
      </Link>

     )}
    </div>
  )
}

export default Avaleht
