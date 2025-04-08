import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  return (
    <div>
      <label>{t("login.email")}</label> <br />
      <input type="text" /> <br />
      <label>{t("login.password")}</label> <br />
      <input type="text" /> <br />
      <button>{t("login.loginButton")}</button>
    </div>
  )
}

export default Login
