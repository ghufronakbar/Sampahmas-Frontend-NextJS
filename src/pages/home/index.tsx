import Button from "@/components/Button";
import CardProduct from "@/components/CardProduct";
import { DESCRIPTION, TITLE } from "@/constants/about";
import { CardProductProps } from "@/type/CardProductProps";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* CONTAINER GREETINGS */}
      <div className="min-h-screen bg-cover bg-fixed bg-parallax  relative ">
        <main className="flex items-center justify-center h-full w-full">
          <div className="flex flex-col px-10 mx-96 mt-36 md:mt-48 z-10 w-full">
            <h1 className="text-5xl md:text-6xl font-bold text-white fixed left-6 mx-10">
              {TITLE.toUpperCase()}
            </h1>
            <p className="text-md md:text-lg text-white mx-10 fixed left-6 max-w-[400px] mt-20 md:max-w-[600px] lg:max-w-[800px]">{DESCRIPTION}</p>
          </div>
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
          <Image
          src={"/icons/googleplay.png"}
          alt="Get the app"
          width={300}
          height={300}
          className="fixed bottom-24 md:bottom-24 lg:bottom-36 left-6 h-auto w-32 lg:w-36 mx-10 cursor-pointer"
          />
        </main>
      </div>

      {/* CONTAINER SHOP */}
      <div className="flex flex-col min-h-screen bg-white rounded-3xl -my-6 px-12 md:px-20 py-12 md:py-16 gap-8 relative z-30">
        {/* SUB CONTAINER NEW ARRIVALS */}
        <div className="flex flex-row gap-8 md:items-center items-start justify-between ">
          <div className="flex flex-row items-center gap-6 ">
            <div className="text-black text-2xl md:text-3xl lg:text-5xl font-bold font-bebas">
              NEW ARRIVALS
            </div>
            <div className="md:flex flex-row gap-2 hidden">
              <img src="/icons/previous.svg" className="cursor-pointer" />
              <img src="/icons/next.svg" className="cursor-pointer" />
            </div>
          </div>
          <Link href="/product?q=new%20arrivals">
            <div className="underline cursor-pointer font-semibold text-sm md:text-base ">
              See All Items
            </div>
          </Link>
        </div>
        <div className="md:hidden flex flex-row gap-2">
          <img src="/icons/previous.svg" />
          <img src="/icons/next.svg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* CARD */}
          {PRODUCT.map((product) => (
            <CardProduct
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
              SHOP BY COLLECTION
            </div>
          </div>
          <Link href="/collection">
            <div className="underline cursor-pointer font-semibold text-sm md:text-base ">
              See All Collections
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
                className="object-cover w-full h-auto"
              />
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white py-4 px-8 text-black text-4xl font-bold font-bebas text-center">
                WOMENS
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
                MENS
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
                KIDS
              </div>
            </Link>
          </div>
        </div>
        {/* SUB CONTAINER BEST SELLER */}
        <div className="flex flex-row gap-8 md:items-center items-start justify-between ">
          <div className="flex flex-row items-center gap-6 ">
            <div className="text-black text-2xl md:text-3xl lg:text-5xl font-bold font-bebas">
              BEST SELLER
            </div>
            <div className="md:flex flex-row gap-2 hidden">
              <img src="/icons/previous.svg" className="cursor-pointer" />
              <img src="/icons/next.svg" className="cursor-pointer" />
            </div>
          </div>
          <Link href="/product?q=best%20seller">
            <div className="underline cursor-pointer font-semibold text-sm md:text-base ">
              See All Items
            </div>
          </Link>
        </div>
        <div className="md:hidden flex flex-row gap-2">
          <img src="/icons/previous.svg" />
          <img src="/icons/next.svg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* CARD */}
          {PRODUCT.map((product) => (
            <CardProduct
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
      <div className="min-h-screen bg-gradient-to-b from-gradient3 to-gradient5 relative z-20 pt-32">
        <main className="flex items-center justify-center h-full ">
          <div className="flex flex-col lg:flex-row mt-36 mx-8 md:mx-36 w-full border rounded-xl bg-background shadow-lg z-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
              className="rounded-t-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-r-none w-full"
            ></iframe>
            <div className="p-8 md:p-16 flex flex-col gap-4">
              <div className=" text-5xl md:text-6xl lg:text-8xl font-bold font-poppins">
                FIND OUR
              </div>
              <div className="text-2xl md:text-3xl lg:text-5xl font-bold font-poppins">
                VENDING MACHINE
              </div>
              <div className="font-poppins mt-4 text-sm">
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                Description Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </div>         
              <button className="bg-primary text-white mt-8 py-3 px-4 rounded-lg cursor-pointer border shadow-md text-poppins font-semibold" onClick={() => {console.log("click")}}>
                DIRECTION
              </button>
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
       <div className="min-h-[200vh] bg-gradient-to-b from-gradient5 to-gradient3 relative z-10">
        <main className="flex items-center justify-center h-full ">       
            <Image
              src="/assets/qr-island.svg"
              alt="QR"
              width={120}
              height={120}
              className="absolute w-4/5 top-24 md:top-96 md:left-12 h-auto md:w-2/5 lg:w-2/5 hover:scale-110 transition-all duration-300 cursor-pointer z-10"
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
              className="absolute md:visible md:bottom-40 h-auto md:w-40 "
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
          
        </main>
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
