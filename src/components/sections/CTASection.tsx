import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { links } from '../../data/links';
import Heading from '../ui/Heading';

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-8 lg:px-12 lg:py-20">
      <img
        src="/images/cta-bg.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 mb-8 lg:gap-6">
          <div className="flex items-center gap-2.5 rounded-2.5xl bg-cyan-100/20 p-3.5">
            <img
              src="/images/emojis/globe.png"
              alt=""
              aria-hidden="true"
              className="size-6 lg:size-8"
            />
            <span className="whitespace-nowrap font-body text-lg leading-6 text-base-white lg:text-2xl lg:leading-8">
              {t('cta.remoteFriendly')}
            </span>
          </div>
          <div className="flex items-center gap-2.5 rounded-2.5xl bg-cyan-100/20 p-3.5">
            <img
              src="/images/emojis/eyes.png"
              alt=""
              aria-hidden="true"
              className="size-6 lg:size-8"
            />
            <span className="whitespace-nowrap font-body text-lg leading-6 text-base-white lg:text-2xl lg:leading-8">
              {t('cta.openForCollab')}
            </span>
          </div>
        </div>

        <Heading onDark size="display-xl" className="mb-4 text-center">
          {t('cta.title')}
        </Heading>

        <Button
          as="a"
          href={`mailto:${links.email}`}
          hierarchy="primary"
          size="xl"
          iconTrailing="arrow-up-right"
        >
          {t('cta.button')}
        </Button>
      </div>
    </section>
  );
}
