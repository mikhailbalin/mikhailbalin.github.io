import * as React from "react";
import { Button, ButtonProps } from "baseui/button";

export const MButton = () => {
  return <Button onClick={() => alert("click")}>Hello</Button>;
};
