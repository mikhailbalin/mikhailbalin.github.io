import React from "react";
import { themedStyled } from "../../settings/theme";

const Wrapper = themedStyled("div", ({ $theme }) => ({
  position: "relative",
}));

export const SidebarMedia = () => {
  return (
    <Wrapper>
      <img src="https://source.unsplash.com/-NjWIMfTIqI/1000x1500" />
    </Wrapper>
  );
};
