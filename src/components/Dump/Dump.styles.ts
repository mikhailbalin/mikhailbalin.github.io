import { styled } from "baseui";

export const Wrapper = styled("div", ({ $theme }) => ({
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
