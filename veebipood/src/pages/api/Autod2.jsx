import { useEffect, useState } from "react";

function Autod2() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100"
    )
      .then((res) => res.json())
      .then((json) => setCars(json.results));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Drive</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.drive}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Autod2;
