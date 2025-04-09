import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json';
import { useTranslation } from 'react-i18next';

function EditProduct() {
  const { index } = useParams();
  const { t } = useTranslation();
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
      id: idRef.current.value,
      title: titleRef.current.value,
      price: Number(priceRef.current.value),
      description: descRef.current.value,
      category: categoryRef.current.value,
      image: imgRef.current.value,
      rating: {
        rate: Number(rateRef.current.value),
        count: Number(countRef.current.value),
      },
    };
    navigate('/admin/maintain-products');
  };

  return (
    <div>
      <label>{t('editProduct.id')} </label>
      <input defaultValue={product.id} ref={idRef} type="text" /> <br />
      <label>{t('editProduct.title')}</label>
      <input defaultValue={product.title} ref={titleRef} type="text" /> <br />
      <label>{t('editProduct.price')}</label>
      <input defaultValue={product.price} ref={priceRef} type="number" /> <br />
      <label>{t('editProduct.description')}</label>
      <input
        defaultValue={product.description}
        ref={descRef}
        type="text"
      />{' '}
      <br />
      <label>{t('editProduct.category')}</label>
      <input
        defaultValue={product.category}
        ref={categoryRef}
        type="text"
      />{' '}
      <br />
      <label>{t('editProduct.image')}</label>
      <input defaultValue={product.image} ref={imgRef} type="text" /> <br />
      <label>{t('editProduct.rating')}</label>
      <input
        defaultValue={product.rating.rate}
        ref={rateRef}
        type="text"
      />{' '}
      <br />
      <label>{t('editProduct.count')}</label>
      <input
        defaultValue={product.rating.count}
        ref={countRef}
        type="text"
      />{' '}
      <br />
      <button onClick={edit}>{t('editProduct.editButton')}</button>
    </div>
  );
}

export default EditProduct;
