import React from "react";
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

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
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
