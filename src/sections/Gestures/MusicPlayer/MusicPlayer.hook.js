import { useRef, useState, useEffect } from "react";
import { useDrag } from "react-use-gesture";
import { useSpring, config } from "react-spring";
import useWindow from "hooks/useWindow";

export default function useMusicPlayer() {
  /* states, values and its setters */
  const nowPlayingRef = useRef(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { windowSize } = useWindow();
  const { height: windowHeight } = windowSize;
  const [{ drawerYPosition }, setYposition] = useSpring(() => ({
    drawerYPosition: 0,
    config: { tension: 247, friction: 27 },
  }));
  const playerDrawerYMoviment = {
    transform: drawerYPosition.interpolate((y) => `translate3D(0, ${y}px, 0)`),
  };

  function toggleDrawer() {
    setDrawerOpen(!isDrawerOpen);
    setYposition({
      drawerYPosition: isDrawerOpen ? 0 : -(windowHeight - 140 - 80),
      config: {
        tension: 247,
        friction: 27,
      },
      immediate: false,
    });
  }

  const dragEventCreator = useDrag((dragData) => {
    const {
      movement,
      last: isLastEvent,
      memo,
      down,
      cancel,
      active: isDragActive,
    } = dragData;
    const startedDragging = false;

    const [mx, my] = movement;
    const isClick =
      isLastEvent && Math.abs(mx) + Math.abs(my) <= 3 && !isDrawerOpen;

    console.log(my)

    if (isClick) {
      toggleDrawer();
    } else if(my < -500){
      cancel()
    }
    
    else if (isDragActive) {
      setYposition({
        drawerYPosition: my,
        immediate: false,
        config: config.stiff,
      });
    }

    // if is click
    // if stopped dragging
    // enable body scroll again
    // set drag position to the projected endpoint (up or down based on the last position when stopped draggin')
    // if is still dragging
  }, {rubberband: true});

  return {
    nowPlayingRef,
    drawerYPosition,
    setDrawerOpen,
    windowHeight,
    toggleDrawer,
    dragEventCreator,
    playerDrawerYMoviment,
  };
}
