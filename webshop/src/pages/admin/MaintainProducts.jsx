import { useState } from "react"
import { toast } from "react-toastify";
import productsFromFile from "../../data/products.json"
import { Link } from "react-router-dom";


function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());

  const remove = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
    toast.success("Product removed successfully!")
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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) =>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td><img className="table-image" src={product.image} alt="" /></td>
              <td>{product.rating.rate} ★ ({product.rating.count})</td>
              <td><Link to={"/admin/edit-product/" + index}><button>Edit</button></Link></td>
              <td><button onClick={() => remove(index)}>X</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MaintainProducts
