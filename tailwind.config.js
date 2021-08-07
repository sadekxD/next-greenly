module.exports = {
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			fontSize: {
				56: "3.5rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
