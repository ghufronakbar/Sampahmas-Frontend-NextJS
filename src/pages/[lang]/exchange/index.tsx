import Button from "@/components/Button";
import Footer from "@/components/Footer";
import useText from "@/constants/text";
import Image from "next/image";
import { useRouter } from "next/router";

const Exchange = () => {
  const TEXT = useText();
  const router = useRouter();
  const lang = router.query.lang || "en";
  return (
    <>
      <div className="min-h-[250vh] bg-gradient-to-b from-gradient5 to-gradient4 relative z-10 ">
        <main className="flex items-center justify-center h-full ">
          <div className="text text-white z-30 font-bebas text-5xl md:text-6xl lg:text-8xl font-bold mt-24 lg:mt-48 mx-auto w-4/5 drop-shadow-lg">
            {TEXT.IDENTITIY_CARD}
          </div>
          <Image
            src="/assets/qr-island.svg"
            alt="QR"
            width={120}
            height={120}
            className="absolute w-4/5 top-48 md:top-96 md:left-12 h-auto md:w-2/5 lg:w-2/5 hover:scale-110 transition-all duration-300 cursor-pointer z-10"
          />
          <Image
            src="/assets/nfc-island.svg"
            alt="NFC"
            width={120}
            height={120}
            className="absolute w-4/5 top-1/3 md:top-96 md:right-12 h-auto md:w-2/5 lg:w-2/5 hover:scale-110 transition-all duration-300 cursor-pointer z-10"
          />
          <Image
            src="/assets/island.svg"
            alt="Island"
            width={120}
            height={120}
            className="absolute md:visible md:top-96 h-auto md:w-40 top-16"
          />
          <Image
            src="/assets/cloud.svg"
            alt="Sampahmas Logo"
            width={120}
            height={120}
            className="absolute top-0 left-0 md:top-96 md:left-0 h-auto md:w-96"
          />
          <Image
            src="/assets/cloud.svg"
            alt="Sampahmas Logo"
            width={120}
            height={120}
            className="absolute top-32 w-40 right-0 md:top-32 md:right-0 h-auto md:w-96 "
          />
          <Image
            src="/assets/cloud.svg"
            alt="Sampahmas Logo"
            width={120}
            height={120}
            className="absolute top-96 left-0 md:bottom-96 md:right-0 h-auto md:w-60 "
          />
          <div className=" bottom-[32%] lg:bottom-[22%] md:bottom-[30%] flex flex-col z-20 gap-4 w-full justify-center items-center absolute">
            <div className="text text-white font-bebas text-5xl md:text-6xl lg:text-8xl font-bold w-4/5 drop-shadow-lg text-center">
              {TEXT.GREEN_MARKET}
            </div>
            <div className="text text-white text-lg md:text-xl lg:text-2xl w-4/5 drop-shadow-lg text-center">
              {TEXT.GREEN_MARKET_DESCRIPTION}
            </div>
            <Button
              color="secondary"
              type="fill"
              className="mt-4"
              href={`/${lang}/green-market`}
            >
              {TEXT.GET_STARTED}
            </Button>
          </div>
          <div className="absolute bottom-0">
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

export default Exchange;
