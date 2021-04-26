import { themedStyled } from "../../settings/theme";

export const Main = themedStyled("div", ({ $theme }) => ({
  backgroundColor: $theme.colors.backgroundPrimary,
}));

export const NavWrapper = themedStyled("div", ({ $theme }) => ({
  position: "relative",
  width: "80px",
  height: "80px",
  margin: `${$theme.sizing.scale1000} auto`,
}));

export const AddressWrapper = themedStyled("div", {
  padding: "2.5vw",
});

export const HeaderWrapper = themedStyled("div", ({ $theme }) => ({
  textAlign: "center",

  [$theme.mediaQuery.tablet]: {
    position: "fixed",
    width: "10vw",
  },

  [$theme.mediaQuery.desktop]: {
    width: "10vw",
  },

  [$theme.mediaQuery.large]: {
    width: "12vw",
  },
}));

export const AsideWrapper = themedStyled("div", ({ $theme }) => ({
  [$theme.mediaQuery.large]: {
    padding: "3vw",
    position: "fixed",
  },
}));
