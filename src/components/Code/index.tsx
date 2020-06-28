import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { copyToClipboard } from "../../utils/copy-to-clipboard";
import { Pre, LineNo, CopyCode } from "./Code.styles";

type Props = {
  codeString: any;
  language: any;
  "react-live": any;
};

const Code = ({ codeString, language, ...props }: Props) => {
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

export default Code;
