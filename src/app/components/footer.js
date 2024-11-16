import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function footer() {

    return(
<footer className="">
        
        
        <Card className="rounded-2xl p-10 bg-[#C1DFFC] backdrop-blur-md bg-[#20d2ff3f]  transition duration-200 col-span-full row-start-2 row-end-3 lg:row-start-2 lg:col-start-1 lg:col-span-1 opacity-0 mobile-animation professionCard">
        <CardBody className="w-full h-full flex flex-col space-y-10 justify-center items-center">
        <a href="/" className="flex justify-center items-center">
          <Image
            src="/assets/logo.jpg"
            alt="logo mando"
            className="object-cover rounded-lg h-auto w-[60px]"
            width={1080}
            height={600}
          />
        </a>
          <div className="flex gap-5">
            <Link
              href="https://wa.me/qr/RTLML2MSMKEAA1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp className="text-[30px] text-cyan-950 hover:text-cyan-500" />
            </Link>
            <Link
              href="mailto:mandochrist13@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosMail className="text-[30px] text-cyan-950 hover:text-cyan-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/christ-of-fair-mando-6610b02a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[30px] text-cyan-950 hover:text-cyan-500" />
            </Link>
            <Link
              href="https://github.com/mandochrist13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[30px] text-cyan-950 hover:text-cyan-500" />
            </Link>
          </div>
          <a
          className="flex text-cyan-950 text-center px-4 items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://portfolio-mando-blush.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          &copy; 2024 MANDO Hamidou Christ-Of-Fair
        </a>
        </CardBody>
      </Card>
      </footer>
    )
}
