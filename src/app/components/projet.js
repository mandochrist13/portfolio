"use client"

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { projets } from "../data/cust";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      delay: 0.2,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: [0, 5, -5, 0], // Ajout de légères rotations pour plus de dynamisme
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function projet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex py-[100px] w-full gap-6 flex-col">
      <div>
        <h1 id="section1" className="text-3xl text-cyan-800 font-bold">
          Mes projets
        </h1>
     
      </div>
      {/* <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3  gap-10">
        {projets.map((code) => (
          <div
            className="border-b w-full h-full mx-auto rounded-t pb-4 flex flex-col gap-6 bg-[#0A0A0A] border-[#bbf3ff]"
            key={code.id}
          >
            <div className="w-full">
              <Image
                src={code.photo}
                alt="icon"
                className="object-cover rounded-md h-auto w-full"
                width={1080}
                height={600}
              />
            </div>

            <div className="flex flex-col gap-2 h-full justify-between">
              <div className="px-2">
                <h2 className="mb-2 font-extrabold text-white">{code.titre}</h2>
                <p className="text-white">{code.text}</p>
              </div>
              <div className="p-2">
                <a
                  href={code.lien}
                  className="p-2 border rounded mt-6 border-[#bbf3ff] text-[#bbf3ff]  hover:bg-[#bbf3ff] hover:text-black"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <motion.div ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
           className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3  gap-10">
        {projets.map((code) => (
          <motion.div key={code.id} variants={item}>
            <div
              className="h-52 rounded-t-xl relative group"
              style={{
                background: `url(${code.photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay rounded-t-xl items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                <Link
                  href={code.lien}
                  target="_blank"
                  className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                  <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                </Link>
              </div>
            </div>
            <div className="text-cyan-950 rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
              <h5 className="text-xl font-semibold mb-2">{code.titre}</h5>
              <p className="text-[#ADB7BE]">{code.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
