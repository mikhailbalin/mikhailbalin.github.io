import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import { useGlobalState } from "../../hooks/useState";
import { CustomTheme, themedStyled } from "../../settings/theme";
import { ButtonMenu } from "../ButtonMenu";
import { NavMenu } from "../NavMenu";

const StyledNavBar = themedStyled(
  animated.div,
  ({ $width }: { $theme?: CustomTheme; $width?: string }) => ({
    position: "relative",
    display: "inline-flex",
    alignItems: "stretch",
    width: $width,
  })
);

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
  const [barWidth, setBarWidth] = useState<string | undefined>(undefined);

  const backgroundStyles = useSpring({
    config: config.stiff,
    width: menuOpen ? "100%" : "0%",
    opacity: menuOpen ? 1 : 0,
    onStart() {
      menuOpen && setBarWidth(undefined);
    },
    onRest() {
      !menuOpen && setBarWidth("80px");
    },
  });

  console.log({ barWidth, menuOpen });

  return (
    <StyledNavBar $width={barWidth}>
      <ButtonMenu shape="square" />

      <NavMenu />

      <Background style={backgroundStyles} />
    </StyledNavBar>
  );
};
