import React from "react";
import { animated, useSpring, config } from "react-spring";
import { useGlobalState } from "../../hooks/useState";
import { themedStyled, useThemedStyletron } from "../../settings/theme";
import { Link } from "../Link";

const Nav = themedStyled(animated.nav, ({ $theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  zIndex: 1,

  [$theme.mediaQuery.tablet]: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: $theme.sizing.scale300,
    paddingBottom: $theme.sizing.scale300,
  },
}));

const navLinks = {
  "/": "Home",
  "/works": "Works",
  "/testimonials": "Testimonials",
  "/blog": "Blog",
  "/about": "About",
  "/contact": "Contact",
} as const;

export const NavMenu = () => {
  const [, theme] = useThemedStyletron();
  const { menuOpen } = useGlobalState();

  const navStyles = useSpring({
    config: config.slow,
    width: menuOpen ? "100%" : "0%",
  });

  return (
    <Nav style={navStyles}>
      {Object.entries(navLinks).map(([link, name]) => (
        <Link
          key={name}
          to={link}
          size="small"
          isUpper
          linkStyle={{
            marginTop: "1.5vw",
            marginBottom: "1.5vw",
            ...theme.typography.font450,

            [theme.mediaQuery.tablet]: {
              marginTop: 0,
              marginBottom: 0,
              marginLeft: theme.sizing.scale550,
              marginRight: theme.sizing.scale550,
              ...theme.typography.font270,

              ":last-child": {
                marginRight: theme.sizing.scale1200,
              },
            },
          }}
        >
          {name}
        </Link>
      ))}
    </Nav>
  );
};
