import React from "react";
// import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { themedStyled } from "../../settings/theme";

const Main = themedStyled("main", {
  // maxWidth: "800px",
  // margin: "0 auto",
});

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  // const { title, description } = useSiteMetadata();
  return <Main>{children}</Main>;
};
