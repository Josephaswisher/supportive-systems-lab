"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
}

export function useCountUp({ end, duration = 2000 }: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const hasStartedRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const startCounting = useCallback(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startCounting]);

  return { count, ref };
}
