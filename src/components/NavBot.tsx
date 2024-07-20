import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CgHome } from "react-icons/cg";
import { GiCardExchange } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { MdContactSupport } from "react-icons/md";
import { RiRoadMapLine } from "react-icons/ri";

const NavBot = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <>
      <footer className="lg:hidden fixed bottom-4 left-4 right-4 bg-white text-white rounded-3xl shadow-lg z-20 drop-shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-2">
          <nav className="flex items-center justify-around">
            {NAV_ITEM.map((item) => (
              <Link href={item.link} key={item.name}>
                {pathname === item.link ? item.iconActive : item.icon}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
};

type NavItem = {
  name: string;
  link: string;
  icon: JSX.Element;
  iconActive: JSX.Element;
};

const NAV_ITEM : NavItem[] = [
  {
    name: "Home",
    link: "/home",
    icon: <CgHome className="cursor-pointer w-6 h-auto text-gray-500" />,
    iconActive: <CgHome className="cursor-pointer w-6 h-auto text-primary" />,
  },
  {
    name: "Nearby",
    link: "/nearby",
    icon: <RiRoadMapLine className="cursor-pointer w-6 h-auto text-gray-500" />,
    iconActive: (
      <RiRoadMapLine className="cursor-pointer w-6 h-auto text-primary" />
    ),
  },
  {
    name: "Exchange",
    link: "/exchange",
    icon: <GiCardExchange className="cursor-pointer w-6 h-auto text-gray-500" />,
    iconActive: (
      <GiCardExchange className="cursor-pointer w-6 h-auto text-primary" />
    ),
  },
  {
    name: "Shopping",
    link: "/shopping",
    icon: <LuShoppingCart className="cursor-pointer w-6 h-auto text-gray-500" />,
    iconActive: (
      <LuShoppingCart className="cursor-pointer w-6 h-auto text-primary" />
    ),
  },
  {
    name: "Contact Us",
    link: "/contact",
    icon: <MdContactSupport className="cursor-pointer w-6 h-auto text-gray-500" />,
    iconActive: (
      <MdContactSupport className="cursor-pointer w-6 h-auto text-primary" />
    ),
  },
];

export default NavBot;
