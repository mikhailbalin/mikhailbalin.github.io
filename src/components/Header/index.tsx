import { Link } from "gatsby";
import React from "react";
import { StyledH1 } from "./Header.styles";

export const Header = ({ siteTitle, siteDescription }) => (
  <Link to="/">
    <StyledH1>{siteTitle}</StyledH1>
    <p>{siteDescription}</p>
  </Link>
);
