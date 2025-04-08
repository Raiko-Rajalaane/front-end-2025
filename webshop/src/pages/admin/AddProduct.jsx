import { useRef } from 'react';
import productsFromFile from '../../data/products.json';
import { useTranslation } from 'react-i18next';

function AddProduct() {
  const { t } = useTranslation();

  const titleRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();
  const imgRef = useRef();
  const rateRef = useRef();
  const countRef = useRef();

  const addNew = () => {
    productsFromFile.push({
      id: productsFromFile.length + 1,
      title: titleRef.current.value,
      price: priceRef.current.value,
      description: descRef.current.value,
      category: categoryRef.current.value,
      image: imgRef.current.value,
      rating: {
        rate: rateRef.current.value,
        count: countRef.current.value,
      },
    });
  };

  return (
    <div>
      <label>{t('addProduct.title')}</label>
      <input ref={titleRef} type="text" /> <br />
      <label>{t('addProduct.price')}</label>
      <input ref={priceRef} type="number" /> <br />
      <label>{t('addProduct.description')}</label>
      <input ref={descRef} type="text" /> <br />
      <label>{t('addProduct.category')}</label>
      <input ref={categoryRef} type="text" /> <br />
      <label>{t('addProduct.image')}</label>
      <input ref={imgRef} type="text" /> <br />
      <label>{t('addProduct.rating')}</label>
      <input ref={rateRef} type="number" /> <br />
      <label>{t('addProduct.count')}</label>
      <input ref={countRef} type="number" /> <br />
      <button onClick={addNew}>{t('addProduct.addButton')}</button>
    </div>
  );
}

export default AddProduct;
