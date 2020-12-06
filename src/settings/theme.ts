import {
  createTheme,
  createThemedStyled,
  createThemedWithStyle,
  createThemedUseStyletron,
} from "baseui";
import { Theme, ThemePrimitives } from "baseui/theme";
import { DeepPartial } from "utility-types";
import { getResponsiveTheme, ResponsiveTheme } from "./breakpoints";

const primitives: Partial<ThemePrimitives> = {
  positive: "#3ca785",
  warning: "#fcdb4c",
  negative: "#ff6a53",
  primaryFontFamily: "IBM Plex Mono, monospace",
};

const overrides: DeepPartial<Theme> = {
  typography: {
    HeadingXXLarge: { fontFamily: "'Playfair Display', serif" },
    HeadingXLarge: { fontFamily: "'Playfair Display', serif" },
    HeadingXSmall: { fontFamily: "'Playfair Display', serif" },
    HeadingLarge: { fontFamily: "'Playfair Display', serif" },
    HeadingMedium: { fontFamily: "'Playfair Display', serif" },
    HeadingSmall: { fontFamily: "'Playfair Display', serif" },
  },
};

const theme = createTheme(primitives, overrides);

const customColors = {
  brandColor1: "#fddfd6",
  brandColor2: "#ffb59f",
  lightColor: "#fcfaf9",
  neutralColor1: "#fcf5f0",
  neutralColor2: "#f0ded3",
  neutralColor3: "#f0ded3",
};

export type CustomTheme = Theme & {
  colors: typeof customColors;
} & ResponsiveTheme;

const customTheme: CustomTheme = {
  ...theme,
  ...getResponsiveTheme({
    small: 769,
    medium: 1024,
    large: 1216,
    mobile: 320,
    tablet: 480,
    desktop: 768,
    widescreen: 992,
  }),
  colors: {
    ...theme.colors,
    ...customColors,
  },
};

export const themedStyled = createThemedStyled<CustomTheme>();
export const themedWithStyle = createThemedWithStyle<CustomTheme>();
export const themedUseStyletron = createThemedUseStyletron<CustomTheme>();
export default customTheme as CustomTheme;
