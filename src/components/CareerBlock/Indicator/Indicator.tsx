import React, { useLayoutEffect, useState } from "react";
import { useSpring } from "@react-spring/web";
import throttle from "lodash/throttle";
import { DotWrapper, Dot, StyledIndicator } from "./Indicator.styles";

interface IndicatorProps {
  blockHeight: number;
  threshold: number;
}

export const Indicator = ({ blockHeight, threshold }: IndicatorProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0%");

  useLayoutEffect(() => {
    const increaseCount = () => {
      const elementTop = ref?.current?.getBoundingClientRect().y;

      if (!elementTop) return;
      const diff = threshold - elementTop;

      if (threshold <= elementTop) {
        setHeight(() => "0%");
      } else if (diff >= blockHeight) {
        setHeight(() => "100%");
      } else {
        setHeight(() => `${(diff / blockHeight) * 100}%`);
      }
    };

    const throttledCount = throttle(increaseCount, 300);

    window.addEventListener("scroll", throttledCount);
    return () => window.removeEventListener("scroll", throttledCount);
  }, [blockHeight, threshold]);

  const springProps = useSpring({
    height,
  });

  return (
    <>
      <DotWrapper>
        <Dot $active={height !== "0%"} />
      </DotWrapper>
      <StyledIndicator ref={ref} style={springProps} />
    </>
  );
};
