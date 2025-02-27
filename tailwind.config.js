export default {
	content: ["./src/**/*.{html,svelte,js,ts}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				cormorant_garamond: ["Cormorant Garamond", "serif"],
			},
			screens: {
				xs: "475px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1240px",
			},
		},
	},
	plugins: [],
};
