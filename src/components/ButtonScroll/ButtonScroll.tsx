import React from "react";
import { Button as BaseButton, SHAPE, SIZE } from "baseui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from "react-use";
import {
  CircleInner,
  CircleOuter,
  Loader,
  ProgressBlock,
} from "./ButtonScroll.styles";
import { useSpring } from "@react-spring/web";
import { CustomThemeProps } from "../../settings/theme";
import { StyleObject } from "styletron-react";

/**
 * Calc the pesantage of scrolled window
 * @param scroll scrolled in px
 */
const calcScrollYFraction = (scroll: number): number => {
  const { scrollHeight, clientHeight } = window.document.documentElement;
  const scrollY = scrollHeight - clientHeight;

  if (scrollY) {
    return (scroll / scrollY) * 100;
  }

  return 0;
};

/**
 * Calc angle of each block inside circle
 * @param loader block number
 * @param scrollY pesantage of scrolled window
 * @param parts loaders count
 */
const getRotationAngle = (
  loader: number,
  scrollY: number,
  parts = 4
): number => {
  const fraction = 100 / parts;
  const startFraction = loader * fraction;
  const endFraction = startFraction + fraction;
  const deg = (90 / 100) * scrollY * parts;

  return scrollY <= startFraction
    ? -90
    : scrollY > endFraction
    ? 0
    : Math.trunc(deg - 90 * (loader + 1));
};

const progressBlocks = [
  {
    position: {
      $right: 0,
      $top: 0,
    },
    origin: "bottom left",
  },
  {
    position: {
      $right: 0,
      $bottom: 0,
    },
    origin: "top left",
  },
  {
    position: {
      $left: 0,
      $bottom: 0,
    },
    origin: "top right",
  },
  {
    position: {
      $left: 0,
      $top: 0,
    },
    origin: "bottom right",
  },
] as const;

export interface ButtonNavProps {
  size?: SIZE[keyof Pick<SIZE, "default" | "mini">];
  baseButtonStyle?: StyleObject;
}

export const ButtonScroll = ({ size, baseButtonStyle }: ButtonNavProps) => {
  const { y } = useWindowScroll();
  const [, setScrollY] = useSpring(() => ({ scrollY: 0 }));

  const scrollY = calcScrollYFraction(y);
  const showButton = scrollY > 5;

  return (
    <BaseButton
      shape={SHAPE.circle}
      size={size || SIZE.default}
      onClick={() =>
        setScrollY({
          scrollY: 0,
          from: { scrollY: window.scrollY },
          onChange: ({ value }) => window.scroll(0, value.scrollY),
        })
      }
      overrides={{
        BaseButton: {
          style: ({ $theme }: CustomThemeProps) => ({
            position: "fixed",
            right: "1.5vw",
            bottom: "1.5vw",
            opacity: showButton ? 1 : 0,
            transform: `scale(${showButton ? 1 : 0.8})`,
            backgroundColor: "transparent",
            width: size === SIZE.mini ? "60px" : "80px",
            height: size === SIZE.mini ? "60px" : "80px",
            transitionProperty: "opacity, transform",
            transitionDuration: $theme.animation.timing500,
            transitionTimingFunction: $theme.animation.timing500,

            ":hover": {
              backgroundColor: "transparent",
              transform: "scale(1.2)",
            },

            ":active": {
              backgroundColor: "transparent",
            },

            ...baseButtonStyle,
          }),
        },
      }}
    >
      <CircleOuter>
        {progressBlocks.map((block, index) => (
          <ProgressBlock key={block.origin} {...block.position}>
            <Loader
              $origin={block.origin}
              style={{
                transform: `rotateZ(${getRotationAngle(index, scrollY)}deg)`,
              }}
            />
          </ProgressBlock>
        ))}

        <CircleInner>
          <FontAwesomeIcon
            icon={faReply}
            size="lg"
            color="#000"
            rotation={90}
          />
        </CircleInner>
      </CircleOuter>
    </BaseButton>
  );
};
