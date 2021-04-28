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

const getStyles = (loader: 1 | 2 | 3 | 4, scrollY: number) => {
  const fraction = 25;
  const startFraction = (loader - 1) * fraction;
  const endFraction = startFraction + fraction;
  const deg = (90 / 100) * scrollY * 4;

  return scrollY <= startFraction
    ? -90
    : scrollY > endFraction
    ? 0
    : (deg - 90 * loader).toFixed();
};

export interface ButtonNavProps {
  size?: SIZE[keyof Pick<SIZE, "default" | "mini">];
}

export const ButtonNav = ({ size }: ButtonNavProps) => {
  const { y } = useWindowScroll();
  const [, setScrollY] = useSpring(() => ({ scrollY: 0 }));

  const scrollY = calcScrollYFraction(y);

  const firstLoaderStyles = getStyles(1, scrollY);
  const secondLoaderStyles = getStyles(2, scrollY);
  const thirdLoaderStyles = getStyles(3, scrollY);
  const forthLoaderStyles = getStyles(4, scrollY);

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
        <ProgressBlock $right={0} $top={0}>
          <Loader
            $origin="bottom left"
            style={{
              transform: `rotateZ(${firstLoaderStyles}deg)`,
            }}
          />
        </ProgressBlock>

        <ProgressBlock $right={0} $bottom={0}>
          <Loader
            $origin="top left"
            style={{
              transform: `rotateZ(${secondLoaderStyles}deg)`,
            }}
          />
        </ProgressBlock>

        <ProgressBlock $left={0} $bottom={0}>
          <Loader
            $origin="top right"
            style={{
              transform: `rotateZ(${thirdLoaderStyles}deg)`,
            }}
          />
        </ProgressBlock>

        <ProgressBlock $left={0} $top={0}>
          <Loader
            $origin="bottom right"
            style={{
              transform: `rotateZ(${forthLoaderStyles}deg)`,
            }}
          />
        </ProgressBlock>

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
