const ListItem = ({ children }) => {
	return (
		<li className="flex items-center text-sm md:text-base mb-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 mr-1"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 13l4 4L19 7"
				/>
			</svg>
			<p>{children}</p>
		</li>
	);
};

export default ListItem;
