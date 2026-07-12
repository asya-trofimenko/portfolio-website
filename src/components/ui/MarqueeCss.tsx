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
    <div className="w-full overflow-hidden">
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
