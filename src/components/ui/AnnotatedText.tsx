import { Fragment, type ReactNode } from 'react';

/**
 * Inline markup used by the hero and About page copy:
 *   <c>phrase</c>          hand-drawn circle around the phrase (up to two words)
 *   <u>phrase</u>          hand-drawn underline
 *   <u2>phrase</u2>        the same, drawn with the second, flatter stroke
 *   <e:pencil>drawing</e>  the word plus its emoji, which always follows the word
 *                          and never wraps away from it
 *
 * Every language has its own markup, so the circled/underlined words can sit on
 * whichever word carries the meaning in that language.
 */
const TOKEN = /<(c|u|u2)>(.*?)<\/\1>|<e:([a-z]+)>(.*?)<\/e>/g;

const CIRCLE_SCRIBBLE = '/images/circle-scribble-1.svg';

/**
 * The two underline strokes, each at the height and overhang the design gives
 * it. Note the file names are the reverse of the Figma layer names:
 * `scribble-line-1.svg` holds "Line Scribble_2" and vice versa.
 *
 * `u2` reaches well past its word: neighbouring strokes then overlap by more
 * than the length of the tapered tips they end in, so a run of underlined words
 * joins without a visible waist. The overhang is in `em` to hold at any heading
 * size.
 */
const LINE_SCRIBBLES = {
  u: {
    src: '/images/scribble-line-1.svg',
    size: 'h-3.25 bottom-0 w-[calc(100%+12px)] lg:h-5.25',
  },
  u2: {
    src: '/images/scribble-line-2.svg',
    size: 'h-2.75 -bottom-0.75 w-[calc(100%+0.5em)] lg:h-4.5 lg:-bottom-0.25',
  },
} as const;

type UnderlineVariant = keyof typeof LINE_SCRIBBLES;

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

/**
 * Underlines a phrase with one stroke per word, so the strokes follow the words
 * when the copy rewraps. Every second word is mirrored end to end: that lands
 * the two strokes at the same height where they meet, and a run of words on one
 * line reads as a single unbroken underline.
 */
function Underlined({
  variant,
  children,
}: Readonly<{ variant: UnderlineVariant; children: string }>) {
  const { src, size } = LINE_SCRIBBLES[variant];

  return children.split(' ').map((word, i) => (
    <Fragment key={i}>
      {i > 0 && ' '}
      {/* `isolate` for the same reason as in `Circled`. */}
      <span className="relative isolate inline-block whitespace-nowrap">
        {word}
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 -z-10 max-w-none translate-x-[-50%] ${size} ${i % 2 === 1 ? '-scale-x-100' : ''}`}
        />
      </span>
    </Fragment>
  ));
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
    else
      parts.push(
        <Underlined variant={tag as UnderlineVariant}>{phrase}</Underlined>,
      );

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
