import styled from "styled-components";
import { rgba, darken } from "polished";
import { animatedStyled } from "utils/animatedStyled";
import { animated } from "react-spring";
import { colors } from "./MusicPlayer.theme";

const drawerHeight = "140px";

export default {
  Root: styled.div`
    background-color: rgb(254, 252, 202);
    height: ${(props) => props.windowHeight};
    width: 100%;
    position: relative;
    overflow: hidden;
  `,

  Backdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${rgba("black", 0.5)};
    display: none;
  `,

  Content: styled.div`
    height: 100%;
    overflow-y: scroll;
  `,

  PlayerDrawer: animatedStyled(animated.div, ["windowHeight"])`
    position: fixed;
    will-change:transform;
    width: 100%;
    background-color: ${darken(0.05, colors["ebony-clay"])};
    min-height: 100vh;
    bottom:calc(-100vh + ${drawerHeight});
  `,
};
