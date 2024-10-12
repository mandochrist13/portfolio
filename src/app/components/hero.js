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
            <a href="#section2" className="p-2 border rounded mt-1 border-[#bbf3ff] text-[#bbf3ff]  hover:bg-[#bbf3ff] hover:text-black">
              Me contacter
            </a>
          </div>

          <div>
            <Image
              src="/assets/cof13.jpg"
              alt="image christo"
              className="rounded-full w-[300px] hidden md:flex h-auto"
              width={1000}
              height={1000}
            />
          </div>
        </motion.main>
      </div>
    </div>
  );
}
