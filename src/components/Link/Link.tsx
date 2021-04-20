import React from "react";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";
import { themedStyled } from "../../settings/theme";
import { useHover } from "../../hooks/useHover";
import { StyledLink } from "baseui/link";

const HoverLine = themedStyled<"div", { $hovered: boolean }>(
  "div",
  ({ $theme, $hovered }) => ({
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "1px",
    backgroundColor: $theme.colors.primaryA,
    transform: $hovered ? "translateX(0)" : "translateX(-100%)",
    transformOrigin: "left",
    transition: `transform ${$theme.animation.timing400}`,
  })
);

const StyledNavLink = themedStyled(GatsbyLink, ({ $theme }) => ({
  position: "relative",
  display: "block",
  marginLeft: $theme.sizing.scale550,
  marginRight: $theme.sizing.scale550,
  color: $theme.colors.primaryA,
  textDecoration: "none",
  textTransform: "uppercase",
  overflow: "hidden",
  ...$theme.typography.font160,

  ":hover": {
    color: $theme.colors.primaryA,
    textDecoration: "none",
  },

  ":last-child": {
    marginRight: $theme.sizing.scale1200,
  },
}));

export const Link = ({ children, ...rest }: GatsbyLinkProps<unknown>) => {
  const [hoverRef, hovered] = useHover<HTMLAnchorElement>();

  return (
    <StyledNavLink {...rest} ref={hoverRef}>
      {children}
      <HoverLine $hovered={hovered} />
    </StyledNavLink>
  );
};
