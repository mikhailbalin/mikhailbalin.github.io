import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { Section } from "../../components/styled";
import {
  MyHeadingMedium,
  MyParagraphMedium,
} from "../../components/typography";
import { themedStyled } from "../../settings/theme";

const TextWrapper = themedStyled("div", ({ $theme }) => ({
  columnCount: 2,
  columnGap: $theme.sizing.scale900,
}));

export const AboutMe = () => {
  return (
    <Section>
      <SectionTitle title="About Me" />

      <TextWrapper>
        <MyParagraphMedium>
          Alii autem, quibus ego cum memoriter, tum etiam ac ratione intellegi
          posse et. Et quidem faciunt, ut de homine sensibus reliqui nihil est,
          omnis iste natus.
        </MyParagraphMedium>

        <MyParagraphMedium>
          Ut placet inquam tum dicere exorsus est et dolore disputandum putant
          sed ut alterum aspernandum sentiamus alii autem quibus ego assentior
          cum teneam sententiam quid sit sentiri haec ratio late patet in quo
          quaerimus non ero tibique.
        </MyParagraphMedium>

        <MyParagraphMedium>
          LEARN MORE Et quidem se ipsam per se esse ratione neque disputatione
          quam ob aliquam quaerat voluptatem accusantium doloremque.
        </MyParagraphMedium>

        <MyHeadingMedium>Contacts</MyHeadingMedium>
      </TextWrapper>
    </Section>
  );
};
