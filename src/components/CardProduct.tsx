import { CardProductProps } from "@/type/CardProductProps";
import formatRupiah from "@/utils/format/formatRupiah";

const CardProduct = ({
  index,
  name,
  category,
  price,
  image,
  isLiked,
}: CardProductProps) => {
  return (
    <div className="flex flex-col gap-4 border rounded-lg" key={index}>
      <div className="w-full h-80 bg-background relative rounded-lg flex">
        <img
          src={image}
          alt={name}
          className="object-cover rounded-lg self-center mx-auto max-w-full max-h-full"
        />
        <div className="absolute top-4 left-4 border rounded-full bg-white p-2 w-10 h-10 flex flex-col items-center">
          <img
            src={isLiked ? "/icons/favorited.svg" : "/icons/favorite.svg"}
            alt="Add To Favorite"
            className="rounded-full cursor-pointer self-center w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between px-4 pb-4">
        <div className="text-black text-lg font-semibold">{name}</div>
        <div className="text-gray-500  ">{category}</div>
        <div className="text-black text-lg font-semibold text-poppins">
          {formatRupiah(price)}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
