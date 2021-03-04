import { useState, useEffect } from "react";

const EmptySSRRect = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  height: 0,
  width: 0,
  x: 0,
  y: 0,
};

/**
 * React custom hook for scroll position.
 * Original Source: https://gist.github.com/joshuacerbito/ea318a6a7ca4336e9fadb9ae5bbb87f4
 *
 * @example
 * const { scrollX, scrollY, scrollDirection } = useScroll();
 */
export const useScroll = () => {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  const [bodyOffset, setBodyOffset] = useState<DOMRect | typeof EmptySSRRect>(
    typeof window === "undefined" || !window.document
      ? EmptySSRRect
      : document.body.getBoundingClientRect()
  );

  const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
  const [scrollX, setScrollX] = useState<number>(bodyOffset.left);

  const [scrollDirection, setScrollDirection] = useState<
    "down" | "up" | undefined
  >();

  const listener = () => {
    setBodyOffset(
      typeof window === "undefined" || !window.document
        ? EmptySSRRect
        : document.body.getBoundingClientRect()
    );

    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
};
