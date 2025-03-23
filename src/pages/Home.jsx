import React from 'react'
import NavBar from '../components/NavBar'
import SocialIcons from '../components/SocialIcons'
import HomeText from '../components/HomeText'


import Img from '../components/Img';

const Home = () => {
  return (
    <>
    <div className='flex relative items-center lg:gap-0   z-200 h-full w-screen '>
        <SocialIcons />
        <HomeText />
        <Img />
    </div>
    
    </>
  )
}

export default Home