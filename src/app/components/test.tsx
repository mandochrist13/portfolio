"use client";
import Service from "./service";
import React, { useEffect, useTransition, useState } from "react";

import TabButton from "./TabButton";
import { SiWhatsapp } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { Card, CardBody } from "@nextui-org/card";
import { MapPinIcon } from "@heroicons/react/24/outline";

import { LocationGlobe } from "./LocationGlobe";
import IconCloud from "../components/interactive-cloud-skills";

import aboutAnimation from "../utils/aboutSectionAnimations";
import Link from "next/link";



export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  let cloudIconskills = [
    "react",
    "typescript",
    "javascript",
    "html5",
    "css3",
    "git",
    "visualstudiocode",
    "github",
    "androidstudio",
    "nextdotjs",
    "tailwindcss",
    "nextjs",
    "wordpress",
    "prestashop",
    "figma",
  ];

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    if (mq.matches) {
      aboutAnimation.whoAmIAnimation();
      aboutAnimation.professionAnimation();
      aboutAnimation.quoteAnimation();
      aboutAnimation.techonologyIconListAnimation();
      aboutAnimation.verticalImageAnimation();
      aboutAnimation.educationContentAnimation();
    } else {
      aboutAnimation.mobileAnimation();
    }
  }, []);

  return (
    <div className="md:grid md:grid-rows-4 md:grid-cols-4 lg:grid-cols-3 gap-5 space-y-10">
      {/* Profile Card */}
      <Card className="bg-[#C1DFFC] hidden lg:flex bg-blend-saturation backdrop-blur-lg rounded-2xl transition duration-200 border border-black/[0.1] dark:border-white/[0.1] col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-1">
        <CardBody className="flex-col items-center justify-center gap-2">
          

        </CardBody>
      </Card>

  {/* About Me Card */}
  <Card className="bg-[#EBFBFF] backdrop-blur-md bg-[#70d3ec3f] rounded-2xl transition duration-200 border border-black/[0.1] dark:border-white/[0.1] col-span-2 lg:row-start-1 lg:row-span-1 lg:col-span-2 opacity-0 mobile-animation whoAmICard">
        <CardBody className="gap-2">
          <h2 className="text-3xl text-cyan-800 font-bold">Qui suis-je?</h2>
          <p className="text-lg text-black">
            Passionné par l'univers numérique ainsi que la conception et le
            développement d'applications web, compétent en web design et avec
            une connaissance des frameworks front-end.
          </p>
        </CardBody>
      </Card>

      {/* Location Card */}
      <div className="w-full rounded-2xl transition duration-200 flex md:col-start-3 md:col-span-2  lg:row-span-2 lg:col-start-3 h-full md:relative lg:mobile-animation lg:verticalImage">
        <motion.div className="md:absolute bg-[#80C1F9] backdrop-blur-md bg-[#80c0f9c2]  rounded-2xl flex justify-center p-5 flex-col w-full h-full">
          <div className="flex items-center">
            <MapPinIcon className="h-8 w-8 text-cyan-950" />
            <h1 className="font-bold">Gabon, Libreville</h1>
          </div>
          <div className="text-lg mt-4 text-black">
            Rejoignez-moi pour créer des projets web incroyables, peu importe où
            vous êtes dans le monde. Ensemble, nous transformons les idées en
            réalité digitale ! 🚀🌍
          </div>
          <LocationGlobe />
        </motion.div>
      </div>

    
      {/* Profession Card */}
      <Card className="rounded-2xl transition duration-200 col-span-full md:row-start-1 lg:row-end-3 lg:row-start-2 lg:col-start-1 lg:col-span-1 md:col-span-2 opacity-0 mobile-animation professionCard">
        <CardBody className="bg-[#C1DFFC] backdrop-blur-md bg-[#20d2ff3f] w-full h-full flex justify-center items-center">
          <div className="flex gap-5">
            <Link
              href="https://wa.me/qr/RTLML2MSMKEAA1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp className="text-[50px] text-cyan-950 hover:text-cyan-500" />
            </Link>
            <Link
              href="mailto:mandochrist13@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosMail className="text-[50px] text-cyan-950 hover:text-cyan-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/christ-of-fair-mando-6610b02a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[50px] text-cyan-950 hover:text-cyan-500" />
            </Link>
            <Link
              href="https://github.com/mandochrist13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[50px] text-cyan-950 hover:text-cyan-500" />
            </Link>
          </div>
        </CardBody>
      </Card>

      {/* Quote Card */}
      <Card className="bg-cyan-950 rounded-2xl transition duration-200 border border-black/[0.1] dark:border-white/[0.1] lg:flex col-span-2 md:row-span-1 md:col-start-1 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 opacity-0 mobile-animation quoteCard">
        <CardBody className="flex justify-center items-center w-full h-full">
          <div className="text-3xl font-bold text-center">“J'aime beaucoup créer des solutions logicielles”</div>
        </CardBody>
      </Card>

      {/* Technology Card */}
      <Card className="rounded-2xl transition bg-[#EBFBFF] backdrop-blur-md bg-[#70d3ec3f]  duration-200 border border-black/[0.1] dark:border-white/[0.1] col-span-full lg:row-start-3 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 mobile-animation technologyIconList">
        <CardBody className="gap-4">
          <h2 className="text-3xl text-cyan-800 font-bold">
            Réaliser des applications web avec des technologies modernes
          </h2>
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8">
            <IconCloud iconSlugs={cloudIconskills} />
          </div>
        </CardBody>
      </Card>

      {/* Education Card */}
      <Card className="bg-cyan-950 rounded-2xl transition duration-200 border border-black/[0.1] dark:border-white/[0.1] col-span-full lg:row-start-4 lg:row-span-1 lg:col-start-2 lg:col-span-2 opacity-0 mobile-animation educationContent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block icon icon-tabler icon-tabler-timeline absolute top-0 -right-7"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#80C1F9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 16l6 -7l5 5l5 -6"></path>
          <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
        <CardBody className="gap-2 flex-wrap">
          <h2 className="text-3xl font-bold">Parcours</h2>
          <div>
          <TabButton />
          </div>
        </CardBody>
      </Card>
      <Card className="bg-[#80C1F9] backdrop-blur-md bg-[#80c0f9a9] rounded-2xl transition duration-200 row-start-5 row-span-1 md:col-span-4 lg:col-span-3">
        <CardBody className="gap-2">
        <Service />
        </CardBody>
      </Card>
      
    </div>
  );
}
