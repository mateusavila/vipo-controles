import { X as useRoute, ae as useUserSession, s as ssrRenderList$2, n as navigateTo } from '../virtual/entry.mjs';
import { _ as _sfc_main } from './Button-LO2h-wN-.mjs';
import { v as defineComponent, a6 as ssrRenderAttrs, y as mergeProps, J as ssrRenderComponent, S as withCtx, a8 as ssrInterpolate, a7 as createTextVNode, ac as toDisplayString, u as unref, T as ssrRenderSlot, Q as useSSRContext } from '../_/vue.mjs';
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
import './components-lUjYQ9V4.mjs';
import 'fnv1a-64';
import './nuxt-link-Bdrn-Ybx.mjs';

// app/layouts/admin.vue?vue&type=script&setup=true&lang.ts
var admin_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "admin",
	__ssrInlineRender: true,
	setup(__props) {
		const route = useRoute();
		const adminLinks = [
			{
				label: "Dashboard",
				to: "/admin"
			},
			{
				label: "Controles",
				to: "/admin/controles"
			},
			{
				label: "Marcas",
				to: "/admin/marcas"
			}
		];
		function isActive(path) {
			if (path === "/admin") return route.path === path;
			return route.path === path || route.path.startsWith(`${path}/`);
		}
		const { user, clear } = useUserSession();
		async function logout() {
			await clear();
			await navigateTo("/login");
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-shell" }, _attrs))}><header class="admin-header"><nav class="flex flex-wrap gap-2" aria-label="Administração"><!--[-->`);
			ssrRenderList$2(unref(user)?.role === "superadmin" ? [...adminLinks, {
				label: "Usuários",
				to: "/admin/usuarios"
			}] : adminLinks, (link) => {
				_push(ssrRenderComponent(_sfc_main, {
					key: link.to,
					to: link.to,
					exact: link.to === "/admin",
					color: isActive(link.to) ? "primary" : "neutral",
					variant: isActive(link.to) ? "soft" : "ghost",
					"aria-current": isActive(link.to) ? "page" : void 0
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`${ssrInterpolate(link.label)}`);
						else return [createTextVNode(toDisplayString(link.label), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></nav>`);
			_push(ssrRenderComponent(_sfc_main, {
				variant: "outline",
				color: "neutral",
				onClick: logout
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Sair`);
					else return [createTextVNode("Sair")];
				}),
				_: 1
			}, _parent));
			_push(`</header><main class="admin-main">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</main></div>`);
		};
	}
});
// app/layouts/admin.vue
var _sfc_setup = admin_vue_vue_type_script_setup_true_lang_default.setup;
admin_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var admin_default = admin_vue_vue_type_script_setup_true_lang_default;

export { admin_default as default };
//# sourceMappingURL=admin-De7m7zlR.mjs.map
