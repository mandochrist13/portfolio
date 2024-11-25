
import Hero from "./components/hero";
import Projet from "./components/projet";
import Footer from "./components/footer";
import TriTravelers from "./components/Tri/TriTravelers";
import Test from "./components/test";

export default function Home() {
  return (
    <div className="flex flex-col  px-10 pb-12 overflow-hidden 2xl:overflow-visible">
      <TriTravelers />
      <Hero />
      <div className=" gap-5">
      <Test />
      </div>
      
        <div className="flex flex-col gap-[100px] items-center justify-center ">
          <div className=" w-full flex items-center justify-center"
          >
            <Projet />
          </div>
          {/* <Contact /> */}
        </div>
        <Footer />
    </div>
  );
}
