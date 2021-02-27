import "@atlaskit/css-reset";
import "./src/styles/globals.css";
import "fontsource-ibm-plex-mono/400.css";
import "fontsource-ibm-plex-mono/500.css";
import "fontsource-playfair-display/400.css";
import React from "react";
import { Client as StyletronClient } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import CommonRootElementWrapper from "./root-wrapper";

const engine = new StyletronClient();

export const wrapRootElement = ({ element }) => (
  <StyletronProvider value={engine}>
    <CommonRootElementWrapper element={element} />
  </StyletronProvider>
);
