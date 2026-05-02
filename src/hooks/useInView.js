import { useEffect, useState } from "react";

export default function useInView(ref, options = { threshold: 0.18 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, isVisible, options]);

  return isVisible;
}
