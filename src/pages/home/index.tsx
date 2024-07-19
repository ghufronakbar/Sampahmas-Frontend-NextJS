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
      <div className="min-h-screen bg-gradient-to-b from-gradient1 to-gradient2 relative -z-10">
        <main className="flex items-center justify-center h-full ">
          <div className="flex flex-col px-10 md:px-16 lg:px-24 md:mr-36 lg:mr-80 mt-36 md:mt-48 z-10 md:max-w-[600px] lg:max-w-[800px] self-start">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {TITLE.toUpperCase()}
            </h1>
            <p className="text-md md:text-lg text-white mt-4">{DESCRIPTION}</p>
          </div>
          <Image
            src="/assets/rocket.svg"
            alt="Sampahmas Logo"
            width={280}
            height={280}
            className="absolute bottom-24 md:bottom-0 right-0  h-auto w-60 md:w-80 lg:w-100"
          />
          <Image
            src="/assets/planet1.svg"
            alt="Sampahmas Logo"
            width={120}
            height={120}
            className="absolute top-10 left-5 md:left-12 h-auto w-20 md:w-40 lg:w-100 "
          />
          <Image
            src="/assets/planet2.svg"
            alt="Sampahmas Logo"
            width="300"
            height={300}
            className="absolute top-0 right-0   h-auto w-60 md:w-80 lg:w-100"
          />
          <Image
            src="/assets/planet3.svg"
            alt="Sampahmas Logo"
            width="300"
            height={300}
            className="absolute -left-7 bottom-72 md:-bottom-28 md:-left-6 h-auto w-[300px] md:w-[500px]"
          />
        </main>
      </div>

      {/* CONTAINER SHOP */}
      <div className="flex flex-col min-h-screen bg-white rounded-3xl -my-6 px-12 md:px-20 py-12 md:py-16 gap-8 relative">
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

      {/* CONTAINER GREETINGS */}
      <div className="min-h-screen bg-gradient-to-b from-gradient3 to-gradient5 relative -z-10">
        <main className="flex items-center justify-center h-full ">
          <div className="flex flex-col lg:flex-row mt-36 mx-8 md:mx-36 w-full border rounded-xl bg-background">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
              className="rounded-t-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-r-none w-full"
            ></iframe>
            <div className="p-8 md:p-16 flex flex-col">
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
              <Button variant="fill" type="secondary">
                DIRECTION
              </Button>
            </div>
            <Image
              src="/assets/cloud.svg"
              alt="Sampahmas Logo"
              width={120}
              height={120}
              className="absolute top-8 -left-12 h-auto w-96 -z-10"
            />
            <Image
              src="/assets/cloud.svg"
              alt="Sampahmas Logo"
              width={120}
              height={120}
              className="absolute top-1/3 right-0 h-auto w-96 -z-10"
            />
            <Image
              src="/assets/cloud.svg"
              alt="Sampahmas Logo"
              width={120}
              height={120}
              className="absolute top-2/3 left-12 h-auto w-96 -z-10 mt-8"
            />
          </div>
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
