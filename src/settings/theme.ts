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

const size = (value: string, base = 1.5) =>
  interpolate`calc(${value} + ${base}vw)`;

const overrides: DeepPartial<Theme> = {
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
      fontFamily: sansSerifFontFamily,
      fontSize: size("1.23rem", 0.25),
      lineHeight: size("26px", 0.25),
      fontWeight: 400,
    },
    HeadingMedium: {
      fontFamily: sansSerifFontFamily,
      fontSize: size("1.08rem", 0.2),
      lineHeight: size("28px", 0.2),
      fontWeight: 400,
    },
    HeadingSmall: {
      fontFamily: primitives.primaryFontFamily,
      fontSize: "17px",
      lineHeight: "24px",
      fontWeight: 500,
    },
    HeadingXSmall: {
      fontFamily: primitives.primaryFontFamily,
    },
    ParagraphMedium: {
      fontSize: "15px",
      lineHeight: "24px",
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
    buttonTertiaryFill: "#ffffff",
    buttonTertiaryHover: "#ffffff",
    buttonTertiaryActive: "#ffffff",
    backgroundPrimary: "#edeee8",
    backgroundSecondary: "#e1e3d9",
  },
};

const theme = createTheme(primitives, overrides);

interface CustomTypography {
  typography: {
    font50: Font;
    font150: Font;
    font160: Font;
    font260: Font;
    font270: Font;
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

export interface CustomThemeProps {
  $theme: CustomTheme;
}

export const themedStyled = createThemedStyled<CustomTheme>();
export const themedWithStyle = createThemedWithStyle<CustomTheme>();
export const useThemedStyletron = createThemedUseStyletron<CustomTheme>();

export const customTheme: CustomTheme = {
  ...theme,
  sizing: {
    ...theme.sizing,
    scale2000: "80px",
    scale2500: "100px",
  },
  typography: {
    ...theme.typography,
    font50: {
      fontFamily: monoFontFamily,
      fontSize: "11px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    font150: {
      fontFamily: monoFontFamily,
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    font160: {
      fontFamily: monoFontFamily,
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    font260: {
      fontFamily: monoFontFamily,
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "20px",
    },
    font270: {
      fontFamily: monoFontFamily,
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "24px",
    },
  },
  ...createResponsiveTheme({
    small: 320,
    mobile: 360,
    landscape: 480,
    medium: 600,
    tablet: 768,
    desktop: 992,
    large: 1136,
  }),
};
