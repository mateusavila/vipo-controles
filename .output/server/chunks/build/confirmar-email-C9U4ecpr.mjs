import { a7 as useHead, X as useRoute, ae as useUserSession, $ as $fetch$1, n as navigateTo, s as ssrRenderList$2 } from '../virtual/entry.mjs';
import { u as useFetch } from './fetch-DFjeJf4d.mjs';
import { _ as _sfc_main$4 } from './Card-DSahVF7a.mjs';
import { _ as _sfc_main } from './Alert-BYdpukSa.mjs';
import { _ as _sfc_main$1 } from './FormField-DiTw_Gbk.mjs';
import { _ as _sfc_main$2 } from './Input--Ghsdvyo.mjs';
import { _ as _sfc_main$5 } from './Progress-B17W5rH1.mjs';
import { _ as _sfc_main$3, a as _sfc_main$5$1 } from './Button-LO2h-wN-.mjs';
import { P as PASSWORD_MIN_LENGTH, i as isStrongPassword, p as passwordRequirements } from '../_/passwordPolicy.mjs';
import { v as defineComponent, N as withAsyncContext, p as computed, a6 as ssrRenderAttrs, y as mergeProps, J as ssrRenderComponent, S as withCtx, u as unref, l as isRef, L as createVNode, a7 as createTextVNode, a8 as ssrInterpolate, ac as toDisplayString, V as openBlock, W as createBlock, ad as withModifiers, $ as createCommentVNode, k as ref, aa as ssrRenderClass, j as toRef, Q as useSSRContext } from '../_/vue.mjs';
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
import './nullish-Dvpx-avd.mjs';
import './components-lUjYQ9V4.mjs';
import './nuxt-link-Bdrn-Ybx.mjs';
import 'zod';

