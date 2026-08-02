import { useTranslation } from 'react-i18next';
import { coreValues } from '../../data/coreValues';
import { useReducedMotion } from '../../hooks/useMediaQuery';
import Heading from '../ui/Heading';
import StepBlockCard from '../ui/StepBlockCard';

// The cards pin at the same offset from the top of the viewport, so each one
// slides up over the previous and covers it. The header is not fixed, so this
// only has to clear the top edge of the screen.
const STICKY = 'lg:sticky lg:top-12';

export default function CoreValuesSection() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const sticky = prefersReducedMotion ? '' : STICKY;

  return (
    <section className="mx-auto w-full max-w-360 px-4 pb-16 md:px-8 lg:px-12 lg:pb-20">
      <div className="flex flex-col gap-6 lg:flex-row">
        <Heading
          size="display-xl"
          className={`lg:flex-1 lg:self-start ${sticky}`}
        >
          {t('aboutPage.coreValues.title')}
        </Heading>

        <div className="flex flex-1 flex-col gap-4 lg:gap-6">
          {coreValues.map((value) => (
            <div key={value.icon} className={sticky}>
              <StepBlockCard
                icon={value.icon}
                title={t(value.titleKey)}
                description={t(value.descriptionKey)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
