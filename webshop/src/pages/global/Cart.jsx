import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../../css/Cart.module.css';
import ParcelMachines from '../../components/ParcelMachines';
import Payment from '../../components/Payment';

function Cart() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });
  const { t } = useTranslation();

  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => (total += product.toode.price * product.kogus));
    return total;
  };

  const totalProductsCount = () => {
    let total = 0;
    cart.forEach((product) => (total += product.kogus));
    return total;
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const decreaseQuantity = (index) => {
    cart[index].kogus--;
    if (cart[index].kogus < 1) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const increaseQuantity = (index) => {
    cart[index].kogus++;
    setCart(cart.slice());
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const remove = (index) => {
    const updatedCart = cart.slice();
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      {cart.length === 0 && (
        <div>
          {t('cart.empty')}
          <Link to="/">{t('cart.browseLink')}</Link>
        </div>
      )}

      {cart.length > 0 && (
        <>
          <div>
            {t('cart.itemsCount')}
            {cart.length}tk
          </div>
          <div>
            Total products:
            {totalProductsCount()}tk
          </div>
          <div>
            {t('cart.total')}
            {totalPrice().toFixed(2)}€
          </div>
          <button onClick={clearCart}>{t('cart.clear')}</button>
        </>
      )}

      {cart.map((product, index) => (
        <div className={styles.product} key={index}>
          <Link to={'/product/' + product.toode.id}>
            <img className={styles.image} src={product.toode.image} alt="" />
          </Link>
          <div className={styles.title}>{product.toode.title}</div>
          <div className={styles.price}>{product.toode.price}€</div>
          <div className={styles.quantity}>
            <img
              className="icon"
              src="/minus.png"
              alt=""
              onClick={() => decreaseQuantity(index)}
            />
            <div>{product.kogus}tk</div>
            <img
              className="icon"
              src="/plus.png"
              alt=""
              onClick={() => increaseQuantity(index)}
            />
          </div>
          <div className={styles.total}>
            {(product.toode.price * product.kogus).toFixed(2)}€
          </div>
          <img
            className="icon"
            src="/remove.png"
            alt=""
            onClick={() => remove(index)}
          />
        </div>
      ))}
      <br />

      {cart.length > 0 && (
        <>
          <ParcelMachines />
          <Payment />
        </>
      )}
    </div>
  );
}

export default Cart;
