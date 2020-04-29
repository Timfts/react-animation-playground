import React from 'react'
import S from './musicPlayer.styled'
import useMusicPlayer from './musicPlayer.hook'

/**
 * inspired by 
 */

export default function musicPlayer(){
  const logic = useMusicPlayer()
  
  return (
    <S.root>
      <S.backdrop />
      roote
      <S.playerDrawer />
      <S.menu />
    </S.root>
  )
}