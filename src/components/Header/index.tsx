import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: rebeccapurple;
`;

export const Header = ({ siteTitle, siteDescription }) => (
  <Link to="/">
    <StyledH1>{siteTitle}</StyledH1>
    <p>{siteDescription}</p>
  </Link>
);
