import "@atlaskit/css-reset";
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
