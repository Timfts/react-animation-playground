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

  const drawerThreshold = -(windowHeight - 140 - 80);

  function toggleDrawer() {
    setDrawerOpen(!isDrawerOpen);
    setYposition({
      drawerYPosition: isDrawerOpen ? 0 : drawerThreshold,
      config: {
        tension: 247,
        friction: 27,
      },
      immediate: false,
    });
  }

  function openDrawer(velocity = 0) {
    setDrawerOpen(true);
    setYposition({
      drawerYPosition: drawerThreshold,
      config: {
        tension: 247,
        friction: 27,
        velocity,
      },
    });
  }

  const dragEventCreator = useDrag(
    ({
      movement,
      memo,
      down,
      cancel,
      last: isLastEvent,
      active: isDragActive,
      vxvy: movementVelocity,
    }) => {
      const [mx, my] = movement;
      const [, velocityY] = movementVelocity;

      // when drawer reaches the threshold
      if (my < drawerThreshold) cancel(); 
      // when user stop dragging or just tapped drawer
      if (isLastEvent) {
        const userClickedDrawer = Math.abs(mx) + Math.abs(my) <= 3;
        const userDraggedFast = velocityY < -0.10;
        if (userDraggedFast) openDrawer(velocityY);
        else if (userClickedDrawer) toggleDrawer();
      }

      // when dragging is happening
      if (isDragActive) {
        setYposition({
          drawerYPosition: my,
          immediate: false,
          config: config.stiff,
        });
      }
    },
    {
      rubberband: true,
      bounds: { bottom: 0, top: drawerThreshold },
    }
  );

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
