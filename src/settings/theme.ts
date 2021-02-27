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
const sansSerifFontFamily = "'Playfair Display', sans-serif";

const primitives: Partial<ThemePrimitives> = {
  primaryA: "#151515",
  positive: "#71a882",
  negative: "#ef7c54",
  primaryFontFamily: monoFontFamily,
};

const size = (size: string, base = 1.5) =>
  interpolate`calc(${size} + ${base}vw)`;

const overrides: DeepPartial<Theme> = {
  grid: {
    unit: "rem",
  },
  typography: {
    HeadingXXLarge: {
      fontFamily: sansSerifFontFamily,
      fontSize: size("1.35rem"),
      lineHeight: size("30px"),
      fontWeight: 500,
    },
    HeadingXLarge: {
      fontFamily: sansSerifFontFamily,
      fontSize: size("1.07rem"),
      lineHeight: size("25px"),
      fontWeight: 400,
    },
    HeadingLarge: {
      fontFamily: primitives.primaryFontFamily,
    },
    HeadingMedium: {
      fontFamily: primitives.primaryFontFamily,
    },
    HeadingSmall: {
      fontFamily: primitives.primaryFontFamily,
    },
    HeadingXSmall: {
      fontFamily: primitives.primaryFontFamily,
    },
    ParagraphMedium: {
      fontSize: "0.9375rem",
      lineHeight: 1.6,
    },
  },
  colors: {
    buttonPrimaryFill: primitives.positive,
    buttonPrimaryHover: primitives.negative,
    buttonPrimaryActive: primitives.negative,
    buttonSecondaryFill: "transparent",
    buttonSecondaryHover: primitives.negative,
    buttonSecondaryActive: primitives.negative,
    buttonSecondaryText: primitives.primaryA,
  },
};

const theme = createTheme(primitives, overrides);

interface CustomTypography {
  typography: {
    font160: Font;
    font260: Font;
  };
}

interface CustomSizing {
  sizing: {
    scale2000: string;
    scale2500: string;
  };
}

export type CustomTheme = Theme &
  ResponsiveTheme &
  CustomTypography &
  CustomSizing;

export const themedStyled = createThemedStyled<CustomTheme>();
export const themedWithStyle = createThemedWithStyle<CustomTheme>();
export const themedUseStyletron = createThemedUseStyletron<CustomTheme>();

export const customTheme: CustomTheme = {
  ...theme,
  sizing: {
    ...theme.sizing,
    scale2000: "80px",
    scale2500: "100px",
  },
  typography: {
    ...theme.typography,
    font160: {
      fontFamily: monoFontFamily,
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: "16px",
    },
    font260: {
      fontFamily: monoFontFamily,
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "20px",
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
