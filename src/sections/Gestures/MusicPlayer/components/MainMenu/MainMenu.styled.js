import styled from "styled-components";
import { colors } from "../../MusicPlayer.theme";

export default {
  Root: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${colors["ebony-clay"]};
    color: ${colors["carnation"]};
    max-height: 90px;
  `,
  Container: styled.nav`
    width:100%;
    height:100%;
    padding:10px 25px;
    padding-bottom:5px;
    display:flex;
    justify-content:space-between;
  `
};
