import { useState, useEffect } from "react";

export default function useWindow() {
  const getWindowSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowSize, setWindowSize] = useState(getWindowSize);

  function onWindowResize() {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    const resizeEvent = window.addEventListener("resize", onWindowResize);

    return window.removeEventListener("resize", resizeEvent);
  }, []);

  return { windowSize };
}
