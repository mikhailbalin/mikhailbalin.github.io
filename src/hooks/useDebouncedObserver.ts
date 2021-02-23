import { useState, MutableRefObject, useMemo } from "react";
import throttle from "lodash/throttle";
import { ObservedSize, useObserver } from "./useObserver";

export const useDebouncedObserver = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  wait: number
) => {
  const [size, setSize] = useState<ObservedSize>({
    width: undefined,
    height: undefined,
  });

  const onResize = useMemo(() => throttle(setSize, wait), [wait]);

  useObserver(ref, onResize);

  return { ...size };
};
