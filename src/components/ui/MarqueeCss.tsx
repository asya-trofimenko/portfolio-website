import React from 'react';

interface MarqueeCssProps {
  duration?: number;
  children: React.ReactNode;
}

export default function MarqueeCss({
  duration = 20,
  children,
}: Readonly<MarqueeCssProps>) {
  const items = React.Children.toArray(children);
  const copies = [0, 1, 2, 3] as const;

  return (
    // Clip only horizontally so items that tilt or shift out of the row —
    // the About polaroids — keep their full outline instead of being cut off.
    <div className="w-full overflow-x-clip overflow-y-visible">
      <div
        className="animate-marquee flex w-max"
        style={{ animationDuration: `${duration}s` }}
      >
        {copies.map((n) =>
          items.map((item, i) =>
            React.isValidElement(item)
              ? React.cloneElement(item, { key: `${n}-${i}` })
              : item,
          ),
        )}
      </div>
    </div>
  );
}
