import styled from 'styled-components'

export const LoadingScreenBackground = styled.div`
  opacity:0;
  background-color:#1f2833;
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  z-index: -999;
  display: flex;
  align-items:center;
  justify-content: center;
  animation: CoverAnimation 2.5s;

  @keyframes CoverAnimation{
    0%{
      opacity: 1;
      z-index: 999;
    }
    90%{
      opacity: 1;
      z-index: 999;
    }
    100%{
      opacity: 0;
      z-index: -999;
      
    }
  }
`

export const LoadingScreenImg = styled.img`
  position: fixed;
  width: 0px;
  height: 0px;
  animation: LogoAnimation 2s;

  @keyframes LogoAnimation{
    0%{
      opacity: 0;
      width: 120px;
      height: 100px;
    }
    50%{
      opacity: 1;
    }
    80%{
      width: 120px;
      height: 100px;
    }
    100%{
      width: 0px;
      height: 0px;
    }
  }
`