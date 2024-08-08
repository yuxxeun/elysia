import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import { constant } from "./src/constant";

// https://astro.build/config
export default defineConfig({
	site: constant.baseUrl,
	redirects: {
		'/': '/api/v1'
	},
	output: "server",
	adapter: vercel(),
	integrations: [tailwind()],
});
