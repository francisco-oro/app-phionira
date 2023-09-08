"use client"
import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../../../utils/motion";
import { Icons } from "@/components/icons"
import { text } from "stream/consumers"
import Image from "next/image";
import heroImage from "../../public/images/gradient-wave.svg"
import exam from "../../public/images/exam.svg"
import intelligence from "../../public/images/intelligence.svg"
import Lecture from "../../public/images/lecture.svg"
import meeting from "../../public/images/meeting.svg"
import psycho_audit from "../../public/images/psycho_audit.svg"
import study_guide from "../../public/images/study_guide.svg"
import survey from "../../public/images/survey.svg"
import vocational_tests from "../../public/survey/vocational_tests.svg"
import { MotionCard } from "components/motioncard";
import { uaemexConfig } from "@/config/marketing";
import { TypingText } from "components/CustomTexts";

const UaemexPage = () => {
  return (
    <section
    className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
  >
    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        ¿Qué ofrece nuestro curso de preparación UAEMÉX 2024?
      </h2>
      <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Nuestros cursos están adaptados a los estilos de aprendizaje y necesidades de nuestros estudiantes, 
        además de estar alineados con la nueva estructura del EXANI II.
      </p>
    </div>
    {uaemexConfig.map((feature, i) => (
      i % 2 === 0 ? (
        <MotionCard key={i} image_right={true} card_content={feature.card_content} title={feature.title}  image_link={feature.link} />
      ) : (
        <MotionCard key={i} image_right={false} card_content={feature.card_content} title={feature.title} image_link={feature.link} />
      )
    ))}

    <div className="mx-auto text-center md:max-w-[58rem]">
      <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Todos estos beneficios te garantizan una peraparación óptima para <span className="text-bold">acreditar</span> tu examen de admisión
      </p>
    </div>
  </section>
  )
}

export default UaemexPage