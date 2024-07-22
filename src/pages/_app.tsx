import Footer from "@/components/Footer";
import NavBot from "@/components/NavBot";
import NavTop from "@/components/NavTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

type TitleHeads = {
  title: string;
  description: string;
  url: string;
};

const titleHeads: TitleHeads[] = [
  {
    title: "Sampahmas",
    description: "Waste Management System",
    url: "/",
  },
  {
    title: "Sampahmas",
    description: "Waste Management System",
    url: "/[lang]",
  },
  {
    title: "Sampahmas",
    description: "Waste Management System",
    url: "/[lang]/home",
  },
  {
    title: "Shop - Sampahmas",
    description: "Waste Management System",
    url: "/[lang]/shopping",
  },
  {
    title: "Find Vending Machine - Sampahmas",
    description: "Waste Management System",
    url: "/[lang]/nearby",
  },
  {
    title: "Exchange - Sampahmas",
    description: "Waste Management System",
    url: "/[lang]/exchange",
  },
  {
    title: "Contact Us - Sampahmas",
    description: "Waste Management System",
    url: "/[lang]/contact",
  },
];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname: string = router.pathname;

  // Find the matching titleHead object for the current pathname
  const currentPageData = titleHeads.find((page) => page.url === pathname);

  // Set default title and description if no match is found (optional)
  const defaultTitle = "Sampahmas";
  const defaultDescription = "Waste Management System";

  return (
    <>
      <Head>
        <title>{currentPageData ? currentPageData.title : defaultTitle}</title>
        <meta
          name="description"
          content={
            currentPageData ? currentPageData.description : defaultDescription
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {pathname != "/404" ? (
        <>
          <NavTop />
          <NavBot />
        </>
      ) : null}

      <Component {...pageProps} />
    </>
  );
}
