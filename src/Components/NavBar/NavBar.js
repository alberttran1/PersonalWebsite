import React, { useState, useEffect } from 'react'
import { Nav,NavLink, Bars, NavMenu} from './NavBarElements';
import { ButtonR } from '../Button/Button';

import logo from '../../Images/logo.png';
import burger from '../../Images/hamburger.png';


const NavBar = ({ toggle }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos ));
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() =>{
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  
  });



  return (
    <>
      <Nav style={{ top: visible? '0' : '-80px'}}>
        <NavLink to="hero" smooth={true} duration={1000}>
          <img src={logo} alt='logo' width="42" height="35"/>
        </NavLink>
        <Bars onClick={toggle}>
          <img src={burger} alt='burger' width="36" height="30"/>
        </Bars>
        <NavMenu>
            <NavLink to="about" smooth={true} duration={1000} activeStyle>
              About
            </NavLink>
            <NavLink to="projects" smooth={true} duration={1000} activeStyle>
              Projects
            </NavLink>
            <NavLink to="contact" smooth={true} duration={1000} activeStyle>
              Contact
            </NavLink>
            <ButtonR to='/Resume' style={{marginLeft: '20px'}}>Resume</ButtonR>
        </NavMenu>
      </Nav>
    </>
  )  
}

export default NavBar
