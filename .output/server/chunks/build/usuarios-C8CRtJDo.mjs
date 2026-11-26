import { ae as useUserSession, s as ssrRenderList$2, $ as $fetch$1 } from '../virtual/entry.mjs';
import { u as useFetch } from './fetch-DFjeJf4d.mjs';
import { _ as _sfc_main } from './Button-LO2h-wN-.mjs';
import { _ as _sfc_main$1 } from './Alert-BYdpukSa.mjs';
import { _ as _sfc_main$2 } from './Badge-Du5GmJZs.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './Modal-BfwSu3fu.mjs';
import { _ as _sfc_main$3 } from './FormField-DiTw_Gbk.mjs';
import { _ as _sfc_main$4 } from './Input--Ghsdvyo.mjs';
import { v as defineComponent, N as withAsyncContext, u as unref, J as ssrRenderComponent, S as withCtx, a7 as createTextVNode, a8 as ssrInterpolate, L as createVNode, l as isRef, ac as toDisplayString, ad as withModifiers, V as openBlock, W as createBlock, $ as createCommentVNode, au as createSlots, k as ref, Q as useSSRContext } from '../_/vue.mjs';
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

// app/pages/admin/usuarios.vue?vue&type=script&setup=true&lang.ts
var usuarios_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "usuarios",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const { user } = useUserSession();
		const { data: members, status, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/users", { immediate: user.value?.role === "superadmin" }, "$FEkWJ0zfNa")), __temp = await __temp, __restore(), __temp);
		const showForm = ref(false);
		const editing = ref();
		const name = ref("");
		const email = ref("");
		const target = ref();
		const showDelete = ref(false);
		const pending = ref(false);
		const pageError = ref("");
		const modalError = ref("");
		const notice = ref("");
		const request = $fetch$1;
		function openForm(member) {
			editing.value = member;
			name.value = member?.name ?? "";
			email.value = member?.email ?? "";
			modalError.value = "";
			showForm.value = true;
		}
		function askDelete(member) {
			target.value = member;
			modalError.value = "";
			showDelete.value = true;
		}
		async function mutate(action, message, modal = false) {
			if (pending.value) return false;
			pending.value = true;
			pageError.value = "";
			modalError.value = "";
			notice.value = "";
			try {
				await action();
				notice.value = message;
				return true;
			} catch (failure) {
				const response = failure;
				const error = modal ? modalError : pageError;
				error.value = response.data?.message ?? "Não foi possível concluir a ação.";
				return false;
			} finally {
				await refresh();
				pending.value = false;
			}
		}
		async function save() {
			const member = editing.value;
			const body = {
				name: name.value,
				email: email.value
			};
			if (await mutate(() => member ? request(`/api/admin/users/${member.id}`, {
				method: "PATCH",
				body
			}) : request("/api/admin/users/invite", {
				method: "POST",
				body
			}), member ? "Dados do membro atualizados." : `Convite enviado para ${body.email.trim().toLowerCase()}.`, true)) showForm.value = false;
		}
		function resend({ name, email }) {
			return mutate(() => request("/api/admin/users/invite", {
				method: "POST",
				body: {
					name,
					email
				}
			}), `Convite reenviado para ${email}.`);
		}
		function toggleAccess(member) {
			return mutate(() => request(`/api/admin/users/${member.id}`, {
				method: "PATCH",
				body: { blocked: !member.blocked }
			}), member.blocked ? "Acesso desbloqueado." : "Acesso bloqueado.");
		}
		async function confirmDelete() {
			const member = target.value;
			if (!member) return;
			if (await mutate(() => request(`/api/admin/users/${member.id}`, { method: "DELETE" }), "Membro apagado.", true)) showDelete.value = false;
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><div class="flex flex-wrap items-center justify-between gap-2 mb-5"><h1 class="text-2xl font-semibold">Usuários</h1>`);
			if (unref(user)?.role === "superadmin") _push(ssrRenderComponent(_sfc_main, {
				icon: "i-lucide-plus",
				disabled: unref(pending),
				onClick: ($event) => openForm()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Convidar usuário `);
					else return [createTextVNode(" Convidar usuário ")];
				}),
				_: 1
			}, _parent));
			else _push(`<!---->`);
			_push(`</div>`);
			if (unref(user)?.role !== "superadmin") _push(ssrRenderComponent(_sfc_main$1, {
				color: "warning",
				title: "Somente superadministradores podem gerenciar usuários."
			}, null, _parent));
			else {
				_push(`<section class="admin-panel">`);
				if (unref(pageError)) _push(ssrRenderComponent(_sfc_main$1, {
					color: "error",
					title: unref(pageError),
					role: "alert"
				}, null, _parent));
				else _push(`<!---->`);
				if (unref(notice)) _push(ssrRenderComponent(_sfc_main$1, {
					color: "success",
					title: unref(notice),
					role: "status"
				}, null, _parent));
				else _push(`<!---->`);
				if (unref(status) === "error") _push(ssrRenderComponent(_sfc_main$1, {
					color: "error",
					title: "Não foi possível carregar os usuários."
				}, null, _parent));
				else if (unref(status) === "pending" && !unref(members)) _push(`<p>Carregando…</p>`);
				else {
					_push(`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr><th scope="col" class="p-2">Nome</th><th scope="col" class="p-2">E-mail</th><th scope="col" class="p-2">Status</th><th scope="col" class="p-2 text-end">Ações</th></tr></thead><tbody><!--[-->`);
					ssrRenderList$2(unref(members), (member) => {
						_push(`<tr class="border-t border-default"><td class="p-2">${ssrInterpolate(member.name)}</td><td class="p-2">${ssrInterpolate(member.email)}</td><td class="p-2">`);
						if (member.blocked) _push(ssrRenderComponent(_sfc_main$2, {
							color: "error",
							variant: "soft"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Bloqueado`);
								else return [createTextVNode("Bloqueado")];
							}),
							_: 2
						}, _parent));
						else if (member.pending) _push(ssrRenderComponent(_sfc_main$2, {
							color: "warning",
							variant: "soft"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Pendente`);
								else return [createTextVNode("Pendente")];
							}),
							_: 2
						}, _parent));
						else _push(ssrRenderComponent(_sfc_main$2, {
							color: "success",
							variant: "soft"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Ativo`);
								else return [createTextVNode("Ativo")];
							}),
							_: 2
						}, _parent));
						_push(`</td><td class="p-2 text-end">`);
						_push(ssrRenderComponent(_sfc_main$1$1, {
							modal: false,
							content: { align: "end" },
							items: [
								{
									label: "Editar",
									icon: "i-lucide-pencil",
									onSelect: () => openForm(member)
								},
								{
									label: "Reenviar convite",
									icon: "i-lucide-mail",
									disabled: member.blocked || !member.pending,
									onSelect: () => resend(member)
								},
								{
									label: member.blocked ? "Desbloquear acesso" : "Bloquear acesso",
									icon: member.blocked ? "i-lucide-unlock" : "i-lucide-lock",
									onSelect: () => toggleAccess(member)
								},
								{
									label: "Apagar",
									icon: "i-lucide-trash-2",
									color: "error",
									onSelect: () => askDelete(member)
								}
							]
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_sfc_main, {
									type: "button",
									icon: "i-lucide-ellipsis-vertical",
									color: "neutral",
									variant: "ghost",
									"aria-label": `Ações de ${member.name}`,
									disabled: unref(pending)
								}, null, _parent, _scopeId));
								else return [createVNode(_sfc_main, {
									type: "button",
									icon: "i-lucide-ellipsis-vertical",
									color: "neutral",
									variant: "ghost",
									"aria-label": `Ações de ${member.name}`,
									disabled: unref(pending)
								}, null, 8, ["aria-label", "disabled"])];
							}),
							_: 2
						}, _parent));
						_push(`</td></tr>`);
					});
					_push(`<!--]-->`);
					if (!unref(members)?.length) _push(`<tr class="border-t border-default"><td colspan="4" class="p-2 text-muted">Nenhum membro cadastrado.</td></tr>`);
					else _push(`<!---->`);
					_push(`</tbody></table></div>`);
				}
				_push(`</section>`);
			}
			_push(ssrRenderComponent(_sfc_main$5, {
				open: unref(showForm),
				"onUpdate:open": ($event) => isRef(showForm) ? showForm.value = $event : null,
				title: unref(editing) ? "Editar usuário" : "Convidar usuário",
				description: unref(editing) ? "Atualize os dados do membro." : "O membro receberá um link para definir a senha.",
				dismissible: !unref(pending),
				close: !unref(pending)
			}, {
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<form class="space-y-4"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$3, {
							label: "Nome",
							required: ""
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_sfc_main$4, {
									modelValue: unref(name),
									"onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
									class: "w-full",
									autocomplete: "name",
									maxlength: "120",
									required: "",
									disabled: unref(pending)
								}, null, _parent, _scopeId));
								else return [createVNode(_sfc_main$4, {
									modelValue: unref(name),
									"onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
									class: "w-full",
									autocomplete: "name",
									maxlength: "120",
									required: "",
									disabled: unref(pending)
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"disabled"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$3, {
							label: "E-mail",
							required: ""
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_sfc_main$4, {
									modelValue: unref(email),
									"onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
									class: "w-full",
									type: "email",
									autocomplete: "email",
									maxlength: "254",
									required: "",
									disabled: unref(pending)
								}, null, _parent, _scopeId));
								else return [createVNode(_sfc_main$4, {
									modelValue: unref(email),
									"onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
									class: "w-full",
									type: "email",
									autocomplete: "email",
									maxlength: "254",
									required: "",
									disabled: unref(pending)
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"disabled"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
						if (unref(modalError)) _push(ssrRenderComponent(_sfc_main$1, {
							color: "error",
							title: unref(modalError),
							role: "alert"
						}, null, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`<div class="flex justify-end gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main, {
							type: "button",
							color: "neutral",
							variant: "ghost",
							disabled: unref(pending),
							onClick: ($event) => showForm.value = false
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Cancelar`);
								else return [createTextVNode("Cancelar")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main, {
							type: "submit",
							loading: unref(pending)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref(editing) ? "Salvar" : "Enviar convite")}`);
								else return [createTextVNode(toDisplayString(unref(editing) ? "Salvar" : "Enviar convite"), 1)];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div></form>`);
					} else return [createVNode("form", {
						class: "space-y-4",
						onSubmit: withModifiers(save, ["prevent"])
					}, [
						createVNode(_sfc_main$3, {
							label: "Nome",
							required: ""
						}, {
							default: withCtx(() => [createVNode(_sfc_main$4, {
								modelValue: unref(name),
								"onUpdate:modelValue": ($event) => isRef(name) ? name.value = $event : null,
								class: "w-full",
								autocomplete: "name",
								maxlength: "120",
								required: "",
								disabled: unref(pending)
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"disabled"
							])]),
							_: 1
						}),
						createVNode(_sfc_main$3, {
							label: "E-mail",
							required: ""
						}, {
							default: withCtx(() => [createVNode(_sfc_main$4, {
								modelValue: unref(email),
								"onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
								class: "w-full",
								type: "email",
								autocomplete: "email",
								maxlength: "254",
								required: "",
								disabled: unref(pending)
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"disabled"
							])]),
							_: 1
						}),
						unref(modalError) ? (openBlock(), createBlock(_sfc_main$1, {
							key: 0,
							color: "error",
							title: unref(modalError),
							role: "alert"
						}, null, 8, ["title"])) : createCommentVNode("", true),
						createVNode("div", { class: "flex justify-end gap-2" }, [createVNode(_sfc_main, {
							type: "button",
							color: "neutral",
							variant: "ghost",
							disabled: unref(pending),
							onClick: ($event) => showForm.value = false
						}, {
							default: withCtx(() => [createTextVNode("Cancelar")]),
							_: 1
						}, 8, ["disabled", "onClick"]), createVNode(_sfc_main, {
							type: "submit",
							loading: unref(pending)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(editing) ? "Salvar" : "Enviar convite"), 1)]),
							_: 1
						}, 8, ["loading"])])
					], 32)];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$5, {
				open: unref(showDelete),
				"onUpdate:open": ($event) => isRef(showDelete) ? showDelete.value = $event : null,
				title: "Apagar usuário",
				description: `Apagar a conta de ${unref(target)?.name ?? "este membro"}?`,
				dismissible: !unref(pending),
				close: !unref(pending)
			}, createSlots({
				footer: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main, {
							color: "neutral",
							variant: "ghost",
							disabled: unref(pending),
							onClick: ($event) => showDelete.value = false
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Cancelar`);
								else return [createTextVNode("Cancelar")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main, {
							color: "error",
							loading: unref(pending),
							onClick: confirmDelete
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Apagar usuário`);
								else return [createTextVNode("Apagar usuário")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main, {
						color: "neutral",
						variant: "ghost",
						disabled: unref(pending),
						onClick: ($event) => showDelete.value = false
					}, {
						default: withCtx(() => [createTextVNode("Cancelar")]),
						_: 1
					}, 8, ["disabled", "onClick"]), createVNode(_sfc_main, {
						color: "error",
						loading: unref(pending),
						onClick: confirmDelete
					}, {
						default: withCtx(() => [createTextVNode("Apagar usuário")]),
						_: 1
					}, 8, ["loading"])];
				}),
				_: 2
			}, [unref(modalError) ? {
				name: "body",
				fn: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_sfc_main$1, {
						color: "error",
						title: unref(modalError),
						role: "alert"
					}, null, _parent, _scopeId));
					else return [createVNode(_sfc_main$1, {
						color: "error",
						title: unref(modalError),
						role: "alert"
					}, null, 8, ["title"])];
				}),
				key: "0"
			} : void 0]), _parent));
			_push(`<!--]-->`);
		};
	}
});
// app/pages/admin/usuarios.vue
var _sfc_setup = usuarios_vue_vue_type_script_setup_true_lang_default.setup;
usuarios_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/usuarios.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var usuarios_default = usuarios_vue_vue_type_script_setup_true_lang_default;

export { usuarios_default as default };
//# sourceMappingURL=usuarios-C8CRtJDo.mjs.map
