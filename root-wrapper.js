/* eslint-disable react/display-name */
import { Code as AtlaskitCode } from "@atlaskit/code";
import { MDXProvider } from "@mdx-js/react";
import { BaseProvider } from "baseui";
import React from "react";
import { Code } from "./src/components/Code";
import { customTheme } from "./src/settings/theme";

const components = {
  h2: ({ children }) => <h2 style={{ color: "rebeccapurple" }}>{children}</h2>,
  "p.inlineCode": (props) => (
    <AtlaskitCode {...props} language="text" text={props.children} />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      );
    }
  },
};

const CommonRootElementWrapper = ({ element }) => (
  <BaseProvider theme={customTheme}>
    <MDXProvider components={components}>{element}</MDXProvider>
  </BaseProvider>
);

export default CommonRootElementWrapper;
