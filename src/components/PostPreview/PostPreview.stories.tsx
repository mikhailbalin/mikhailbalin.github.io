import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { PostPreview, PostPreviewProps } from "./PostPreview";
import { createClient, Provider, useQuery, defaultExchanges, gql } from "urql";
import { devtoolsExchange } from "@urql/devtools";

const client = createClient({
  url: "http://localhost:9988/___graphql",
  exchanges: [devtoolsExchange, ...defaultExchanges],
});

const MyQuery = gql`
  query MyQuery {
    allFile {
      nodes {
        absolutePath
      }
    }
  }
`;

export default {
  title: "PostPreview",
  component: PostPreview,
  decorators: [
    (StoryFn) => (
      <Provider value={client}>
        <StoryFn />
      </Provider>
    ),
  ],
} as Meta;

// const Template: Story = () => <div>scsc</div>;

// export const Primary = Template.bind({});
// Primary.args = {};

export const Primary = () => {
  const [result] = useQuery({
    query: MyQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return <ul>{JSON.stringify(data, null, 2)}</ul>;
};
