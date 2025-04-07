import { useState } from "react"

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState(["Põltsamaa", "Aura", "Kadarbik", "Saku", "Värska"])

  return (
    <div>
      {joogid.map(jook => <div>{jook}</div>)}
    </div>
  )
}

export default HaldaJooke
