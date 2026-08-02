import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { links } from '../../data/links';
import CountryIcon from '../ui/CountryIcon';
import Icon from '../ui/Icon';
import NavItem from '../ui/NavItem';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  const currentCountry = i18n.language === 'en' ? 'GB' : 'UA';

  return (
    <header>
      <div className="flex items-center justify-between pt-8 pb-4 pl-4 pr-2 lg:p-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="size-6 shrink-0 rounded-full bg-gray-100 border border-gray-100 overflow-hidden lg:size-10">
            <img
              src="/images/avatar.jpg"
              alt="Avatar of Anastasiia Trofimenko"
              className="size-full object-cover"
            />
          </div>
          <span className="font-heading text-xl leading-7.5 font-medium text-base-dark whitespace-nowrap lg:text-[32px] lg:leading-10">
            Anastasiia Trofimenko
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavItem to="/projects">{t('nav.projects')}</NavItem>
          <NavItem to="/about">{t('nav.about')}</NavItem>
          <NavItem to={links.linkedin} external>
            {t('nav.linkedin')}
          </NavItem>
          <NavItem to={links.cv} external>
            {t('nav.cv')}
          </NavItem>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Switch language"
          >
            <CountryIcon country={currentCountry} size={32} />
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-lg p-2"
            aria-label="Switch language"
          >
            <CountryIcon country={currentCountry} size={24} />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
}
