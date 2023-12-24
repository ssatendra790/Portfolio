import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import CrackDSA from '../Assets/crackdsa.jpg';
import RemarkSkill from '../Assets/RemarkSkill.jpg';
import SluIcon from '../Assets/slu-social.png';
import ProgrammingClub from '../Assets/pc-photo.jpg';
import htmlLogo from '../Assets/htmllogo.webp';
import CSSLogo from '../Assets/CSS.webp';
import ReactLogo from '../Assets/ReactLogo.png';
import TailwindCSS from '../Assets/tailwindcss.png';
import JavascriptLogo from '../Assets/JavaScript-logo.png';
import BootstrapLogo from '../Assets/BootstrapLogo.png';
import VSCodeLogo from '../Assets/VSCodeLogo.jpg';
import CPPLogo from '../Assets/CPPLogo.png';
import ExcelLogo from '../Assets/MSExcelLogo.webp';
import GoogleDocLogo from '../Assets/GoogleDocLogo.png';
import LeetcodeLogo from '../Assets/LeetcodeLogo.png';
import CodeforcesLogo from '../Assets/CFLogo.png';
import CodechefLogo from '../Assets/CodechefLogo.png';
import PythonLogo from '../Assets/PythonLogo2.webp';

type Props = {};

function WorkExperience({}: Props) {

  const experience1 = {
    title: 'Frontend Developer',
    company: 'Crack DSA',
    images: [CrackDSA],
    techStackLogos: [ReactLogo, JavascriptLogo, TailwindCSS, htmlLogo,CSSLogo,BootstrapLogo,VSCodeLogo],
    startDate: 'July 2023',
    endDate: 'August 2023',
    description: [
      'Redesigned and creatively enhanced the crackDSA website',
      'Implemented 15+ features for improved user experience',
      'Achieved a 20 % increase in user satisfaction and engagement through strategic frontend enhancements',
    ],
  };
  const experience2 = {
    title: 'Web Developer',
    company: 'Remark Skill',
    images: [RemarkSkill],
    techStackLogos: [htmlLogo,CSSLogo, BootstrapLogo,JavascriptLogo,VSCodeLogo],
    startDate: 'October 2021',
    endDate: 'November 2021',
    description: [
      'Created captivating responsive photo blog website with Javascript, Bootstrap, CSS, HTML.',
      'Hosted website on Netlify for seamless deployment and updates',
    ],
  };
  const experience3 = {
    title: 'Data Analyst Trainee',
    company: 'Saint Louis University',
    images: [SluIcon],
    techStackLogos: [PythonLogo,ExcelLogo, GoogleDocLogo, VSCodeLogo,],
    startDate: 'October 2022',
    endDate: 'November 2022',
    description: [
      'Data Visualization Intern at Saint Louis University',
      'Analyzed 10 data with Excel, crafted visuals, led 15% efficiency boost, and guided strategy.',
    ],
  };

  const experience4 = {
    title: 'Coordinator',
    company: 'Programming Club',
    images: [ProgrammingClub],
    techStackLogos: [CPPLogo,LeetcodeLogo, CodeforcesLogo,CodechefLogo,VSCodeLogo],
    startDate: 'March 2022',
    endDate: 'Present',
    description: [
      'Conducted online and offline contests and workshops & impacting over 3000 students',
      'Managed resources for coding events'
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <ExperienceCard {...experience1} />
        <ExperienceCard {...experience3} />
        <ExperienceCard {...experience2} />
        <ExperienceCard {...experience4} />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
