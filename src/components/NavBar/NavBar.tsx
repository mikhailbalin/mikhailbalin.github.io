import React from "react";
import { useSpring, animated } from "react-spring";
import { useAppContext } from "../../context";
import { themedStyled } from "../../settings/theme";
import { ButtonMenu } from "../ButtonMenu";
import { NavMenu } from "../NavMenu";

const StyledNavBar = themedStyled("div", () => ({
  display: "flex",
  alignItems: "center",
  position: "fixed",
  left: 0,
  top: 0,
  margin: "3vw",
}));

const Background = themedStyled(animated.div, ({ $theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  backgroundColor: $theme.colors.white,
  boxShadow: $theme.lighting.shadow400,
}));

export const NavBar = () => {
  const [state, dispatch] = useAppContext();

  const backgroundStyles = useSpring({
    // opacity: state.menuOpen ? 1 : 0,
  });

  return (
    <StyledNavBar>
      <ButtonMenu
        onClick={(active) => dispatch({ type: "toggle_menu", payload: active })}
      />

      <NavMenu />

      <Background style={backgroundStyles} />
    </StyledNavBar>
  );
};
