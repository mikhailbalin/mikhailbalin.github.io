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
} from "./ButtonNav.styles";
import { useSpring } from "@react-spring/web";

const calcScrollYFraction = (scroll: number) => {
  const scrollY =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  if (scrollY) {
    return (scroll / scrollY) * 100;
  }

  return 0;
};

const getStyles = (loader: number, scrollY: number) => {
  const fraction = 25;
  const startFraction = loader * fraction;
  const endFraction = startFraction + fraction;
  const deg = (90 / 100) * scrollY * 4;

  return scrollY <= startFraction
    ? -90
    : scrollY > endFraction
    ? 0
    : (deg - 90 * (loader + 1)).toFixed();
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
}

export const ButtonNav = ({ size }: ButtonNavProps) => {
  const { y } = useWindowScroll();
  const [, setScrollY] = useSpring(() => ({ scrollY: 0 }));

  const scrollY = calcScrollYFraction(y);

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
          style: {
            position: "fixed",
            backgroundColor: "transparent",
            width: size === SIZE.mini ? "60px" : "80px",
            height: size === SIZE.mini ? "60px" : "80px",

            ":hover": {
              backgroundColor: "transparent",
            },

            ":active": {
              backgroundColor: "transparent",
            },
          },
        },
      }}
    >
      <CircleOuter>
        {progressBlocks.map((block, index) => (
          <ProgressBlock key={block.origin} {...block.position}>
            <Loader
              $origin={block.origin}
              style={{
                transform: `rotateZ(${getStyles(index, scrollY)}deg)`,
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
