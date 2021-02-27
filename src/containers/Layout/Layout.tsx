import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { themedStyled } from "../../settings/theme";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

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
        $style={{ height: "100vh" }}
      >
        <FlexGridItem>1</FlexGridItem>
        <FlexGridItem>{children}</FlexGridItem>
        <FlexGridItem>3</FlexGridItem>
      </FlexGrid>
    </Main>
  );
};
