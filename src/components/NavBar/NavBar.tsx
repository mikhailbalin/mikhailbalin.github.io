import React, { useRef, useState } from "react";
import { animated, config, useSpring } from "react-spring";
import { useClickAway } from "react-use";
// import { Drawer } from "baseui/drawer";
import { useGlobalState } from "../../hooks/useState";
import { themedStyled, useThemedStyletron } from "../../settings/theme";
import { ButtonMenu } from "../ButtonMenu";
import { NavMenu } from "../NavMenu";

const StyledNavBar = themedStyled<typeof animated.div, { $width?: string }>(
  animated.div,
  ({ $theme, $width }) => ({
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    display: "inline-flex",
    alignItems: "stretch",
    width: $width,
    height: $theme.sizing.scale2000,
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
  const ref = useRef(null);
  const { menuOpen, closeMenu } = useGlobalState();
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

  useClickAway(ref, () => closeMenu());

  return (
    <StyledNavBar ref={ref} $width={barWidth}>
      <ButtonMenu shape="square" />

      <NavMenu />

      <Background style={backgroundStyles} />

      {/* <Drawer isOpen={menuOpen} autoFocus onClose={() => void 0}>
        <div>drawer content</div>
      </Drawer> */}
    </StyledNavBar>
  );
};
