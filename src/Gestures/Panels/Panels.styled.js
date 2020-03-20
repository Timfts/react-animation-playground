import styled from 'styled-components'


export default {
  root: styled.div`
    width:100%;
    height:100vh;
    background-color:gray;
    position:relative;
  `,

  moviePanels: styled.div`
    background-color:red;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    height:65%;
  `,

  panel: styled.div`
    position:absolute;
    bottom:0;
    width:300px;
    height:80%;
    background-color:white;
    left: calc(50% - 150px);
  `
}