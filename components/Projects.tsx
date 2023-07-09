import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

interface Project {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}

function Projects({}: Props) {
  const projects: Project[] = [
    {
      id: 1,
      imageSrc: 'https://www.linkpicture.com/q/Screenshot-2023-07-09-022544-1.jpg',
      title: 'Online-Text-Editor',
      description: 'Enhance your writing with our platform: analyze text, generate summaries, convert case, capitalize, reverse text, and preview changes in real-time. Streamline your workflow and create captivating content effortlessly.',
    },
    {
      id: 2,
      imageSrc: 'https://www.linkpicture.com/q/Screenshot-2023-07-09-030142.jpg',
      title: 'Personal Blog Website',
      description: 'Personal blog website with engaging content, responsive design, and customized layout. Seamless navigation, interactive features, and visually appealing design elements for an enjoyable browsing experience.',
    },
    {
        id: 3,
        imageSrc: 'https://www.linkpicture.com/q/utubeclone.jpg',
        title: 'Youtube Clone',
        description: 'YouTube clone built with React, JavaScript, Firebase, and other modern technologies. Explore videos, user authentication, real-time updates, and dynamic content creation for an immersive YouTube-like experience.'
    }
    // Add more project objects as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project) => (
          <div key={project.id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen object-cover">
            <motion.img
              initial={{ y: -150, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 2}}
              viewport={{ once: true }}
              src={project.imageSrc}
              alt=""
              style={{ maxWidth: '50%', height: 'auto' }}
            />
            <div className="space-y-2 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">Featured Project {project.id} of {projects.length} </span> <span>: </span>
                {project.title}
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
