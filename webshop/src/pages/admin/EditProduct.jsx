import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json"

function EditProduct() {
  const {index} = useParams();
  const product = productsFromFile[index];

   const idRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descRef = useRef();
    const categoryRef = useRef();
    const imgRef = useRef();
    const rateRef = useRef();
    const countRef = useRef();

    const navigate = useNavigate();

    const edit = () => {
      productsFromFile[index] = {
      "id": idRef.current.value,
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descRef.current.value,
      "category": categoryRef.current.value,
      "image": imgRef.current.value,
      "rating": {
        "rate": Number(rateRef.current.value),
        "count": Number(countRef.current.value),
        }
      };
      navigate("/admin/maintain-products")
    }

  return (
    <div>
      <label>Product ID: </label>
      <input defaultValue={product.id} ref={idRef} type="text" /> <br />
      <label>Title: </label>
      <input defaultValue={product.title} ref={titleRef} type="text" /> <br />
      <label>Price: </label>
      <input defaultValue={product.price} ref={priceRef} type="number" /> <br />
      <label>Description: </label>
      <input defaultValue={product.description} ref={descRef} type="text" /> <br />
      <label>Category: </label>
      <input defaultValue={product.category} ref={categoryRef} type="text" /> <br />
      <label>Image link: </label>
      <input defaultValue={product.image} ref={imgRef} type="text" /> <br />
      <label>Rating: </label>
      <input defaultValue={product.rating.rate} ref={rateRef} type="text" /> <br />
      <label>Count: </label>
      <input defaultValue={product.rating.count} ref={countRef} type="text" /> <br />
      <button onClick={edit}>Edit product</button>
    </div>
  )
}

export default EditProduct
