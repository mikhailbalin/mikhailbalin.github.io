import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Code from "./src/components/Code";
import { AkCode } from "@atlaskit/code";
// import styled from "styled-components";

// const InlineCode = styled.code`
//   background-color: lightgray;
//   padding-top: 0.2em;
//   padding-bottom: 0.2em;
//   border-radius: 3px;

//   ::before,
//   ::after {
//     content: " ";
//     letter-spacing: -0.2em;
//   }
// `;

const components = {
  h2: ({ children }) => <h2 style={{ color: "rebeccapurple" }}>{children}</h2>,
  "p.inlineCode": props => {
    return <AkCode {...props} language="text" text={props.children} />;
  },
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

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
