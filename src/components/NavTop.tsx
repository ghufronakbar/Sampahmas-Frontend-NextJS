import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CgProfile, CgSearch } from "react-icons/cg";

const NavTop = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let ratio: number = 0.2;
    if (pathname === "/home") {
      ratio = 0.8;
    }
    const handleScroll = () => {
      if (window.scrollY > ratio * window.innerHeight) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      {/* Mobile */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 w-full flex flex-row justify-evenly z-50 py-4 transition-all duration-300 
          ${scrolling ? "bg-white border" : ""} `}
      >
        <CgSearch
          className={`cursor-pointer w-6 h-6 transition-all duration-300 ${
            scrolling ? " text-primary" : " text-white"
          }`}
        />
        <Image
          src="/logo.svg"
          alt="Sampahmas Logo"
          width={172}
          height={36}
          className="cursor-pointer"
        />
        <CgProfile
          className={`cursor-pointer w-6 h-6 transition-all duration-300 ${
            scrolling ? " text-primary" : " text-white"
          }`}
        />
      </nav>

      {/* Desktop */}
      <nav
        className={`hidden fixed top-0 left-0 right-0 w-full lg:flex flex-row items-center justify-evenly z-50 py-6 transition-all duration-300 
          ${scrolling ? "bg-white shadow" : ""} `}
      >
        {NavItem.slice(0, 3).map((item) => (
          <Link href={item.link} key={item.name}>
            <div
              className={`transition-all duration-300 + ${
                pathname === item.link
                  ? "text-primary font-semibold"
                  : scrolling
                  ? "text-black"
                  : "text-white"
              }`}
            >
              {item.name}
            </div>
          </Link>
        ))}
        <Image
          src="/logo.svg"
          alt="Sampahmas Logo"
          width={172}
          height={36}
          className="cursor-pointer w-42 h-auto"
        />
        {NavItem.slice(3, 5).map((item) => (
          <Link href={item.link} key={item.name}>
            <div
              className={`transition-all duration-300 + ${
                pathname === item.link
                  ? "text-primary font-semibold"
                  : scrolling
                  ? "text-black"
                  : "text-white"
              }`}
            >
              {item.name}
            </div>
          </Link>
        ))}
        <div className=" flex flex-row gap-8">
          <CgSearch
            className={`cursor-pointer w-6 h-6 ${
              scrolling ? "text-black" : "text-white"
            }`}
          />
          <CgProfile
            className={`cursor-pointer w-6 h-6 ${
              scrolling ? "text-black" : "text-white"
            }`}
          />
        </div>
      </nav>
    </>
  );
};

const NavItem = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Nearby",
    link: "/nearby",
  },
  {
    name: "Exchange",
    link: "/exchange",
  },
  {
    name: "Shopping",
    link: "/shopping",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
export default NavTop;
