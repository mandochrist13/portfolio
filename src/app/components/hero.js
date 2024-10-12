"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function hero() {
  return (
    <div className="relative">
      <div
        className="flex items-center  bg-cover bg-center justify-center  min-h-screen p-8 font-[family-name:var(--font-geist-sans)]"
        style={{ backgroundImage: "url(/assets/bg7.gif)" }}
      > 
        <div className="background z-[-2]">
          {/* Ajoute ici les spans pour les éléments animés */}
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} className={`span-animation-${index}`}></span>
          ))}
        </div>

        <motion.main
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex items-center gap-6 justify-center"
        >
          <div className="flex flex-col gap-2 items-center md:items-start justify-center">
            <h3 className="text-[#bbf3ff] text-xl">Bonjour, je suis</h3>
            <h1 className="text-3xl text-white md:text-5xl text-center md:text-left">
              MANDO <br /> Hamidou Christ-Of-Fair
            </h1>
            <p className="text-center text-white text-xl md:text-left">
              Développeur Web Front-end
            </p>
            <a
              href="#section2"
              className="p-2 border rounded mt-1 border-[#bbf3ff] text-[#bbf3ff]  hover:bg-[#bbf3ff] hover:text-black"
            >
              Me contacter
            </a>
          </div>

          <div className="bg-black w-[300px] rounded-full hidden md:flex  justify-center items-center">
            <Image
              src="/assets/cof13.jpg"
              priority
              quality={100}
              alt="image christo"
              className="rounded-full absolute object-contain w-[300px] h-[300px]"
              width={1000}
              height={1000}
            />
            <motion.svg
              className="w-[300px] relative h-[300px]"
              fill="transparent"
              viewBox="0 8 586 586"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="300"
                cy="300"
                r="300"
                stroke="#bbf3ff"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                  strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                  rotate: [120, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
              />
            </motion.svg>
          </div>
        </motion.main>
      </div>
    </div>
  );
}
