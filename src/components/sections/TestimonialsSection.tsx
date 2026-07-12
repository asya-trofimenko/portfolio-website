import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from 'react-i18next';
import { testimonials } from '../../data/testimonials';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import TestimonialCard from '../ui/TestimonialCard';

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    watchDrag: false,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      if (newIndex !== selectedIndex) setExpandedKey(null);
      setSelectedIndex(newIndex);
    };
    update();
    emblaApi.on('select', update);
    emblaApi.on('reInit', update);
    return () => {
      emblaApi.off('select', update);
      emblaApi.off('reInit', update);
    };
  }, [emblaApi, selectedIndex]);

  const isFirst = selectedIndex === 0;
  const isLast = selectedIndex === testimonials.length - 1;

  const goToPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const goToNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 overflow-hidden lg:py-20">
      <div className="mx-auto w-full max-w-360 px-4 md:px-8 lg:px-12">
        <div className="flex items-start justify-between lg:items-center">
          <Heading size="display-xl" className="lg:max-w-6/10">
            {t('testimonials.title')}
          </Heading>
          <div className="hidden gap-2 lg:flex">
            <Button
              hierarchy="secondary-color"
              size="xl"
              iconLeading="arrow-left"
              onClick={goToPrev}
              disabled={isFirst}
            >
              {t('testimonials.prev')}
            </Button>
            <Button
              hierarchy="primary"
              size="xl"
              iconTrailing="arrow-right"
              onClick={goToNext}
              disabled={isLast}
            >
              {t('testimonials.next')}
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={emblaRef}
        className="mt-6 overflow-hidden pl-4 md:pl-8 lg:mt-8 lg:pl-20"
      >
        <div className="flex gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.nameKey}
              nameKey={testimonial.nameKey}
              textKey={testimonial.textKey}
              role={testimonial.role}
              avatar={testimonial.avatar}
              linkedinUrl={testimonial.linkedinUrl}
              expanded={expandedKey === testimonial.nameKey}
              onToggle={() =>
                setExpandedKey((prev) =>
                  prev === testimonial.nameKey ? null : testimonial.nameKey,
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Mobile nav buttons */}
      <div className="mt-6 flex justify-center gap-2 lg:hidden">
        <Button
          hierarchy="secondary-color"
          size="xl"
          iconLeading="arrow-left"
          onClick={goToPrev}
          disabled={isFirst}
        >
          {t('testimonials.prev')}
        </Button>
        <Button
          hierarchy="primary"
          size="xl"
          iconTrailing="arrow-right"
          onClick={goToNext}
          disabled={isLast}
        >
          {t('testimonials.next')}
        </Button>
      </div>
    </section>
  );
}
