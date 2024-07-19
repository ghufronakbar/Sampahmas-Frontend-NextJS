import CardProduct from "@/components/CardProduct";
import { DESCRIPTION, TITLE } from "@/constants/about";
import { CardProductProps } from "@/type/CardProductProps";
import Image from "next/image";

const Home = () => {
  return (
    <>
      {/* SECTION GREETINGS */}
      <div className="min-h-screen bg-gradient-to-b from-gradient1 to-gradient2 -z-10">
        <main className="flex items-center justify-center h-full">
          <div className="flex flex-col px-8 md:px-16 lg:px-24 md:mr-36 lg:mr-80 mt-36 md:mt-48 z-10 md:max-w-[600px] lg:max-w-[800px] self-start">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {TITLE.toUpperCase()}
            </h1>
            <p className="text-md md:text-lg text-white mt-4">{DESCRIPTION}</p>
          </div>
          <img
            src="/assets/rocket.svg"
            alt="Sampahmas Logo"
            width={280}
            height={280}
            className="absolute bottom-0 right-0 w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100"
          />
          <img
            src="/assets/planet1.svg"
            alt="Sampahmas Logo"
            width={120}
            height={120}
            className="absolute top-5 left-5  "
          />
          <img
            src="/assets/planet2.svg"
            alt="Sampahmas Logo"
            width="300"
            height={300}
            className="absolute top-0 right-0  max-w-[400px] max-h-[400px]"
          />
          <img
            src="/assets/planet3.svg"
            alt="Sampahmas Logo"
            className="absolute bottom-0 left-0 w-60 h-60 md:w-80 md:h-80 lg:w-100 lg:h-100"
          />
        </main>
      </div>
      {/* CONTAINER SHOP */}
      <div className="flex flex-col min-h-screen bg-white rounded-t-3xl -mt-6 z-10 px-12 md:px-20 py-12 md:py-16 gap-6">
        <div className="flex flex-row gap-8 md:items-center items-start justify-between">
          <div className="flex flex-row items-center gap-6 ">
            <div className="text-black text-5xl font-bold font-bebas">
              NEW ARRIVALS
            </div>
            <div className="md:flex flex-row gap-2 hidden">
              <img src="/icons/previous.svg" className="cursor-pointer" />
              <img src="/icons/next.svg" className="cursor-pointer" />
            </div>
          </div>
          <div className="underline cursor-pointer font-semibold">
            See All Items
          </div>
        </div>
        <div className="md:hidden flex flex-row gap-2">
          <img src="/icons/previous.svg" />
          <img src="/icons/next.svg" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* CARD */}
          {PRODUCT.map((product) => (
            <CardProduct
              index={product.index}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              isLiked={product.isLiked}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const PRODUCT: CardProductProps[] = [
  {
    index: 1,
    name: "Product 1",
    category: "Category 1",
    price: 100000,
    image: "/static/product1.png",
    isLiked: true,
  },
  {
    index: 2,
    name: "Product 2",
    category: "Category 2",
    price: 200000,
    image: "/static/product1.png",
    isLiked: false,
  },
  {
    index: 3,
    name: "Product 3",
    category: "Category 3",
    price: 300000,
    image: "/static/product1.png",
    isLiked: false,
  },
  {
    index: 4,
    name: "Product 4",
    category: "Category 4",
    price: 400000,
    image: "/static/product1.png",
    isLiked: true,
  },
  {
    index: 5,
    name: "Product 5",
    category: "Category 5",
    price: 500000,
    image: "/static/product1.png",
    isLiked: true,
  },
  {
    index: 6,
    name: "Product 6",
    category: "Category 6",
    price: 600000,
    image: "/static/product1.png",
    isLiked: false,
  },
  {
    index: 7,
    name: "Product 6",
    category: "Category 6",
    price: 600000,
    image: "/static/product1.png",
    isLiked: false,
  },
  {
    index: 8,
    name: "Product 6",
    category: "Category 6",
    price: 600000,
    image: "/static/product1.png",
    isLiked: false,
  },
];

export default Home;
