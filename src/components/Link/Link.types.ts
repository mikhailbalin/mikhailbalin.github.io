import { StyleObject } from "styletron-react";
import { CustomTheme } from "../../settings/theme";

export type LinkSize = "default" | "small";

export interface LinkStylesProps {
  $theme: CustomTheme;
  $isUpper: boolean;
  $size: LinkSize;
}

interface Props {
  children: React.ReactNode;
  isUpper?: boolean;
  linkStyle?: StyleObject;
  size?: LinkSize;
}

type TruncateProps =
  | { to: string; href?: never }
  | { href: string; to?: never };

export type LinkProps = Props & TruncateProps;
