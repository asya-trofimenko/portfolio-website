import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function NavItem({
  to,
  children,
  external,
  className = '',
}: Readonly<NavItemProps>) {
  const classes = `inline-flex flex-col items-center font-body text-2xl leading-8 text-base-dark font-normal hover:font-medium after:font-medium after:text-2xl after:leading-8 after:h-0 after:invisible after:overflow-hidden after:content-[attr(data-text)] ${className}`;
  const textContent = typeof children === 'string' ? children : undefined;

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        data-text={textContent}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} data-text={textContent}>
      {children}
    </Link>
  );
}
