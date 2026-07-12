export const services: ServiceItem[] = [
  { titleKey: 'services.uiux.multiPage', category: 'uiux' },
  { titleKey: 'services.uiux.mobileApp', category: 'uiux' },
  { titleKey: 'services.uiux.saas', category: 'uiux' },
  { titleKey: 'services.marketing.landingPage', category: 'marketing' },
  { titleKey: 'services.marketing.presentations', category: 'marketing' },
  { titleKey: 'services.marketing.socialMedia', category: 'marketing' },
];

interface ServiceItem {
  titleKey: string;
  category: 'uiux' | 'marketing';
}

export type { ServiceItem };
