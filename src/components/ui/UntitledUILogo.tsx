const Background = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 32 32"
      className="size-full"
    >
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="16"
        x2="16"
        y1="0"
        y2="32"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#0a0d12" />
      </linearGradient>
      <clipPath id="b">
        <path d="m0 0h32v32h-32z" />
      </clipPath>
      <clipPath id="c">
        <path d="m0 0h32v32h-32z" />
      </clipPath>
      <g clipPath="url(#b)">
        <path d="m0 0h32v32h-32z" fill="#fff" />
        <path d="m0 0h32v32h-32z" fill="url(#a)" fillOpacity=".2" />
        <g clipPath="url(#c)" opacity=".14">
          <path
            clipRule="evenodd"
            d="m15.9612 0h.0776v1.96123c1.8541.00502 3.6237.36946 5.2428 1.02732v-2.98855h.0776v3.02038c1.3747.56821 2.6394 1.34844 3.7534 2.29993h1.4894v-5.32031h.0776v5.32031h5.3204v.07767h-5.3204v1.4893c.9515 1.11402 1.7317 2.37873 2.3 3.75332h3.0204v.0777h-2.9886c.6579 1.619 1.0223 3.3886 1.0274 5.2426h1.9612v.0777h-1.9612c-.005 1.8541-.3694 3.6236-1.0272 5.2426h2.9884v.0777h-3.0202c-.5683 1.3748-1.3486 2.6397-2.3002 3.7539v1.4888h5.3204v.0776h-5.3204v5.3208h-.0776v-5.3208h-1.4888c-1.1142.9517-2.3791 1.7321-3.754 2.3005v3.0203h-.0776v-2.9885c-1.6191.6578-3.3887 1.0223-5.2428 1.0273v1.9612h-.0776v-1.9612c-1.8541-.005-3.6237-.3695-5.2428-1.0273v2.9885h-.0776v-3.0203c-1.37491-.5684-2.63983-1.3488-3.75402-2.3005h-1.48874v5.3208h-.07767v-5.3208h-5.32037v-.0776h5.32037v-1.4888c-.9516-1.1142-1.7319-2.3791-2.30014-3.7539h-3.02023v-.0777h2.9884c-.6578-1.619-1.02219-3.3885-1.02718-5.2426h-1.96122v-.0777h1.96122c.00505-1.854.36951-3.6236 1.02738-5.2426h-2.9886v-.0777h3.02044c.56822-1.37459 1.34845-2.6393 2.29993-3.75332v-1.4893h-5.32037v-.07767h5.32037v-5.32031h.07767v5.32031h1.48932c1.11404-.95149 2.37877-1.73172 3.75344-2.29993v-3.02038h.0776v2.98855c1.6191-.65786 3.3887-1.02229 5.2428-1.02732zm0 2.0389c-1.855.00506-3.6248.37185-5.2428 1.03355v2.24786h5.2428zm-5.3204 1.06559c-1.32707.55213-2.5506 1.30314-3.63339 2.21582h3.63339zm-3.84361 2.29349h-1.39915v1.39913c.43306-.49846.90068-.96608 1.39915-1.39913zm-1.39915 1.518c.46648-.54392.97409-1.05152 1.51802-1.518h3.72474v5.24262h-5.24276zm-.07767.09135c-.91267 1.08277-1.66368 2.30627-2.21583 3.63327h2.21583zm-2.24787 3.71097c-.66172 1.6179-1.02853 3.3877-1.03361 5.2426h3.28148v-5.2426zm-1.03361 5.3203c.00502 1.8549.37176 3.6247 1.03341 5.2426h2.24807v-5.2426zm1.06545 5.3203c.55216 1.3272 1.30325 2.5509 2.21603 3.6338v-3.6338zm2.2937 3.844v1.3987h1.39858c-.49825-.433-.96569-.9004-1.39858-1.3987zm1.51744 1.3987c-.5437-.4664-1.05112-.9738-1.51744-1.5175v-3.7252h5.24276v5.2427zm.09135.0776c1.08293.9129 2.30666 1.6641 3.63397 2.2163v-2.2163zm3.71157 2.2484c1.618.6617 3.3878 1.0285 5.2428 1.0335v-3.2819h-5.2428zm5.3204 1.0335c1.8549-.005 3.6248-.3718 5.2428-1.0335v-2.2484h-5.2428zm5.3204-1.0656c1.3273-.5522 2.551-1.3034 3.634-2.2163h-3.634zm3.8442-2.2939h1.3986v-1.3987c-.4329.4983-.9004.9657-1.3986 1.3987zm1.3986-1.5175c-.4664.5437-.9738 1.0511-1.5175 1.5175h-3.7253v-5.2427h5.2428zm.0776-.0914c.9128-1.0829 1.6639-2.3066 2.2161-3.6338h-2.2161zm2.2481-3.7115c.6617-1.6179 1.0284-3.3877 1.0334-5.2426h-3.2815v5.2426zm1.0334-5.3203c-.0051-1.8548-.3719-3.6247-1.0336-5.2426h-2.2479v5.2426zm-1.0656-5.3203c-.5522-1.327-1.3032-2.5505-2.2159-3.63327v3.63327zm-2.2935-3.84349v-1.39913h-1.3992c.4985.43305.9661.90067 1.3992 1.39913zm-1.5181-1.39913c.544.46648 1.0516.97408 1.5181 1.518v3.72462h-5.2428v-5.24262zm-.0913-.07767c-1.0828-.91268-2.3063-1.66369-3.6334-2.21582v2.21582zm-3.711-2.24786c-1.618-.66171-3.3879-1.0285-5.2428-1.03355v3.28141h5.2428zm-10.5632 2.32553h5.2428v5.24262h-5.2428zm10.5632 0h-5.2428v5.24262h5.2428zm-10.6408 15.88322h-5.24276v-5.2426h5.24276zm.0776.0777v5.2427h5.2428v-5.2427zm5.2428-.0777h-5.2428v-5.2426h5.2428zm.0776.0777v5.2427h5.2428v-5.2427zm5.2428-.0777h-5.2428v-5.2426h5.2428zm5.3204 0h-5.2428v-5.2426h5.2428zm-15.8836-10.5629h5.2428v5.2426h-5.2428zm-5.32036 0h5.24276v5.2426h-5.24276zm15.88356 0h-5.2428v5.2426h5.2428zm.0776 5.2426v-5.2426h5.2428v5.2426z"
            fill="#0a0d12"
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
};

