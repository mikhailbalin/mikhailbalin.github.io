import React, { useRef } from "react";
import { animated, useSpring, config } from "react-spring";
import { useAppState } from "../../context";
// import { useDebouncedObserver } from "../../hooks/useDebouncedObserver";
// import { useObserver } from "../../hooks/useObserver";
import { themedStyled } from "../../settings/theme";
import { NavLink } from "../NavLink";

const Nav = themedStyled(animated.nav, ({ $theme }) => ({
  height: $theme.sizing.scale1600,
  paddingTop: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale300,
  paddingRight: $theme.sizing.scale850,
  zIndex: 1,
}));

const NavLinks = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  height: $theme.sizing.scale1200,
}));

export const NavMenu = () => {
  const state = useAppState();
  const navRef = useRef<HTMLElement | null>(null);

  // const { width, height } = useObserver(navRef);

  // console.log({ width, height });

  const navStyles = useSpring({
    config: config.slow,
    width: state.menuOpen ? "100%" : "0%",
  });

  return (
    <Nav ref={navRef} style={navStyles}>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/works">Works</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};
