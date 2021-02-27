import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Code, CodeProps } from "./Code";

export default {
  title: "Code",
  component: Code,
} as Meta;

const Template: Story<CodeProps> = (props) => <Code {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  codeString: `const Component = props => (
  <div
    style={{
      fontSize: 20,
      padding: 10,
      fontFamily: "'IBM Plex Mono', monospace",
    }}
  >
      {props.test}
  </div>
);

render(<Component test={'Hello World'} />);`,
  language: "jsx",
};

export const ReactLive = Template.bind({});
ReactLive.args = {
  ...Primary.args,
  "react-live": true,
};
