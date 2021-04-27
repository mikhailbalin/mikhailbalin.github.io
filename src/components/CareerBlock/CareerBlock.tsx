import React from "react";
import { MyHeadingSmall, MyParagraphMedium } from "../typography";
import {
  Root,
  Date,
  Timeline,
  TimelineDot,
  TimelineColor,
  JobInfo,
  JobPosition,
} from "./CareerBlock.styles";

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
  return (
    <Root>
      <Date>{dates}</Date>

      <Timeline>
        <TimelineDot />
        <TimelineColor />
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
