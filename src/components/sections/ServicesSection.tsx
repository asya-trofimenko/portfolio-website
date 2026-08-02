import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { services } from '../../data/services';
import AutoplayVideo from '../ui/AutoplayVideo';
import TabButton from '../ui/TabButton';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

type Tab = 'uiux' | 'marketing';

const tabConfig: Record<Tab, { video: string; poster: string }> = {
  uiux: {
    video: '/videos/services-ui-ux-design.mp4',
    poster: '/videos/posters/services-ui-ux-design.jpg',
  },
  marketing: {
    video: '/videos/services-marketing-design.mp4',
    poster: '/videos/posters/services-marketing-design.jpg',
  },
};

export default function ServicesSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>('uiux');
  const prefetched = useRef(new Set<string>());

  // Reaching for a tab is a strong hint — warm its clip before the click lands.
  const prefetchTab = (tab: Tab) => {
    const { video } = tabConfig[tab];
    if (prefetched.current.has(video)) return;
    prefetched.current.add(video);

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = video;
    document.head.append(link);
  };

  const filtered = services.filter((s) => s.category === activeTab);

  return (
    <section className="mx-auto w-full max-w-360 px-4 py-16 md:px-8 lg:px-12 lg:py-20">
      <div className="flex flex-col items-center gap-6 lg:gap-8">
        <Heading size="display-xl">{t('services.title')}</Heading>

        <div className="flex gap-3.5">
          <TabButton
            active={activeTab === 'uiux'}
            onClick={() => setActiveTab('uiux')}
            onMouseEnter={() => prefetchTab('uiux')}
            onFocus={() => prefetchTab('uiux')}
          >
            {t('services.tabs.uiux')}
          </TabButton>
          <TabButton
            active={activeTab === 'marketing'}
            onClick={() => setActiveTab('marketing')}
            onMouseEnter={() => prefetchTab('marketing')}
            onFocus={() => prefetchTab('marketing')}
          >
            {t('services.tabs.marketing')}
          </TabButton>
        </div>

        <div className="flex w-full flex-col gap-6 overflow-hidden rounded-2.5xl bg-gray-50 p-6 shadow-lg lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="flex flex-col gap-5.5 lg:w-1/2">
            {filtered.map((service) => (
              <div
                key={service.titleKey}
                className="flex flex-col gap-2 text-base-dark"
              >
                <Heading as="h3" size="display-sm">
                  {t(`${service.titleKey}.title`)}
                </Heading>
                <Text size="body-lg">
                  {t(`${service.titleKey}.description`)}
                </Text>
              </div>
            ))}
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-2.5xl lg:w-164">
            <AutoplayVideo
              src={tabConfig[activeTab].video}
              poster={tabConfig[activeTab].poster}
              label={t(`services.tabs.${activeTab}`)}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
