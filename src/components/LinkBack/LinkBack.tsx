import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { StyledLink } from "./LinkBack.styles";
import { GatsbyLinkProps } from "gatsby";

export interface LinkBackProps {
  to: GatsbyLinkProps<unknown>["to"];
}

export const LinkBack = ({ to }: LinkBackProps) => {
  return (
    <StyledLink to={to}>
      <FontAwesomeIcon icon={faReply} size="lg" color="#000" />
      Back to
    </StyledLink>
  );
};
