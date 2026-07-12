import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import Icon from './Icon';

type Hierarchy = 'primary' | 'secondary-color';
type Size = 'sm' | 'lg' | 'xl';

type ButtonOwnProps<T extends ElementType = 'button'> = {
  as?: T;
  hierarchy?: Hierarchy;
  size?: Size;
  iconLeading?: string;
  iconTrailing?: string;
  children: ReactNode;
};

type ButtonProps<T extends ElementType = 'button'> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

const hierarchyClasses: Record<Hierarchy, string> = {
  primary:
    'bg-gradient-to-b from-[#36D1DC] to-[#5B86E5] text-base-white font-semibold hover:shadow-focus-ring-cyan disabled:from-gray-100 disabled:to-gray-100 disabled:text-gray-400 disabled:pointer-events-none',
  'secondary-color':
    'bg-cyan-100 text-base-dark font-medium hover:shadow-focus-ring-cyan disabled:bg-gray-100 disabled:text-gray-400 disabled:border disabled:border-gray-100 disabled:pointer-events-none',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 gap-1 text-sm leading-5 rounded-[10px]',
  lg: 'px-3 py-1.5 gap-1 text-sm leading-5 rounded-[10px] lg:px-[18px] lg:py-3 lg:gap-2 lg:text-base lg:leading-[22px] lg:rounded-full',
  xl: 'px-[18px] py-3 gap-2 text-base leading-[22px] rounded-full lg:px-6 lg:py-3.5 lg:gap-3.5 lg:text-lg lg:leading-6',
};

const iconSizeMap: Record<Size, number> = { sm: 20, lg: 20, xl: 20 };

export default function Button<T extends ElementType = 'button'>({
  as,
  hierarchy = 'primary',
  size = 'xl',
  iconLeading,
  iconTrailing,
  children,
  className,
  ...rest
}: ButtonProps<T>) {
  const Component = as ?? 'button';

  return (
    <Component
      className={`inline-flex items-center justify-center font-body whitespace-nowrap transition-shadow ${hierarchyClasses[hierarchy]} ${sizeClasses[size]} ${className ?? ''}`}
      {...rest}
    >
      {iconLeading && <Icon name={iconLeading} size={iconSizeMap[size]} />}
      {children}
      {iconTrailing && <Icon name={iconTrailing} size={iconSizeMap[size]} />}
    </Component>
  );
}
