import React, { useState } from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import Modal from 'react-modal';
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


Modal.setAppElement("#root");

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  video,
  source_code_link,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {/* Simplified Project Card */}
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="cursor-pointer group"
        onClick={() => setModalIsOpen(true)}
      >
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="relative bg-tertiary p-5 rounded-2xl w-full max-w-[380px] border border-white/5 hover:border-purple-500/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10"
        >
          {/* Minimal Card Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
          
          {/* Content */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Simple Overlay on Hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

            {/* GitHub icon */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            
            {/* Simple Play Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-6 border-l-white border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] group-hover:text-purple-300 transition-colors duration-300">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tags Section */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color} hover:scale-105 transition-transform duration-200`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
          </div>
        </Tilt>
      </motion.div>

      {/* Video Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-black p-4 max-w-3xl w-[90%] mx-auto mt-10 rounded-xl outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-start overflow-y-auto"
      >
        <button
          onClick={() => setModalIsOpen(false)}
          className="text-white text-xl font-bold mb-3 ml-auto block"
        >
          ✕
        </button>
       <div className="w-full h-[400px] flex justify-center items-center">
    <video
      controls
      className="max-h-full max-w-full object-contain rounded-md"
    >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </Modal>
    </>
  );
};


// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   video,
//   source_code_link,
// }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   return (
//     <>
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='source code'
//                 className='w-1/2 h-1/2 object-contain'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>

//     {/* Modal for Video */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         className="bg-black p-4 max-w-3xl w-[90%] mx-auto mt-10 rounded-xl outline-none"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-start overflow-y-auto"
//       >
//         <button
//           onClick={() => setModalIsOpen(false)}
//           className="text-white text-xl font-bold mb-3 ml-auto block"
//         >
//           ✕
//         </button>
//         <video width="100%" height="auto" controls autoPlay>
//           <source src={video} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </Modal>
//       </>
//   );
// };

const Works = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Full-width Background */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-primary via-black-200 to-tertiary">
        {/* Floating Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-20 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-40 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-60 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
        
        {/* Additional particles for full coverage */}
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-teal-400 rounded-full animate-bounce opacity-60"></div>
        
        {/* Geometric Shapes with Enhanced Animations */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-pulse transform hover:scale-110 transition-transform duration-300"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rotate-45 animate-bounce transform hover:rotate-90 transition-transform duration-500"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/3 w-14 h-14 bg-gradient-to-r from-green-500/20 to-blue-500/20 rotate-12 animate-pulse transform hover:rotate-45 transition-transform duration-700"></div>
        
        {/* Floating Code Symbols */}
        <div className="absolute top-24 right-40 text-purple-400/30 text-2xl animate-float font-mono">&lt;/&gt;</div>
        <div className="absolute bottom-40 left-32 text-blue-400/30 text-xl animate-float-delayed font-mono">{ }</div>
        <div className="absolute top-1/2 left-20 text-cyan-400/30 text-lg animate-float font-mono">( )</div>
        <div className="absolute bottom-60 right-32 text-pink-400/30 text-xl animate-float-slow font-mono">[ ]</div>
        
        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
        
        {/* Enhanced Glow Effects */}
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-cyan-600/8 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Moving Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full animate-orbit-slow"></div>
          <div className="absolute -bottom-40 -right-40 w-60 h-60 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full animate-orbit-reverse"></div>
        </div>
        
        {/* Interactive Hover Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black-100/5"></div>
      </div>
      
      {/* Content Container with padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 py-10 sm:py-16">
        <motion.div variants={textVariant()} className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur opacity-30"></div>
          <div className="relative">
            <p className={`${styles.sectionSubText} `}>My work</p>
            <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent`}>Projects.</h2>
          </div>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] backdrop-blur-sm bg-black-200/10 p-4 rounded-lg border border-white/5'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
