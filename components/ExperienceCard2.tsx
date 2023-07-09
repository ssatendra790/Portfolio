import React from 'react'
import { motion } from "framer-motion";

type Props = {}
//https://www.linkpicture.com/q/pc-photo.jpg
//https://www.linkpicture.com/q/remark-skill.jpg
function ExperienceCard2({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-10 flex-shrink-0 w-[350px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 40}}
        viewport={{once: true}}
        className='w-16 h-16 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center' src="https://www.slu.edu/marcom/tools-downloads/imgs/logo/primary-mark/logowithyear_rgb.jpg" alt="remarkskill" />

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Data Visualisaion Intern</h4>
          <p className='font-bold text-2xl mt-1'>Saint Louis University</p>
          <div className='flex space-x-5 my-2'>
              <img className='w-10 h-10 rounded-full object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png" alt="microsoftexcel" />
              <img className='w-10 h-10 rounded-full object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode" /> 
              <img className='w-10 h-10 rounded-full object-cover' src="https://1000logos.net/wp-content/uploads/2023/01/Google-Docs-logo.png" alt="googlesheets" />
              <img className='w-10 h-10 rounded-full' src="https://static.vecteezy.com/system/resources/previews/012/697/295/original/3d-python-programming-language-logo-free-png.png" alt="python" />
          </div>
          <p className='uppercase py-2 text-gray-300'>October 2022 - November 2022</p>

          <ul className='list-disc space-y-3 ml-5 text-lg'>
            <li>Data Visualization Intern at Saint Louis University</li>
            <li>Analyzed & visualized dataset on SUPERHERO U EVENT </li>
            <li>Utilized MS Excel for data analysis and visualization </li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard2