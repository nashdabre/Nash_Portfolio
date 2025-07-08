import React, { useState } from "react";
import { motion } from "framer-motion";


import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const TechCard = ({ technology, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.1,
        rotateY: 15,
        z: 50
      }}
      whileTap={{ scale: 0.95 }}
      className="relative w-36 h-36 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing background effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl"
        animate={{
          scale: isHovered ? 1.2 : 0.8,
          opacity: isHovered ? 0.8 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Main card */}
      <motion.div
        className="relative w-full h-full bg-white/10 rounded-2xl border border-purple-500/30 backdrop-blur-sm overflow-hidden"
        animate={{
          borderColor: isHovered ? "rgba(147, 51, 234, 0.8)" : "rgba(147, 51, 234, 0.3)",
          boxShadow: isHovered 
            ? "0 20px 40px rgba(147, 51, 234, 0.4)" 
            : "0 10px 20px rgba(147, 51, 234, 0.2)",
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated particles inside card */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
          <motion.div
            className="absolute bottom-2 left-2 w-1 h-1 bg-pink-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.3
            }}
          />
        </div>

        {/* Technology icon */}
        <motion.div
          className="flex items-center justify-center w-full h-full p-1"
          animate={{
            rotateZ: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={technology.icon}
            alt={technology.name}
            className="w-28 h-28 object-contain filter drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) brightness(1.1) contrast(1.1)'
            }}
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Technology name tooltip */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 text-gray-900 text-xs font-semibold px-3 py-1 rounded-lg border border-purple-500/50 backdrop-blur-sm whitespace-nowrap shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.2 }}
        >
          {technology.name}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/95 border-l border-t border-purple-500/50 rotate-45"></div>
        </motion.div>

        {/* Hover overlay effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/10"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Floating animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.4,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="relative">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Section title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack.
        </h2>
      </motion.div>

      {/* Tech grid */}
      <motion.div
        className="flex flex-row flex-wrap justify-center gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            technology={technology}
            index={index}
          />
        ))}
      </motion.div>

      {/* Floating skill badges */}
      <div className="absolute inset-0 pointer-events-none">
        {technologies.slice(0, 3).map((tech, index) => (
          <motion.div
            key={`floating-${tech.name}`}
            className="absolute w-8 h-8 opacity-20"
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain opacity-30"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
