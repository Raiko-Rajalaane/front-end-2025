import { useEffect, useState } from "react";

function Tarnija1() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products') // kust võtan
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
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {products
          .filter(product => product.rating.rate > 2.5)
          .map((product) =>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td><img style={{width: "100px"}} src={product.image} alt="" /></td>
              <td>{product.rating.rate} ★ ({product.rating.count})</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Tarnija1
