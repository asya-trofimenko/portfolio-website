type TextSize =
  | 'body-3xl'
  | 'body-2xl'
  | 'body-xl'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'body-xs'
  | 'body-2xs'
  | 'body-3xs';

type TextWeight = 'regular' | 'medium' | 'semibold';

type TextTag = 'p' | 'span' | 'div' | 'label' | 'li';

interface TextProps {
  size?: TextSize;
  weight?: TextWeight;
  as?: TextTag;
  className?: string;
  children: React.ReactNode;
}

const sizeClasses: Record<TextSize, string> = {
  'body-3xl': 'text-[32px] leading-10 lg:text-5xl lg:leading-15', // 32px mobile | 48px desktop
  'body-2xl': 'text-2xl leading-8 lg:text-[32px] lg:leading-10', // 24px mobile | 32px desktop
  'body-xl': 'text-xl leading-7.5 lg:text-2xl lg:leading-8', // 20px mobile | 24px desktop
  'body-lg': 'text-lg leading-6 lg:text-2xl lg:leading-8', // 18px mobile | 24px desktop (grows)
  'body-md': 'text-lg leading-6', // 18px mobile | 18px desktop
  'body-sm': 'text-base leading-5.5 lg:text-lg lg:leading-6', // 16px mobile | 18px desktop (grows)
  'body-xs': 'text-base leading-5.5', // 16px mobile | 16px desktop
  'body-2xs': 'text-sm leading-5 lg:text-lg lg:leading-6', // 14px mobile | 18px desktop (grows)
  'body-3xs': 'text-sm leading-5', // 14px mobile | 14px desktop
};

const weightClasses: Record<TextWeight, string> = {
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
};

export default function Text({
  size = 'body-lg',
  weight = 'regular',
  as: Tag = 'p',
  className,
  children,
}: Readonly<TextProps>) {
  return (
    <Tag
      className={`font-body ${sizeClasses[size]} ${weightClasses[weight]} ${className ?? ''}`}
    >
      {children}
    </Tag>
  );
}

export type { TextSize, TextWeight };
