import { motion } from 'framer-motion';

interface PhotoItem {
  src: string;
  alt: string;
  height: 'tall' | 'short';
}

const photos: PhotoItem[] = [
  {
    src: '/images/portfolio/photo-1.jpg',
    alt: 'Portfolio work 1',
    height: 'tall',
  },
  {
    src: '/images/portfolio/photo-2.jpg',
    alt: 'Portfolio work 2',
    height: 'short',
  },
  {
    src: '/images/portfolio/photo-3.jpg',
    alt: 'Portfolio work 3',
    height: 'tall',
  },
  {
    src: '/images/portfolio/photo-4.jpg',
    alt: 'Portfolio work 4',
    height: 'short',
  },
  {
    src: '/images/portfolio/photo-5.jpg',
    alt: 'Portfolio work 5',
    height: 'tall',
  },
  {
    src: '/images/portfolio/photo-6.jpg',
    alt: 'Portfolio work 6',
    height: 'short',
  },
  {
    src: '/images/portfolio/photo-7.jpg',
    alt: 'Portfolio work 7',
    height: 'tall',
  },
  {
    src: '/images/portfolio/photo-8.jpg',
    alt: 'Portfolio work 8',
    height: 'short',
  },
  {
    src: '/images/portfolio/photo-9.jpg',
    alt: 'Portfolio work 9',
    height: 'tall',
  },
];

function PhotoCard({ photo }: Readonly<{ photo: PhotoItem }>) {
  return (
    <div
      className={`shrink-0 w-54 lg:w-108 rounded-2.5xl overflow-hidden ${
        photo.height === 'tall' ? 'h-54 lg:h-108' : 'h-42 lg:h-83'
      }`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="size-full object-cover"
        // The marquee slides cards in from off-screen, so lazy loading would
        // only start the fetch once a card is already visible. Load up front
        // at low priority instead.
        fetchPriority="low"
        decoding="async"
      />
    </div>
  );
}

export default function PhotoScrollSection() {
  const duplicated = [...photos, ...photos];

  return (
    <section className="w-full overflow-x-clip py-16 lg:py-20">
      <div className="flex items-end gap-4 lg:gap-6">
        <motion.div
          className="flex items-end gap-4 lg:gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        >
          {duplicated.map((photo, i) => (
            <PhotoCard key={`${photo.src}-${i}`} photo={photo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
