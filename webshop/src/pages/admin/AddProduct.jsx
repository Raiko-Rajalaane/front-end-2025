import { useRef } from "react";
import productsFromFile from "../../data/products.json"

function AddProduct() {
  
  const titleRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();
  const imgRef = useRef();
  const rateRef = useRef();
  const countRef = useRef();

  const addNew = () => {
    productsFromFile.push({
      "id": productsFromFile.length + 1,
      "title": titleRef.current.value,
      "price": priceRef.current.value,
      "description": descRef.current.value,
      "category": categoryRef.current.value,
      "image": imgRef.current.value,
      "rating": {
        "rate": rateRef.current.value,
        "count": countRef.current.value
      }
    });
  }
  
  return (
    <div>
      <label>Title: </label>
      <input ref={titleRef} type="text" /> <br />
      <label>Price: </label>
      <input ref={priceRef} type="number" /> <br />
      <label>Description: </label>
      <input ref={descRef} type="text" /> <br />
      <label>Category: </label>
      <input ref={categoryRef} type="text" /> <br />
      <label>Image link: </label>
      <input ref={imgRef} type="text" /> <br />
      <label>Rating: </label>
      <input ref={rateRef} type="number" /> <br />
      <label>Count: </label>
      <input ref={countRef} type="number" /> <br />
      <button onClick={addNew}>Add product</button>
    </div>
  )
}

export default AddProduct
