import Image from "next/image"

const NavBot = () => {
    return(<>
    <footer className="lg:hidden fixed bottom-4 left-4 right-4 bg-white text-white py-2 rounded-lg shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <nav className="flex items-center justify-evenly">
            <Image
              src="/vercel.svg"
              alt="Profile"
              width={18}
              height={18}
              className="cursor-pointer"
            />
            <Image
              src="/vercel.svg"
              alt="Profile"
              width={18}
              height={18}
              className="cursor-pointer"
            />
            <Image
              src="/vercel.svg"
              alt="Profile"
              width={18}
              height={18}
              className="cursor-pointer"
            />
            <Image
              src="/vercel.svg"
              alt="Profile"
              width={18}
              height={18}
              className="cursor-pointer"
            />
       
          </nav>
        </div>
      </footer>
      </>)
}

export default NavBot