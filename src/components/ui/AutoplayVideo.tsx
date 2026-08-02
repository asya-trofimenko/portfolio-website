import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useMediaQuery';

interface AutoplayVideoProps {
  src: string;
  poster: string;
  label?: string;
  className?: string;
  /**
   * Start downloading on mount. Use for media in or near the first screen.
   * Everything else waits for the page to finish its critical work.
   */
  eager?: boolean;
}

/**
 * Silent looping video that plays only while on screen.
 *
 * Download is held back until the page has loaded, so a heavy clip below the
 * fold never competes with the first screen. With `prefers-reduced-motion` it
 * stays on its poster and exposes native controls instead of autoplaying.
 */
export default function AutoplayVideo({
  src,
  poster,
  label,
  className = '',
  eager = false,
}: Readonly<AutoplayVideoProps>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [onScreen, setOnScreen] = useState(false);

  // Hold the download back until the browser is done with the critical render.
  useEffect(() => {
    if (shouldLoad) return;

    let cancelled = false;
    const start = () => {
      if (!cancelled) setShouldLoad(true);
    };
    const schedule = () => {
      if (cancelled) return;
      if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(start, { timeout: 2000 });
      } else {
        globalThis.setTimeout(start, 200);
      }
    };

    if (document.readyState === 'complete') {
      schedule();
    } else {
      globalThis.addEventListener('load', schedule, { once: true });
    }

    return () => {
      cancelled = true;
      globalThis.removeEventListener('load', schedule);
    };
  }, [shouldLoad]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Decoding an off-screen clip is wasted battery, so play only what is seen.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoad || reducedMotion) return;

    if (onScreen) {
      void el.play().catch(() => {
        // Autoplay can still be refused (e.g. battery saver) — poster stands in.
      });
    } else {
      el.pause();
    }
  }, [onScreen, shouldLoad, reducedMotion, src]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      aria-label={label}
      loop
      muted
      playsInline
      controls={reducedMotion}
      preload={reducedMotion ? 'metadata' : 'auto'}
      className={className}
    />
  );
}
