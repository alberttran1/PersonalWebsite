import React from 'react'
//import { Button } from '../ButtonElements';

import { HeroContainer, HeroWrapper, HeroRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, Description, BtnWrap, ImgWrap, Img} from './HeroElements'
import { ButtonA } from '../Button/Button';

const InfoSection = ({id, lightBg, imgStart, topline, lightText, subLightText, headline, subtitle, description,img,alt}) => {
  return (
    <>
      <HeroContainer lightBg={lightBg} id={id}>
        <HeroWrapper>
          <HeroRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
              <TopLine>{topline}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle subLightText={subLightText}>{subtitle}</Subtitle>
              <Description subLightText={subLightText}>{description}</Description>
              <BtnWrap>
                <ButtonA big="true" href="mailto:a233tran@uwaterloo.ca">Get in touch.</ButtonA>
              </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
              <Img src={img} alt={alt}/>
            </ImgWrap>
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  )
}

export default InfoSection
