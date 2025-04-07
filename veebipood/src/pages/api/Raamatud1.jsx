import { useEffect, useRef, useState } from "react";

function Tarnija1() {
    const [products, setProducts] = useState([]);
    const [searchField, setSearchField] = useState("javascript");

    const searchRef = useRef();

    useEffect(() => {
        fetch('https://api.itbook.store/1.0/search/' + searchField) // kust võtan
            .then(res=>res.json()) // kogu tagastus lehelt koos metaandmetega
            .then(json=> setProducts(json.books)) // reaalne sisu mida näen lehel
    }, [searchField]);

    const searchFromBooks = () => {
      if (searchRef.current.value.length < 3) {
        return;
      }
      if (searchRef.current.value.includes(" ")) {
        return;
      }
      setSearchField(searchRef.current.value);
    }

  return (
    <div>
      <label htmlFor="">Otsi raamatut: </label>
       <input onChange={searchFromBooks} ref={searchRef} type="text" /> <br />
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
          {products.map((product) =>
            <tr key={product.isbn13}>
              <td>{product.isbn13}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.subtitle}</td>
              <td>{product.category}</td>
              <td><img style={{width: "100px"}} src={product.image} alt="" /></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Tarnija1
