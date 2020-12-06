import { Breakpoints } from "baseui/theme";

interface CustomBreakpoints extends Breakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
  widescreen: number;
}

type CustomMediaQuery = Record<keyof CustomBreakpoints, string>;

export type ResponsiveTheme = {
  breakpoints: CustomBreakpoints;
  mediaQuery: CustomMediaQuery;
};

export const getResponsiveTheme = (
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
