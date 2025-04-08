import { useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json';
import { useTranslation } from 'react-i18next';

function SingleProduct() {
  const { index } = useParams();
  const product = productsFromFile[index];
  const { t } = useTranslation();

  if (product === undefined) {
    return <div>{t('singleProduct.notFound')}</div>;
  }

  return (
    <div>
      <img src={product.image} style={{ width: '200px' }} alt="" />
      <div>{product.title}</div>
      <div>{product.price}</div>
    </div>
  );
}

export default SingleProduct;
