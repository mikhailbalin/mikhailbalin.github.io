import { themedStyled } from "../../settings/theme";

export const Root = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingRight: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale600,
  backgroundColor: $theme.colors.backgroundPrimary,
  // minHeight: "100vh",
  // paddingRight: $theme.sizing.scale600,
  // paddingLeft: $theme.sizing.scale600,

  // [$theme.mediaQuery.landscape]: {
  //   paddingRight: $theme.sizing.scale1000,
  //   paddingLeft: $theme.sizing.scale1000,
  // },

  // [$theme.mediaQuery.large]: {
  //   paddingRight: 0,
  //   paddingLeft: 0,
  // },
}));

export const NavWrapper = themedStyled("div", ({ $theme }) => ({
  position: "relative",
  width: "80px",
  height: "80px",
  // margin: `${$theme.sizing.scale1000} auto`,
}));

export const AddressWrapper = themedStyled("div", {
  // padding: "2.5vw",
});

export const Header = themedStyled("header", ({ $theme }) => ({
  order: 1,
  textAlign: "center",

  // [$theme.mediaQuery.tablet]: {
  //   position: "fixed",
  //   width: "10vw",
  // },

  // [$theme.mediaQuery.desktop]: {
  //   width: "10vw",
  // },

  // [$theme.mediaQuery.large]: {
  //   width: "12vw",
  // },
}));

export const Main = themedStyled("main", ({ $theme }) => ({
  order: 3,
}));

export const Aside = themedStyled("aside", ({ $theme }) => ({
  order: 2,
  // [$theme.mediaQuery.large]: {
  //   padding: "3vw",
  //   position: "fixed",
  // },
}));
