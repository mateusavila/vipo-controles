import { a7 as useHead } from '../virtual/entry.mjs';
import { v as defineComponent, a6 as ssrRenderAttrs, y as mergeProps, T as ssrRenderSlot, Q as useSSRContext } from '../_/vue.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import '../nitro/nitro.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'uint8array-extras';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import 'unhead/utils';
import 'tailwind-variants';
import '@vueuse/core';
import '@vueuse/shared';

// app/layouts/main.vue?vue&type=script&setup=true&lang.ts
var main_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "main",
	__ssrInlineRender: true,
	setup(__props) {
		useHead({ link: [{
			rel: "preload",
			as: "image",
			type: "image/webp",
			href: "/logo-vipo.webp"
		}] });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full bg-slate-50 font-open" }, _attrs))}>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main>`);
		};
	}
});
// app/layouts/main.vue
var _sfc_setup = main_vue_vue_type_script_setup_true_lang_default.setup;
main_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/main.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var main_default = main_vue_vue_type_script_setup_true_lang_default;

export { main_default as default };
//# sourceMappingURL=main-DBzpGJSM.mjs.map
