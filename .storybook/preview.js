import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider } from "baseui";
import { customTheme } from "../src/settings/theme";
import "../src/styles/globals.css";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <BaseProvider theme={customTheme}>
        <Story />
      </BaseProvider>
    </StyletronProvider>
  ),
];
