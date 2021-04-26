import { Link } from "gatsby";
import { themedStyled } from "../../settings/theme";

export const StyledLink = themedStyled(Link, () => ({
  display: "flex",
  minHeight: "22vw",
  marginBottom: "32px",
  backgroundColor: "#e1e3d9",
  transition: "box-shadow 400ms ease",
  color: "#151515",
  textDecoration: "none",

  ":hover": {
    textDecoration: "none",
  },
}));

export const Content = themedStyled("div", () => ({
  display: "flex",
  flexDirection: "column",
  margin: "32px 8%",
  justifyContent: "center",
  alignItems: "flex-start",
}));

export const Excerpt = themedStyled("div", ({ $theme }) => ({
  ...$theme.typography.font150,
}));
