import React from "react";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";
import { themedStyled } from "../../settings/theme";
import { useHover } from "react-use";
import { StyledLink as BaseLink } from "baseui/link";
import { StyleObject } from "styletron-react";

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

const StyledGatsbyLink = themedStyled(GatsbyLink, ({ $theme }) => ({
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
  color: $theme.colors.primaryA,
  textTransform: "uppercase",
  overflow: "hidden",
  ...$theme.typography.font160,

  ":hover": {
    color: $theme.colors.primaryA,
    textDecoration: "none",
  },
}));

export interface LinkProps extends Pick<GatsbyLinkProps<unknown>, "to"> {
  children: React.ReactNode;
  isExternal?: boolean;
  linkStyle?: StyleObject;
}

export const Link = ({ children, to, linkStyle }: LinkProps) => {
  const element = (hovered: boolean) => (
    <div>
      {children}
      <HoverLine $hovered={hovered} />
    </div>
  );
  const [hoverable] = useHover(element);

  return (
    <StyledGatsbyLink to={to} $style={linkStyle}>
      {hoverable}
    </StyledGatsbyLink>
  );
};
