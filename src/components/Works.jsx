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
      {/* Move the click handler here */}
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="cursor-pointer"
        onClick={() => setModalIsOpen(true)}
      >
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* GitHub icon: stop propagation so it doesn’t open modal */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
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
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
