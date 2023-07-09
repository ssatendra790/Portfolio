import React from 'react'
import { motion } from "framer-motion";

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
        src="https://www.linkpicture.com/q/IMG_3215.jpg" className='-mb-28 md:mb-0 flex-shrink-0 w-24 h-24 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]'/>
        <div className='space-y-8 px-0 md:px-8'>
            <h4 className='text-3xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>Little</span> background</h4>
            <p className='text-base'>I am <b style={{color:'#F7AB0A'}}>Satendra Singh</b>, a final-year B.Tech student majoring in Computer Science with a specialization in AI & ML.Competitive programming has honed my problem-solving skills, while my focus on frontend development allows me to create visually appealing web interfaces. <br /> <br/>
            Here is my resume for you reference 👉
            <a style={{color: '#F7AB0A'}} href='https://drive.google.com/file/d/12QvofFsP9U9By1XLvqW7SMzAH1BQineQ/view?usp=sharing'> Download </a></p>
        </div>
    </motion.div>
  )
}

export default About