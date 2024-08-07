import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
export { renderers } from "../renderers.mjs";

const app = new Elysia({ prefix: "/api/v1" })
	.get("/", () => "Welcome to Elysia")
	.use(cors());
const handle = ({ request }) => app.handle(request);
const GET = handle;
const POST = handle;

const _page = /*#__PURE__*/ Object.freeze(
	/*#__PURE__*/ Object.defineProperty(
		{
			__proto__: null,
			GET,
			POST,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);

const page = () => _page;

export { page };
