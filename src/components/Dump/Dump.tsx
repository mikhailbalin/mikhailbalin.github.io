import React from "react";
import { styled } from "baseui";
import { themedStyled } from "../../settings/theme";

export const Wrapper = themedStyled("div", ({ $theme }) => ({
  fontSize: "1rem",
  border: "1px solid #efefef",
  padding: "0.5rem",
  backgroundColor: "#2c2c2c",
  color: "#e0e0e0",
  overflowX: "auto",
  margin: "1rem 0",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
}));

export const Label = styled("strong", ({ $theme }) => ({}));

export const Dump = (props: Record<string, unknown>) => {
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
