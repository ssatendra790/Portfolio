import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Nivaran from '../Assets/Nivaran.png';
import YoutubeClone from '../Assets/YoutubeClone.png';
import TypingTest from '../Assets/TypingTest.png';
import TextEditor from '../Assets/TextEditor.png';
import BlogWebsite from '../Assets/BlogWebsite.png';
import Portfolio from '../Assets/Portfolio Website.png';
import LaunchIcon from '@mui/icons-material/Launch';
import NewsApp from '../Assets/News App.png';
import GitHubIcon from '@mui/icons-material/GitHub';


type Props = {};

type StaticImageData = {
  src: string;
};
interface Project {
  id: number;
  imageSrc: StaticImageData;
  title: string;
  description: string;
  visit: string;
  github: string;
}

function Projects({}: Props) {
  const projects: Project[] = [
    {
      id: 1,
      imageSrc:{src: Nivaran.src},
      title: 'Nivaran',
      description: 'Engineered Nivaran, a cutting-edge web platform using React, Node.js, and machine learning. Seamlessly unifying communities, it facilitates precise grievance reporting, automates ministry allocation, and ensures professional communication for enhanced government transparency and accountability.',
      visit: '#',
      github: 'https://github.com/ssatendra790/Nivaran_Frontend/tree/arnav',
    },
    {
      id: 2,
      imageSrc:{src: YoutubeClone.src},
      title: 'Youtube Clone',
      description: '"Executed a YouTube clone with effortless navigation and a polished UI, empowering users to explore and watch videos within a familiar interface. Seamlessly delivers an immersive video-watching experience.',
      visit: 'https://lite-1e696.web.app/',
      github: 'https://github.com/ssatendra790/Youtube-LITE',
    },
    {
      id: 3,
      imageSrc:{src: TextEditor.src},
      title: 'Online-Text-Editor',
      description: 'Developed and deployed a user-friendly web-based text editor with dark mode. Packed with functionalities like word counting, capitalization, reversing, and text case conversion, enhancing the editing experience with versatility and ease.',
      visit: 'https://gifted-poincare-a308fa.netlify.app/',
      github: 'https://github.com/ssatendra790/Text-Editor',
    },

    {
      id: 4,
      imageSrc:{src: BlogWebsite.src},
      title: 'Blog Website',
      description: 'Designed and launched an engaging personal blog website, featuring a visually captivating and responsive interface. Users can effortlessly share pictures and create compelling blog posts, enhancing the overall blogging experience.',
      visit: 'https://professional-sat.netlify.app/',
      github: 'https://github.com/ssatendra790/Blog-Website',
    },
    {
      id: 5,
      imageSrc:{src: Portfolio.src},
      title: 'Portfolio Website',
      description: 'Crafted a sleek portfolio website with Next.js, Framer Motion, and Tailwind CSS for a modern aesthetic and seamless functionality. Effectively showcases my work and skills, ensuring a professional online presence.',
      visit: 'https://stndrogue.vercel.app/',
      github: 'https://github.com/ssatendra790/Portfolio',
    },
    {
      id: 6,
      imageSrc: {src: TypingTest.src},
      title: 'Speed Typing Test',
      description: 'Crafting a feature-rich Speed Typing Test website with both multiplayer and single-player modes. Utilizing ReactJS, Tailwind CSS, and TypeScript for an immersive experience, fostering competition and individual skill development.',
      visit: '#',
      github: 'https://github.com/ssatendra790/Speed-Typing-Test',
    },
    {
      id: 7,
      imageSrc: {src: NewsApp.src},
      title: 'News App',
      description: 'Introducing a robust news app developed with ReactJS, JavaScript, and Tailwind CSS. The application features categorized news for a streamlined and user-friendly experience, blending functionality with a clean design.',
      visit: '#',
      github: 'https://github.com/ssatendra790/VigyaNews',
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 content-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project) => (
          <div key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-16 md:p-44 h-screen object-cover">
            <motion.div
              initial={{ y: -150, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 2}}
              viewport={{ once: true }}
            >
            <Image
              src={project.imageSrc.src}
              alt=""
              width={500} 
              height={300} 
            />
            </motion.div>
            <div className="space-y-2 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center flex justify-center">
                <span className="underline decoration-[#F7AB0A]">Featured Project {project.id} of {projects.length} </span> <span>: </span>
                {project.title} <a className='px-2 text-[#e8fd00]' href={project.github} > <GitHubIcon/> </a> <a className='px-2 text-[#008bfd]' href={project.visit} > <LaunchIcon/> </a>
              </h4>

              <p className="text-lg text-center md:text-left">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
