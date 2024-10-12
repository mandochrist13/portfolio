import Image from "next/image";
import { reseaux } from "../data/link";

export default function servivce() {
  return (
    <div className="flex px-[5%] w-full max-w-[1000px] gap-6 flex-col">
      <div>
        <p id="section2" className="text-[#bbf3ff] text-xl">Réseaux sociaux</p>
        <h1 className="text-3xl md:text-4xl text-left">Me retrouver</h1>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row gap-7">
        {reseaux.map((code) => (
          <div
            className="border w-full flex flex-row-reverse rounded-xl items-center justify-around p-3 gap-8 border-[#bbf3ff]"
            key={code.id}
          >
            <div>
              <Image
                src={code.photo}
                alt="icon"
                className="object-cover h-auto w-[40px]"
                width={1080}
                height={600}
              />
            </div>
            <div>
              <h2 className="text-2xl text-white">{code.titre}</h2>
              <a href={code.tel} className="text-[#bbf3ff]">{code.link}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
