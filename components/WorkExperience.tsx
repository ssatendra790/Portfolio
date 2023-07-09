import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard0 from './ExperienceCard0';
import ExperienceCard1 from './ExperienceCard1';
import ExperienceCard2 from './ExperienceCard2';

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            <ExperienceCard0/>
            <ExperienceCard2/>
            <ExperienceCard1/>
            {/* <ExperienceCard/> */}
        </div>
    </motion.div>
  )
}

export default WorkExperience