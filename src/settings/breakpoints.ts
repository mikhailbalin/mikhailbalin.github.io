import { Breakpoints } from "baseui/theme";

interface CustomBreakpoints extends Breakpoints {
  mobile: number;
  landscape: number;
  tablet: number;
  desktop: number;
}

type CustomMediaQuery = Record<keyof CustomBreakpoints, string>;

export type ResponsiveTheme = {
  breakpoints: CustomBreakpoints;
  mediaQuery: CustomMediaQuery;
};

export const createResponsiveTheme = (
  breakpoints: CustomBreakpoints
): ResponsiveTheme =>
  (Object.keys(breakpoints) as (keyof CustomBreakpoints)[]).reduce(
    (acc, key) => {
      acc.mediaQuery[
        key
      ] = `@media screen and (min-width: ${breakpoints[key]}px)`;
      return acc;
    },
    { breakpoints, mediaQuery: {} } as ResponsiveTheme
  );
