import { themedStyled } from "../../settings/theme";

export const Career = themedStyled("div", ({ $theme }) => ({
  maxWidth: "770px",
  marginBottom: `-${$theme.sizing.scale1400}`,
  paddingTop: $theme.sizing.scale700,
}));
