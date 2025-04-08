import { useTranslation } from "react-i18next"

function Signup() {
  const { t } = useTranslation();
  
  return (
    <div>
      <label>{t("signup.email")}</label> <br />
      <input type="text" /> <br />
      <label>{t("signup.password")}</label> <br />
      <input type="text" /> <br />
      <button>{t("signup.registerButton")}</button>
    </div>
  )
}

export default Signup
