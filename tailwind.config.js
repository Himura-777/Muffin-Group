import aspectRatio from "@tailwindcss/aspect-ratio";

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
				l: "960px",
			},
		},
	},
	plugins: [aspectRatio],
};
