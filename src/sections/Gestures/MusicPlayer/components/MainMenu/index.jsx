import React from "react";
import S from "./MainMenu.styled";

import MainMenuButton from "../MainMenuButton";

const menuItems = [
  { label: "Home", icon: "IoIosHome" },
  { label: "Search", icon: "IoIosSearch" },
  { label: "Collections", icon: "IoIosFiling" },
  { label: "Profile", icon: "IoMdPerson" },
].map((menuItem, index) => (
  <MainMenuButton {...menuItem} key={`menu-item-${index}`} />
));

export default function MainMenu() {
  return (
    <S.Root>
      <S.Container>{menuItems}</S.Container>
    </S.Root>
  );
}
