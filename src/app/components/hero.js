"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function hero() {
  return (
    <div className="h-screen mx-auto flex items-center justify-center">
      <div className="flex  items-center  justify-center w-full font-[family-name:var(--font-geist-sans)]">
        <motion.main
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex items-center h-full w-full gap-10 justify-between"
        >
          <div className="flex flex-col gap-2 items-center md:items-start justify-center">
            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 text-4xl">
              Bonjour, je suis
            </h3>

            <h1 className="text-3xl text-black md:text-5xl text-center md:text-left">
              MANDO <br /> Hamidou Christ-Of-Fair
            </h1>
            <p className="text-center text-black text-xl md:text-left">
              <TypeAnimation
                sequence={[
                  "Développeur Web Frontend",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Développeur CMS",
                  1000,
                  // "UI/UX Designer",
                  // 1000,
                  // "C/ C++ Programmer",
                  // 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>
            <div className="flex gap-5 items-center">
              <Link
                href="#section2"
                className="p-2 border rounded mt-1 border-[#bbf3ff] bg-gradient-to-r from-teal-400 to-cyan-500  hover:bg-gradient-to-r hover:from-teal-200 hover:to-cyan-400 text-white"
              >
                Me contacter
              </Link>
              <Link
                href="/documents/Resume.pdf"
                target="_blank"
                className=" rounded-full border-4 border-teal-500 hover:border-cyan-500 "
              >
                <span className="relative block text-slate-800 hover:bg-cyan-100 rounded-full px-3 py-1">
                  Télécharger CV
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-black w-[300px] rounded-full hidden md:flex  justify-center items-center">
            <Image
              src="/assets/moi.png"
              priority
              quality={100}
              alt="image christo"
              className="rounded-3xl border-neutral-50 absolute object-contain w-[300px] h-[300px]"
              width={1000}
              height={1000}
            />
            <motion.svg
              className="w-[270px] relative h-[270px]"
              fill="transparent"
              viewBox="0 8 586 586"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="300"
                cy="320"
                r="300"
                stroke="#bbf3ff"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </div>
        </motion.main>
      </div>
    </div>
  );
}
