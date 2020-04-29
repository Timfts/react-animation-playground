import styled from 'styled-components'
import { rgba, lighten }  from 'polished'

export default {
  root: styled.div`
    background-color:green;
    height:100vh;
    width:100%;
    position: relative;
    overflow:hidden;
  `,

  backdrop: styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: ${rgba('black', .5)};
    display:none;
  `,

  menu: styled.div`
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    height:70px;
    background-color:${lighten(.3, 'black')};
    display:flex;
    border-top:1px solid black;
  `,

  playerDrawer: styled.div`
    position:fixed;
    height:160px;
    bottom:0;
    width:100%;
    background-color:blue;
  `
}