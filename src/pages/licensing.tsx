import React from "react";
import { Layout } from "../containers/Layout";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { PageProps } from "gatsby";
import { MyHeadingXXLarge } from "../components/typography";

// eslint-disable-next-line react/display-name
export default (props: PageProps) => {
  const { title, description } = useSiteMetadata();
  console.log({ title, description, props });

  return (
    <Layout>
      <MyHeadingXXLarge>Assets Info</MyHeadingXXLarge>
    </Layout>
  );
};
