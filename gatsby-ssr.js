import React from "react";
import { Server as StyletronServer } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import CommonRootElementWrapper from "./root-wrapper";

const engine = new StyletronServer();

export const wrapRootElement = ({ element }) => (
  <StyletronProvider value={engine}>
    <CommonRootElementWrapper element={element} />
  </StyletronProvider>
);
