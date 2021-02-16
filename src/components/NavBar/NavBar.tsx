import React from "react";
import { themedStyled } from "../../settings/theme";
import { ButtonMenu } from "../ButtonMenu";
import { NavMenu } from "../NavMenu";

const StyledNavBar = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "fixed",
  left: 0,
  top: 0,
  margin: "3vw",
  backgroundColor: $theme.colors.white,
}));

export const NavBar = () => {
  return (
    <StyledNavBar>
      <ButtonMenu />
      <NavMenu />
    </StyledNavBar>
  );
};
