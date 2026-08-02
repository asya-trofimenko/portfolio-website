interface TabButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onFocus?: () => void;
  className?: string;
}

export default function TabButton({
  children,
  active = false,
  onClick,
  onMouseEnter,
  onFocus,
  className = '',
}: Readonly<TabButtonProps>) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      className={`
        inline-flex items-center justify-center rounded-full font-body
        whitespace-nowrap transition-all text-base-dark
        px-4 py-3 text-xl leading-7.5
        lg:px-6 lg:py-3.5 lg:text-2xl lg:leading-8
        ${
          active
            ? 'bg-cyan-100 font-medium'
            : 'bg-gray-100 font-normal hover:bg-cyan-100 hover:font-medium'
        }
        focus-visible:bg-cyan-100 focus-visible:font-medium focus-visible:shadow-focus-ring-cyan focus-visible:outline-none
        ${className}
      `}
    >
      {children}
    </button>
  );
}
