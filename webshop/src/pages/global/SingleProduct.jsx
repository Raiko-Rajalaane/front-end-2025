import { useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json';
import { useTranslation } from 'react-i18next';

function SingleProduct() {
  const { urlId } = useParams();
  const product = productsFromFile.find(
    (product) => product.id === Number(urlId)
  );
  const { t } = useTranslation();

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
    </div>
  );
}

export default SingleProduct;
