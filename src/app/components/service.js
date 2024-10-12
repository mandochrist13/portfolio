import Image from "next/image";
import { services } from "../data/serv";

export default function servivce() {
  return (
    <div className="flex px-[5%] w-full max-w-[1000px] gap-6 flex-col">
      <div>
        <p className="text-[#bbf3ff] text-xl">Mes compétences</p>
        <h1 className="text-3xl md:text-4xl text-white text-left">
          Services
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-7">
      {services.map((code) => (
        <div className="border rounded-sm p-4 flex flex-col gap-3 border-[#bbf3ff]" key={code.id}>
          <div>
            <Image
              src={code.photo}
              alt="icon"
              className="object-cover h-auto w-[50px]"
              width={1080}
              height={600}
            />
          </div>
          <div>
            <h2 className="font-extrabold text-white ">{code.titre}</h2>
            <p className="text-white">{code.text}</p>
          </div>
        </div>))}
      </div>
    </div>
  );
}
