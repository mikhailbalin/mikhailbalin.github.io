import { MutableRefObject, useEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

type ObservedSize = {
  width?: number;
  height?: number;
};

type ResizeHandler = (size: ObservedSize) => void;

export const useObserver = <T extends Element>({
  ref,
  cb,
  onResize,
}: {
  ref: MutableRefObject<T>;
  cb: () => void;
  onResize?: ResizeHandler;
}) => {
  const [size, setSize] = useState<ObservedSize>({
    width: undefined,
    height: undefined,
  });

  const onResizeRef = useRef<ResizeHandler | undefined>(undefined);
  onResizeRef.current = onResize;

  const element = ref?.current;

  const observer = useRef<ResizeObserver | undefined>(undefined);

  const previousSizes = useRef<ObservedSize>({
    width: undefined,
    height: undefined,
  });

  const firstLoadRef = useRef<boolean>(true);

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
