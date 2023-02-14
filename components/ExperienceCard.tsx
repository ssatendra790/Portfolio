import React from 'react'
import { motion } from "framer-motion";

type Props = {}
//https://www.linkpicture.com/q/pc-photo.jpg
//https://www.linkpicture.com/q/remark-skill.jpg
function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[350px] md:w-[700px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='w-24 h-24 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center' src="https://www.linkpicture.com/q/pc-photo.jpg" alt="remarkskill" />

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Internship Trainee</h4>
          <p className='font-bold text-2xl mt-1'>Remark Skill</p>
          <div className='flex space-x-5 my-2'>
              <img className='w-10 h-10 rounded-full' src="https://www.linkpicture.com/q/remark-skill.jpg" alt="" />
              <img className='w-10 h-10 rounded-full' src="https://www.linkpicture.com/q/pc-photo.jpg" alt="" />
              <img className='w-10 h-10 rounded-full' src="https://www.linkpicture.com/q/remark-skill.jpg" alt="" />
          </div>
          <p className='uppercase py-2 text-gray-300'>Started work...</p>

          <ul className='list-disc space-y-3 ml-5 text-lg'>
            <li>I used React and Javascript there</li>
            <li>Using : React and Javascript typescript javascript </li>
            <li>Full stack development, front end developement backend </li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard