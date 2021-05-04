import throttle from "lodash/throttle";
import React, { useLayoutEffect, useState } from "react";
import { useMeasure } from "react-use";
import { MyHeadingSmall, MyParagraphMedium } from "../typography";
import {
  Root,
  Date,
  Timeline,
  TimelineDot,
  StyledIndicator,
  JobInfo,
  JobPosition,
} from "./CareerBlock.styles";

const ColorIndicator = ({
  blockHeight,
  threshold,
}: {
  blockHeight: number;
  threshold: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const increaseCount = () => {
      const elementTop = ref?.current?.getBoundingClientRect().y;

      if (!elementTop) return;
      const diff = threshold - elementTop;

      if (threshold <= elementTop) {
        setHeight(() => 0);
      } else if (diff >= blockHeight) {
        setHeight(() => 100);
      } else {
        setHeight(() => (diff / blockHeight) * 100);
      }
    };

    const throttledCount = throttle(increaseCount, 100);
    window.addEventListener("scroll", throttledCount);
    return () => window.removeEventListener("scroll", throttledCount);
  }, [blockHeight, threshold]);

  return (
    <>
      <TimelineDot $active={height !== 0} />
      <StyledIndicator
        ref={ref}
        style={{
          height: `${height}%`,
        }}
      />
    </>
  );
};

export interface CareerBlockProps {
  dates: string;
  name: string;
  description: string;
  position: string;
  threshold: number;
}

export const CareerBlock = ({
  dates,
  name,
  description,
  position,
  threshold,
}: CareerBlockProps) => {
  const [rootRef, { height }] = useMeasure<HTMLDivElement>();

  return (
    <Root ref={rootRef}>
      <Date>{dates}</Date>

      <Timeline>
        <ColorIndicator blockHeight={height} threshold={threshold} />
      </Timeline>

      <JobInfo>
        <MyHeadingSmall>{name}</MyHeadingSmall>

        <MyParagraphMedium color="rgba(0, 0, 0, 0.55)">
          {description}
        </MyParagraphMedium>

        <JobPosition>{position}</JobPosition>
      </JobInfo>
    </Root>
  );
};
