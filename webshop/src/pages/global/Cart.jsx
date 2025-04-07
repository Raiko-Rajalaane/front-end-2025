import { useState } from "react"
import cartFromFile from "../../data/cart.json"
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(cartFromFile);

  const remove = (index) => {
    cartFromFile.splice(index, 1);
    setCart(cartFromFile.slice());
  }

  const clearCart = () => {
    cartFromFile.length = 0;
    setCart(cartFromFile.slice());
  }

  const totalPrice = () => {
    let total = 0;
    cart.forEach(product => total += product.price);
    return total;
  }

  return (
    <div>
      {cart.length === 0 && 
        <div>
          Your cart is empty. <Link to='/' >Browse products.</Link>
        </div>
      }

      {cart.length > 0 &&
        <>
          <div>Items in cart: {cart.length}</div>
          <div>Total price: {totalPrice()}</div>
          <button onClick={clearCart}>Clear cart</button>
        </>  
      }

      {cart.map((product, index) =>
        <div key={product.title}>
          <img style={{"width": "100px"}} src={product.image} alt="" />  
          <div>{product.title}</div>
          <div>{product.price}</div>
          <button onClick={() => remove(index)}>Remove from cart</button> <br /><br />
        </div>
      )}
    </div>
  )
}

export default Cart
