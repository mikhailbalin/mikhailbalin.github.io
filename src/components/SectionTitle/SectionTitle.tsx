import { HeadingXLarge } from "baseui/typography";
import React from "react";

interface SectionTitleProps {
  title: string;
  children?: React.ReactNode;
}

export const SectionTitle = ({ title, children }: SectionTitleProps) => {
  return (
    <div>
      <HeadingXLarge>{title}</HeadingXLarge>
      {children}
    </div>
  );
};
