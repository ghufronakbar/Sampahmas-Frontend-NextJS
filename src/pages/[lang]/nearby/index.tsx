import Button from "@/components/Button";
import Footer from "@/components/Footer";
import useText from "@/constants/text";
import Image from "next/image";

const Nearby = () => {
  const TEXT = useText();
  return (
    <>
      <div className="min-h-[150vh] h-full w-full bg-gradient-to-b from-gradient3 to-gradient5  overflow-y-hidden">
        <main className="flex items-center justify-center h-full ">
          <div className="flex flex-col lg:flex-row mx-8 md:mx-36 w-full border rounded-xl bg-background shadow-lg z-10 mt-36">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
              className="rounded-t-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-r-none w-full"
            ></iframe>
            <div className="p-8 md:p-16 flex flex-col md:gap-16 gap-6">
              <div>
                <div className=" text-5xl md:text-6xl lg:text-8xl font-bold font-poppins">
                  {TEXT.VENDING_MACHINE[0]}
                </div>
                <div className="text-2xl md:text-3xl lg:text-5xl font-bold font-poppins">
                  {TEXT.VENDING_MACHINE[1]}
                </div>
              </div>
              <div className="font-poppins text-sm">
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </div>
              <Button color="secondary" type="fill">
                {TEXT.DIRECTION}
              </Button>
            </div>
          </div>
        </main>
        <div className="-z-20 mt-80">
          <Footer />
        </div>
        <Image
          src="/assets/cloud.svg"
          alt="Sampahmas Logo"
          width={120}
          height={120}
          className="absolute top-8 -left-12 h-auto w-96 "
        />
        <Image
          src="/assets/cloud.svg"
          alt="Sampahmas Logo"
          width={120}
          height={120}
          className="absolute -bottom-24 -left-12 h-auto w-96 "
        />
        <Image
          src="/assets/cloud.svg"
          alt="Sampahmas Logo"
          width={120}
          height={120}
          className="absolute top-1/4 right-0 h-auto w-1/3 "
        />
        <Image
          src="/assets/cloud.svg"
          alt="Sampahmas Logo"
          width={120}
          height={120}
          className="hidden md:absolute md:top-2/3 md:left-12 md:h-auto md:w-96  md:mt-8"
        />
      </div>
    </>
  );
};

export default Nearby;
