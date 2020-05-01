import React from "react";
import S from "./musicPlayer.styled";
import useMusicPlayer from "./musicPlayer.hook";

/**
 * inspired by
 */

export default function MusicPlayer() {
  const {
    nowPlayingRef,
    drawerYPosition,
    setDrawerOpen,
    windowHeight,
  } = useMusicPlayer();

  return (
    <S.root>
      <S.backdrop teste="cenoura" />
      <button onClick={setDrawerOpen}>open drawer</button>
      <S.playerDrawer
        ref={nowPlayingRef}
        windowHeight={windowHeight}
        style={{
          transform: drawerYPosition.interpolate(
            (y) => `translate3D(0, ${y}px, 0)`
          ),
        }}
      />
      <S.test windowHeight="30">batata</S.test>
      <S.menu />
    </S.root>
  );
}
