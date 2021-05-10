import { themedStyled } from "../../settings/theme";

export const PageHeader = themedStyled("section", ({ $theme }) => ({
  paddingTop: $theme.sizing.scale950,
  paddingBottom: $theme.sizing.scale900,

  [$theme.mediaQuery.desktop]: {
    paddingTop: $theme.sizing.scale900,
    paddingBottom: $theme.sizing.scale1200,
  },
}));
