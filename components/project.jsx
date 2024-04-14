"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

import img1 from "@/public/project/1.jpg";
import img2 from "@/public/project/2.jpg";
import img3 from "@/public/project/3.jpg";
import img4 from "@/public/project/4.jpg";
import img5 from "@/public/project/5.jpg";
import img6 from "@/public/project/6.jpg";
import img7 from "@/public/project/7.jpg";
import img8 from "@/public/project/8.jpg";
import img9 from "@/public/project/9.jpg";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  const myProject = [
    {
      projectTitle: "react project",
      category: ["react"],
      imgPath: img1,
    },
    {
      projectTitle: "react & css project",
      category: ["react", "css"],
      imgPath: img2,
    },
    { projectTitle: "css project", category: ["css"], imgPath: img3 },
    {
      projectTitle: "react project",
      category: ["react"],
      imgPath: img4,
    },
    { projectTitle: "css project", category: ["css"], imgPath: img5 },

    {
      projectTitle: "javaScript project",
      category: ["js"],
      imgPath: img6,
    },
    {
      projectTitle: "node project",
      category: ["node"],
      imgPath: img7,
    },
    {
      projectTitle: "node project",
      category: ["node"],
      imgPath: img8,
    },
    {
      projectTitle: "javaScript project",
      category: ["js"],
      imgPath: img9,
    },
  ];

  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProject);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProject.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };
  return (
    <>
      <main className="mx-8 flex md:flex-row gap-4 flex-col">
        {/* btn  */}
        <div className="flex flex-col justify-start items-center gap-4">
          <div className="flex flex-col gap-2 items-start mt-4">
            <button
              onClick={() => {
                setcurrentActive("all");
                setArr(myProject);
              }}
              className={`bg-gray-100 w-[10rem] px-2 py-1 rounded-md opacity-70 hover:opacity-90 hover:scale-105 ${
                currentActive === "all"
                  ? "font-semibold py-1 bg-gray-300 scale-110 opacity-1 border border-blue-900"
                  : null
              }`}
            >
              all projects
            </button>

            <button
              onClick={() => {
                handleClick("css");
              }}
              className={`bg-gray-100 opacity-0.7 w-[10rem] px-2 py-1 rounded-md opacity-70 hover:opacity-90 hover:scale-105 ${
                currentActive === "css"
                  ? "font-semibold py-1 bg-gray-300 scale-110 opacity-1 border border-blue-900"
                  : null
              }`}
            >
              HTML & CSS
            </button>

            <button
              onClick={() => {
                handleClick("js");
              }}
              className={`bg-gray-100 opacity-0.7 w-[10rem] px-2 py-1 rounded-md opacity-70 hover:opacity-90 hover:scale-105 ${
                currentActive === "js"
                  ? "font-semibold py-1 bg-gray-300 scale-110 opacity-1 border border-blue-900"
                  : null
              }`}
            >
              JavaScript
            </button>
            <button
              onClick={() => {
                handleClick("react");
              }}
              className={`bg-gray-100 opacity-0.7 w-[10rem] px-2 py-1 rounded-md opacity-70 hover:opacity-90 hover:scale-105 ${
                currentActive === "react"
                  ? "font-semibold py-1 bg-gray-300 scale-110 opacity-1 border border-blue-900"
                  : null
              }`}
            >
              React & MUI
            </button>
            <button
              onClick={() => {
                handleClick("node");
              }}
              className={`bg-gray-100 opacity-0.7 w-[10rem] px-2 py-1 rounded-md opacity-70 hover:opacity-90 hover:scale-105 ${
                currentActive === "node"
                  ? "font-semibold py-1 bg-gray-300 scale-110 opacity-1 border border-blue-900"
                  : null
              }`}
            >
              Node & Express
            </button>
          </div>

          <div className=" hidden md:block relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[200px] md:h-[200px] rounded-full bg-slate-200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath
                  xlinkHref="#circlePath"
                  className="text-xl text-black "
                >
                  Web Developer and UI Designer
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="text-[12px] w-9 h-9 md:w-16 md:h-16 absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full flex items-center justify-center"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* product */}
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 ">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <motion.article
                  layout
                  initial={{ transform: "scale(0.4)" }}
                  animate={{ transform: "scale(1)" }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 2,
                    boxShadow: "0px 0px 8px rgb(10,10,10)",
                  }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}
                  key={item.imgPath}
                  className="animated cursor-pointer m-2 rounded-md border border-blue-400   
                   bg-gradient-to-t from-gray-100 to-gray-400 hover:border-blue-950 hover:rotate-1
                   "
                >
                  <Image
                    width={266}
                    src={item.imgPath}
                    alt={item.projectTitle}
                    className="rounded-md"
                  />

                  <div className="w-[266px]  px-[1rem] py-[0.4rem]">
                    <h1 className="text-gray-900 font-semibold text-[1.2rem]">
                      {item.projectTitle}
                    </h1>
                    <p className="text-gray-700 text-[0.8rem] my-[0.6rem]">
                      Lorem ipsum dolor sit amet consectetur elit adipisicing .
                      Ex tempore dolor in, accusantium laudantium accusamus.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Link
                          href="/"
                          className="cursor-pointer hover:scale-105 hover:bg-gray-200 p-1 rounded-full"
                        >
                          <FaLink size={20} className="" />
                        </Link>
                        <Link
                          href="/"
                          className="cursor-pointer hover:scale-105 hover:bg-gray-200 p-1 rounded-full"
                        >
                          <FaGithub size={20} />
                        </Link>
                      </div>
                      <div>
                        <Link
                          className="flex justify-center items-center gap-1 text-blue-700 hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer scale-105"
                          href="/"
                        >
                          more
                          <FaArrowRight />
                          {/* <span style={{ alignSelf: "end" }} className=""></span> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
        <div className="md:hidden flex justify-center items-center">
          <div className=" relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[200px] md:h-[200px] rounded-full bg-slate-200"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath
                  xlinkHref="#circlePath"
                  className="text-xl text-black "
                >
                  Web Developer and UI Designer
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="text-[12px] w-9 h-9 md:w-16 md:h-16 absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full flex items-center justify-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
