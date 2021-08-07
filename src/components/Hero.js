const Hero = ({ children }) => {
	return (
		<div className="hero max-w-6xl bg-white mx-auto px-3 sm:px-6 xl:px-2 py-20 font-montserrat">
			<div className="flex items-center justify-center lg:justify-between">
				{children}
			</div>
		</div>
	);
};

export default Hero;
