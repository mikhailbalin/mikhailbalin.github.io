import React from "react";
import { Drawer, SIZE } from "baseui/drawer";
import { NavBar } from "../../components/NavBar";
import { SidebarMedia } from "../../components/SidebarMedia";
import { VerticalText } from "../../components/VerticalText";
import { Address } from "../../components/Address";
import { Root, Header, Main, Aside, AddressWrapper } from "./Layout.styles";
import { NavMenu } from "../../components/NavMenu";
import { useGlobalState } from "../../hooks/useState";
import { CustomTheme } from "../../settings/theme";
import { ButtonScroll } from "../../components/ButtonScroll";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { menuOpen } = useGlobalState();

  return (
    <Root>
      <Header>
        <NavBar />

        <VerticalText>Mikhail B.</VerticalText>
      </Header>

      <Main>
        <div>{children}</div>

        <Footer />
      </Main>

      <Aside>
        <SidebarMedia />

        <AddressWrapper>
          <Address showSocial size="small" />
        </AddressWrapper>
      </Aside>

      <ButtonScroll />

      <Drawer
        isOpen={menuOpen}
        renderAll
        size={SIZE.auto}
        autoFocus
        showBackdrop={false}
        overrides={{
          Root: {
            style: ({ $theme }) => {
              const theme = $theme as CustomTheme;
              return {
                [theme.mediaQuery.tablet]: {
                  display: "none",
                },
              };
            },
          },
          DrawerBody: {
            style: ({ $theme }) => {
              const theme = $theme as CustomTheme;
              return {
                margin: 0,
                padding: `${theme.sizing.scale3100} ${theme.sizing.scale900} ${theme.sizing.scale900}`,
              };
            },
          },
          Close: {
            component: () => null,
          },
        }}
      >
        <NavMenu />
      </Drawer>
    </Root>
  );
};
