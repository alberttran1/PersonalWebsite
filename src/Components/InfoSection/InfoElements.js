import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#c5c6c7' : '#1f2833')};

  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  font-family: 'Sora', sans-serif;
  animation: slideUp 2s ease-in-out;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`

export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  animation: slideDown 1s ease-in-out;

  @keyframes slideDown{
    0%{
      opacity: 0;
      transform: translateY(-20px);
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export const TopLine = styled.p`
  color: #66fcf1;
  font-size: 16px
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1f2833')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ subLightText }) => (subLightText ? '#f7f8fa' : '#1f2833')};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  animation: slideDown 1s ease-in-out;
`

export const Img = styled.img`
  width: 100%;
  margin: 00 10px 0;
  padding-right: 0;
`