import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { links } from '../../data/links';
import Button from '../ui/Button';
import SocialIcon from '../ui/SocialIcon';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: Readonly<MobileMenuProps>) {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.right = '0';
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 top-18 z-40 flex flex-col bg-white lg:hidden">
      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto px-4 pt-4">
        <div className="flex flex-col gap-4">
          <Link
            to="/projects"
            onClick={onClose}
            className="font-body text-xl leading-7.5 text-base-dark"
          >
            {t('nav.projects')}
          </Link>
          <div className="h-px bg-gray-200" />

          {/* <Link
            to="/about"
            onClick={onClose}
            className="font-body text-xl leading-7.5 text-base-dark"
          >
            {t('nav.about')}
          </Link>
          <div className="h-px bg-gray-200" /> */}

          <a
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xl leading-7.5 text-base-dark"
          >
            {t('nav.cv')}
          </a>
          <div className="h-px bg-gray-200" />

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-xl leading-7.5 text-base-dark"
          >
            <SocialIcon platform="linkedin" size={24} />
            {t('nav.linkedin')}
          </a>
          <div className="h-px bg-gray-200" />

          <a
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-xl leading-7.5 text-base-dark"
          >
            <SocialIcon platform="telegram" size={24} />
            Telegram
          </a>
          <div className="h-px bg-gray-200" />

          <a
            href={links.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-xl leading-7.5 text-base-dark"
          >
            <SocialIcon platform="behance" size={24} />
            Behance
          </a>
        </div>
      </nav>

      {/* Bottom CTA */}
      <div className="px-4 pb-8">
        <Button
          as="a"
          href={`mailto:${links.email}`}
          hierarchy="primary"
          size="lg"
          iconTrailing="arrow-up-right"
          className="w-full justify-center"
        >
          {t('cta.button')}
        </Button>
      </div>
    </div>
  );
}
