import React from "react";
import { useMeasure } from "react-use";
import { MyHeadingSmall, MyParagraphMedium } from "../typography";
import {
  Root,
  Date,
  Timeline,
  JobInfo,
  JobPosition,
} from "./CareerBlock.styles";
import { Indicator } from "./Indicator";

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
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  return (
    <Root>
      <Date>{dates}</Date>

      <Timeline ref={ref}>
        <Indicator blockHeight={height} threshold={threshold} />
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
