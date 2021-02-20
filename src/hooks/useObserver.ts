import { MutableRefObject, useEffect, useRef } from "react";
import ResizeObserver from "resize-observer-polyfill";

export const useObserver = <T extends Element>({
  cb,
  ref,
}: {
  cb: () => void;
  ref: MutableRefObject<T>;
}) => {
  const element = ref?.current;

  const observer = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    // if we are already observing old element
    if (observer?.current && element) {
      observer.current.unobserve(element);
    }

    const resizeObserverOrPolyfill = ResizeObserver;
    observer.current = new resizeObserverOrPolyfill(cb);
    observe();

    return () => {
      if (observer?.current && element) {
        observer.current.unobserve(element);
      }
    };
  }, [element]);

  const observe = () => {
    if (element && observer.current) {
      observer.current.observe(element);
    }
  };
};
