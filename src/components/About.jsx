import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[320px]  w-full" style={{ paddingLeft: "70px" }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-justify text-[17px] max-w-4xl leading-[30px]"
      >
        I am Nash Dabre, a Computer Engineering graduate from Fr. Conceicao Rodrigues College of Engineering, 
        Mumbai, with a CGPA of 9.07, skilled in Kotlin, Java, Python, and web development. 
        I have developed innovative projects like a landslide prediction app and a healthcare solution for rural areas, 
        utilizing tools such as Android, Flask, and AWS. As a finalist in the Bit N Build hackathon, 
        I am passionate about creating impactful technological solutions.
      </motion.p>

      <div className="pt-8"></div>
      <Tilt className="xs:w-[320px]  w-full" >
      <a
        href="/Nash_Dabre_Profile.pdf"
        download
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all text-white font-bold py-2 px-5 rounded shadow-card"
      >
        Download Resume
      </a></Tilt>

      <div className="mt-20 flex flex-wrap gap-9">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
