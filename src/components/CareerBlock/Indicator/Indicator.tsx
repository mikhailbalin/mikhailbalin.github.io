import React, { useLayoutEffect, useState, useRef } from "react";
import { useSpring } from "@react-spring/web";
import throttle from "lodash/throttle";
import { DotWrapper, Dot, StyledIndicator } from "./Indicator.styles";

interface IndicatorProps {
  blockHeight: number;
  threshold: number;
  indicatorVisible: boolean;
}

export const Indicator = ({
  blockHeight,
  threshold,
  indicatorVisible,
}: IndicatorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0%");

  useLayoutEffect(() => {
    const increaseCount = () => {
      const elementTop = ref?.current?.getBoundingClientRect().y;

      console.log({ elementTop });

      if (!elementTop) return;
      const diff = threshold - elementTop;

      if (threshold <= elementTop) {
        setHeight(() => "0%");
      } else if (diff >= blockHeight) {
        setHeight(() => "100%");
      } else {
        setHeight(() => `${((diff / blockHeight) * 100).toFixed()}%`);
      }
    };

    const throttledCount = throttle(increaseCount, 300);

    window.addEventListener("scroll", throttledCount);
    return () => window.removeEventListener("scroll", throttledCount);
  }, [blockHeight, threshold]);

  const indicatorStyles = useSpring({ height });

  return (
    <>
      <DotWrapper>
        <Dot $active={height !== "0%"} />
        {height}
      </DotWrapper>

      {indicatorVisible && (
        <StyledIndicator ref={ref} style={indicatorStyles} />
      )}
    </>
  );
};
