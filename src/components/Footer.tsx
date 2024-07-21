import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full flex flex-col px-8 my-12  gap-6">
      <div className="w-full flex flex-col lg:flex-row  gap-6 md:gap-12 justify-between">
        <div className="w-full lg:w-2/5 flex flex-col items-start justify-center gap-4 lg:gap-6">
          <Image
            src={"/logo.svg"}
            alt="Sampahmas Logo"
            width={200}
            height={200}
            className="cursor-pointer w-52 h-auto"
          />
          <div className="flex flex-col items-start justify-center">
            <div className="text-sm lg:text-base text-white font-semibold">
              Haystudio
            </div>
            <div className="text-sm lg:text-base text-white lg:max-w-[40vw]">
              Jl. Lempongsari Raya No.353, Jongkang, Sariharjo, Kec. Ngaglik,
              Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-row justify-between md:justify-evenly gap-4 lg:gap-6">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="text-sm lg:text-base text-white font-semibold">
              Features
            </div>
            <Link href="/nearby">
              <div className="text-sm lg:text-base text-white cursor-pointer">
                Nearby
              </div>
            </Link>
            <Link href="/exchange">
              <div className="text-sm lg:text-base text-white cursor-pointer">
                Exchange
              </div>
            </Link>
            <Link href="/shopping">
              <div className="text-sm lg:text-base text-white cursor-pointer">
                Shopping
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="text-sm lg:text-base text-white font-semibold">
              Social Media
            </div>
            <Link href="https://twitter.com" target="_blank">
              <div className="text-sm lg:text-base text-white cursor-pointer">
                Twitter
              </div>
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <div className="text-sm lg:text-base text-white cursor-pointer">
                Facebook
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <div className="text-sm lg:text-base text-white cursor-pointer">
                Instagram
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="text-sm lg:text-base text-white font-semibold">
              Resources
            </div>
            <Link href="/app">
              <div className="text-sm lg:text-base text-white cursor-pointer">
                Application
              </div>
            </Link>
            <Link href="/documentation">
              <div className="text-sm lg:text-base text-white cursor-pointer">
                Documentation
              </div>
            </Link>
            <Link href="/frequently-asked-questions">
              <div className="text-sm lg:text-base text-white cursor-pointer">
                FAQ
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/5 flex flex-col justify-between gap-4 lg:gap-6">
          <div className="text-sm md:text-base text-white font-semibold">
            Contact US
          </div>
          <Link href="mailto:contact@sampahmas.com">
            <div className="flex flex-row">
              <AiOutlineMail className="w-6 h-6 text-white" />
              <div className="text-sm lg:text-base text-white ml-2">
                contact@sampahmas.com
              </div>
            </div>
          </Link>
          <Link href="https://www.instagram.com/sampahmas.id">
            <div className="flex flex-row">
              <AiOutlineInstagram className="w-6 h-6 text-white" />
              <div className="text-sm lg:text-base text-white ml-2">
                @sampahmas
              </div>
            </div>
          </Link>
          <Link href="https://wa.me/6281312345678?text=Im%20interested%20in%20your%20product">
            <div className="flex flex-row">
              <AiOutlineWhatsApp className="w-6 h-6 text-white" />
              <div className="text-sm lg:text-base text-white ml-2">
                +62 813-1234-5678
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full h-0.5 bg-white" />
      <div className="w-full text-center text-sm lg:text-base text-white">
        Copyright &copy; 2023 All rights reserved | made by Sampahmas
      </div>
    </div>
  );
};

export default Footer;
