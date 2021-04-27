import { SHAPE as BASE_SHAPE } from "baseui/button";

export type SHAPE = BASE_SHAPE[keyof Pick<BASE_SHAPE, "circle" | "square">];

export interface ButtonMenuProps {
  shape: SHAPE;
}
