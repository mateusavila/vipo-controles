import { a7 as useHead, af as useSeoMeta, s as ssrRenderList$2, r as renderList$2, ag as nuxt_layout_default, ah as _plugin_vue_export_helper_default, a as useComponentProps, f as useLocale, b as useAppConfig, P as Primitive, t as tv, R as resolveAs } from '../virtual/entry.mjs';
import { u as useFetch } from './fetch-DFjeJf4d.mjs';
import { _ as _sfc_main$5, b as _sfc_main$3$1 } from './Button-LO2h-wN-.mjs';
import { _ as _sfc_main$6 } from './Alert-BYdpukSa.mjs';
import { _ as _sfc_main$7, I as IconCategory_default } from './Pagination-DfNA0vnB.mjs';
import { _ as _sfc_main$8 } from './Badge-Du5GmJZs.mjs';
import { q as publicAssetsURL } from '../nitro/nitro.mjs';
import { v as defineComponent, N as withAsyncContext, J as ssrRenderComponent, S as withCtx, l as isRef, u as unref, a7 as createTextVNode, ab as ssrRenderAttr, V as openBlock, W as createBlock, F as Fragment, L as createVNode, ad as withModifiers, $ as createCommentVNode, y as mergeProps, k as ref, p as computed, T as ssrRenderSlot, U as renderSlot, ae as useSlots, aa as ssrRenderClass, a8 as ssrInterpolate, ac as toDisplayString, a6 as ssrRenderAttrs, af as useModel, az as ssrGetDynamicModelProps, ah as mergeModels, O as shallowRef, Q as useSSRContext } from '../_/vue.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import 'vue-router';
import 'unhead/plugins';
import 'unhead/utils';
import 'tailwind-variants';
import '@vueuse/core';
import '@vueuse/shared';
import './asyncData-Clm5bn3w.mjs';
import 'fnv1a-64';
import 'object-identity';
import './components-lUjYQ9V4.mjs';
import 'unhead/server';
import 'unhead/legacy';
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
import './nuxt-link-Bdrn-Ybx.mjs';
import './Kbd-CdJL61Dx.mjs';
import '@floating-ui/vue';
import './Presence-DAl9-TXs.mjs';

