import { useTranslation } from 'react-i18next';
import { polaroids, type Polaroid } from '../../data/polaroids';
import AnnotatedText from '../ui/AnnotatedText';
import MarqueeCss from '../ui/MarqueeCss';
import Text from '../ui/Text';

function PolaroidCard({ polaroid }: Readonly<{ polaroid: Polaroid }>) {
  return (
    <div
      className="mr-2.25 shrink-0 lg:mr-3.25"
      style={{
        transform: `translateY(${polaroid.offset}%) rotate(${polaroid.rotate}deg)`,
      }}
    >
      <div className="h-65 w-54.5 overflow-hidden rounded-lg border border-gray-300 bg-base-white p-2.75 lg:h-97.5 lg:w-79.5 lg:p-3.75">
        <img
          src={polaroid.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-52 w-full rounded-sm object-cover lg:h-76.5"
        />
      </div>
    </div>
  );
}

export default function AboutBioSection() {
  const { t } = useTranslation();

  return (
    <section className="overflow-x-clip pt-16 lg:pt-20">
      <div className="mx-auto w-full max-w-360 px-4 md:px-8 lg:px-12">
        {/* Figma spaces these lines wider than the display-lg default leading. */}
        <Text
          size="body-3xl"
          weight="medium"
          className="leading-12 lg:leading-19"
        >
          <AnnotatedText value={t('aboutPage.bioExtended')} />
        </Text>
      </div>

      <div className="mx-auto w-full max-w-360 py-16 lg:py-20">
        <MarqueeCss duration={40}>
          {polaroids.map((polaroid) => (
            <PolaroidCard key={polaroid.src} polaroid={polaroid} />
          ))}
        </MarqueeCss>
      </div>
    </section>
  );
}
