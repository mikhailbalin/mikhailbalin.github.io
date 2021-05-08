import { themedStyled } from "../../../settings/theme";

export const Root = themedStyled("footer", ({ $theme }) => ({
  paddingTop: $theme.sizing.scale600,
  borderTop: `1px solid #d9dbd0`,
}));

export const Links = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  paddingTop: $theme.sizing.scale600,
  paddingBottom: $theme.sizing.scale600,
  justifyContent: "flex-start",
  flexWrap: "wrap",
  alignItems: "flex-start",
}));

export const Legal = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  paddingTop: "3vw",
  paddingBottom: "3vw",
  color: "rgba(0, 0, 0, 0.55)",
  ...$theme.typography.font50,

  [$theme.mediaQuery.desktop]: {
    paddingTop: "2vw",
    paddingBottom: "2vw",
  },
}));

export const Divider = themedStyled("div", ({ $theme }) => ({
  width: $theme.sizing.scale100,
  height: $theme.sizing.scale100,
  marginRight: $theme.sizing.scale400,
  marginLeft: $theme.sizing.scale400,
  borderRadius: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.16)",
}));
