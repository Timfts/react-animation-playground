import styled from "styled-components";
import { rgba, lighten } from "polished";
import {animatedStyled} from "utils/animatedStyled"
import { animated } from 'react-spring'

export default {
  root: styled.div`
    background-color: green;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  `,

  backdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${rgba("black", 0.5)};
    display: none;
  `,

  menu: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: ${lighten(0.3, "black")};
    display: flex;
    border-top: 1px solid black;
  `,

  playerDrawer: animatedStyled(animated.div, ['windowHeight'])`
    position: fixed;
    height: 160px;
    width: 100%;
    background-color: blue;
    min-height: calc(100vh - 500px);
    top: ${(props) => props.windowHeight - 150}px;
  `,

  test: animatedStyled(animated.div, ['windowHeight'])`
    background-color:red;
    height:500px;
  `
};


