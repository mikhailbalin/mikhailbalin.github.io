import React from "react";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";
import {
  CustomTheme,
  themedStyled,
  themedWithStyle,
} from "../../settings/theme";
import { useHover } from "react-use";
import {
  StyledLink as BaseLink,
  LinkProps as BaseLinkProps,
} from "baseui/link";
import { StyleObject, StyletronComponent } from "styletron-react";

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

interface LinkStylesProps {
  $theme: CustomTheme;
  $isUpper: boolean;
}

const getLinkStyles = ({ $theme, $isUpper }: LinkStylesProps): StyleObject => ({
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
  color: $theme.colors.primaryA,
  textDecoration: "none",
  textTransform: $isUpper ? "uppercase" : "none",
  overflow: "hidden",
  ...$theme.typography.font160,

  ":hover": {
    color: $theme.colors.primaryA,
    textDecoration: "none",
  },
});

const StyledGatsbyLink = themedStyled<
  typeof GatsbyLink,
  { $theme?: CustomTheme; $isUpper: boolean }
>(GatsbyLink, getLinkStyles);

const StyledBaseLink = themedWithStyle<
  StyletronComponent<BaseLinkProps>,
  { $theme?: CustomTheme; $isUpper: boolean }
>(BaseLink, getLinkStyles);

export interface LinkProps extends Pick<GatsbyLinkProps<unknown>, "to"> {
  children: React.ReactNode;
  isExternal?: boolean;
  isUpper?: boolean;
  linkStyle?: StyleObject;
}

export const Link = ({
  children,
  to,
  linkStyle,
  isUpper = false,
  isExternal = false,
}: LinkProps) => {
  const element = (hovered: boolean) => (
    <div>
      {children}
      <HoverLine $hovered={hovered} />
    </div>
  );
  const [hoverable] = useHover(element);

  console.log({ isUpper });

  return isExternal ? (
    <StyledBaseLink $isUpper={isUpper}>{hoverable}</StyledBaseLink>
  ) : (
    <StyledGatsbyLink to={to} $style={linkStyle} $isUpper={isUpper}>
      {hoverable}
    </StyledGatsbyLink>
  );
};
