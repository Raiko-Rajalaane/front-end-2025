import { useState } from 'react';
import { toast } from 'react-toastify';
import productsFromFile from '../../data/products.json';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const { t } = useTranslation();

  const addToCart = (product) => {
    const oldCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = oldCart.slice();
    updatedCart.push(product);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(t('homepage.toastAdded'));
  };

  const sortAZ = () => {
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  };

  const sortZA = () => {
    products.sort((a, b) => b.title.localeCompare(a.title));
    setProducts(products.slice());
  };

  const priceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  };

  const priceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  };

  const ratingBest = () => {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  };

  const ratingWorst = () => {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  };

  const filterCategory = (categoryName) => {
    const filtered = productsFromFile.filter(
      (product) => product.category === categoryName
    );
    setProducts(filtered);
  };

  return (
    <div>
      <button onClick={sortAZ}>{t('homepage.sortAZ')}</button>
      <button onClick={sortZA}>{t('homepage.sortZA')}</button>
      <button onClick={priceAsc}>{t('homepage.priceAsc')}</button>
      <button onClick={priceDesc}>{t('homepage.priceDesc')}</button>
      <button onClick={ratingBest}>{t('homepage.ratingBest')}</button>
      <button onClick={ratingWorst}>{t('homepage.ratingWorst')}</button>

      <br />
      <br />
      <button onClick={() => filterCategory("men's clothing")}>
        {t('homepage.category.men')}
      </button>
      <button onClick={() => filterCategory("women's clothing")}>
        {t('homepage.category.women')}
      </button>
      <button onClick={() => filterCategory('jewelery')}>
        {t('homepage.category.jewelery')}
      </button>
      <button onClick={() => filterCategory('electronics')}>
        {t('homepage.category.electronics')}
      </button>

      <br />
      <br />

      {products.map((product, index) => (
        <div key={product.id}>
          <img style={{ width: '100px' }} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <Link to={'/product/' + index}>
            <button>{t('homepage.viewProduct')}</button>
          </Link>
          <button onClick={() => addToCart(product)}>
            {t('homepage.addToCart')}
          </button>
          <br /> <br />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
