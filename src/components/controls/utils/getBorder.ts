import { Colors } from "baseui/theme";

export const getBorder = ({
  $disabled,
  $isFocused,
  $error,
  colors,
}: {
  $disabled: boolean;
  $isFocused: boolean;
  $error: boolean;
  colors: Colors;
}) => {
  const border = $disabled
    ? colors.borderAlt
    : $error
    ? colors.borderError
    : $isFocused
    ? colors.primaryB
    : colors.backgroundSecondary;

  return {
    borderLeftColor: border,
    borderRightColor: border,
    borderTopColor: border,
    borderBottomColor: border,
  };
};
