import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";


type Props = { 
    title: string,
    card_content: string,
    image_link: string,
    image_right: boolean,
}

export const MotionCard = (props: Props) => {
  return (
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25}}
        className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-1">

        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
        {props.image_right ? 
            <motion.div 
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="flex h-[auto] space-x-10 sm:flex-row space-y-5 flex-col justify-between items-center rounded-md p-6">

                    <Image src={props.image_link}
                    alt="lecture" 
                    width={360}
                    height={130}
                    className="fill-current rounded-lg border"
                    /> 
                    <div className="space-y-2">
                    <h3 className="font-bold"> {props.title} </h3>
                    <p className="text-sm text-muted-foreground">
                        {props.card_content}
                    </p>
                  </div>               
                    </motion.div>
                    :
                    <motion.div 
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="flex h-[auto] space-x-10 sm:flex-row space-y-5 flex-col justify-between items-center rounded-md p-6">

                            <div className="space-y-2">
                            <h3 className="font-bold"> {props.title} </h3>
                            <p className="text-sm text-muted-foreground">
                                {props.card_content}
                            </p>
                          </div>
                                  
                          <Image src={props.image_link}
                            alt="lecture" 
                            width={360}
                            height={130}
                            className="fill-current rounded-lg border"
                            />                
                            </motion.div>
                                }
          </div>
    </motion.div>
  )
}
