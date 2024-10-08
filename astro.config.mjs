import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://api.elysia.vercel.app",
	redirects: {
		'/': '/api/v1'
	},
	output: "server",
	adapter: vercel(),
	integrations: [tailwind()],
});
