import { Link } from "gatsby";
import { themedStyled } from "../../settings/theme";

export const StyledLink = themedStyled(Link, ({ $theme }) => ({
  display: "none",

  [$theme.mediaQuery.desktop]: {
    display: "flex",
    alignItems: "center",
    paddingTop: $theme.sizing.scale200,
    paddingBottom: $theme.sizing.scale200,
    color: $theme.colors.primaryA,
    cursor: "pointer",
    textDecoration: "none",
  },
}));

export const Circle = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `${$theme.sizing.scale0} solid #d9dbd0`,
  borderRadius: "50%",
  width: $theme.sizing.scale1000,
  height: $theme.sizing.scale1000,
  margin: $theme.sizing.scale200,
}));

export const Text = themedStyled("div", ({ $theme }) => ({
  marginLeft: $theme.sizing.scale500,
  ...$theme.typography.font160,
}));
