'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CourseCard } from "../components/CourseCard";
import { TitleText, TypingText } from "../components/CustomTexts"
import { staggerContainer } from '../utils/motion';
import { exploreCourses } from "config/marketing";


export const Explore = () => {
  const [active, setActive] = useState('course-2');

  return (
    <section id="explore" className="py-8 md:py-12 lg:py-24 w-full">
    <motion.div 
    variants={staggerContainer}
    initial={"hidden"}
    whileInView={"show"}
    viewport={{once: false, amount:0.25}}
    className="mx-auto flex flex-col items-center justify-center gap-4 text-center"
    onClick={setActive}
    >
      <TypingText title={"| El mundo Phionira"} textStyles={"text-center"} /> 
      <TitleText title={<>Elige el curso que desees explorar </>} 
      textStyles={"font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"}
      />

      <div className="mt-[50px] w-4/5 justify-center flex h-screen justify-stretch lg:flex-row flex-col min-h-[70vh] gap-3">
        {exploreCourses.map((course, index) => (
          <CourseCard
          key={course.id}
          {...course}
          index={index}
          active={active}
          handleClick={setActive}
          />
        ))}
      </div>
    </motion.div>
  </section>

  ); 
};

export default Explore;