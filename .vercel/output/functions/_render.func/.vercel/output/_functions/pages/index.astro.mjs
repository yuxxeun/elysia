/* empty css                                 */
import {
	c as createComponent,
	r as renderTemplate,
	a as addAttribute,
	d as renderHead,
	e as renderSlot,
	b as createAstro,
	f as renderComponent,
	m as maybeRenderHead,
} from "../chunks/astro/server_DI3ovVLK.mjs";
import "kleur/colors";
import "clsx";
export { renderers } from "../renderers.mjs";

const constant = {
	title: "Elysia",
	description: "serverless api gateway",
};

const $$Astro = createAstro();
const $$Layout = createComponent(
	($$result, $$props, $$slots) => {
		const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
		Astro2.self = $$Layout;
		const { title } = Astro2.props;
		return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
	},
	"D:/@yuxxeun/my-astro-project-using-bun/src/layouts/Layout.astro",
	void 0,
);

const $$Index = createComponent(
	($$result, $$props, $$slots) => {
		return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { title: constant.title }, { default: ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
	},
	"D:/@yuxxeun/my-astro-project-using-bun/src/pages/index.astro",
	void 0,
);

const $$file = "D:/@yuxxeun/my-astro-project-using-bun/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/ Object.freeze(
	/*#__PURE__*/ Object.defineProperty(
		{
			__proto__: null,
			default: $$Index,
			file: $$file,
			url: $$url,
		},
		Symbol.toStringTag,
		{ value: "Module" },
	),
);

const page = () => _page;

export { page };
