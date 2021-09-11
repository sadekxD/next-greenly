import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import Box from "../components/Box";
import Card from "../components/Card";

const pricing = () => {
  return (
    <div>
      <Hero>
        <div className="max-w-sm text-center lg:text-left">
          <p className="mb-8 font-bold text-green-700">PRICING</p>
          <h1 className="text-4xl md:text-56 font-medium text-green-700 leading-snug">
            Simple no tricks pricing.
          </h1>

          <h1 className="text-4xl md:text-56 font-bold text-green-900 leading-snug">
            $60
          </h1>

          <p className="font-normal text-lg text-green-900 mt-2-">
            Per hour, per gardener
          </p>
          <Link href="/book">
            <button className="px-6 text-sm rounded-md bg-green-700 text-white font-medium py-3 transition-all duration-200 hover:shadow-xl mt-3">
              Book now
            </button>
          </Link>
        </div>
        <div className="hidden lg:block">
          <Image src={require("../media/man-watering-flowers.png")} />
        </div>
      </Hero>
      <div className="px-4 py-20 bg-gray-50">
        <div className="text-center mx-auto max-w-2xl text-green-700 mb-12">
          <h1 className="font-medium text-5xl mb-10">Our Services</h1>
          <p className="font-thin text-lg">
            Choose which services you’d like us to handle. Our teams are trained
            to work swiftly to get the job done. Minimum callout for
            non-recurring jobs is 1 hour.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4">
          <div className="flex flex-col items-center mb-2">
            <Image
              src={require("../media/svg/lawn-mowing-maintence.svg")}
              height={96}
              width={96}
            />
            <p
              className="text-gray-600 font-thin text-lg text-center mt-2"
              style={{ maxWidth: 180 }}
            >
              Lawn Mowing & Maintence
            </p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <Image
              src={require("../media/svg/pruning-weeding.svg")}
              height={96}
              width={96}
            />
            <p
              className="text-gray-600 font-thin text-lg text-center mt-2"
              style={{ maxWidth: 180 }}
            >
              Pruning & Weeding
            </p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <Image
              src={require("../media/svg/hedge-cutting.svg")}
              height={96}
              width={96}
            />
            <p
              className="text-gray-600 font-thin text-lg text-center mt-2"
              style={{ maxWidth: 180 }}
            >
              Hedge Cutting
            </p>
          </div>
          <div className="flex flex-col items-center mb-2">
            <Image
              src={require("../media/svg/commercialGardening.svg")}
              height={96}
              width={96}
            />
            <p
              className="text-gray-600 font-thin text-lg text-center mt-2"
              style={{ maxWidth: 180 }}
            >
              Commercial Gardening
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-20 bg-gray-200">
        <div className="text-center mx-auto max-w-2xl text-green-700 mb-12">
          <h1 className="font-medium text-5xl mb-10">Lawn Greening</h1>
          <p className="font-thin text-lg">
            Choose which services you’d like us to handle. Our teams are trained
            to work swiftly to get the job done. Minimum callout for
            non-recurring jobs is 1 hour.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default pricing;
