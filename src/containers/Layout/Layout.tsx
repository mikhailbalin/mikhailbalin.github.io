import React from "react";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { Header } from "../../components/Header";
import { themedStyled } from "../../settings/theme";

const AppStyles = themedStyled("main", {
  // maxWidth: "800px",
  // margin: "0 auto",
});

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  );
};
