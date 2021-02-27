import React from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider } from "baseui";
import { action } from "@storybook/addon-actions";
import { customTheme } from "../src/settings/theme";
import "@hookstate/devtools";
import "@atlaskit/css-reset";
import "../src/styles/globals.css";
import "fontsource-ibm-plex-mono/400.css";
import "fontsource-ibm-plex-mono/500.css";
import "fontsource-playfair-display/400.css";

/**
 * Gatsby's Link overrides:
 * Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
 * This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
 * so Gatsby Link doesn't throw any errors.
 */
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

/**
 * This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
 */
global.__BASE_PATH__ = "/";

/**
 * Navigating through a gatsby app using gatsby-link
 * or any other gatsby component will use the `___navigate` method.
 * In Storybook it makes more sense to log an action than doing an actual navigate.
 * Checkout the actions addon docs
 * for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
 */
window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
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
  },
  backgrounds: {
    default: "cararra",
    values: [
      {
        name: "dark",
        value: "#151515",
      },
      {
        name: "white",
        value: "#ffffff",
      },
      {
        name: "cararra",
        value: "#edeee8",
      },
    ],
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
