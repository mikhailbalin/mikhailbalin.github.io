import React from "react";
import { themedStyled } from "../../settings/theme";
import { NavLink } from "../NavLink";

const Nav = themedStyled("nav", ({ $theme }) => ({
  height: $theme.sizing.scale1600,
  paddingTop: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale300,
}));

const NavLinks = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  alignItems: "center",
  height: $theme.sizing.scale1200,
  paddingRight: $theme.sizing.scale850,
}));

export const NavMenu = () => {
  return (
    <Nav>
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
