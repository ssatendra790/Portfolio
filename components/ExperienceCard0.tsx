import React from 'react'
import { motion } from "framer-motion";

type Props = {}
//https://www.linkpicture.com/q/pc-photo.jpg
//https://www.linkpicture.com/q/remark-skill.jpg
function ExperienceCard0({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-10 flex-shrink-0 w-[350px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 40 }}
        viewport={{once: true}}
        className='w-16 h-16 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center' src="https://www.linkpicture.com/q/remark-skill.jpg" alt="remarkskill" />

        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Internship Trainee</h4>
          <p className='font-bold text-2xl mt-1'>Remark Skill</p>
          <div className='flex space-x-5 my-2'>
              <img className='w-10 h-10 rounded-full object-contain' src="https://cdn-icons-png.flaticon.com/512/888/888859.png?w=740&t=st=1688839250~exp=1688839850~hmac=04a94f37783ff4d9cfd5d8701ed023739a2fb66fbfdc04d29ddac17f7179df81" alt="html" />
              <img className='w-10 h-10 rounded-full' src="https://cdn-icons-png.flaticon.com/512/888/888847.png?w=740&t=st=1688839304~exp=1688839904~hmac=0750729e21c87d1d734515dbd620df1e1d72fcb0461b59b97c2409f8f81b34a5" alt="css" />
              <img className='w-10 h-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433" alt="javascript" />
              <img className='w-10 h-10 rounded-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cib-netlify_%28CoreUI_Icons_v1.0.0%29.svg/640px-Cib-netlify_%28CoreUI_Icons_v1.0.0%29.svg.png" alt="netlify" />
              <img className='w-10 h-10 rounded-full object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207" alt="react" />
              <img className='w-10 h-10 rounded-full object-contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode" />
          </div>
          <p className='uppercase py-2 text-gray-300'>October 2021 - November 2021</p>

          <ul className='list-disc space-y-1 ml-5 text-lg'>
            <li>Gained experience in HTML, CSS, JavaScript & React</li>
            <li>Developed a photography blog website using React </li>
            {/* <li>Created interactive UI with React, HTML, and CSS integration </li> */}
            <li>Hosted website on Netlify for seamless deployment and updates </li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard0