import { useRef } from "react";
import { useDrag } from "react-use-gesture";
import { useSpring } from "react-spring";

export default function useMusicPlayer() {
  const nowPlayingRef = useRef(null);
  const windowHeight = window.innerHeight;

  const [{ drawerYPosition }, set] = useSpring(() => ({
    drawerYPosition: 0,
    config: { tension: 247, friction: 27 },
  }));

  function setDrawerOpen() {
    set({
      drawerYPosition: -(windowHeight - 160 - 80),
      config: {
        tension: 247,
        friction: 33,
      },
      immediate: false,
    });
  }

  return { nowPlayingRef, drawerYPosition, setDrawerOpen, windowHeight };
}