// app/composables/usePasswordStrength.ts
var labels = {
	length: "Entre 12 e 128 caracteres",
	lowercase: "Uma letra minúscula",
	uppercase: "Uma letra maiúscula",
	numbers: "Um número",
	symbols: "Um símbolo"
};
function usePasswordStrength({ password }) {
	const strength = computed(() => passwordRequirements(password.value).map((rule) => ({
		...rule,
		text: labels[rule.key]
	})));
	const score = computed(() => strength.value.filter((rule) => rule.met).length);
	const maxScore = computed(() => strength.value.length);
	return {
		strength,
		score,
		maxScore,
		assessment: computed(() => {
			if (!password.value) return {
				color: "neutral",
				text: "Digite uma senha"
			};
			if (score.value < 3) return {
				color: "error",
				text: "Senha fraca"
			};
			if (score.value < maxScore.value) return {
				color: "warning",
				text: "Senha média"
			};
			return {
				color: "success",
				text: "Senha forte"
			};
		})
	};
}
// app/components/PasswordStrength.vue?vue&type=script&setup=true&lang.ts
var PasswordStrength_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "PasswordStrength",
	__ssrInlineRender: true,
	props: { password: {} },
	setup(__props) {
		const { strength, score, maxScore, assessment } = usePasswordStrength({ password: toRef(__props, "password") });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "mt-2 space-y-2",
				"aria-live": "polite"
			}, _attrs))}>`);
			_push(ssrRenderComponent(_sfc_main$5, {
				color: unref(assessment).color,
				"model-value": unref(score),
				max: unref(maxScore),
				size: "sm",
				"aria-label": unref(assessment).text
			}, null, _parent));
			_push(`<p class="text-xs font-medium">${ssrInterpolate(unref(assessment).text)}</p><ul class="space-y-1" aria-label="Requisitos da senha"><!--[-->`);
			ssrRenderList$2(unref(strength), (rule) => {
				_push(`<li class="${ssrRenderClass([rule.met ? "text-success" : "text-muted", "flex items-center gap-1 text-xs"])}">`);
				_push(ssrRenderComponent(_sfc_main$5$1, {
					name: rule.met ? "i-lucide-circle-check-big" : "i-lucide-circle-x",
					class: "size-4",
					"aria-hidden": "true"
				}, null, _parent));
				_push(`<span>${ssrInterpolate(rule.text)}<span class="sr-only"> · ${ssrInterpolate(rule.met ? "Atendido" : "Pendente")}</span></span></li>`);
			});
			_push(`<!--]--></ul></div>`);
		};
	}
});
// app/components/PasswordStrength.vue
var _sfc_setup$1 = PasswordStrength_vue_vue_type_script_setup_true_lang_default.setup;
PasswordStrength_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PasswordStrength.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var PasswordStrength_default = Object.assign(PasswordStrength_vue_vue_type_script_setup_true_lang_default, { __name: "PasswordStrength" });
// app/pages/confirmar-email.vue?vue&type=script&setup=true&lang.ts
var confirmar_email_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "confirmar-email",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useHead({ title: "Confirme seu e-mail · Vipo Eletrônica" });
		const route = useRoute();
		const token = computed(() => typeof route.query.token === "string" ? route.query.token : "");
		const password = ref("");
		const confirmation = ref("");
		const pending = ref(false);
		const error = ref("");
		const { clear } = useUserSession();
		const { data: verification, status, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/identity/password-token", {
			method: "POST",
			body: computed(() => ({ token: token.value })),
			server: false
		}, "$yV9EkI1MlF")), __temp = await __temp, __restore(), __temp);
		async function savePassword() {
			if (pending.value || !verification.value?.valid) return;
			error.value = "";
			if (!isStrongPassword(password.value)) {
				error.value = "A senha precisa atender a todos os requisitos.";
				return;
			}
			if (password.value !== confirmation.value) {
				error.value = "As senhas precisam ser iguais.";
				return;
			}
			pending.value = true;
			try {
				await $fetch$1("/api/identity/set-password", {
					method: "POST",
					body: {
						token: token.value,
						password: password.value,
						confirmation: confirmation.value
					}
				});
				await clear().catch(() => void 0);
				await navigateTo("/login", { replace: true });
			} catch (failure) {
				if (failure.statusCode === 400) await refresh();
				error.value = "Não foi possível salvar a senha. Confira os dados e tente novamente.";
			} finally {
				pending.value = false;
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto grid min-h-dvh max-w-md content-center p-5" }, _attrs))}>`);
			_push(ssrRenderComponent(_sfc_main$4, null, {
				header: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<h1 class="text-xl font-semibold"${_scopeId}>Confirme seu e-mail</h1>`);
					else return [createVNode("h1", { class: "text-xl font-semibold" }, "Confirme seu e-mail")];
				}),
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (!unref(token) || unref(status) === "success" && !unref(verification)?.valid) _push(ssrRenderComponent(_sfc_main, {
							color: "error",
							title: "Token inválido ou já utilizado",
							description: "Se precisar de outro link, solicite a troca de senha.",
							role: "alert"
						}, null, _parent, _scopeId));
						else if (unref(status) === "error") _push(ssrRenderComponent(_sfc_main, {
							color: "error",
							title: "Não foi possível conferir o link. Recarregue a página.",
							role: "alert"
						}, null, _parent, _scopeId));
						else if (unref(status) !== "success") _push(`<p role="status" class="text-sm text-muted"${_scopeId}>Validando link…</p>`);
						else {
							_push(`<form class="space-y-4"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$1, {
								label: "Nova senha",
								required: ""
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(ssrRenderComponent(_sfc_main$2, {
											modelValue: unref(password),
											"onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
											class: "w-full",
											type: "password",
											autocomplete: "new-password",
											minlength: unref(PASSWORD_MIN_LENGTH),
											maxlength: "128",
											required: ""
										}, null, _parent, _scopeId));
										_push(ssrRenderComponent(PasswordStrength_default, { password: unref(password) }, null, _parent, _scopeId));
									} else return [createVNode(_sfc_main$2, {
										modelValue: unref(password),
										"onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
										class: "w-full",
										type: "password",
										autocomplete: "new-password",
										minlength: unref(PASSWORD_MIN_LENGTH),
										maxlength: "128",
										required: ""
									}, null, 8, [
										"modelValue",
										"onUpdate:modelValue",
										"minlength"
									]), createVNode(PasswordStrength_default, { password: unref(password) }, null, 8, ["password"])];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(ssrRenderComponent(_sfc_main$1, {
								label: "Confirme a nova senha",
								required: ""
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(_sfc_main$2, {
										modelValue: unref(confirmation),
										"onUpdate:modelValue": ($event) => isRef(confirmation) ? confirmation.value = $event : null,
										class: "w-full",
										type: "password",
										autocomplete: "new-password",
										maxlength: "128",
										required: ""
									}, null, _parent, _scopeId));
									else return [createVNode(_sfc_main$2, {
										modelValue: unref(confirmation),
										"onUpdate:modelValue": ($event) => isRef(confirmation) ? confirmation.value = $event : null,
										class: "w-full",
										type: "password",
										autocomplete: "new-password",
										maxlength: "128",
										required: ""
									}, null, 8, ["modelValue", "onUpdate:modelValue"])];
								}),
								_: 1
							}, _parent, _scopeId));
							if (unref(error)) _push(ssrRenderComponent(_sfc_main, {
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
									if (_push) _push(`Salvar senha`);
									else return [createTextVNode("Salvar senha")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</form>`);
						}
						_push(ssrRenderComponent(_sfc_main$3, {
							class: "mt-4",
							to: unref(verification)?.valid ? "/login" : "/trocar-senha",
							variant: "link",
							block: ""
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref(verification)?.valid ? "Voltar ao login" : "Solicitar outro link")}`);
								else return [createTextVNode(toDisplayString(unref(verification)?.valid ? "Voltar ao login" : "Solicitar outro link"), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [!unref(token) || unref(status) === "success" && !unref(verification)?.valid ? (openBlock(), createBlock(_sfc_main, {
						key: 0,
						color: "error",
						title: "Token inválido ou já utilizado",
						description: "Se precisar de outro link, solicite a troca de senha.",
						role: "alert"
					})) : unref(status) === "error" ? (openBlock(), createBlock(_sfc_main, {
						key: 1,
						color: "error",
						title: "Não foi possível conferir o link. Recarregue a página.",
						role: "alert"
					})) : unref(status) !== "success" ? (openBlock(), createBlock("p", {
						key: 2,
						role: "status",
						class: "text-sm text-muted"
					}, "Validando link…")) : (openBlock(), createBlock("form", {
						key: 3,
						class: "space-y-4",
						onSubmit: withModifiers(savePassword, ["prevent"])
					}, [
						createVNode(_sfc_main$1, {
							label: "Nova senha",
							required: ""
						}, {
							default: withCtx(() => [createVNode(_sfc_main$2, {
								modelValue: unref(password),
								"onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
								class: "w-full",
								type: "password",
								autocomplete: "new-password",
								minlength: unref(PASSWORD_MIN_LENGTH),
								maxlength: "128",
								required: ""
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"minlength"
							]), createVNode(PasswordStrength_default, { password: unref(password) }, null, 8, ["password"])]),
							_: 1
						}),
						createVNode(_sfc_main$1, {
							label: "Confirme a nova senha",
							required: ""
						}, {
							default: withCtx(() => [createVNode(_sfc_main$2, {
								modelValue: unref(confirmation),
								"onUpdate:modelValue": ($event) => isRef(confirmation) ? confirmation.value = $event : null,
								class: "w-full",
								type: "password",
								autocomplete: "new-password",
								maxlength: "128",
								required: ""
							}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
							_: 1
						}),
						unref(error) ? (openBlock(), createBlock(_sfc_main, {
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
							default: withCtx(() => [createTextVNode("Salvar senha")]),
							_: 1
						}, 8, ["loading"])
					], 32)), createVNode(_sfc_main$3, {
						class: "mt-4",
						to: unref(verification)?.valid ? "/login" : "/trocar-senha",
						variant: "link",
						block: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(verification)?.valid ? "Voltar ao login" : "Solicitar outro link"), 1)]),
						_: 1
					}, 8, ["to"])];
				}),
				_: 1
			}, _parent));
			_push(`</main>`);
		};
	}
});
// app/pages/confirmar-email.vue
var _sfc_setup = confirmar_email_vue_vue_type_script_setup_true_lang_default.setup;
confirmar_email_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/confirmar-email.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var confirmar_email_default = confirmar_email_vue_vue_type_script_setup_true_lang_default;

export { confirmar_email_default as default };
//# sourceMappingURL=confirmar-email-C9U4ecpr.mjs.map
