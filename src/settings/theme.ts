import {
  createTheme,
  createThemedStyled,
  createThemedWithStyle,
  createThemedUseStyletron,
} from "baseui";
import { Font, Theme, ThemePrimitives } from "baseui/theme";
import { DeepPartial } from "utility-types";
import { interpolate } from "../utils/interpolate";
import { createResponsiveTheme, ResponsiveTheme } from "./breakpoints";

const monoFontFamily = "'IBM Plex Mono', monospace";

const primitives: Partial<ThemePrimitives> = {
  primaryA: "#151515",
  accent: "#71a882",
  positive: "#71a882",
  primaryFontFamily: monoFontFamily,
};

const size = (size: number) => interpolate`calc(${size}rem + 1.5vw)`;

const overrides: DeepPartial<Theme> = {
  grid: {
    unit: "rem",
  },
  typography: {
    HeadingXSmall: {
      fontFamily: primitives.primaryFontFamily,
    },
    HeadingSmall: {
      fontFamily: primitives.primaryFontFamily,
    },
    HeadingMedium: {
      fontFamily: primitives.primaryFontFamily,
    },
    HeadingLarge: {
      fontFamily: primitives.primaryFontFamily,
    },
    HeadingXLarge: {
      fontFamily: primitives.primaryFontFamily,
      fontSize: size(1.07),
    },
    HeadingXXLarge: {
      fontFamily: primitives.primaryFontFamily,
      fontSize: size(1.35),
    },
  },
  colors: {
    buttonPrimaryFill: "#71a882",
    buttonPrimaryHover: "#ef7c54",
    buttonSecondaryText: primitives.primaryA,
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
