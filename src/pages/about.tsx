import React from "react";
import { Layout } from "../containers/Layout";
import { PageProps } from "gatsby";
import { PageHeader } from "../components/styled/PageHeader";
import {
  MyHeadingXXLarge,
  MyHeadingLarge,
  MyParagraphMedium,
} from "../components/typography";
import { Experinece } from "../containers/Experinece";

// eslint-disable-next-line react/display-name
export default (props: PageProps) => {
  console.log({ props });

  return (
    <Layout>
      <PageHeader>
        <MyHeadingXXLarge>Recent posts</MyHeadingXXLarge>
      </PageHeader>

      <MyParagraphMedium>
        Placet, inquam tum dicere exorsus est laborum et dolorem eum fugiat,
        quo. Hanc ego assentior, cum memoriter, tum etiam erga nos causae
        confidere, sed uti. Torquem detraxit hosti et quidem se repellere, idque
        instituit docere sic: omne animal.
      </MyParagraphMedium>

      <MyHeadingLarge>An elegant Webflow template</MyHeadingLarge>

      <MyParagraphMedium>
        Sunt autem quibusdam et dolorum effugiendorum gratia autem vel eum iure
        reprehenderit. Hanc ego assentior, cum soluta nobis est consecutus
        laudem et accurate disserendum et.
      </MyParagraphMedium>

      <MyParagraphMedium>
        Torquem detraxit hosti et quidem exercitus quid ex eo ortum tam egregios
        viros censes tantas res gessisse sine metu contineret saluti prospexit
        civium. In quo quaerimus non numquam eius modi tempora incidunt.
      </MyParagraphMedium>

      <MyParagraphMedium>
        Sed ut summum malum et quantum possit a sapiente delectus ut ita ruant
        itaque aiunt hanc quasi involuta aperiri altera prompta et quas.
      </MyParagraphMedium>

      <Experinece />
    </Layout>
  );
};
