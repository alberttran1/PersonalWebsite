import React, {useState, useEffect} from 'react'
import { homeObj2, homeObj3 } from '../Components/InfoSection/Data'
import { HeroData } from '../Components/HeroSection/Data'
import InfoSection from '../Components/InfoSection/InfoSection'
import HeroSection from '../Components/HeroSection/HeroSection'
import NavBar from '../Components/NavBar/NavBar'
import SideBar from '../Components/SideBar/SideBar'
import LoadingScreen from '../Components/LoadingScreen/LoadingScreen'
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setTimeout(()=>{
      window.scrollTo(0, 0)
     }, 2000)
  }, [])

  const toggleSide = () => {
    setIsOpen(!isOpen)
  }

  const turnOff = () => {
    setIsOpen(false)
  }

  return (
    <>
    <LoadingScreen/>
    <SideBar isOpen={isOpen} toggle={toggleSide} turnOff={turnOff} />
    <NavBar toggle={toggleSide} />
    <HeroSection {...HeroData}/>
    <InfoSection {...homeObj2}/>
    <InfoSection {...homeObj3}/>
    <Footer/>
    </>
  )
}

export default HomePage
