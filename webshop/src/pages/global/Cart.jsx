import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Cart() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });
  const { t } = useTranslation();

  const remove = (index) => {
    const updatedCart = cart.slice();
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]); 
    localStorage.removeItem('cart'); 
  };

  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => (total += product.price));
    return total;
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
            {cart.length}
          </div>
          <div>
            {t('cart.total')}
            {totalPrice()}
          </div>
          <button onClick={clearCart}>{t('cart.clear')}</button>
        </>
      )}

      {cart.map((product, index) => (
        <div key={product.title}>
          <img style={{ width: '100px' }} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <button onClick={() => remove(index)}>{t('cart.remove')}</button>{' '}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default Cart;
