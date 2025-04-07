import { useState } from "react"
import { toast } from "react-toastify";
import productsFromFile from "../../data/products.json"
import cartFromFile from "../../data/cart.json"
import { Link } from "react-router-dom";


function HomePage() {
  const [products, setProducts] = useState(productsFromFile.slice());

  const addToCart = (product) => {
    cartFromFile.push(product);
    toast.success("Added to cart!")
  }

  const sortAZ = () => {
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a, b) => b.title.localeCompare(a.title));
    setProducts(products.slice());
  }

  const priceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  const priceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  const ratingBest = () => {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  }

  const ratingWorst = () => {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  }

  const filterCategory = (categoryName) => {
    const filtered = productsFromFile.filter(product => product.category === categoryName);
    setProducts(filtered);
  }

  return (
    <div>
      <button onClick={sortAZ}>Name A-Z</button>
      <button onClick={sortZA}>Name Z-A</button>
      <button onClick={priceAsc}>Price ascending</button>
      <button onClick={priceDesc}>Price descending</button>
      <button onClick={ratingBest}>Rating (best)</button>
      <button onClick={ratingWorst}>Rating (worst)</button>

      <br /><br />
      <button onClick={() => filterCategory("men's clothing")}>Men's clothing</button>
      <button onClick={() => filterCategory("women's clothing")}>Women's clothing</button>
      <button onClick={() => filterCategory("jewelery")}>Jewellery</button>
      <button onClick={() => filterCategory("electronics")}>Electronics</button>

      <br /><br />

      {products.map((product, index) =>
        <div key={product.id}>
          <img style={{width: "100px"}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <Link to={"/product/" + index}><button>View product</button></Link>
          <button onClick={() => addToCart(product)}>Add to cart</button>
          <br /> <br />
        </div>
      )}
    </div>
  )
}

export default HomePage
