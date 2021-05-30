import { Theme } from "baseui/theme";
import { StyleObject } from "styletron-react";

export const getLabelStyles = ({
  $theme: { typography, sizing },
}: {
  $theme: Theme;
}): StyleObject => ({
  textTransform: "uppercase",
  marginTop: 0,
  marginBottom: sizing.scale400,
  ...typography.font100,
});
