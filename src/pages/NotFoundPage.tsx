import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="p-12 text-center">
      <h1 className="font-heading text-[48px] leading-[60px] font-medium mb-4">
        404
      </h1>
      <p className="text-gray-600 text-[18px] mb-8">{t('pages.notFound')}</p>
      <Link to="/" className="text-cyan-500 underline">
        {t('pages.home')}
      </Link>
    </div>
  );
}
