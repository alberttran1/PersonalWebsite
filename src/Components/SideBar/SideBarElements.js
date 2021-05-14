import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export const BlurContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    position: fixed;
    z-index: ${({ isOpen }) => (isOpen ? '999' : '-1')};
    display: grid;
    width: 100%;
    height: 100%;
    background: rgb(31,40,51,0.3);
    backdrop-filter: blur(3px);
    opacity: ${({ isOpen }) => (isOpen ? '1' : '1')};
    transition: all 0.2s ease-in-out;
  }
`

export const SidebarContainer = styled.aside`
  font-family: 'Sora', sans-serif;
  font-weight: bold;
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #c5c6c7;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 5px 10px #22222222;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '1')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-350px')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 90px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 80px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: cneter;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  text-decoration: none;
  color: #1f2833;
  cursor: pointer;

  &:hover {
    color: #66fcf1;
    transition: 0.2s ease-in-out;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
  border-radius: 5px;
  background: #66fcf1;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 28px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #66fcf1;
  }
`