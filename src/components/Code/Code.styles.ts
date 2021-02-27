import { themedStyled } from "../../settings/theme";

export const Pre = themedStyled("pre", ({ $theme }) => ({
  position: "relative",
  textAlign: "left",
  margin: "1rem 0",
  padding: "0.5rem",
  overflowX: "auto",
  borderRadius: "3px",
  fontFamily: '"Courier New", Courier, monospace',

  ".token-line": {
    lineHeight: "1.3rem",
    height: "1.3rem",
  },
}));

export const LineNo = themedStyled("span", ({ $theme }) => ({
  display: "inline-block",
  width: "2rem",
  userSelect: "none",
  opacity: " 0.3",
}));

export const CopyCode = themedStyled("button", ({ $theme }) => ({
  position: "absolute",
  right: "0.25rem",
  border: "0",
  borderRadius: "3px",
  margin: "0.25em",
  opacity: "0.3",
  cursor: "pointer",

  "&:hover": {
    opacity: 1,
  },
}));
