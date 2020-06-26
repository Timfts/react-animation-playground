import React from "react";
import S from "./MusicPlayer.styled";
import useMusicPlayer from "./MusicPlayer.hook";


export default function MusicPlayerApp() {
  const {
    nowPlayingRef,
    toggleDrawer,
    dragEventCreator,
    playerDrawerYMoviment
  } = useMusicPlayer();

  return (
    <S.Root>
      <S.Backdrop />
      <button onClick={toggleDrawer}>open drawer</button>
      <S.PlayerDrawer
        ref={nowPlayingRef}
        style={playerDrawerYMoviment}
        {...dragEventCreator()}
      />
      <S.Menu />
    </S.Root>
  );
}
