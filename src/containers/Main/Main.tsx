import { HeadingXXLarge, ParagraphMedium } from "baseui/typography";
import React from "react";
import { Button } from "../../components/Button";
import { themedStyled } from "../../settings/theme";

const ButtonsWrapper = themedStyled("div", ({ $theme }) => ({
  display: "grid",
  gridColumnGap: $theme.sizing.scale600,
  gridTemplateColumns: "max-content max-content",
}));

export const Main = () => (
  <section>
    <HeadingXXLarge color="#151515" marginBottom="16px">
      Hi there! 🌻 My name is Abbie Wilson. I’m a professional photographer &
      designer based in Bali, Indonesia
    </HeadingXXLarge>

    <ParagraphMedium marginBottom="24px">
      Aoluta nobis laborum et fortibus viris commemorandis. Certe, inquam,
      pertinax non quo minus id, de voluptate velit esse. At magnum periculum
      adiit in quo enim inter argumentum conclusionemque rationis et dolorum.
    </ParagraphMedium>

    <ButtonsWrapper>
      <Button $as="a">view Portfolio</Button>
      <Button $as="a" kind="secondary">
        Contact Me
      </Button>
    </ButtonsWrapper>
  </section>
);
