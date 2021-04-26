import { HeadingXLarge } from "baseui/typography";
import React from "react";
import { themedStyled } from "../../settings/theme";

const SectionTop = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: $theme.sizing.scale500,
  marginBottom: $theme.sizing.scale900,
  borderBottom: "1px solid #d9dbd0",

  [$theme.mediaQuery.desktop]: {
    paddingBottom: $theme.sizing.scale700,
    marginBottom: $theme.sizing.scale1000,
  },
}));

export interface SectionTitleProps {
  title: string;
  children?: React.ReactNode;
}

export const SectionTitle = ({ title, children }: SectionTitleProps) => {
  return (
    <SectionTop>
      <HeadingXLarge $style={{ marginBottom: "8px" }}>{title}</HeadingXLarge>

      <div>{children}</div>
    </SectionTop>
  );
};
