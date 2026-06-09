"use client";

import ScrollHint from "@/components/ui/scroll";
import FullStack from "@/components/ui/fullstack";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="w-full max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center md:translate-y-12">

          {/* Intro Row */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex items-center gap-4 md:gap-8"
            >
              <motion.p
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-4xl sm:text-xl md:text-2xl text-gray-400 tracking-widest"
              >
                Hi I am
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "center" }}
                className="h-0.5 w-50 sm:w-16 md:w-96 bg-amber-500"
              />
            </motion.div>

          {/* Name */}
          <motion.h1
              initial={{
                opacity: 0,
                y: 120,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
              className="
                text-8xl
                sm:text-6xl
                md:text-8xl
                lg:text-9xl
                font-extrabold
                leading-none
                text-white
                tracking-wider
              "
            >
              Anand
            </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="mt-4 md:mt-6"
          >
            <FullStack />
          </motion.div>

        </div>
      </div>

      <a
        href="https://github.com/anand1946s"
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute
          bottom-8
          right-6
          md:right-10
          lg:right-16
          flex
          items-center
          gap-3         
          px-4
          py-3
          rounded-xl
          text-gray-400
          hover:text-amber-200      
          transition-all
          duration-200
        "
      >

        <span className="hidden sm:block tracking-wide">
          My GitHub
        </span>
        {/* <span className="text-2xl leading-none">↗</span> */}
        <FaGithub className="text-xl" />

        {/* Hidden on mobile */}
        
      </a>

      <ScrollHint />
    </section>
  );
}