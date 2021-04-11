import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { CustomTheme, themedStyled } from "../../settings/theme";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { NavBar } from "../../components/NavBar";
import { SidebarMedia } from "../../components/SidebarMedia";

const Main = themedStyled("main", ({ $theme }) => ({
  backgroundColor: $theme.colors.backgroundPrimary,
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
                  width: $theme.sizing.scale2500,
                  flexGrow: 0,
                },
                [$theme.mediaQuery.desktop]: {
                  width: $theme.sizing.scale2500,
                  // flexGrow: 0,
                },
                [$theme.mediaQuery.large]: {
                  width: $theme.sizing.scale2500,
                  // flexGrow: 0,
                },
              }),
            },
          }}
        >
          <NavBar />
        </FlexGridItem>

        <FlexGridItem>{children}</FlexGridItem>

        <FlexGridItem
          overrides={{
            Block: {
              style: ({ $theme }: { $theme: CustomTheme }) => ({
                [$theme.mediaQuery.large]: {
                  width: $theme.sizing.scale2000,
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
