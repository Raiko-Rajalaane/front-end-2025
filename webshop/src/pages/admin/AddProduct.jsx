import { useRef } from 'react';
import productsFromFile from '../../data/products.json';
import categoriesFromFile from '../../data/categories.json';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { invalidField } from '../../util/validations';

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
    // if (titleRef.current.value === '') {
    //   toast.error('Title is missing');
    //   return;
    // }
    // if (priceRef.current.value === '') {
    //   toast.error('Price is missing');
    //   return;
    // }
    // if (priceRef.current.value < 0) {
    //   toast.error('Price cannot be negative');
    //   return;
    // }

    if (invalidField(titleRef.current.value, priceRef.current.value) === true) {
      return;
    }

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
    toast.success('Toode lisatud!');
    titleRef.current.value = '';
    priceRef.current.value = '';
    descRef.current.value = '';
    categoryRef.current.value = '';
    imgRef.current.value = '';
    rateRef.current.value = '';
    countRef.current.value = '';
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
      {/* <input ref={categoryRef} type="text" /> <br /> */}
      <select ref={categoryRef}>
        {categoriesFromFile.map((category) => (
          <option key={category.name}>{category.name}</option>
        ))}
      </select>{' '}
      <br />
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
