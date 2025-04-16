import { useState } from 'react';
import { toast } from 'react-toastify';
import productsFromFile from '../../data/products.json';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CarouselGallery from '../../components/CarouselGallery';
import styles from '../../css/HomePage.module.css';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile.slice());
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
      <CarouselGallery />

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

      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <img className={styles.image} src={product.image} alt="" />
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{product.price.toFixed(2)}€</div>
            <Link to={'/product/' + product.id}>
              <button>{t('homepage.viewProduct')}</button>
            </Link>
            <button onClick={() => addToCart(product)}>
              {t('homepage.addToCart')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
