import React from "react";
import { Layout } from "../containers/Layout";
import { PageProps } from "gatsby";
import { MyHeadingXXLarge } from "../components/typography";

// eslint-disable-next-line react/display-name
export default (props: PageProps) => {
  console.log({ props });

  return (
    <Layout>
      <MyHeadingXXLarge>Assets Info</MyHeadingXXLarge>
    </Layout>
  );
};
