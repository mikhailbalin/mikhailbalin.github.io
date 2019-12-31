/* eslint-disable react/display-name */
import { AkCode } from "@atlaskit/code";
import { MDXProvider } from "@mdx-js/react";
import { BaseProvider, LightTheme } from "baseui";
import React from "react";
import Code from "./src/components/Code";

const components = {
  h2: ({ children }) => <h2 style={{ color: "rebeccapurple" }}>{children}</h2>,
  "p.inlineCode": props => (
    <AkCode {...props} language="text" text={props.children} />
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
  }
};

const CommonRootElementWrapper = ({ element }) => (
  <BaseProvider theme={LightTheme}>
    <MDXProvider components={components}>{element}</MDXProvider>
  </BaseProvider>
);

export default CommonRootElementWrapper;
