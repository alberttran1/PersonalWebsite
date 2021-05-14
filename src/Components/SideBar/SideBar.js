import React from 'react'
import { BlurContainer,SidebarContainer, Icon, SidebarWrapper, SidebarMenu, SidebarLink } from './SideBarElements'
import { ButtonR } from '../Button/Button'
import x from '../../Images/x.png'


const Sidebar = ({isOpen,toggle,turnOff}) => {
  return (
    <BlurContainer isOpen={isOpen} onClick={turnOff}>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <img src={x} alt={x} width="30" height="25"/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={turnOff} smooth={true} duration={1000} >About</SidebarLink>
            <SidebarLink to="projects" onClick={turnOff} smooth={true} duration={1000} >Projects</SidebarLink>
            <SidebarLink to="contact" onClick={turnOff} smooth={true} duration={1000} >Contact</SidebarLink>
          </SidebarMenu>
          <ButtonR big="true" light="true" to="/resume">Resume</ButtonR>
        </SidebarWrapper>
      </SidebarContainer>
    </BlurContainer>
  )
}

export default Sidebar
