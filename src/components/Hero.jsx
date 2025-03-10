import React from 'react'
import {motion} from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    
    <section className="relative w-full h-screen mx-auto">
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`} >
        <div className='w-5 h-5 rounded full -mt-5 bg-gradient-to-r from-[#FF0080] to-[#7928CA] animate-bounce'></div>
        <div className="flex flex-col items-start justify-center mt-5">
        <div className='w-5 h-5 rounded full bg-gradient-to-r from-[#FF0080] to-[#7928CA] animate-bounce'>
          <div className='w-5 sm:h-80 h-40 rounded full violet-gradient'></div>
        </div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> HI, I'm <span className="text-[#FF0080]">Milugo</span></h1>
        <p className={`${styles.heroSubText} text-white-100`}>I'm a Fullstack software engineer. <br className='sm:block hidden'/>proficient in Django, Flask, MERN, Azure  </p> 
        </div>

     
      </div>
    
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;