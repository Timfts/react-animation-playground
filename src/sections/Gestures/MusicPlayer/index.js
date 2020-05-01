import React from "react";
import S from "./MusicPlayer.styled";
import useMusicPlayer from "./MusicPlayer.hook";


export default function MusicPlayerApp() {
  const {
    nowPlayingRef,
    drawerYPosition,
    windowHeight,
    toggleDrawer
  } = useMusicPlayer();

  return (
    <S.root>
      <S.backdrop />
      <button onClick={toggleDrawer}>open drawer</button>
      <S.playerDrawer
        ref={nowPlayingRef}
        windowHeight={windowHeight}
        style={{
          transform: drawerYPosition.interpolate(
            (y) => `translate3D(0, ${y}px, 0)`
          ),
        }}
      />
      <S.menu />
    </S.root>
  );
}
