"use client";
import Image from "next/image";
import { services } from "../data/serv";
import { motion } from "framer-motion";

export default function servivce() {
  return (
    <div className="flex px-[5%] w-full gap-6 flex-col">
      <div>
        <p className="text-3xl text-white font-bold">Mes Services</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center md:items-stretch">
        {services.map((code) => (
          <motion.div
            className=" backdrop-blur-md border border-[#80c1f9] shadow-md rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            key={code.id}
          >
            <div className="mb-4">
              <Image
                src={code.photo}
                alt={code.titre}
                className="rounded-full object-cover w-16 h-16 md:w-20 md:h-20"
                width={1080}
                height={600}
              />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#054D7A]">
                {code.titre}
              </h2>
              <p className="mt-2 text-sm md:text-base text-[#054D7A]/90">
                {code.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
