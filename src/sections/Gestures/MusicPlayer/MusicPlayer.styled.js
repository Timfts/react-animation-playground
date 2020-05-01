import styled from "styled-components";
import { rgba } from "polished";
import {animatedStyled} from "utils/animatedStyled"
import { animated } from 'react-spring'

export default {
  root: styled.div`
    background-color: rgb(254,252,202);
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
    background-color: #f6772d;
    display: flex;
    border-top: 1px solid black;
    
  `,

  playerDrawer: animatedStyled(animated.div, ['windowHeight'])`
    position: fixed;
    height: 160px;
    will-change:transform;
    width: 100%;
    background-color: #48c68d;
    min-height: 100vh;
    bottom:calc(-100vh + 160px);
  `,

};


