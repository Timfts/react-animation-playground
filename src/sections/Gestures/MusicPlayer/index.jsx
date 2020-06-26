import React, { useEffect } from "react";
import S from "./MusicPlayer.styled";
import useMusicPlayer from "./MusicPlayer.hook";

import MainMenu from "./components/MainMenu";

export default function MusicPlayerApp() {
  const {
    nowPlayingRef,
    toggleDrawer,
    dragEventCreator,
    playerDrawerYMoviment,
    windowHeight,
  } = useMusicPlayer();

  return (
    <S.Root windowHeight={`${windowHeight}px`}>
      <S.Backdrop />
      <S.Content>
        <button onClick={toggleDrawer}>open drawer</button>
      </S.Content>
      <S.PlayerDrawer
        ref={nowPlayingRef}
        style={playerDrawerYMoviment}
        {...dragEventCreator()}
      />
      <MainMenu />
    </S.Root>
  );
}
