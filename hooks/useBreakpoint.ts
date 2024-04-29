import { useEffect, useState } from "react";
import { theme } from "../tailwind.config";

/*
    smallMobile: "340px",
    mobile: "375px",
    tablet: "768px",
    desktop: "1024px",
*/

export type Breakpoint = {
  key: string;
  value: number;
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState({
    key: "desktop",
    value: 1024,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    const point = getCurrentBreakpoint();
    if (point === undefined) return;
    // 브레이크포인트가 변경되었을 때만 상태 업데이트
    setBreakpoint(point);
  }

  function getCurrentBreakpoint() {
    if (theme === undefined || !theme.extend?.screens) return;
    const screens = theme.extend?.screens;
    if (screens === undefined) return;
    let breakPoints = Object.entries(screens).map(([key, value]) => {
      return { key, value: parseInt(value) };
    });

    // 브레이크포인트가 큰 순서대로 정렬
    // [ { key: 'desktop', value: 1024 }, { key: 'tablet', value: 768 }, { key: 'mobile', value: 640 } ]
    breakPoints.reverse();
    const point = breakPoints.find((point) => {
      return window.innerWidth > point.value;
    });

    return point;
  }

  return {
    breakpoint,
  };
};
