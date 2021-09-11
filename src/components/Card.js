import Image from "next/image";

const Card = () => {
  return (
    <div className="p-8 flex flex-col items-center rounded-3xl bg-white shadow-none hover:shadow-lg transition-all duration-300">
      <Image src={require("../media/svg/house.svg")} />
      <h2 className="font-semibold text-gray-700 my-2 text-3xl">Townhouse</h2>
      <h1 className="font-bold text-gray-700 mb-2 text-6xl">$120</h1>
      <p className="text-xl font-thin text-gray-400">{"<"}50sqm</p>
      <p className="max-w-sm italic font-thin text-lg text-gray-400 mt-4">
        *Typical townhouse with a small front yard
      </p>
    </div>
  );
};

export default Card;
