import { useEffect, useMemo, useRef, useState } from 'react';
import {
  motion,
  transform,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { coreValues, type CoreValue } from '../../data/coreValues';
import useMediaQuery, { useReducedMotion } from '../../hooks/useMediaQuery';
import Heading from '../ui/Heading';
import StepBlockCard from '../ui/StepBlockCard';

// StepBlockCard is lg:h-60 (240px tall); each card slides in over a full card height of scroll.
const CARD_HEIGHT_PX = 240;
const SCROLL_PER_CARD_PX = CARD_HEIGHT_PX;

function useViewportHeight() {
  const [height, setHeight] = useState(() => globalThis.innerHeight);

  useEffect(() => {
    const onResize = () => setHeight(globalThis.innerHeight);
    globalThis.addEventListener('resize', onResize);
    return () => globalThis.removeEventListener('resize', onResize);
  }, []);

  return height;
}

interface CoreValueCardProps {
  value: CoreValue;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function CoreValueCard({
  value,
  index,
  total,
  progress,
}: Readonly<CoreValueCardProps>) {
  const { t } = useTranslation();

  // Every card rides up from just below the frame and comes to rest on top of
  // the previous one, so card `index` travels over [(index - 1), index] * step.
  // The first card is already in place when the section pins.
  const step = 1 / (total - 1);
  const inputRange =
    index === 0 ? [0, step] : [(index - 1) * step, index * step];
  const outputRange = index === 0 ? [0, 0] : [CARD_HEIGHT_PX, 0];

  // The callback form keeps the mapping in JS. The array form lets Motion hand
  // the value off to a native scroll timeline, which ignores the `offset` below
  // and drives every card off raw document progress instead.
  const y = useTransform(progress, (v) => transform(v, inputRange, outputRange));

  return (
    <motion.div className="absolute inset-x-0 top-0" style={{ y }}>
      <StepBlockCard
        icon={value.icon}
        title={t(value.titleKey)}
        description={t(value.descriptionKey)}
      />
    </motion.div>
  );
}

function ScrollingValues({ title }: Readonly<{ title: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  const viewportHeight = useViewportHeight();

  // The sticky child is only as tall as the row, so it adds no empty space
  // above or below the section — `top` alone parks it mid-screen while pinned.
  const stickyTop = Math.max(
    0,
    Math.round(viewportHeight / 2 - CARD_HEIGHT_PX / 2),
  );

  // Anchoring the offsets to the pin position makes progress 0 land exactly
  // where the row sticks and progress 1 exactly where it lets go.
  const offset = useMemo(
    (): [`start ${number}px`, `end ${number}px`] => [
      `start ${stickyTop}px`,
      `end ${stickyTop + CARD_HEIGHT_PX}px`,
    ],
    [stickyTop],
  );

  const { scrollYProgress } = useScroll({ target: ref, offset });

  const scrollLength = (coreValues.length - 1) * SCROLL_PER_CARD_PX;

  return (
    <div
      ref={ref}
      className="relative"
      style={{ height: CARD_HEIGHT_PX + scrollLength }}
    >
      <div className="sticky h-60" style={{ top: stickyTop }}>
        <div className="flex h-full w-full flex-row gap-6">
          <Heading size="display-xl" className="flex-1">
            {title}
          </Heading>

          <div className="relative h-60 flex-1 overflow-hidden rounded-[20px]">
            {coreValues.map((value, i) => (
              <CoreValueCard
                key={value.icon}
                value={value}
                index={i}
                total={coreValues.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StaticValues({ title }: Readonly<{ title: string }>) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
      <Heading size="display-xl" className="lg:flex-1">
        {title}
      </Heading>

      <div className="flex flex-1 flex-col gap-4 lg:gap-6">
        {coreValues.map((value) => (
          <StepBlockCard
            key={value.icon}
            icon={value.icon}
            title={t(value.titleKey)}
            description={t(value.descriptionKey)}
          />
        ))}
      </div>
    </div>
  );
}

export default function CoreValuesSection() {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = useReducedMotion();

  const title = t('aboutPage.coreValues.title');

  return (
    <section className="mx-auto w-full max-w-360 px-4 pb-16 md:px-8 lg:px-12 lg:pb-20">
      {isDesktop && !prefersReducedMotion ? (
        <ScrollingValues title={title} />
      ) : (
        <StaticValues title={title} />
      )}
    </section>
  );
}
