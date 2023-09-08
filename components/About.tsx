import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TypingText } from "./";

const About = () => {
  return (
    <section 
    id="about" 
    className='container bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'>
        <motion.div
        variants={staggerContainer}
        className="mx-auto flex-col"
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.25}}
        >
            <TypingText />
        </motion.div>
    </section>
  )
}

export default About