import React from 'react'
import { motion } from "framer-motion";

type Props = {}
//https://www.linkpicture.com/q/pc-photo.jpg
//https://www.linkpicture.com/q/remark-skill.jpg
function ExperienceCard1({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-10 flex-shrink-0 w-[350px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 40}}
        viewport={{once: true}}
        className='w-16 h-16 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center' src="https://www.linkpicture.com/q/pc-photo.jpg" alt="remarkskill" />

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Coordinator</h4>
          <p className='font-bold text-2xl mt-1'>Programming Club, AKGEC</p>
          <div className='flex space-x-5 my-2'>
              <img className='w-10 h-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="cpp" />
              <img className='w-10 h-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="leetcode" />
              <img className='w-10 h-10 rounded-full object-contain' src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png" alt="leetcode" />
              <img className='w-10 h-10 rounded-full object-cover' src="https://store-images.s-microsoft.com/image/apps.62887.14504742535903781.aedbca21-113a-48f4-b001-4204e73b22fc.9e3be8c5-ff0e-4306-891c-ea04836b8db0" alt="codeforces" />
              <img className='w-10 h-10 rounded-full object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode" />
          </div>
          <p className='uppercase py-2 text-gray-300'>April 2022 - Present</p>

          <ul className='list-disc space-y-3 ml-5 text-lg'>
            <li>Coordinator at Programming Club, AKGEC</li>
            <li>Organized workshops to promote coding culture </li>
            <li>Managed resources for coding events </li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard1