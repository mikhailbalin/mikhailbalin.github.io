import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider, DarkTheme } from "baseui";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <BaseProvider theme={DarkTheme}>
        <Story />
      </BaseProvider>
    </StyletronProvider>
  ),
];
