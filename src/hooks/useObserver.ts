import { MutableRefObject, useEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

type ObservedSize = {
  width: number | undefined;
  height: number | undefined;
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
  const element = ref.current;

  const [size, setSize] = useState<ObservedSize>({
    width: undefined,
    height: undefined,
  });

  const firstLoadRef = useRef<boolean>(true);

  const observerRef = useRef<ResizeObserver | undefined>(undefined);

  const onResizeRef = useRef<ResizeHandler | undefined>(undefined);
  onResizeRef.current = onResize;

  const previousSizesRef = useRef<ObservedSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // if we are already observing old element
    if (observerRef?.current && element) {
      observerRef.current.unobserve(element);
    }

    const resizeObserverOrPolyfill = ResizeObserver;
    observerRef.current = new resizeObserverOrPolyfill(cb);
    observe();

    return () => {
      if (observerRef?.current && element) {
        observerRef.current.unobserve(element);
      }
    };
  }, [element]);

  const observe = () => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };
};
