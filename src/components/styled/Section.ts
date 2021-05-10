import { themedStyled } from "../../settings/theme";

export const Section = themedStyled("section", ({ $theme }) => ({
  paddingBottom: $theme.sizing.scale1600,

  [$theme.mediaQuery.tablet]: {
    paddingBottom: $theme.sizing.scale2000,
  },

  [$theme.mediaQuery.desktop]: {
    paddingBottom: $theme.sizing.scale2500,
  },
}));
