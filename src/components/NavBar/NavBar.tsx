import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import { useGlobalState } from "../../hooks/useState";
import { themedStyled, useThemedStyletron } from "../../settings/theme";
import { NavMenu } from "../NavMenu";

const StyledNavBar = themedStyled<typeof animated.div, { $width?: string }>(
  animated.div,
  ({ $theme, $width }) => ({
    display: "none",

    [$theme.mediaQuery.tablet]: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      display: "inline-flex",
      alignItems: "stretch",
      width: $width,
      height: $theme.sizing.scale2000,
      paddingLeft: $theme.sizing.scale2000,
    },
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
  const [, theme] = useThemedStyletron();

  const backgroundStyles = useSpring({
    config: config.stiff,
    width: menuOpen ? "100%" : "0%",
    opacity: menuOpen ? 1 : 0,
    onStart() {
      menuOpen && setBarWidth(undefined);
    },
    onRest() {
      !menuOpen && setBarWidth(theme.sizing.scale2000);
    },
  });

  return (
    <StyledNavBar $width={barWidth}>
      <NavMenu />

      <Background style={backgroundStyles} />
    </StyledNavBar>
  );
};
