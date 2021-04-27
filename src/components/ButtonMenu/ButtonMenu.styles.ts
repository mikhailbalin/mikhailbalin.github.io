import { StyleObject } from "styletron-react";
import { animated } from "react-spring";
import { CustomTheme, themedStyled } from "../../settings/theme";
import { SHAPE } from "./ButtonMenu.types";

export const Line = themedStyled(animated.div, ({ $theme }) => ({
  position: "relative",
  width: "100%",
  height: $theme.sizing.scale0,
  backgroundColor: $theme.colors.black,
  transformStyle: "preserve-3d",
}));

export const Icon = themedStyled<"div", { $shape: SHAPE }>(
  "div",
  ({ $theme, $shape }) => {
    const size =
      $shape === "circle" ? $theme.sizing.scale900 : $theme.sizing.scale950;

    return {
      position: "relative",
      flexDirection: "column",
      display: "flex",
      justifyContent: "space-between",
      width: size,
      height: size,
      padding: $theme.sizing.scale100,
    };
  }
);

export const Circle = themedStyled(animated.div, ({ $theme }) => ({
  position: "absolute",
  left: $theme.sizing.scale100,
  top: $theme.sizing.scale100,
  right: $theme.sizing.scale100,
  bottom: $theme.sizing.scale100,
  border: `${$theme.sizing.scale0} solid #d9dbd0`,
  borderRadius: "50%",
}));

export const getButtonStyles = ({
  $theme,
  $shape,
}: {
  $theme: CustomTheme;
  $shape: SHAPE;
}): StyleObject => {
  const size =
    $shape === "circle" ? $theme.sizing.scale550 : $theme.sizing.scale2000;

  return {
    position: "relative",
    width: size,
    height: size,
    alignItems: "center",
    zIndex: 1,
    backgroundColor: $shape === "circle" ? $theme.colors.white : "transparent",
    flexShrink: 0,

    ":hover": {
      backgroundColor: "trasparent",
    },

    ":active": {
      backgroundColor: "trasparent",
    },
  };
};
