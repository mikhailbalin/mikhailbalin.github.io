import React from "react";
import { FlexGrid, FlexGridItem, FlexGridItemProps } from "baseui/flex-grid";
import { themedStyled } from "../../settings/theme";
// import { useSiteMetadata } from "../../hooks/useSiteMetadata";

const Main = themedStyled("main", {});

const itemProps: FlexGridItemProps = {
  backgroundColor: "mono300",
};

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  // const { title, description } = useSiteMetadata();
  return (
    <Main>
      <FlexGrid
        flexGridColumnCount={[1, 1, 1, 1, 1, 2, 2, 3]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        <FlexGridItem {...itemProps}>1</FlexGridItem>
        <FlexGridItem {...itemProps}>{children}</FlexGridItem>
        <FlexGridItem {...itemProps}>3</FlexGridItem>
      </FlexGrid>
    </Main>
  );
};
