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
};

const Button = ({
  variant,
  type,
  onClick,
  href,
  children,
  className,
  isDisabled,
}: ButtonProps) => {
  const [buttonType, setButtonType] = useState("primary");
  const [buttonVariant, setButtonVariant] = useState("fill");
  useEffect(() => {
    if (type === "primary") {
      setButtonType("primary");
    } else if (type === "secondary") {
      setButtonType("secondary");
    } else if (type === "tertiary") {
      setButtonType("tertiary");
    }
  }, []);

  useEffect(() => {
    if (variant === "fill") {
      setButtonVariant("fill");
    } else if (variant === "outline") {
      setButtonVariant("outline");
    }
  }, []);

  if (href) {
    return (
      <Link href={href}>
        <button
          className={
            buttonVariant === "fill"
              ? `${className} bg-${buttonType} text-white mt-8 py-3 px-4 rounded-lg cursor-pointer border shadow-md text-poppins font-semibold`
              : `${className} text-${buttonType} mt-8 py-3 px-4 rounded-lg cursor-pointer shadow-md border-${buttonType} border-2 text-poppins font-semibold `
          }
          onClick={onClick}
          disabled={isDisabled}
        >
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button
      className={
        variant === "fill"
          ? `${className} bg-${buttonType} text-white mt-8 py-3 px-4 rounded-lg cursor-pointer border shadow-md text-poppins font-semibold`
          : `${className} text-${buttonType} mt-8 py-3 px-4 rounded-lg cursor-pointer shadow-md border-${buttonType} border-2 text-poppins font-semibold `
      }
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
