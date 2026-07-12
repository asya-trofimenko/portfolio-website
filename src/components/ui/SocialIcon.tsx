import type { ReactNode } from 'react';

interface SocialIconProps {
  platform: 'telegram' | 'linkedin' | 'behance';
  size?: number;
  className?: string;
}

function TelegramIcon() {
  return (
    <>
      <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_152_5957)" />
      <path
        d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_152_5957"
          x1="16"
          y1="2"
          x2="16"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#37BBFE" />
          <stop offset="1" stopColor="#007DBB" />
        </linearGradient>
      </defs>
    </>
  );
}

function LinkedInIcon() {
  return (
    <>
      <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1" />
      <path
        d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z"
        fill="white"
      />
      <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white" />
      <path
        d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
        fill="white"
      />
    </>
  );
}

function BehanceIcon() {
  return (
    <>
      <circle cx="16" cy="16" r="14" fill="#105DFB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.87598 21.9597V9.74365H12.5232C14.3372 9.74365 15.8076 11.2141 15.8076 13.028C15.8076 14.1807 15.4532 14.8947 14.1536 15.6272C15.7088 16.3358 16.1407 17.3178 16.1407 18.6877C16.1407 20.5408 14.4944 21.9597 12.6414 21.9597H6.87598ZM9.26566 11.7658V14.7033H12.0625C12.0625 14.7033 13.4219 14.7033 13.4219 13.2346C13.4219 11.7658 12.0625 11.7658 12.0625 11.7658H9.26566ZM9.26566 19.8908V16.7189H12.2657C12.75 16.7189 13.7657 16.9689 13.7657 18.4689C13.7657 19.5814 12.7657 19.8804 12.2657 19.8908H9.26566Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.25 13.1096C19.5313 13.1096 16.9844 14.3439 16.9844 17.6252C16.9844 19.6232 18.0782 22.1877 21.3594 22.1877C23.9844 22.1877 25.1927 20.2606 25.4688 19.2971H23C22.875 19.7346 22.3907 20.2189 21.3594 20.2189C19.8594 20.2189 19.3282 18.9377 19.25 18.2971H25.4688V17.6252C25.4688 14.3439 22.9688 13.1096 21.25 13.1096ZM21.25 14.9846C19.85 14.9846 19.3334 16.1408 19.25 16.7189H23C23 16.1408 22.65 14.9846 21.25 14.9846Z"
        fill="white"
      />
      <path
        d="M18.2657 10.4377V11.9533H24.1563V10.4377H18.2657Z"
        fill="white"
      />
    </>
  );
}

const platformMap: Record<string, () => ReactNode> = {
  telegram: TelegramIcon,
  linkedin: LinkedInIcon,
  behance: BehanceIcon,
};

export default function SocialIcon({
  platform,
  size = 32,
  className,
}: Readonly<SocialIconProps>) {
  const PlatformIcon = platformMap[platform];
  if (!PlatformIcon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-label={platform}
    >
      <PlatformIcon />
    </svg>
  );
}
