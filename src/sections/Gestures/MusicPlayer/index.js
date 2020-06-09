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
    <S.root>
      <S.backdrop />
      <button onClick={toggleDrawer}>open drawer</button>
      <S.playerDrawer
        ref={nowPlayingRef}
        style={playerDrawerYMoviment}
        {...dragEventCreator()}
      />
      <S.menu />
    </S.root>
  );
}
