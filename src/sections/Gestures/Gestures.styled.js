import styled from 'styled-components'


export default {
  root: styled.div`
    display:block;
  `,

  mainPage: styled.div`
    padding:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
  `,

  desktopOverlay: styled.div`
    width:100vw;
    height:100vh;
    position:fixed;
    background-color:yellow;
    display:none;
    top:0;
    left:0;
    align-items:center;
    justify-content:center;

    @media (min-width: 600px){
      display:flex;
    }
  `
}
