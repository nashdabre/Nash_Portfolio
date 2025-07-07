import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import '../index.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 20%, #2a1f5a 50%, #1d1836 100%)",
        color: "#fff",
        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
        border: "1px solid rgba(147, 51, 234, 0.2)",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        position: "relative",
        overflow: "hidden"
      }}
      contentArrowStyle={{ borderRight: "7px solid #9334e4" }}

      //date={experience.date}
      
      iconStyle={{ 
        background: experience.iconBg
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[90%] h-[90%] object-contain'
          />

          
        </div>

        
      }
    >
      
      {/* Animated background particles inside card */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-4 left-3 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-1/3 right-4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-40"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
      
      <div className="relative z-10">
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
           <p className="text-sm text-purple-300 mb-1">{experience.date}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative">
      {/* Global CSS for timeline dates */}
    <style dangerouslySetInnerHTML={{
  __html: `
    .vertical-timeline-element-date {
      color: #ffffff !important;
      font-weight: 600 !important;
      font-size: 16px !important;
      opacity: 1 !important;
      display: block !important;
      visibility: visible !important;
      position: relative !important;
      z-index: 30 !important; /* Higher z-index to ensure visibility */
    }
    .custom-date {
      color: #ffffff !important;
      font-weight: 600 !important;
      font-size: 16px !important;
      opacity: 1 !important;
      display: block !important;
      visibility: visible !important;
      position: relative !important;
      z-index: 30 !important; /* Match the high z-index */
    }
    .vertical-timeline::before {
      background: #232631 !important;
      width: 6px !important;
    }
    .vertical-timeline-element--left .vertical-timeline-element-date {
      float: right !important;
      text-align: right !important;
    }
    .vertical-timeline-element--right .vertical-timeline-element-date {
      float: left !important;
      text-align: left !important;
    }
  `
}} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Animated lines/connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{zIndex: 0}}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9334e4" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          {/* Animated connecting lines */}
          <path 
            d="M 50 100 Q 200 50 400 150 T 800 200" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M 100 300 Q 300 250 500 350 T 900 400" 
            stroke="url(#lineGradient)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-pulse"
            style={{animationDelay: '1s'}}
          />
        </svg>
        
        {/* Moving particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
      </div>

      <motion.div className="relative z-10">
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col relative z-10'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
