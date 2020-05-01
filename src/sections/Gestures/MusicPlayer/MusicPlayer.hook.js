import { useRef, useState } from "react";
import { useDrag } from "react-use-gesture";
import { useSpring } from "react-spring";
import useWindow from "hooks/useWindow";

export default function useMusicPlayer() {
  const nowPlayingRef = useRef(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { windowSize } = useWindow();
  const windowHeight = windowSize.height;

  const [{ drawerYPosition }, set] = useSpring(() => ({
    drawerYPosition: 0,
    config: { tension: 247, friction: 27 },
  }));

  function toggleDrawer() {
    setDrawerOpen(!isDrawerOpen);
    set({
      drawerYPosition: isDrawerOpen ? 0 : -(windowHeight - 160 - 80),
      config: {
        tension: 247,
        friction: 27,
      },
      immediate: false,
    });
  }

  return {
    nowPlayingRef,
    drawerYPosition,
    setDrawerOpen,
    windowHeight,
    toggleDrawer,
  };
}
