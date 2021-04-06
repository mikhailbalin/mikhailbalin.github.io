import React, { ReactNode } from "react";
import { themedStyled } from "../../settings/theme";

const Text = themedStyled("div", ({ $theme }) => ({
  writingMode: "vertical-lr",
  transform: "rotate(-180deg)",
  fontFamily: "'Playfair Display', sans-serif",
  color: "#d9dbd0",
  fontWeight: 700,
  fontSize: "48px",
  lineHeight: "48px",
}));

export interface VerticalTextProps {
  children: ReactNode;
}

export const VerticalText = ({ children }: VerticalTextProps) => {
  return <Text>{children}</Text>;
};
