import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
         <img src={technology.icon} alt="image" className="w-3/4 h-3/4 object-contain" />     
         {/* <BallCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
