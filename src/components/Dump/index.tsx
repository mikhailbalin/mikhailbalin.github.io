import React from "react";
import { Wrapper, Label } from "./Dump.styles";

const Dump = (props: Record<string, unknown>) => {
  console.log(props);
  return (
    <Wrapper>
      {Object.entries(props).map(([key, val]) => (
        <pre key={key}>
          <Label>
            <span role="img" aria-label="Data">
              {"💾 "}
            </span>
            {`${key} `}
          </Label>
          {JSON.stringify(val, null, " ")}
        </pre>
      ))}
    </Wrapper>
  );
};

export default Dump;
