import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { StyledLink, Circle, Text } from "./LinkBack.styles";
import { GatsbyLinkProps } from "gatsby";

export interface LinkBackProps {
  to: GatsbyLinkProps<unknown>["to"];
}

export const LinkBack = ({ to }: LinkBackProps) => {
  return (
    <StyledLink to={to}>
      <Circle>
        <FontAwesomeIcon icon={faReply} color="#000" />
      </Circle>

      <Text>Back to</Text>
    </StyledLink>
  );
};
