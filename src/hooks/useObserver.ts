import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

type ObservedSize = {
  width: number | undefined;
  height: number | undefined;
};

type ResizeHandler = (size: ObservedSize) => void;

export const useObserver = <T extends Element>({
  ref,
  onResize,
}: {
  ref: MutableRefObject<T>;
  onResize?: ResizeHandler;
}) => {
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
    if (observerRef.current) return;

    const resizeObserverOrPolyfill = ResizeObserver;
    observerRef.current = new resizeObserverOrPolyfill((entries) => {
      if (!Array.isArray(entries) || !entries.length) return;

      const entry = entries[0];
      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      if (
        !firstLoadRef.current &&
        (previousSizesRef.current.width !== newWidth ||
          previousSizesRef.current.height !== newHeight)
      ) {
        const newSize = { width: newWidth, height: newHeight };

        previousSizesRef.current.width = newWidth;
        previousSizesRef.current.height = newHeight;

        if (onResizeRef.current) {
          onResizeRef.current(newSize);
        } else {
          setSize(newSize);
        }
      }

      firstLoadRef.current = false;
    });
  }, [observerRef]);

  useEffect(() => {
    if (
      typeof ref !== "object" ||
      ref === null ||
      !(ref.current instanceof Element)
    )
      return;

    const element = ref.current;
    observerRef.current?.observe(element);
    return () => observerRef.current?.unobserve(element);
  }, [ref, observerRef]);

  return useMemo(
    () => ({
      width: size.width,
      height: size.height,
    }),
    [size.width, size.height]
  );
};
