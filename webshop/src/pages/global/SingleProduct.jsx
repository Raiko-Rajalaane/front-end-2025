import { useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

function SingleProduct() {
  const { urlId } = useParams();
  const product = productsFromFile.find(
    (product) => product.id === Number(urlId)
  );
  const { t } = useTranslation();

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem('cart')) || [];

    const productInCart = cartLS.find((p) => p.toode.id === productClicked.id);
    if (productInCart !== undefined) {
      productInCart.kogus += 1;
    } else {
      cartLS.push({ toode: productClicked, kogus: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cartLS));
    toast.success(t('homepage.toastAdded'));
  };

  if (product === undefined) {
    return <div>{t('singleProduct.notFound')}</div>;
  }

  return (
    <div>
      <img src={product.image} style={{ width: '200px' }} alt="" />
      <div>{product.title}</div>
      <div>{product.price}€</div>
      <div>{product.description}</div>
      <div>{product.category}</div>
      <div>{product.description}</div>
      <div>
        {product.rating.rate} ★ ({product.rating.count})
      </div>
      <button onClick={() => addToCart(product)}>
        {t('homepage.addToCart')}
      </button>
    </div>
  );
}

export default SingleProduct;
