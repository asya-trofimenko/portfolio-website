import { useTranslation } from 'react-i18next';
import Heading from '../ui/Heading';
import AnnotatedText from '../ui/AnnotatedText';

export default function AboutHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto flex w-full max-w-360 flex-col gap-6 px-4 md:px-8 lg:flex-row lg:px-12">
      <Heading size="display-2xl" as="h1" className="lg:flex-1">
        <AnnotatedText value={t('aboutPage.bio')} />
      </Heading>

      <div className="h-70 overflow-hidden rounded-2.5xl lg:h-112.5 lg:flex-1">
        <img
          src="/images/about/portrait.jpg"
          alt="Anastasiia Trofimenko"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}
