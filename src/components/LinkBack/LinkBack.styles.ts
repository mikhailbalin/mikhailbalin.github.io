import { animated } from "@react-spring/web";
import { Link } from "gatsby";
import { CustomTheme, themedStyled } from "../../settings/theme";

export const StyledLink = themedStyled(Link, ({ $theme }) => ({
  display: "none",

  [$theme.mediaQuery.desktop]: {
    display: "inline-flex",
    alignItems: "center",
    paddingTop: $theme.sizing.scale200,
    paddingBottom: $theme.sizing.scale200,
    color: $theme.colors.primaryA,
    cursor: "pointer",
    textDecoration: "none",
    marginTop: "3vw",
  },
}));

export const Wrapper = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: $theme.sizing.scale1100,
  height: $theme.sizing.scale1100,
  marginTop: $theme.sizing.scale200,
  marginRight: $theme.sizing.scale200,
  marginBottom: $theme.sizing.scale200,
}));

export const Circle = themedStyled<
  typeof animated.div,
  { $theme?: CustomTheme }
>(animated.div, ({ $theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  border: `${$theme.sizing.scale0} solid #d9dbd0`,
  borderRadius: "50%",
}));

export const Text = themedStyled("div", ({ $theme }) => ({
  marginLeft: $theme.sizing.scale500,
  ...$theme.typography.font160,
}));
