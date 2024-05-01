"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import devAnimation from "@/animation/dev.json";
import { useRef } from "react";
import Link from "next/link";

const Homepage = () => {
  const lottieRef = useRef();

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 md:mt-10 lg:h-full lg:w-1/2 relative flex justify-center items-center">
          <Lottie
            lottieRef={lottieRef}
            className=""
            onLoadedImages={() => {
              lottieRef.current.setSpeed(0.5);
            }}
            animationData={devAnimation}
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-2/3  lg:h-full lg:w-1/2 flex flex-col gap-2 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="text-[14px] md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex  justify-center items-center gap-4 mt-2">
            <Link
              href="/portfolio"
              className="text-[16px] md:text-xl p-2 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className=" text-[16px] md:text-xl p-2 rounded-lg ring-1 ring-black"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
