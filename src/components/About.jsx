import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="relative group w-full"
      initial={{ opacity: 0, y: 50, rotateY: -30 }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0], 
        rotateY: 0,
        scale: [1, 1.02, 1]
      }}
      transition={{ 
        delay: index * 0.2, 
        duration: 0.8,
        y: {
          repeat: Infinity,
          duration: 3 + index * 0.5,
          ease: "easeInOut"
        },
        scale: {
          repeat: Infinity,
          duration: 4 + index * 0.3,
          ease: "easeInOut"
        }
      }}
      whileHover={{ 
        y: -15, 
        scale: 1.08, 
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      {/* Animated background glow */}
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
        style={{
          borderRadius: "40% 60% 60% 40% / 70% 30% 70% 30%"
        }}
        animate={{
          background: [
            "linear-gradient(to right, rgb(147 51 234), rgb(219 39 119), rgb(37 99 235))",
            "linear-gradient(to right, rgb(219 39 119), rgb(37 99 235), rgb(147 51 234))",
            "linear-gradient(to right, rgb(37 99 235), rgb(147 51 234), rgb(219 39 119))",
            "linear-gradient(to right, rgb(147 51 234), rgb(219 39 119), rgb(37 99 235))"
          ],
          borderRadius: [
            "40% 60% 60% 40% / 70% 30% 70% 30%",
            "60% 40% 40% 60% / 30% 70% 30% 70%",
            "40% 60% 60% 40% / 70% 30% 70% 30%"
          ]
        }}
        transition={{
          background: {
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          },
          borderRadius: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      ></motion.div>
      
      {/* Main card */}
      <motion.div 
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900/30 p-6 h-[280px] flex flex-col items-center justify-center space-y-6 border border-purple-500/20 backdrop-blur-sm overflow-hidden"
        animate={{
          borderRadius: [
            "40% 60% 60% 40% / 70% 30% 70% 30%",
            "60% 40% 40% 60% / 30% 70% 30% 70%",
            "40% 60% 60% 40% / 70% 30% 70% 30%"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60"
            animate={{
              x: [8, 240, 8],
              y: [8, 240, 8],
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-70"
            animate={{
              x: [12, 200, 50, 12],
              y: [240, 50, 200, 240],
              scale: [1, 2, 1.5, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full opacity-50"
            animate={{
              x: [8, 180, 80, 8],
              y: [90, 20, 180, 90],
              rotate: [0, 180, 360],
              scale: [1, 1.8, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Icon container with hover effects */}
        <motion.div 
          className="relative"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ 
            rotate: [0, -15, 15, 0], 
            scale: 1.15,
            transition: { duration: 0.6 }
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative bg-gradient-to-br from-gray-800 to-purple-900 p-4 rounded-full border-2 border-purple-400/50">
            <img
              src={icon}
              alt={title}
              className="w-14 h-14 object-contain filter drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* Title with modern typography */}
        <motion.div 
          className="text-center space-y-3"
          animate={{
            y: [0, -2, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <h3 className="text-white text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            {title}
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Subtle hover indicator */}
        <motion.div 
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ width: 0 }}
          whileHover={{ width: 32 }}
        />
      </motion.div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Enhanced overview container */}
      <div className="mt-8 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 rounded-3xl"></div>
        
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/30 to-purple-900/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 overflow-hidden"
        >
          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
          
          <motion.p
            className="text-secondary text-justify text-[17px] max-w-5xl leading-[30px] relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I am Nash Dabre, a Computer Engineering graduate from Fr. Conceicao Rodrigues College of Engineering, 
            Mumbai, with a CGPA of 9.07, skilled in Kotlin, Java, Python, and web development. 
            I have developed innovative projects like a landslide prediction app and a healthcare solution for rural areas, 
            utilizing tools such as Android, Flask, and AWS. As a finalist in the Bit N Build hackathon, 
            I am passionate about creating impactful technological solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* Enhanced download button */}
      <motion.div 
        className="pt-12 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.a
          href="/Nash_Dabre_Profile.pdf"
          download
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-purple-500/25 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </span>
        </motion.a>
      </motion.div>

      {/* Service Cards Grid */}
      <motion.div 
        className="mt-20 flex flex-wrap justify-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, -5, 0]
        }}
        transition={{
          opacity: { delay: 0.8, duration: 0.6 },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
