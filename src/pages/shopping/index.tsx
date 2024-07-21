import CardProduct from "@/components/CardProduct";
import Footer from "@/components/Footer";
import useText from "@/constants/text";
import { CardProductProps } from "@/type/CardProductProps";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { GrNext, GrPrevious } from "react-icons/gr";

const Shopping = () => {
  const TEXT = useText();
  return (
    <>
      <div className="bg-black bg-cover w-[100vw] h-[100vh] fixed top-0 -z-10"></div>
      <div className="flex flex-col min-h-screen bg-white rounded-3xl mt-24 mb-24 px-12 md:px-20 py-12 md:py-16 gap-8 relative z-10">
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
      <Footer />
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

export default Shopping;
