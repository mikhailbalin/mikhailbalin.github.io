import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  fontsize: 20;
  border: "1px solid #efefef";
  padding: 10;
  background: "white";
`;

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
        {JSON.stringify(val, "", " ")}
      </pre>
    ))}
  </Wrapper>
);

export default Dump;
