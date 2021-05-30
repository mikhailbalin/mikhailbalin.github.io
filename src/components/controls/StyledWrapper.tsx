import { themedStyled } from "../../settings/theme";

export const StyledWrapper = themedStyled(
  "div",
  ({ $theme: { mediaQuery } }) => ({
    gridRowStart: "span 1",
    gridRowEnd: "span 1",
    gridColumnStart: "span 1",
    gridColumnEnd: "span 1",

    [mediaQuery.landscape]: {
      gridColumnStart: "span 2",
      gridColumnEnd: "span 2",
    },
  })
);
