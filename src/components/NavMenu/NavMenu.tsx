import React from "react";
import { animated, useSpring, config } from "react-spring";
import { useAppState } from "../../context";
import { themedStyled } from "../../settings/theme";
import { NavLink } from "../NavLink";

const Nav = themedStyled(animated.nav, ({ $theme }) => ({
  height: $theme.sizing.scale1600,
  paddingTop: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale300,
  zIndex: 1,
}));

const NavLinks = themedStyled("nav", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  height: $theme.sizing.scale1200,
  paddingRight: $theme.sizing.scale850,
}));

export const NavMenu = () => {
  const state = useAppState();

  const navStyles = useSpring({
    config: config.slow,
    width: state.menuOpen ? "100%" : "0%",
  });

  return (
    <Nav style={navStyles}>
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
