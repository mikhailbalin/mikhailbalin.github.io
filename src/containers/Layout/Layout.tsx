import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { CustomTheme, themedStyled } from "../../settings/theme";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { NavBar } from "../../components/NavBar";
import { SidebarMedia } from "../../components/SidebarMedia";
import { VerticalText } from "../../components/VerticalText";

const Main = themedStyled("main", ({ $theme }) => ({
  backgroundColor: $theme.colors.backgroundPrimary,
}));

const NavWrapper = themedStyled("div", ({ $theme }) => ({
  position: "relative",
  width: "80px",
  height: "80px",
  margin: `${$theme.sizing.scale1000} auto`,
}));

const Wrapper = themedStyled("div", ({ $theme }) => ({
  textAlign: "center",
  [$theme.mediaQuery.tablet]: {
    position: "fixed",
    width: "10vw",
  },
  [$theme.mediaQuery.desktop]: {
    width: "10vw",
  },
  [$theme.mediaQuery.large]: {
    width: "12vw",
  },
}));

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { title, description } = useSiteMetadata();
  console.log({ title, description });

  return (
    <Main>
      <FlexGrid
        flexGridColumnCount={[1, 1, 1, 1, 1, 2, 2, 3]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
        $style={{ minHeight: "100vh" }}
      >
        <FlexGridItem
          overrides={{
            Block: {
              style: ({ $theme }: { $theme: CustomTheme }) => ({
                [$theme.mediaQuery.tablet]: {
                  width: "10vw",
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
          <Wrapper>
            <NavWrapper>
              <NavBar />
            </NavWrapper>
            <VerticalText>Mikhail B.</VerticalText>
          </Wrapper>
        </FlexGridItem>

        <FlexGridItem>{children}</FlexGridItem>

        <FlexGridItem
          overrides={{
            Block: {
              style: ({ $theme }: { $theme: CustomTheme }) => ({
                [$theme.mediaQuery.large]: {
                  flexGrow: 0,
                  width: "30vw",
                },
              }),
            },
          }}
        >
          <SidebarMedia />
        </FlexGridItem>
      </FlexGrid>
    </Main>
  );
};
