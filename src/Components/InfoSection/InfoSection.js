import React, { useState } from 'react'
import { useInViewEffect } from 'react-hook-inview'

import { ButtonA } from '../Button/Button';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'


const InfoSection = ({id, lightBg, imgStart, topline, lightText, subLightText, headline, description, description2, description3, img, alt, buttonActive, link}) => {
  const [visible, setVisible] = useState(false)

  const ref = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
        setVisible(entry.isIntersecting)
      }
    },
    { threshold: 0.5 },
  )
  
  const renderButton = () => {
    if (!buttonActive){
      return <></>;
    }else{
      return  <BtnWrap>
                <ButtonA active={buttonActive} big={true} href="https://github.com/alberttran1">Browse</ButtonA>
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
  
  console.log({id,visible})
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
            {visible ? 
              <TextWrapper ref={ref}>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                {renderDesc()}
                {renderButton()}
              </TextWrapper>
            :
              <div ref={ref}/>
            }
            </Column1>
            <Column2>
              {visible ?
                <ImgWrap>
                  <Img src={img} alt={alt}/>
                </ImgWrap>
              :
                null  
              }
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
