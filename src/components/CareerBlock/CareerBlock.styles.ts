import { themedStyled } from "../../settings/theme";

export const Root = themedStyled("div", ({ $theme }) => ({
  display: "grid",
  gridAutoColumns: "1fr",
  gridTemplateColumns: `auto minmax(${$theme.sizing.scale900}, auto) 1fr`,

  paddingLeft: $theme.sizing.scale300,
  gridColumnGap: $theme.sizing.scale800,
  gridRowGap: $theme.sizing.scale300,
  gridTemplateAreas: `
    "Timeline-Mobile Date-Mobile Date-Mobile"
    "Timeline-Mobile Job-Mobile Job-Mobile"
  `,
  gridTemplateRows: "auto auto",
}));

export const Date = themedStyled("time", ({ $theme }) => ({
  alignSelf: "start",
  justifySelf: "stretch",
  width: "120px",
  color: "rgba(0, 0, 0, 0.55)",
  ...$theme.typography.font150,

  paddingTop: "5px",
  paddingBottom: "5px",
  textAlign: "left",
  gridArea: "Date-Mobile",
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
}));

export const TimelineDot = themedStyled("div", ({ $theme }) => ({
  position: "absolute",
  left: "auto",
  top: 0,
  right: "auto",
  bottom: "auto",
  zIndex: 2,
  width: $theme.sizing.scale550,
  height: $theme.sizing.scale550,
  marginTop: $theme.sizing.scale300,
  marginRight: 0,
  marginLeft: 0,
  borderStyle: "solid",
  borderWidth: $theme.sizing.scale0,
  borderColor: $theme.colors.positive,
  borderRadius: "50%",
  backgroundColor: $theme.colors.backgroundPrimary,
  boxShadow: $theme.lighting.shadow600,
}));

export const TimelineColor = themedStyled("div", ({ $theme }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  right: 0,
  bottom: "auto",
  backgroundColor: $theme.colors.positive,
  // height: "40%",
}));

export const JobInfo = themedStyled("div", ({ $theme }) => ({
  paddingBottom: $theme.sizing.scale1400,
  gridArea: "Job-Mobile",
}));

export const JobPosition = themedStyled("div", ({ $theme }) => ({
  display: "inline-block",
  paddingTop: $theme.sizing.scale0,
  color: $theme.colors.primaryA,
  ...$theme.typography.font270,

  marginTop: $theme.sizing.scale100,
  marginRight: $theme.sizing.scale100,
  marginBottom: $theme.sizing.scale100,
}));
