import { Navigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  projectDetails,
  type ProjectBlock,
  type ProjectDetail,
  type PhotoRow,
} from '../data/projectDetails';
import { projects, type Project } from '../data/projects';
import ProjectTestimonialsSection from '../components/sections/ProjectTestimonialsSection';
import AutoplayVideo from '../components/ui/AutoplayVideo';
import ProjectCard from '../components/ui/ProjectCard';
import Heading from '../components/ui/Heading';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';

// ─── Shared ─────────────────────────────────────────────────────────────────

const sharedMediaClass = 'size-full object-cover';

// ─── Content blocks ──────────────────────────────────────────────────────────

function rowKey(row: PhotoRow): string {
  if (row.type === 'single') return `single-${row.image}`;
  return `duo-${row.images[0]}`;
}

interface PhotoWrapperBlockProps {
  block: Extract<ProjectBlock, { type: 'photo-wrapper' }>;
}

function PhotoWrapperBlock({ block }: Readonly<PhotoWrapperBlockProps>) {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      {block.rows.map((row) => {
        if (row.type === 'single') {
          return (
            <div
              key={rowKey(row)}
              className="aspect-3/2 w-full overflow-hidden rounded-2xl bg-gray-100 lg:aspect-auto lg:h-200"
            >
              <img src={row.image} alt="" className={sharedMediaClass} />
            </div>
          );
        }
        if (row.type === 'duo') {
          return (
            <div key={rowKey(row)} className="flex gap-4 lg:gap-6">
              {row.images.map((img) => (
                <div
                  key={img}
                  className="aspect-square flex-1 overflow-hidden rounded-2xl bg-gray-100"
                >
                  <img src={img} alt="" className={sharedMediaClass} />
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

interface OverviewBlockProps {
  block: Extract<ProjectBlock, { type: 'overview' }>;
}

function OverviewBlock({ block }: Readonly<OverviewBlockProps>) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mb-6 lg:mb-10 lg:mx-auto lg:max-w-222">
        <Heading size="display-xl" as="h2" className="mb-3 lg:mb-5">
          {t('projectDetail.labels.overview')}
        </Heading>
        <Text size="body-lg" className="opacity-80">
          {t(block.textKey)}
        </Text>
      </div>
      <div className="aspect-3/2 w-full overflow-hidden rounded-2xl bg-gray-100 lg:aspect-auto lg:h-200">
        <img src={block.image} alt="" className={sharedMediaClass} />
      </div>
    </div>
  );
}

interface ChallengeBlockProps {
  block: Extract<ProjectBlock, { type: 'challenge' }>;
}

function ChallengeBlock({ block }: Readonly<ChallengeBlockProps>) {
  const { t } = useTranslation();
  return (
    <div className="lg:mx-auto lg:max-w-222">
      <Heading size="display-xl" as="h2" className="mb-3 lg:mb-5">
        {t('projectDetail.labels.challenge')}
      </Heading>
      <div className="flex flex-col gap-2 lg:gap-3.5">
        {block.itemKeys.map((key) => (
          <div key={key} className="flex items-start gap-2">
            <div className="mt-2.25 size-1 shrink-0 rounded-full bg-cyan-300 lg:mt-3 lg:size-2" />
            <Text size="body-lg" className="opacity-80">
              {t(key)}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}

interface TextBlockProps {
  block: Extract<ProjectBlock, { type: 'text-block' }>;
}

function TextBlock({ block }: Readonly<TextBlockProps>) {
  const { t } = useTranslation();
  return (
    <div className="lg:mx-auto lg:max-w-222">
      <Text size="body-lg" weight="medium" className="mb-2 lg:mb-3.5">
        {t(block.titleKey)}
      </Text>
      <Text size="body-lg" className="opacity-80">
        {t(block.textKey)}
      </Text>
    </div>
  );
}

interface ResultBlockProps {
  block: Extract<ProjectBlock, { type: 'result' }>;
}

interface SolutionBlockProps {
  block: Extract<ProjectBlock, { type: 'solution' }>;
}

function SolutionBlock({ block }: Readonly<SolutionBlockProps>) {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:mx-auto lg:max-w-222">
      <Heading size="display-xl" as="h2" className="mb-3 lg:mb-5">
        {t('projectDetail.labels.solution')}
      </Heading>
      <Text size="body-lg" weight="medium" className="mb-2 lg:mb-3.5">
        {t(block.titleKey)}
      </Text>
      <Text size="body-lg" className="opacity-80">
        {t(block.textKey)}
      </Text>
    </div>
  );
}

function ResultBlock({ block }: Readonly<ResultBlockProps>) {
  const { t } = useTranslation();
  return (
    <div className="lg:mx-auto lg:max-w-222">
      <Heading size="display-xl" as="h2" className="mb-3 lg:mb-5">
        {t('projectDetail.labels.result')}
      </Heading>
      <Text
        size="body-lg"
        className={`opacity-80${(block.fullCaseUrl ?? block.liveWebsiteUrl) ? ' mb-6' : ''}`}
      >
        {t(block.textKey)}
      </Text>
      {(block.fullCaseUrl ?? block.liveWebsiteUrl) && (
        <div className="flex gap-3.5">
          {block.fullCaseUrl && (
            <Button
              as="a"
              href={block.fullCaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              hierarchy="secondary-color"
              size="xl"
              iconTrailing="arrow-up-right"
            >
              {t('projectDetail.buttons.fullCase')}
            </Button>
          )}
          {block.liveWebsiteUrl && (
            <Button
              as="a"
              href={block.liveWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              hierarchy="primary"
              size="xl"
              iconTrailing="arrow-up-right"
            >
              {t('projectDetail.buttons.liveWebsite')}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Block renderer ──────────────────────────────────────────────────────────

function blockKey(block: ProjectBlock): string {
  switch (block.type) {
    case 'overview':
      return `overview-${block.textKey}`;
    case 'challenge':
      return `challenge-${block.itemKeys[0] ?? ''}`;
    case 'photo-wrapper':
      return `photo-collage-${block.rows[0] ? rowKey(block.rows[0]) : ''}`;
    case 'solution':
      return `solution-${block.titleKey}`;
    case 'text-block':
      return `text-block-${block.titleKey}`;
    case 'result':
      return `result-${block.textKey}`;
  }
}

interface BlockRendererProps {
  block: ProjectBlock;
}

function BlockRenderer({ block }: Readonly<BlockRendererProps>) {
  if (block.type === 'photo-wrapper') {
    return <PhotoWrapperBlock block={block} />;
  }
  if (block.type === 'overview') {
    return <OverviewBlock block={block} />;
  }
  if (block.type === 'challenge') {
    return <ChallengeBlock block={block} />;
  }
  if (block.type === 'solution') {
    return <SolutionBlock block={block} />;
  }
  if (block.type === 'text-block') {
    return <TextBlock block={block} />;
  }
  if (block.type === 'result') {
    return <ResultBlock block={block} />;
  }
  // Exhaustive check — should never reach here
  return null;
}

// ─── Hero section ────────────────────────────────────────────────────────────

interface HeroSectionProps {
  detail: ProjectDetail;
  project: Project;
}

function HeroSection({ detail, project }: Readonly<HeroSectionProps>) {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-360 px-4 pb-8 lg:px-12 lg:pb-20">
      <div className="flex flex-col gap-6 lg:gap-20">
        {/* Text content */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Title + tagline */}
          <div className="flex flex-col gap-1 lg:gap-3.5">
            <Heading size="display-2xl" as="h1">
              {t(project.titleKey)}
            </Heading>
            <p className="font-body text-xl leading-7.5 text-gray-600 lg:text-[32px] lg:leading-10 lg:font-medium">
              {t(detail.taglineKey)}
            </p>
          </div>

          {/* Industry + Service + Buttons row */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Industry + Service */}
            <div className="flex gap-4 lg:gap-6">
              <div className="flex flex-1 flex-col gap-1 lg:w-79.5 lg:flex-none">
                <Text size="body-xl" className="text-gray-600">
                  {t('projectDetail.labels.industry')}
                </Text>
                <span className="inline-flex w-fit items-center rounded-xl border border-gray-100 bg-gray-50 px-3 py-1 font-body text-lg font-medium leading-6 text-base-dark">
                  {t(detail.industryKey)}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1 lg:w-79.5 lg:flex-none">
                <Text size="body-xl" className="text-gray-600">
                  {t('projectDetail.labels.service')}
                </Text>
                <Text size="body-xl">{t(detail.serviceKey)}</Text>
              </div>
            </div>

            {/* Action buttons */}
            {(detail.fullCaseUrl ?? detail.liveWebsiteUrl) && (
              <div className="flex gap-3.5">
                {detail.fullCaseUrl && (
                  <Button
                    as="a"
                    href={detail.fullCaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    hierarchy="secondary-color"
                    size="xl"
                    iconTrailing="arrow-up-right"
                    className="flex-1 lg:flex-none"
                  >
                    {t('projectDetail.buttons.fullCase')}
                  </Button>
                )}
                {detail.liveWebsiteUrl && (
                  <Button
                    as="a"
                    href={detail.liveWebsiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    hierarchy="primary"
                    size="xl"
                    iconTrailing="arrow-up-right"
                    className="flex-1 lg:flex-none"
                  >
                    {t('projectDetail.buttons.liveWebsite')}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Hero video */}
        <div className="aspect-3/2 w-full overflow-hidden rounded-2xl bg-gray-100">
          <AutoplayVideo
            src={detail.heroVideo}
            poster={detail.heroPoster}
            label={t(project.titleKey)}
            eager
            className={sharedMediaClass}
          />
        </div>
      </div>
    </section>
  );
}

// ─── More Projects section ────────────────────────────────────────────────────

interface MoreProjectsSectionProps {
  moreProjects: Project[];
}

function MoreProjectsSection({
  moreProjects,
}: Readonly<MoreProjectsSectionProps>) {
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-360 px-4 pb-16 lg:px-12 lg:pb-20">
      <div className="flex flex-col gap-6">
        <Heading size="display-xl" as="h2">
          {t('projectDetail.labels.moreProjects')}
        </Heading>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {moreProjects.map((p) => (
            <ProjectCard
              key={p.slug}
              title={t(p.titleKey)}
              description={t(p.descriptionKey)}
              image={p.image}
              badge={p.badgeKey ? t(p.badgeKey) : undefined}
              slug={p.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const detail = projectDetails.find((d) => d.slug === slug);
  const project = projects.find((p) => p.slug === slug);

  const [moreProjects] = useState<Project[]>(() =>
    projects
      .filter((p) => p.slug !== slug)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2),
  );

  if (!detail || !project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <HeroSection detail={detail} project={project} />

      <div className="mx-auto flex w-full max-w-360 flex-col gap-8 px-4 pb-10 lg:gap-10 lg:px-12 lg:pb-20">
        {detail.blocks.map((block) => (
          <BlockRenderer key={blockKey(block)} block={block} />
        ))}
      </div>

      <ProjectTestimonialsSection slug={slug ?? ''} />
      <MoreProjectsSection moreProjects={moreProjects} />
    </>
  );
}
