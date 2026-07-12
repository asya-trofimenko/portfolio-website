import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';
import Heading from '../ui/Heading';

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-360 px-4 pb-16 md:px-8 lg:px-12 lg:pb-20">
      <div className="flex flex-col gap-6 lg:gap-8">
        <div className="flex items-center justify-between">
          <Heading size="display-xl">{t('projects.title')}</Heading>
          <Button
            as={Link}
            to="/projects"
            hierarchy="primary"
            size="xl"
            iconTrailing="arrow-right"
          >
            {t('projects.viewAll')}
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {projects.slice(0, 4).map((project) => (
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
      </div>
    </section>
  );
}
