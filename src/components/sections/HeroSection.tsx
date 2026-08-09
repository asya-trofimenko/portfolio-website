import { useTranslation } from 'react-i18next';
import AnnotatedText from '../ui/AnnotatedText';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

const attributes = [
  { key: 'availability', emoji: '/images/emojis/green-circle.png' },
  { key: 'location', emoji: '/images/emojis/map-pin.png' },
  { key: 'workStyle', emoji: '/images/emojis/laptop.png' },
  { key: 'collaboration', emoji: '/images/emojis/handshake.png' },
] as const;

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-360 px-4 md:px-8 lg:px-12 flex flex-col gap-6 lg:gap-8">
      {/* The underline scribbles are drawn per word by `AnnotatedText`, so they
          stay with their words as the heading rewraps. */}
      <Heading size="display-2xl">
        <span className="lg:block">
          <AnnotatedText value={t('hero.greeting.line1')} />
        </span>
        <AnnotatedText value={t('hero.greeting.line2')} />
      </Heading>

      {/* Attribute cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {attributes.map(({ key, emoji }) => (
          <div key={key} className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <img
                src={emoji}
                alt=""
                aria-hidden="true"
                className="size-4 lg:size-6"
              />
              <Text size="body-xl" className="text-gray-600">
                {t(`hero.${key}.label`)}
              </Text>
            </div>
            <Text size="body-xl">{t(`hero.${key}.value`)}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}
