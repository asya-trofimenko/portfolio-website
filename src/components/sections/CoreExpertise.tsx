import { useTranslation } from 'react-i18next';
import { expertise } from '../../data/expertise';
import { tools } from '../../data/tools';
import ToolIcon from '../ui/ToolIcon';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import MarqueeCss from '../ui/MarqueeCss';
import { useIsMobile } from '../../hooks/useMediaQuery';

function ExpertiseCard({
  number,
  titleKey,
  descriptionKey,
}: Readonly<{ number: string; titleKey: string; descriptionKey: string }>) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 overflow-clip rounded-2.5xl border border-gray-100 bg-gray-50 p-4 lg:w-full lg:p-6">
      <p className="font-heading text-2xl font-medium leading-8 text-cyan-500 lg:text-5xl lg:leading-15">
        {number}
      </p>
      <div className="flex flex-col gap-4 text-base-dark">
        <Heading as="h3" size="display-sm">
          {t(titleKey)}
        </Heading>
        <Text size="body-lg">{t(descriptionKey)}</Text>
      </div>
    </div>
  );
}

function ToolItem({ tool }: Readonly<{ tool: (typeof tools)[number] }>) {
  const isMobile = useIsMobile();

  return (
    <div className="mx-2 flex shrink-0 items-center gap-2.5 rounded-2.5xl border border-gray-100 bg-gray-50 p-3 lg:mx-3 lg:p-4">
      <ToolIcon tool={tool.icon} size={isMobile ? 24 : 32} />
      <Text size="body-xl">{tool.name}</Text>
    </div>
  );
}

function ToolsMarquee() {
  const items = tools.map((tool) => <ToolItem key={tool.icon} tool={tool} />);

  return <MarqueeCss duration={20}>{items}</MarqueeCss>;
}

export default function CoreExpertise() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-16 lg:gap-20">
      {/* Core Expertise */}
      <div className="mx-auto flex items-center w-full max-w-360 flex-col gap-6 px-4 md:px-8 lg:gap-8 lg:px-12">
        <Heading size="display-xl">{t('expertise.title')}</Heading>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
          {expertise.map((item) => (
            <ExpertiseCard
              key={item.number}
              number={item.number}
              titleKey={item.titleKey}
              descriptionKey={item.descriptionKey}
            />
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="flex flex-col gap-6 lg:gap-8">
        <Heading size="display-xl" className="text-center text-base-dark">
          {t('tools.title')}
        </Heading>
        <ToolsMarquee />
      </div>
    </section>
  );
}
