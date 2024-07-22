import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CgProfile, CgSearch } from "react-icons/cg";

const NavTop = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [scrolling, setScrolling] = useState(false);
  const lang = router.query.lang || "en";

  const NavItem = [
    {
      name: "Home",
      link: `/${lang}/home`,
    },
    {
      name: "Nearby",
      link: `/${lang}/nearby`,
    },
    {
      name: "Exchange",
      link: `/${lang}/exchange`,
    },
    {
      name: "Shopping",
      link: `/${lang}/shopping`,
    },
    {
      name: "Contact",
      link: `/${lang}/contact`,
    },
  ];

  useEffect(() => {
    let ratio: number = 0.2;
    if (pathname === `/${lang}/home`) {
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
        <Link href={`/${lang}/search`}>
          <CgSearch
            className={`cursor-pointer w-6 h-6 transition-all duration-300 ${
              scrolling
                ? " text-primary"
                : router.pathname === "/[lang]/search"
                ? "text-primary"
                : " text-white"
            }`}
          />
        </Link>
        <Link href={`/${lang}/home`}>
          <Image
            src="/logo.svg"
            alt="Sampahmas Logo"
            width={172}
            height={36}
            className="cursor-pointer"
          />
        </Link>
        <Link href={`/${lang}/profile`}>
          <CgProfile
            className={`cursor-pointer w-6 h-6 transition-all duration-300 ${
              scrolling
                ? " text-primary"
                : router.pathname === "/[lang]/profile"
                ? "text-primary"
                : " text-white"
            }`}
          />
        </Link>
      </nav>

      {/* Desktop */}
      <nav
        className={`hidden fixed top-0 left-0 right-0 w-full lg:flex flex-row items-center justify-evenly z-50 py-6 transition-all duration-300 
          ${scrolling ? "bg-white shadow" : ""} `}
      >
        {NavItem.slice(0, 3).map((item) => (
          <Link href={item.link} key={item.name}>
            <div
              className={`w-[14.28%] transition-all duration-300 + ${
                router.asPath === item.link
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
          className="cursor-pointer w-[9%] h-auto"
        />
        {NavItem.slice(3, 5).map((item) => (
          <Link href={item.link} key={item.name}>
            <div
              className={`w-[14.28%] transition-all duration-300 + ${
                router.asPath === item.link
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
        <div className=" flex flex-row gap-16 ">
          <Link href={`/${lang}/search`}>
            <CgSearch
              className={`cursor-pointer w-6 h-6 ${
                scrolling
                  ? "text-black"
                  : router.pathname === "/[lang]/search"
                  ? "text-primary"
                  : "text-white"
              }`}              
            />            
          </Link>
          <Link href={`/${lang}/profile`}>
            <CgProfile
              className={`cursor-pointer w-6 h-6 ${
                scrolling
                  ? "text-black"
                  : router.pathname === "/[lang]/profile"
                  ? "text-primary"
                  : "text-white"
              }`}
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavTop;
