'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { fadeIn } from '../utils/motion';
import Image from 'next/image';

export const CourseCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5)}
    className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' :
        'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center w-full h-[700px] sm:h-full transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
  >
    <Image 
        src={imgUrl}
        quality={"1.0"}
        fill={true}
        alt={title}
        className="absolute w-full h-full md:min-h-[340px] rounded-[24px]"
    />
    {active !== id ? (
        <h3 className='font-semibold sm:text-[26px] text-[18px] absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg-origin-[0,0]'>
            {title}
        </h3>
    ) : (
        <div className='absolute bottom-0 p-8 justify-start w-full flex-col rounded-b-[24] bg-[rbga(0,0,0,0.5)]'>
            <div className='object-contain'>
                <ArrowUp width={50} height={50}/>
            </div>
        </div>
    )}
    Explore Course 
  </motion.div>
);