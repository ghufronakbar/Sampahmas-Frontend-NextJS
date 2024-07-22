import { CardProductProps } from "@/type/CardProductProps";
import formatRupiah from "@/utils/format/formatRupiah";
import Image from "next/image";
import Link from "next/link";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Button from "./Button";
import useText from "@/constants/text";
import formatString from "@/utils/format/formatString";

type CardProductComponentProps = CardProductProps & {
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  href?: string;
  shop?: string;
};

const CardProduct = ({
  isLoading,
  className,
  onClick,
  href,
  idProduct,
  name,
  category,
  price,
  image,
  isLiked,
  sold,
  shop = "Green Market",
}: CardProductComponentProps) => {
  const TEXT = useText();
  if (isLoading) return <CardProductLoading />;
  return (
    <div
      className={
        "flex flex-col gap-4 border rounded-lg md:hover:scale-105 transition-all duration-300 " +
        className
      }
      key={idProduct}
    >
      <div
        className="w-80 h-50 bg-background relative rounded-t-lg flex p-8 z-40"
        onClick={() => console.log("clicked")}
      >
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="object-cover rounded-lg self-center mx-auto w-full hover:scale-125 transition-all duration-300 "
        />
        <div className="absolute top-4 left-4 border rounded-full bg-white p-2 w-10 h-10 flex flex-col items-center">
          {isLiked ? (
            <FcLike
              className="rounded-full cursor-pointer self-center w-full h-full"
              onClick={onClick}
            />
          ) : (
            <FcLikePlaceholder
              className="rounded-full cursor-pointer self-center w-full h-full"
              onClick={onClick}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between p-4">
        <div className="text-black font-semibold md:text-lg line-clamp-1">
          {name}
        </div>
        <div className="text-gray-500 text-sm md:text-base line-clamp-1">
          {category}
        </div>
        <div className="text-black md:text-lg text-base font-semibold text-poppins line-clamp-1">
          {formatRupiah(price)}
        </div>
        <div className="w-full flex justify-between items-center my-4 ">
          <Link
            href={
              href
                ? href
                : `/product/${idProduct}?name=${name}&category=${category}`
            }
          >
            <button className="text-white bg-primary py-2 px-4 rounded w-full self-end hover:scale-105 transition-all duration-300">
              Detail
            </button>
          </Link>
          <div className="flex flex-col">
            <div className="text-black text-sm self-end">
              {sold} {TEXT.SOLD}
            </div>
            <div className="text-black text-sm self-end ">{formatString(shop,16)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardProductLoading = () => {
  return (
    <div className="flex flex-col gap-4 border rounded-lg">
      <div className="w-full h-80 bg-background relative rounded-lg flex">
        <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96 ">
          <svg
            className="w-10 h-10 text-gray-200 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-between px-4 pb-4">
        <div className="w-full">
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full  max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full  max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full  max-w-[460px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
