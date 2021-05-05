import { animated } from "@react-spring/web";
import { themedStyled } from "../../../settings/theme";

export const Timeline = themedStyled<"div", { $indicatorVisible: boolean }>(
  "div",
  ({ $theme, $indicatorVisible }) => ({
    position: "relative",
    display: "flex",
    width: $theme.sizing.scale0,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: $indicatorVisible ? "#d9dbd0" : "transparent",
    alignSelf: "stretch",
    justifySelf: "center",
    gridArea: "Timeline-Mobile",

    [$theme.mediaQuery.large]: {
      gridArea: "Timeline",
    },
  })
);

export const DotWrapper = themedStyled("div", ({ $theme }) => ({
  position: "absolute",
  top: 0,
  right: "auto",
  bottom: "auto",
  left: "auto",
  zIndex: 2,
  paddingTop: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale300,
  backgroundColor: $theme.colors.backgroundPrimary,
}));

export const Dot = themedStyled<"div", { $active: boolean }>(
  "div",
  ({ $theme, $active }) => ({
    width: $theme.sizing.scale550,
    height: $theme.sizing.scale550,
    borderStyle: "solid",
    borderWidth: $theme.sizing.scale0,
    borderColor: $theme.colors.positive,
    borderRadius: "50%",
    backgroundColor: $active
      ? $theme.colors.positive
      : $theme.colors.backgroundPrimary,
    boxShadow: $theme.lighting.shadow600,
    transform: `scale(${$active ? 1.2 : 1})`,
    transitionProperty: "transform, background-color",
    transitionDuration: $theme.animation.timing400,
    transitionTimingFunction: $theme.animation.easeInOutCurve,
  })
);

export const StyledIndicator = themedStyled(animated.div, ({ $theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  right: 0,
  bottom: "auto",
  backgroundColor: $theme.colors.positive,
}));
