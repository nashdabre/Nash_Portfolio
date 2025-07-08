import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  // Form validation
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    alert("Please fill out all the fields before submitting.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

    if (response.ok) {
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    
    <div
      className={`xl:mt-12  xl:flex-row  flex-col-reverse  overflow-hidden flex`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] p-8 rounded-2xl relative overflow-hidden'
        style={{
          background: "linear-gradient(135deg, #1d1836 20%, #2a1f5a 50%, #1d1836 100%)",
          boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
          border: "1px solid rgba(147, 51, 234, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-6 left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-1/3 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-40"></div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>
        
        <div className="relative z-10">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 focus:shadow-lg focus:shadow-purple-500/30'
              style={{
                background: "linear-gradient(135deg, #2a1f5a 0%, #1d1836 100%)",
                boxShadow: "0 8px 16px rgba(147, 51, 234, 0.2)",
                border: "1px solid rgba(147, 51, 234, 0.1)",
              }}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 focus:shadow-lg focus:shadow-purple-500/30'
              style={{
                background: "linear-gradient(135deg, #2a1f5a 0%, #1d1836 100%)",
                boxShadow: "0 8px 16px rgba(147, 51, 234, 0.2)",
                border: "1px solid rgba(147, 51, 234, 0.1)",
              }}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 focus:shadow-lg focus:shadow-purple-500/30'
              style={{
                background: "linear-gradient(135deg, #2a1f5a 0%, #1d1836 100%)",
                boxShadow: "0 8px 16px rgba(147, 51, 234, 0.2)",
                border: "1px solid rgba(147, 51, 234, 0.1)",
              }}
            />
          </label>

          <button
            type='submit'
            className='py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/40 active:scale-95'
            style={{
              background: "linear-gradient(135deg, #9334e4 0%, #7c3aed 100%)",
              boxShadow: "0 10px 20px rgba(147, 51, 234, 0.3)",
              border: "1px solid rgba(147, 51, 234, 0.3)",
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          <span className="px-4 text-secondary text-sm">or connect with me</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://github.com/nashdabre"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover:rotate-12"
              style={{
                background: "linear-gradient(135deg, #2a1f5a 0%, #1d1836 100%)",
                boxShadow: "0 4px 12px rgba(147, 51, 234, 0.3)",
                border: "1px solid rgba(147, 51, 234, 0.2)",
              }}
            >
              <svg className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/nash-dabre-56a3a226a"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover:rotate-12"
              style={{
                background: "linear-gradient(135deg, #2a1f5a 0%, #1d1836 100%)",
                boxShadow: "0 4px 12px rgba(147, 51, 234, 0.3)",
                border: "1px solid rgba(147, 51, 234, 0.2)",
              }}
            >
              <svg className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </a>
          
          <a
            href="https://www.instagram.com/nash.dabre"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover:rotate-12"
              style={{
                background: "linear-gradient(135deg, #2a1f5a 0%, #1d1836 100%)",
                boxShadow: "0 4px 12px rgba(147, 51, 234, 0.3)",
                border: "1px solid rgba(147, 51, 234, 0.2)",
              }}
            >
              <svg className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              Instagram
            </span>
          </a>
        </div>
        </div>
        
      </motion.div>
      

       {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[500px] h-[300px]'
      > 
        <EarthCanvas />
     </motion.div>  */}
    </div>
    

    
  );
};

export default SectionWrapper(Contact, "contact");
