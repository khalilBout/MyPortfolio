"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Project from "@/components/project";
import Image from "next/image";
import mukup from "@/public/logo/mukup1.png";

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full mt-4 md:mt-8"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="" ref={ref}>
        {/* <div className="relative  w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          <Image
            src={mukup}
            alt="mukup"
            fill
            objectFit="cover"
            objectPosition="center"
          ></Image>
        </div>
        <div className="absolute bottom-20 left-0 right-0 w-full p-4 flex justify-center items-center">
          <h2 className="md:text-5xl text-3xl text-yellow-100 font-semibold">
            My Work
          </h2>
        </div> */}
        <Project />
      </div>
      {/* add component hire  */}
    </motion.div>
  );
};

export default PortfolioPage;
