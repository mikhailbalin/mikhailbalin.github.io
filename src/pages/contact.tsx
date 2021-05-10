import React from "react";
import { Layout } from "../containers/Layout";
import { PageProps } from "gatsby";
import { MyHeadingXXLarge, MyParagraphMedium } from "../components/typography";
import { PageHeader } from "../components/styled/PageHeader";

// eslint-disable-next-line react/display-name
export default (props: PageProps) => {
  console.log({ props });

  return (
    <Layout>
      <PageHeader>
        <MyHeadingXXLarge>Let&apos;s get in touch</MyHeadingXXLarge>
        <MyParagraphMedium>
          Aoluta nobis laborum et fortibus viris commemorandis. Certe, inquam,
          pertinax non quo minus id, de voluptate velit esse.
        </MyParagraphMedium>
      </PageHeader>
    </Layout>
  );
};
