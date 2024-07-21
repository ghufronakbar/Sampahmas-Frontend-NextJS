import Button from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import useText from "@/constants/text";
import { CardProductProps } from "@/type/CardProductProps";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Home = () => {
  const TEXT = useText();
  useEffect(() => {
    console.log(useText);
  }, []);
  return (
    <>
      {/* CONTAINER GREETINGS */}
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
      </div>

      {/* CONTAINER SHOP */}
      <div className="flex flex-col min-h-screen bg-white rounded-3xl -my-6 px-12 md:px-20 py-12 md:py-16 gap-8 relative z-30">
        {/* SUB CONTAINER NEW ARRIVALS */}
        <div className="flex flex-row gap-8 md:items-center items-start justify-between ">
          <div className="flex flex-row items-center gap-6 ">
            <div className="text-black text-2xl md:text-3xl lg:text-5xl font-bold font-bebas">
              {TEXT.NEW_ARRIVALS}
            </div>
            <div className="md:flex flex-row gap-2 hidden">
              <GrPrevious className="cursor-pointer text-gray w-9" />
              <GrNext className="cursor-pointer text-gray w-9" />
            </div>
          </div>
          <Link href="/product?q=new%20arrivals">
            <div className="underline cursor-pointer font-semibold text-sm md:text-base ">
              {TEXT.SEE_ALL}
            </div>
          </Link>
        </div>
        <div className="md:hidden flex flex-row gap-2">
          <GrPrevious className="cursor-pointer text-gray w-9" />
          <GrNext className="cursor-pointer text-gray w-9" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* CARD */}
          {PRODUCT.map((product) => (
            <CardProduct
              key={product.idProduct}
              isLoading={false}
              idProduct={product.idProduct}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              isLiked={product.isLiked}
            />
          ))}
        </div>
        {/* SUB CONTAINER COLLECTION */}
        <div className="flex flex-row gap-8 md:items-center items-start justify-between">
          <div className="flex flex-row items-center gap-6 ">
            <div className="text-black text-2xl md:text-3xl lg:text-5xl font-bold font-bebas">
              {TEXT.SHOP_BY_COLLECTION}
            </div>
          </div>
          <Link href="/collection">
            <div className="underline cursor-pointer font-semibold text-sm md:text-base ">
              {TEXT.SEE_ALL}
            </div>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0 relative">
            <Link href={"/collection/womens"}>
              <Image
                src="/static/collection1.png"
                alt="Womens"
                width={500}
                height={500}
                className="object-cover w-full h-auto hover:"
              />
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white py-4 px-8 text-black text-4xl font-bold font-bebas text-center">
                {TEXT.COLLECTIONS[0]}
              </div>
            </Link>
          </div>
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0 relative">
            <Link href={"/collection/mens"}>
              <Image
                src="/static/collection2.png"
                alt="Mens"
                width={500}
                height={500}
                className="object-cover w-full h-auto "
              />
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white py-4 px-8 text-black text-4xl font-bold font-bebas text-center">
                {TEXT.COLLECTIONS[1]}
              </div>
            </Link>
          </div>
          <div className="w-full lg:w-1/3 relative ">
            <Link href={"/collection/kids"}>
              <Image
                src="/static/collection3.png"
                alt="Kids"
                width={500}
                height={500}
                className="object-cover w-full h-auto "
              />
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white py-4 px-8 text-black text-4xl font-bold font-bebas text-center">
                {TEXT.COLLECTIONS[2]}
              </div>
            </Link>
          </div>
        </div>
        {/* SUB CONTAINER BEST SELLER */}
        <div className="flex flex-row gap-8 md:items-center items-start justify-between ">
          <div className="flex flex-row items-center gap-6 ">
            <div className="text-black text-2xl md:text-3xl lg:text-5xl font-bold font-bebas">
              {TEXT.BEST_SELLER}
            </div>
            <div className="md:flex flex-row gap-2 hidden">
              <GrPrevious className="cursor-pointer text-gray w-9" />
              <GrNext className="cursor-pointer text-gray w-9" />
            </div>
          </div>
          <Link href="/product?q=best%20seller">
            <div className="underline cursor-pointer font-semibold text-sm md:text-base ">
              {TEXT.SEE_ALL}
            </div>
          </Link>
        </div>
        <div className="md:hidden flex flex-row gap-2">
          <GrPrevious className="cursor-pointer text-gray w-9" />
          <GrNext className="cursor-pointer text-gray w-9" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* CARD */}
          {PRODUCT.map((product) => (
            <CardProduct
              key={product.idProduct}
              isLoading={false}
              idProduct={product.idProduct}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              isLiked={product.isLiked}
            />
          ))}
        </div>
      </div>

      {/* CONTAINER FIND OUR VENDING MACHINE */}
      <div className="min-h-screen bg-gradient-to-b from-gradient3 to-gradient5 relative z-20 pt-32 bg-fixed">
        <main className="flex items-center justify-center h-full ">
          <div className="flex flex-col lg:flex-row mt-36 mx-8 md:mx-36 w-full border rounded-xl bg-background shadow-lg z-10">
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
              <Button color="primary" type="fill">
                {TEXT.DIRECTION}
              </Button>
            </div>
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
        </main>
      </div>

      {/* CONTAINER ISLAND */}
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
          <div className=" bottom-[32%] lg:bottom-[25%] flex flex-col z-20 gap-4 w-full justify-center items-center absolute">
            <div className="text text-white font-bebas text-5xl md:text-6xl lg:text-8xl font-bold w-4/5 drop-shadow-lg text-center">
              {TEXT.GREEN_MARKET}
            </div>
            <div className="text text-white text-lg md:text-xl lg:text-2xl w-4/5 drop-shadow-lg text-center">
              {TEXT.GREEN_MARKET_DESCRIPTION}
            </div>
          </div>
        </main>
      </div>

      {/* CONTAINER 2 */}
      <div className="relative w-full bg-cover bg-center bg-no-repeat bg-parallax2 z-30 -my-6 px-12 md:px-20 py-12 md:py-16 gap-8 lg:-mt-[30vw] md:-mt-[60vw] -mt-[90vw]">
        <div className="aspect-ratio-box">
          <main className="flex items-center justify-center h-full w-full"></main>
        </div>
      </div>
      <div className="relative w-full bg-cover bg-center bg-no-repeat bg-water z-40 mt-6">
        <div className="aspect-ratio-water flex">
          <div className="w-full flex flex-col items-center mt-32 md:mt-56 lg:mt-96 gap-20 md:gap-32 lg:gap-64">
            {/* SUB SECTION ABOUT */}
            <div className="w-full flex flex-col items-center px-6  md:px-32 lg:px-32 gap-6 md:gap-8 lg:gap-16">
              <div className="text text-white font-bebas text-5xl md:text-6xl lg:text-8xl font-bold  drop-shadow-lg">
                {TEXT.ABOUT_US}
              </div>
              <div className="w-1/2 md:w-1/3 h-1 bg-secondary -mt-4 md:-mt-6 lg:-mt-12"></div>
              <div className="text text-white md:text-xl lg:text-xl drop-shadow-sm">
                {TEXT.ABOUT_US_DESCRIPTION}
              </div>
              <div className="flex gap-12">
                <Button color="secondary" type="fill" href="/about-us">
                  {TEXT.LEARN_MORE}
                </Button>
                <Button
                  className=" transform bg-opacity-50 border-white"
                  color="white"
                  href="/our-journey"
                >
                  {TEXT.OUR_JOURNEY}
                </Button>
              </div>
            </div>
            {/* SUB SECTION FEATURES */}
            <div className="w-full flex flex-col items-center px-6  md:px-32 lg:px-32 gap-6 md:gap-8 lg:gap-16">
              <div className="text text-white font-bebas text-5xl md:text-6xl lg:text-8xl font-bold  drop-shadow-lg">
                {TEXT.FEATURES}
              </div>
              <div className="w-1/2 md:w-1/3 h-1 bg-secondary -mt-4 md:-mt-6 lg:-mt-12"></div>
              {/* MAKE GRID */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 w-full px-8">
                {/* CARD 1 */}
                <div className="flex flex-col items-center  bg-gradient-to-b from-gradient6 to-gradient7 border-black shadow-2xl drop-shadow-2xl rounded-3xl w-full h-fit px-6 py-12 gap-4 md:gap-12 hover:scale-105 transition-all duration-300">
                  <Image
                    src={"/static/vending.png"}
                    width={100}
                    height={100}
                    alt="Vending"
                    className="w-auto h-1/2 "
                  />
                  <div className="w-auto h-1/3 flex-row gap-6 mt-6 ">
                    <div className="text text-white font-bebas text-4xl md:text-4xl lg:text-5xl   drop-shadow-lg text-start">
                      {TEXT.FIND_VENDING[0]}
                    </div>
                    <div className="w-1/2 h-1 bg-secondary self-center md:self-start "></div>
                    <div className="text text-white lg:text-lg drop-shadow-sm text-start">
                      {TEXT.FIND_VENDING[1]}
                    </div>
                    <Button
                      color="secondary"
                      type="fill"
                      className="mt-12 lg:mt-6"
                    >
                      {TEXT.LEARN_MORE}
                    </Button>
                  </div>
                </div>
                {/* CARD 2 */}
                <div className="flex flex-col items-center  bg-gradient-to-b from-gradient6 to-gradient7 border-black shadow-2xl drop-shadow-2xl rounded-3xl w-full h-fit px-6 py-12 gap-4 md:gap-12 hover:scale-105 transition-all duration-300">
                  <Image
                    src={"/static/exchange.png"}
                    width={100}
                    height={100}
                    alt="Vending"
                    className="w-auto h-1/2 "
                  />
                  <div className="w-auto h-1/3 flex-row gap-6 mt-6 ">
                    <div className="text text-white font-bebas text-4xl md:text-4xl lg:text-5xl   drop-shadow-lg text-start">
                      {TEXT.EXCHANGE[0]}
                    </div>
                    <div className="w-1/2 h-1 bg-secondary self-center md:self-start "></div>
                    <div className="text text-white lg:text-lg drop-shadow-sm text-start">
                      {TEXT.EXCHANGE[1]}
                    </div>
                    <Button
                      color="secondary"
                      type="fill"
                      className="mt-12 lg:mt-6"
                    >
                      {TEXT.LEARN_MORE}
                    </Button>
                  </div>
                </div>
                {/* CARD 3 */}
                <div className="flex flex-col items-center  bg-gradient-to-b from-gradient6 to-gradient7 border-black shadow-2xl drop-shadow-2xl rounded-3xl w-full h-fit px-6 py-12 gap-4 md:gap-12 hover:scale-105 transition-all duration-300">
                  <Image
                    src={"/static/shopping.png"}
                    width={100}
                    height={100}
                    alt="Vending"
                    className="w-auto h-1/2 "
                  />
                  <div className="w-auto h-1/3 flex-row gap-6 mt-6 ">
                    <div className="text text-white font-bebas text-4xl md:text-4xl lg:text-5xl   drop-shadow-lg text-start">
                      {TEXT.ENJOY_SHOPPING[0]}
                    </div>
                    <div className="w-1/2 h-1 bg-secondary self-center md:self-start "></div>
                    <div className="text text-white lg:text-lg drop-shadow-sm text-start">
                      {TEXT.ENJOY_SHOPPING[1]}
                    </div>
                    <Button
                      color="secondary"
                      type="fill"
                      className="mt-12 lg:mt-6"
                    >
                      {TEXT.LEARN_MORE}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PRODUCT: CardProductProps[] = [
  {
    idProduct: 1,
    name: "Product 1",
    category: "Category 1",
    price: 100000,
    image: "/static/product1.png",
    isLiked: true,
  },
  {
    idProduct: 2,
    name: "Product 2",
    category: "Category 2",
    price: 200000,
    image: "/static/product1.png",
    isLiked: false,
  },
  {
    idProduct: 3,
    name: "Product 3",
    category: "Category 3",
    price: 300000,
    image: "/static/product1.png",
    isLiked: false,
  },
  {
    idProduct: 4,
    name: "Product 4",
    category: "Category 4",
    price: 400000,
    image: "/static/product1.png",
    isLiked: true,
  },
  {
    idProduct: 5,
    name: "Product 5",
    category: "Category 5",
    price: 500000,
    image: "/static/product1.png",
    isLiked: true,
  },
  {
    idProduct: 6,
    name: "Product 6",
    category: "Category 6",
    price: 600000,
    image: "/static/product1.png",
    isLiked: false,
  },
  {
    idProduct: 7,
    name: "Product 6",
    category: "Category 6",
    price: 600000,
    image: "/static/product1.png",
    isLiked: false,
  },
  {
    idProduct: 8,
    name: "Product 6",
    category: "Category 6",
    price: 600000,
    image: "/static/product1.png",
    isLiked: false,
  },
];

export default Home;
