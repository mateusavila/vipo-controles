import { ae as useUserSession, $ as $fetch$1, n as navigateTo } from '../virtual/entry.mjs';
import { _ as _sfc_main$4 } from './Card-DSahVF7a.mjs';
import { _ as _sfc_main } from './FormField-DiTw_Gbk.mjs';
import { _ as _sfc_main$1 } from './Input--Ghsdvyo.mjs';
import { _ as _sfc_main$2 } from './Alert-BYdpukSa.mjs';
import { _ as _sfc_main$3 } from './Button-LO2h-wN-.mjs';
import { v as defineComponent, a6 as ssrRenderAttrs, y as mergeProps, J as ssrRenderComponent, S as withCtx, l as isRef, u as unref, L as createVNode, a7 as createTextVNode, ad as withModifiers, V as openBlock, W as createBlock, $ as createCommentVNode, k as ref, Q as useSSRContext } from '../_/vue.mjs';
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

// app/pages/login.vue?vue&type=script&setup=true&lang.ts
var login_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "login",
	__ssrInlineRender: true,
	setup(__props) {
		const email = ref("");
		const password = ref("");
		const error = ref("");
		const busy = ref(false);
		const { fetch: refreshSession } = useUserSession();
		async function login() {
			busy.value = true;
			error.value = "";
			try {
				await $fetch$1("/api/identity/login", {
					method: "POST",
					body: {
						email: email.value,
						password: password.value
					}
				});
				await refreshSession();
				await navigateTo("/admin");
			} catch (failure) {
				const status = failure.statusCode;
				error.value = status === 401 ? "E-mail ou senha inválidos." : "Não foi possível entrar. Confira a configuração do servidor.";
			} finally {
				busy.value = false;
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto grid min-h-dvh max-w-98 content-center p-5" }, _attrs))}>`);
			_push(ssrRenderComponent(_sfc_main$4, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h1 class="text-xl font-semibold"${_scopeId}>Administração · Vipo Eletrônica</h1>`);
					else return [createVNode("h1", { class: "text-xl font-semibold" }, "Administração · Vipo Eletrônica")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<form class="space-y-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main, { label: "E-mail" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_sfc_main$1, {
									modelValue: unref(email),
									"onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
									class: "w-full",
									type: "email",
									autocomplete: "username",
									required: ""
								}, null, _parent, _scopeId));
								else return [createVNode(_sfc_main$1, {
									modelValue: unref(email),
									"onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
									class: "w-full",
									type: "email",
									autocomplete: "username",
									required: ""
								}, null, 8, ["modelValue", "onUpdate:modelValue"])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main, { label: "Senha" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_sfc_main$1, {
									modelValue: unref(password),
									"onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
									class: "w-full",
									type: "password",
									autocomplete: "current-password",
									required: ""
								}, null, _parent, _scopeId));
								else return [createVNode(_sfc_main$1, {
									modelValue: unref(password),
									"onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
									class: "w-full",
									type: "password",
									autocomplete: "current-password",
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
							loading: unref(busy),
							block: ""
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Entrar`);
								else return [createTextVNode("Entrar")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							to: "/trocar-senha",
							variant: "link",
							block: ""
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Trocar senha`);
								else return [createTextVNode("Trocar senha")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</form>`);
					} else return [createVNode("form", {
						class: "space-y-4",
						onSubmit: withModifiers(login, ["prevent"])
					}, [
						createVNode(_sfc_main, { label: "E-mail" }, {
							default: withCtx(() => [createVNode(_sfc_main$1, {
								modelValue: unref(email),
								"onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
								class: "w-full",
								type: "email",
								autocomplete: "username",
								required: ""
							}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
							_: 1
						}),
						createVNode(_sfc_main, { label: "Senha" }, {
							default: withCtx(() => [createVNode(_sfc_main$1, {
								modelValue: unref(password),
								"onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
								class: "w-full",
								type: "password",
								autocomplete: "current-password",
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
							loading: unref(busy),
							block: ""
						}, {
							default: withCtx(() => [createTextVNode("Entrar")]),
							_: 1
						}, 8, ["loading"]),
						createVNode(_sfc_main$3, {
							to: "/trocar-senha",
							variant: "link",
							block: ""
						}, {
							default: withCtx(() => [createTextVNode("Trocar senha")]),
							_: 1
						})
					], 32)];
				}),
				_: 1
			}, _parent));
			_push(`</main>`);
		};
	}
});
// app/pages/login.vue
var _sfc_setup = login_vue_vue_type_script_setup_true_lang_default.setup;
login_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var login_default = login_vue_vue_type_script_setup_true_lang_default;

export { login_default as default };
//# sourceMappingURL=login-DIiUQ31E.mjs.map
