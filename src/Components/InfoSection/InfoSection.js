import React from 'react'
import { ButtonA } from '../Button/Button';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'


const InfoSection = ({id, lightBg, imgStart, topline, lightText, subLightText, headline, description, description2, description3, img, alt, buttonActive, link}) => {
  const renderButton = () => {
    if (!buttonActive){
      return <></>;
    }else{
      return  <BtnWrap>
                <ButtonA active={buttonActive} big="true" href="https://github.com/alberttran1">Browse</ButtonA>
              </BtnWrap>;
    }
  }

  const renderDesc = () => {
    if (description3 !== ''){
      return <Subtitle subLightText={subLightText}>{description}<br/><br/>{description2}<br/><br/>{description3}</Subtitle>
    } if (description2 !== ''){
      return <Subtitle subLightText={subLightText}>{description}<br/><br/>{description2}</Subtitle>
    }else{
      return <Subtitle subLightText={subLightText}>{description}</Subtitle>
    }
  }
  
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper >
              <TopLine>{topline}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              {renderDesc()}
              {renderButton()}
            </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
              <Img src={img} alt={alt}/>
            </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
