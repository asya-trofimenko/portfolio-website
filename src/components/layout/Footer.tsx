import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { links } from '../../data/links';
import SocialIcon from '../ui/SocialIcon';
import Button from '../ui/Button';
import Text from '../ui/Text';

const socials = [
  { platform: 'linkedin' as const, label: 'LinkedIn', href: links.linkedin },
  { platform: 'telegram' as const, label: 'Telegram', href: links.telegram },
  { platform: 'behance' as const, label: 'Behance', href: links.behance },
];

function Marquee() {
  const { t } = useTranslation();
  const text = t('footer.getInTouch');

  return (
    <div className="w-full">
      {/* Scrolling marquee: shown below 1410px */}
      <div className="overflow-x-clip whitespace-nowrap min-[1410px]:hidden">
        <motion.div
          className="inline-flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-heading font-medium text-cyan-100 text-[150px] leading-none mx-8"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Desktop: static text, shown at 1410px+ */}
      <p className="hidden min-[1410px]:block font-heading font-medium text-cyan-100 text-[250px] leading-50 text-center">
        {text}
      </p>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-base-blue text-base-white flex flex-col items-center gap-8 pt-8">
      {/* Marquee */}
      <Marquee />

      {/* Content */}
      <div className="mx-auto w-full max-w-360 px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        {/* Left: contact info + CV */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-1">
            <Text size="body-xl" className="text-gray-400">
              {t('footer.letsTalk')}
            </Text>
            <a
              href={`mailto:${links.email}`}
              className="font-body text-2xl leading-8 text-base-white hover:text-cyan-100 transition-colors lg:text-[32px] lg:leading-10 lg:font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {links.email}
            </a>
          </div>

          <Button
            as="a"
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            hierarchy="secondary-color"
            size="xl"
            iconTrailing="arrow-up-right"
            className="self-start"
          >
            {t('footer.viewCV')}
          </Button>
        </div>

        {/* Right: nav + social */}
        <div className="flex gap-4 lg:gap-6">
          {/* Navigation */}
          <nav className="flex flex-col gap-3 lg:gap-6 w-42.75 lg:w-51">
            <Link
              to="/"
              className="font-body text-xl leading-7.5 text-gray-200 hover:text-base-white transition-colors lg:text-2xl lg:leading-8"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/projects"
              className="font-body text-xl leading-7.5 text-gray-200 hover:text-base-white transition-colors lg:text-2xl lg:leading-8"
            >
              {t('nav.projects')}
            </Link>
            <Link
              to="/about"
              className="font-body text-xl leading-7.5 text-gray-200 hover:text-base-white transition-colors lg:text-2xl lg:leading-8"
            >
              {t('nav.about')}
            </Link>
          </nav>

          {/* Social media */}
          <div className="flex flex-col gap-3 lg:gap-6 w-42.75 lg:w-51">
            {socials.map(({ platform, label, href }) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-xl leading-7.5 text-gray-200 hover:text-base-white transition-colors lg:text-2xl lg:leading-8"
              >
                <SocialIcon
                  platform={platform}
                  size={24}
                  className="lg:size-8 shrink-0"
                />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer line */}
      <div className="w-full bg-cyan-100 text-base-dark font-body text-sm leading-5 p-4 lg:text-lg lg:leading-6 lg:px-12 lg:py-3.5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1">
        <p>{t('footer.copyright')}</p>
        <p>{t('footer.credits')}</p>
      </div>
    </footer>
  );
}
