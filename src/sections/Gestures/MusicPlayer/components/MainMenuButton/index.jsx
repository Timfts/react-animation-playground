import React from "react";
import * as ioFont from "react-icons/io";

import S from './MainMenuButton.styled'

export default function MenuButton({ label, icon }) {
  const IconComponent = ioFont[icon] || {};
  return (
    <S.Root>
      <IconComponent size={20} />
      <S.Label>{label}</S.Label>
    </S.Root>
  );
}
