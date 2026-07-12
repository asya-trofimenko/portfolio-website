import { useId } from 'react';

interface CountryIconProps {
  country: 'GB' | 'UA';
  size?: number;
  className?: string;
}

function GBFlag({ clipId }: Readonly<{ clipId: string }>) {
  return (
    <>
      <defs>
        <clipPath id={clipId}>
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="32" height="32" fill="#012169" />
        <path d="M0 0L32 32M32 0L0 32" stroke="#FFF" strokeWidth="6" />
        <path d="M0 0L32 32" stroke="#C8102E" strokeWidth="2" />
        <path d="M32 0L0 32" stroke="#C8102E" strokeWidth="2" />
        <rect x="12" y="0" width="8" height="32" fill="#FFF" />
        <rect x="0" y="12" width="32" height="8" fill="#FFF" />
        <rect x="13.5" y="0" width="5" height="32" fill="#C8102E" />
        <rect x="0" y="13.5" width="32" height="5" fill="#C8102E" />
      </g>
    </>
  );
}

function UAFlag({ clipId }: Readonly<{ clipId: string }>) {
  return (
    <>
      <defs>
        <clipPath id={clipId}>
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect y="0" width="32" height="16" fill="#005BBB" />
        <rect y="16" width="32" height="16" fill="#FFD500" />
      </g>
    </>
  );
}

export default function CountryIcon({
  country,
  size = 32,
  className,
}: Readonly<CountryIconProps>) {
  const id = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-label={country === 'UA' ? 'Ukrainian flag' : 'British flag'}
    >
      {country === 'UA' ? <UAFlag clipId={id} /> : <GBFlag clipId={id} />}
    </svg>
  );
}
