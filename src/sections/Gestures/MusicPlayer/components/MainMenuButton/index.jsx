import React from "react";
import * as ioFont from "react-icons/io";
import styled from "styled-components";

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 12px;
  `,

  Label: styled.span`
    margin-top: 5px;
  `,
};

export default function MenuButton({ label, icon }) {
  const IconComponent = ioFont[icon] || {};
  return (
    <S.Root>
      <IconComponent size={24} />
      <S.Label>{label}</S.Label>
    </S.Root>
  );
}
