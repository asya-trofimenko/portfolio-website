import { useState, useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import Text from './Text';
import SocialIcon from './SocialIcon';

export interface TestimonialCardProps {
  nameKey: string;
  textKey: string;
  role: string;
  avatar: string;
  linkedinUrl: string;
  expanded: boolean;
  onToggle: () => void;
}

export default function TestimonialCard({
  nameKey,
  textKey,
  role,
  avatar,
  linkedinUrl,
  expanded,
  onToggle,
}: Readonly<TestimonialCardProps>) {
  const { t, i18n } = useTranslation();
  const [expandedHeight, setExpandedHeight] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  const text = t(textKey);
  const collapsedHeight = 128;
  const isOverflowing = expandedHeight > collapsedHeight;

  useLayoutEffect(() => {
    if (textRef.current) {
      setExpandedHeight(textRef.current.scrollHeight);
    }
  }, [text, i18n.language]);

  return (
    <div className="flex w-full shrink-0 flex-col gap-6 rounded-2.5xl border border-gray-200 bg-base-white p-4 lg:w-222 lg:p-6">
      <div
        className="relative overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: expanded ? `${expandedHeight}px` : `${collapsedHeight}px`,
        }}
      >
        <div ref={textRef} className="flex flex-col gap-5 lg:gap-6">
          {text.split('\n\n').map((paragraph) => (
            <Text key={paragraph} size="body-xl">
              {paragraph}
            </Text>
          ))}
        </div>
        <div
          className={`pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-base-white to-transparent transition-opacity duration-300 lg:h-8 ${!isOverflowing || expanded ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>

      {isOverflowing && (
        <div className="h-8">
          <Button
            hierarchy="primary"
            size="sm"
            iconTrailing={expanded ? 'minus' : 'plus'}
            onClick={onToggle}
          >
            {expanded ? t('testimonials.collapse') : t('testimonials.readMore')}
          </Button>
        </div>
      )}

      <div className="mt-auto flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={t(nameKey)}
            className="size-10 rounded-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col">
            <Text size="body-xs" weight="medium">
              {t(nameKey)}
            </Text>
            <Text size="body-3xs" className="text-gray-600 opacity-80">
              {role}
            </Text>
          </div>
        </div>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <SocialIcon platform="linkedin" size={32} className="shrink-0" />
          <Text size="body-md" weight="medium" className="underline">
            {t('testimonials.readOnLinkedIn')}
          </Text>
        </a>
      </div>
    </div>
  );
}
