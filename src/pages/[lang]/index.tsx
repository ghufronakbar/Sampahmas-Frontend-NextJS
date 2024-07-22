import { Inter } from "next/font/google";
import Home from "../[lang]/home";
import Image from "next/image";
import useText from "@/constants/text";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const TEXT = useText();
  const router = useRouter();
  const { lang } = router.query;
  return (
    <>
    <div className="bg-black bg-cover w-[100vw] h-[100vh] fixed top-0 -z-10"></div>
    <div className="min-h-screen bg-cover bg-fixed bg-parallax  relative h-full">
      <div className="flex flex-col px-12 right-0 z-10 w-full fixed mt-32 items-start ">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl  ">
          {TEXT.TITLE}
        </h1>
        <p className="text-md md:text-lg text-white left-6 max-w-[400px] mt-12 md:max-w-[600px] lg:max-w-[800px]">
          {TEXT.DESCRIPTION}
        </p>
        <Image
          src={"/icons/googleplay.png"}
          alt="Get the app"
          width={300}
          height={300}
          className=" h-auto w-32 lg:w-36 cursor-pointer"
        />
      </div>
      <main className="flex items-center justify-center h-full w-full ">
        <Image
          src="/assets/rocket.svg"
          alt="Sampahmas Logo"
          width={280}
          height={280}
          className="fixed bottom-24 md:bottom-0 right-0  h-auto w-60 md:w-80 lg:w-100"
        />
        <Image
          src="/assets/planet1.svg"
          alt="Sampahmas Logo"
          width={120}
          height={120}
          className="fixed top-10 left-5 md:left-12 h-auto w-20 md:w-40 lg:w-100"
        />
        <Image
          src="/assets/planet2.svg"
          alt="Sampahmas Logo"
          width="300"
          height={300}
          className="fixed top-10 -right-10 lg:-top-40  lg:-right-60 h-auto w-[300px] md:w-[500px] lg:w-[800px]"
        />
        <Image
          src="/assets/planet3.svg"
          alt="Sampahmas Logo"
          width="300"
          height={300}
          className="fixed -left-7 bottom-72 md:-bottom-28 md:-left-6 h-auto w-[300px] md:w-[500px]"
        />
      </main>
      <Button
        className="fixed bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2 bg-opacity-50 border"
        color="primary"
        href={`/${lang}/home`}
      >
        {TEXT.GET_STARTED}
      </Button>
    </div>
    </>
  );
}
