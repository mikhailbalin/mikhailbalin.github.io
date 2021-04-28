import { animated } from "@react-spring/web";
import { themedStyled } from "../../settings/theme";

export const CircleOuter = themedStyled("div", ({ $theme }) => ({
  position: "absolute",
  left: $theme.sizing.scale300,
  top: $theme.sizing.scale300,
  right: $theme.sizing.scale300,
  bottom: $theme.sizing.scale300,
  borderRadius: "50%",
  backgroundColor: "#ccc",
  overflow: "hidden",
}));

export const CircleInner = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  left: $theme.sizing.scale0,
  top: $theme.sizing.scale0,
  right: $theme.sizing.scale0,
  bottom: $theme.sizing.scale0,
  borderRadius: "50%",
  backgroundColor: $theme.colors.backgroundPrimary,
}));

export const ProgressBlock = themedStyled<
  "div",
  {
    $left?: string | number;
    $right?: string | number;
    $top?: string | number;
    $bottom?: string | number;
  }
>("div", ({ $left, $right, $top, $bottom }) => ({
  position: "absolute",
  width: "50%",
  height: "50%",
  left: $left,
  right: $right,
  top: $top,
  bottom: $bottom,
  overflow: "hidden",
}));

export const Loader = themedStyled<
  "div",
  {
    $origin: string;
  }
>("div", ({ $origin }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  transformOrigin: $origin,
  backgroundColor: "#000",
  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
}));
