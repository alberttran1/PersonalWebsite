import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const ButtonS = styled(LinkS)`
  border-radius: 2px;
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 30px': '6px 10px')};
  color: #66FCF1;
  font-size: 20px;
  border: solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, rgb(31,40,51,0.1) 50%,#66FCF1 30%);
  -webkit-transition: background-position 1s;
  -moz-transition: background-position 1s;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all  0.2s ease-in-out;
    background-position: -100%;
    color: ${({light}) => (light ?'#c5c6c7':'#1f2833')};
    transform: skewX(-15deg);
  }
`
export const ButtonR = styled(LinkR)`
  border-radius: 2px;
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 30px': '6px 10px')};
  color: #66FCF1;
  font-size: 20px;
  border: solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, rgb(31,40,51,0.1) 50%,#66FCF1 30%);
  -webkit-transition: background-position 1s;
  -moz-transition: background-position 1s;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all  0.2s ease-in-out;
    background-position: -100%;
    color: ${({light}) => (light ?'#c5c6c7':'#1f2833')};
    transform: skewX(-15deg);
  }

`

export const ButtonA = styled.a`
  border-radius: 2px;
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 30px': '6px 10px')};
  color: #66FCF1;
  font-size: 20px;
  border: solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, rgb(31,40,51,0.1) 50%,#66FCF1 30%);
  -webkit-transition: background-position 1s;
  -moz-transition: background-position 1s;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all  0.2s ease-in-out;
    background-position: -100%;
    color: ${({light}) => (light ?'#c5c6c7':'#1f2833')};
    transform: skewX(-15deg);
  }
`