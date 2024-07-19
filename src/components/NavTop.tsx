import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavTop = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 w-full flex flex-row justify-between z-20 py-4 transition-colors duration-300 
          ${scrolling ? "bg-gradient1" : ""} `}
      >
        <Image
          src="/icons/search.svg"
          alt="Search"
          width={18}
          height={18}
          className="cursor-pointer ml-6"
        />
        <Image
          src="/logo.svg"
          alt="Sampahmas Logo"
          width={172}
          height={36}
          className="cursor-pointer"
        />
        <Image
          src="/icons/profile.svg"
          alt="Profile"
          width={18}
          height={18}
          className="cursor-pointer mr-6"
        />
      </nav>
      <nav
        className={`hidden fixed top-0 left-0 right-0 w-full lg:flex flex-row items-center justify-evenly z-20 py-6 transition-colors duration-300 
          ${scrolling ? "bg-gradient1" : ""} `}
      >
        {NavItem.slice(0, 3).map((item) => (
          <Link href={item.link} key={item.name}>
            <div
              className={
                pathname === item.link ? "text-secondary" : "text-white"
              }
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
          className="cursor-pointer"
        />
        {NavItem.slice(3, 5).map((item) => (
          <Link href={item.link} key={item.name}>
            <div
              className={
                pathname === item.link ? "text-secondary" : "text-white"
              }
            >
              {item.name}
            </div>
          </Link>
        ))}
        <div className=" flex flex-row gap-8">
          <Image
            src="/icons/search.svg"
            alt="Search"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <Image
            src="/icons/profile.svg"
            alt="Profile"
            width={18}
            height={18}
            className="cursor-pointer"
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
