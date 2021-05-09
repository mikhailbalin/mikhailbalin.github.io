import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { StyledLink, Circle, Text, Wrapper } from "./LinkBack.styles";
import { GatsbyLinkProps } from "gatsby";
import { useHoverDirty } from "react-use";
import { useSpring } from "@react-spring/web";

export interface LinkBackProps {
  to: GatsbyLinkProps<unknown>["to"];
}

export const LinkBack = ({ to }: LinkBackProps) => {
  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  const circleStyles = useSpring({
    transform: isHovering ? "scale(1.2)" : "scale(1)",
  });

  return (
    <StyledLink ref={ref} to={to}>
      <Wrapper>
        <FontAwesomeIcon icon={faReply} color="#000" />
        <Circle style={circleStyles} />
      </Wrapper>

      <Text>Back to</Text>
    </StyledLink>
  );
};
