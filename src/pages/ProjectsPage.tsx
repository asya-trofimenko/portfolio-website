import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects, type ProjectCategory } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import TestimonialsSection from '../components/sections/TestimonialsSection';

type Tab = 'all' | ProjectCategory;

const tabs: { key: Tab; labelKey: string }[] = [
  { key: 'all', labelKey: 'projects.tabs.all' },
  { key: 'uiux', labelKey: 'projects.tabs.uiux' },
  { key: 'marketing', labelKey: 'projects.tabs.marketing' },
];

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>('all');

  const filteredProjects = projects.filter((p) =>
    activeTab === 'all' ? true : p.categories.includes(activeTab),
  );

  return (
    <>
      {/* Hero header */}
      <section className="pb-6 lg:pb-20">
        <div className="mx-auto w-full max-w-360 px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-center gap-6 lg:gap-8">
            {/* Heading + description */}
            <div className="flex w-full max-w-6xl flex-col items-center gap-4 text-center lg:gap-6">
              <div className="relative inline-block">
                <img
                  src="/images/circle-scribble-1.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 w-44 max-w-none -translate-x-1/2 -translate-y-1/2 lg:w-82.75"
                />
                <Heading size="display-2xl" as="h1" className="relative">
                  {t('projects.title')}
                </Heading>
              </div>
              <Text size="body-xl" className="text-center">
                {t('projects.heroDescription')}
              </Text>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3.5">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-full px-4 py-2.5 font-body text-lg font-medium leading-7 transition-colors lg:px-6 lg:py-3.5 lg:text-2xl lg:leading-8 ${
                    activeTab === tab.key
                      ? 'bg-cyan-100 text-base-dark'
                      : 'bg-gray-100 text-base-dark'
                  }`}
                >
                  {t(tab.labelKey)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="mx-auto w-full max-w-360 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={t(project.titleKey)}
              description={t(project.descriptionKey)}
              image={project.image}
              badge={project.badgeKey ? t(project.badgeKey) : undefined}
              slug={project.slug}
            />
          ))}
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}
