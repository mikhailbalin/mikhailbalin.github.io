import React from "react";
import ReactJson from "react-json-view";
import { customTheme as theme } from "../../settings/theme";

export type DumpProps = Record<string, unknown>;

export const Dump = (props: DumpProps) => {
  return (
    <ReactJson
      src={props}
      theme="codeschool"
      iconStyle="square"
      style={{ overflow: "auto", padding: theme.sizing.scale400 }}
      collapsed={1}
    />
  );
};
