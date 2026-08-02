import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { careers } from '../../data/careers';
import { links } from '../../data/links';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Text from '../ui/Text';

export default function CareersSection() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-360 px-4 pb-16 md:px-8 lg:px-12 lg:pb-20">
      <div className="flex flex-col gap-6 lg:gap-8">
        <Heading size="display-xl">{t('aboutPage.career.title')}</Heading>

        <div className="flex flex-col gap-6">
          {careers.map((job, i) => (
            <Fragment key={job.roleKey}>
              {i > 0 && <div className="h-px w-full bg-gray-300" />}
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
                <div className="flex flex-col lg:w-108 lg:gap-1">
                  <Text size="body-xl" weight="medium">
                    {t(job.roleKey)}
                  </Text>
                  <Text size="body-xl" className="text-gray-600">
                    {t(job.periodKey)}
                  </Text>
                </div>
                <Text size="body-lg" className="lg:w-79.5">
                  {t(job.companyKey)}
                </Text>
                <Text size="body-lg" className="lg:w-136.5">
                  {t(job.descriptionKey)}
                </Text>
              </div>
            </Fragment>
          ))}
        </div>

        <div className="flex gap-3.5 lg:justify-end lg:gap-2">
          <Button
            as="a"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            hierarchy="secondary-color"
            size="xl"
            className="flex-1 lg:flex-none"
          >
            {t('aboutPage.career.viewLinkedin')}
          </Button>
          <Button
            as="a"
            href={links.cv}
            target="_blank"
            rel="noreferrer"
            hierarchy="primary"
            size="xl"
            className="flex-1 lg:flex-none"
          >
            {t('aboutPage.career.viewCv')}
          </Button>
        </div>
      </div>
    </section>
  );
}
