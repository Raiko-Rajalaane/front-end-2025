import { useEffect, useRef, useState } from 'react';

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]); //väljanäidatav
  const [parcelMachinesDb, setParcelMachinesDb] = useState([]); //koguaeg originaalne seis, Database
  const pmRef = useRef();

  useEffect(() => {
    fetch('https://www.omniva.ee/locations.json')
      .then((res) => res.json())
      .then((json) => {
        setParcelMachines(json);
        setParcelMachinesDb(json);
      });
  }, []);

  const searchFromPMs = () => {
    const result = parcelMachinesDb.filter((pm) =>
      pm.NAME.toLowerCase().includes(pmRef.current.value.toLowerCase())
    );
    setParcelMachines(result);
  };

  return (
    <div>
      <label>Otsi pakiautomaatidest: </label>
      <input type="text" ref={pmRef} onChange={searchFromPMs} />

      <select>
        {parcelMachines
          .filter((pm) => pm.A0_NAME === 'EE')
          .map((pm) => (
            <option key={pm.NAME}>{pm.NAME}</option>
          ))}
      </select>
    </div>
  );
}

export default ParcelMachines;
