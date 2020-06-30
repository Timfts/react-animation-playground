import styled from "styled-components";
import { colors } from "../../MusicPlayer.theme";

export default {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    padding:8px 12px;
    border-radius:20px;
    background-color: ${colors["ebony-clay"]};
    background-position: center;
    transition: background 0.5s;
    user-select:none;

    &:hover {
      background: ${colors["ebony-clay"]}
        radial-gradient(circle, transparent 1%, ${colors["ebony-clay"]} 1%)
        center/15000%;
    }

    &:active {
      background-color: ${colors["carnation"]};
      background-size: 100%;
      transition: background 0s;
    }
  `,

  Label: styled.span`
    margin-top: 5px;
    font-size: 10px;
  `,
};