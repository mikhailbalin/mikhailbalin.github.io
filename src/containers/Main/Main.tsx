import React from "react";
import { Button } from "../../components/Button";
import { Section } from "../../components/styled";
import {
  MyHeadingXXLarge,
  MyParagraphMedium,
} from "../../components/typography";
import {
  CustomThemeProps,
  themedStyled,
  themedWithStyle,
} from "../../settings/theme";

const ButtonsWrapper = themedStyled("div", ({ $theme }) => ({
  display: "grid",
  gridRowGap: $theme.sizing.scale600,
  gridTemplateColumns: "100%",

  [$theme.mediaQuery.landscape]: {
    gridColumnGap: $theme.sizing.scale600,
    gridTemplateColumns: "max-content max-content",
  },
}));

const MainSection = themedWithStyle<
  typeof Section,
  { children?: React.ReactNode }
>(Section, ({ $theme }: CustomThemeProps) => ({
  paddingTop: $theme.sizing.scale3200,
}));

export const Main = () => (
  <MainSection>
    <MyHeadingXXLarge>
      Hi there! 🌻 My name is Abbie Wilson. I’m a professional photographer &
      designer based in Bali, Indonesia
    </MyHeadingXXLarge>

    <MyParagraphMedium>
      Aoluta nobis laborum et fortibus viris commemorandis. Certe, inquam,
      pertinax non quo minus id, de voluptate velit esse. At magnum periculum
      adiit in quo enim inter argumentum conclusionemque rationis et dolorum.
    </MyParagraphMedium>

    <ButtonsWrapper>
      <Button $as="a">View Portfolio</Button>
      <Button $as="a" kind="secondary">
        Contact Me
      </Button>
    </ButtonsWrapper>
  </MainSection>
);
