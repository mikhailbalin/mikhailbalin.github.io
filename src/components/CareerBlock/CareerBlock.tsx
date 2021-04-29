import React, { useRef, useState } from "react";
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
  const [downLeave, setDownLeave] = useState(false);
  const rootRef = useRef(null);
  const intersectionRef = useRef<IntersectionObserverEntry | null>(null);
  const intersection = useIntersection(rootRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  if (!intersectionRef?.current) {
    intersectionRef.current = intersection;
  }

  // console.log({ intersection, intersectionRef: intersectionRef?.current });

  if (intersection && intersectionRef?.current) {
    const previousY = intersectionRef.current.boundingClientRect.y;
    const previousRatio = intersectionRef.current.intersectionRatio;
    const currentY = intersection.boundingClientRect.y;
    const currentRatio = intersection.intersectionRatio;
    const isIntersecting = intersection.isIntersecting;

    if (currentY < previousY) {
      if (currentRatio > previousRatio && isIntersecting) {
        console.log("Scrolling down enter");
      } else {
        console.log("Scrolling down leave");
        setDownLeave(true);
      }
    } else if (currentY > previousY && isIntersecting) {
      if (currentRatio < previousRatio) {
        console.log("Scrolling up leave");
      } else {
        console.log("Scrolling up enter");
      }
    }

    intersectionRef.current = intersection;
  }

  // console.log({ [name]: intersection });

  return (
    <Root ref={rootRef}>
      <Date>{dates}</Date>

      <Timeline>
        <TimelineDot />
        {(intersection?.intersectionRatio === 1 ||
          (intersection && downLeave)) && (
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
