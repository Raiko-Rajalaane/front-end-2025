import { useEffect, useState } from "react";

function Ujutused() {
    const [floods, setFloods] = useState([]);

    useEffect(() => {
        fetch('https://environment.data.gov.uk/flood-monitoring/id/floods') // kust võtan
            .then(res=>res.json()) // kogu tagastus lehelt koos metaandmetega
            .then(json=> setFloods(json.items)) // reaalne sisu mida näen lehel
    }, []);

    if (floods.length === 0) {
        return <div>Loading...</div>
    }

  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>Flood Area ID</th>
            <th>Severity</th>
            <th>Area name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {floods.map((product) =>
            <tr key={product.floodAreaID}>
              <td>{product.floodAreaID}</td>
              <td>{product.severity}</td>
              <td>{product.eaAreaName}</td>
              <td>{product.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Ujutused
