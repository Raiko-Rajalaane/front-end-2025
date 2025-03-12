import { useState } from "react"
import TavaKalkulaator from "../components/TavaKalkulaator";
import LaenuKalkulaator from "../components/LaenuKalkulaator";
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator";

function Kalkulaator() {
  const [vaade, setVaade] = useState("maksimaalne");

  return (
    <div>
        <button onClick={() => setVaade("tava")}>Tavakalkulaator</button>
        <button onClick={() => setVaade("laenu")}>Laenukalkulaator</button>
        <button onClick={() => setVaade("maksimaalne")}>Maksimaalse laenu kalkulaator</button>
        {vaade === "tava" && <TavaKalkulaator />}
        {vaade === "laenu" && <LaenuKalkulaator />}
        {vaade === "maksimaalne" && <MaksimaalneKalkulaator />}
    </div>
  )
}

export default Kalkulaator
