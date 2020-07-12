import { useRef, useState } from "react";
import { useDrag } from "react-use-gesture";
import { useSpring, config } from "react-spring";
import useWindow from "hooks/useWindow";
import useChromeAddressBarColor from "hooks/useChromeAddresbarColor";
import { colors } from "./MusicPlayer.theme";

export default function useMusicPlayer() {
  /* states, values and its setters */
  const nowPlayingRef = useRef(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const windowHeight = useWindow()?.windowSize?.height;
  const drawerThreshold = -(windowHeight - 140 - 80);

  const [{ drawerYPosition }, setYposition] = useSpring(() => ({
    drawerYPosition: 0,
    config: { tension: 247, friction: 27 },
  }));
  const playerDrawerYMoviment = drawerYPosition.interpolate(
    (y) => `translate3D(0, ${y}px, 0)`
  );

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
    console.log("opened drawer");
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
      offset,
      event,
      tap,
    }) => {
      const [, my] = movement;
      const [, velocityY] = movementVelocity;
      const [, offsetY] = offset;

      if (tap) {
        toggleDrawer();
      }
      // when drawer reaches the threshold
      if (my < drawerThreshold) cancel();
      // when user stop dragging or just tapped drawer
      if (isLastEvent) {
        /* const userClickedDrawer = Math.abs(mx) + Math.abs(my) <= 3; */
        const userDraggedFast = velocityY < -0.1;
        if (userDraggedFast) openDrawer(velocityY);
        /* else if (userClickedDrawer) toggleDrawer(); */
      }

      // when dragging is happening
      if (isDragActive) {
        setYposition({
          drawerYPosition: offsetY,
          immediate: false,
          config: config.stiff,
        });
      }
    },
    {
      initial: () => [0, drawerYPosition.startPosition],
      rubberband: true,
      axis: "y",
      filterTaps: true,
      bounds: { bottom: 0, top: drawerThreshold },
    }
  );

  // change android chrome theme color on page load
  useChromeAddressBarColor({ colorHexa: colors["ebony-clay"] });

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
