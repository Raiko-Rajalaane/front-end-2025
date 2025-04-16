import { useEffect, useState } from "react";

function Pakiautomaadid() {
  const [pakiautomaadid, setPakiautomaadid] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json") // kust võtan
      .then((res) => res.json()) // kogu tagastus lehelt koos metaandmetega
      .then((json) => setPakiautomaadid(json)); // reaalne sisu mida näen lehel
  }, []);

  if (pakiautomaadid.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Maakond</th>
            <th>Linn</th>
          </tr>
        </thead>
        <tbody>
          {pakiautomaadid
            .filter((pa) => pa.A0_NAME === "EE")
            .map((pa) => (
              <tr key={pa.ZIP}>
                <td>{pa.ZIP}</td>
                <td>{pa.NAME}</td>
                <td>{pa.A1_NAME}</td>
                <td>{pa.A3_NAME}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pakiautomaadid;
