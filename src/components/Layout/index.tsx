import React from "react";
import { AppStyles } from "./Layout.styles";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { Header } from "../Header";

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  );
};
