import { ReactNode, MouseEvent } from "react";
import { StyleObject } from "styletron-react";
import { CustomTheme } from "../../settings/theme";

export type LinkSize = "default" | "small";

export interface LinkStylesProps {
  $theme: CustomTheme;
  $isUpper: boolean;
  $size: LinkSize;
}

interface Props {
  children: ReactNode;
  isUpper?: boolean;
  linkStyle?: StyleObject;
  size?: LinkSize;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

type TruncateProps =
  | { to: string; href?: never }
  | { href: string; to?: never };

export type LinkProps = Props & TruncateProps;
