import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { themedStyled } from "../../settings/theme";

export const StyledLink = themedStyled(Link, ({ $theme }) => ({
  display: "block",
  padding: "20px",
  // display: "flex",
  // flexDirection: "column",
  // minHeight: "22vw",
  marginBottom: "32px",
  backgroundColor: $theme.colors.backgroundSecondary,
  // transition: "box-shadow 400ms ease",
  // color: "#151515",
  textDecoration: "none",

  ":hover": {
    textDecoration: "none",
  },
}));

export const Content = themedStyled("div", () => ({
  padding: "20px 16px 4px",
  // display: "flex",
  // flexDirection: "column",
  // margin: "32px 8%",
  // justifyContent: "center",
  // alignItems: "flex-start",
}));

export const Excerpt = themedStyled("div", ({ $theme }) => ({
  display: "none",
  ...$theme.typography.font150,

  [$theme.mediaQuery.tablet]: {
    display: "block",
  },
}));

export const Figure = themedStyled("figure", ({ $theme }) => ({
  position: "relative",
  lineHeight: 0,

  [$theme.mediaQuery.tablet]: {
    width: "calc(100% / 3)",
  },
}));

export const StyledGatsbyImage = themedStyled(GatsbyImage, ({ $theme }) => ({
  height: "96vw",

  [$theme.mediaQuery.tablet]: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}));

export const Date = themedStyled("time", ({ $theme }) => ({
  display: "block",
  paddingTop: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale100,
  textTransform: "uppercase",
  color: $theme.colors.primaryA,
  ...$theme.typography.font50,

  [$theme.mediaQuery.tablet]: {
    ...$theme.typography.font150,
  },
}));
