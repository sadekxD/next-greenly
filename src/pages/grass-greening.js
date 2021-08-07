import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import Box from "../components/Box";

const grassGreening = () => {
	return (
		<div>
			<main>
				<Hero>
					<div className="max-w-sm text-center lg:text-left">
						<p className="mb-8 font-bold text-green-700">GRASS GREENING</p>
						<h1 className="text-4xl md:text-56 font-bold text-green-900 leading-snug">
							Dirty yellow- brown grass
						</h1>

						<p className="font-normal text-lg text-green-900 mt-8">
							Is an eyesore plaguing many lawns over Australia’s dry summer
							time.
						</p>
						<p className="font-normal text-lg text-green-900 mt-8">
							But it doesn’t have to ruin your lawn, you can be the exception.
						</p>
					</div>
					<div className="hidden lg:block">
						<Image src={require("../media/svg/man-watering-garden.svg")} />
					</div>
				</Hero>
				<Box>
					<div className="flex-1 flex items-center justify-center py-16 text-center lg:text-left px-2 md:px-3 lg:px-5">
						<div className="max-w-2xl">
							<p className="font-bold text-green-700 mb-8">
								HOW TO HAVE A STUNNING GREEN LAWN YEAR-ROUND
							</p>
							<h1 className="text-3xl md:text-5xl font-semibold text-green-800 leading-tight mb-8">
								Ever wondered how golf courses maintain their uniform colour
								year round?
							</h1>
							<h2 className="italic text-xl md:text-2xl font-normal text-green-800 mb-8">
								They spray the bad spots — they’ve done it for decades and now
								you can too!
							</h2>
							<p className="font-normal text-green-800 mb-8">
								Our special non-toxic pigment is sprayed over the dormant grass,
								and it’s then absorbed into the grass blades. This allows the
								grass to maintain a vibrant and luscious colour. The best part —
								no more fuss of heavy watering, fertilising, and time-consuming
								lawn care.
							</p>
							<div className="h-16 w-16 mb-8 hidden lg:block">
								<Image
									src={require("../media/svg/union.svg")}
									objectFit="cover"
									layout="responsive"
									className="opacity-50"
								/>
							</div>
							<p className="font-normal text-green-800 mb-8">
								Please understand that this product is for dry and dormant grass
								— not dead grass. Sadly, there is no known substance that can
								resurrect dead grass.{" "}
								<span className="font-bold">
									But if you do have dead grass, we can reseed and repair that
									grass!
								</span>
							</p>
						</div>
					</div>
					<div className="hidden lg:block max-w-lg w-full h-auto relative">
						<Image
							src={require("../media/how.png")}
							objectFit="cover"
							layout="fill"
						/>
					</div>
				</Box>
				<div className="bg-gray-50 font-montserrat">
					<div className="flex justfily-between max-w-6xl mx-auto px-3 sm:px-6 xl:px-2">
						<div className="hidden lg:flex flex-col max-w-xl w-full">
							<div className="space-y-5">
								<div>
									<Image
										src={require("../media/young-girl-going.png")}
										objectFit="cover"
										layout="responsive"
										className="rounded-br-3xl"
									/>
								</div>
								<div>
									<Image
										src={require("../media/dogs-coming.png")}
										objectFit="cover"
										layout="responsive"
										className="rounded-tr-3xl"
									/>
								</div>
							</div>
						</div>
						<div className="flex-1 px-4 text-center lg:text-left">
							<p className="font-bold text-green-700 mb-8">
								WHY DO PEOPLE PAINT THEIR GRASS?
							</p>

							<h1 className="text-2xl md:text-3xl font-semibold text-green-800 leading-tight mb-8">
								Why Perth residents and businesses are lining up to get their
								grass sprayed…
							</h1>
							<p className="font-normal text-green-800 mb-8">
								Grass greening is a flat rate based on the size of the property
								because consumable resources are required.
							</p>
							<Link href="/grass-greening">
								<a className="underline font-normal text-green-800">
									Find out here
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="px-3 sm:px-6 xl:px-2 pb-16 pt-16 lg:pt-0 font-montserrat">
					<div className="max-w-2xl mx-auto text-center">
						<div className="hidden lg:block mx-auto w-36 h-36 transform-gpu -translate-y-2/4">
							<Image
								src={require("../media/svg/union.svg")}
								objectFit="cover"
								layout="responsive"
							/>
						</div>
						<div className="max-w-md mx-auto">
							<h1 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight mb-8">
								Why should I spray my grass green?
							</h1>
							<h2 className="text-3xl md:text-5xl font-normal text-green-800 mb-8">
								Plenty of reasons.
							</h2>
						</div>
					</div>
				</div>

				<div className="px-3 sm:px-6 xl:px-2 pb-16 pt-16 lg:pt-0 font-montserrat  bg-gray-100">
					<div className="max-w-4xl mx-auto">
						<div className="hidden lg:block mx-auto w-20 h-20 transform-gpu -translate-y-2/4">
							<Image
								src={require("../media/svg/polygon-arrow.svg")}
								objectFit="cover"
								layout="responsive"
							/>
						</div>
						<div className="grid lg:grid-cols-2 md:gap-x-12 gap-y-8">
							<div className="space-x-3 flex flex-row font-semibold">
								<div className="flex-none flex items-center justify-center h-8 w-8 rounded-full border-2 border-gray-800 text-center ">
									01
								</div>
								<p>
									It’ll look great every time you walk past or enter and exit
									your driveway.
								</p>
							</div>
							<div className="space-x-3 flex flex-row font-semibold">
								<div className="flex-none flex items-center justify-center h-8 w-8 rounded-full border-2 border-gray-800 text-center ">
									01
								</div>
								<p>
									It’ll look great every time you walk past or enter and exit
									your driveway.
								</p>
							</div>
							<div className="space-x-3 flex flex-row font-semibold">
								<div className="flex-none flex items-center justify-center h-8 w-8 rounded-full border-2 border-gray-800 text-center ">
									01
								</div>
								<p>
									It’ll look great every time you walk past or enter and exit
									your driveway.
								</p>
							</div>
							<div className="space-x-3 flex flex-row font-semibold">
								<div className="flex-none flex items-center justify-center h-8 w-8 rounded-full border-2 border-gray-800 text-center ">
									01
								</div>
								<p>
									It’ll look great every time you walk past or enter and exit
									your driveway.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default grassGreening;
