import React, { useRef } from "react";
import { useIntersection, useWindowScroll } from "react-use";
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
  intersection,
}: {
  intersection: IntersectionObserverEntry;
}) => {
  const { y } = useWindowScroll();
  const scrollTop = useRef(window.document.documentElement.scrollTop);

  const indicatorHeight =
    ((y - scrollTop.current) / intersection.boundingClientRect.height) * 100;

  return (
    <StyledIndicator
      style={{
        height: `${indicatorHeight < 100 ? indicatorHeight : 100}%`,
      }}
    />
  );
};

export interface CareerBlockProps {
  dates: string;
  name: string;
  description: string;
  position: string;
}

export const CareerBlock = ({
  dates,
  name,
  description,
  position,
}: CareerBlockProps) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  console.log({ intersection });

  return (
    <Root ref={intersectionRef}>
      <Date>{dates}</Date>

      <Timeline>
        <TimelineDot />
        {intersection?.intersectionRatio === 1 && (
          <ColorIndicator intersection={intersection} />
        )}
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
