import Image from "next/image";


export default function hero() {
  return (
    <div className="relative">
      

      <div
        className="flex items-center  bg-cover bg-center justify-center  min-h-screen p-8 font-[family-name:var(--font-geist-sans)]"
        style={{ backgroundImage: "url(/assets/bg7.gif)" }}
      >
        <div
        className="background z-[-2]"
      >
        {/* Ajoute ici les spans pour les éléments animés */}
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className={`span-animation-${index}`}></span>
        ))}
      </div>
        <main className="flex items-center gap-6 justify-center">
          <div className="flex md:block flex-col items-center justify-center">
            <h3 className="text-[#bbf3ff] text-xl">Bonjour, je suis</h3>
            <h1 className="text-3xl md:text-5xl text-center md:text-left">
              MANDO <br /> Hamidou Christ-Of-Fair
            </h1>
            <p className="text-center text-xl md:text-left">
              Développeur Web Front-end
            </p>
            <button className="p-2 border rounded mt-6 border-[#bbf3ff] text-[#bbf3ff]  hover:bg-[#bbf3ff] hover:text-black">
              Me contacter
            </button>
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
        </main>
      </div>
    </div>
  );
}
