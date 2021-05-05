import { themedStyled } from "../../settings/theme";

export const Root = themedStyled("div", ({ $theme }) => ({
  display: "grid",
  gridAutoColumns: "1fr",
  gridTemplateColumns: `auto minmax(${$theme.sizing.scale900}, auto) 1fr`,

  gridColumnGap: $theme.sizing.scale800,
  gridTemplateAreas: `"Timeline-Mobile Date-Mobile Date-Mobile" "Timeline-Mobile Job-Mobile Job-Mobile"`,
  paddingLeft: $theme.sizing.scale300,
  gridRowGap: $theme.sizing.scale300,
  gridTemplateRows: "auto auto",

  [$theme.mediaQuery.large]: {
    gridColumnGap: $theme.sizing.scale400,
    gridTemplateAreas: `"Date Timeline Job"`,
    paddingLeft: 0,
    gridRowGap: 0,
    gridTemplateRows: "none",
  },
}));

export const Date = themedStyled("time", ({ $theme }) => ({
  alignSelf: "start",
  justifySelf: "stretch",
  width: "120px",
  color: "rgba(0, 0, 0, 0.55)",
  paddingTop: $theme.sizing.scale200,
  paddingBottom: $theme.sizing.scale200,
  textAlign: "left",
  gridArea: "Date-Mobile",
  ...$theme.typography.font150,

  [$theme.mediaQuery.large]: {
    textAlign: "right",
    gridArea: "Date",
  },
}));

export const Timeline = themedStyled("div", ({ $theme }) => ({
  position: "relative",
  display: "flex",
  width: $theme.sizing.scale0,
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#d9dbd0",

  alignSelf: "stretch",
  justifySelf: "center",
  gridArea: "Timeline-Mobile",

  [$theme.mediaQuery.large]: {
    gridArea: "Timeline",
  },
}));

export const JobInfo = themedStyled("div", ({ $theme }) => ({
  paddingBottom: $theme.sizing.scale1400,
  gridArea: "Job-Mobile",

  [$theme.mediaQuery.large]: {
    gridArea: "Job",
  },
}));

export const JobPosition = themedStyled("div", ({ $theme }) => ({
  display: "inline-block",
  paddingTop: $theme.sizing.scale0,
  color: $theme.colors.primaryA,
  ...$theme.typography.font270,
  marginTop: $theme.sizing.scale100,
  marginRight: $theme.sizing.scale100,
  marginBottom: $theme.sizing.scale100,

  [$theme.mediaQuery.large]: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
  },
}));
