import React, { useRef } from "react";
import { Drawer, SIZE } from "baseui/drawer";
import { useClickAway } from "react-use";
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
import { NavMenu } from "../../components/NavMenu";
import { useGlobalState } from "../../hooks/useState";
import { ButtonMenu } from "../../components/ButtonMenu";
import { CustomTheme } from "../../settings/theme";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { menuOpen, closeMenu } = useGlobalState();
  const ref = useRef(null);
  useClickAway(ref, () => closeMenu());

  return (
    <Root>
      <Header>
        <NavWrapper ref={ref}>
          <ButtonMenu />
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
