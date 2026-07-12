type HeadingSize = 'display-2xl' | 'display-xl' | 'display-sm';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface HeadingProps {
  onDark?: boolean;
  size?: HeadingSize;
  as?: HeadingTag;
  className?: string;
  children: React.ReactNode;
}

const sizeClasses: Record<HeadingSize, string> = {
  'display-2xl': 'text-4xl leading-11 lg:text-7xl lg:leading-22.5', // 36px mobile | 72px desktop
  'display-xl': 'text-[32px] leading-10 lg:text-6xl lg:leading-18', // 23px mobile | 60px desktop
  'display-sm': 'text-2xl leading-8 lg:text-[32px] lg:leading-10', // 24px mobile | 32px desktop
};

export default function Heading({
  onDark = false,
  size = 'display-xl',
  as: Tag = 'h2',
  className,
  children,
}: Readonly<HeadingProps>) {
  return (
    <Tag
      className={`font-heading font-medium ${sizeClasses[size]} ${onDark ? 'text-base-white' : 'text-base-dark'} ${className ?? ''}`}
    >
      {children}
    </Tag>
  );
}

export type { HeadingSize };
