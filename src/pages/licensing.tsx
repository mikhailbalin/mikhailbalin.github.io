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
        <MyHeadingXXLarge>Assets Info</MyHeadingXXLarge>
        <MyParagraphMedium>
          All graphical assets in this template are licensed for personal and
          commercial use. If you&apos;d like to use a specific asset, please
          check the license below.
        </MyParagraphMedium>
      </PageHeader>
    </Layout>
  );
};
