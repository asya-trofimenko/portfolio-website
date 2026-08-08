import { useTranslation } from 'react-i18next';
import Heading from '../ui/Heading';
import AnnotatedText from '../ui/AnnotatedText';

export default function AboutHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-360 px-4 md:px-8 lg:px-12">
      <Heading size="display-2xl" as="h1" className="text-center">
        <AnnotatedText value={t('aboutPage.bio')} />
      </Heading>
    </section>
  );
}
