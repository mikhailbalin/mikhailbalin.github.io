import { StyleObject } from "styletron-react";
import { animated } from "react-spring";
import { CustomTheme, themedStyled } from "../../settings/theme";

export const Line = themedStyled(animated.div, ({ $theme }) => ({
  position: "relative",
  width: "100%",
  height: $theme.sizing.scale0,
  backgroundColor: $theme.colors.black,
  transformStyle: "preserve-3d",
}));

export const Icon = themedStyled("div", ({ $theme }) => ({
  position: "relative",
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-between",
  width: $theme.sizing.scale900,
  height: $theme.sizing.scale900,
  padding: $theme.sizing.scale100,

  [$theme.mediaQuery.tablet]: {
    width: $theme.sizing.scale950,
    height: $theme.sizing.scale950,
  },
}));

export const Circle = themedStyled(animated.div, ({ $theme }) => ({
  display: "none",

  [$theme.mediaQuery.tablet]: {
    display: "block",
    position: "absolute",
    left: $theme.sizing.scale100,
    top: $theme.sizing.scale100,
    right: $theme.sizing.scale100,
    bottom: $theme.sizing.scale100,
    border: `${$theme.sizing.scale0} solid #d9dbd0`,
    borderRadius: "50%",
  },
}));

export const getButtonStyles = ({
  $theme,
}: {
  $theme: CustomTheme;
}): StyleObject => ({
  position: "fixed",
  top: $theme.sizing.scale200,
  right: $theme.sizing.scale200,
  width: $theme.sizing.scale1550,
  height: $theme.sizing.scale1550,
  alignItems: "center",
  zIndex: 1,
  backgroundColor: $theme.colors.white,
  flexShrink: 0,

  ":hover": {
    backgroundColor: "trasparent",
  },

  ":active": {
    backgroundColor: "trasparent",
  },

  [$theme.mediaQuery.tablet]: {
    position: "relative",
    top: 0,
    right: 0,
    backgroundColor: "transparent",
    width: $theme.sizing.scale2000,
    height: $theme.sizing.scale2000,
  },
});
