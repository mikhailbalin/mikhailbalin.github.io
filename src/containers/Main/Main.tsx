import React from "react";
import { Button } from "../../components/Button";
import { Section } from "../../components/styled";
import {
  MyHeadingXXLarge,
  MyParagraphMedium,
} from "../../components/typography";
import {
  CustomTheme,
  themedStyled,
  themedWithStyle,
} from "../../settings/theme";

const ButtonsWrapper = themedStyled("div", ({ $theme }) => ({
  display: "grid",
  gridColumnGap: $theme.sizing.scale600,
  gridTemplateColumns: "max-content max-content",
}));

const MainSection = themedWithStyle(Section, ({ $theme }: any) => ({
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
