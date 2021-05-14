import styled from "styled-components"
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const Nav = styled.nav`
  background: rgb(31,40,51,0.9);
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  box-shadow: 0px 5px 10px #22222222;
  backdrop-filter: blur(5px);
  z-index: 10;
  position: fixed;
  top: 0px;
  font-family: 'Sora', sans-serif;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
`


export const NavLink = styled(LinkS)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #C5C6C7;
  }
  
  &.active {
    color: #66FCF1;
  }
`

export const Bars = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;

    color: #FFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 3px;
  background: #66FCF1;
  padding: 10px 22px;
  color: #1F2833;
  border:none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`