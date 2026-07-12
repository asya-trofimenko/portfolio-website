import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggle = () => {
    const next = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(next);
  };

  return (
    <button onClick={toggle} className="text-[18px] leading-6 font-medium">
      {i18n.language === 'en' ? 'EN' : 'UA'}
    </button>
  );
}
