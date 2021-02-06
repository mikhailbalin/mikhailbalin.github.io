import {
  createTheme,
  createThemedStyled,
  createThemedWithStyle,
  createThemedUseStyletron,
} from "baseui";
import { Theme, ThemePrimitives } from "baseui/theme";
import { DeepPartial } from "utility-types";
import { createResponsiveTheme, ResponsiveTheme } from "./breakpoints";

const primitives: Partial<ThemePrimitives> = {
  primaryA: "#151515",
  accent: "#71a882",
  positive: "#71a882",
  primaryFontFamily: "IBM Plex Mono, monospace",
};

const overrides: DeepPartial<Theme> = {
  grid: {
    unit: "rem",
  },
  typography: {
    HeadingXSmall: { fontFamily: primitives.primaryFontFamily },
    HeadingSmall: { fontFamily: primitives.primaryFontFamily },
    HeadingMedium: { fontFamily: primitives.primaryFontFamily },
    HeadingLarge: { fontFamily: primitives.primaryFontFamily },
    HeadingXLarge: { fontFamily: primitives.primaryFontFamily },
    HeadingXXLarge: { fontFamily: primitives.primaryFontFamily },
  },
};

const theme = createTheme(primitives, overrides);

export type CustomTheme = Theme & ResponsiveTheme;

export const themedStyled = createThemedStyled<CustomTheme>();
export const themedWithStyle = createThemedWithStyle<CustomTheme>();
export const themedUseStyletron = createThemedUseStyletron<CustomTheme>();
export const customTheme: CustomTheme = {
  ...theme,
  ...createResponsiveTheme({
    small: 769,
    medium: 1024,
    large: 1216,
    mobile: 350,
    landscape: 480,
    tablet: 768,
    desktop: 992,
  }),
};
