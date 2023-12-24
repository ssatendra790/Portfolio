import React from 'react'
import { motion } from "framer-motion";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SwipeDownAltIcon from '@mui/icons-material/SwipeDownAlt';

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
        initial={{
            x: -200,
            opacity:0
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity: 1,
            x:0
        }}
        viewport={{once:true}}
        src="https://i.ibb.co/QrjrBnD/IMG-3215.jpg" className='-mb-28 md:mb-0 flex-shrink-0 w-24 h-24 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]'/>
        <div className='space-y-8 px-0 md:px-8 flex items-center flex-col'>
            <h4 className='text-3xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>Little</span> background</h4>
            <p className='text-base'>Greetings! I am <b style={{color:'#F7AB0A'}}>Satendra Singh</b>, a dynamic and ambitious final-year B.Tech student specializing in Computer Science (AI & ML). My academic journey has equipped me with a robust foundation, while my passion for competitive programming has finely honed my problem-solving prowess. Complementing this technical acumen is my proficiency in frontend development, where I channel my creativity to craft visually captivating web interfaces. <br /> <br/>
Allow me to present my comprehensive resume for your perusal <SwipeDownAltIcon/></p>
            <a href='https://drive.google.com/file/d/12QvofFsP9U9By1XLvqW7SMzAH1BQineQ/view?usp=sharing' > <button className='bg-[#ff9b20] p-2 text-lg hover:bg-[#ff9b20]/90 rounded-md text-gray-100'> <DownloadForOfflineIcon/> Download </button> </a>
        </div>
    </motion.div>
  )
}

export default About