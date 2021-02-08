import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider } from "baseui";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { customTheme } from "../src/settings/theme";
import "../src/styles/globals.css";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      small: {
        name: "Small",
        styles: {
          height: "400px",
          width: "769px",
        },
        type: "mobile",
      },
      medium: {
        name: "Medium",
        styles: {
          height: "400px",
          width: "1024px",
        },
        type: "tablet",
      },
      large: {
        name: "Large",
        styles: {
          height: "400px",
          width: "1216px",
        },
        type: "desktop",
      },
      mobile: {
        name: "Mobile",
        styles: {
          height: "400px",
          width: "360px",
        },
        type: "mobile",
      },
      landscape: {
        name: "Landscape",
        styles: {
          height: "400px",
          width: "480px",
        },
        type: "mobile",
      },
      tablet: {
        name: "Tablet",
        styles: {
          height: "400px",
          width: "768px",
        },
        type: "tablet",
      },
      desktop: {
        name: "Desktop",
        styles: {
          height: "400px",
          width: "992px",
        },
        type: "desktop",
      },
    },
    defaultViewport: "responsive",
  },
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
