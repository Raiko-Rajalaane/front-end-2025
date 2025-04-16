import { useRef, useState } from 'react';
import categoriesFromFile from '../../data/categories.json'


function MaintainCategories() {
  const [categories, setCategories] = useState(categoriesFromFile.slice());
  const categoryRef = useRef();

  const saveCategory = () => {
    const newCategory = {name: categoryRef.current.value};
    categoriesFromFile.push(newCategory);
    setCategories(categoriesFromFile.slice());
  };

  const deleteCategory = (index) => {
    categoriesFromFile.splice(index, 1);
    setCategories(categoriesFromFile.slice());
  };


  return (
    <div>
      <label>Category</label>
      <input ref={categoryRef} type="" />
      <button onClick={saveCategory}>Add</button>
      {categories.map((category, index) =>
        <div key={category.name}>
          {category.name}
          <button onClick={() => deleteCategory(index)}>X</button>
        </div>)}
    </div>
  )
}

export default MaintainCategories
