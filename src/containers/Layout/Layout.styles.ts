import { themedStyled } from "../../settings/theme";

export const Root = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingRight: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale600,
  backgroundColor: $theme.colors.backgroundPrimary,

  [$theme.mediaQuery.tablet]: {
    paddingRight: "40px",
    paddingLeft: "120px",
  },

  [$theme.mediaQuery.desktop]: {
    flexDirection: "row",
    paddingRight: 0,
    paddingLeft: 0,
  },
}));

export const Header = themedStyled("header", ({ $theme }) => ({
  order: 1,
  textAlign: "center",

  [$theme.mediaQuery.tablet]: {
    zIndex: 5,
    position: "fixed",
    left: 0,
    top: 0,
    right: "auto",
    bottom: 0,
    padding: "20px",
    height: "100vh",
  },

  [$theme.mediaQuery.desktop]: {
    position: "sticky",
    padding: "3vw",
    flexShrink: 0,
  },
}));

export const NavWrapper = themedStyled("div", ({ $theme }) => ({
  position: "relative",
  width: $theme.sizing.scale2000,
  height: $theme.sizing.scale2000,
  marginBottom: $theme.sizing.scale1000,
}));

export const Main = themedStyled("main", ({ $theme }) => ({
  order: 3,

  [$theme.mediaQuery.desktop]: {
    flexGrow: 1,
    order: 2,
    paddingRight: "4vw",
    paddingLeft: "4vw",
  },
}));

export const Aside = themedStyled("aside", ({ $theme }) => ({
  order: 2,
  paddingTop: "40px",

  [$theme.mediaQuery.desktop]: {
    order: 3,
    position: "sticky",
    top: 0,
    height: "100vh",
    width: "30%",
    minWidth: "320px",
    padding: "3vw",
    flexShrink: 0,
  },
}));

export const AddressWrapper = themedStyled("div", {
  padding: "2.5vw",
});
