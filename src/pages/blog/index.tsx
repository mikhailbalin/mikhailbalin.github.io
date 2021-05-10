import React from "react";
import { PageProps } from "gatsby";
import { Layout } from "../../containers/Layout";
import { PageHeader } from "../../components/styled/PageHeader";
import { MyHeadingXXLarge } from "../../components/typography";

// eslint-disable-next-line react/display-name
export default (props: PageProps) => {
  console.log({ props });

  return (
    <Layout>
      <PageHeader>
        <MyHeadingXXLarge>Recent posts</MyHeadingXXLarge>
      </PageHeader>
    </Layout>
  );
};
