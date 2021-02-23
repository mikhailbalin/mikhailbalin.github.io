import React from "react";
import { useDispatch } from "../../context";
import { themedStyled } from "../../settings/theme";
import { ButtonMenu } from "../ButtonMenu";
import { NavMenu } from "../NavMenu";

const StyledNavBar = themedStyled("div", {
  display: "flex",
  alignItems: "stretch",
  position: "fixed",
  left: 0,
  top: 0,
  margin: "3vw",
});

export const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <StyledNavBar>
      <ButtonMenu
        shape="square"
        onClick={(active) => dispatch({ type: "toggle_menu", payload: active })}
      />

      <NavMenu />
    </StyledNavBar>
  );
};
