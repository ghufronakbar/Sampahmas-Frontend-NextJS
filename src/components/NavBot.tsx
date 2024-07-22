import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CgHome } from "react-icons/cg";
import { GiCardExchange } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { MdContactSupport } from "react-icons/md";
import { RiRoadMapLine } from "react-icons/ri";

const NavBot = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [isVisible, setIsVisible] = useState(true);
  const lang = router.query.lang || "en";

  type NavItem = {
    name: string;
    link: string;
    icon: JSX.Element;
    iconActive: JSX.Element;
  };
  
  const NAV_ITEM: NavItem[] = [
    {
      name: "Home",
      link: `/${lang}/home`,
      icon: <CgHome className="cursor-pointer w-6 h-auto text-gray-500" />,
      iconActive: <CgHome className="cursor-pointer w-6 h-auto text-primary" />,
    },
    {
      name: "Nearby",
      link: `/${lang}/nearby`,
      icon: <RiRoadMapLine className="cursor-pointer w-6 h-auto text-gray-500" />,
      iconActive: (
        <RiRoadMapLine className="cursor-pointer w-6 h-auto text-primary" />
      ),
    },
    {
      name: "Exchange",
      link: `/${lang}/exchange`,
      icon: (
        <GiCardExchange className="cursor-pointer w-6 h-auto text-gray-500" />
      ),
      iconActive: (
        <GiCardExchange className="cursor-pointer w-6 h-auto text-primary" />
      ),
    },
    {
      name: "Shopping",
      link: `/${lang}/shopping`,
      icon: (
        <LuShoppingCart className="cursor-pointer w-6 h-auto text-gray-500" />
      ),
      iconActive: (
        <LuShoppingCart className="cursor-pointer w-6 h-auto text-primary" />
      ),
    },
    {
      name: "Contact Us",
      link: `/${lang}/contact`,
      icon: (
        <MdContactSupport className="cursor-pointer w-6 h-auto text-gray-500" />
      ),
      iconActive: (
        <MdContactSupport className="cursor-pointer w-6 h-auto text-primary" />
      ),
    },
  ];

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scroll ke bawah
        setIsVisible(false);
      } else if (scrollTop < lastScrollTop) {
        // Scroll ke atas
        setIsVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname === "/") return null;

  return (
    <footer
      className={`lg:hidden fixed bottom-4 left-4 right-4 bg-white text-white rounded-3xl shadow-lg z-50 drop-shadow-lg py-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-2">
        <nav className="flex items-center justify-around">
          {NAV_ITEM.map((item) => (
            <Link href={item.link} key={item.name}>
              {router.asPath === item.link ? item.iconActive : item.icon}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};



export default NavBot;
