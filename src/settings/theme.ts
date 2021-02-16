import {
  createTheme,
  createThemedStyled,
  createThemedWithStyle,
  createThemedUseStyletron,
} from "baseui";
import { Font, Theme, ThemePrimitives, Typography } from "baseui/theme";
import { DeepPartial } from "utility-types";
import { createResponsiveTheme, ResponsiveTheme } from "./breakpoints";

const monoFontFamily = "'IBM Plex Mono', monospace";

const primitives: Partial<ThemePrimitives> = {
  primaryA: "#151515",
  accent: "#71a882",
  positive: "#71a882",
  primaryFontFamily: monoFontFamily,
};

const overrides: DeepPartial<Theme> = {
  grid: {
    unit: "rem",
  },
  typography: {
    HeadingXSmall: {
      fontFamily: primitives.primaryFontFamily,
      fontSize: "1.151rem",
    },
    HeadingSmall: {
      fontFamily: primitives.primaryFontFamily,
      fontSize: "1.204rem",
    },
    HeadingMedium: {
      fontFamily: primitives.primaryFontFamily,
      fontSize: "1.333rem",
    },
    HeadingLarge: {
      fontFamily: primitives.primaryFontFamily,
      fontSize: "1.534rem",
    },
    HeadingXLarge: {
      fontFamily: primitives.primaryFontFamily,
      fontSize: "1.777rem",
    },
    HeadingXXLarge: {
      fontFamily: primitives.primaryFontFamily,
      fontSize: "2.045rem",
    },
  },
};

const theme = createTheme(primitives, overrides);

interface CustomTypography {
  typography: {
    font160: Font;
  };
}

export type CustomTheme = Theme & ResponsiveTheme & CustomTypography;

export const themedStyled = createThemedStyled<CustomTheme>();
export const themedWithStyle = createThemedWithStyle<CustomTheme>();
export const themedUseStyletron = createThemedUseStyletron<CustomTheme>();

export const customTheme: CustomTheme = {
  ...theme,
  typography: {
    ...theme.typography,
    font160: {
      fontFamily: monoFontFamily,
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: "16px",
    },
  },
  ...createResponsiveTheme({
    small: 320,
    medium: 600,
    large: 1136,
    mobile: 360,
    landscape: 480,
    tablet: 768,
    desktop: 992,
  }),
};
