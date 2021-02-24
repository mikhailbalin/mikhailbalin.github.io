import React, { useRef } from "react";
import { animated, useSpring, config } from "react-spring";
import { useAppState } from "../../context";
import { themedStyled } from "../../settings/theme";
import { NavLink } from "../NavLink";

const Nav = themedStyled(animated.nav, ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale300,
  zIndex: 1,
}));

export const NavMenu = () => {
  const state = useAppState();
  const navRef = useRef<HTMLElement | null>(null);

  const navStyles = useSpring({
    config: config.slow,
    width: state.menuOpen ? "100%" : "0%",
  });

  return (
    <Nav ref={navRef} style={navStyles}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/works">Works</NavLink>
      <NavLink to="/testimonials">Testimonials</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};
