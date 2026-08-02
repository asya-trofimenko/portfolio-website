import Icon from './Icon';

interface StepBlockCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function StepBlockCard({
  icon,
  title,
  description,
  className = '',
}: Readonly<StepBlockCardProps>) {
  return (
    <div
      className={`flex flex-col gap-4 overflow-clip rounded-[20px] border border-gray-100 bg-gray-50 p-4 lg:h-60 lg:justify-center lg:p-6 ${className}`}
    >
      <Icon
        name={icon}
        className="size-8 shrink-0 text-cyan-500 lg:size-15"
        strokeWidth={1.5}
      />
      <div className="flex flex-col gap-1 text-base-dark lg:gap-3.5">
        <h3 className="font-heading text-2xl font-medium leading-8 lg:text-[32px] lg:leading-10">
          {title}
        </h3>
        <p className="font-body text-lg font-normal leading-6 lg:text-2xl lg:leading-8">
          {description}
        </p>
      </div>
    </div>
  );
}
