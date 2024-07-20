import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

type ButtonProps = {
  variant?: string;
  type?: string;
  onClick?: () => void;
  href?: string;
  children?: ReactNode;
  className?: string;
  isDisabled?: boolean;
  color?: string;
};

const Button = ({
  variant,
  type,
  onClick,
  href,
  children,
  className,
  isDisabled,
  color,
}: ButtonProps) => {
  const [buttonType, setButtonType] = useState("primary");
  const [buttonVariant, setButtonVariant] = useState("fill");
  useEffect(() => {
    console.log(type)
    if (type === "primary") {
      setButtonType("primary");
    } else if (type === "secondary") {
      setButtonType("secondary");
    } else if (type === "tertiary") {
      setButtonType("tertiary");
    }
  }, []);

  useEffect(() => {
    console.log(variant)
    if (variant === "fill") {
      setButtonVariant("fill");
    } else if (variant === "outline") {
      setButtonVariant("outline");
    }
  }, []);

  if (href) {
    return (
      <Link href={href} className={`${type == "fill"?
      `${className} bg-${color} py-3 px-6 rounded-lg cursor-pointer shadow-sm flex justify-center items-center hover:scale-105 duration-300`
      :`${className} py-3 px-6 rounded-lg cursor-pointer shadow-sm border-${color} border-2 flex justify-center items-center hover:scale-105 duration-300`} `}>
        <button
          className={
            type === "fill"
              ? ` text-white   text-poppins font-semibold`
              : ` text-${color}   text-poppins font-semibold `
          }          
          disabled={isDisabled ? true : false}
        >
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button
      className={
        type === "fill"
          ? `${className} bg-${color} text-white  py-3 px-6 rounded-lg cursor-pointer shadow-sm text-poppins font-semibold hover:scale-105 duration-300`
          : `${className} text-${color}  py-3 px-6 rounded-lg cursor-pointer shadow-sm border-${color} border-2 text-poppins font-semibold hover:scale-105 duration-300`
      }
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
