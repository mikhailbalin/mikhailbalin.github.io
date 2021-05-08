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
