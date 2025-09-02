"use client";
import { useEffect, useRef } from "react";

function useScrollAnimation(className: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(className);
          observer.unobserve(el); // only animate once
        }
      },
      { threshold: 0.2 } // 20% visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [className]);

  return ref;
}

export default useScrollAnimation;