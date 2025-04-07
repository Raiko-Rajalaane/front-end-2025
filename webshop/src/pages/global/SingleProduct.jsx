import { useParams } from "react-router-dom"
import productsFromFile from "../../data/products.json"

function SingleProduct() {
  const {index} = useParams();
  const product = productsFromFile[index]

  if (product === undefined) {
    return <div>Product not found!</div>
  }

  return (
    <div>
      <img src={product.image} style={{width: "200px"}} alt="" />
      <div>{product.title}</div>
      <div>{product.price}</div>
    </div>
  )
}

export default SingleProduct