const Circle = ({ size }: { size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect
        width="16"
        height="16"
        rx="8"
        fill="url(#paint0_linear_9956_52205)"
      />
      <rect
        width="16"
        height="16"
        rx="8"
        fill="url(#paint1_radial_9956_52205)"
        fillOpacity="0.08"
      />
      <rect
        width="16"
        height="16"
        rx="8"
        fill="url(#paint2_radial_9956_52205)"
        fillOpacity="0.18"
      />
      <rect
        width="16"
        height="16"
        rx="8"
        fill="url(#paint3_radial_9956_52205)"
        fillOpacity="0.05"
      />
      <path
        d="M12.8 4.04141C12.8 5.38977 10.651 4.52969 8 4.52969C5.34903 4.52969 3.2 5.38977 3.2 4.04141C3.2 2.69304 5.34903 1.59998 8 1.59998C10.651 1.59998 12.8 2.69304 12.8 4.04141Z"
        fill="url(#paint4_linear_9956_52205)"
        fillOpacity="0.4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9956_52205"
          x1="4"
          y1="16"
          x2="12"
          y2="-7.7486e-07"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#53389E" />
          <stop offset="1" stopColor="#6941C6" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_9956_52205"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8) rotate(90) scale(12)"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.5" stopColor="white" stopOpacity="0" />
          <stop offset="0.99" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_9956_52205"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8 8) rotate(90) scale(8)"
        >
          <stop offset="0.746599" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_9956_52205"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8 4.6) rotate(90) scale(7)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint4_linear_9956_52205"
          x1="8"
          y1="1.59998"
          x2="8"
          y2="4.79998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

interface UntitledUILogoProps {
  size?: number;
  className?: string;
}

export default function UntitledUILogo({
  size = 32,
  className,
}: Readonly<UntitledUILogoProps>) {
  const radius = Math.round(size * 0.25);
  const circleSize = Math.round(size * 0.5);

  return (
    <div
      className={[
        'relative flex flex-none items-center justify-center overflow-hidden',
        'border-[0.2px] border-black/12',
        'shadow-[0_0_0.5px_rgba(0,0,0,0.2),inset_0_-0.5px_0.5px_rgba(0,0,0,0.1),0_1px_1px_-0.5px_rgba(0,0,0,0.13),0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ width: size, height: size, borderRadius: radius }}
    >
      <div className="absolute inset-0">
        <Background />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 top-1/2 z-2 translate-y-[1%] overflow-hidden backdrop-blur-[3px]"
        style={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          backgroundImage:
            'linear-gradient(rgba(10,13,18,0) 0%, rgba(10,13,18,0) 80%, rgba(10,13,18,0.2) 100%)',
        }}
      />
      <div className="relative z-1">
        <Circle size={circleSize} />
      </div>
    </div>
  );
}
