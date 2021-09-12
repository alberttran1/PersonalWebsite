import styled from 'styled-components'

export const HeroContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#c5c6c7' : '#1f2833')};
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`

export const HeroWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 950px;
  width: 100%;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  font-family: 'Sora', sans-serif;
`

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #66fcf1;
  font-size: 16px
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  animation: slideDown1 4s ease-in-out;

  @keyframes slideDown1{
    0%{
      opacity: 0;
      transform: translateY(-20px);
    }
    75%{
      opacity: 0;
      transform: translateY(-20px);
    }
    85%{
      opacity: 1;
      transform: translateY(0px);
    }
  }
`


export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 90px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#fff' : '#0b0c10')};
  animation: slideDown2 4s ease-in-out;

  @keyframes slideDown2{
    0%{
      opacity: 0;
      transform: translateY(-20px);
    }
    75%{
      opacity: 0;
      transform: translateY(-20px);
    }
    80%{
      opacity: 0;
      transform: translateY(-20px);
    }
    90%{
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 600px;
  margin-bottom: 35px;
  font-size: 40px;
  line-height: 40px;
  color: ${({ subLightText }) => (subLightText ? '#c5c6c7' : '#1f2833')};
  animation: slideDown3 4s ease-in-out;

  @keyframes slideDown3{
    0%{
      opacity: 0;
      transform: translateY(-20px);
    }
    75%{
      opacity: 0;
      transform: translateY(-20px);
    }
    85%{
      opacity: 0;
      transform: translateY(-20px);
    }
    95%{
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export const Description = styled.p`
  max-width: 800px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ subLightText }) => (subLightText ? '#45a29e' : '#1f2833')};
  animation: slideDown4 4s ease-in-out;

  @keyframes slideDown4{
    0%{
      opacity: 0;
      transform: translateY(-20px);
    }
    90%{
      opacity: 0;
      transform: translateY(-20px);
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  position: absolute;
  display: inline;
  top: 0;
  right: 0;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 00 10px 0;
  padding-right: 0;
  animation: slideUp 2s ease-in-out;

  @keyframes slideUp{
    0%{
      opacity: 0;
      transform: translateY(20px);
    }
    75%{
      opacity: 0;
      transform: translateY(20px);
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }
`