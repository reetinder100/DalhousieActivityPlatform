import { useState, useEffect } from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevOffset, setPrevOffset] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      const direction = currentOffset > prevOffset ? "down" : "up";

      // Consider the page "at top" if scrolled less than header height (80px)
      setIsAtTop(currentOffset < 80);

      setScrollDirection(direction);
      setPrevOffset(currentOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevOffset]);

  return { scrollDirection, isAtTop };
};
