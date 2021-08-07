import React from "react";

const Box = ({ children }) => {
	return (
		<div className="flex items-stretch justify-between font-montserrat bg-gray-100">
			{children}
		</div>
	);
};

export default Box;
