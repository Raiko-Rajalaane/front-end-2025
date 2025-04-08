import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('notFound.title')}</h1>
      <Link to="/">{t('notFound.link')}</Link>
    </div>
  );
}

export default NotFound;
