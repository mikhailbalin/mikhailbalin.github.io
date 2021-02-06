import React from "react";
import { AppStyles, TopBarWrapper } from "./layout.styles";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { Header } from "../Header";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { StatefulSelect as Search, TYPE } from "baseui/select";
import "../../styles/globals.css";

const options = {
  options: [
    { id: "AliceBlue", color: "#F0F8FF" },
    { id: "AntiqueWhite", color: "#FAEBD7" },
    { id: "Aqua", color: "#00FFFF" },
    { id: "Aquamarine", color: "#7FFFD4" },
    { id: "Azure", color: "#F0FFFF" },
    { id: "Beige", color: "#F5F5DC" },
    { id: "Bisque", color: "#FFE4C4" },
    { id: "Black", color: "#000000" },
  ],
  labelKey: "id",
  valueKey: "color",
  placeholder: "Search colors",
  maxDropdownHeight: "300px",
};

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <TopBarWrapper>
        <HeaderNavigation>
          <NavigationList $align={ALIGN.left}>
            <NavigationItem>Uber</NavigationItem>
          </NavigationList>
          <NavigationList $align={ALIGN.center} />
          <NavigationList $align={ALIGN.right}>
            <NavigationItem>
              <StyledLink href="#search-link1">Tab Link One</StyledLink>
            </NavigationItem>
          </NavigationList>
          <NavigationList $align={ALIGN.right}>
            <NavigationItem style={{ width: "200px" }}>
              <Search
                {...options}
                type={TYPE.search}
                getOptionLabel={(props) =>
                  props.option && props.option.id ? props.option.id : null
                }
                onChange={(e) => {
                  console.log(e);
                }}
              />
            </NavigationItem>
          </NavigationList>
        </HeaderNavigation>
      </TopBarWrapper>
      <AppStyles>
        <Header siteTitle={title} siteDescription={description} />
        {children}
      </AppStyles>
    </>
  );
};
