import React from "react";
import { Link } from "gatsby";
import { themedStyled } from "../../settings/theme";

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

const StyledNavLink = themedStyled(Link, ({ $theme }) => ({
  margin: `${$theme.sizing.scale0} ${$theme.sizing.scale550}`,
  padding: `${$theme.sizing.scale0} 0`,
  color: $theme.colors.primaryA,
  textDecoration: "none",
  textTransform: "uppercase",
  ...$theme.typography.font160,
}));

export const NavMenu = () => {
  return (
    <Nav>
      <NavLinks>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/works">Works</StyledNavLink>
        <StyledNavLink to="/testimonials">Testimonials</StyledNavLink>
        <StyledNavLink to="/blog">Blog</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </NavLinks>
    </Nav>
  );
};
