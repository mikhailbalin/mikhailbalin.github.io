import React, { useEffect } from "react";
import { Button as BaseButton, SHAPE, SIZE } from "baseui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { useWindowScroll } from "react-use";
import {
  CircleInner,
  CircleOuter,
  Loader,
  ProgressBlock,
  ScrollBar,
  ScrollBar2,
  AnimatedLine,
  AnimatedLine2,
} from "./ButtonNav.styles";
import { useSpring, config } from "@react-spring/web";
import { debounce } from "lodash";

export interface ButtonNavProps {
  size?: SIZE[keyof Pick<SIZE, "default" | "mini">];
}

export const ButtonNav = ({ size }: ButtonNavProps) => {
  const { y } = useWindowScroll();

  const [styles, api] = useSpring(() => ({
    config: config.slow,
    width: "0%",
    // from: { width: "0%" },
  }));

  const calcPercentScrolled = (scroll: number) => {
    const scrollTop =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrollTop) {
      return (scroll / scrollTop) * 100;
    }

    return 0;
  };

  useEffect(() => {
    const calcHeight = debounce(() => {
      api.set({ width: calcPercentScrolled(y) + "%" });
    }, 500);

    calcHeight();
  }, [api, y]);

  const val = (90 / 100) * calcPercentScrolled(y) * 4;

  return (
    <>
      <ScrollBar>
        <AnimatedLine style={styles} />
      </ScrollBar>

      <ScrollBar2>
        <AnimatedLine2 style={{ width: calcPercentScrolled(y) + "%" }} />
      </ScrollBar2>

      <BaseButton
        shape={SHAPE.circle}
        size={size || SIZE.default}
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
                transform: `rotateZ(${
                  calcPercentScrolled(y) < 25 ? (val - 90).toFixed() : 0
                }deg)`,
              }}
            />
          </ProgressBlock>

          <ProgressBlock $right={0} $bottom={0}>
            <Loader
              $origin="top left"
              style={{
                transform: `rotateZ(${
                  calcPercentScrolled(y) < 25
                    ? -90
                    : calcPercentScrolled(y) > 50
                    ? 0
                    : (val - 180).toFixed()
                }deg)`,
              }}
            />
          </ProgressBlock>

          <ProgressBlock $left={0} $bottom={0}>
            <Loader
              $origin="top right"
              style={{
                transform: `rotateZ(${
                  calcPercentScrolled(y) < 50
                    ? -90
                    : calcPercentScrolled(y) > 75
                    ? 0
                    : (val - 270).toFixed()
                }deg)`,
              }}
            />
          </ProgressBlock>

          <ProgressBlock $left={0} $top={0}>
            <Loader
              $origin="bottom right"
              style={{
                transform: `rotateZ(${
                  calcPercentScrolled(y) < 75
                    ? -90
                    : calcPercentScrolled(y) > 100
                    ? 0
                    : (val - 360).toFixed()
                }deg)`,
              }}
            />
          </ProgressBlock>

          <CircleInner>
            {/* <FontAwesomeIcon icon={faReply} size="lg" color="#000" /> */}
            {/* <animated.div>{counter.to((v) => v.toFixed())}</animated.div> */}
            <div>
              {calcPercentScrolled(y).toFixed()} / {val.toFixed()}
            </div>
          </CircleInner>
        </CircleOuter>
      </BaseButton>
    </>
  );
};
