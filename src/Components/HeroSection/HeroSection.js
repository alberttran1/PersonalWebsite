import React from 'react'
//import { Button } from '../ButtonElements';

import Slice from '../../../src/Images/slice.png'
import Me from '../../../src/Images/me.png'

import './HeroSection.scss'

import { HeroContainer, HeroWrapper, HeroRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Description, BtnWrap} from './HeroElements'
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
          </HeroRow>
        </HeroWrapper>
        <img className="slice" src={Slice} alt=""/>
        <img className="me" src={Me} alt=""/>
      </HeroContainer>
    </>
  )
}

export default InfoSection
