import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { themedStyled } from "../../settings/theme";

export const StyledLink = themedStyled(Link, ({ $theme }) => ({
  display: "block",
  padding: "20px",
  marginBottom: "32px",
  backgroundColor: $theme.colors.backgroundSecondary,
  color: $theme.colors.primaryA,
  textDecoration: "none",
  transition: `box-shadow ${$theme.animation.timing400}`,

  ":hover": {
    textDecoration: "none",
    boxShadow: $theme.lighting.shadow600,
  },

  [$theme.mediaQuery.landscape]: {
    display: "flex",
    padding: 0,
    minHeight: "22vw",
  },
}));

export const Content = themedStyled("div", ({ $theme }) => ({
  padding: "20px 16px 4px",

  [$theme.mediaQuery.landscape]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "32px",
    paddingBottom: "32px",
    paddingRight: "6%",
    paddingLeft: "6%",
  },

  [$theme.mediaQuery.desktop]: {
    paddingRight: "8%",
    paddingLeft: "8%",
  },
}));

export const Excerpt = themedStyled("div", ({ $theme }) => ({
  display: "none",
  ...$theme.typography.font150,

  [$theme.mediaQuery.tablet]: {
    color: `${$theme.colors.black}8c`,
    display: "block",
  },
}));

export const Figure = themedStyled("figure", ({ $theme }) => ({
  position: "relative",
  lineHeight: 0,

  [$theme.mediaQuery.landscape]: {
    width: "calc(100% / 3)",
  },
}));

export const StyledGatsbyImage = themedStyled(GatsbyImage, ({ $theme }) => ({
  height: "96vw",

  [$theme.mediaQuery.landscape]: {
    height: "100%",
  },
}));

export const Date = themedStyled("time", ({ $theme }) => ({
  display: "block",
  paddingTop: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale100,
  textTransform: "uppercase",
  ...$theme.typography.font50,

  [$theme.mediaQuery.tablet]: {
    ...$theme.typography.font150,
  },
}));
