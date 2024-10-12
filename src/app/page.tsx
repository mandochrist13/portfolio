import Service from "./components/service";
import Hero from "./components/hero";
import Projet from "./components/projet";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <div className="flex flex-col gap-[100px] py-[100px] items-center justify-center ">
        <Service />
        <div style={{ backgroundImage: "url(/assets/bg1.gif)" }}  className=" w-full flex items-center justify-center">
          <Projet />
        </div>
        <Contact />
      </div>
    </div>
  );
}
