"use client"
import Link from "next/link"
import { useState } from "react"
import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "../../utils/motion";
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
import { CourseCard } from "components/CourseCard";
import { TitleText, TypingText } from "@/components/CustomTexts"
import { exploreCourses } from "@/config/marketing";
import { Explore } from "sections/Explore";

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/shadcn/taxonomy",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()


    

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}



export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 overflow-hidden	">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
              href={siteConfig.links.facebook}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              ¡Síguenos en Facebook!
            </Link>

            <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25}}
            className="z-10"
            >
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Garantiza tu lugar en la universidad que prefieras y  
            </h1>
            <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="relative w-full"
          > 
                <div className="absolute w-full h-[300px] top-[30px] z-0">
                  <svg
                  id="svg"
                  viewBox="0 0 1440 590"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full sm:h-[550px] h-[350px] relative object-cover transition duration-300 ease-in-out delay-150 w-full z-0 mt-8"
                  >
                  <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#131c33"></stop><stop offset="95%" stop-color="#000080"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 50.130522827687784,170.475147275405 100.26104565537557,140.95029455081 169,144 C 237.73895434462443,147.04970544919 325.0863402061855,182.67396907216497 385,194 C 444.9136597938145,205.32603092783503 477.3935935198822,192.35382916053018 532,209 C 586.6064064801178,225.64617083946982 663.3392857142858,271.91071428571433 736,274 C 808.6607142857142,276.08928571428567 877.249263622975,234.00331369661265 928,223 C 978.750736377025,211.99668630338735 1011.6636597938143,232.07603092783506 1071,222 C 1130.3363402061857,211.92396907216494 1216.0960972017676,171.69256259204712 1282,163 C 1347.9039027982324,154.30743740795288 1393.9519513991163,177.15371870397644 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#131c33"></stop><stop offset="95%" stop-color="#000080"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 50.372422680412356,399.25036818851254 100.74484536082471,398.500736377025 165,419 C 229.2551546391753,439.499263622975 307.39304123711344,481.24742268041234 368,452 C 428.60695876288656,422.75257731958766 471.68298969072157,322.5095729013255 532,335 C 592.3170103092784,347.4904270986745 669.8750000000001,472.71428571428567 738,473 C 806.1249999999999,473.28571428571433 864.8170103092782,348.63328424153167 914,340 C 963.1829896907218,331.36671575846833 1002.8569587628867,438.75257731958766 1063,466 C 1123.1430412371133,493.24742268041234 1203.7551546391755,440.3564064801178 1270,416 C 1336.2448453608245,391.6435935198822 1388.1224226804122,395.8217967599411 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
                  </svg>
                </div>  

          </motion.div>
              <motion.h1 variants={textVariant(0.2)} className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
                materializa tus sueños con 
                <div className="flex justify-center">
                  <Icons.phionira.rectangle_big></Icons.phionira.rectangle_big>
                </div>
              </motion.h1>
            </motion.div>




            <p className="max-w-[42rem] leading-normal text-sm sm:text-xl sm:leading-8 z-10">
              Descubre el método más efectivo para superar el examen de admisión. Aprende con el único curso basado en inteligencias múltiples y consigue tu lugar en la universidad.
            </p> 

          <div className="space-x-4 z-10">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
             ¡Empecemos! 
            </Link>
          </div>

        </div>
      </section>

      <section
        id="about"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25}}
        className={"mx-auto flex flex-col items-center space-y-6"}
        >
          <TypingText title={"| Acerca de Phionira"} textStyles={"text-center"} /> 
          <motion.p
          variants={fadeIn('up','tween', 0.2, 1)}
          className="max-w-[42rem] leading-normal text-sm sm:text-xl sm:leading-8 z-10 text-center"
          >
            <span className="font-extrabold">Phionira </span> es una academia online que ofrece clases enfocadas a desarrollar el potencial de cada uno de los alumnos con un énfasis en <span className="font-extrabold">inteligencias múltiples  </span> para asegurarnos de que cada estudiante reciba la atención y el apoyo que necesita. Nuestras <span className="font-extrabold">guías de estudio, acompañamiento psicológico, exámenes simulacro, bancos de preguntas y tests de orientación vocacional  </span>están diseñados para ayudar a los estudiantes a alcanzar sus metas académicas y profesionales. Además, ofrecemos asesorías y retroalimentación para asegurarnos de que cada estudiante esté en el camino correcto hacia el éxito. 
            <br />
            <br />
            <span className="font-extrabold">Desliza hacia abajo </span> para conocer cómo <span className="font-extrabold">garantizamos</span> que nuestros estudiantes aprueben sus exámenes de admisión a la UAEMéx.

          </motion.p>

          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="w-[18px] h-[28px] object-contain mt-[28px]"
          >
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </motion.div>
        </motion.div>


      </section>

      {/* <section id="explore" className="container py-8 md:py-12 lg:py-24">
        <motion.div 
        variants={staggerContainer}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once: false, amount:0.25}}
        className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <TypingText title={"| El mundo Phionira"} textStyles={"text-center"} /> 
          <TitleText title={<>Elige el curso que desees <br className="md:block hidden">explorar</br> </>} 
          textStyles={"font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"}
          />

          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
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

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
          {stars && (
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </motion.div>
      </section> */}
      <Explore/>
      <section id="explore  " className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Sabemos lo que necesitas para mejorar tus habilidades
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
          {stars && (
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Sabemos lo que necesitas para mejorar tus habilidades
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
          {stars && (
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
