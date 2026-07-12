import { Link } from 'react-router-dom';
import Heading from './Heading';
import Text from './Text';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
  slug: string;
  disabled?: boolean;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  badge,
  slug,
  disabled = false,
  className = '',
}: Readonly<ProjectCardProps>) {
  if (disabled) {
    return (
      <div
        className={`
          group relative flex flex-col overflow-clip rounded-[20px] bg-base-white
          h-76 w-full p-4 lg:h-140 lg:p-6
          pointer-events-none
          ${className}
        `}
      >
        <CardContent
          title={title}
          description={description}
          image={image}
          badge={badge}
          disabled
        />
      </div>
    );
  }

  return (
    <Link
      to={`/projects/${slug}`}
      className={`
        group relative flex flex-col overflow-clip rounded-[20px] bg-base-white
        h-76 w-full p-4 lg:h-140 lg:p-6
        transition-shadow hover:shadow-xl
        ${className}
      `}
    >
      <CardContent
        title={title}
        description={description}
        image={image}
        badge={badge}
        disabled={false}
      />
    </Link>
  );
}

function CardContent({
  title,
  description,
  image,
  badge,
  disabled,
}: Readonly<{
  title: string;
  description: string;
  image: string;
  badge?: string;
  disabled: boolean;
}>) {
  const projectInfo = (
    <div className="flex flex-col gap-1 lg:gap-2">
      <Heading
        size="display-sm"
        className={disabled ? 'text-gray-400' : 'text-base-white'}
      >
        {title}
      </Heading>
      <Text
        size="body-lg"
        className={disabled ? 'text-gray-400' : 'text-base-white'}
      >
        {description}
      </Text>
    </div>
  );

  return (
    <>
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: disabled
            ? `linear-gradient(90deg, rgba(30,30,30,0.2), rgba(30,30,30,0.2)), url(${image})`
            : `linear-gradient(to top, #1E1E1E 0%, transparent 40%), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Desktop layout: content at bottom, badge on right */}
      <div className="relative z-10 mt-auto hidden items-end justify-between lg:flex">
        {projectInfo}
        {badge && (
          <span
            className={`shrink-0 rounded-xl border px-3 py-1 font-body text-lg font-medium leading-6 whitespace-nowrap ${
              disabled
                ? 'border-gray-400 bg-gray-400 text-gray-100'
                : 'border-gray-100 bg-gray-50 text-base-dark'
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Mobile layout: badge top-right, text bottom-left */}
      <div className="relative z-10 flex flex-1 flex-col justify-between lg:hidden">
        <div className="flex justify-end">
          {badge && (
            <span
              className={`shrink-0 rounded-lg border px-2 py-1 font-body text-base font-medium leading-5.5 whitespace-nowrap ${
                disabled
                  ? 'border-gray-400 bg-gray-400 text-gray-100'
                  : 'border-gray-100 bg-gray-50 text-base-dark'
              }`}
            >
              {badge}
            </span>
          )}
        </div>
        {projectInfo}
      </div>
    </>
  );
}
