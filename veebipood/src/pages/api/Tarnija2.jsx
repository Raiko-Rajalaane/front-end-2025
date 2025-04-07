import { useEffect, useState } from "react";

function Tarnija2() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products') // kust võtan
            .then(res=>res.json()) // kogu tagastus lehelt koos metaandmetega
            .then(json=> setProducts(json)) // reaalne sisu mida näen lehel
    }, []);

    if (products.length === 0) {
        return <div>Loading...</div>
    }

  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products
          .filter(product => product.creationAt === product.category.creationAt)
          .map((product) =>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category.name}</td>
              <td><img style={{width: "100px"}} src={product.images[0]} alt="" /></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Tarnija2
