import React, { useRef, MutableRefObject } from "react";
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

const getScrollBehavior = (
  intersection: IntersectionObserverEntry | null,
  intersectionRef: MutableRefObject<IntersectionObserverEntry | null>,
  cb: () => void
): { direction: "up" | "down"; state: "enter" | "leave" } | undefined => {
  if (intersection && intersectionRef.current) {
    const {
      boundingClientRect: { y: previousY },
      intersectionRatio: previousRatio,
    } = intersectionRef.current;

    const {
      boundingClientRect: { y: currentY },
      intersectionRatio: currentRatio,
      isIntersecting: currentIsIntersecting,
    } = intersection;

    const isEntering = currentRatio > previousRatio && currentIsIntersecting;

    if (currentY < previousY) {
      if (isEntering) {
        return { direction: "down", state: "enter" };
      } else {
        return { direction: "down", state: "leave" };
      }
    } else if (currentY > previousY) {
      if (isEntering) {
        return { direction: "up", state: "enter" };
      } else {
        return { direction: "up", state: "leave" };
      }
    }

    cb();

    return undefined;
  } else {
    return undefined;
  }
};

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

  const scrollBehavior = getScrollBehavior(
    intersection,
    intersectionRef,
    () => (intersectionRef.current = intersection)
  );
  const isIntersecting = intersection?.intersectionRatio === 1;
  const isScrolled =
    intersection &&
    scrollBehavior &&
    scrollBehavior.direction === "down" &&
    scrollBehavior.state === "leave";

  return (
    <Root ref={rootRef}>
      <Date>{dates}</Date>

      <Timeline>
        <TimelineDot />
        {(isIntersecting || isScrolled) && (
          <ColorIndicator intersection={intersection!} />
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
