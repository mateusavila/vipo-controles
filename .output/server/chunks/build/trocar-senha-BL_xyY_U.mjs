import { a7 as useHead, $ as $fetch$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$4 } from './Card-DSahVF7a.mjs';
import { _ as _sfc_main } from './FormField-DiTw_Gbk.mjs';
import { _ as _sfc_main$1 } from './Input--Ghsdvyo.mjs';
import { _ as _sfc_main$2 } from './Alert-BYdpukSa.mjs';
import { _ as _sfc_main$3 } from './Button-LO2h-wN-.mjs';
import { v as defineComponent, a6 as ssrRenderAttrs, y as mergeProps, J as ssrRenderComponent, S as withCtx, u as unref, l as isRef, L as createVNode, a7 as createTextVNode, V as openBlock, W as createBlock, ad as withModifiers, $ as createCommentVNode, k as ref, Q as useSSRContext } from '../_/vue.mjs';
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

// app/pages/trocar-senha.vue?vue&type=script&setup=true&lang.ts
var trocar_senha_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "trocar-senha",
	__ssrInlineRender: true,
	setup(__props) {
		useHead({ title: "Trocar senha · Vipo Eletrônica" });
		const email = ref("");
		const pending = ref(false);
		const sent = ref(false);
		const error = ref("");
		async function requestPassword() {
			if (pending.value) return;
			pending.value = true;
			error.value = "";
			try {
				await $fetch$1("/api/identity/request-password", {
					method: "POST",
					body: { email: email.value }
				});
				sent.value = true;
			} catch {
				error.value = "Não foi possível registrar a solicitação. Tente novamente.";
			} finally {
				pending.value = false;
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto grid min-h-dvh max-w-md content-center p-5" }, _attrs))}>`);
			_push(ssrRenderComponent(_sfc_main$4, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h1 class="text-xl font-semibold"${_scopeId}>Trocar senha</h1>`);
					else return [createVNode("h1", { class: "text-xl font-semibold" }, "Trocar senha")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (!unref(sent)) {
							_push(`<form class="space-y-4"${_scopeId}><p class="text-sm text-muted"${_scopeId}>Informe o e-mail da sua conta para receber o link de confirmação.</p>`);
							_push(ssrRenderComponent(_sfc_main, {
								label: "E-mail",
								required: ""
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(_sfc_main$1, {
										modelValue: unref(email),
										"onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
										class: "w-full",
										type: "email",
										autocomplete: "email",
										maxlength: "254",
										required: ""
									}, null, _parent, _scopeId));
									else return [createVNode(_sfc_main$1, {
										modelValue: unref(email),
										"onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
										class: "w-full",
										type: "email",
										autocomplete: "email",
										maxlength: "254",
										required: ""
									}, null, 8, ["modelValue", "onUpdate:modelValue"])];
								}),
								_: 1
							}, _parent, _scopeId));
							if (unref(error)) _push(ssrRenderComponent(_sfc_main$2, {
								color: "error",
								title: unref(error),
								role: "alert"
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
							_push(ssrRenderComponent(_sfc_main$3, {
								type: "submit",
								loading: unref(pending),
								block: ""
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Enviar link`);
									else return [createTextVNode("Enviar link")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</form>`);
						} else _push(ssrRenderComponent(_sfc_main$2, {
							color: "success",
							title: "Confira sua caixa de entrada",
							description: "Se houver uma conta ativa com esse e-mail, você receberá o link para definir uma nova senha.",
							role: "status"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-4",
							to: "/login",
							variant: "link",
							block: ""
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Voltar ao login`);
								else return [createTextVNode("Voltar ao login")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [!unref(sent) ? (openBlock(), createBlock("form", {
						key: 0,
						class: "space-y-4",
						onSubmit: withModifiers(requestPassword, ["prevent"])
					}, [
						createVNode("p", { class: "text-sm text-muted" }, "Informe o e-mail da sua conta para receber o link de confirmação."),
						createVNode(_sfc_main, {
							label: "E-mail",
							required: ""
						}, {
							default: withCtx(() => [createVNode(_sfc_main$1, {
								modelValue: unref(email),
								"onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
								class: "w-full",
								type: "email",
								autocomplete: "email",
								maxlength: "254",
								required: ""
							}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
							_: 1
						}),
						unref(error) ? (openBlock(), createBlock(_sfc_main$2, {
							key: 0,
							color: "error",
							title: unref(error),
							role: "alert"
						}, null, 8, ["title"])) : createCommentVNode("", true),
						createVNode(_sfc_main$3, {
							type: "submit",
							loading: unref(pending),
							block: ""
						}, {
							default: withCtx(() => [createTextVNode("Enviar link")]),
							_: 1
						}, 8, ["loading"])
					], 32)) : (openBlock(), createBlock(_sfc_main$2, {
						key: 1,
						color: "success",
						title: "Confira sua caixa de entrada",
						description: "Se houver uma conta ativa com esse e-mail, você receberá o link para definir uma nova senha.",
						role: "status"
					})), createVNode(_sfc_main$3, {
						class: "mt-4",
						to: "/login",
						variant: "link",
						block: ""
					}, {
						default: withCtx(() => [createTextVNode("Voltar ao login")]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</main>`);
		};
	}
});
// app/pages/trocar-senha.vue
var _sfc_setup = trocar_senha_vue_vue_type_script_setup_true_lang_default.setup;
trocar_senha_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/trocar-senha.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var trocar_senha_default = trocar_senha_vue_vue_type_script_setup_true_lang_default;

export { trocar_senha_default as default };
//# sourceMappingURL=trocar-senha-BL_xyY_U.mjs.map
