import React, { useState } from 'react'
import { useInViewEffect } from 'react-hook-inview'

import { ContactContainer, ContactWrapper, Column, TopLine, Heading, Subtitle, BtnWrap } from './ContactElements'
import { ButtonA } from '../Button/Button';

const ContactSection = ({id, lightBg, lightText, subLightText, topLine, headLine, description, buttonText, buttonBig}) => {
  const [visible, setVisible] = useState(false)

  const ref = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
      setVisible(entry.isIntersecting)
    },
    { threshold: 0.5 },
  )


  return (
    <ContactContainer lightBg={lightBg} id={id}>
      <ContactWrapper>
        {visible ?
          <Column ref={ref}>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headLine}</Heading>
            <Subtitle subLightText={subLightText}>{description}</Subtitle>
            <BtnWrap>
              <ButtonA big={buttonBig}>{buttonText}</ButtonA>
            </BtnWrap>
          </Column>
        :
          <div ref={ref}/>
        }
      </ContactWrapper>
    </ContactContainer>
  )
}

export default ContactSection
