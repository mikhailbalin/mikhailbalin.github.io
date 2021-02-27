import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { copyToClipboard } from "../../utils/copyToClipboard";
import { Pre, LineNo, CopyCode } from "./Code.styles";

export type CodeProps = {
  codeString: any;
  language: any;
  "react-live": any;
};

export const Code = ({ codeString, language, ...props }: CodeProps) => {
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }

  const handleClick = () => {
    copyToClipboard(codeString);
  };

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
