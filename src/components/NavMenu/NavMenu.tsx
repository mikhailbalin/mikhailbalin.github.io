import React from "react";
import { animated, useSpring, config } from "react-spring";
import { useGlobalState } from "../../hooks/useState";
import { themedStyled } from "../../settings/theme";
import { Link } from "../Link";

const Nav = themedStyled(animated.nav, ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingTop: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale300,
  zIndex: 1,
}));

export const NavMenu = () => {
  const { menuOpen } = useGlobalState();

  const navStyles = useSpring({
    config: config.slow,
    width: menuOpen ? "100%" : "0%",
  });

  return (
    <Nav style={navStyles}>
      <Link to="/">Home</Link>
      <Link to="/works">Works</Link>
      <Link to="/testimonials">Testimonials</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  );
};
