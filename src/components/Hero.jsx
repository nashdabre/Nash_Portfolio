import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { background} from "../assets";



const Hero = () => {
  
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex md:flex-row items-start gap-8 z-10`}
      >
        {/* Enhanced timeline indicator */}
        <motion.div 
          className="flex flex-col items-center mt-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="w-4 h-4 rounded-full bg-gradient-to-r from-[#915EFF] to-purple-400 shadow-lg shadow-purple-500/50"
            animate={{ 
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 10px rgba(145, 94, 255, 0.5)",
                "0 0 20px rgba(145, 94, 255, 0.8)",
                "0 0 10px rgba(145, 94, 255, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="w-[3px] h-40 sm:h-80 bg-gradient-to-b from-[#915EFF] via-purple-400 to-transparent rounded-full shadow-sm" />
        </motion.div>

        {/* Enhanced code block container */}
        <motion.div 
          className="pt-5 w-full overflow-x-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Code editor window frame with gradient */}
            <div className="bg-gradient-to-br from-gray-800/95 via-purple-900/20 to-gray-800/95 backdrop-blur-sm rounded-lg shadow-2xl border border-purple-500/30 overflow-hidden">
              {/* Window header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-700/90 via-purple-800/30 to-gray-700/90 border-b border-purple-500/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-purple-300 text-sm font-mono">Developer.java</div>
                <div className="w-16"></div>
              </div>
              
              {/* Line numbers */}
              <div className="flex">
                <div className="bg-gray-800/70 px-3 py-4 text-gray-400 font-mono font-bold lg:text-3xl text-sm md:text-base leading-relaxed select-none border-r border-purple-500/30">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                </div>
                
                {/* Code content */}
                <motion.pre 
                  className="font-mono font-bold lg:text-3xl text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words p-4 flex-1 bg-gradient-to-br from-gray-800/40 via-purple-900/20 to-gray-800/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <code>
                    <motion.span 
                      className="text-blue-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      public class
                    </motion.span>{" "}
                    <motion.span 
                      className="text-yellow-300 font-extrabold"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, type: "spring" }}
                    >
                      Developer
                    </motion.span> {"{\n"}
                    {"  "}
                    <motion.span 
                      className="text-emerald-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      String
                    </motion.span>{" "}
                    <span className="text-white">name</span> ={" "}
                    <motion.span 
                      className="text-pink-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      "Nash Dabre"
                    </motion.span>; 
                    {"\n  "}
                    <motion.span 
                      className="text-emerald-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                    >
                      String[]
                    </motion.span>{" "}
                    <span className="text-white">skills</span> ={" "}
                    <motion.span 
                      className="text-pink-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      {"{ \"App Developer\", \"Web Developer\" }"}
                    </motion.span>{";"}
                    {"\n\n  "}
                    <motion.span 
                      className="text-purple-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                    >
                      void
                    </motion.span>{" "}
                    <span className="text-white">introduce</span>() {"{\n    "}
                    <motion.span 
                      className="text-cyan-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2 }}
                    >
                      System
                    </motion.span>.
                    <span className="text-cyan-200">out</span>.
                    <span className="text-purple-400">println</span>(
                    <motion.span 
                      className="text-pink-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.4 }}
                    >
                      "Hi, I'm " + name + " 👋"
                    </motion.span>);
                    {"\n  }\n"}
                    {"}"}
                  </code>
                </motion.pre>
              </div>
            </div>
          </div>
        </motion.div>
        {/* <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Nash Dabre</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Mobile Application <br className='sm:block hidden' />
            and Websites
          </p>
        </div> */}
      </div>
      
      
    </section>
    
  );
};

export default Hero;
