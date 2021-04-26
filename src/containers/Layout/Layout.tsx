import React from "react";
// import { Grid, Cell, BEHAVIOR } from "baseui/layout-grid";
import { NavBar } from "../../components/NavBar";
import { SidebarMedia } from "../../components/SidebarMedia";
import { VerticalText } from "../../components/VerticalText";
import { Address } from "../../components/Address";
import {
  Root,
  Header,
  Main,
  Aside,
  NavWrapper,
  AddressWrapper,
} from "./Layout.styles";
// import { CustomThemeProps } from "../../settings/theme";
// import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
// import { CustomThemeProps } from "../../settings/theme";
// import { useSiteMetadata } from "../../hooks/useSiteMetadata";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  // const [, theme] = useThemedStyletron();
  // const { title, description } = useSiteMetadata();

  return (
    <Root>
      <Header>
        <NavWrapper>
          <NavBar />
        </NavWrapper>

        <VerticalText>Mikhail B.</VerticalText>
      </Header>

      <Main>{children}</Main>

      <Aside>
        <SidebarMedia />

        <AddressWrapper>
          <Address showSocial size="small" />
        </AddressWrapper>
      </Aside>
    </Root>
  );
};
