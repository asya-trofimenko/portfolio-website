/**
 * Hand-placed polaroids from the About page marquee. `rotate` is the tilt in
 * degrees and `offset` the vertical nudge as a share of the card height, so the
 * same numbers work at both the mobile and desktop card sizes.
 */
export const polaroids: Polaroid[] = [
  { src: '/images/about/polaroid-1.jpg', rotate: 4.07, offset: 0 },
  { src: '/images/about/polaroid-2.jpg', rotate: -5.4, offset: 7.9 },
  // Placed here so the loop keeps it as far as possible from polaroid-7, the
  // other girl-and-dog shot. Near-flat tilt reads as a pause between the two
  // steeply tilted neighbours.
  { src: '/images/about/polaroid-10.jpg', rotate: -0.31, offset: 0.5 },
  { src: '/images/about/polaroid-3.jpg', rotate: 4.8, offset: 0 },
  { src: '/images/about/polaroid-4.jpg', rotate: -4.8, offset: 7 },
  { src: '/images/about/polaroid-5.jpg', rotate: -0.31, offset: 0.5 },
  { src: '/images/about/polaroid-6.jpg', rotate: -5.4, offset: 7.9 },
  { src: '/images/about/polaroid-7.jpg', rotate: 4.8, offset: 0 },
  { src: '/images/about/polaroid-8.jpg', rotate: -4.8, offset: 7 },
  { src: '/images/about/polaroid-9.jpg', rotate: 4.8, offset: 0 },
];

interface Polaroid {
  src: string;
  rotate: number;
  offset: number;
}

export type { Polaroid };