// \0virtual:public?%2Flogo-vipo.webp
var _virtual_public__2Flogo_vipo_default = publicAssetsURL("/logo-vipo.webp");
// app/components/Header.vue
var _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
	_push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white lg:px-10 px-4 py-4 flex gap-5 items-center border-b-4 border-b-slate-200" }, _attrs))}><img${ssrRenderAttr("src", _virtual_public__2Flogo_vipo_default)} alt="Vipo Eletrônicos" width="480" height="213" loading="eager" class="max-w-20 h-auto"><p class="font-medium">Catálogo de Controles</p></header>`);
}
var _sfc_setup$8 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var Header_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]), { __name: "Header" });
// app/components/BigSearch.vue?vue&type=script&setup=true&lang.ts
var BigSearch_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BigSearch",
	__ssrInlineRender: true,
	props: {
		"modelValue": { required: true },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const search = useModel(__props, "modelValue");
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			_push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
				type: "search",
				name: "search",
				id: "search",
				value: search.value,
				class: "searchbox bg-no-repeat w-full block bg-white border-slate-200 border-2 rounded-[8px] md:text-[20px] pl-12 pr-6 md:py-5 py-4 bg-position-[10px_center]",
				maxlength: "160",
				"aria-label": "Buscar por código, marca ou modelo",
				placeholder: "Busque por código, marca ou modelo"
			}, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, search.value))))}>`);
		};
	}
});
// app/components/BigSearch.vue
var _sfc_setup$7 = BigSearch_vue_vue_type_script_setup_true_lang_default.setup;
BigSearch_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BigSearch.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var BigSearch_default = Object.assign(BigSearch_vue_vue_type_script_setup_true_lang_default, { __name: "BigSearch" });
// app/components/BrandFilters.vue?vue&type=script&setup=true&lang.ts
var BrandFilters_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BrandFilters",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({ brands: {} }, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const selected = useModel(__props, "modelValue");
		return (_ctx, _push, _parent, _attrs) => {
			if (__props.brands.length) {
				_push(`<div${ssrRenderAttrs(mergeProps({
					role: "group",
					"aria-label": "Filtrar por marca",
					class: "mt-4 flex flex-wrap items-center justify-center gap-2"
				}, _attrs))}>`);
				_push(ssrRenderComponent(_sfc_main$5, {
					type: "button",
					size: "sm",
					variant: selected.value ? "outline" : "solid",
					"aria-pressed": !selected.value,
					onClick: ($event) => void (selected.value = void 0)
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Todas as marcas `);
						else return [createTextVNode(" Todas as marcas ")];
					}),
					_: 1
				}, _parent));
				_push(`<!--[-->`);
				ssrRenderList$2(__props.brands, (brand) => {
					_push(ssrRenderComponent(_sfc_main$5, {
						key: brand.id,
						type: "button",
						size: "sm",
						variant: selected.value === brand.id ? "solid" : "outline",
						"aria-pressed": selected.value === brand.id,
						onClick: ($event) => void (selected.value = brand.id)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(brand.name)}`);
							else return [createTextVNode(toDisplayString(brand.name), 1)];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
		};
	}
});
// app/components/BrandFilters.vue
var _sfc_setup$6 = BrandFilters_vue_vue_type_script_setup_true_lang_default.setup;
BrandFilters_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandFilters.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var BrandFilters_default = Object.assign(BrandFilters_vue_vue_type_script_setup_true_lang_default, { __name: "BrandFilters" });
// app/components/Grid.vue
var _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full gap-5 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:mt-10 mt-6" }, _attrs))}>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div>`);
}
var _sfc_setup$5 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Grid.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Grid_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]), { __name: "Grid" });
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fskeleton.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fskeleton_default = { "base": "animate-pulse rounded-md bg-elevated" };
// node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue
var _sfc_main$2 = {
	__name: "USkeleton",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const props = useComponentProps("skeleton", __props);
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fskeleton_default,
			...appConfig.ui?.skeleton || {}
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"aria-busy": "true",
				"aria-label": unref(t)("skeleton.label"),
				"aria-live": "polite",
				role: "alert",
				class: ui.value({ class: [unref(props).ui?.base, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$4 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
// app/components/ControlItem.vue?vue&type=script&setup=true&lang.ts
var ControlItem_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ControlItem",
	__ssrInlineRender: true,
	props: { data: {} },
	setup(__props) {
		const limit = shallowRef(6);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex bg-white rounded-[12px] shadow sm:flex-nowrap flex-wrap" }, _attrs))}><div class="sm:w-24 w-full flex justify-center p-4 bg-slate-100 sm:rounded-l-[12px] sm:rounded-t-none rounded-t-[12px]">`);
			if (__props.data.photoUrl) _push(`<img${ssrRenderAttr("src", __props.data.photoUrl)}${ssrRenderAttr("alt", __props.data.name)} class="sm:max-w-16 max-w-full lg:h-full h-auto max-h-50 object-cover sm:rounded-l-[12px] sm:rounded-t-none rounded-t-[12px]">`);
			else _push(`<!---->`);
			_push(`</div><div class="w-full p-6 rounded-r-[12px] flex flex-col justify-center"><p class="my-1.5">Código: `);
			_push(ssrRenderComponent(IconCategory_default, { item: __props.data }, null, _parent));
			_push(` <strong>${ssrInterpolate(__props.data.vipoCode)}</strong></p><p class="my-1.5">Marca(s): <strong>${ssrInterpolate(__props.data.brands.map(({ name }) => name).join(", "))}</strong></p>`);
			if (__props.data.models.length) {
				_push(`<p class="my-1.5">Modelos(s): <strong>${ssrInterpolate(__props.data.models.slice(0, unref(limit)).join(", "))}</strong>`);
				if (__props.data.models.length > unref(limit)) {
					_push(`<!--[-->  `);
					_push(ssrRenderComponent(_sfc_main$8, null, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`+ ${ssrInterpolate(__props.data.models.length - unref(limit))} modelos`);
							else return [createTextVNode("+ " + toDisplayString(__props.data.models.length - unref(limit)) + " modelos", 1)];
						}),
						_: 1
					}, _parent));
					_push(`<!--]-->`);
				} else _push(`<!---->`);
				_push(`</p>`);
			} else _push(`<!---->`);
			_push(`</div></div>`);
		};
	}
});
// app/components/ControlItem.vue
var _sfc_setup$3 = ControlItem_vue_vue_type_script_setup_true_lang_default.setup;
ControlItem_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ControlItem.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var ControlItem_default = Object.assign(ControlItem_vue_vue_type_script_setup_true_lang_default, { __name: "ControlItem" });
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fempty.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fempty_default = {
	"slots": {
		"root": "relative flex flex-col items-center justify-center gap-4 rounded-lg p-4 sm:p-6 lg:p-8 min-w-0",
		"header": "flex flex-col items-center gap-2 max-w-sm text-center",
		"avatar": "shrink-0 mb-2",
		"title": "text-highlighted text-pretty font-medium",
		"description": "text-balance text-center",
		"body": "flex flex-col items-center gap-4 max-w-sm",
		"actions": "flex flex-wrap justify-center gap-2 shrink-0",
		"footer": "flex flex-col items-center gap-2 max-w-sm"
	},
	"variants": {
		"size": {
			"xs": {
				"avatar": "size-8 text-base",
				"title": "text-sm",
				"description": "text-xs"
			},
			"sm": {
				"avatar": "size-9 text-lg",
				"title": "text-sm",
				"description": "text-xs"
			},
			"md": {
				"avatar": "size-10 text-xl",
				"title": "text-base",
				"description": "text-sm"
			},
			"lg": {
				"avatar": "size-11 text-[22px]",
				"title": "text-base",
				"description": "text-sm"
			},
			"xl": {
				"avatar": "size-12 text-2xl",
				"title": "text-lg",
				"description": "text-base"
			}
		},
		"variant": {
			"solid": {
				"root": "bg-inverted",
				"title": "text-inverted",
				"description": "text-dimmed"
			},
			"outline": {
				"root": "bg-default ring ring-default",
				"description": "text-muted"
			},
			"soft": {
				"root": "bg-elevated/50",
				"description": "text-toned"
			},
			"subtle": {
				"root": "bg-elevated/50 ring ring-default",
				"description": "text-toned"
			},
			"naked": { "description": "text-muted" }
		},
		"loading": { "true": { "avatar": "[&>[data-slot=icon]]:animate-spin" } }
	},
	"defaultVariants": {
		"variant": "outline",
		"size": "md"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/Empty.vue
var _sfc_main$1 = {
	__name: "UEmpty",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		avatar: {
			type: Object,
			required: false
		},
		loading: {
			type: Boolean,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		actions: {
			type: Array,
			required: false
		},
		variant: {
			type: null,
			required: false
		},
		size: {
			type: null,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const _props = __props;
		const slots = useSlots();
		const props = useComponentProps("empty", _props);
		const appConfig = useAppConfig();
		const iconName = computed(() => props.loading ? props.loadingIcon || appConfig.ui.icons.loading : props.icon);
		const as = computed(() => resolveAs(props.as, {
			root: "div",
			title: "h2"
		}));
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fempty_default,
			...appConfig.ui?.empty || {}
		})({
			variant: props.variant,
			size: props.size,
			loading: props.loading
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: as.value.root,
				"aria-busy": unref(props).loading ? "true" : void 0,
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (!!slots.header || iconName.value || unref(props).avatar || !!slots.leading || unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
							_push(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "header", {}, () => {
								ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
									if (iconName.value || unref(props).avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ icon: iconName.value }, typeof unref(props).avatar === "object" ? unref(props).avatar : {}, {
										"data-slot": "avatar",
										class: ui.value.avatar({ class: unref(props).ui?.avatar })
									}), null, _parent, _scopeId));
									else _push(`<!---->`);
								}, _push, _parent, _scopeId);
								if (unref(props).title || !!slots.title) _push(ssrRenderComponent(unref(Primitive), {
									as: as.value.title,
									"data-slot": "title",
									class: ui.value.title({ class: unref(props).ui?.title })
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
											_push(`${ssrInterpolate(unref(props).title)}`);
										}, _push, _parent, _scopeId);
										else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
									}),
									_: 3
								}, _parent, _scopeId));
								else _push(`<!---->`);
								if (unref(props).description || !!slots.description) {
									_push(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "description", {}, () => {
										_push(`${ssrInterpolate(unref(props).description)}`);
									}, _push, _parent, _scopeId);
									_push(`</div>`);
								} else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						if (!!slots.body || unref(props).actions?.length || !!slots.actions) {
							_push(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "body", {}, () => {
								if (unref(props).actions?.length || !!slots.actions) {
									_push(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: unref(props).ui?.actions }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
										_push(`<!--[-->`);
										ssrRenderList$2(unref(props).actions, (action, index) => {
											_push(ssrRenderComponent(_sfc_main$5, mergeProps({
												key: index,
												size: unref(props).size
											}, { ref_for: true }, action), null, _parent, _scopeId));
										});
										_push(`<!--]-->`);
									}, _push, _parent, _scopeId);
									_push(`</div>`);
								} else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						if (!!slots.footer) {
							_push(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: unref(props).ui?.footer }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [
						!!slots.header || iconName.value || unref(props).avatar || !!slots.leading || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
							key: 0,
							"data-slot": "header",
							class: ui.value.header({ class: unref(props).ui?.header })
						}, [renderSlot(_ctx.$slots, "header", {}, () => [
							renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [iconName.value || unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
								key: 0,
								icon: iconName.value
							}, typeof unref(props).avatar === "object" ? unref(props).avatar : {}, {
								"data-slot": "avatar",
								class: ui.value.avatar({ class: unref(props).ui?.avatar })
							}), null, 16, ["icon", "class"])) : createCommentVNode("", true)]),
							unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(Primitive), {
								key: 0,
								as: as.value.title,
								"data-slot": "title",
								class: ui.value.title({ class: unref(props).ui?.title })
							}, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
								_: 3
							}, 8, ["as", "class"])) : createCommentVNode("", true),
							unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
								key: 1,
								"data-slot": "description",
								class: ui.value.description({ class: unref(props).ui?.description })
							}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)
						])], 2)) : createCommentVNode("", true),
						!!slots.body || unref(props).actions?.length || !!slots.actions ? (openBlock(), createBlock("div", {
							key: 1,
							"data-slot": "body",
							class: ui.value.body({ class: unref(props).ui?.body })
						}, [renderSlot(_ctx.$slots, "body", {}, () => [unref(props).actions?.length || !!slots.actions ? (openBlock(), createBlock("div", {
							key: 0,
							"data-slot": "actions",
							class: ui.value.actions({ class: unref(props).ui?.actions })
						}, [renderSlot(_ctx.$slots, "actions", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(props).actions, (action, index) => {
							return openBlock(), createBlock(_sfc_main$5, mergeProps({
								key: index,
								size: unref(props).size
							}, { ref_for: true }, action), null, 16, ["size"]);
						}), 128))])], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
						!!slots.footer ? (openBlock(), createBlock("div", {
							key: 2,
							"data-slot": "footer",
							class: ui.value.footer({ class: unref(props).ui?.footer })
						}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Empty.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
// app/components/Footer.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-slate-100 lg:px-10 px-4 py-4 flex gap-5 items-center border-t-4 border-t-slate-200" }, _attrs))}><p class="text-[14px] text-center w-full">Produzido por <a href="http://www.mateusavila.com.br" target="_blank" rel="noopener noreferrer" class="font-bold hover:border-b hover:border-b-slate-500">Mateus Ávila</a></p></footer>`);
}
var _sfc_setup$1 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Footer_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "Footer" });
// app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useHead({ title: "Busca mostruário • Vipo Eletrônica" });
		useSeoMeta({ description: "Busque aqui no nosso mostruário." });
		const search = ref("");
		const appliedSearch = ref("");
		const brandId = ref();
		const page = ref(1);
		const track = ref(false);
		const query = computed(() => ({
			q: appliedSearch.value || void 0,
			brandId: brandId.value,
			page: page.value
		}));
		const [{ data, pending, error, refresh }, { data: brands, error: brandsError, refresh: refreshBrands }] = ([__temp, __restore] = withAsyncContext(() => Promise.all([useFetch("/api/controls", {
			key: "public-catalog",
			query,
			watch: false,
			retry: 0,
			onRequest({ options }) {
				if (!track.value) return;
				track.value = false;
				options.query = {
					...options.query,
					track: "1"
				};
			}
		}, "$QD8d9NkvSp"), useFetch("/api/brands", "$36R8oiM1IC")])), __temp = await __temp, __restore(), __temp);
		function loadControls(recordSearch = false) {
			track.value = recordSearch;
			return refresh();
		}
		function submitSearch() {
			appliedSearch.value = search.value.trim();
			page.value = 1;
			return loadControls(Boolean(appliedSearch.value || brandId.value));
		}
		function selectBrand(id) {
			if (id === brandId.value && !search.value && !appliedSearch.value && page.value === 1) return;
			brandId.value = id;
			search.value = "";
			appliedSearch.value = "";
			page.value = 1;
			return loadControls(Boolean(id));
		}
		function changePage(value) {
			page.value = value;
			return loadControls();
		}
		function clearEmptySearch(value) {
			if (value === "" && appliedSearch.value) {
				appliedSearch.value = "";
				page.value = 1;
				return loadControls();
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(nuxt_layout_default, mergeProps({ name: "main" }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(Header_default, null, null, _parent, _scopeId));
						_push(`<main class="w-almost-full-mobile mx-auto py-10 min-h-dvh"${_scopeId}><form class="mx-auto flex max-w-200 items-stretch gap-2" role="search"${_scopeId}>`);
						_push(ssrRenderComponent(BigSearch_default, {
							modelValue: unref(search),
							"onUpdate:modelValue": [($event) => isRef(search) ? search.value = $event : null, clearEmptySearch]
						}, null, _parent, _scopeId));
						_push(`</form><div class="mx-auto max-w-200"${_scopeId}>`);
						if (unref(brands)) _push(ssrRenderComponent(BrandFilters_default, {
							"model-value": unref(brandId),
							brands: unref(brands),
							"onUpdate:modelValue": selectBrand
						}, null, _parent, _scopeId));
						else if (unref(brandsError)) {
							_push(`<div class="mt-4 flex items-center justify-center gap-2 text-sm"${_scopeId}><span${_scopeId}>Não foi possível carregar as marcas.</span>`);
							_push(ssrRenderComponent(_sfc_main$5, {
								type: "button",
								size: "xs",
								variant: "ghost",
								onClick: () => unref(refreshBrands)()
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Tentar novamente`);
									else return [createTextVNode("Tentar novamente")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div><section aria-label="Resultados da busca"${ssrRenderAttr("aria-busy", unref(pending))}${_scopeId}>`);
						if (unref(pending)) _push(ssrRenderComponent(Grid_default, null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<!--[-->`);
									ssrRenderList$2(12, (i) => {
										_push(ssrRenderComponent(_sfc_main$2, {
											key: i,
											class: "h-58 w-full"
										}, null, _parent, _scopeId));
									});
									_push(`<!--]-->`);
								} else return [(openBlock(), createBlock(Fragment, null, renderList$2(12, (i) => {
									return createVNode(_sfc_main$2, {
										key: i,
										class: "h-58 w-full"
									});
								}), 64))];
							}),
							_: 1
						}, _parent, _scopeId));
						else if (unref(error)) {
							_push(`<div class="mt-6 text-center"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$6, {
								color: "error",
								title: "Não foi possível carregar os controles."
							}, null, _parent, _scopeId));
							_push(ssrRenderComponent(_sfc_main$5, {
								type: "button",
								class: "mt-3",
								variant: "outline",
								onClick: () => loadControls()
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Tentar novamente`);
									else return [createTextVNode("Tentar novamente")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div>`);
						} else if (unref(data)?.items.length) _push(ssrRenderComponent(Grid_default, null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<!--[-->`);
									ssrRenderList$2(unref(data).items, (item) => {
										_push(ssrRenderComponent(ControlItem_default, {
											key: item.id,
											data: item
										}, null, _parent, _scopeId));
									});
									_push(`<!--]-->`);
								} else return [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(data).items, (item) => {
									return openBlock(), createBlock(ControlItem_default, {
										key: item.id,
										data: item
									}, null, 8, ["data"]);
								}), 128))];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(ssrRenderComponent(_sfc_main$1, {
							title: "Nenhum controle encontrado",
							class: "mt-6"
						}, null, _parent, _scopeId));
						if (unref(data) && unref(data).total > unref(data).pageSize && !unref(error)) {
							_push(`<div class="mt-8 flex justify-center"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$7, {
								page: unref(page),
								total: unref(data).total,
								"items-per-page": unref(data).pageSize,
								"sibling-count": 1,
								disabled: unref(pending),
								"onUpdate:page": changePage
							}, null, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</section></main>`);
						_push(ssrRenderComponent(Footer_default, null, null, _parent, _scopeId));
					} else return [
						createVNode(Header_default),
						createVNode("main", { class: "w-almost-full-mobile mx-auto py-10 min-h-dvh" }, [
							createVNode("form", {
								class: "mx-auto flex max-w-200 items-stretch gap-2",
								role: "search",
								onSubmit: withModifiers(submitSearch, ["prevent"])
							}, [createVNode(BigSearch_default, {
								modelValue: unref(search),
								"onUpdate:modelValue": [($event) => isRef(search) ? search.value = $event : null, clearEmptySearch]
							}, null, 8, ["modelValue", "onUpdate:modelValue"])], 32),
							createVNode("div", { class: "mx-auto max-w-200" }, [unref(brands) ? (openBlock(), createBlock(BrandFilters_default, {
								key: 0,
								"model-value": unref(brandId),
								brands: unref(brands),
								"onUpdate:modelValue": selectBrand
							}, null, 8, ["model-value", "brands"])) : unref(brandsError) ? (openBlock(), createBlock("div", {
								key: 1,
								class: "mt-4 flex items-center justify-center gap-2 text-sm"
							}, [createVNode("span", null, "Não foi possível carregar as marcas."), createVNode(_sfc_main$5, {
								type: "button",
								size: "xs",
								variant: "ghost",
								onClick: () => unref(refreshBrands)()
							}, {
								default: withCtx(() => [createTextVNode("Tentar novamente")]),
								_: 1
							}, 8, ["onClick"])])) : createCommentVNode("", true)]),
							createVNode("section", {
								"aria-label": "Resultados da busca",
								"aria-busy": unref(pending)
							}, [unref(pending) ? (openBlock(), createBlock(Grid_default, { key: 0 }, {
								default: withCtx(() => [(openBlock(), createBlock(Fragment, null, renderList$2(12, (i) => {
									return createVNode(_sfc_main$2, {
										key: i,
										class: "h-58 w-full"
									});
								}), 64))]),
								_: 1
							})) : unref(error) ? (openBlock(), createBlock("div", {
								key: 1,
								class: "mt-6 text-center"
							}, [createVNode(_sfc_main$6, {
								color: "error",
								title: "Não foi possível carregar os controles."
							}), createVNode(_sfc_main$5, {
								type: "button",
								class: "mt-3",
								variant: "outline",
								onClick: () => loadControls()
							}, {
								default: withCtx(() => [createTextVNode("Tentar novamente")]),
								_: 1
							}, 8, ["onClick"])])) : unref(data)?.items.length ? (openBlock(), createBlock(Grid_default, { key: 2 }, {
								default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(data).items, (item) => {
									return openBlock(), createBlock(ControlItem_default, {
										key: item.id,
										data: item
									}, null, 8, ["data"]);
								}), 128))]),
								_: 1
							})) : (openBlock(), createBlock(_sfc_main$1, {
								key: 3,
								title: "Nenhum controle encontrado",
								class: "mt-6"
							})), unref(data) && unref(data).total > unref(data).pageSize && !unref(error) ? (openBlock(), createBlock("div", {
								key: 4,
								class: "mt-8 flex justify-center"
							}, [createVNode(_sfc_main$7, {
								page: unref(page),
								total: unref(data).total,
								"items-per-page": unref(data).pageSize,
								"sibling-count": 1,
								disabled: unref(pending),
								"onUpdate:page": changePage
							}, null, 8, [
								"page",
								"total",
								"items-per-page",
								"disabled"
							])])) : createCommentVNode("", true)], 8, ["aria-busy"])
						]),
						createVNode(Footer_default)
					];
				}),
				_: 1
			}, _parent));
		};
	}
});
// app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-CeLf4JHv.mjs.map
