import React from 'react'
import NavBar from '../components/NavBar'
import SocialIcons from '../components/SocialIcons'
import HomeText from '../components/HomeText'


import Img from '../components/Img';

const Home = () => {
  return (
    <>
    <div className='flex  md:flex-row flex-col-reverse flex-col relative justify-center items-center lg:gap-0 gap-5 z-200 md:h-full h-full md:mt-0 mt-15 py-10 w-screen '>
        <div className='flex md:flex-row md:gap-10 flex-row-reverse   md:justify-start justify-between '>
        <SocialIcons />
        <HomeText />
        </div>
        <Img />
    </div>
    
    </>
  )
}

export default Home