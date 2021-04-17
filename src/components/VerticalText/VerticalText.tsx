import React, { ReactNode } from "react";
import { themedStyled } from "../../settings/theme";

const Text = themedStyled("span", ({ $theme }) => ({
  writingMode: "vertical-lr",
  transform: "rotate(-180deg)",
  fontFamily: "'Playfair Display', sans-serif",
  color: "#d9dbd0",
  fontWeight: 700,
  fontSize: "72px",
  lineHeight: 1,
  position: "sticky",
  whiteSpace: "nowrap",
}));

export interface VerticalTextProps {
  children: ReactNode;
}

export const VerticalText = ({ children }: VerticalTextProps) => {
  return <Text>{children}</Text>;
};
