import { s as ssrRenderList$2, $ as $fetch$1 } from '../virtual/entry.mjs';
import { u as useFetch } from './fetch-DFjeJf4d.mjs';
import { _ as _sfc_main } from './Alert-BYdpukSa.mjs';
import { _ as _sfc_main$1 } from './Input--Ghsdvyo.mjs';
import { _ as _sfc_main$2 } from './Button-LO2h-wN-.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './Modal-BfwSu3fu.mjs';
import { v as defineComponent, N as withAsyncContext, u as unref, J as ssrRenderComponent, l as isRef, S as withCtx, a7 as createTextVNode, a8 as ssrInterpolate, L as createVNode, k as ref, Q as useSSRContext } from '../_/vue.mjs';
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
import './asyncData-Clm5bn3w.mjs';
import 'fnv1a-64';
import 'object-identity';
import './components-lUjYQ9V4.mjs';
import './nuxt-link-Bdrn-Ybx.mjs';
import './Kbd-CdJL61Dx.mjs';
import '@floating-ui/vue';
import './Presence-DAl9-TXs.mjs';
import 'aria-hidden';

// app/pages/admin/marcas.vue?vue&type=script&setup=true&lang.ts
var marcas_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "marcas",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const requestBrand = $fetch$1;
		const { data: brands, status, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/brands", "$tUqUAlZxuX")), __temp = await __temp, __restore(), __temp);
		const newName = ref("");
		const editingId = ref();
		const editName = ref("");
		const pending = ref(false);
		const error = ref("");
		const deleteTarget = ref();
		const showDelete = ref(false);
		function edit(brand) {
			editingId.value = brand.id;
			editName.value = brand.name;
			error.value = "";
		}
		function cancelEdit() {
			editingId.value = void 0;
		}
		async function mutate(action, after) {
			if (pending.value) return;
			pending.value = true;
			error.value = "";
			try {
				await action();
				after();
				await refresh();
			} catch (failure) {
				const response = failure;
				error.value = response.statusCode === 409 ? response.data?.message ?? "A marca está em uso ou o nome já existe." : "Não foi possível alterar a marca. Confira o nome e tente novamente.";
			} finally {
				pending.value = false;
			}
		}
		function askDelete(brand) {
			deleteTarget.value = brand;
			showDelete.value = true;
		}
		async function confirmDelete() {
			const id = deleteTarget.value?.id;
			if (!id) return;
			await mutate(() => requestBrand(`/api/admin/brands/${id}`, { method: "DELETE" }), () => {
				if (editingId.value === id) cancelEdit();
			});
			showDelete.value = false;
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><h1 class="text-2xl font-semibold">Marcas</h1><section class="admin-panel">`);
			if (unref(error)) _push(ssrRenderComponent(_sfc_main, {
				color: "error",
				title: unref(error),
				role: "alert"
			}, null, _parent));
			else _push(`<!---->`);
			if (unref(status) === "error") _push(ssrRenderComponent(_sfc_main, {
				color: "error",
				title: "Não foi possível carregar as marcas."
			}, null, _parent));
			else if (unref(status) === "pending") _push(`<p>Carregando…</p>`);
			else _push(`<!---->`);
			_push(`<table class="w-full text-left text-sm"><thead><tr><th scope="col" class="p-2">Nome</th><th scope="col" class="p-2 text-end">Ações</th></tr></thead><tbody><!--[-->`);
			ssrRenderList$2(unref(brands), (brand) => {
				_push(`<tr class="border-t border-default">`);
				if (unref(editingId) === brand.id) {
					_push(`<td colspan="2" class="p-2"><form class="flex flex-wrap gap-2">`);
					_push(ssrRenderComponent(_sfc_main$1, {
						modelValue: unref(editName),
						"onUpdate:modelValue": ($event) => isRef(editName) ? editName.value = $event : null,
						"aria-label": "Nome da marca",
						maxlength: "100",
						required: "",
						disabled: unref(pending)
					}, null, _parent));
					_push(ssrRenderComponent(_sfc_main$2, {
						type: "submit",
						disabled: unref(pending) || !unref(editName).trim()
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Salvar`);
							else return [createTextVNode("Salvar")];
						}),
						_: 2
					}, _parent));
					_push(ssrRenderComponent(_sfc_main$2, {
						type: "button",
						color: "neutral",
						variant: "ghost",
						disabled: unref(pending),
						onClick: cancelEdit
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`Cancelar`);
							else return [createTextVNode("Cancelar")];
						}),
						_: 2
					}, _parent));
					_push(`</form></td>`);
				} else {
					_push(`<!--[--><td class="p-2">${ssrInterpolate(brand.name)}</td><td class="p-2 text-end">`);
					_push(ssrRenderComponent(_sfc_main$1$1, {
						modal: false,
						items: [{
							label: "Editar",
							icon: "i-lucide-pencil",
							onSelect: () => edit(brand)
						}, {
							label: "Apagar",
							icon: "i-lucide-trash-2",
							color: "error",
							onSelect: () => askDelete(brand)
						}],
						content: { align: "end" }
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(_sfc_main$2, {
								type: "button",
								icon: "i-lucide-ellipsis-vertical",
								color: "neutral",
								variant: "ghost",
								"aria-label": `Ações de ${brand.name}`,
								disabled: unref(pending)
							}, null, _parent, _scopeId));
							else return [createVNode(_sfc_main$2, {
								type: "button",
								icon: "i-lucide-ellipsis-vertical",
								color: "neutral",
								variant: "ghost",
								"aria-label": `Ações de ${brand.name}`,
								disabled: unref(pending)
							}, null, 8, ["aria-label", "disabled"])];
						}),
						_: 2
					}, _parent));
					_push(`</td><!--]-->`);
				}
				_push(`</tr>`);
			});
			_push(`<!--]--><tr class="border-t border-default"><td colspan="2" class="p-2"><form class="flex flex-wrap gap-2">`);
			_push(ssrRenderComponent(_sfc_main$1, {
				modelValue: unref(newName),
				"onUpdate:modelValue": ($event) => isRef(newName) ? newName.value = $event : null,
				"aria-label": "Nova marca",
				placeholder: "Nova marca",
				maxlength: "100",
				required: "",
				disabled: unref(pending)
			}, null, _parent));
			_push(ssrRenderComponent(_sfc_main$2, {
				type: "submit",
				icon: "i-lucide-plus",
				disabled: unref(pending) || !unref(newName).trim()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Adicionar`);
					else return [createTextVNode("Adicionar")];
				}),
				_: 1
			}, _parent));
			_push(`</form></td></tr></tbody></table></section>`);
			_push(ssrRenderComponent(_sfc_main$3, {
				open: unref(showDelete),
				"onUpdate:open": ($event) => isRef(showDelete) ? showDelete.value = $event : null,
				title: "Apagar marca",
				description: `Apagar ${unref(deleteTarget)?.name ?? "esta marca"}?`,
				dismissible: !unref(pending),
				close: !unref(pending)
			}, {
				footer: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$2, {
							color: "neutral",
							variant: "ghost",
							disabled: unref(pending),
							onClick: ($event) => void (showDelete.value = false)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Cancelar`);
								else return [createTextVNode("Cancelar")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$2, {
							color: "error",
							loading: unref(pending),
							onClick: confirmDelete
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Apagar marca`);
								else return [createTextVNode("Apagar marca")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$2, {
						color: "neutral",
						variant: "ghost",
						disabled: unref(pending),
						onClick: ($event) => void (showDelete.value = false)
					}, {
						default: withCtx(() => [createTextVNode("Cancelar")]),
						_: 1
					}, 8, ["disabled", "onClick"]), createVNode(_sfc_main$2, {
						color: "error",
						loading: unref(pending),
						onClick: confirmDelete
					}, {
						default: withCtx(() => [createTextVNode("Apagar marca")]),
						_: 1
					}, 8, ["loading"])];
				}),
				_: 1
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
// app/pages/admin/marcas.vue
var _sfc_setup = marcas_vue_vue_type_script_setup_true_lang_default.setup;
marcas_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/marcas.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var marcas_default = marcas_vue_vue_type_script_setup_true_lang_default;

export { marcas_default as default };
//# sourceMappingURL=marcas-Bsfv9qD0.mjs.map
