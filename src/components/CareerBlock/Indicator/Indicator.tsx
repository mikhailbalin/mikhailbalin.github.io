import React, { useLayoutEffect, useState, useRef } from "react";
import { useSpring } from "@react-spring/web";
import throttle from "lodash/throttle";
import { Timeline, DotWrapper, Dot, StyledIndicator } from "./Indicator.styles";
import { useMeasure } from "react-use";

export interface IndicatorProps {
  threshold: number;
  indicatorVisible: boolean;
}

export const Indicator = ({ threshold, indicatorVisible }: IndicatorProps) => {
  const [
    timelineRef,
    { height: timelineHeight },
  ] = useMeasure<HTMLDivElement>();
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0%");

  useLayoutEffect(() => {
    const increaseCount = () => {
      const elementTop = ref?.current?.getBoundingClientRect().y;

      if (!elementTop) return;
      const diff = threshold - elementTop;

      if (threshold <= elementTop) {
        setHeight(() => "0%");
      } else if (diff >= timelineHeight) {
        setHeight(() => "100%");
      } else {
        setHeight(() => `${((diff / timelineHeight) * 100).toFixed()}%`);
      }
    };

    const throttledCount = throttle(increaseCount, 300);

    window.addEventListener("scroll", throttledCount);
    return () => window.removeEventListener("scroll", throttledCount);
  }, [timelineHeight, threshold]);

  const indicatorStyles = useSpring({ height });

  return (
    <Timeline ref={timelineRef} $indicatorVisible={indicatorVisible}>
      <DotWrapper>
        <Dot $active={height !== "0%"} />
      </DotWrapper>

      <StyledIndicator
        ref={ref}
        style={indicatorVisible ? indicatorStyles : {}}
      />
    </Timeline>
  );
};
