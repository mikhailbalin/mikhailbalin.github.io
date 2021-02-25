import React from "react";
import { animated, config, useSpring } from "react-spring";
import { useGlobalState } from "../../hooks/useState";
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
  const { menuOpen } = useGlobalState();

  const backgroundStyles = useSpring({
    config: config.stiff,
    width: menuOpen ? "100%" : "0%",
    opacity: menuOpen ? 1 : 0,
  });

  return (
    <StyledNavBar>
      <ButtonMenu shape="square" />

      <NavMenu />

      <Background style={backgroundStyles} />
    </StyledNavBar>
  );
};
