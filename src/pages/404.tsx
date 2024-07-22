import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  const lang = router.query.lang ? router.query.lang : "en";
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-12 px-12 bg-black">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
        Sampahmas: Page 404 - Not Found
      </h1>
      <Image src="/404.png" width={500} height={500} alt="404 image" />
      <p className="mt-4 text-white">
        Return to{" "}
        <Link href={`/${lang}/home`}>
          <span className="text-blue-500 cursor-pointer text-center ">
            Home            
          </span>
        </Link>
      </p>
    </div>
  );
}
