import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'


function NavigationBar() {
  const { t } = useTranslation();

  return (
    <div>
      <Link to='/'>
        <button>{t("navbar.home")}</button>
      </Link>

      <Link to='/admin'>
        <button>{t("navbar.admin")}</button>
      </Link>

      <Link to='/cart'>
        <button>{t("navbar.cart")}</button>
      </Link>

      <br /><br />
      
    </div>
  )
}

export default NavigationBar
