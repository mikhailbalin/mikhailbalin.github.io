import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { CustomThemeProps, useThemedStyletron } from "../../settings/theme";
import { NavBar } from "../../components/NavBar";
import { SidebarMedia } from "../../components/SidebarMedia";
import { VerticalText } from "../../components/VerticalText";
import { Address } from "../../components/Address";
import {
  AddressWrapper,
  AsideWrapper,
  HeaderWrapper,
  Main,
  NavWrapper,
} from "./Layout.styles";
// import { useSiteMetadata } from "../../hooks/useSiteMetadata";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [, theme] = useThemedStyletron();
  // const { title, description } = useSiteMetadata();

  return (
    <Main>
      <FlexGrid
        flexGridColumnCount={[1, 1, 1, 1, 1, 2, 2, 3]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
        $style={{
          minHeight: "100vh",
          paddingRight: theme.sizing.scale600,
          paddingLeft: theme.sizing.scale600,

          [theme.mediaQuery.landscape]: {
            paddingRight: theme.sizing.scale1000,
            paddingLeft: theme.sizing.scale1000,
          },

          [theme.mediaQuery.large]: {
            paddingRight: 0,
            paddingLeft: 0,
          },
        }}
      >
        <FlexGridItem
          as="header"
          overrides={{
            Block: {
              style: ({ $theme }: CustomThemeProps) => ({
                order: 1,

                [$theme.mediaQuery.tablet]: {
                  width: "12vw",
                  flexGrow: 0,
                },

                [$theme.mediaQuery.desktop]: {
                  width: "10vw",
                },

                [$theme.mediaQuery.large]: {
                  width: "12vw",
                },
              }),
            },
          }}
        >
          <HeaderWrapper>
            <NavWrapper>
              <NavBar />
            </NavWrapper>

            <VerticalText>Mikhail B.</VerticalText>
          </HeaderWrapper>
        </FlexGridItem>

        <FlexGridItem
          as="main"
          overrides={{
            Block: {
              style: ({ $theme }: CustomThemeProps) => ({
                order: 3,

                [$theme.mediaQuery.tablet]: {
                  order: 2,
                },
              }),
            },
          }}
        >
          {children}
        </FlexGridItem>

        <FlexGridItem
          as="aside"
          overrides={{
            Block: {
              style: ({ $theme }: CustomThemeProps) => ({
                order: 2,

                [$theme.mediaQuery.large]: {
                  flexGrow: 0,
                  width: "30vw",
                },
              }),
            },
          }}
        >
          <AsideWrapper>
            <SidebarMedia />

            <AddressWrapper>
              <Address showSocial size="small" />
            </AddressWrapper>
          </AsideWrapper>
        </FlexGridItem>
      </FlexGrid>
    </Main>
  );
};
