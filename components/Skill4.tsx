import React from 'react'
import { motion } from "framer-motion";

type Props = {
    directionLeft ?:boolean;
}

function Skill4({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft ? -75 : 75,
            opacity: 0
        }}
        transition={{duration: 0.5}}
        whileInView={{opacity: 1, x:0}}
        // viewport={{once:true}}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" className='rounded-full border border-gray-500 object-cover w-14 h-14  md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-14 w-14 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0 object-cover'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black  opacity-100'>95%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill4