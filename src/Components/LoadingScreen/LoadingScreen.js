import React from 'react'
import logo from '../../Images/logo.png';

import {LoadingScreenBackground,LoadingScreenImg} from './LoadingScreenElements'

const LoadingScreen = () => {
  return (
    <LoadingScreenBackground>
      <LoadingScreenImg src={logo}/>
    </LoadingScreenBackground>
  )
}

export default LoadingScreen
