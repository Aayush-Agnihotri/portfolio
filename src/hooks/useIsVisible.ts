import { MutableRefObject, useEffect, useState } from "react";

export const useIsVisible = (ref: MutableRefObject<any>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const viewportObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting);
      }
    });

    if (ref.current) {
      viewportObserver.observe(ref.current);
    }
    return () => viewportObserver.disconnect();
  }, [ref]);

  return isVisible;
};