import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";
import isNull from "lodash/isNull";
import ResizeObserver from "resize-observer-polyfill";

export type ObservedSize = {
  width: number | undefined;
  height: number | undefined;
};

type ResizeHandler = (size: ObservedSize) => void;

export const useObserver = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  onResize?: ResizeHandler
): ObservedSize => {
  const [size, setSize] = useState<ObservedSize>({
    width: undefined,
    height: undefined,
  });

  const previousSizesRef = useRef<ObservedSize>({
    width: undefined,
    height: undefined,
  });

  const observerRef = useRef<ResizeObserver | undefined>(undefined);

  /**
   * In certain edge cases the RO might want to report
   * a size change just after the component unmounted.
   */
  const didUnmountRef = useRef(false);

  useEffect(() => {
    return () => {
      didUnmountRef.current = true;
    };
  }, []);

  useEffect(() => {
    if (observerRef.current) return;

    observerRef.current = new ResizeObserver((entries) => {
      /**
       * Since we only observe the one element,
       * we don't need to loop over the array
       */
      const entry = entries[0];

      const newWidth = Math.round(entry.contentRect.width);
      const newHeight = Math.round(entry.contentRect.height);

      if (
        previousSizesRef.current.width !== newWidth ||
        previousSizesRef.current.height !== newHeight
      ) {
        const newSize = { width: newWidth, height: newHeight };

        previousSizesRef.current.width = newWidth;
        previousSizesRef.current.height = newHeight;

        if (onResize) {
          onResize(newSize);
        } else {
          if (!didUnmountRef.current) {
            setSize(newSize);
          }
        }
      }
    });
  }, [observerRef]);

  useEffect(() => {
    if (isNull(ref) || !(ref.current instanceof HTMLElement)) return;

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
