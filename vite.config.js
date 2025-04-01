import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

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
});
