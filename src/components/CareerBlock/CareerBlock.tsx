import React from "react";
import { MyHeadingSmall, MyParagraphMedium } from "../typography";
import { Root, Date, JobInfo, JobPosition } from "./CareerBlock.styles";
import { Indicator, IndicatorProps } from "./Indicator";

export interface CareerBlockProps extends IndicatorProps {
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
  ...rest
}: CareerBlockProps) => (
  <Root>
    <Date>{dates}</Date>

    <Indicator {...rest} />

    <JobInfo>
      <MyHeadingSmall>{name}</MyHeadingSmall>

      <MyParagraphMedium color="rgba(0, 0, 0, 0.55)">
        {description}
      </MyParagraphMedium>

      <JobPosition>{position}</JobPosition>
    </JobInfo>
  </Root>
);
