import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLang = localStorage.getItem('lang') || 'en';

async function loadTranslations(lang: string) {
  const res = await fetch(`/locales/${lang}/translation.json`);
  return res.json();
}

const init = async () => {
  const [en, ua] = await Promise.all([
    loadTranslations('en'),
    loadTranslations('ua'),
  ]);

  await i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
});

export const i18nReady = init();
export default i18n;
