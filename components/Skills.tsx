import React from 'react';
import { motion } from "framer-motion";
import Skill from '@/components/Skill'
import Skill1 from '@/components/Skill1'
import Skill2 from '@/components/Skill2'
import Skill3 from '@/components/Skill3'
import Skill4 from '@/components/Skill4'
import Skill5 from '@/components/Skill5'
import Skill6 from '@/components/Skill6'
import Skill7 from '@/components/Skill7'
import Skill8 from '@/components/Skill8'
import Skill9 from '@/components/Skill9'
import Skill10 from '@/components/Skill10'
import Skill11 from '@/components/Skill11'
import Skill12 from '@/components/Skill12'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill/>
            {/* <Skill1/> */}
            <Skill2/>
            <Skill11/>
            <Skill3/>
            <Skill4/>
            <Skill5/>
            <Skill10/>
            <Skill12/>
            <Skill6/>
            <Skill7/>
            <Skill8/>
            <Skill9/>
            {/* <Skill/> */}
        </div>
    </motion.div>
  )
}

export default Skills