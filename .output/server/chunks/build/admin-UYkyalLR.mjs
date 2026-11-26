import { u as useFetch } from './fetch-DFjeJf4d.mjs';
import { s as ssrRenderList$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main } from './Alert-BYdpukSa.mjs';
import { _ as _sfc_main$1 } from './Badge-Du5GmJZs.mjs';
import { v as defineComponent, N as withAsyncContext, u as unref, J as ssrRenderComponent, a8 as ssrInterpolate, S as withCtx, a7 as createTextVNode, ac as toDisplayString, Q as useSSRContext } from '../_/vue.mjs';
import './asyncData-Clm5bn3w.mjs';
import 'nostics';
import 'fnv1a-64';
import 'object-identity';
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
import './Button-LO2h-wN-.mjs';
import './components-lUjYQ9V4.mjs';
import './nuxt-link-Bdrn-Ybx.mjs';

// app/pages/admin/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { data, error, status } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/dashboard", "$VDG7u31OJo")), __temp = await __temp, __restore(), __temp);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><h1 class="text-2xl font-semibold">Dashboard</h1>`);
			if (unref(error)) _push(ssrRenderComponent(_sfc_main, {
				title: "Não foi possível carregar o relatório.",
				color: "error"
			}, null, _parent));
			else if (unref(status) === "pending") _push(`<p>Carregando…</p>`);
			else if (unref(data)) {
				_push(`<div class="space-y-5"><section class="admin-panel"><h2 class="text-lg font-semibold">Controles mais encontrados</h2><p class="text-sm text-muted">Cada busca conta uma vez para cada controle encontrado, mesmo que ele apareça em outra página de resultados.</p>`);
				if (!unref(data).controls.length) _push(`<p>Ainda não há buscas com resultados.</p>`);
				else {
					_push(`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr><th class="p-2">Código Vipo</th><th class="p-2">Controle</th><th class="p-2">Buscas</th><th class="p-2">Principais termos</th></tr></thead><tbody><!--[-->`);
					ssrRenderList$2(unref(data).controls, (row) => {
						_push(`<tr class="border-t border-default"><td class="p-2">${ssrInterpolate(row.vipoCode)}</td><td class="p-2">${ssrInterpolate(row.name)}</td><td class="p-2">${ssrInterpolate(row.searchCount)}</td><td class="p-2"><ul class="flex flex-wrap gap-1"><!--[-->`);
						ssrRenderList$2(row.terms, (item) => {
							_push(`<li>`);
							_push(ssrRenderComponent(_sfc_main$1, {
								color: "neutral",
								variant: "soft"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(item.term)} (${ssrInterpolate(item.searchCount)})`);
									else return [createTextVNode(toDisplayString(item.term) + " (" + toDisplayString(item.searchCount) + ")", 1)];
								}),
								_: 2
							}, _parent));
							_push(`</li>`);
						});
						_push(`<!--]--></ul></td></tr>`);
					});
					_push(`<!--]--></tbody></table></div>`);
				}
				_push(`</section><section class="admin-panel mt-2"><h2 class="text-lg font-semibold">Termos mais buscados</h2>`);
				if (!unref(data).terms.length) _push(`<p>As buscas aparecerão aqui conforme o catálogo for consultado.</p>`);
				else {
					_push(`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr><th class="p-2">Termo</th><th class="p-2">Buscas</th><th class="p-2">Sem resultado</th></tr></thead><tbody><!--[-->`);
					ssrRenderList$2(unref(data).terms, (row) => {
						_push(`<tr class="border-t border-default"><td class="p-2">${ssrInterpolate(row.term)}</td><td class="p-2">${ssrInterpolate(row.searchCount)}</td><td class="p-2">${ssrInterpolate(row.zeroResultCount)}</td></tr>`);
					});
					_push(`<!--]--></tbody></table></div>`);
				}
				_push(`</section></div>`);
			} else _push(`<!---->`);
			_push(`<!--]-->`);
		};
	}
});
// app/pages/admin/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var admin_default = index_vue_vue_type_script_setup_true_lang_default;

export { admin_default as default };
//# sourceMappingURL=admin-UYkyalLR.mjs.map
