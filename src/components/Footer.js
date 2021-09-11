import Link from "next/link";

const Footer = () => {
  return (
    <footer className="font-poppins px-3 sm:px-6 xl:px-2 bg-green-900 font-montserrat pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 py-12 border-b border-gray-300">
          <div className="flex flex-col mb-8">
            <Link href="/">
              <a className="text-2xl mr-8 font-light text-white tracking-wide">
                <span className="font-bold">G</span>o
                <span className="font-bold">G</span>reenly
              </a>
            </Link>
            <div className="mt-6">
              <Link href="/book">
                <a className="px-6 rounded-md bg-green-800 text-white font-medium py-3 ">
                  Our Pricing
                </a>
              </Link>
              <Link href="/book">
                <a className="px-6 ml-4 rounded-md bg-green-800 text-white font-medium py-3">
                  Book now
                </a>
              </Link>
            </div>
          </div>
          <ul className="flex flex-col text-gray-300 font-normal mb-8">
            <Link href="/">
              <a className="hover:text-white">Home</a>
            </Link>
            <Link href="/grass-greening">
              <a className="hover:text-white">Grass Greening</a>
            </Link>

            <Link href="/pricing">
              <a className="hover:text-white">Price</a>
            </Link>
          </ul>
          <div className="font-normal text-gray-300 flex flex-col">
            <h1 className="font-medium mb-4 text-white">Contact Us</h1>
            <a href="#">hello@gogreenly.com.au</a>
            <a href="#">0422141085</a>
          </div>
        </div>
        <div className="font-normal text-sm text-gray-300 py-4">
          © Copyright 2021, GoGreenly. All rights reserved. Franchises locally
          owned and operated.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
