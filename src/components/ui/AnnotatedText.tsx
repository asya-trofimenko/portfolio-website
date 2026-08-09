import { Fragment, type ReactNode } from 'react';

/**
 * Inline markup used by the About page copy:
 *   <c>phrase</c>          hand-drawn circle around the phrase (up to two words)
 *   <u>word</u>            hand-drawn underline (a single word)
 *   <e:pencil>drawing</e>  the word plus its emoji, which always follows the word
 *                          and never wraps away from it
 *
 * Every language has its own markup, so the circled/underlined words can sit on
 * whichever word carries the meaning in that language.
 */
const TOKEN = /<(c|u)>(.*?)<\/\1>|<e:([a-z]+)>(.*?)<\/e>/g;

const CIRCLE_SCRIBBLE = '/images/circle-scribble-1.svg';
const LINE_SCRIBBLE = '/images/scribble-line-1.svg';

function Circled({ children }: Readonly<{ children: ReactNode }>) {
  return (
    // `isolate` keeps the stroke behind the word without dropping it behind the
    // page background, which a negative z-index would otherwise do.
    <span className="relative isolate inline-block whitespace-nowrap">
      {children}
      <img
        src={CIRCLE_SCRIBBLE}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[calc(100%+13px)] w-[calc(100%+12px)] max-w-none translate-x-[-50%] translate-y-[calc(-50%-2px)] lg:h-[calc(100%+23px)] lg:translate-y-[calc(-50%-6px)]"
      />
    </span>
  );
}

function Underlined({ children }: Readonly<{ children: ReactNode }>) {
  return (
    // `isolate` for the same reason as in `Circled`.
    <span className="relative isolate inline-block whitespace-nowrap">
      {children}
      <img
        src={LINE_SCRIBBLE}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-3.25 w-[calc(100%+12px)] max-w-none translate-x-[-50%] lg:h-5.25"
      />
    </span>
  );
}

/**
 * Where the visible pixels sit inside each emoji PNG, as a share of its height.
 * Most artwork fills its square, but a few have transparent padding at the top
 * that would otherwise drop them below the line. Measured from the alpha
 * bounding box; anything within a couple of percent of 0.5 is left alone.
 */
const EMOJI_ART_CENTER: Record<string, number> = {
  mountain: 0.606,
  wave: 0.578,
};

function Illustrated({
  emoji,
  children,
}: Readonly<{ emoji: string; children: ReactNode }>) {
  const artCenter = EMOJI_ART_CENTER[emoji] ?? 0.5;

  return (
    <span className="whitespace-nowrap">
      {children}{' '}
      {/* `align-middle` lands half an x-height above the baseline, which reads
          low beside capitals; -0.09em lifts it to the middle of the cap band. */}
      <span className="relative inline-block h-[1em] w-8 -translate-y-[0.09em] align-middle lg:mx-0.5 lg:w-15">
        <img
          src={`/images/emojis/${emoji}.png`}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-1/2 w-full max-w-none"
          style={{ transform: `translateY(${-artCenter * 100}%)` }}
        />
      </span>
    </span>
  );
}

export default function AnnotatedText({ value }: Readonly<{ value: string }>) {
  const parts: ReactNode[] = [];
  const token = new RegExp(TOKEN);
  let lastIndex = 0;
  let match = token.exec(value);

  while (match !== null) {
    const [full, tag, phrase, emoji, illustrated] = match;

    if (match.index > lastIndex) parts.push(value.slice(lastIndex, match.index));
    if (emoji) parts.push(<Illustrated emoji={emoji}>{illustrated}</Illustrated>);
    else if (tag === 'c') parts.push(<Circled>{phrase}</Circled>);
    else parts.push(<Underlined>{phrase}</Underlined>);

    lastIndex = match.index + full.length;
    match = token.exec(value);
  }

  if (lastIndex < value.length) parts.push(value.slice(lastIndex));

  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </>
  );
}
