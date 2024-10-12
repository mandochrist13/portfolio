import Image from "next/image";
import { projets } from "../data/cust";

export default function projet() {
  return (
    <div className="flex py-[100px] px-[5%] w-full max-w-[1000px] gap-6 flex-col">
      <div>
        <p id="section1" className="text-[#bbf3ff] text-xl">
          Mes Clients
        </p>
        <h1 className="text-3xl md:text-4xl text-white text-left">Projets</h1>
      </div>
      <div className="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3  gap-10">
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
      </div>
    </div>
  );
}
