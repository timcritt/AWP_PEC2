import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag) =>
						["search"].includes(
							tag
						) /*Vue does not recognize the element <search>, because it's been added to the HTMl5 spec recently*/,
				},
			},
		}),
	],
	//Allow the use of an alias when referring to the root directory
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
