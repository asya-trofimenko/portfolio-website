import { useTranslation } from 'react-i18next';
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
      {/* Heading with decorative scribbles */}
      <div className="relative overflow-hidden">
        {/* Mobile scribbles */}
        <img
          src="/images/scribble-line-1.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none lg:hidden top-8.75 left-24.75 w-48.75 h-3.5"
        />
        <img
          src="/images/scribble-line-1.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none lg:hidden top-19.5 left-0 w-48.75 h-3.5"
        />
        {/* <img
          src="/images/scribble-line-2.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none lg:hidden top-53 left-45.75 w-35 h-3"
        />
        <img
          src="/images/scribble-line-2.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none lg:hidden top-63.75 left-0 w-full h-3"
        /> */}

        {/* Desktop scribbles */}
        <img
          src="/images/scribble-line-1.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none hidden lg:block top-18.25 left-53 w-190.25 h-5.5"
        />
        {/* <img
          src="/images/scribble-line-2.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none hidden lg:block top-64 left-90.5 w-239.75 h-4.5"
        /> */}

        <Heading size="display-2xl">
          <span className="lg:block">{t('hero.greeting.line1')}</span>
          {t('hero.greeting.line2')}
        </Heading>
      </div>

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
