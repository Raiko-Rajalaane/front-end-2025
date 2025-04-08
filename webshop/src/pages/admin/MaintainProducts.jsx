import { useState } from "react"
import { toast } from "react-toastify";
import productsFromFile from "../../data/products.json"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const { t } = useTranslation();

  const remove = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
    toast.success(t("maintainProducts.toastRemoved"))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{t("maintainProducts.headerId")}</th>
            <th>{t("maintainProducts.headerTitle")}</th>
            <th>{t("maintainProducts.headerPrice")}</th>
            <th>{t("maintainProducts.headerDescription")}</th>
            <th>{t("maintainProducts.headerCategory")}</th>
            <th>{t("maintainProducts.headerImage")}</th>
            <th>{t("maintainProducts.headerRating")}</th>
            <th>{t("maintainProducts.headerEdit")}</th>
            <th>{t("maintainProducts.headerDelete")}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) =>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td><img className="table-image" src={product.image} alt="" /></td>
              <td>{product.rating.rate} ★ ({product.rating.count})</td>
              <td><Link to={"/admin/edit-product/" + index}><button>{t("maintainProducts.buttonEdit")}</button></Link></td>
              <td><button onClick={() => remove(index)}>{t("maintainProducts.buttonDelete")}</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MaintainProducts
