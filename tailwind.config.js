const darkmode = require("tailwindcss-dark-mode");
const forms = require("@tailwindcss/forms");
const scrollbar = require("tailwind-scrollbar");
const typography = require("tailwindcss-typography");
const aspectRatio = require("@tailwindcss/aspect-ratio");

module.exports = {
	mode: "jit",
	theme: {
		extend: {
			// colors: {
			// 	teal: {
			// 		0: "#97ffff",
			// 		1: "#7dffff",
			// 		2: "#33ffff",
			// 		3: "#00cccc",
			// 		4: "#00a3a3",
			// 		5: "#008282",
			// 		6: "#006868",
			// 		7: "#005353",
			// 		8: "#004242",
			// 	},
			// },
			// 	spacing: {
			// 		72: "18rem",
			// 		84: "21rem",
			// 		96: "24rem",
			// 	},
			// 	outline: {
			// 		blue: ["4px solid #3b82f6", "-8px"],
			// 	},
		},
		darkSelector: ".dark",
	},
	darkMode: "class",
	variants: {
		backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
		borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
		textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"],
		scrollbar: ["dark", "rounded"],
		extend: {
			filter: ["hover", "focus"],
		},
	},
	plugins: [darkmode(), forms, scrollbar, typography, aspectRatio],
	purge: {
		// enable remove unused CSS only in production
		enabled: process.env.NODE_ENV === "production",
		// any file that may contain the reference of CSS styles by class name.
		content: ["components//*.vue", "layouts//.vue", "pages/**/.vue", "plugins/*/.js", "plugins/*/.ts", "nuxt.config.ts"],
	},
};
