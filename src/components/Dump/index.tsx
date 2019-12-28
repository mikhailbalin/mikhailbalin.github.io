import React from "react";
import { Wrapper } from "./Dump.styles";

const Dump = props => (
  <Wrapper>
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: "white", background: "red" }}>
          {key}{" "}
          <span role="img" aria-label="Poop">
            💩
          </span>
        </strong>
        {JSON.stringify(val, null, " ")}
      </pre>
    ))}
  </Wrapper>
);

export default Dump;
