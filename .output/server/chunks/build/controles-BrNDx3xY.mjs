import { s as ssrRenderNuxtLink, N as NuxtLink } from './nuxt-link-Bdrn-Ybx.mjs';
import { $ as $fetch$1, s as ssrRenderList$2, r as renderList$2, a as useComponentProps, b as useAppConfig, f as useLocale, V as VisuallyHidden_default, P as Primitive, g as useForwardProps, h as usePortal, o as omitUnsafeAttrs, i as get, t as tv, j as useForwardExpose, k as useCollection, l as getSelectedItem, m as getDisplayValue, T as Teleport_default, p as isArrayOfArray, q as getActiveElement, v as looseToNumber, w as usePrimitiveElement, x as compare$2, y as pick, z as omit, A as createContext, B as useForwardProps$1, C as injectConfigProviderContext, D as isEmpty } from '../virtual/entry.mjs';
import { u as useFetch } from './fetch-DFjeJf4d.mjs';
import { _ as _sfc_main$6, a as _sfc_main$5$1, u as useFormField, b as _sfc_main$3$1, c as useFieldGroup, d as useComponentIcons, F as FieldGroupReset, e as _sfc_main$4$1 } from './Button-LO2h-wN-.mjs';
import { _ as _sfc_main$7 } from './Input--Ghsdvyo.mjs';
import { _ as _sfc_main$8 } from './Alert-BYdpukSa.mjs';
import { I as IconCategory_default, _ as _sfc_main$9 } from './Pagination-DfNA0vnB.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$b, F as FocusScope_default, u as useTypeahead, b as useComposing, c as useArrowNavigation, d as useFocusGuards, e as useBodyScrollLock, f as useHideOthers, g as focusFirst$1, w as wrapArray, M as MAP_KEY_TO_FOCUS_INTENT, h as getNextMatch, i as useFilter, j as getFocusIntent, k as useFilter$1 } from './Modal-BfwSu3fu.mjs';
import { _ as _sfc_main$a, L as Label_default } from './FormField-DiTw_Gbk.mjs';
import { i as isNullish } from './nullish-Dvpx-avd.mjs';
import { u as useId$1, P as PopperAnchor_default, a as useForwardPropsEmits, h as handleAndDispatchCustomEvent, b as PopperArrow_default, c as useDirection, d as PopperRoot_default, D as DismissableLayer_default, e as PopperContent_default } from './Kbd-CdJL61Dx.mjs';
import { P as Presence_default } from './Presence-DAl9-TXs.mjs';
import { X as defu, a0 as isEqual } from '../nitro/nitro.mjs';
import { createReusableTemplate, useVModel, createEventHook, useFocusWithin, reactiveOmit, unrefElement, useParentElement, useResizeObserver } from '@vueuse/core';
import { refAutoReset, isClient } from '@vueuse/shared';
import { useVirtualizer } from '@tanstack/vue-virtual';
import { p as pngUploadMaxBytes, a as photoMaxBytes, r as remoteFields } from '../_/catalog.mjs';
import { v as defineComponent, N as withAsyncContext, D as watch, a6 as ssrRenderAttrs, y as mergeProps, J as ssrRenderComponent, S as withCtx, a7 as createTextVNode, u as unref, V as openBlock, W as createBlock, $ as createCommentVNode, l as isRef, a8 as ssrInterpolate, a9 as includeBooleanAttr, L as createVNode, aa as ssrRenderClass, ab as ssrRenderAttr, ac as toDisplayString, ad as withModifiers, F as Fragment, k as ref, p as computed, O as shallowRef, b as reactive, ae as useSlots, af as useModel, _ as toRefs, j as toRef, T as ssrRenderSlot, U as renderSlot, K as renderVNode, M as resolveDynamicComponent, ag as withKeys, ah as mergeModels, ai as useTemplateRef, o as onScopeDispose, X as useId, a1 as nextTick, aj as useAttrs, Y as normalizeProps, Z as guardReactiveProps, ak as createElementBlock, a3 as Teleport, n as renderList, al as withMemo, am as withDirectives, an as vShow, t as toRaw, w as watchEffect, ao as createBaseVNode, ap as toValue, aq as toHandlers, ar as watchSyncEffect, a0 as normalizeStyle, z as cloneVNode, d as getCurrentInstance, Q as useSSRContext } from '../_/vue.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import 'vue-router';
import 'unhead/plugins';
import 'unhead/utils';
import 'tailwind-variants';
import './asyncData-Clm5bn3w.mjs';
import 'fnv1a-64';
import 'object-identity';
import './components-lUjYQ9V4.mjs';
import 'aria-hidden';
import '@floating-ui/vue';
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
import 'zod';

// node_modules/reka-ui/dist/shared/arrays.js
/**
* The function `findValuesBetween` takes an array and two values, then returns a subarray containing
* elements between the first occurrence of the start value and the first occurrence of the end value
* in the array.
* @param {T[]} array - The `array` parameter is an array of values of type `T`.
* @param {T} start - The `start` parameter is the value that marks the beginning of the range you want
* to find in the array.
* @param {T} end - The `end` parameter in the `findValuesBetween` function represents the end value
* that you want to find in the array. This function will return a subarray of values that are between
* the `start` and `end` values in the original array.
* @returns The `findValuesBetween` function returns an array of values from the input array that are
* between the `start` and `end` values (inclusive). If either the `start` or `end` values are not
* found in the input array, an empty array is returned.
*/
function findValuesBetween(array, start, end) {
	const startIndex = array.findIndex((i) => isEqual(i, start));
	const endIndex = array.findIndex((i) => isEqual(i, end));
	if (startIndex === -1 || endIndex === -1) return [];
	const [minIndex, maxIndex] = [startIndex, endIndex].sort((a, b) => a - b);
	return array.slice(minIndex, maxIndex + 1);
}
// node_modules/reka-ui/dist/shared/clamp.js
/**
* The `clamp` function restricts a number within a specified range by returning the value itself if it
* falls within the range, or the closest boundary value if it exceeds the range.
* @param {number} value - The `value` parameter represents the number that you want to clamp within
* the specified range defined by `min` and `max` values.
* @param {number} min - If the `value` parameter is less than the `min` value, the
* function will return the `min` value.
* @param {number} max - If the `value` parameter is greater than the `max` value,
* the function will return `max`.
* @returns The `clamp` function returns the value of `value` constrained within the range defined by
* `min` and `max`.
*/
function clamp(value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
	return Math.min(max, Math.max(min, value));
}
// node_modules/reka-ui/dist/shared/useFormControl.js
function useFormControl(el) {
	return computed(() => toValue(el) ? Boolean(unrefElement(el)?.closest("form")) : true);
}
// node_modules/reka-ui/dist/shared/useForwardScopeId.js
/**
* Returns the parent component's `<style scoped>` id (e.g. `data-v-xxxxxxx`) as a
* bindable attribute object, so it can be manually forwarded onto the chosen root
* element of a multi-root component.
*
* Vue only auto-applies the parent's scope id to a **single-root** component's root.
* When a component renders multiple root nodes (e.g. an interactive control plus a
* sibling hidden form input), that fallthrough is dropped and the parent's scoped
* styles can no longer reach the component. Spread the returned object onto the
* element that should stay styleable by the parent.
*
* @example
* ```ts
* const scopeIdAttrs = useForwardScopeId()
* // <Primitive v-bind="{ ...$attrs, ...scopeIdAttrs }" />
* ```
*/
function useForwardScopeId() {
	const scopeId = (getCurrentInstance()?.vnode)?.scopeId;
	return scopeId ? { [scopeId]: "" } : {};
}
// node_modules/reka-ui/dist/shared/useKbd.js
function useKbd() {
	return {
		ALT: "Alt",
		ARROW_DOWN: "ArrowDown",
		ARROW_LEFT: "ArrowLeft",
		ARROW_RIGHT: "ArrowRight",
		ARROW_UP: "ArrowUp",
		BACKSPACE: "Backspace",
		CAPS_LOCK: "CapsLock",
		CONTROL: "Control",
		DELETE: "Delete",
		END: "End",
		ENTER: "Enter",
		ESCAPE: "Escape",
		F1: "F1",
		F10: "F10",
		F11: "F11",
		F12: "F12",
		F2: "F2",
		F3: "F3",
		F4: "F4",
		F5: "F5",
		F6: "F6",
		F7: "F7",
		F8: "F8",
		F9: "F9",
		HOME: "Home",
		META: "Meta",
		PAGE_DOWN: "PageDown",
		PAGE_UP: "PageUp",
		SHIFT: "Shift",
		SPACE: " ",
		TAB: "Tab",
		CTRL: "Control",
		ASTERISK: "*",
		SPACE_CODE: "Space"
	};
}
// node_modules/reka-ui/dist/VisuallyHidden/VisuallyHiddenInputBubble.js
var VisuallyHiddenInputBubble_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "VisuallyHiddenInputBubble",
	props: {
		name: {
			type: String,
			required: true
		},
		value: {
			type: null,
			required: true
		},
		checked: {
			type: Boolean,
			required: false,
			default: void 0
		},
		required: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		feature: {
			type: String,
			required: false,
			default: "fully-hidden"
		}
	},
	setup(__props) {
		const props = __props;
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const valueState = computed(() => props.checked ?? props.value);
		watch(valueState, (cur, prev) => {
			if (!currentElement.value) return;
			const input = currentElement.value;
			const inputProto = (void 0).HTMLInputElement.prototype;
			const setValue = Object.getOwnPropertyDescriptor(inputProto, "value").set;
			if (setValue && cur !== prev) {
				const inputEvent = new Event("input", { bubbles: true });
				const changeEvent = new Event("change", { bubbles: true });
				setValue.call(input, cur);
				input.dispatchEvent(inputEvent);
				input.dispatchEvent(changeEvent);
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(VisuallyHidden_default, mergeProps({
				ref_key: "primitiveElement",
				ref: primitiveElement
			}, {
				...props,
				..._ctx.$attrs
			}, { as: "input" }), null, 16);
		};
	}
});
// node_modules/reka-ui/dist/VisuallyHidden/VisuallyHiddenInput.js
var VisuallyHiddenInput_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "VisuallyHiddenInput",
	props: {
		name: {
			type: String,
			required: true
		},
		value: {
			type: null,
			required: true
		},
		checked: {
			type: Boolean,
			required: false,
			default: void 0
		},
		required: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		feature: {
			type: String,
			required: false,
			default: "fully-hidden"
		}
	},
	setup(__props) {
		const props = __props;
		const isFormArrayEmptyAndRequired = computed(() => typeof props.value === "object" && Array.isArray(props.value) && props.value.length === 0 && props.required);
		const parsedValue = computed(() => {
			if (typeof props.value === "string" || typeof props.value === "number" || typeof props.value === "boolean" || props.value === null || props.value === void 0) return [{
				name: props.name,
				value: props.value
			}];
			else if (typeof props.value === "object" && Array.isArray(props.value)) return props.value.flatMap((obj, index) => {
				if (typeof obj === "object") return Object.entries(obj).map(([key, value]) => ({
					name: `${props.name}[${index}][${key}]`,
					value
				}));
				else return {
					name: `${props.name}[${index}]`,
					value: obj
				};
			});
			else if (props.value !== null && typeof props.value === "object" && !Array.isArray(props.value)) return Object.entries(props.value).map(([key, value]) => ({
				name: `${props.name}[${key}]`,
				value
			}));
			return [];
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" We render single input if it's required "), isFormArrayEmptyAndRequired.value ? (openBlock(), createBlock(VisuallyHiddenInputBubble_default, mergeProps({ key: __props.name }, {
				...props,
				..._ctx.$attrs
			}, {
				name: __props.name,
				value: __props.value
			}), null, 16, ["name", "value"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(parsedValue.value, (parsed) => {
				return openBlock(), createBlock(VisuallyHiddenInputBubble_default, mergeProps({ key: parsed.name }, { ref_for: true }, {
					...props,
					..._ctx.$attrs
				}, {
					name: parsed.name,
					value: parsed.value
				}), null, 16, ["name", "value"]);
			}), 128))], 2112);
		};
	}
});
// node_modules/reka-ui/dist/Listbox/utils.js
function queryCheckedElement(parentEl) {
	return parentEl?.querySelector("[data-state=checked]");
}
function valueComparator$1(value, currentValue, comparator) {
	if (value === void 0) return false;
	else if (Array.isArray(value)) return value.some((val) => compare$1(val, currentValue, comparator));
	else return compare$1(value, currentValue, comparator);
}
function compare$1(value, currentValue, comparator) {
	if (value === void 0 || currentValue === void 0) return false;
	if (typeof value === "string") return value === currentValue;
	if (typeof comparator === "function") return comparator(value, currentValue);
	if (typeof comparator === "string") return value?.[comparator] === currentValue?.[comparator];
	return isEqual(value, currentValue);
}
// node_modules/reka-ui/dist/Listbox/ListboxRoot.js
var [injectListboxRootContext, provideListboxRootContext] = /*#__PURE__*/ createContext("ListboxRoot");
var [injectListboxHighlightScrollContext, provideListboxHighlightScrollContext] = /*#__PURE__*/ createContext("ListboxHighlightScroll");
var ListboxRoot_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxRoot",
	props: {
		modelValue: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		orientation: {
			type: String,
			required: false,
			default: "vertical"
		},
		dir: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		selectionBehavior: {
			type: String,
			required: false,
			default: "toggle"
		},
		highlightOnHover: {
			type: Boolean,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		by: {
			type: [String, Function],
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"update:modelValue",
		"highlight",
		"entryFocus",
		"leave"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { multiple, highlightOnHover, loop, orientation, disabled, selectionBehavior, dir: propDir } = toRefs(props);
		const { getItems, getItem } = useCollection({ isProvider: true });
		const { handleTypeaheadSearch } = useTypeahead();
		const { primitiveElement, currentElement } = usePrimitiveElement();
		const kbd = useKbd();
		const dir = useDirection(propDir);
		const highlightScrollContext = injectListboxHighlightScrollContext(null);
		provideListboxHighlightScrollContext({
			suppressHighlightScroll: ref(false),
			onHighlightScrollRequest: () => {}
		});
		const isFormControl = useFormControl(currentElement);
		const firstValue = ref();
		const isUserAction = ref(false);
		const focusable = ref(true);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
			passive: props.modelValue === void 0,
			deep: true
		});
		function onValueChange(val) {
			isUserAction.value = true;
			if (props.multiple) {
				const modelArray = Array.isArray(modelValue.value) ? [...modelValue.value] : [];
				const index = modelArray.findIndex((i) => compare$1(i, val, props.by));
				if (props.selectionBehavior === "toggle") {
					index === -1 ? modelArray.push(val) : modelArray.splice(index, 1);
					modelValue.value = modelArray;
				} else {
					modelValue.value = [val];
					firstValue.value = val;
				}
			} else if (props.selectionBehavior === "toggle") if (compare$1(modelValue.value, val, props.by)) modelValue.value = void 0;
			else modelValue.value = val;
			else modelValue.value = val;
			setTimeout(() => {
				isUserAction.value = false;
			}, 1);
		}
		const highlightedElement = ref(null);
		const previousElement = ref(null);
		const isVirtual = ref(false);
		const isComposing = ref(false);
		const virtualFocusHook = createEventHook();
		const virtualKeydownHook = createEventHook();
		const virtualHighlightHook = createEventHook();
		function getCollectionItem() {
			return getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "");
		}
		function changeHighlight(el, scrollIntoView = true, focus) {
			if (!el) return;
			highlightedElement.value = el;
			const suppressHighlightScroll = highlightScrollContext?.suppressHighlightScroll.value ?? false;
			if (focus ?? focusable.value) if (suppressHighlightScroll) highlightedElement.value.focus({ preventScroll: true });
			else highlightedElement.value.focus();
			if (suppressHighlightScroll) highlightScrollContext?.onHighlightScrollRequest(scrollIntoView ? () => {
				const element = highlightedElement.value;
				if (element?.isConnected) element.scrollIntoView({ block: "nearest" });
			} : void 0);
			else if (scrollIntoView) highlightedElement.value.scrollIntoView({ block: "nearest" });
			const highlightedItem = getItem(el);
			emits("highlight", highlightedItem);
		}
		function highlightItem(value) {
			if (isVirtual.value) virtualHighlightHook.trigger(value);
			else {
				const item = getItems().find((i) => compare$1(i.value, value, props.by));
				if (item) {
					highlightedElement.value = item.ref;
					changeHighlight(item.ref);
				}
			}
		}
		function onKeydownEnter(event) {
			if (highlightedElement.value && highlightedElement.value.isConnected) {
				if (event.ctrlKey || event.metaKey || event.altKey) return;
				event.preventDefault();
				event.stopPropagation();
				if (!isComposing.value) highlightedElement.value.click();
			}
		}
		function onKeydownTypeAhead(event) {
			if (!focusable.value) return;
			isUserAction.value = true;
			if (isVirtual.value) virtualKeydownHook.trigger(event);
			else {
				const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
				if (isMetaKey && event.key === "a" && multiple.value) {
					const collection = getItems();
					const values = collection.map((i) => i.value);
					modelValue.value = [...values];
					event.preventDefault();
					const lastItem = collection.at(-1);
					if (lastItem) changeHighlight(lastItem.ref);
				} else if (!isMetaKey) {
					const el = handleTypeaheadSearch(event.key, getItems());
					if (el) changeHighlight(el);
				}
			}
			setTimeout(() => {
				isUserAction.value = false;
			}, 1);
		}
		function onCompositionStart() {
			isComposing.value = true;
		}
		function onCompositionEnd() {
			nextTick(() => {
				isComposing.value = false;
			});
		}
		function highlightFirstItem() {
			nextTick(() => {
				onKeydownNavigation(new KeyboardEvent("keydown", { key: "PageUp" }));
			});
		}
		function onLeave(event) {
			const el = highlightedElement.value;
			if (el?.isConnected) previousElement.value = el;
			highlightedElement.value = null;
			emits("leave", event);
		}
		function onEnter(event) {
			const entryFocusEvent = new CustomEvent("listbox.entryFocus", {
				bubbles: false,
				cancelable: true
			});
			event.currentTarget?.dispatchEvent(entryFocusEvent);
			emits("entryFocus", entryFocusEvent);
			if (entryFocusEvent.defaultPrevented) return;
			if (previousElement.value) changeHighlight(previousElement.value);
			else {
				const el = getCollectionItem()?.[0];
				changeHighlight(el);
			}
		}
		function isAtVirtualBoundary(intent) {
			const rendered = getItems(true).map((i) => i.ref);
			const edge = intent === "next" ? rendered.at(-1) : rendered[0];
			if (!edge) return false;
			const position = Number(edge.getAttribute("aria-posinset"));
			const size = Number(edge.getAttribute("aria-setsize"));
			return intent === "next" ? position === size : position === 1;
		}
		function onKeydownNavigation(event) {
			const intent = getFocusIntent(event, orientation.value, dir.value);
			if (!intent) return;
			let collection = getCollectionItem();
			if (highlightedElement.value) {
				if (intent === "last") collection.reverse();
				else if (intent === "prev" || intent === "next") {
					if (intent === "prev") collection.reverse();
					const currentIndex = collection.indexOf(highlightedElement.value);
					const shouldLoop = loop.value && currentIndex === collection.length - 1;
					if (shouldLoop && isVirtual.value) {
						if (isAtVirtualBoundary(intent)) {
							const key = intent === "next" ? kbd.HOME : kbd.END;
							return virtualKeydownHook.trigger(new KeyboardEvent("keydown", {
								key,
								shiftKey: event.shiftKey
							}));
						}
						collection = [];
					} else collection = shouldLoop ? collection.slice(0, 1) : collection.slice(currentIndex + 1);
				}
				handleMultipleReplace(event, collection[0]);
			}
			if (collection.length) {
				const index = !highlightedElement.value && intent === "prev" ? collection.length - 1 : 0;
				changeHighlight(collection[index]);
			}
			if (isVirtual.value) return virtualKeydownHook.trigger(event);
		}
		function handleMultipleReplace(event, targetEl) {
			if (isVirtual.value || props.selectionBehavior !== "replace" || !multiple.value || !Array.isArray(modelValue.value)) return;
			if ((event.altKey || event.ctrlKey || event.metaKey) && !event.shiftKey) return;
			if (event.shiftKey) {
				const collection = getItems().filter((i) => i.ref.dataset.disabled !== "");
				let lastValue = collection.find((i) => i.ref === targetEl)?.value;
				if (event.key === kbd.END) lastValue = collection.at(-1)?.value;
				else if (event.key === kbd.HOME) lastValue = collection[0]?.value;
				if (!lastValue || !firstValue.value) return;
				const values = findValuesBetween(collection.map((i) => i.value), firstValue.value, lastValue);
				modelValue.value = values;
			}
		}
		async function highlightSelected(event, scroll = true) {
			if (!isClient) return;
			await nextTick();
			if (isVirtual.value) virtualFocusHook.trigger({
				event,
				scroll
			});
			else {
				const collection = getCollectionItem();
				const item = collection.find((i) => i.dataset.state === "checked");
				const focus = scroll ? void 0 : false;
				if (item) changeHighlight(item, scroll, focus);
				else if (collection.length) changeHighlight(collection[0], scroll, focus);
			}
		}
		let hasHighlightedOnMount = false;
		watch(modelValue, () => {
			if (!isUserAction.value) {
				const scroll = hasHighlightedOnMount;
				hasHighlightedOnMount = true;
				nextTick(() => {
					highlightSelected(void 0, scroll);
				});
			}
		}, {
			immediate: true,
			deep: true
		});
		__expose({
			highlightedElement,
			highlightItem,
			highlightFirstItem,
			highlightSelected,
			getItems
		});
		provideListboxRootContext({
			modelValue,
			onValueChange,
			multiple,
			orientation,
			dir,
			disabled,
			highlightOnHover,
			loop,
			highlightedElement,
			isVirtual,
			virtualFocusHook,
			virtualKeydownHook,
			virtualHighlightHook,
			by: props.by,
			firstValue,
			selectionBehavior,
			focusable,
			onLeave,
			onEnter,
			changeHighlight,
			onKeydownEnter,
			onKeydownNavigation,
			onKeydownTypeAhead,
			onCompositionStart,
			onCompositionEnd,
			highlightFirstItem
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				as: __props.as,
				"as-child": __props.asChild,
				dir: unref(dir),
				"data-disabled": unref(disabled) ? "" : void 0,
				onPointerleave: onLeave,
				onFocusout: _cache[0] || (_cache[0] = async (event) => {
					const target = event.relatedTarget || event.target;
					await nextTick();
					if (highlightedElement.value && unref(currentElement) && !unref(currentElement).contains(target)) onLeave(event);
				})
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) }), unref(isFormControl) && __props.name ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
					key: 0,
					name: __props.name,
					value: unref(modelValue),
					disabled: unref(disabled),
					required: __props.required
				}, null, 8, [
					"name",
					"value",
					"disabled",
					"required"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"dir",
				"data-disabled"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Listbox/ListboxContent.js
var ListboxContent_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxContent",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const { CollectionSlot } = useCollection();
		const rootContext = injectListboxRootContext();
		const isClickFocus = refAutoReset(false, 10);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionSlot), null, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					role: "listbox",
					as: __props.as,
					"as-child": __props.asChild,
					tabindex: unref(rootContext).focusable.value ? unref(rootContext).highlightedElement.value ? "-1" : "0" : "-1",
					"aria-orientation": unref(rootContext).orientation.value,
					"aria-multiselectable": !!unref(rootContext).multiple.value,
					"data-orientation": unref(rootContext).orientation.value,
					onMousedown: _cache[0] || (_cache[0] = withModifiers(($event) => isClickFocus.value = true, ["left"])),
					onFocus: _cache[1] || (_cache[1] = (ev) => {
						if (unref(isClickFocus)) return;
						unref(rootContext).onEnter(ev);
					}),
					onKeydown: [
						_cache[2] || (_cache[2] = withKeys((event) => {
							if (unref(rootContext).orientation.value === "vertical" && (event.key === "ArrowLeft" || event.key === "ArrowRight") || unref(rootContext).orientation.value === "horizontal" && (event.key === "ArrowUp" || event.key === "ArrowDown")) return;
							event.preventDefault();
							unref(rootContext).focusable.value && unref(rootContext).onKeydownNavigation(event);
						}, [
							"down",
							"up",
							"left",
							"right",
							"home",
							"end"
						])),
						withKeys(unref(rootContext).onKeydownEnter, ["enter"]),
						unref(rootContext).onKeydownTypeAhead
					]
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"as",
					"as-child",
					"tabindex",
					"aria-orientation",
					"aria-multiselectable",
					"data-orientation",
					"onKeydown"
				])]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Listbox/ListboxFilter.js
var ListboxFilter_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxFilter",
	props: {
		modelValue: {
			type: String,
			required: false
		},
		autoFocus: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "input"
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const modelValue = useVModel(props, "modelValue", __emit, {
			defaultValue: "",
			passive: props.modelValue === void 0
		});
		const rootContext = injectListboxRootContext();
		const { primitiveElement} = usePrimitiveElement();
		const disabled = computed(() => props.disabled || rootContext.disabled.value || false);
		const activedescendant = ref();
		watchSyncEffect(() => activedescendant.value = rootContext.highlightedElement.value?.id);
		const { isComposing, shouldDeferInput, handleCompositionStart, handleCompositionUpdate, handleCompositionEnd } = useComposing((event) => {
			modelValue.value = event.target.value;
			rootContext.onCompositionEnd();
			rootContext.highlightFirstItem();
		});
		function onCompositionStart() {
			rootContext.onCompositionStart();
			handleCompositionStart();
		}
		function handleInput(event) {
			if (shouldDeferInput.value) return;
			modelValue.value = event.target.value;
			rootContext.highlightFirstItem();
		}
		function handleKeydownNavigation(event) {
			if (isComposing.value) return;
			event.preventDefault();
			rootContext.onKeydownNavigation(event);
		}
		function handleKeydownEnter(event) {
			if (isComposing.value) return;
			rootContext.onKeydownEnter(event);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				as: __props.as,
				"as-child": __props.asChild,
				value: unref(modelValue),
				disabled: disabled.value ? "" : void 0,
				"data-disabled": disabled.value ? "" : void 0,
				"aria-disabled": disabled.value ?? void 0,
				"aria-activedescendant": activedescendant.value,
				type: "text",
				onKeydown: [withKeys(handleKeydownNavigation, [
					"down",
					"up",
					"home",
					"end"
				]), withKeys(handleKeydownEnter, ["enter"])],
				onInput: handleInput,
				onCompositionstart: onCompositionStart,
				onCompositionupdate: unref(handleCompositionUpdate),
				onCompositionend: unref(handleCompositionEnd)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"value",
				"disabled",
				"data-disabled",
				"aria-disabled",
				"aria-activedescendant",
				"onCompositionupdate",
				"onCompositionend"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Listbox/ListboxGroup.js
var [injectListboxGroupContext, provideListboxGroupContext] = /*#__PURE__*/ createContext("ListboxGroup");
var ListboxGroup_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxGroup",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const id = useId$1(void 0, "reka-listbox-group");
		provideListboxGroupContext({ id });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ role: "group" }, props, { "aria-labelledby": unref(id) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["aria-labelledby"]);
		};
	}
});
// node_modules/reka-ui/dist/Listbox/ListboxItem.js
var LISTBOX_SELECT = "listbox.select";
var [injectListboxItemContext, provideListboxItemContext] = /*#__PURE__*/ createContext("ListboxItem");
var ListboxItem_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxItem",
	props: {
		value: {
			type: null,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const id = useId$1(void 0, "reka-listbox-item");
		const { CollectionItem } = useCollection();
		const { forwardRef, currentElement } = useForwardExpose();
		const rootContext = injectListboxRootContext();
		const isHighlighted = computed(() => currentElement.value != null && currentElement.value === rootContext.highlightedElement.value);
		const isSelected = computed(() => valueComparator$1(rootContext.modelValue.value, props.value, rootContext.by));
		const disabled = computed(() => rootContext.disabled.value || props.disabled);
		async function handleSelect(ev) {
			emits("select", ev);
			if (ev?.defaultPrevented) return;
			if (!disabled.value && ev) {
				rootContext.onValueChange(props.value);
				rootContext.changeHighlight(currentElement.value);
			}
		}
		function handleSelectCustomEvent(ev) {
			const eventDetail = {
				originalEvent: ev,
				value: props.value
			};
			handleAndDispatchCustomEvent(LISTBOX_SELECT, handleSelect, eventDetail);
		}
		provideListboxItemContext({ isSelected });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionItem), { value: __props.value }, {
				default: withCtx(() => [withMemo([
					isHighlighted.value,
					isSelected.value,
					disabled.value,
					unref(rootContext).focusable.value,
					...Object.entries(_ctx.$attrs).flat()
				], () => createVNode(unref(Primitive), mergeProps({ id: unref(id) }, _ctx.$attrs, {
					ref: unref(forwardRef),
					role: "option",
					tabindex: unref(rootContext).focusable.value ? isHighlighted.value ? "0" : "-1" : -1,
					"aria-selected": isSelected.value,
					as: __props.as,
					"as-child": __props.asChild,
					disabled: disabled.value ? "" : void 0,
					"data-disabled": disabled.value ? "" : void 0,
					"data-highlighted": isHighlighted.value ? "" : void 0,
					"data-state": isSelected.value ? "checked" : "unchecked",
					onClick: handleSelectCustomEvent,
					onKeydown: withKeys(withModifiers(handleSelectCustomEvent, ["prevent"]), ["space"]),
					onPointermove: _cache[0] || (_cache[0] = () => {
						if (unref(rootContext).highlightedElement.value === unref(currentElement)) return;
						if (unref(rootContext).highlightOnHover.value) unref(rootContext).changeHighlight(unref(currentElement), false, false);
					})
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", { selected: isSelected.value })]),
					_: 3
				}, 16, [
					"id",
					"tabindex",
					"aria-selected",
					"as",
					"as-child",
					"disabled",
					"data-disabled",
					"data-highlighted",
					"data-state",
					"onKeydown"
				]), _cache, 1)]),
				_: 3
			}, 8, ["value"]);
		};
	}
});
// node_modules/reka-ui/dist/Listbox/ListboxItemIndicator.js
var ListboxItemIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxItemIndicator",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const { forwardRef } = useForwardExpose();
		const itemContext = injectListboxItemContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: __props.forceMount || unref(itemContext).isSelected.value }, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					"aria-hidden": "true",
					"data-state": unref(itemContext).isSelected.value ? "checked" : "unchecked",
					as: __props.as,
					"as-child": __props.asChild
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"data-state",
					"as",
					"as-child"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
// node_modules/reka-ui/dist/Listbox/ListboxVirtualizer.js
var ListboxVirtualizer_default = /* @__PURE__ */ defineComponent({
	__name: "ListboxVirtualizer",
	props: {
		options: {
			type: Array,
			required: true
		},
		overscan: {
			type: Number,
			required: false
		},
		estimateSize: {
			type: [Number, Function],
			required: false
		},
		textContent: {
			type: Function,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const slots = useSlots();
		const rootContext = injectListboxRootContext();
		const parentEl = useParentElement();
		const { getItems } = useCollection();
		rootContext.isVirtual.value = true;
		const padding = computed(() => {
			const el = parentEl.value;
			if (!el) return {
				start: 0,
				end: 0
			};
			else {
				const styles = (void 0).getComputedStyle(el);
				return {
					start: Number.parseFloat(styles.paddingBlockStart || styles.paddingTop),
					end: Number.parseFloat(styles.paddingBlockEnd || styles.paddingBottom)
				};
			}
		});
		const virtualizer = useVirtualizer({
			get scrollPaddingStart() {
				return padding.value.start;
			},
			get scrollPaddingEnd() {
				return padding.value.end;
			},
			get count() {
				return props.options.length;
			},
			get horizontal() {
				return rootContext.orientation.value === "horizontal";
			},
			estimateSize(index) {
				if (typeof props.estimateSize === "function") return props.estimateSize(index);
				return props.estimateSize ?? 28;
			},
			getScrollElement() {
				return parentEl.value;
			},
			overscan: props.overscan ?? 12
		});
		const virtualizedItems = computed(() => virtualizer.value.getVirtualItems().map((item) => {
			const defaultNode = slots.default({
				option: props.options[item.index],
				virtualizer: virtualizer.value,
				virtualItem: item
			})[0];
			const targetNode = defaultNode.type === Fragment && Array.isArray(defaultNode.children) ? defaultNode.children.find((child) => typeof child.type !== "symbol") : defaultNode;
			return {
				item,
				is: cloneVNode(targetNode, {
					"key": `${item.key}`,
					"data-index": item.index,
					"aria-setsize": props.options.length,
					"aria-posinset": item.index + 1,
					"style": {
						position: "absolute",
						top: 0,
						left: 0,
						transform: `translateY(${item.start}px)`,
						overflowAnchor: "none"
					}
				})
			};
		}));
		rootContext.virtualFocusHook.on(({ event, scroll }) => {
			const index = props.options.findIndex((option) => {
				if (Array.isArray(rootContext.modelValue.value)) return compare$1(option, rootContext.modelValue.value[0], rootContext.by);
				else return compare$1(option, rootContext.modelValue.value, rootContext.by);
			});
			if (index !== -1) {
				event?.preventDefault();
				virtualizer.value.scrollToIndex(index, { align: "start" });
				requestAnimationFrame(() => {
					const item = queryCheckedElement(parentEl.value);
					if (item) {
						const focus = event ? true : scroll ? void 0 : false;
						rootContext.changeHighlight(item, scroll, focus);
					}
				});
			} else if (scroll) rootContext.highlightFirstItem();
			else requestAnimationFrame(() => {
				const item = getItems().find((i) => i.ref.dataset.disabled !== "")?.ref;
				if (item) rootContext.changeHighlight(item, false, false);
			});
		});
		rootContext.virtualHighlightHook.on((value) => {
			const index = props.options.findIndex((option) => {
				return compare$1(option, value, rootContext.by);
			});
			virtualizer.value.scrollToIndex(index, { align: "start" });
			requestAnimationFrame(() => {
				const item = queryCheckedElement(parentEl.value);
				if (item) rootContext.changeHighlight(item);
			});
		});
		const search = refAutoReset("", 1e3);
		const optionsWithMetadata = computed(() => {
			const parseTextContent = (option) => {
				if (props.textContent) return props.textContent(option);
				else return option?.toString().toLowerCase();
			};
			return props.options.map((option, index) => ({
				index,
				textContent: parseTextContent(option)
			}));
		});
		function handleMultipleReplace(event, intent) {
			if (!rootContext.firstValue?.value || !rootContext.multiple.value || !Array.isArray(rootContext.modelValue.value)) return;
			const lastValue = getItems().filter((i) => i.ref.dataset.disabled !== "").find((i) => i.ref === rootContext.highlightedElement.value)?.value;
			if (!lastValue) return;
			let value = null;
			switch (intent) {
				case "prev":
				case "next":
					value = findValuesBetween(props.options, rootContext.firstValue.value, lastValue);
					break;
				case "first":
					value = findValuesBetween(props.options, rootContext.firstValue.value, props.options?.[0]);
					break;
				case "last": value = findValuesBetween(props.options, rootContext.firstValue.value, props.options.at(-1));
			}
			rootContext.modelValue.value = value;
		}
		rootContext.virtualKeydownHook.on((event) => {
			const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
			if (event.key === "Tab" && !isMetaKey) return;
			let intent = MAP_KEY_TO_FOCUS_INTENT[event.key];
			if (isMetaKey && event.key === "a" && rootContext.multiple.value) {
				event.preventDefault();
				rootContext.modelValue.value = [...props.options];
				intent = "last";
			} else if (event.shiftKey && intent) handleMultipleReplace(event, intent);
			if (["first", "last"].includes(intent)) {
				event.preventDefault();
				const index = intent === "first" ? 0 : props.options.length - 1;
				virtualizer.value.scrollToIndex(index);
				requestAnimationFrame(() => {
					const items = getItems();
					const item = intent === "first" ? items[0] : items.at(-1);
					if (item) rootContext.changeHighlight(item.ref);
				});
			} else if (!intent && !isMetaKey) {
				search.value += event.key;
				const currentIndex = Number(getActiveElement()?.getAttribute("data-index"));
				const currentMatch = optionsWithMetadata.value[currentIndex].textContent;
				const filteredOptions = optionsWithMetadata.value.map((i) => i.textContent ?? "");
				const next = getNextMatch(filteredOptions, search.value, currentMatch);
				const nextMatch = optionsWithMetadata.value.find((option) => option.textContent === next);
				if (nextMatch) {
					virtualizer.value.scrollToIndex(nextMatch.index, { align: "start" });
					requestAnimationFrame(() => {
						const item = parentEl.value.querySelector(`[data-index="${nextMatch.index}"]`);
						if (item instanceof HTMLElement) rootContext.changeHighlight(item);
					});
				}
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				"data-reka-virtualizer": "",
				style: normalizeStyle({
					position: "relative",
					width: "100%",
					height: `${unref(virtualizer).getTotalSize()}px`
				})
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(virtualizedItems.value, ({ is, item }) => {
				return openBlock(), createBlock(resolveDynamicComponent(is), { key: item.index });
			}), 128))], 4);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/useComboboxContentPositioning.js
function useComboboxContentPositioning(open) {
	const contentPosition = ref("inline");
	const contentPlaced = ref(false);
	const currentContent = ref();
	const suppressHighlightScroll = computed(() => contentPosition.value === "popper" && !contentPlaced.value);
	let pendingHighlightScroll;
	provideListboxHighlightScrollContext({
		suppressHighlightScroll,
		onHighlightScrollRequest(scroll) {
			pendingHighlightScroll = scroll;
		}
	});
	function onContentPositionChange(content, position) {
		if (currentContent.value !== content || contentPosition.value !== position) {
			contentPlaced.value = false;
			pendingHighlightScroll = void 0;
		}
		currentContent.value = content;
		contentPosition.value = position;
	}
	function onContentPlaced(content) {
		if (currentContent.value !== content || contentPosition.value !== "popper" || contentPlaced.value) return;
		contentPlaced.value = true;
		const scroll = pendingHighlightScroll;
		pendingHighlightScroll = void 0;
		if (open.value) scroll?.();
	}
	function onContentUnmount(content) {
		if (currentContent.value !== content) return;
		currentContent.value = void 0;
		contentPosition.value = "inline";
		contentPlaced.value = false;
		pendingHighlightScroll = void 0;
	}
	return {
		onContentPositionChange,
		onContentPlaced,
		onContentUnmount
	};
}
// node_modules/reka-ui/dist/Combobox/ComboboxRoot.js
var [injectComboboxRootContext, provideComboboxRootContext] = /*#__PURE__*/ createContext("ComboboxRoot");
var ComboboxRoot_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxRoot",
	props: {
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		resetSearchTermOnBlur: {
			type: Boolean,
			required: false,
			default: true
		},
		resetSearchTermOnSelect: {
			type: Boolean,
			required: false,
			default: true
		},
		openOnFocus: {
			type: Boolean,
			required: false,
			default: false
		},
		openOnClick: {
			type: Boolean,
			required: false,
			default: false
		},
		ignoreFilter: {
			type: Boolean,
			required: false
		},
		resetModelValueOnClear: {
			type: Boolean,
			required: false,
			default: false
		},
		unmountOnHide: {
			type: Boolean,
			required: false,
			default: true
		},
		modelValue: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		highlightOnHover: {
			type: Boolean,
			required: false,
			default: true
		},
		loop: {
			type: Boolean,
			required: false
		},
		by: {
			type: [String, Function],
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"update:modelValue",
		"highlight",
		"update:open"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { primitiveElement, currentElement: parentElement } = usePrimitiveElement();
		const { multiple, disabled, ignoreFilter, resetSearchTermOnSelect, openOnFocus, openOnClick, dir: propDir, resetModelValueOnClear, highlightOnHover, loop, unmountOnHide } = toRefs(props);
		const dir = useDirection(propDir);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
			passive: props.modelValue === void 0,
			deep: true
		});
		const open = useVModel(props, "open", emits, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		async function onOpenChange(val) {
			open.value = val;
			filterSearch.value = "";
			if (val) {
				await nextTick();
				primitiveElement.value?.highlightSelected();
				isUserInputted.value = true;
				inputElement.value?.focus();
			} else {
				isUserInputted.value = false;
				setTimeout(() => {
					if (!val && props.resetSearchTermOnBlur) resetSearchTerm.trigger();
				}, 1);
			}
		}
		const resetSearchTerm = createEventHook();
		const isUserInputted = ref(false);
		const isVirtual = ref(false);
		const inputElement = ref();
		const triggerElement = ref();
		const highlightedElement = computed(() => primitiveElement.value?.highlightedElement ?? void 0);
		const contentPositioning = useComboboxContentPositioning(open);
		const allItems = ref(/* @__PURE__ */ new Map());
		const allGroups = ref(/* @__PURE__ */ new Map());
		const { contains } = useFilter$1({ sensitivity: "base" });
		const filterSearch = ref("");
		const filterState = computed((oldValue) => {
			if (!filterSearch.value || props.ignoreFilter || isVirtual.value) return {
				count: allItems.value.size,
				items: oldValue?.items ?? /* @__PURE__ */ new Map(),
				groups: oldValue?.groups ?? new Set(allGroups.value.keys())
			};
			let itemCount = 0;
			const filteredItems = /* @__PURE__ */ new Map();
			const filteredGroups = /* @__PURE__ */ new Set();
			for (const [id, value] of allItems.value) {
				const score = contains(value, filterSearch.value);
				filteredItems.set(id, score ? 1 : 0);
				if (score) itemCount++;
			}
			for (const [groupId, group] of allGroups.value) for (const itemId of group) if (filteredItems.get(itemId) > 0) {
				filteredGroups.add(groupId);
				break;
			}
			return {
				count: itemCount,
				items: filteredItems,
				groups: filteredGroups
			};
		});
		__expose({
			filtered: filterState,
			highlightedElement,
			highlightItem: primitiveElement.value?.highlightItem,
			highlightFirstItem: primitiveElement.value?.highlightFirstItem,
			highlightSelected: primitiveElement.value?.highlightSelected
		});
		provideComboboxRootContext({
			modelValue,
			multiple,
			disabled,
			open,
			onOpenChange,
			...contentPositioning,
			contentId: "",
			isUserInputted,
			isVirtual,
			inputElement,
			highlightedElement,
			onInputElementChange: (val) => inputElement.value = val,
			triggerElement,
			onTriggerElementChange: (val) => triggerElement.value = val,
			parentElement,
			resetSearchTermOnSelect,
			onResetSearchTerm: resetSearchTerm.on,
			allItems,
			allGroups,
			filterSearch,
			filterState,
			ignoreFilter,
			openOnFocus,
			openOnClick,
			resetModelValueOnClear,
			unmountOnHide
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [createVNode(unref(ListboxRoot_default), mergeProps({
					ref_key: "primitiveElement",
					ref: primitiveElement
				}, _ctx.$attrs, {
					modelValue: unref(modelValue),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
					style: { pointerEvents: unref(open) ? "auto" : void 0 },
					as: __props.as,
					"as-child": __props.asChild,
					dir: unref(dir),
					multiple: unref(multiple),
					name: __props.name,
					required: __props.required,
					disabled: unref(disabled),
					"highlight-on-hover": unref(highlightOnHover),
					loop: unref(loop),
					by: props.by,
					onHighlight: _cache[1] || (_cache[1] = ($event) => emits("highlight", $event))
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
						open: unref(open),
						modelValue: unref(modelValue)
					})]),
					_: 3
				}, 16, [
					"modelValue",
					"style",
					"as",
					"as-child",
					"dir",
					"multiple",
					"name",
					"required",
					"disabled",
					"highlight-on-hover",
					"loop",
					"by"
				])]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxAnchor.js
var ComboboxAnchor_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxAnchor",
	props: {
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperAnchor_default), {
				"as-child": "",
				reference: __props.reference
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					"as-child": __props.asChild,
					as: __props.as
				}, _ctx.$attrs), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["as-child", "as"])]),
				_: 3
			}, 8, ["reference"]);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxContentImpl.js
var [injectComboboxContentContext, provideComboboxContentContext] = /*#__PURE__*/ createContext("ComboboxContent");
var ComboboxContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxContentImpl",
	props: {
		position: {
			type: String,
			required: false,
			default: "inline"
		},
		bodyLock: {
			type: Boolean,
			required: false
		},
		hideWhenEmpty: {
			type: Boolean,
			required: false
		},
		memoDependencies: {
			type: Array,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		},
		present: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { position } = toRefs(props);
		const rootContext = injectComboboxRootContext();
		const contentId = Symbol("ComboboxContent");
		watch(position, (value) => rootContext.onContentPositionChange(contentId, value), { immediate: true });
		const isEmpty = computed(() => rootContext.ignoreFilter.value ? rootContext.allItems.value.size === 0 : rootContext.filterState.value.count === 0);
		const { forwardRef, currentElement } = useForwardExpose();
		const scrollLocked = useBodyScrollLock(props.present && props.bodyLock);
		watch([() => props.present, () => props.bodyLock], ([present, bodyLock]) => scrollLocked.value = present && bodyLock);
		useFocusGuards();
		const ariaHiddenTarget = computed(() => props.present ? rootContext.parentElement.value : void 0);
		useHideOthers(ariaHiddenTarget);
		const pickedProps = computed(() => {
			if (props.position === "popper") {
				const { present: _, ...forwardedProps$1 } = props;
				return forwardedProps$1;
			} else return {};
		});
		const forwardedProps = useForwardProps$1(pickedProps);
		const popperStyle = {
			"boxSizing": "border-box",
			"--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
			"--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
			"--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
			"--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
			"--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
		};
		provideComboboxContentContext({ position });
		watch(() => props.present, async (isPresent, wasPresent) => {
			if (isPresent || !wasPresent) return;
			const activeElement = getActiveElement();
			if (!activeElement || !currentElement.value.contains(activeElement)) return;
			await nextTick();
			rootContext.triggerElement.value?.focus();
		});
		function isEventTargetWithinCombobox(target) {
			if (rootContext.parentElement.value?.contains(target)) return true;
			const control = (target instanceof Element ? target.closest("label") : null)?.control;
			return !!control && !!rootContext.parentElement.value?.contains(control);
		}
		const popperContentEvents = { placed: () => rootContext.onContentPlaced(contentId) };
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ListboxContent_default), { "as-child": "" }, {
				default: withCtx(() => [createVNode(unref(FocusScope_default), {
					"as-child": "",
					present: props.present,
					onMountAutoFocus: _cache[5] || (_cache[5] = withModifiers(() => {}, ["prevent"])),
					onUnmountAutoFocus: _cache[6] || (_cache[6] = withModifiers(() => {}, ["prevent"]))
				}, {
					default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
						"as-child": "",
						present: props.present,
						"disable-outside-pointer-events": __props.disableOutsidePointerEvents,
						onDismiss: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false)),
						onFocusOutside: _cache[1] || (_cache[1] = (ev) => {
							if (isEventTargetWithinCombobox(ev.target)) ev.preventDefault();
							emits("focusOutside", ev);
						}),
						onInteractOutside: _cache[2] || (_cache[2] = ($event) => emits("interactOutside", $event)),
						onEscapeKeyDown: _cache[3] || (_cache[3] = ($event) => emits("escapeKeyDown", $event)),
						onPointerDownOutside: _cache[4] || (_cache[4] = (ev) => {
							if (isEventTargetWithinCombobox(ev.target)) ev.preventDefault();
							emits("pointerDownOutside", ev);
						})
					}, {
						default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(position) === "popper" ? unref(PopperContent_default) : unref(Primitive)), mergeProps({
							..._ctx.$attrs,
							...unref(forwardedProps)
						}, {
							id: unref(rootContext).contentId,
							ref: unref(forwardRef),
							"memo-dependencies": unref(position) === "popper" ? [unref(rootContext).filterSearch.value, unref(rootContext).filterState.value] : void 0,
							"data-state": unref(rootContext).open.value ? "open" : "closed",
							"data-empty": isEmpty.value ? "" : void 0,
							style: {
								display: props.hideWhenEmpty && isEmpty.value ? "none" : "flex",
								flexDirection: "column",
								outline: "none",
								...unref(position) === "popper" ? popperStyle : {}
							}
						}, toHandlers(unref(position) === "popper" ? popperContentEvents : {})), {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 16, [
							"id",
							"memo-dependencies",
							"data-state",
							"data-empty",
							"style"
						]))]),
						_: 3
					}, 8, ["present", "disable-outside-pointer-events"])]),
					_: 3
				}, 8, ["present"])]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxArrow.js
var ComboboxArrow_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxArrow",
	props: {
		width: {
			type: Number,
			required: false,
			default: 10
		},
		height: {
			type: Number,
			required: false,
			default: 5
		},
		rounded: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "svg"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectComboboxRootContext();
		const contentContext = injectComboboxContentContext();
		useForwardExpose();
		return (_ctx, _cache) => {
			return unref(rootContext).open.value && unref(contentContext).position.value === "popper" ? (openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(mergeProps({ key: 0 }, props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16)) : createCommentVNode("v-if", true);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxCancel.js
var ComboboxCancel_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxCancel",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const rootContext = injectComboboxRootContext();
		function handleClick() {
			if (rootContext.inputElement.value) {
				rootContext.inputElement.value.value = "";
				rootContext.inputElement.value.focus();
			}
			if (rootContext.resetModelValueOnClear?.value) rootContext.modelValue.value = rootContext.multiple.value ? [] : null;
			rootContext.filterSearch.value = "";
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ type: __props.as === "button" ? "button" : void 0 }, props, {
				tabindex: "-1",
				onClick: handleClick
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["type"]);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxContent.js
var ComboboxContent_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		position: {
			type: String,
			required: false
		},
		bodyLock: {
			type: Boolean,
			required: false
		},
		hideWhenEmpty: {
			type: Boolean,
			required: false
		},
		memoDependencies: {
			type: Array,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		const { forwardRef } = useForwardExpose();
		const rootContext = injectComboboxRootContext();
		rootContext.contentId ||= useId$1(void 0, "reka-combobox-content");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), {
				present: __props.forceMount || unref(rootContext).open.value,
				"force-mount": __props.forceMount || !unref(rootContext).unmountOnHide.value
			}, {
				default: withCtx(({ present }) => [withDirectives(createVNode(ComboboxContentImpl_default, mergeProps({
					...unref(forwarded),
					..._ctx.$attrs
				}, {
					ref: unref(forwardRef),
					present: unref(rootContext).unmountOnHide.value || present
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["present"]), [[vShow, unref(rootContext).unmountOnHide.value || present]])]),
				_: 3
			}, 8, ["present", "force-mount"]);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxEmpty.js
var ComboboxEmpty_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxEmpty",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectComboboxRootContext();
		const isRender = computed(() => rootContext.ignoreFilter.value ? rootContext.allItems.value.size === 0 : rootContext.filterState.value.count === 0);
		return (_ctx, _cache) => {
			return isRender.value ? (openBlock(), createBlock(unref(Primitive), normalizeProps(mergeProps({ key: 0 }, props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[0] || (_cache[0] = createTextVNode("No options", -1))])]),
				_: 3
			}, 16)) : createCommentVNode("v-if", true);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxGroup.js
var [injectComboboxGroupContext, provideComboboxGroupContext] = /*#__PURE__*/ createContext("ComboboxGroup");
var ComboboxGroup_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxGroup",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const id = useId$1(void 0, "reka-combobox-group");
		const rootContext = injectComboboxRootContext();
		const isRender = computed(() => rootContext.ignoreFilter.value ? true : !rootContext.filterSearch.value ? true : rootContext.filterState.value.groups.has(id));
		const context = provideComboboxGroupContext({
			id,
			labelId: ""
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ListboxGroup_default), mergeProps({
				id: unref(id),
				"aria-labelledby": unref(context).labelId
			}, props, { hidden: isRender.value ? void 0 : true }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"id",
				"aria-labelledby",
				"hidden"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxInput.js
var ComboboxInput_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxInput",
	props: {
		displayValue: {
			type: Function,
			required: false
		},
		modelValue: {
			type: String,
			required: false
		},
		autoFocus: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "input"
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectComboboxRootContext();
		const listboxContext = injectListboxRootContext();
		const { primitiveElement} = usePrimitiveElement();
		const modelValue = useVModel(props, "modelValue", emits, { passive: props.modelValue === void 0 });
		const { isComposing, shouldDeferInput, handleCompositionStart, handleCompositionUpdate, handleCompositionEnd } = useComposing((event) => {
			const el = event.target;
			if (el) processInputValue(el.value);
		});
		function handleKeyDown(ev) {
			if (isComposing.value) return;
			ev.preventDefault();
			if (!rootContext.open.value) rootContext.onOpenChange(true);
		}
		function processInputValue(value) {
			if (!rootContext.open.value) {
				rootContext.onOpenChange(true);
				nextTick(() => {
					if (value) {
						rootContext.filterSearch.value = value;
						listboxContext.highlightFirstItem();
					}
				});
			} else rootContext.filterSearch.value = value;
		}
		function handleInput(event) {
			if (shouldDeferInput.value) return;
			processInputValue(event.target.value);
		}
		function handleFocus() {
			if (rootContext.openOnFocus.value && !rootContext.open.value) rootContext.onOpenChange(true);
		}
		function handleBlur(ev) {
			if (!rootContext.open.value) return;
			const nextFocus = ev.relatedTarget;
			if (!nextFocus) return;
			const isInsideRoot = rootContext.parentElement.value?.contains(nextFocus);
			const isInsideContent = (void 0).getElementById(rootContext.contentId)?.contains(nextFocus);
			if (!isInsideRoot && !isInsideContent) requestAnimationFrame(() => {
				if (!rootContext.open.value) return;
				const active = (void 0).activeElement;
				if (!rootContext.parentElement.value?.contains(active) && !(void 0).getElementById(rootContext.contentId)?.contains(active)) rootContext.onOpenChange(false);
			});
		}
		function handleClick() {
			if (rootContext.openOnClick.value && !rootContext.open.value) rootContext.onOpenChange(true);
		}
		function resetSearchTerm() {
			const rootModelValue = rootContext.modelValue.value;
			if (props.displayValue) modelValue.value = props.displayValue(rootModelValue);
			else if (!rootContext.multiple.value && rootModelValue && !Array.isArray(rootModelValue)) if (typeof rootModelValue !== "object") modelValue.value = rootModelValue.toString();
			else modelValue.value = "";
			else modelValue.value = "";
			nextTick(() => {
				modelValue.value = modelValue.value;
			});
		}
		rootContext.onResetSearchTerm(() => {
			resetSearchTerm();
		});
		watch(rootContext.modelValue, async () => {
			if (!rootContext.isUserInputted.value && rootContext.resetSearchTermOnSelect.value) resetSearchTerm();
		}, {
			immediate: true,
			deep: true
		});
		watch(rootContext.filterState, (_newValue, oldValue) => {
			if (!rootContext.isVirtual.value && oldValue.count === 0) listboxContext.highlightFirstItem();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ListboxFilter_default), {
				ref_key: "primitiveElement",
				ref: primitiveElement,
				modelValue: unref(modelValue),
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
				as: __props.as,
				"as-child": __props.asChild,
				"auto-focus": __props.autoFocus,
				disabled: __props.disabled,
				"aria-expanded": unref(rootContext).open.value,
				"aria-controls": unref(rootContext).contentId,
				"aria-autocomplete": "list",
				role: "combobox",
				autocomplete: "off",
				onClick: handleClick,
				onInput: handleInput,
				onKeydown: withKeys(handleKeyDown, ["down", "up"]),
				onFocus: handleFocus,
				onBlur: handleBlur,
				onCompositionstart: unref(handleCompositionStart),
				onCompositionupdate: unref(handleCompositionUpdate),
				onCompositionend: unref(handleCompositionEnd)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"modelValue",
				"as",
				"as-child",
				"auto-focus",
				"disabled",
				"aria-expanded",
				"aria-controls",
				"onCompositionstart",
				"onCompositionupdate",
				"onCompositionend"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxItem.js
var ComboboxItem_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxItem",
	props: {
		textValue: {
			type: String,
			required: false
		},
		value: {
			type: null,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const id = useId$1(void 0, "reka-combobox-item");
		const rootContext = injectComboboxRootContext();
		injectComboboxGroupContext(null);
		const { primitiveElement} = usePrimitiveElement();
		if (props.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
		const isRender = computed(() => {
			if (rootContext.isVirtual.value || rootContext.ignoreFilter.value || !rootContext.filterSearch.value) return true;
			else {
				const filteredCurrentItem = rootContext.filterState.value.items.get(id);
				if (filteredCurrentItem === void 0) return true;
				return filteredCurrentItem > 0;
			}
		});
		return (_ctx, _cache) => {
			return isRender.value ? withMemo([
				isRender.value,
				unref(rootContext).filterSearch.value,
				unref(rootContext).disabled.value,
				__props.disabled,
				props.value,
				props.as,
				props.asChild,
				...Object.values(_ctx.$attrs)
			], () => (openBlock(), createBlock(unref(ListboxItem_default), mergeProps({ key: 0 }, props, {
				id: unref(id),
				ref_key: "primitiveElement",
				ref: primitiveElement,
				disabled: unref(rootContext).disabled.value || __props.disabled,
				onSelect: _cache[0] || (_cache[0] = (event) => {
					emits("select", event);
					if (event.defaultPrevented) return;
					if (!unref(rootContext).multiple.value && !__props.disabled && !unref(rootContext).disabled.value) {
						event.preventDefault();
						unref(rootContext).onOpenChange(false);
						unref(rootContext).modelValue.value = props.value;
					} else if (unref(rootContext).multiple.value) unref(rootContext).inputElement.value?.focus();
				})
			}), {
				default: withCtx((slotProps) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)), () => [createTextVNode(toDisplayString(__props.value), 1)])]),
				_: 3
			}, 16, ["id", "disabled"])), _cache, 1) : createCommentVNode("v-if", true);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxItemIndicator.js
var ComboboxItemIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxItemIndicator",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ListboxItemIndicator_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxLabel.js
var ComboboxLabel_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxLabel",
	props: {
		for: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const groupContext = injectComboboxGroupContext({
			id: "",
			labelId: ""
		});
		groupContext.labelId ||= useId$1(void 0, "reka-combobox-group-label");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(groupContext).labelId }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxPortal.js
var ComboboxPortal_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxPortal",
	props: {
		to: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		defer: {
			type: Boolean,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxSeparator.js
var ComboboxSeparator_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxSeparator",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "aria-hidden": "true" }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Combobox/ComboboxTrigger.js
var ComboboxTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef} = useForwardExpose();
		const rootContext = injectComboboxRootContext();
		const disabled = computed(() => props.disabled || rootContext.disabled.value || false);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				ref: unref(forwardRef),
				type: __props.as === "button" ? "button" : void 0,
				tabindex: "-1",
				"aria-label": "Show popup",
				"aria-haspopup": "listbox",
				"aria-expanded": unref(rootContext).open.value,
				"aria-controls": unref(rootContext).contentId,
				"data-state": unref(rootContext).open.value ? "open" : "closed",
				disabled: disabled.value,
				"data-disabled": disabled.value ? "" : void 0,
				"aria-disabled": disabled.value ?? void 0,
				onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(!unref(rootContext).open.value))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"type",
				"aria-expanded",
				"aria-controls",
				"data-state",
				"disabled",
				"data-disabled",
				"aria-disabled"
			]);
		};
	}
});
// node_modules/reka-ui/dist/shared/useNonce.js
function useNonce(nonce) {
	const context = injectConfigProviderContext({ nonce: ref() });
	return computed(() => nonce?.value || context.nonce?.value);
}
// node_modules/reka-ui/dist/Combobox/ComboboxVirtualizer.js
var ComboboxVirtualizer_default = /* @__PURE__ */ defineComponent({
	__name: "ComboboxVirtualizer",
	props: {
		options: {
			type: Array,
			required: true
		},
		overscan: {
			type: Number,
			required: false
		},
		estimateSize: {
			type: [Number, Function],
			required: false
		},
		textContent: {
			type: Function,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectComboboxRootContext();
		rootContext.isVirtual.value = true;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ListboxVirtualizer_default, normalizeProps(guardReactiveProps(props)), {
				default: withCtx((slotProps) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Field/FieldRoot.js
var [injectFieldRootContext] = /*#__PURE__*/ createContext("FieldRoot");
// node_modules/reka-ui/dist/Select/utils.js
var OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
];
var SELECTION_KEYS = [" ", "Enter"];
function valueComparator(value, currentValue, comparator) {
	if (value === void 0) return false;
	else if (Array.isArray(value)) return value.some((val) => compare(val, currentValue, comparator));
	else return compare(value, currentValue, comparator);
}
function compare(value, currentValue, comparator) {
	if (value === void 0 || currentValue === void 0) return false;
	if (typeof value === "string") return value === currentValue;
	if (typeof comparator === "function") return comparator(value, currentValue);
	if (typeof comparator === "string") return value?.[comparator] === currentValue?.[comparator];
	return isEqual(value, currentValue);
}
function shouldShowPlaceholder(value) {
	return value === void 0 || value === null || value === "" || Array.isArray(value) && value.length === 0;
}
// node_modules/reka-ui/dist/Select/SelectRoot.js
var _hoisted_1$1 = ["value"];
var [injectSelectRootContext, provideSelectRootContext] = /*#__PURE__*/ createContext("SelectRoot");
var SelectRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SelectRoot",
	props: {
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false,
			default: void 0
		},
		nullableValue: {
			type: String,
			required: false,
			default: ""
		},
		by: {
			type: [String, Function],
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		autocomplete: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:modelValue", "update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { multiple, dir: propDir } = toRefs(props);
		const fieldContext = injectFieldRootContext(null);
		const resolvedName = computed(() => props.name ?? fieldContext?.name.value);
		const required = computed(() => fieldContext ? props.required || fieldContext.required.value : props.required);
		const disabled = computed(() => Boolean(props.disabled || fieldContext?.disabled.value));
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
			passive: props.modelValue === void 0,
			deep: true
		});
		const open = useVModel(props, "open", emits, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		const triggerElement = ref();
		const valueElement = ref();
		const triggerPointerDownPosRef = ref({
			x: 0,
			y: 0
		});
		const isEmptyModelValue = computed(() => {
			if (multiple.value && Array.isArray(modelValue.value)) return modelValue.value?.length === 0;
			else return isNullish(modelValue.value);
		});
		watch(modelValue, () => {
			fieldContext?.reportControlState({ filled: !isEmptyModelValue.value });
		});
		useCollection({ isProvider: true });
		const dir = useDirection(propDir);
		const isFormControl = useFormControl(triggerElement);
		const optionsSet = ref(/* @__PURE__ */ new Set());
		const nativeSelectKey = computed(() => {
			return Array.from(optionsSet.value).map((option) => option.value).join(";");
		});
		function handleValueChange(value) {
			let nextValue;
			if (multiple.value) {
				const array = Array.isArray(modelValue.value) ? [...modelValue.value] : [];
				const index = array.findIndex((i) => compare(i, value, props.by));
				index === -1 ? array.push(value) : array.splice(index, 1);
				nextValue = [...array];
			} else nextValue = value;
			modelValue.value = nextValue;
			fieldContext?.handleControlInput({ value: nextValue });
		}
		function getOption(value) {
			return Array.from(optionsSet.value).find((option) => valueComparator(value, option.value, props.by));
		}
		provideSelectRootContext({
			triggerElement,
			onTriggerChange: (node) => {
				triggerElement.value = node;
			},
			valueElement,
			onValueElementChange: (node) => {
				valueElement.value = node;
			},
			contentId: "",
			modelValue,
			onValueChange: handleValueChange,
			by: props.by,
			open,
			multiple,
			required,
			onOpenChange: (value) => {
				open.value = value;
			},
			dir,
			triggerPointerDownPosRef,
			disabled,
			isEmptyModelValue,
			optionsSet,
			onOptionAdd: (option) => {
				const existingOption = getOption(option.value);
				if (existingOption) optionsSet.value.delete(existingOption);
				optionsSet.value.add(option);
			},
			onOptionRemove: (option) => {
				const existingOption = getOption(option.value);
				if (existingOption) optionsSet.value.delete(existingOption);
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					open: unref(open)
				}), unref(isFormControl) && resolvedName.value ? (openBlock(), createBlock(BubbleSelect_default, {
					key: nativeSelectKey.value,
					"aria-hidden": "true",
					tabindex: "-1",
					multiple: unref(multiple),
					required: required.value,
					name: resolvedName.value,
					autocomplete: __props.autocomplete,
					disabled: disabled.value,
					value: unref(modelValue)
				}, {
					default: withCtx(() => [unref(isNullish)(unref(modelValue)) ? (openBlock(), createElementBlock("option", {
						key: 0,
						value: __props.nullableValue
					}, null, 8, _hoisted_1$1)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(optionsSet.value), (option) => {
						return openBlock(), createElementBlock("option", mergeProps({ key: option.value ?? "" }, { ref_for: true }, option), null, 16);
					}), 128))]),
					_: 1
				}, 8, [
					"multiple",
					"required",
					"name",
					"autocomplete",
					"disabled",
					"value"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Select/BubbleSelect.js
var BubbleSelect_default = /* @__PURE__ */ defineComponent({
	__name: "BubbleSelect",
	props: {
		autocomplete: {
			type: String,
			required: false
		},
		autofocus: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		form: {
			type: String,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		},
		size: {
			type: Number,
			required: false
		},
		value: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const selectElement = ref();
		const rootContext = injectSelectRootContext();
		watch(() => props.value, (cur, prev) => {
			const selectProto = (void 0).HTMLSelectElement.prototype;
			const setValue = Object.getOwnPropertyDescriptor(selectProto, "value").set;
			if (cur !== prev && setValue && selectElement.value) {
				const event = new Event("change", { bubbles: true });
				setValue.call(selectElement.value, cur);
				selectElement.value.dispatchEvent(event);
			}
		});
		/**
		* Form autofill will trigger an `input` event on the `select` element.
		* We listen to that event and update our internal state to support it.
		*/
		function handleInput(event) {
			rootContext.onValueChange(event.target.value);
		}
		/**
		* We purposefully use a `select` here to support form autofill as much
		* as possible.
		*
		* We purposefully do not add the `value` attribute here to allow the value
		* to be set programmatically and bubble to any parent form `onChange` event.
		*
		* We use `VisuallyHidden` rather than `display: "none"` because Safari autofill
		* won't work otherwise.
		*/
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(VisuallyHidden_default), { "as-child": "" }, {
				default: withCtx(() => [createBaseVNode("select", mergeProps({
					ref_key: "selectElement",
					ref: selectElement
				}, props, { onInput: handleInput }), [renderSlot(_ctx.$slots, "default")], 16)]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectPopperPosition.js
var SelectPopperPosition_default = /* @__PURE__ */ defineComponent({
	__name: "SelectPopperPosition",
	props: {
		memoDependencies: {
			type: Array,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false,
			default: "start"
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false,
			default: 10
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const forwarded = useForwardProps$1(__props);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperContent_default), mergeProps(unref(forwarded), { style: {
				"boxSizing": "border-box",
				"--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-select-content-available-width": "var(--reka-popper-available-width)",
				"--reka-select-content-available-height": "var(--reka-popper-available-height)",
				"--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
			} }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectContentImpl.js
var SelectContentDefaultContextValue = {
	onViewportChange: () => {},
	itemTextRefCallback: () => {},
	itemRefCallback: () => {}
};
var [injectSelectContentContext, provideSelectContentContext] = /*#__PURE__*/ createContext("SelectContent");
var SelectContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "SelectContentImpl",
	props: {
		position: {
			type: String,
			required: false,
			default: "item-aligned"
		},
		bodyLock: {
			type: Boolean,
			required: false,
			default: true
		},
		loop: {
			type: Boolean,
			required: false
		},
		memoDependencies: {
			type: Array,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false,
			default: "start"
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	emits: [
		"closeAutoFocus",
		"escapeKeyDown",
		"pointerDownOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectSelectRootContext();
		useFocusGuards();
		useBodyScrollLock(props.bodyLock);
		const { CollectionSlot, getItems } = useCollection();
		const content = ref();
		useHideOthers(content);
		const { search, handleTypeaheadSearch } = useTypeahead();
		const viewport = ref();
		const selectedItem = ref();
		const selectedItemText = ref();
		const isPositioned = ref(false);
		const firstValidItemFoundRef = ref(false);
		const firstSelectedItemInArrayFoundRef = ref(false);
		function focusSelectedItem() {
			if (selectedItem.value && content.value) focusFirst$1([selectedItem.value, content.value]);
		}
		watch(isPositioned, () => {
			focusSelectedItem();
		});
		const { onOpenChange, triggerPointerDownPosRef } = rootContext;
		watchEffect((cleanupFn) => {
			if (!content.value) return;
			let pointerMoveDelta = {
				x: 0,
				y: 0
			};
			const handlePointerMove = (event) => {
				pointerMoveDelta = {
					x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.value?.x ?? 0)),
					y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.value?.y ?? 0))
				};
			};
			const handlePointerUp = (event) => {
				if (event.pointerType === "touch") return;
				if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
				else if (!content.value?.contains(event.target)) onOpenChange(false);
				(void 0).removeEventListener("pointermove", handlePointerMove);
				triggerPointerDownPosRef.value = null;
			};
			if (triggerPointerDownPosRef.value !== null) {
				(void 0).addEventListener("pointermove", handlePointerMove);
				(void 0).addEventListener("pointerup", handlePointerUp, {
					capture: true,
					once: true
				});
			}
			cleanupFn(() => {
				(void 0).removeEventListener("pointermove", handlePointerMove);
				(void 0).removeEventListener("pointerup", handlePointerUp, { capture: true });
			});
		});
		function handleKeyDown(event) {
			const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
			if (event.key === "Tab") event.preventDefault();
			if (event.code === "Space") {
				if (search.value === "") return;
				event.preventDefault();
			}
			if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key, getItems());
			if ([
				"ArrowUp",
				"ArrowDown",
				"Home",
				"End"
			].includes(event.key)) {
				let candidateNodes = [...getItems().map((i) => i.ref)];
				if (["ArrowUp", "End"].includes(event.key)) candidateNodes = candidateNodes.slice().reverse();
				if (["ArrowUp", "ArrowDown"].includes(event.key)) {
					const currentElement = event.target;
					const currentIndex = candidateNodes.indexOf(currentElement);
					candidateNodes = props.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
				}
				setTimeout(() => focusFirst$1(candidateNodes));
				event.preventDefault();
			}
		}
		const positionProps = reactiveOmit(props, "loop");
		const pickedProps = computed(() => {
			if (props.position === "popper") return positionProps;
			else return {};
		});
		const forwardedProps = useForwardProps$1(pickedProps.value);
		provideSelectContentContext({
			content,
			viewport,
			onViewportChange: (node) => {
				viewport.value = node;
			},
			itemRefCallback: (node, value, disabled) => {
				const isFirstValidItem = !firstValidItemFoundRef.value && !disabled;
				const isSelectedItem = valueComparator(rootContext.modelValue.value, value, rootContext.by);
				if (rootContext.multiple.value) {
					if (firstSelectedItemInArrayFoundRef.value) return;
					if (isSelectedItem || isFirstValidItem) {
						selectedItem.value = node;
						if (isSelectedItem) firstSelectedItemInArrayFoundRef.value = true;
					}
				} else if (isSelectedItem || isFirstValidItem) selectedItem.value = node;
				if (isFirstValidItem) firstValidItemFoundRef.value = true;
			},
			selectedItem,
			selectedItemText,
			onItemLeave: () => {
				content.value?.focus();
			},
			itemTextRefCallback: (node, value, disabled) => {
				const isFirstValidItem = !firstValidItemFoundRef.value && !disabled;
				if (valueComparator(rootContext.modelValue.value, value, rootContext.by) || isFirstValidItem) selectedItemText.value = node;
			},
			focusSelectedItem,
			position: props.position,
			isPositioned,
			searchRef: search
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionSlot), null, {
				default: withCtx(() => [createVNode(unref(FocusScope_default), {
					"as-child": "",
					onMountAutoFocus: _cache[6] || (_cache[6] = withModifiers(() => {}, ["prevent"])),
					onUnmountAutoFocus: _cache[7] || (_cache[7] = (event) => {
						emits("closeAutoFocus", event);
						if (event.defaultPrevented) return;
						unref(rootContext).triggerElement.value?.focus({ preventScroll: true });
						event.preventDefault();
					})
				}, {
					default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
						"as-child": "",
						"disable-outside-pointer-events": __props.disableOutsidePointerEvents,
						onFocusOutside: _cache[2] || (_cache[2] = withModifiers(() => {}, ["prevent"])),
						onDismiss: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onOpenChange(false)),
						onEscapeKeyDown: _cache[4] || (_cache[4] = ($event) => emits("escapeKeyDown", $event)),
						onPointerDownOutside: _cache[5] || (_cache[5] = ($event) => emits("pointerDownOutside", $event))
					}, {
						default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.position === "popper" ? SelectPopperPosition_default : SelectItemAlignedPosition_default), mergeProps({
							..._ctx.$attrs,
							...unref(forwardedProps)
						}, {
							id: unref(rootContext).contentId,
							ref: (vnode) => {
								if (!vnode) return void 0;
								const el = unref(unrefElement)(vnode);
								if (el?.hasAttribute("data-reka-popper-content-wrapper")) content.value = el.firstElementChild;
								else content.value = el;
							},
							role: "listbox",
							"data-state": unref(rootContext).open.value ? "open" : "closed",
							dir: unref(rootContext).dir.value,
							style: {
								display: "flex",
								flexDirection: "column",
								outline: "none"
							},
							onContextmenu: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"])),
							onPlaced: _cache[1] || (_cache[1] = ($event) => isPositioned.value = true),
							onKeydown: handleKeyDown
						}), {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 16, [
							"id",
							"data-state",
							"dir",
							"onKeydown"
						]))]),
						_: 3
					}, 8, ["disable-outside-pointer-events"])]),
					_: 3
				})]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectItemAlignedPosition.js
var [injectSelectItemAlignedPositionContext, provideSelectItemAlignedPositionContext] = /*#__PURE__*/ createContext("SelectItemAlignedPosition");
var SelectItemAlignedPosition_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SelectItemAlignedPosition",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["placed"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { getItems } = useCollection();
		const rootContext = injectSelectRootContext();
		const contentContext = injectSelectContentContext();
		const shouldExpandOnScrollRef = ref(false);
		const shouldRepositionRef = ref(true);
		const contentWrapperElement = ref();
		const { forwardRef, currentElement: contentElement } = useForwardExpose();
		const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
		function position() {
			if (rootContext.triggerElement.value && rootContext.valueElement.value && contentWrapperElement.value && contentElement.value && viewport?.value && selectedItem?.value && selectedItemText?.value) {
				const triggerRect = rootContext.triggerElement.value.getBoundingClientRect();
				const contentRect = contentElement.value.getBoundingClientRect();
				const valueNodeRect = rootContext.valueElement.value.getBoundingClientRect();
				const itemTextRect = selectedItemText.value.getBoundingClientRect();
				if (rootContext.dir.value !== "rtl") {
					const itemTextOffset = itemTextRect.left - contentRect.left;
					const left = valueNodeRect.left - itemTextOffset;
					const leftDelta = triggerRect.left - left;
					const minContentWidth = triggerRect.width + leftDelta;
					const contentWidth = Math.max(minContentWidth, contentRect.width);
					const rightEdge = (void 0).innerWidth - 10;
					const clampedLeft = clamp(left, 10, Math.max(10, rightEdge - contentWidth));
					contentWrapperElement.value.style.minWidth = `${minContentWidth}px`;
					contentWrapperElement.value.style.left = `${clampedLeft}px`;
				} else {
					const itemTextOffset = contentRect.right - itemTextRect.right;
					const right = (void 0).innerWidth - valueNodeRect.right - itemTextOffset;
					const rightDelta = (void 0).innerWidth - triggerRect.right - right;
					const minContentWidth = triggerRect.width + rightDelta;
					const contentWidth = Math.max(minContentWidth, contentRect.width);
					const leftEdge = (void 0).innerWidth - 10;
					const clampedRight = clamp(right, 10, Math.max(10, leftEdge - contentWidth));
					contentWrapperElement.value.style.minWidth = `${minContentWidth}px`;
					contentWrapperElement.value.style.right = `${clampedRight}px`;
				}
				const items = getItems().map((i) => i.ref);
				const availableHeight = (void 0).innerHeight - 20;
				const itemsHeight = viewport.value.scrollHeight;
				const contentStyles = (void 0).getComputedStyle(contentElement.value);
				const contentBorderTopWidth = Number.parseInt(contentStyles.borderTopWidth, 10);
				const contentPaddingTop = Number.parseInt(contentStyles.paddingTop, 10);
				const contentBorderBottomWidth = Number.parseInt(contentStyles.borderBottomWidth, 10);
				const contentPaddingBottom = Number.parseInt(contentStyles.paddingBottom, 10);
				const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
				const minContentHeight = Math.min(selectedItem.value.offsetHeight * 5, fullContentHeight);
				const viewportStyles = (void 0).getComputedStyle(viewport.value);
				const viewportPaddingTop = Number.parseInt(viewportStyles.paddingTop, 10);
				const viewportPaddingBottom = Number.parseInt(viewportStyles.paddingBottom, 10);
				const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - 10;
				const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
				const selectedItemHalfHeight = selectedItem.value.offsetHeight / 2;
				const itemOffsetMiddle = selectedItem.value.offsetTop + selectedItemHalfHeight;
				const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
				const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
				if (contentTopToItemMiddle <= topEdgeToTriggerMiddle) {
					const isLastItem = selectedItem.value === items.at(-1);
					contentWrapperElement.value.style.bottom = `0px`;
					const viewportOffsetBottom = contentElement.value.clientHeight - viewport.value.offsetTop - viewport.value.offsetHeight;
					const height = contentTopToItemMiddle + Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
					contentWrapperElement.value.style.height = `${height}px`;
				} else {
					const isFirstItem = selectedItem.value === items[0];
					contentWrapperElement.value.style.top = `0px`;
					const height = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.value.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight) + itemMiddleToContentBottom;
					contentWrapperElement.value.style.height = `${height}px`;
					viewport.value.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.value.offsetTop;
				}
				contentWrapperElement.value.style.margin = `10px 0`;
				contentWrapperElement.value.style.minHeight = `${minContentHeight}px`;
				contentWrapperElement.value.style.maxHeight = `${availableHeight}px`;
				emits("placed");
				requestAnimationFrame(() => shouldExpandOnScrollRef.value = true);
			}
		}
		const contentZIndex = ref("");
		function handleScrollButtonChange(node) {
			if (node && shouldRepositionRef.value === true) {
				position();
				focusSelectedItem?.();
				shouldRepositionRef.value = false;
			}
		}
		useResizeObserver(rootContext.triggerElement, () => {
			position();
		});
		provideSelectItemAlignedPositionContext({
			contentWrapper: contentWrapperElement,
			shouldExpandOnScrollRef,
			onScrollButtonChange: handleScrollButtonChange
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "contentWrapperElement",
				ref: contentWrapperElement,
				style: normalizeStyle({
					display: "flex",
					flexDirection: "column",
					position: "fixed",
					zIndex: contentZIndex.value
				})
			}, [createVNode(unref(Primitive), mergeProps({
				ref: unref(forwardRef),
				style: {
					boxSizing: "border-box",
					maxHeight: "100%"
				}
			}, {
				..._ctx.$attrs,
				...props
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16)], 4);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectArrow.js
var SelectArrow_default = /* @__PURE__ */ defineComponent({
	__name: "SelectArrow",
	props: {
		width: {
			type: Number,
			required: false,
			default: 10
		},
		height: {
			type: Number,
			required: false,
			default: 5
		},
		rounded: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "svg"
		}
	},
	setup(__props) {
		const props = __props;
		const contentContext = injectSelectContentContext(SelectContentDefaultContextValue);
		return (_ctx, _cache) => {
			return unref(contentContext).position === "popper" ? (openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(mergeProps({ key: 0 }, props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16)) : createCommentVNode("v-if", true);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectProvider.js
var SelectProvider_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SelectProvider",
	props: { context: {
		type: Object,
		required: true
	} },
	setup(__props) {
		provideSelectRootContext(__props.context);
		provideSelectContentContext(SelectContentDefaultContextValue);
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectContent.js
var _hoisted_1 = { key: 1 };
var SelectContent_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SelectContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		position: {
			type: String,
			required: false
		},
		bodyLock: {
			type: Boolean,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		memoDependencies: {
			type: Array,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"closeAutoFocus",
		"escapeKeyDown",
		"pointerDownOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const forwarded = useForwardPropsEmits(props, __emit);
		const rootContext = injectSelectRootContext();
		const fragment = ref();
		const presenceRef = ref();
		const present = computed(() => props.forceMount || rootContext.open.value);
		const renderPresence = ref(present.value);
		let renderPresenceTimeout;
		function clearRenderPresenceTimeout() {
			if (renderPresenceTimeout) {
				clearTimeout(renderPresenceTimeout);
				renderPresenceTimeout = void 0;
			}
		}
		watch(present, (_value, _oldValue, onCleanup) => {
			clearRenderPresenceTimeout();
			renderPresenceTimeout = setTimeout(() => {
				renderPresence.value = present.value;
				renderPresenceTimeout = void 0;
			});
			onCleanup(clearRenderPresenceTimeout);
		});
		return (_ctx, _cache) => {
			return present.value || renderPresence.value || presenceRef.value?.present ? (openBlock(), createBlock(unref(Presence_default), {
				key: 0,
				ref_key: "presenceRef",
				ref: presenceRef,
				present: present.value
			}, {
				default: withCtx(() => [createVNode(SelectContentImpl_default, normalizeProps(guardReactiveProps({
					...unref(forwarded),
					..._ctx.$attrs
				})), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16)]),
				_: 3
			}, 8, ["present"])) : fragment.value ? (openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: fragment.value }, [createVNode(SelectProvider_default, { context: unref(rootContext) }, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["context"])], 8, ["to"]))])) : createCommentVNode("v-if", true);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectGroup.js
var [injectSelectGroupContext, provideSelectGroupContext] = /*#__PURE__*/ createContext("SelectGroup");
var SelectGroup_default = /* @__PURE__ */ defineComponent({
	__name: "SelectGroup",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const id = useId$1(void 0, "reka-select-group");
		provideSelectGroupContext({ id });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ role: "group" }, props, { "aria-labelledby": unref(id) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["aria-labelledby"]);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectItem.js
var [injectSelectItemContext, provideSelectItemContext] = /*#__PURE__*/ createContext("SelectItem");
var SelectItem_default = /* @__PURE__ */ defineComponent({
	__name: "SelectItem",
	props: {
		value: {
			type: null,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { disabled } = toRefs(props);
		const rootContext = injectSelectRootContext();
		const contentContext = injectSelectContentContext();
		const { forwardRef} = useForwardExpose();
		const { CollectionItem } = useCollection();
		const isSelected = computed(() => valueComparator(rootContext.modelValue?.value, props.value, rootContext.by));
		const isFocused = ref(false);
		const textValue = ref(props.textValue ?? "");
		const textId = useId$1(void 0, "reka-select-item-text");
		const SELECT_SELECT = "select.select";
		async function handleSelectCustomEvent(ev) {
			if (ev.defaultPrevented) return;
			const eventDetail = {
				originalEvent: ev,
				value: props.value
			};
			handleAndDispatchCustomEvent(SELECT_SELECT, handleSelect, eventDetail);
		}
		async function handleSelect(ev) {
			await nextTick();
			emits("select", ev);
			if (ev.defaultPrevented) return;
			if (!disabled.value) {
				rootContext.onValueChange(props.value);
				if (!rootContext.multiple.value) rootContext.onOpenChange(false);
			}
		}
		async function handlePointerMove(event) {
			await nextTick();
			if (event.defaultPrevented) return;
			if (disabled.value) contentContext.onItemLeave?.();
			else event.currentTarget?.focus({ preventScroll: true });
		}
		async function handlePointerLeave(event) {
			await nextTick();
			if (event.defaultPrevented) return;
			if (event.currentTarget === getActiveElement()) contentContext.onItemLeave?.();
		}
		async function handleKeyDown(event) {
			await nextTick();
			if (event.defaultPrevented) return;
			if (contentContext.searchRef?.value !== "" && event.key === " ") return;
			if (SELECTION_KEYS.includes(event.key)) handleSelectCustomEvent(event);
			if (event.key === " ") event.preventDefault();
		}
		if (props.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
		provideSelectItemContext({
			value: props.value,
			disabled,
			textId,
			isSelected,
			onItemTextChange: (node) => {
				textValue.value = ((textValue.value || node?.textContent) ?? "").trim();
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionItem), { value: { textValue: textValue.value } }, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					role: "option",
					"aria-labelledby": unref(textId),
					"data-highlighted": isFocused.value ? "" : void 0,
					"aria-selected": isSelected.value,
					"data-state": isSelected.value ? "checked" : "unchecked",
					"aria-disabled": unref(disabled) || void 0,
					"data-disabled": unref(disabled) ? "" : void 0,
					tabindex: unref(disabled) ? void 0 : -1,
					as: __props.as,
					"as-child": __props.asChild,
					onFocus: _cache[0] || (_cache[0] = ($event) => isFocused.value = true),
					onBlur: _cache[1] || (_cache[1] = ($event) => isFocused.value = false),
					onPointerup: handleSelectCustomEvent,
					onPointerdown: _cache[2] || (_cache[2] = (event) => {
						event.currentTarget.focus({ preventScroll: true });
					}),
					onTouchend: _cache[3] || (_cache[3] = withModifiers(() => {}, ["prevent", "stop"])),
					onPointermove: handlePointerMove,
					onPointerleave: handlePointerLeave,
					onKeydown: handleKeyDown
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", { selected: isSelected.value })]),
					_: 3
				}, 8, [
					"aria-labelledby",
					"data-highlighted",
					"aria-selected",
					"data-state",
					"aria-disabled",
					"data-disabled",
					"tabindex",
					"as",
					"as-child"
				])]),
				_: 3
			}, 8, ["value"]);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectItemIndicator.js
var SelectItemIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "SelectItemIndicator",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const { forwardRef } = useForwardExpose();
		const itemContext = injectSelectItemContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: __props.forceMount || unref(itemContext).isSelected.value }, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					"aria-hidden": "true",
					"data-state": unref(itemContext).isSelected.value ? "checked" : "unchecked",
					as: __props.as,
					"as-child": __props.asChild
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"data-state",
					"as",
					"as-child"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectItemText.js
var SelectItemText_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SelectItemText",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const props = __props;
		injectSelectRootContext();
		injectSelectContentContext();
		const itemContext = injectSelectItemContext();
		const { forwardRef} = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({
				id: unref(itemContext).textId,
				ref: unref(forwardRef)
			}, {
				...props,
				..._ctx.$attrs
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectLabel.js
var SelectLabel_default = /* @__PURE__ */ defineComponent({
	__name: "SelectLabel",
	props: {
		for: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	setup(__props) {
		const props = __props;
		const groupContext = injectSelectGroupContext({ id: "" });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(groupContext).id }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectPortal.js
var SelectPortal_default = /* @__PURE__ */ defineComponent({
	__name: "SelectPortal",
	props: {
		to: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		defer: {
			type: Boolean,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectSeparator.js
var SelectSeparator_default = /* @__PURE__ */ defineComponent({
	__name: "SelectSeparator",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ "aria-hidden": "true" }, props), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectTrigger.js
var SelectTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "SelectTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectSelectRootContext();
		const { forwardRef} = useForwardExpose();
		const isDisabled = computed(() => rootContext.disabled?.value || props.disabled);
		rootContext.contentId ||= useId$1(void 0, "reka-select-content");
		const fieldContext = injectFieldRootContext(null);
		const attrs = useAttrs();
		function getResolvedId() {
			return attrs.id ?? fieldContext?.fieldId.value;
		}
		function getFieldAttrs() {
			const mergeIds = (consumerValue, fieldValue) => [consumerValue, fieldValue].filter(Boolean).join(" ") || void 0;
			return {
				...fieldContext?.dataAttributes.value,
				"id": getResolvedId(),
				"aria-labelledby": mergeIds(attrs["aria-labelledby"], fieldContext?.labelId.value),
				"aria-describedby": mergeIds(attrs["aria-describedby"], fieldContext?.describedBy.value),
				"aria-invalid": attrs["aria-invalid"] ?? (fieldContext?.invalid.value || void 0)
			};
		}
		function handleFieldFocus() {
			fieldContext?.handleControlFocus();
		}
		function handleFieldBlur() {
			fieldContext?.handleControlBlur();
		}
		const { getItems } = useCollection();
		const { search, handleTypeaheadSearch, resetTypeahead } = useTypeahead();
		function handleOpen() {
			if (!isDisabled.value) {
				rootContext.onOpenChange(true);
				resetTypeahead();
			}
		}
		function handlePointerOpen(event) {
			handleOpen();
			rootContext.triggerPointerDownPosRef.value = {
				x: Math.round(event.pageX),
				y: Math.round(event.pageY)
			};
		}
		function isPlainLeftClick(event) {
			return event.button === 0 && event.ctrlKey === false;
		}
		let openedFromPointerDown = false;
		function onTriggerPointerDown(event) {
			if (event.defaultPrevented) return;
			if (event.pointerType === "touch") return event.preventDefault();
			const target = event.target;
			if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
			if (isPlainLeftClick(event)) {
				handlePointerOpen(event);
				openedFromPointerDown = true;
			}
		}
		function onTriggerMouseDown(event) {
			if (event.defaultPrevented) return;
			if (isPlainLeftClick(event)) event.preventDefault();
		}
		function onTriggerClick(event) {
			if (event.defaultPrevented) {
				openedFromPointerDown = false;
				return;
			}
			if (!openedFromPointerDown) event.currentTarget?.focus();
			openedFromPointerDown = false;
		}
		function onTriggerPointerUp(event) {
			if (event.defaultPrevented) return;
			event.preventDefault();
			if (event.pointerType === "touch") handlePointerOpen(event);
		}
		function onTriggerKeyDown(event) {
			if (event.defaultPrevented) return;
			const isTypingAhead = search.value !== "";
			if (!(event.ctrlKey || event.altKey || event.metaKey) && event.key.length === 1) handleTypeaheadSearch(event.key, getItems());
			if (isTypingAhead && event.key === " ") return;
			if (OPEN_KEYS.includes(event.key)) {
				handleOpen();
				event.preventDefault();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperAnchor_default), {
				"as-child": "",
				reference: __props.reference
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps(getFieldAttrs(), {
					ref: unref(forwardRef),
					role: "combobox",
					type: __props.as === "button" ? "button" : void 0,
					"aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
					"aria-expanded": unref(rootContext).open.value || false,
					"aria-required": unref(rootContext).required?.value,
					"aria-autocomplete": "none",
					disabled: isDisabled.value,
					dir: unref(rootContext)?.dir.value,
					"data-state": unref(rootContext)?.open.value ? "open" : "closed",
					"data-disabled": isDisabled.value ? "" : void 0,
					"data-placeholder": unref(shouldShowPlaceholder)(unref(rootContext).modelValue?.value) ? "" : void 0,
					"as-child": __props.asChild,
					as: __props.as,
					onClick: onTriggerClick,
					onPointerdown: onTriggerPointerDown,
					onMousedown: onTriggerMouseDown,
					onFocus: handleFieldFocus,
					onBlur: handleFieldBlur,
					onPointerup: onTriggerPointerUp,
					onKeydown: onTriggerKeyDown
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"type",
					"aria-controls",
					"aria-expanded",
					"aria-required",
					"disabled",
					"dir",
					"data-state",
					"data-disabled",
					"data-placeholder",
					"as-child",
					"as"
				])]),
				_: 3
			}, 8, ["reference"]);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectValue.js
var SelectValue_default = /* @__PURE__ */ defineComponent({
	__name: "SelectValue",
	props: {
		placeholder: {
			type: String,
			required: false,
			default: ""
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef} = useForwardExpose();
		const rootContext = injectSelectRootContext();
		const selectedLabel = computed(() => {
			let list = [];
			const options = Array.from(rootContext.optionsSet.value);
			const getOption = (value) => options.find((option) => valueComparator(value, option.value, rootContext.by));
			if (Array.isArray(rootContext.modelValue.value)) list = rootContext.modelValue.value.map((value) => getOption(value)?.textContent ?? "");
			else list = [getOption(rootContext.modelValue.value)?.textContent ?? ""];
			return list.filter(Boolean);
		});
		const slotText = computed(() => {
			return selectedLabel.value.length ? selectedLabel.value.join(", ") : props.placeholder;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref: unref(forwardRef),
				as: __props.as,
				"as-child": __props.asChild,
				style: { pointerEvents: "none" },
				"data-placeholder": selectedLabel.value.length ? void 0 : props.placeholder
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					selectedLabel: selectedLabel.value,
					modelValue: unref(rootContext).modelValue.value
				}, () => [createTextVNode(toDisplayString(slotText.value), 1)])]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-placeholder"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Select/SelectViewport.js
var SelectViewport_default = /* @__PURE__ */ defineComponent({
	__name: "SelectViewport",
	props: {
		nonce: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const { nonce: propNonce } = toRefs(props);
		const nonce = useNonce(propNonce);
		const alignedPositionContext = injectSelectContentContext().position === "item-aligned" ? injectSelectItemAlignedPositionContext() : void 0;
		const { forwardRef} = useForwardExpose();
		const prevScrollTopRef = ref(0);
		function handleScroll(event) {
			const viewport = event.currentTarget;
			const { shouldExpandOnScrollRef, contentWrapper } = alignedPositionContext ?? {};
			if (shouldExpandOnScrollRef?.value && contentWrapper?.value) {
				const scrolledBy = Math.abs(prevScrollTopRef.value - viewport.scrollTop);
				if (scrolledBy > 0) {
					const availableHeight = (void 0).innerHeight - 20;
					const cssMinHeight = Number.parseFloat(contentWrapper.value.style.minHeight);
					const cssHeight = Number.parseFloat(contentWrapper.value.style.height);
					const prevHeight = Math.max(cssMinHeight, cssHeight);
					if (prevHeight < availableHeight) {
						const nextHeight = prevHeight + scrolledBy;
						const clampedNextHeight = Math.min(availableHeight, nextHeight);
						const heightDiff = nextHeight - clampedNextHeight;
						contentWrapper.value.style.height = `${clampedNextHeight}px`;
						if (contentWrapper.value.style.bottom === "0px") {
							viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
							contentWrapper.value.style.justifyContent = "flex-end";
						}
					}
				}
			}
			prevScrollTopRef.value = viewport.scrollTop;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Primitive), mergeProps({
				ref: unref(forwardRef),
				"data-reka-select-viewport": "",
				role: "presentation"
			}, {
				..._ctx.$attrs,
				...props
			}, {
				style: {
					position: "relative",
					flex: 1,
					overflow: "hidden auto"
				},
				onScroll: handleScroll
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16), createVNode(unref(Primitive), {
				as: "style",
				nonce: unref(nonce)
			}, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ", -1)])]),
				_: 1
			}, 8, ["nonce"])], 64);
		};
	}
});
// node_modules/reka-ui/dist/Switch/SwitchRoot.js
var [injectSwitchRootContext, provideSwitchRootContext] = /*#__PURE__*/ createContext("SwitchRoot");
var SwitchRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SwitchRoot",
	props: {
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: false
		},
		id: {
			type: String,
			required: false
		},
		value: {
			type: String,
			required: false,
			default: "on"
		},
		trueValue: {
			type: null,
			required: false,
			default: () => true
		},
		falseValue: {
			type: null,
			required: false,
			default: () => false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const { disabled } = toRefs(props);
		const modelValue = useVModel(props, "modelValue", emit, {
			defaultValue: props.defaultValue ?? props.falseValue,
			passive: props.modelValue === void 0
		});
		const checked = computed(() => modelValue.value === props.trueValue);
		function toggleCheck() {
			if (disabled.value) return;
			modelValue.value = checked.value ? props.falseValue : props.trueValue;
		}
		const { forwardRef, currentElement } = useForwardExpose();
		const isFormControl = useFormControl(currentElement);
		const scopeIdAttrs = useForwardScopeId();
		const ariaLabel = computed(() => props.id && currentElement.value ? (void 0).querySelector(`[for="${props.id}"]`)?.innerText : void 0);
		provideSwitchRootContext({
			checked,
			toggleCheck,
			disabled
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Primitive), mergeProps({
				id: __props.id,
				ref: unref(forwardRef),
				role: "switch",
				type: __props.as === "button" ? "button" : void 0,
				value: __props.value,
				"aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
				"aria-checked": checked.value,
				"aria-required": __props.required,
				"data-state": checked.value ? "checked" : "unchecked",
				"data-disabled": unref(disabled) ? "" : void 0,
				"as-child": __props.asChild,
				as: __props.as,
				disabled: unref(disabled)
			}, {
				...unref(scopeIdAttrs),
				..._ctx.$attrs
			}, {
				onClick: toggleCheck,
				onKeydown: withKeys(withModifiers(toggleCheck, ["prevent"]), ["enter"])
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					checked: checked.value
				})]),
				_: 3
			}, 16, [
				"id",
				"type",
				"value",
				"aria-label",
				"aria-checked",
				"aria-required",
				"data-state",
				"data-disabled",
				"as-child",
				"as",
				"disabled",
				"onKeydown"
			]), unref(isFormControl) && __props.name ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), mergeProps({
				key: 0,
				type: "checkbox",
				name: __props.name,
				disabled: unref(disabled),
				required: __props.required,
				value: __props.value,
				checked: checked.value
			}, unref(scopeIdAttrs)), null, 16, [
				"name",
				"disabled",
				"required",
				"value",
				"checked"
			])) : createCommentVNode("v-if", true)], 64);
		};
	}
});
// node_modules/reka-ui/dist/Switch/SwitchThumb.js
var SwitchThumb_default = /* @__PURE__ */ defineComponent({
	__name: "SwitchThumb",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const rootContext = injectSwitchRootContext();
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				"data-state": unref(rootContext).checked.value ? "checked" : "unchecked",
				"data-disabled": unref(rootContext).disabled.value ? "" : void 0,
				"as-child": __props.asChild,
				as: __props.as
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"data-state",
				"data-disabled",
				"as-child",
				"as"
			]);
		};
	}
});
// node_modules/reka-ui/dist/TagsInput/TagsInputRoot.js
var [injectTagsInputRootContext, provideTagsInputRootContext] = /*#__PURE__*/ createContext("TagsInputRoot");
var TagsInputRoot_default = /* @__PURE__ */ defineComponent({
	__name: "TagsInputRoot",
	props: {
		modelValue: {
			type: [Array, null],
			required: false
		},
		defaultValue: {
			type: Array,
			required: false,
			default: () => []
		},
		addOnPaste: {
			type: Boolean,
			required: false
		},
		addOnTab: {
			type: Boolean,
			required: false
		},
		addOnBlur: {
			type: Boolean,
			required: false
		},
		duplicate: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		delimiter: {
			type: null,
			required: false,
			default: ","
		},
		dir: {
			type: String,
			required: false
		},
		max: {
			type: Number,
			required: false,
			default: 0
		},
		id: {
			type: String,
			required: false
		},
		convertValue: {
			type: Function,
			required: false
		},
		displayValue: {
			type: Function,
			required: false,
			default: (value) => value.toString()
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"update:modelValue",
		"invalid",
		"addTag",
		"removeTag"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { addOnPaste, disabled, delimiter, max, id, dir: propDir, addOnBlur, addOnTab } = toRefs(props);
		const dir = useDirection(propDir);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue,
			passive: true,
			deep: true
		});
		const { forwardRef, currentElement } = useForwardExpose();
		const { focused } = useFocusWithin(currentElement);
		const isFormControl = useFormControl(currentElement);
		const { getItems, CollectionSlot } = useCollection({ isProvider: true });
		const selectedElement = ref();
		const isInvalidInput = ref(false);
		const currentModelValue = computed(() => Array.isArray(modelValue.value) ? [...modelValue.value] : []);
		function handleRemoveTag(index) {
			if (index !== -1) {
				const removedValue = modelValue.value[index];
				modelValue.value = modelValue.value.filter((_, i) => i !== index);
				emits("removeTag", removedValue);
			}
		}
		provideTagsInputRootContext({
			modelValue,
			onAddValue: (_payload) => {
				const array = [...currentModelValue.value];
				const modelValueIsObject = array.length > 0 && typeof array[0] === "object";
				const defaultValueIsObject = array.length > 0 && typeof props.defaultValue[0] === "object";
				if ((modelValueIsObject || defaultValueIsObject) && typeof props.convertValue !== "function") throw new Error("You must provide a `convertValue` function when using objects as values.");
				const payload = props.convertValue ? props.convertValue(_payload) : _payload;
				if (array.length >= max.value && !!max.value) {
					emits("invalid", payload);
					return false;
				}
				if (props.duplicate) {
					modelValue.value = [...array, payload];
					emits("addTag", payload);
					return true;
				} else if (!array.includes(payload)) {
					modelValue.value = [...array, payload];
					emits("addTag", payload);
					return true;
				} else isInvalidInput.value = true;
				emits("invalid", payload);
				return false;
			},
			onRemoveValue: handleRemoveTag,
			onInputKeydown: (event) => {
				if (event.isComposing) return;
				const target = event.target;
				const collection = getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "");
				if (!collection.length) return;
				const lastTag = collection.at(-1);
				switch (event.key) {
					case "Delete":
					case "Backspace":
						if (target.selectionStart !== 0 || target.selectionEnd !== 0) break;
						if (selectedElement.value) {
							const index = collection.findIndex((i) => i === selectedElement.value);
							const selectedItem = getItems().find((i) => i.ref === selectedElement.value);
							handleRemoveTag(selectedItem ? modelValue.value.findIndex((v) => isEqual(v, selectedItem.value)) : -1);
							selectedElement.value = selectedElement.value === lastTag ? collection.at(index - 1) : collection.at(index + 1);
							event.preventDefault();
						} else if (event.key === "Backspace") {
							selectedElement.value = lastTag;
							event.preventDefault();
						}
						break;
					case "Home":
					case "End":
					case "ArrowRight":
					case "ArrowLeft": {
						const isArrowRight = event.key === "ArrowRight" && dir.value === "ltr" || event.key === "ArrowLeft" && dir.value === "rtl";
						const isArrowLeft = !isArrowRight;
						if (target.selectionStart !== 0 || target.selectionEnd !== 0) break;
						if (isArrowLeft && !selectedElement.value) {
							selectedElement.value = lastTag;
							event.preventDefault();
						} else if (isArrowRight && lastTag && selectedElement.value === lastTag) {
							selectedElement.value = void 0;
							event.preventDefault();
						} else if (selectedElement.value) {
							const el = useArrowNavigation(event, selectedElement.value, void 0, {
								itemsArray: collection,
								loop: false,
								dir: dir.value
							});
							if (el) selectedElement.value = el;
							event.preventDefault();
						}
						break;
					}
					case "ArrowUp":
					case "ArrowDown":
						if (selectedElement.value) event.preventDefault();
						break;
					default: selectedElement.value = void 0;
				}
			},
			selectedElement,
			isInvalidInput,
			addOnPaste,
			addOnBlur,
			addOnTab,
			dir,
			disabled,
			delimiter,
			max,
			id,
			displayValue: props.displayValue
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionSlot), null, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					dir: unref(dir),
					as: __props.as,
					"as-child": __props.asChild,
					"data-invalid": isInvalidInput.value ? "" : void 0,
					"data-disabled": unref(disabled) ? "" : void 0,
					"data-focused": unref(focused) ? "" : void 0
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) }), unref(isFormControl) && __props.name ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
						key: 0,
						name: __props.name,
						value: unref(modelValue),
						required: __props.required,
						disabled: unref(disabled)
					}, null, 8, [
						"name",
						"value",
						"required",
						"disabled"
					])) : createCommentVNode("v-if", true)]),
					_: 3
				}, 8, [
					"dir",
					"as",
					"as-child",
					"data-invalid",
					"data-disabled",
					"data-focused"
				])]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/TagsInput/TagsInputInput.js
var TagsInputInput_default = /* @__PURE__ */ defineComponent({
	__name: "TagsInputInput",
	props: {
		placeholder: {
			type: String,
			required: false
		},
		autoFocus: {
			type: Boolean,
			required: false
		},
		maxLength: {
			type: Number,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "input"
		}
	},
	setup(__props) {
		const context = injectTagsInputRootContext();
		const { forwardRef} = useForwardExpose();
		function handleBlur(event) {
			context.selectedElement.value = void 0;
			if (!context.addOnBlur.value) return;
			const target = event.target;
			const relatedTarget = event.relatedTarget;
			const controlledId = target.getAttribute("aria-controls");
			if (controlledId && relatedTarget?.closest(`#${CSS.escape(controlledId)}`)) return;
			if (!target.value) return;
			if (context.onAddValue(target.value)) target.value = "";
		}
		function handleTab(event) {
			if (!context.addOnTab.value) return;
			return handleCustomKeydown(event);
		}
		function handleEnter(event) {
			return handleCustomKeydown(event, { preventImplicitSubmit: true });
		}
		const { isComposing, handleCompositionStart, handleCompositionEnd } = useComposing();
		async function handleCustomKeydown(event, { preventImplicitSubmit = false } = {}) {
			if (isComposing.value) return;
			let isPreventedByOthers = event.defaultPrevented;
			const nativePreventDefault = event.preventDefault.bind(event);
			event.preventDefault = () => {
				isPreventedByOthers = true;
				nativePreventDefault();
			};
			const target = event.target;
			if (preventImplicitSubmit && target.value && !isPreventedByOthers) nativePreventDefault();
			await nextTick();
			if (isPreventedByOthers) return;
			if (!target.value) return;
			if (context.onAddValue(target.value)) target.value = "";
			nativePreventDefault();
		}
		function handleInput(event) {
			if (isComposing.value) return;
			context.isInvalidInput.value = false;
			if (event.data === null) return;
			const delimiter = context.delimiter.value;
			if (delimiter === event.data || delimiter instanceof RegExp && delimiter.test(event.data)) {
				const target = event.target;
				target.value = target.value.replace(delimiter, "");
				if (target.value.trim() === "") {
					target.value = "";
					return;
				}
				if (context.onAddValue(target.value)) target.value = "";
			}
		}
		function handleInputKeydown(event) {
			if (isComposing.value) return;
			context.onInputKeydown(event);
		}
		function handlePaste(event) {
			if (context.addOnPaste.value) {
				event.preventDefault();
				const clipboardData = event.clipboardData;
				if (!clipboardData) return;
				const value = clipboardData.getData("text");
				if (context.delimiter.value) value.split(context.delimiter.value).forEach((v) => {
					context.onAddValue(v);
				});
				else context.onAddValue(value);
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				id: unref(context).id?.value,
				ref: unref(forwardRef),
				type: "text",
				autocomplete: "off",
				autocorrect: "off",
				autocapitalize: "off",
				as: __props.as,
				"as-child": __props.asChild,
				maxlength: __props.maxLength,
				placeholder: __props.placeholder,
				disabled: unref(context).disabled.value,
				"data-invalid": unref(context).isInvalidInput.value ? "" : void 0,
				onInput: handleInput,
				onKeydown: [
					withKeys(handleEnter, ["enter"]),
					withKeys(handleTab, ["tab"]),
					handleInputKeydown
				],
				onBlur: handleBlur,
				onCompositionstart: unref(handleCompositionStart),
				onCompositionend: unref(handleCompositionEnd),
				onPaste: handlePaste
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"id",
				"as",
				"as-child",
				"maxlength",
				"placeholder",
				"disabled",
				"data-invalid",
				"onCompositionstart",
				"onCompositionend"
			]);
		};
	}
});
// node_modules/reka-ui/dist/TagsInput/TagsInputItem.js
var [injectTagsInputItemContext, provideTagsInputItemContext] = /*#__PURE__*/ createContext("TagsInputItem");
var TagsInputItem_default = /* @__PURE__ */ defineComponent({
	__name: "TagsInputItem",
	props: {
		value: {
			type: null,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const { value } = toRefs(props);
		const context = injectTagsInputRootContext();
		const { forwardRef, currentElement } = useForwardExpose();
		const { CollectionItem } = useCollection();
		const isSelected = computed(() => context.selectedElement.value === currentElement.value);
		const disabled = computed(() => props.disabled || context.disabled.value);
		const itemContext = provideTagsInputItemContext({
			value,
			isSelected,
			disabled,
			textId: "",
			displayValue: computed(() => context.displayValue(value.value))
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionItem), { value: unref(value) }, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					as: __props.as,
					"as-child": __props.asChild,
					"aria-labelledby": unref(itemContext).textId,
					"aria-current": isSelected.value,
					"data-disabled": disabled.value ? "" : void 0,
					"data-state": isSelected.value ? "active" : "inactive"
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"as",
					"as-child",
					"aria-labelledby",
					"aria-current",
					"data-disabled",
					"data-state"
				])]),
				_: 3
			}, 8, ["value"]);
		};
	}
});
// node_modules/reka-ui/dist/TagsInput/TagsInputItemDelete.js
var TagsInputItemDelete_default = /* @__PURE__ */ defineComponent({
	__name: "TagsInputItemDelete",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const context = injectTagsInputRootContext();
		const itemContext = injectTagsInputItemContext();
		const disabled = computed(() => itemContext.disabled?.value || context.disabled.value);
		function handleDelete() {
			if (disabled.value) return;
			const index = context.modelValue.value.findIndex((i) => isEqual(i, itemContext.value.value));
			context.onRemoveValue(index);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ tabindex: "-1" }, props, {
				"aria-labelledby": unref(itemContext).textId,
				"aria-current": unref(itemContext).isSelected.value,
				"data-state": unref(itemContext).isSelected.value ? "active" : "inactive",
				"data-disabled": disabled.value ? "" : void 0,
				type: __props.as === "button" ? "button" : void 0,
				onClick: handleDelete
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"aria-labelledby",
				"aria-current",
				"data-state",
				"data-disabled",
				"type"
			]);
		};
	}
});
// node_modules/reka-ui/dist/TagsInput/TagsInputItemText.js
var TagsInputItemText_default = /* @__PURE__ */ defineComponent({
	__name: "TagsInputItemText",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const props = __props;
		const itemContext = injectTagsInputItemContext();
		useForwardExpose();
		itemContext.textId ||= useId$1(void 0, "reka-tags-input-item-text");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(itemContext).textId }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(unref(itemContext).displayValue.value), 1)])]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
// node_modules/@nuxt/ui/dist/runtime/composables/useFileUpload.js
function useFileUpload(options) {
	const inputRef = ref();
	const dropzoneRef = ref();
	const isDragging = ref(false);
	const fileDialog = reactive({ open: () => {} });
	function open() {
		fileDialog.open();
	}
	return {
		isDragging,
		open,
		inputRef,
		dropzoneRef
	};
}
// node_modules/@nuxt/ui/dist/runtime/utils/file.js
function formatFileSize(bytes) {
	if (bytes === void 0) return void 0;
	if (bytes === 0) return "0B";
	const k = 1024;
	const sizes = [
		"B",
		"KB",
		"MB",
		"GB",
		"TB"
	];
	const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1);
	const value = bytes / Math.pow(k, i);
	return `${i === 0 ? value.toString() : value.toFixed(0)}${sizes[i]}`;
}
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Ffile-upload.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ffile_upload_default = {
	"slots": {
		"root": "relative flex flex-col",
		"base": ["w-full flex-1 bg-default border border-default flex flex-col gap-2 items-stretch justify-center rounded-lg focus-visible:outline-3", "transition-[background] ease-out"],
		"wrapper": "flex flex-col items-center justify-center text-center",
		"icon": "shrink-0",
		"avatar": "shrink-0",
		"label": "font-medium text-default mt-2",
		"description": "text-muted mt-1",
		"actions": "flex flex-wrap gap-1.5 shrink-0 mt-4",
		"files": "",
		"file": "relative",
		"fileLeadingAvatar": "shrink-0",
		"fileWrapper": "flex flex-col min-w-0",
		"fileName": "text-default truncate",
		"fileSize": "text-muted truncate",
		"fileTrailingButton": ""
	},
	"variants": {
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"variant": {
			"area": {
				"wrapper": "px-4 py-3",
				"base": "p-4"
			},
			"button": {}
		},
		"size": {
			"xs": {
				"base": "text-xs",
				"icon": "size-4",
				"file": "text-xs px-2 py-1 gap-1",
				"fileWrapper": "flex-row gap-1"
			},
			"sm": {
				"base": "text-xs",
				"icon": "size-4",
				"file": "text-xs px-2.5 py-1.5 gap-1.5",
				"fileWrapper": "flex-row gap-1"
			},
			"md": {
				"base": "text-sm",
				"icon": "size-5",
				"file": "text-xs px-2.5 py-1.5 gap-1.5"
			},
			"lg": {
				"base": "text-sm",
				"icon": "size-5",
				"file": "text-sm px-3 py-2 gap-2",
				"fileSize": "text-xs"
			},
			"xl": {
				"base": "text-base",
				"icon": "size-6",
				"file": "text-sm px-3 py-2 gap-2"
			}
		},
		"layout": {
			"list": {
				"root": "gap-2 items-start",
				"files": "flex flex-col w-full gap-2",
				"file": "min-w-0 flex items-center border border-default rounded-md w-full",
				"fileTrailingButton": "ms-auto"
			},
			"grid": {
				"fileWrapper": "hidden",
				"fileLeadingAvatar": "size-full rounded-lg",
				"fileTrailingButton": "absolute -top-1.5 -end-1.5 p-0 rounded-full border-2 border-bg"
			}
		},
		"position": {
			"inside": "",
			"outside": ""
		},
		"dropzone": { "true": "border-dashed data-[dragging=true]:bg-elevated/25" },
		"interactive": { "true": "" },
		"highlight": { "true": "" },
		"multiple": { "true": "" },
		"disabled": { "true": "cursor-not-allowed opacity-75" }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"class": "outline-primary/25 focus-visible:outline-3 focus-visible:border-primary"
		},
		{
			"color": "secondary",
			"class": "outline-secondary/25 focus-visible:outline-3 focus-visible:border-secondary"
		},
		{
			"color": "success",
			"class": "outline-success/25 focus-visible:outline-3 focus-visible:border-success"
		},
		{
			"color": "info",
			"class": "outline-info/25 focus-visible:outline-3 focus-visible:border-info"
		},
		{
			"color": "warning",
			"class": "outline-warning/25 focus-visible:outline-3 focus-visible:border-warning"
		},
		{
			"color": "error",
			"class": "outline-error/25 focus-visible:outline-3 focus-visible:border-error"
		},
		{
			"color": "primary",
			"highlight": true,
			"class": "border-primary"
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": "border-secondary"
		},
		{
			"color": "success",
			"highlight": true,
			"class": "border-success"
		},
		{
			"color": "info",
			"highlight": true,
			"class": "border-info"
		},
		{
			"color": "warning",
			"highlight": true,
			"class": "border-warning"
		},
		{
			"color": "error",
			"highlight": true,
			"class": "border-error"
		},
		{
			"color": "neutral",
			"class": "outline-inverted/25 focus-visible:outline-3 focus-visible:border-inverted"
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": "border-inverted"
		},
		{
			"size": "xs",
			"layout": "list",
			"class": { "fileTrailingButton": "-me-1" }
		},
		{
			"size": "sm",
			"layout": "list",
			"class": { "fileTrailingButton": "-me-1.5" }
		},
		{
			"size": "md",
			"layout": "list",
			"class": { "fileTrailingButton": "-me-1.5" }
		},
		{
			"size": "lg",
			"layout": "list",
			"class": { "fileTrailingButton": "-me-2" }
		},
		{
			"size": "xl",
			"layout": "list",
			"class": { "fileTrailingButton": "-me-2" }
		},
		{
			"variant": "button",
			"size": "xs",
			"class": { "base": "p-1" }
		},
		{
			"variant": "button",
			"size": "sm",
			"class": { "base": "p-1.5" }
		},
		{
			"variant": "button",
			"size": "md",
			"class": { "base": "p-1.5" }
		},
		{
			"variant": "button",
			"size": "lg",
			"class": { "base": "p-2" }
		},
		{
			"variant": "button",
			"size": "xl",
			"class": { "base": "p-2" }
		},
		{
			"layout": "grid",
			"multiple": true,
			"class": {
				"files": "grid grid-cols-2 md:grid-cols-3 gap-4 w-full",
				"file": "p-0 aspect-square"
			}
		},
		{
			"layout": "grid",
			"multiple": false,
			"class": { "file": "absolute inset-0 p-0" }
		},
		{
			"interactive": true,
			"disabled": false,
			"class": "hover:bg-elevated/25"
		}
	],
	"defaultVariants": {
		"color": "primary",
		"variant": "area",
		"size": "md"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue
var _sfc_main$5 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UFileUpload",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		as: {
			type: null,
			required: false
		},
		id: {
			type: String,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		icon: {
			type: [String, Boolean],
			required: false,
			skipCheck: true
		},
		label: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		color: {
			type: null,
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
		layout: {
			type: null,
			required: false,
			default: "grid"
		},
		position: {
			type: null,
			required: false,
			default: "outside"
		},
		highlight: {
			type: Boolean,
			required: false
		},
		accept: {
			type: String,
			required: false,
			default: "*"
		},
		modelValue: {
			type: null,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false,
			default: false
		},
		reset: {
			type: Boolean,
			required: false,
			default: false
		},
		dropzone: {
			type: Boolean,
			required: false,
			default: true
		},
		interactive: {
			type: Boolean,
			required: false,
			default: true
		},
		required: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		fileIcon: {
			type: null,
			required: false
		},
		fileImage: {
			type: Boolean,
			required: false,
			default: true
		},
		fileDelete: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		fileDeleteIcon: {
			type: null,
			required: false
		},
		preview: {
			type: Boolean,
			required: false,
			default: true
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	}, {
		"modelValue": { type: null },
		"modelModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["change", "reject"], ["update:modelValue"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const modelValue = useModel(__props, "modelValue");
		const props = useComponentProps("fileUpload", _props);
		const appConfig = useAppConfig();
		const { t } = useLocale();
		const [DefineFilesTemplate, ReuseFilesTemplate] = createReusableTemplate();
		const { accept, multiple, reset } = toRefs(_props);
		const { isDragging, open, inputRef, dropzoneRef } = useFileUpload();
		const { emitFormInput, emitFormChange, id, name, size: formFieldSize, color: formFieldColor, highlight: formFieldHighlight, disabled: formFieldDisabled, ariaAttrs } = useFormField(_props);
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const variant = computed(() => props.multiple ? "area" : props.variant);
		const layout = computed(() => props.variant === "button" && !props.multiple ? "grid" : props.layout);
		const position = computed(() => {
			if (layout.value === "grid" && props.multiple) return "inside";
			if (variant.value === "button") return "outside";
			return props.position;
		});
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ffile_upload_default,
			...appConfig.ui?.fileUpload || {}
		})({
			dropzone: props.dropzone,
			interactive: props.interactive,
			color: color.value,
			size: size.value,
			variant: variant.value,
			layout: layout.value,
			position: position.value,
			multiple: props.multiple,
			highlight: highlight.value,
			disabled: disabled.value
		}));
		function getFileAvatar(file) {
			return props.fileImage ? file.avatar : void 0;
		}
		function getFilePreview(file) {
			if (!props.fileImage) return void 0;
			if (file.avatar?.src) return file.avatar.src;
			if (!(file instanceof File)) return void 0;
			return URL.createObjectURL(file);
		}
		function setModelValue(value) {
			modelValue.value = value;
		}
		function onUpdate(files, reset2 = false) {
			if (disabled.value) return;
			if (props.multiple) setModelValue([...reset2 ? [] : modelValue.value || [], ...files]);
			else setModelValue(files[0] ?? null);
			const event = new Event("change", { target: { value: modelValue.value } });
			emits("change", event);
			emitFormChange();
			emitFormInput();
		}
		function removeFile(index) {
			if (!modelValue.value) return;
			if (!props.multiple || index === void 0) {
				onUpdate([], true);
				dropzoneRef.value?.focus();
				return;
			}
			const files = [...modelValue.value];
			files.splice(index, 1);
			onUpdate(files, true);
			dropzoneRef.value?.focus();
		}
		watch(modelValue, (newValue) => {
			if ((props.multiple ? !newValue?.length : !newValue) && inputRef.value?.$el) inputRef.value.$el.value = "";
		});
		__expose({
			inputRef: toRef(() => inputRef.value?.$el),
			dropzoneRef
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(DefineFilesTemplate), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(props).preview && modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true)) {
							_push(`<!--[-->`);
							ssrRenderSlot(_ctx.$slots, "files-top", {
								files: modelValue.value,
								open: unref(open),
								removeFile
							}, null, _push, _parent, _scopeId);
							_push(`<div data-slot="files" class="${ssrRenderClass(ui.value.files({ class: unref(props).ui?.files }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "files", {
								files: modelValue.value,
								removeFile
							}, () => {
								_push(`<!--[-->`);
								ssrRenderList$2(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
									_push(`<div data-slot="file" class="${ssrRenderClass(ui.value.file({ class: unref(props).ui?.file }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "file", {
										file,
										index,
										removeFile
									}, () => {
										ssrRenderSlot(_ctx.$slots, "file-leading", {
											file,
											index,
											ui: ui.value
										}, () => {
											_push(ssrRenderComponent(_sfc_main$3$1, mergeProps({
												as: { img: "img" },
												alt: file.name,
												icon: unref(props).fileIcon || unref(appConfig).ui.icons.file,
												size: size.value
											}, { ref_for: true }, getFileAvatar(file), {
												src: getFilePreview(file),
												"data-slot": "fileLeadingAvatar",
												class: ui.value.fileLeadingAvatar({ class: unref(props).ui?.fileLeadingAvatar })
											}), null, _parent, _scopeId));
										}, _push, _parent, _scopeId);
										_push(`<div data-slot="fileWrapper" class="${ssrRenderClass(ui.value.fileWrapper({ class: unref(props).ui?.fileWrapper }))}"${_scopeId}><span data-slot="fileName" class="${ssrRenderClass(ui.value.fileName({ class: unref(props).ui?.fileName }))}"${_scopeId}>`);
										ssrRenderSlot(_ctx.$slots, "file-name", {
											file,
											index
										}, () => {
											_push(`${ssrInterpolate(file.name)}`);
										}, _push, _parent, _scopeId);
										_push(`</span><span data-slot="fileSize" class="${ssrRenderClass(ui.value.fileSize({ class: unref(props).ui?.fileSize }))}"${_scopeId}>`);
										ssrRenderSlot(_ctx.$slots, "file-size", {
											file,
											index
										}, () => {
											_push(`${ssrInterpolate(unref(formatFileSize)(file.size))}`);
										}, _push, _parent, _scopeId);
										_push(`</span></div>`);
										ssrRenderSlot(_ctx.$slots, "file-trailing", {
											file,
											index,
											ui: ui.value,
											removeFile
										}, () => {
											if (unref(props).fileDelete) _push(ssrRenderComponent(_sfc_main$6, mergeProps({ color: "neutral" }, { ref_for: true }, {
												...layout.value === "grid" ? {
													variant: "solid",
													size: "xs"
												} : {
													variant: "link",
													size: size.value
												},
												...typeof unref(props).fileDelete === "object" ? unref(props).fileDelete : void 0
											}, {
												"aria-label": unref(t)("fileUpload.removeFile", { filename: file.name }),
												"trailing-icon": unref(props).fileDeleteIcon || unref(appConfig).ui.icons.close,
												"data-slot": "fileTrailingButton",
												class: ui.value.fileTrailingButton({ class: unref(props).ui?.fileTrailingButton }),
												onClick: ($event) => removeFile(index)
											}), null, _parent, _scopeId));
											else _push(`<!---->`);
										}, _push, _parent, _scopeId);
									}, _push, _parent, _scopeId);
									_push(`</div>`);
								});
								_push(`<!--]-->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
							ssrRenderSlot(_ctx.$slots, "files-bottom", {
								files: modelValue.value,
								open: unref(open),
								removeFile
							}, null, _push, _parent, _scopeId);
							_push(`<!--]-->`);
						} else _push(`<!---->`);
					} else return [unref(props).preview && modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
						renderSlot(_ctx.$slots, "files-top", {
							files: modelValue.value,
							open: unref(open),
							removeFile
						}),
						createVNode("div", {
							"data-slot": "files",
							class: ui.value.files({ class: unref(props).ui?.files })
						}, [renderSlot(_ctx.$slots, "files", {
							files: modelValue.value,
							removeFile
						}, () => [(openBlock(true), createBlock(Fragment, null, renderList$2(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
							return openBlock(), createBlock("div", {
								key: file.name,
								"data-slot": "file",
								class: ui.value.file({ class: unref(props).ui?.file })
							}, [renderSlot(_ctx.$slots, "file", {
								file,
								index,
								removeFile
							}, () => [
								renderSlot(_ctx.$slots, "file-leading", {
									file,
									index,
									ui: ui.value
								}, () => [createVNode(_sfc_main$3$1, mergeProps({
									as: { img: "img" },
									alt: file.name,
									icon: unref(props).fileIcon || unref(appConfig).ui.icons.file,
									size: size.value
								}, { ref_for: true }, getFileAvatar(file), {
									src: getFilePreview(file),
									"data-slot": "fileLeadingAvatar",
									class: ui.value.fileLeadingAvatar({ class: unref(props).ui?.fileLeadingAvatar })
								}), null, 16, [
									"alt",
									"icon",
									"size",
									"src",
									"class"
								])]),
								createVNode("div", {
									"data-slot": "fileWrapper",
									class: ui.value.fileWrapper({ class: unref(props).ui?.fileWrapper })
								}, [createVNode("span", {
									"data-slot": "fileName",
									class: ui.value.fileName({ class: unref(props).ui?.fileName })
								}, [renderSlot(_ctx.$slots, "file-name", {
									file,
									index
								}, () => [createTextVNode(toDisplayString(file.name), 1)])], 2), createVNode("span", {
									"data-slot": "fileSize",
									class: ui.value.fileSize({ class: unref(props).ui?.fileSize })
								}, [renderSlot(_ctx.$slots, "file-size", {
									file,
									index
								}, () => [createTextVNode(toDisplayString(unref(formatFileSize)(file.size)), 1)])], 2)], 2),
								renderSlot(_ctx.$slots, "file-trailing", {
									file,
									index,
									ui: ui.value,
									removeFile
								}, () => [unref(props).fileDelete ? (openBlock(), createBlock(_sfc_main$6, mergeProps({
									key: 0,
									color: "neutral"
								}, { ref_for: true }, {
									...layout.value === "grid" ? {
										variant: "solid",
										size: "xs"
									} : {
										variant: "link",
										size: size.value
									},
									...typeof unref(props).fileDelete === "object" ? unref(props).fileDelete : void 0
								}, {
									"aria-label": unref(t)("fileUpload.removeFile", { filename: file.name }),
									"trailing-icon": unref(props).fileDeleteIcon || unref(appConfig).ui.icons.close,
									"data-slot": "fileTrailingButton",
									class: ui.value.fileTrailingButton({ class: unref(props).ui?.fileTrailingButton }),
									onClick: withModifiers(($event) => removeFile(index), ["stop", "prevent"])
								}), null, 16, [
									"aria-label",
									"trailing-icon",
									"class",
									"onClick"
								])) : createCommentVNode("", true)])
							])], 2);
						}), 128))])], 2),
						renderSlot(_ctx.$slots, "files-bottom", {
							files: modelValue.value,
							open: unref(open),
							removeFile
						})
					], 64)) : createCommentVNode("", true)];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(unref(Primitive), {
				as: unref(props).as,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "default", {
							open: unref(open),
							removeFile,
							ui: ui.value
						}, () => {
							renderVNode(_push, createVNode(resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
								ref_key: "dropzoneRef",
								ref: dropzoneRef,
								type: variant.value === "button" ? "button" : void 0,
								role: variant.value === "button" ? void 0 : "button",
								disabled: variant.value === "button" ? disabled.value : void 0,
								"aria-disabled": variant.value === "button" ? void 0 : disabled.value || void 0,
								"data-dragging": unref(isDragging),
								"data-slot": "base",
								class: ui.value.base({ class: unref(props).ui?.base }),
								tabindex: unref(props).interactive && !disabled.value ? 0 : -1,
								onClick: ($event) => unref(props).interactive && !disabled.value && unref(open)(),
								onKeydown: () => {},
								onKeyup: ($event) => unref(props).interactive && !disabled.value && unref(open)()
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										if (position.value === "inside") _push(ssrRenderComponent(unref(ReuseFilesTemplate), null, null, _parent, _scopeId));
										else _push(`<!---->`);
										if (position.value === "inside" ? !unref(props).preview || (unref(multiple) ? !modelValue.value?.length : !modelValue.value) : true) {
											_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
											ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
												if (unref(props).icon !== false) {
													_push(`<!--[-->`);
													if (variant.value === "button") _push(ssrRenderComponent(_sfc_main$5$1, {
														name: unref(props).icon ?? unref(appConfig).ui.icons.upload,
														"data-slot": "icon",
														class: ui.value.icon({ class: unref(props).ui?.icon })
													}, null, _parent, _scopeId));
													else _push(ssrRenderComponent(_sfc_main$3$1, {
														icon: unref(props).icon ?? unref(appConfig).ui.icons.upload,
														size: size.value,
														"data-slot": "avatar",
														class: ui.value.avatar({ class: unref(props).ui?.avatar })
													}, null, _parent, _scopeId));
													_push(`<!--]-->`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											if (variant.value !== "button") {
												_push(`<!--[-->`);
												if (unref(props).label || !!slots.label) {
													_push(`<div data-slot="label" class="${ssrRenderClass(ui.value.label({ class: unref(props).ui?.label }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "label", {}, () => {
														_push(`${ssrInterpolate(unref(props).label)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if (unref(props).description || !!slots.description) {
													_push(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "description", {}, () => {
														_push(`${ssrInterpolate(unref(props).description)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if (!!slots.actions) {
													_push(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: unref(props).ui?.actions }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "actions", {
														files: modelValue.value,
														open: unref(open),
														removeFile
													}, null, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												_push(`<!--]-->`);
											} else _push(`<!---->`);
											_push(`</div>`);
										} else _push(`<!---->`);
									} else return [position.value === "inside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true), (position.value === "inside" ? !unref(props).preview || (unref(multiple) ? !modelValue.value?.length : !modelValue.value) : true) ? (openBlock(), createBlock("div", {
										key: 1,
										"data-slot": "wrapper",
										class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
									}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).icon !== false ? (openBlock(), createBlock(Fragment, { key: 0 }, [variant.value === "button" ? (openBlock(), createBlock(_sfc_main$5$1, {
										key: 0,
										name: unref(props).icon ?? unref(appConfig).ui.icons.upload,
										"data-slot": "icon",
										class: ui.value.icon({ class: unref(props).ui?.icon })
									}, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$3$1, {
										key: 1,
										icon: unref(props).icon ?? unref(appConfig).ui.icons.upload,
										size: size.value,
										"data-slot": "avatar",
										class: ui.value.avatar({ class: unref(props).ui?.avatar })
									}, null, 8, [
										"icon",
										"size",
										"class"
									]))], 64)) : createCommentVNode("", true)]), variant.value !== "button" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
										unref(props).label || !!slots.label ? (openBlock(), createBlock("div", {
											key: 0,
											"data-slot": "label",
											class: ui.value.label({ class: unref(props).ui?.label })
										}, [renderSlot(_ctx.$slots, "label", {}, () => [createTextVNode(toDisplayString(unref(props).label), 1)])], 2)) : createCommentVNode("", true),
										unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
											key: 1,
											"data-slot": "description",
											class: ui.value.description({ class: unref(props).ui?.description })
										}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true),
										!!slots.actions ? (openBlock(), createBlock("div", {
											key: 2,
											"data-slot": "actions",
											class: ui.value.actions({ class: unref(props).ui?.actions })
										}, [renderSlot(_ctx.$slots, "actions", {
											files: modelValue.value,
											open: unref(open),
											removeFile
										})], 2)) : createCommentVNode("", true)
									], 64)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)];
								}),
								_: 3
							}), _parent, _scopeId);
							if (position.value === "outside") _push(ssrRenderComponent(unref(ReuseFilesTemplate), null, null, _parent, _scopeId));
							else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(ssrRenderComponent(unref(VisuallyHidden_default), mergeProps({
							id: unref(id),
							ref_key: "inputRef",
							ref: inputRef,
							as: "input",
							type: "file",
							feature: "fully-hidden",
							name: unref(name),
							accept: unref(accept),
							multiple: unref(multiple),
							required: unref(props).required,
							disabled: disabled.value
						}, {
							..._ctx.$attrs,
							...unref(ariaAttrs),
							"data-slot": void 0
						}), null, _parent, _scopeId));
					} else return [renderSlot(_ctx.$slots, "default", {
						open: unref(open),
						removeFile,
						ui: ui.value
					}, () => [(openBlock(), createBlock(resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
						ref_key: "dropzoneRef",
						ref: dropzoneRef,
						type: variant.value === "button" ? "button" : void 0,
						role: variant.value === "button" ? void 0 : "button",
						disabled: variant.value === "button" ? disabled.value : void 0,
						"aria-disabled": variant.value === "button" ? void 0 : disabled.value || void 0,
						"data-dragging": unref(isDragging),
						"data-slot": "base",
						class: ui.value.base({ class: unref(props).ui?.base }),
						tabindex: unref(props).interactive && !disabled.value ? 0 : -1,
						onClick: ($event) => unref(props).interactive && !disabled.value && unref(open)(),
						onKeydown: withKeys(withModifiers(() => {}, ["prevent"]), ["space"]),
						onKeyup: withKeys(($event) => unref(props).interactive && !disabled.value && unref(open)(), ["enter", "space"])
					}, {
						default: withCtx(() => [position.value === "inside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true), (position.value === "inside" ? !unref(props).preview || (unref(multiple) ? !modelValue.value?.length : !modelValue.value) : true) ? (openBlock(), createBlock("div", {
							key: 1,
							"data-slot": "wrapper",
							class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
						}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).icon !== false ? (openBlock(), createBlock(Fragment, { key: 0 }, [variant.value === "button" ? (openBlock(), createBlock(_sfc_main$5$1, {
							key: 0,
							name: unref(props).icon ?? unref(appConfig).ui.icons.upload,
							"data-slot": "icon",
							class: ui.value.icon({ class: unref(props).ui?.icon })
						}, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$3$1, {
							key: 1,
							icon: unref(props).icon ?? unref(appConfig).ui.icons.upload,
							size: size.value,
							"data-slot": "avatar",
							class: ui.value.avatar({ class: unref(props).ui?.avatar })
						}, null, 8, [
							"icon",
							"size",
							"class"
						]))], 64)) : createCommentVNode("", true)]), variant.value !== "button" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
							unref(props).label || !!slots.label ? (openBlock(), createBlock("div", {
								key: 0,
								"data-slot": "label",
								class: ui.value.label({ class: unref(props).ui?.label })
							}, [renderSlot(_ctx.$slots, "label", {}, () => [createTextVNode(toDisplayString(unref(props).label), 1)])], 2)) : createCommentVNode("", true),
							unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
								key: 1,
								"data-slot": "description",
								class: ui.value.description({ class: unref(props).ui?.description })
							}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true),
							!!slots.actions ? (openBlock(), createBlock("div", {
								key: 2,
								"data-slot": "actions",
								class: ui.value.actions({ class: unref(props).ui?.actions })
							}, [renderSlot(_ctx.$slots, "actions", {
								files: modelValue.value,
								open: unref(open),
								removeFile
							})], 2)) : createCommentVNode("", true)
						], 64)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
						_: 3
					}, 40, [
						"type",
						"role",
						"disabled",
						"aria-disabled",
						"data-dragging",
						"class",
						"tabindex",
						"onClick",
						"onKeydown",
						"onKeyup"
					])), position.value === "outside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true)]), createVNode(unref(VisuallyHidden_default), mergeProps({
						id: unref(id),
						ref_key: "inputRef",
						ref: inputRef,
						as: "input",
						type: "file",
						feature: "fully-hidden",
						name: unref(name),
						accept: unref(accept),
						multiple: unref(multiple),
						required: unref(props).required,
						disabled: disabled.value
					}, {
						..._ctx.$attrs,
						...unref(ariaAttrs),
						"data-slot": void 0
					}), null, 16, [
						"id",
						"name",
						"accept",
						"multiple",
						"required",
						"disabled"
					])];
				}),
				_: 3
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$6 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fselect.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fselect_default = {
	"slots": {
		"base": ["relative group rounded-md inline-flex items-center disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"],
		"leading": "absolute inset-y-0 start-0 flex items-center",
		"leadingIcon": "shrink-0 text-dimmed",
		"leadingAvatar": "shrink-0",
		"leadingAvatarSize": "",
		"trailing": "absolute inset-y-0 end-0 flex items-center",
		"trailingIcon": "shrink-0 text-dimmed",
		"value": "truncate pointer-events-none",
		"placeholder": "truncate text-dimmed",
		"arrow": "fill-bg stroke-default",
		"content": "max-h-[min(15rem,var(--reka-select-content-available-height,15rem))] w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden origin-(--reka-select-content-transform-origin) pointer-events-auto data-[state=closed]:pointer-events-none! flex flex-col",
		"viewport": "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1",
		"group": "p-1 isolate",
		"empty": "text-center text-muted",
		"label": "font-semibold text-highlighted",
		"separator": "-mx-1 my-1 h-px bg-border",
		"item": ["group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50", "transition-colors before:transition-colors"],
		"itemLeadingIcon": ["shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default", "transition-colors"],
		"itemLeadingAvatar": "shrink-0",
		"itemLeadingAvatarSize": "",
		"itemLeadingChip": "shrink-0",
		"itemLeadingChipSize": "",
		"itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
		"itemTrailingIcon": "shrink-0",
		"itemWrapper": "flex-1 flex flex-col min-w-0",
		"itemLabel": "truncate",
		"itemDescription": "truncate text-muted"
	},
	"variants": {
		"fieldGroup": {
			"horizontal": "first:not-nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-e-none not-first:nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-s-none not-first:not-nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-none focus-visible:z-[1]",
			"vertical": "first:not-nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-b-none not-first:nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-t-none not-first:not-nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-none focus-visible:z-[1]"
		},
		"size": {
			"xs": {
				"base": "px-2 py-1 text-sm/4 gap-1",
				"leading": "ps-2",
				"trailing": "pe-2",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4",
				"label": "p-1 text-[10px]/3 gap-1",
				"item": "p-1 text-xs gap-1",
				"itemLeadingIcon": "size-4",
				"itemLeadingAvatarSize": "3xs",
				"itemLeadingChip": "size-4",
				"itemLeadingChipSize": "sm",
				"itemTrailingIcon": "size-4",
				"empty": "p-2 text-xs"
			},
			"sm": {
				"base": "px-2.5 py-1.5 text-sm/4 gap-1.5",
				"leading": "ps-2.5",
				"trailing": "pe-2.5",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4",
				"label": "p-1.5 text-[10px]/3 gap-1.5",
				"item": "p-1.5 text-xs gap-1.5",
				"itemLeadingIcon": "size-4",
				"itemLeadingAvatarSize": "3xs",
				"itemLeadingChip": "size-4",
				"itemLeadingChipSize": "sm",
				"itemTrailingIcon": "size-4",
				"empty": "p-2.5 text-xs"
			},
			"md": {
				"base": "px-2.5 py-1.5 text-base/5 gap-1.5",
				"leading": "ps-2.5",
				"trailing": "pe-2.5",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5",
				"label": "p-1.5 text-xs gap-1.5",
				"item": "p-1.5 text-sm gap-1.5",
				"itemLeadingIcon": "size-5",
				"itemLeadingAvatarSize": "2xs",
				"itemLeadingChip": "size-5",
				"itemLeadingChipSize": "md",
				"itemTrailingIcon": "size-5",
				"empty": "p-2.5 text-sm"
			},
			"lg": {
				"base": "px-3 py-2 text-base/5 gap-2",
				"leading": "ps-3",
				"trailing": "pe-3",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5",
				"label": "p-2 text-xs gap-2",
				"item": "p-2 text-sm gap-2",
				"itemLeadingIcon": "size-5",
				"itemLeadingAvatarSize": "2xs",
				"itemLeadingChip": "size-5",
				"itemLeadingChipSize": "md",
				"itemTrailingIcon": "size-5",
				"empty": "p-3 text-sm"
			},
			"xl": {
				"base": "px-3 py-2 text-base gap-2",
				"leading": "ps-3",
				"trailing": "pe-3",
				"leadingIcon": "size-6",
				"leadingAvatarSize": "xs",
				"trailingIcon": "size-6",
				"label": "p-2 text-sm gap-2",
				"item": "p-2 text-base gap-2",
				"itemLeadingIcon": "size-6",
				"itemLeadingAvatarSize": "xs",
				"itemLeadingChip": "size-6",
				"itemLeadingChipSize": "lg",
				"itemTrailingIcon": "size-6",
				"empty": "p-3 text-base"
			}
		},
		"variant": {
			"outline": "text-highlighted bg-default ring ring-inset ring-accented hover:bg-elevated disabled:bg-default",
			"soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
			"subtle": "text-highlighted bg-elevated ring ring-inset ring-accented hover:bg-accented/75 disabled:bg-elevated",
			"ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
			"none": "text-highlighted bg-transparent focus:outline-none"
		},
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"leading": { "true": "" },
		"trailing": { "true": "" },
		"loading": { "true": "" },
		"highlight": { "true": "" },
		"fixed": { "false": "" },
		"type": { "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none" },
		"position": {
			"popper": { "content": "data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)]" },
			"item-aligned": { "content": "" }
		},
		"multiple": { "true": "" }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": ["outline", "subtle"],
			"class": "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			"color": "secondary",
			"variant": ["outline", "subtle"],
			"class": "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			"color": "success",
			"variant": ["outline", "subtle"],
			"class": "outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			"color": "info",
			"variant": ["outline", "subtle"],
			"class": "outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			"color": "warning",
			"variant": ["outline", "subtle"],
			"class": "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			"color": "error",
			"variant": ["outline", "subtle"],
			"class": "outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			"color": "primary",
			"variant": ["soft", "ghost"],
			"class": "outline-primary/25 focus-visible:outline-3"
		},
		{
			"color": "secondary",
			"variant": ["soft", "ghost"],
			"class": "outline-secondary/25 focus-visible:outline-3"
		},
		{
			"color": "success",
			"variant": ["soft", "ghost"],
			"class": "outline-success/25 focus-visible:outline-3"
		},
		{
			"color": "info",
			"variant": ["soft", "ghost"],
			"class": "outline-info/25 focus-visible:outline-3"
		},
		{
			"color": "warning",
			"variant": ["soft", "ghost"],
			"class": "outline-warning/25 focus-visible:outline-3"
		},
		{
			"color": "error",
			"variant": ["soft", "ghost"],
			"class": "outline-error/25 focus-visible:outline-3"
		},
		{
			"color": "primary",
			"highlight": true,
			"class": "ring ring-inset ring-primary"
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": "ring ring-inset ring-secondary"
		},
		{
			"color": "success",
			"highlight": true,
			"class": "ring ring-inset ring-success"
		},
		{
			"color": "info",
			"highlight": true,
			"class": "ring ring-inset ring-info"
		},
		{
			"color": "warning",
			"highlight": true,
			"class": "ring ring-inset ring-warning"
		},
		{
			"color": "error",
			"highlight": true,
			"class": "ring ring-inset ring-error"
		},
		{
			"color": "neutral",
			"variant": ["outline", "subtle"],
			"class": "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			"color": "neutral",
			"variant": ["soft", "ghost"],
			"class": "outline-inverted/25 focus-visible:outline-3"
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": "ring ring-inset ring-inverted"
		},
		{
			"leading": true,
			"size": "xs",
			"class": "ps-7"
		},
		{
			"leading": true,
			"size": "sm",
			"class": "ps-8"
		},
		{
			"leading": true,
			"size": "md",
			"class": "ps-9"
		},
		{
			"leading": true,
			"size": "lg",
			"class": "ps-10"
		},
		{
			"leading": true,
			"size": "xl",
			"class": "ps-11"
		},
		{
			"trailing": true,
			"size": "xs",
			"class": "pe-7"
		},
		{
			"trailing": true,
			"size": "sm",
			"class": "pe-8"
		},
		{
			"trailing": true,
			"size": "md",
			"class": "pe-9"
		},
		{
			"trailing": true,
			"size": "lg",
			"class": "pe-10"
		},
		{
			"trailing": true,
			"size": "xl",
			"class": "pe-11"
		},
		{
			"loading": true,
			"leading": true,
			"class": { "leadingIcon": "animate-spin" }
		},
		{
			"loading": true,
			"leading": false,
			"trailing": true,
			"class": { "trailingIcon": "animate-spin" }
		},
		{
			"fixed": false,
			"size": "xs",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "sm",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "md",
			"class": "md:text-sm"
		},
		{
			"fixed": false,
			"size": "lg",
			"class": "md:text-sm"
		}
	],
	"defaultVariants": {
		"size": "md",
		"color": "primary",
		"variant": "outline",
		"position": "popper"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/Select.vue
var _sfc_main$4 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "USelect",
	__ssrInlineRender: true,
	props: {
		id: {
			type: String,
			required: false
		},
		placeholder: {
			type: String,
			required: false
		},
		color: {
			type: null,
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
		trailingIcon: {
			type: null,
			required: false
		},
		selectedIcon: {
			type: null,
			required: false
		},
		content: {
			type: Object,
			required: false
		},
		arrow: {
			type: [Boolean, Object],
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		valueKey: {
			type: null,
			required: false,
			default: "value"
		},
		labelKey: {
			type: null,
			required: false,
			default: "label"
		},
		descriptionKey: {
			type: null,
			required: false,
			default: "description"
		},
		items: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		modelModifiers: {
			type: null,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		highlight: {
			type: Boolean,
			required: false
		},
		fixed: {
			type: Boolean,
			required: false
		},
		autofocus: {
			type: Boolean,
			required: false
		},
		autofocusDelay: {
			type: Number,
			required: false,
			default: 0
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		nullableValue: {
			type: String,
			required: false
		},
		autocomplete: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
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
		leading: {
			type: Boolean,
			required: false
		},
		leadingIcon: {
			type: null,
			required: false
		},
		trailing: {
			type: Boolean,
			required: false
		},
		loading: {
			type: Boolean,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		}
	},
	emits: [
		"change",
		"blur",
		"focus",
		"update:modelValue",
		"update:open"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("select", _props);
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(props, [
			"open",
			"defaultOpen",
			"disabled",
			"autocomplete",
			"required",
			"multiple",
			"nullableValue"
		], emits);
		const portalProps = usePortal(toRef(() => props.portal));
		const position = computed(() => props.content?.position ?? appConfig.ui?.select?.defaultVariants?.position ?? virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fselect_default.defaultVariants?.position);
		const contentProps = toRef(() => defu(props.content, {
			side: "bottom",
			sideOffset: 8,
			collisionPadding: 8,
			position: position.value
		}));
		const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
		const { emitFormChange, emitFormInput, emitFormBlur, emitFormFocus, size: formFieldSize, color: formFieldColor, id, name, highlight: formFieldHighlight, disabled: formFieldDisabled, ariaAttrs } = useFormField(_props);
		const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
		const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(computed(() => ({
			icon: props.icon,
			leading: props.leading,
			leadingIcon: props.leadingIcon,
			trailing: props.trailing,
			trailingIcon: props.trailingIcon ?? appConfig.ui.icons.chevronDown,
			loading: props.loading,
			loadingIcon: props.loadingIcon
		})));
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => fieldGroupSize.value ?? formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const isItemAligned = computed(() => position.value === "item-aligned");
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fselect_default,
			...appConfig.ui?.select || {}
		})({
			color: color.value,
			variant: props.variant,
			size: size.value,
			loading: props.loading,
			highlight: highlight.value,
			fixed: props.fixed,
			leading: isLeading.value || !!props.avatar || !!slots.leading,
			trailing: isTrailing.value || !!slots.trailing,
			fieldGroup: orientation.value,
			position: position.value,
			multiple: props.multiple
		}));
		const groups = computed(() => props.items?.length ? isArrayOfArray(props.items) ? props.items : [props.items] : []);
		const items = computed(() => groups.value.flatMap((group) => group));
		function displayValue(value) {
			if (props.multiple && Array.isArray(value)) {
				const displayedValues = value.map((item) => getDisplayValue(items.value, item, {
					labelKey: props.labelKey,
					valueKey: props.valueKey
				})).filter((v) => v != null && v !== "");
				return displayedValues.length > 0 ? displayedValues.join(", ") : void 0;
			}
			return getDisplayValue(items.value, value, {
				labelKey: props.labelKey,
				valueKey: props.valueKey
			});
		}
		function resolveSelectedItem(slot, value) {
			if (!slots[slot]) return;
			return getSelectedItem(items.value, value, {
				valueKey: props.valueKey,
				multiple: props.multiple
			});
		}
		const triggerRef = useTemplateRef("triggerRef");
		let autofocusTimeoutId;
		onScopeDispose(() => clearTimeout(autofocusTimeoutId));
		function onUpdate(value) {
			if (props.modelModifiers?.trim && (typeof value === "string" || value === null || value === void 0)) value = value?.trim() ?? null;
			if (props.modelModifiers?.number) value = looseToNumber(value);
			if (props.modelModifiers?.nullable) value ??= null;
			if (props.modelModifiers?.optional && !props.modelModifiers?.nullable && value !== null) value ??= void 0;
			const event = new Event("change", { target: { value } });
			emits("change", event);
			emitFormChange();
			emitFormInput();
		}
		function onUpdateOpen(value) {
			if (!value) {
				const event = new FocusEvent("blur");
				emits("blur", event);
				emitFormBlur();
			} else {
				const event = new FocusEvent("focus");
				emits("focus", event);
				emitFormFocus();
			}
		}
		function isSelectItem(item) {
			return typeof item === "object" && item !== null;
		}
		function onTriggerClick(open) {
			if (!open) triggerRef.value?.$el?.dispatchEvent(new PointerEvent("pointerdown", {
				bubbles: true,
				button: 0
			}));
		}
		function onCloseAutoFocus(event) {
			const activeElement = (void 0).activeElement;
			if (activeElement && activeElement !== (void 0).body && !event.target.contains(activeElement)) event.preventDefault();
		}
		const viewportRef = useTemplateRef("viewportRef");
		__expose({
			triggerRef: toRef(() => triggerRef.value?.$el),
			viewportRef: toRef(() => {
				const instance = viewportRef.value;
				return instance && typeof instance === "object" && "$el" in instance ? instance.$el : instance;
			})
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SelectRoot_default), mergeProps({ name: unref(name) }, unref(rootProps), {
				autocomplete: unref(props).autocomplete,
				disabled: disabled.value,
				"default-value": unref(props).defaultValue,
				"model-value": __props.modelValue,
				"onUpdate:modelValue": onUpdate,
				"onUpdate:open": onUpdateOpen
			}, _attrs), {
				default: withCtx(({ modelValue, open }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(SelectTrigger_default), mergeProps({
							id: unref(id),
							ref_key: "triggerRef",
							ref: triggerRef,
							"data-slot": "base",
							class: ui.value.base({ class: [unref(props).ui?.base, unref(props).class] })
						}, {
							...unref(omitUnsafeAttrs)(_ctx.$attrs),
							...unref(ariaAttrs)
						}, { onClick: ($event) => onTriggerClick(open) }), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
										_push(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
										ssrRenderSlot(_ctx.$slots, "leading", {
											modelValue,
											item: resolveSelectedItem("leading", modelValue),
											open,
											ui: ui.value
										}, () => {
											if (unref(isLeading) && unref(leadingIconName)) _push(ssrRenderComponent(_sfc_main$5$1, {
												name: unref(leadingIconName),
												"data-slot": "leadingIcon",
												class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
											}, null, _parent, _scopeId));
											else if (!!unref(props).avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize() }, unref(props).avatar, {
												"data-slot": "itemLeadingAvatar",
												class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
											}), null, _parent, _scopeId));
											else _push(`<!---->`);
										}, _push, _parent, _scopeId);
										_push(`</span>`);
									} else _push(`<!---->`);
									_push(`<!--[-->`);
									ssrRenderList$2([displayValue(modelValue)], (displayedModelValue) => {
										_push(ssrRenderComponent(unref(SelectValue_default), {
											"data-slot": displayedModelValue != null ? "value" : "placeholder",
											class: displayedModelValue != null ? ui.value.value({ class: unref(props).ui?.value }) : ui.value.placeholder({ class: unref(props).ui?.placeholder })
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) ssrRenderSlot(_ctx.$slots, "default", {
													modelValue,
													item: resolveSelectedItem("default", modelValue),
													open,
													ui: ui.value
												}, () => {
													_push(`${ssrInterpolate(displayedModelValue ?? unref(props).placeholder ?? "\xA0")}`);
												}, _push, _parent, _scopeId);
												else return [renderSlot(_ctx.$slots, "default", {
													modelValue,
													item: resolveSelectedItem("default", modelValue),
													open,
													ui: ui.value
												}, () => [createTextVNode(toDisplayString(displayedModelValue ?? unref(props).placeholder ?? "\xA0"), 1)])];
											}),
											_: 2
										}, _parent, _scopeId));
									});
									_push(`<!--]-->`);
									if (unref(isTrailing) || !!slots.trailing) {
										_push(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: unref(props).ui?.trailing }))}"${_scopeId}>`);
										ssrRenderSlot(_ctx.$slots, "trailing", {
											modelValue,
											item: resolveSelectedItem("trailing", modelValue),
											open,
											ui: ui.value
										}, () => {
											if (unref(trailingIconName)) _push(ssrRenderComponent(_sfc_main$5$1, {
												name: unref(trailingIconName),
												"data-slot": "trailingIcon",
												class: ui.value.trailingIcon({
													class: unref(props).ui?.trailingIcon,
													leading: unref(isLeading)
												})
											}, null, _parent, _scopeId));
											else _push(`<!---->`);
										}, _push, _parent, _scopeId);
										_push(`</span>`);
									} else _push(`<!---->`);
								} else return [
									unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
										key: 0,
										"data-slot": "leading",
										class: ui.value.leading({ class: unref(props).ui?.leading })
									}, [renderSlot(_ctx.$slots, "leading", {
										modelValue,
										item: resolveSelectedItem("leading", modelValue),
										open,
										ui: ui.value
									}, () => [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
										key: 0,
										name: unref(leadingIconName),
										"data-slot": "leadingIcon",
										class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
									}, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
										key: 1,
										size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
									}, unref(props).avatar, {
										"data-slot": "itemLeadingAvatar",
										class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
									}), null, 16, ["size", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
									(openBlock(true), createBlock(Fragment, null, renderList$2([displayValue(modelValue)], (displayedModelValue) => {
										return openBlock(), createBlock(unref(SelectValue_default), {
											key: displayedModelValue,
											"data-slot": displayedModelValue != null ? "value" : "placeholder",
											class: displayedModelValue != null ? ui.value.value({ class: unref(props).ui?.value }) : ui.value.placeholder({ class: unref(props).ui?.placeholder })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
												modelValue,
												item: resolveSelectedItem("default", modelValue),
												open,
												ui: ui.value
											}, () => [createTextVNode(toDisplayString(displayedModelValue ?? unref(props).placeholder ?? "\xA0"), 1)])]),
											_: 2
										}, 1032, ["data-slot", "class"]);
									}), 128)),
									unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
										key: 1,
										"data-slot": "trailing",
										class: ui.value.trailing({ class: unref(props).ui?.trailing })
									}, [renderSlot(_ctx.$slots, "trailing", {
										modelValue,
										item: resolveSelectedItem("trailing", modelValue),
										open,
										ui: ui.value
									}, () => [unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
										key: 0,
										name: unref(trailingIconName),
										"data-slot": "trailingIcon",
										class: ui.value.trailingIcon({
											class: unref(props).ui?.trailingIcon,
											leading: unref(isLeading)
										})
									}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
								];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(SelectPortal_default), unref(portalProps), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(unref(SelectContent_default), mergeProps({
											"data-slot": "content",
											class: ui.value.content({ class: unref(props).ui?.content })
										}, contentProps.value, { onCloseAutoFocus }), {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push, _parent, _scopeId);
													renderVNode(_push, createVNode(resolveDynamicComponent(isItemAligned.value ? unref(SelectViewport_default) : "div"), {
														ref_key: "viewportRef",
														ref: viewportRef,
														role: "presentation",
														"data-slot": "viewport",
														class: ui.value.viewport({ class: unref(props).ui?.viewport })
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) {
																_push(`<!--[-->`);
																ssrRenderList$2(groups.value, (group, groupIndex) => {
																	_push(ssrRenderComponent(unref(SelectGroup_default), {
																		key: `group-${groupIndex}`,
																		"data-slot": "group",
																		class: ui.value.group({ class: unref(props).ui?.group })
																	}, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) {
																				_push(`<!--[-->`);
																				ssrRenderList$2(group, (item, index) => {
																					_push(`<!--[-->`);
																					if (isSelectItem(item) && item.type === "label") _push(ssrRenderComponent(unref(SelectLabel_default), {
																						"data-slot": "label",
																						class: ui.value.label({ class: [
																							unref(props).ui?.label,
																							item.ui?.label,
																							item.class
																						] })
																					}, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(`${ssrInterpolate(unref(get)(item, unref(props).labelKey))}`);
																							else return [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)];
																						}),
																						_: 2
																					}, _parent, _scopeId));
																					else if (isSelectItem(item) && item.type === "separator") _push(ssrRenderComponent(unref(SelectSeparator_default), {
																						"data-slot": "separator",
																						class: ui.value.separator({ class: [
																							unref(props).ui?.separator,
																							item.ui?.separator,
																							item.class
																						] })
																					}, null, _parent, _scopeId));
																					else _push(ssrRenderComponent(unref(SelectItem_default), {
																						"data-slot": "item",
																						class: ui.value.item({ class: [
																							unref(props).ui?.item,
																							isSelectItem(item) && item.ui?.item,
																							isSelectItem(item) && item.class
																						] }),
																						disabled: isSelectItem(item) && item.disabled,
																						value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																						onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
																					}, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) ssrRenderSlot(_ctx.$slots, "item", {
																								item,
																								index,
																								ui: ui.value
																							}, () => {
																								ssrRenderSlot(_ctx.$slots, "item-leading", {
																									item,
																									index,
																									ui: ui.value
																								}, () => {
																									if (isSelectItem(item) && item.icon) _push(ssrRenderComponent(_sfc_main$5$1, {
																										name: item.icon,
																										"data-slot": "itemLeadingIcon",
																										class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																									}, null, _parent, _scopeId));
																									else if (isSelectItem(item) && item.avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize() }, { ref_for: true }, item.avatar, {
																										"data-slot": "itemLeadingAvatar",
																										class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																									}), null, _parent, _scopeId));
																									else if (isSelectItem(item) && item.chip) _push(ssrRenderComponent(_sfc_main$4$1, mergeProps({
																										size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																										inset: "",
																										standalone: ""
																									}, { ref_for: true }, item.chip, {
																										"data-slot": "itemLeadingChip",
																										class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																									}), null, _parent, _scopeId));
																									else _push(`<!---->`);
																								}, _push, _parent, _scopeId);
																								_push(`<span data-slot="itemWrapper" class="${ssrRenderClass(ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] }))}"${_scopeId}>`);
																								_push(ssrRenderComponent(unref(SelectItemText_default), {
																									"data-slot": "itemLabel",
																									class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																								}, {
																									default: withCtx((_, _push, _parent, _scopeId) => {
																										if (_push) ssrRenderSlot(_ctx.$slots, "item-label", {
																											item,
																											index
																										}, () => {
																											_push(`${ssrInterpolate(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item)}`);
																										}, _push, _parent, _scopeId);
																										else return [renderSlot(_ctx.$slots, "item-label", {
																											item,
																											index
																										}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])];
																									}),
																									_: 2
																								}, _parent, _scopeId));
																								if (isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"])) {
																									_push(`<span data-slot="itemDescription" class="${ssrRenderClass(ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] }))}"${_scopeId}>`);
																									ssrRenderSlot(_ctx.$slots, "item-description", {
																										item,
																										index
																									}, () => {
																										_push(`${ssrInterpolate(unref(get)(item, unref(props).descriptionKey))}`);
																									}, _push, _parent, _scopeId);
																									_push(`</span>`);
																								} else _push(`<!---->`);
																								_push(`</span><span data-slot="itemTrailing" class="${ssrRenderClass(ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] }))}"${_scopeId}>`);
																								ssrRenderSlot(_ctx.$slots, "item-trailing", {
																									item,
																									index,
																									ui: ui.value
																								}, null, _push, _parent, _scopeId);
																								_push(ssrRenderComponent(unref(SelectItemIndicator_default), { "as-child": "" }, {
																									default: withCtx((_, _push, _parent, _scopeId) => {
																										if (_push) _push(ssrRenderComponent(_sfc_main$5$1, {
																											name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																											"data-slot": "itemTrailingIcon",
																											class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																										}, null, _parent, _scopeId));
																										else return [createVNode(_sfc_main$5$1, {
																											name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																											"data-slot": "itemTrailingIcon",
																											class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																										}, null, 8, ["name", "class"])];
																									}),
																									_: 2
																								}, _parent, _scopeId));
																								_push(`</span>`);
																							}, _push, _parent, _scopeId);
																							else return [renderSlot(_ctx.$slots, "item", {
																								item,
																								index,
																								ui: ui.value
																							}, () => [
																								renderSlot(_ctx.$slots, "item-leading", {
																									item,
																									index,
																									ui: ui.value
																								}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
																									key: 0,
																									name: item.icon,
																									"data-slot": "itemLeadingIcon",
																									class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																								}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																									key: 1,
																									size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																								}, { ref_for: true }, item.avatar, {
																									"data-slot": "itemLeadingAvatar",
																									class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																								}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																									key: 2,
																									size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																									inset: "",
																									standalone: ""
																								}, { ref_for: true }, item.chip, {
																									"data-slot": "itemLeadingChip",
																									class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																								}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																								createVNode("span", {
																									"data-slot": "itemWrapper",
																									class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																								}, [createVNode(unref(SelectItemText_default), {
																									"data-slot": "itemLabel",
																									class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																								}, {
																									default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																										item,
																										index
																									}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																									_: 2
																								}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																									key: 0,
																									"data-slot": "itemDescription",
																									class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																								}, [renderSlot(_ctx.$slots, "item-description", {
																									item,
																									index
																								}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																								createVNode("span", {
																									"data-slot": "itemTrailing",
																									class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																								}, [renderSlot(_ctx.$slots, "item-trailing", {
																									item,
																									index,
																									ui: ui.value
																								}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																									default: withCtx(() => [createVNode(_sfc_main$5$1, {
																										name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																										"data-slot": "itemTrailingIcon",
																										class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																									}, null, 8, ["name", "class"])]),
																									_: 2
																								}, 1024)], 2)
																							])];
																						}),
																						_: 2
																					}, _parent, _scopeId));
																					_push(`<!--]-->`);
																				});
																				_push(`<!--]-->`);
																			} else return [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
																				return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
																					key: 0,
																					"data-slot": "label",
																					class: ui.value.label({ class: [
																						unref(props).ui?.label,
																						item.ui?.label,
																						item.class
																					] })
																				}, {
																					default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
																					_: 2
																				}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
																					key: 1,
																					"data-slot": "separator",
																					class: ui.value.separator({ class: [
																						unref(props).ui?.separator,
																						item.ui?.separator,
																						item.class
																					] })
																				}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
																					key: 2,
																					"data-slot": "item",
																					class: ui.value.item({ class: [
																						unref(props).ui?.item,
																						isSelectItem(item) && item.ui?.item,
																						isSelectItem(item) && item.class
																					] }),
																					disabled: isSelectItem(item) && item.disabled,
																					value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																					onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
																				}, {
																					default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
																						item,
																						index,
																						ui: ui.value
																					}, () => [
																						renderSlot(_ctx.$slots, "item-leading", {
																							item,
																							index,
																							ui: ui.value
																						}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
																							key: 0,
																							name: item.icon,
																							"data-slot": "itemLeadingIcon",
																							class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																						}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																							key: 1,
																							size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																						}, { ref_for: true }, item.avatar, {
																							"data-slot": "itemLeadingAvatar",
																							class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																						}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																							key: 2,
																							size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																							inset: "",
																							standalone: ""
																						}, { ref_for: true }, item.chip, {
																							"data-slot": "itemLeadingChip",
																							class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																						}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																						createVNode("span", {
																							"data-slot": "itemWrapper",
																							class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																						}, [createVNode(unref(SelectItemText_default), {
																							"data-slot": "itemLabel",
																							class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																						}, {
																							default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																								item,
																								index
																							}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																							_: 2
																						}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																							key: 0,
																							"data-slot": "itemDescription",
																							class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																						}, [renderSlot(_ctx.$slots, "item-description", {
																							item,
																							index
																						}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																						createVNode("span", {
																							"data-slot": "itemTrailing",
																							class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																						}, [renderSlot(_ctx.$slots, "item-trailing", {
																							item,
																							index,
																							ui: ui.value
																						}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																							default: withCtx(() => [createVNode(_sfc_main$5$1, {
																								name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																								"data-slot": "itemTrailingIcon",
																								class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																							}, null, 8, ["name", "class"])]),
																							_: 2
																						}, 1024)], 2)
																					])]),
																					_: 2
																				}, 1032, [
																					"class",
																					"disabled",
																					"value",
																					"onSelect"
																				]))], 64);
																			}), 128))];
																		}),
																		_: 2
																	}, _parent, _scopeId));
																});
																_push(`<!--]-->`);
															} else return [(openBlock(true), createBlock(Fragment, null, renderList$2(groups.value, (group, groupIndex) => {
																return openBlock(), createBlock(unref(SelectGroup_default), {
																	key: `group-${groupIndex}`,
																	"data-slot": "group",
																	class: ui.value.group({ class: unref(props).ui?.group })
																}, {
																	default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
																		return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
																			key: 0,
																			"data-slot": "label",
																			class: ui.value.label({ class: [
																				unref(props).ui?.label,
																				item.ui?.label,
																				item.class
																			] })
																		}, {
																			default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
																			_: 2
																		}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
																			key: 1,
																			"data-slot": "separator",
																			class: ui.value.separator({ class: [
																				unref(props).ui?.separator,
																				item.ui?.separator,
																				item.class
																			] })
																		}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
																			key: 2,
																			"data-slot": "item",
																			class: ui.value.item({ class: [
																				unref(props).ui?.item,
																				isSelectItem(item) && item.ui?.item,
																				isSelectItem(item) && item.class
																			] }),
																			disabled: isSelectItem(item) && item.disabled,
																			value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																			onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
																		}, {
																			default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
																				item,
																				index,
																				ui: ui.value
																			}, () => [
																				renderSlot(_ctx.$slots, "item-leading", {
																					item,
																					index,
																					ui: ui.value
																				}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
																					key: 0,
																					name: item.icon,
																					"data-slot": "itemLeadingIcon",
																					class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																				}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																					key: 1,
																					size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																				}, { ref_for: true }, item.avatar, {
																					"data-slot": "itemLeadingAvatar",
																					class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																				}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																					key: 2,
																					size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																					inset: "",
																					standalone: ""
																				}, { ref_for: true }, item.chip, {
																					"data-slot": "itemLeadingChip",
																					class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																				}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																				createVNode("span", {
																					"data-slot": "itemWrapper",
																					class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																				}, [createVNode(unref(SelectItemText_default), {
																					"data-slot": "itemLabel",
																					class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																				}, {
																					default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																						item,
																						index
																					}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																					_: 2
																				}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																					key: 0,
																					"data-slot": "itemDescription",
																					class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																				}, [renderSlot(_ctx.$slots, "item-description", {
																					item,
																					index
																				}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																				createVNode("span", {
																					"data-slot": "itemTrailing",
																					class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																				}, [renderSlot(_ctx.$slots, "item-trailing", {
																					item,
																					index,
																					ui: ui.value
																				}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																					default: withCtx(() => [createVNode(_sfc_main$5$1, {
																						name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																						"data-slot": "itemTrailingIcon",
																						class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																					}, null, 8, ["name", "class"])]),
																					_: 2
																				}, 1024)], 2)
																			])]),
																			_: 2
																		}, 1032, [
																			"class",
																			"disabled",
																			"value",
																			"onSelect"
																		]))], 64);
																	}), 128))]),
																	_: 2
																}, 1032, ["class"]);
															}), 128))];
														}),
														_: 2
													}), _parent, _scopeId);
													ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push, _parent, _scopeId);
													if (!!unref(props).arrow) _push(ssrRenderComponent(unref(SelectArrow_default), mergeProps(arrowProps.value, {
														"data-slot": "arrow",
														class: ui.value.arrow({ class: unref(props).ui?.arrow })
													}), null, _parent, _scopeId));
													else _push(`<!---->`);
												} else return [
													renderSlot(_ctx.$slots, "content-top"),
													(openBlock(), createBlock(resolveDynamicComponent(isItemAligned.value ? unref(SelectViewport_default) : "div"), {
														ref_key: "viewportRef",
														ref: viewportRef,
														role: "presentation",
														"data-slot": "viewport",
														class: ui.value.viewport({ class: unref(props).ui?.viewport })
													}, {
														default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(groups.value, (group, groupIndex) => {
															return openBlock(), createBlock(unref(SelectGroup_default), {
																key: `group-${groupIndex}`,
																"data-slot": "group",
																class: ui.value.group({ class: unref(props).ui?.group })
															}, {
																default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
																	return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
																		key: 0,
																		"data-slot": "label",
																		class: ui.value.label({ class: [
																			unref(props).ui?.label,
																			item.ui?.label,
																			item.class
																		] })
																	}, {
																		default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
																		_: 2
																	}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
																		key: 1,
																		"data-slot": "separator",
																		class: ui.value.separator({ class: [
																			unref(props).ui?.separator,
																			item.ui?.separator,
																			item.class
																		] })
																	}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
																		key: 2,
																		"data-slot": "item",
																		class: ui.value.item({ class: [
																			unref(props).ui?.item,
																			isSelectItem(item) && item.ui?.item,
																			isSelectItem(item) && item.class
																		] }),
																		disabled: isSelectItem(item) && item.disabled,
																		value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																		onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
																	}, {
																		default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
																			item,
																			index,
																			ui: ui.value
																		}, () => [
																			renderSlot(_ctx.$slots, "item-leading", {
																				item,
																				index,
																				ui: ui.value
																			}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
																				key: 0,
																				name: item.icon,
																				"data-slot": "itemLeadingIcon",
																				class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																			}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																				key: 1,
																				size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																			}, { ref_for: true }, item.avatar, {
																				"data-slot": "itemLeadingAvatar",
																				class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																			}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																				key: 2,
																				size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																				inset: "",
																				standalone: ""
																			}, { ref_for: true }, item.chip, {
																				"data-slot": "itemLeadingChip",
																				class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																			}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																			createVNode("span", {
																				"data-slot": "itemWrapper",
																				class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																			}, [createVNode(unref(SelectItemText_default), {
																				"data-slot": "itemLabel",
																				class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																			}, {
																				default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																					item,
																					index
																				}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																				_: 2
																			}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																				key: 0,
																				"data-slot": "itemDescription",
																				class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																			}, [renderSlot(_ctx.$slots, "item-description", {
																				item,
																				index
																			}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																			createVNode("span", {
																				"data-slot": "itemTrailing",
																				class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																			}, [renderSlot(_ctx.$slots, "item-trailing", {
																				item,
																				index,
																				ui: ui.value
																			}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																				default: withCtx(() => [createVNode(_sfc_main$5$1, {
																					name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																					"data-slot": "itemTrailingIcon",
																					class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																				}, null, 8, ["name", "class"])]),
																				_: 2
																			}, 1024)], 2)
																		])]),
																		_: 2
																	}, 1032, [
																		"class",
																		"disabled",
																		"value",
																		"onSelect"
																	]))], 64);
																}), 128))]),
																_: 2
															}, 1032, ["class"]);
														}), 128))]),
														_: 3
													}, 8, ["class"])),
													renderSlot(_ctx.$slots, "content-bottom"),
													!!unref(props).arrow ? (openBlock(), createBlock(unref(SelectArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
														"data-slot": "arrow",
														class: ui.value.arrow({ class: unref(props).ui?.arrow })
													}), null, 16, ["class"])) : createCommentVNode("", true)
												];
											}),
											_: 2
										}, _parent, _scopeId));
										else return [createVNode(unref(SelectContent_default), mergeProps({
											"data-slot": "content",
											class: ui.value.content({ class: unref(props).ui?.content })
										}, contentProps.value, { onCloseAutoFocus }), {
											default: withCtx(() => [
												renderSlot(_ctx.$slots, "content-top"),
												(openBlock(), createBlock(resolveDynamicComponent(isItemAligned.value ? unref(SelectViewport_default) : "div"), {
													ref_key: "viewportRef",
													ref: viewportRef,
													role: "presentation",
													"data-slot": "viewport",
													class: ui.value.viewport({ class: unref(props).ui?.viewport })
												}, {
													default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(groups.value, (group, groupIndex) => {
														return openBlock(), createBlock(unref(SelectGroup_default), {
															key: `group-${groupIndex}`,
															"data-slot": "group",
															class: ui.value.group({ class: unref(props).ui?.group })
														}, {
															default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
																return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
																	key: 0,
																	"data-slot": "label",
																	class: ui.value.label({ class: [
																		unref(props).ui?.label,
																		item.ui?.label,
																		item.class
																	] })
																}, {
																	default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
																	_: 2
																}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
																	key: 1,
																	"data-slot": "separator",
																	class: ui.value.separator({ class: [
																		unref(props).ui?.separator,
																		item.ui?.separator,
																		item.class
																	] })
																}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
																	key: 2,
																	"data-slot": "item",
																	class: ui.value.item({ class: [
																		unref(props).ui?.item,
																		isSelectItem(item) && item.ui?.item,
																		isSelectItem(item) && item.class
																	] }),
																	disabled: isSelectItem(item) && item.disabled,
																	value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																	onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
																}, {
																	default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
																		item,
																		index,
																		ui: ui.value
																	}, () => [
																		renderSlot(_ctx.$slots, "item-leading", {
																			item,
																			index,
																			ui: ui.value
																		}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
																			key: 0,
																			name: item.icon,
																			"data-slot": "itemLeadingIcon",
																			class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																		}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																			key: 1,
																			size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																		}, { ref_for: true }, item.avatar, {
																			"data-slot": "itemLeadingAvatar",
																			class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																		}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																			key: 2,
																			size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																			inset: "",
																			standalone: ""
																		}, { ref_for: true }, item.chip, {
																			"data-slot": "itemLeadingChip",
																			class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																		}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																		createVNode("span", {
																			"data-slot": "itemWrapper",
																			class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																		}, [createVNode(unref(SelectItemText_default), {
																			"data-slot": "itemLabel",
																			class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																		}, {
																			default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																				item,
																				index
																			}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																			_: 2
																		}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																			key: 0,
																			"data-slot": "itemDescription",
																			class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																		}, [renderSlot(_ctx.$slots, "item-description", {
																			item,
																			index
																		}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																		createVNode("span", {
																			"data-slot": "itemTrailing",
																			class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																		}, [renderSlot(_ctx.$slots, "item-trailing", {
																			item,
																			index,
																			ui: ui.value
																		}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																			default: withCtx(() => [createVNode(_sfc_main$5$1, {
																				name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																				"data-slot": "itemTrailingIcon",
																				class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																			}, null, 8, ["name", "class"])]),
																			_: 2
																		}, 1024)], 2)
																	])]),
																	_: 2
																}, 1032, [
																	"class",
																	"disabled",
																	"value",
																	"onSelect"
																]))], 64);
															}), 128))]),
															_: 2
														}, 1032, ["class"]);
													}), 128))]),
													_: 3
												}, 8, ["class"])),
												renderSlot(_ctx.$slots, "content-bottom"),
												!!unref(props).arrow ? (openBlock(), createBlock(unref(SelectArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
													"data-slot": "arrow",
													class: ui.value.arrow({ class: unref(props).ui?.arrow })
												}), null, 16, ["class"])) : createCommentVNode("", true)
											]),
											_: 3
										}, 16, ["class"])];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(FieldGroupReset), null, {
									default: withCtx(() => [createVNode(unref(SelectContent_default), mergeProps({
										"data-slot": "content",
										class: ui.value.content({ class: unref(props).ui?.content })
									}, contentProps.value, { onCloseAutoFocus }), {
										default: withCtx(() => [
											renderSlot(_ctx.$slots, "content-top"),
											(openBlock(), createBlock(resolveDynamicComponent(isItemAligned.value ? unref(SelectViewport_default) : "div"), {
												ref_key: "viewportRef",
												ref: viewportRef,
												role: "presentation",
												"data-slot": "viewport",
												class: ui.value.viewport({ class: unref(props).ui?.viewport })
											}, {
												default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(groups.value, (group, groupIndex) => {
													return openBlock(), createBlock(unref(SelectGroup_default), {
														key: `group-${groupIndex}`,
														"data-slot": "group",
														class: ui.value.group({ class: unref(props).ui?.group })
													}, {
														default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
															return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
																key: 0,
																"data-slot": "label",
																class: ui.value.label({ class: [
																	unref(props).ui?.label,
																	item.ui?.label,
																	item.class
																] })
															}, {
																default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
																_: 2
															}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
																key: 1,
																"data-slot": "separator",
																class: ui.value.separator({ class: [
																	unref(props).ui?.separator,
																	item.ui?.separator,
																	item.class
																] })
															}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
																key: 2,
																"data-slot": "item",
																class: ui.value.item({ class: [
																	unref(props).ui?.item,
																	isSelectItem(item) && item.ui?.item,
																	isSelectItem(item) && item.class
																] }),
																disabled: isSelectItem(item) && item.disabled,
																value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
															}, {
																default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
																	item,
																	index,
																	ui: ui.value
																}, () => [
																	renderSlot(_ctx.$slots, "item-leading", {
																		item,
																		index,
																		ui: ui.value
																	}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
																		key: 0,
																		name: item.icon,
																		"data-slot": "itemLeadingIcon",
																		class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																	}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																		key: 1,
																		size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																	}, { ref_for: true }, item.avatar, {
																		"data-slot": "itemLeadingAvatar",
																		class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																	}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																		key: 2,
																		size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																		inset: "",
																		standalone: ""
																	}, { ref_for: true }, item.chip, {
																		"data-slot": "itemLeadingChip",
																		class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																	}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																	createVNode("span", {
																		"data-slot": "itemWrapper",
																		class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																	}, [createVNode(unref(SelectItemText_default), {
																		"data-slot": "itemLabel",
																		class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																	}, {
																		default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																			item,
																			index
																		}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																		_: 2
																	}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																		key: 0,
																		"data-slot": "itemDescription",
																		class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																	}, [renderSlot(_ctx.$slots, "item-description", {
																		item,
																		index
																	}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																	createVNode("span", {
																		"data-slot": "itemTrailing",
																		class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																	}, [renderSlot(_ctx.$slots, "item-trailing", {
																		item,
																		index,
																		ui: ui.value
																	}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																		default: withCtx(() => [createVNode(_sfc_main$5$1, {
																			name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																			"data-slot": "itemTrailingIcon",
																			class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																		}, null, 8, ["name", "class"])]),
																		_: 2
																	}, 1024)], 2)
																])]),
																_: 2
															}, 1032, [
																"class",
																"disabled",
																"value",
																"onSelect"
															]))], 64);
														}), 128))]),
														_: 2
													}, 1032, ["class"]);
												}), 128))]),
												_: 3
											}, 8, ["class"])),
											renderSlot(_ctx.$slots, "content-bottom"),
											!!unref(props).arrow ? (openBlock(), createBlock(unref(SelectArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
												"data-slot": "arrow",
												class: ui.value.arrow({ class: unref(props).ui?.arrow })
											}), null, 16, ["class"])) : createCommentVNode("", true)
										]),
										_: 3
									}, 16, ["class"])]),
									_: 3
								})];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [createVNode(unref(SelectTrigger_default), mergeProps({
						id: unref(id),
						ref_key: "triggerRef",
						ref: triggerRef,
						"data-slot": "base",
						class: ui.value.base({ class: [unref(props).ui?.base, unref(props).class] })
					}, {
						...unref(omitUnsafeAttrs)(_ctx.$attrs),
						...unref(ariaAttrs)
					}, { onClick: ($event) => onTriggerClick(open) }), {
						default: withCtx(() => [
							unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
								key: 0,
								"data-slot": "leading",
								class: ui.value.leading({ class: unref(props).ui?.leading })
							}, [renderSlot(_ctx.$slots, "leading", {
								modelValue,
								item: resolveSelectedItem("leading", modelValue),
								open,
								ui: ui.value
							}, () => [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
								key: 0,
								name: unref(leadingIconName),
								"data-slot": "leadingIcon",
								class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
							}, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
								key: 1,
								size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
							}, unref(props).avatar, {
								"data-slot": "itemLeadingAvatar",
								class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
							}), null, 16, ["size", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
							(openBlock(true), createBlock(Fragment, null, renderList$2([displayValue(modelValue)], (displayedModelValue) => {
								return openBlock(), createBlock(unref(SelectValue_default), {
									key: displayedModelValue,
									"data-slot": displayedModelValue != null ? "value" : "placeholder",
									class: displayedModelValue != null ? ui.value.value({ class: unref(props).ui?.value }) : ui.value.placeholder({ class: unref(props).ui?.placeholder })
								}, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
										modelValue,
										item: resolveSelectedItem("default", modelValue),
										open,
										ui: ui.value
									}, () => [createTextVNode(toDisplayString(displayedModelValue ?? unref(props).placeholder ?? "\xA0"), 1)])]),
									_: 2
								}, 1032, ["data-slot", "class"]);
							}), 128)),
							unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
								key: 1,
								"data-slot": "trailing",
								class: ui.value.trailing({ class: unref(props).ui?.trailing })
							}, [renderSlot(_ctx.$slots, "trailing", {
								modelValue,
								item: resolveSelectedItem("trailing", modelValue),
								open,
								ui: ui.value
							}, () => [unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
								key: 0,
								name: unref(trailingIconName),
								"data-slot": "trailingIcon",
								class: ui.value.trailingIcon({
									class: unref(props).ui?.trailingIcon,
									leading: unref(isLeading)
								})
							}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
						]),
						_: 2
					}, 1040, [
						"id",
						"class",
						"onClick"
					]), createVNode(unref(SelectPortal_default), unref(portalProps), {
						default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
							default: withCtx(() => [createVNode(unref(SelectContent_default), mergeProps({
								"data-slot": "content",
								class: ui.value.content({ class: unref(props).ui?.content })
							}, contentProps.value, { onCloseAutoFocus }), {
								default: withCtx(() => [
									renderSlot(_ctx.$slots, "content-top"),
									(openBlock(), createBlock(resolveDynamicComponent(isItemAligned.value ? unref(SelectViewport_default) : "div"), {
										ref_key: "viewportRef",
										ref: viewportRef,
										role: "presentation",
										"data-slot": "viewport",
										class: ui.value.viewport({ class: unref(props).ui?.viewport })
									}, {
										default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(groups.value, (group, groupIndex) => {
											return openBlock(), createBlock(unref(SelectGroup_default), {
												key: `group-${groupIndex}`,
												"data-slot": "group",
												class: ui.value.group({ class: unref(props).ui?.group })
											}, {
												default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
													return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
														key: 0,
														"data-slot": "label",
														class: ui.value.label({ class: [
															unref(props).ui?.label,
															item.ui?.label,
															item.class
														] })
													}, {
														default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
														_: 2
													}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
														key: 1,
														"data-slot": "separator",
														class: ui.value.separator({ class: [
															unref(props).ui?.separator,
															item.ui?.separator,
															item.class
														] })
													}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
														key: 2,
														"data-slot": "item",
														class: ui.value.item({ class: [
															unref(props).ui?.item,
															isSelectItem(item) && item.ui?.item,
															isSelectItem(item) && item.class
														] }),
														disabled: isSelectItem(item) && item.disabled,
														value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
														onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
													}, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
															item,
															index,
															ui: ui.value
														}, () => [
															renderSlot(_ctx.$slots, "item-leading", {
																item,
																index,
																ui: ui.value
															}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
																key: 0,
																name: item.icon,
																"data-slot": "itemLeadingIcon",
																class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
															}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																key: 1,
																size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
															}, { ref_for: true }, item.avatar, {
																"data-slot": "itemLeadingAvatar",
																class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
															}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																key: 2,
																size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																inset: "",
																standalone: ""
															}, { ref_for: true }, item.chip, {
																"data-slot": "itemLeadingChip",
																class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
															}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
															createVNode("span", {
																"data-slot": "itemWrapper",
																class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
															}, [createVNode(unref(SelectItemText_default), {
																"data-slot": "itemLabel",
																class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
															}, {
																default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																	item,
																	index
																}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																_: 2
															}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																key: 0,
																"data-slot": "itemDescription",
																class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
															}, [renderSlot(_ctx.$slots, "item-description", {
																item,
																index
															}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
															createVNode("span", {
																"data-slot": "itemTrailing",
																class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
															}, [renderSlot(_ctx.$slots, "item-trailing", {
																item,
																index,
																ui: ui.value
															}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																default: withCtx(() => [createVNode(_sfc_main$5$1, {
																	name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																	"data-slot": "itemTrailingIcon",
																	class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																}, null, 8, ["name", "class"])]),
																_: 2
															}, 1024)], 2)
														])]),
														_: 2
													}, 1032, [
														"class",
														"disabled",
														"value",
														"onSelect"
													]))], 64);
												}), 128))]),
												_: 2
											}, 1032, ["class"]);
										}), 128))]),
										_: 3
									}, 8, ["class"])),
									renderSlot(_ctx.$slots, "content-bottom"),
									!!unref(props).arrow ? (openBlock(), createBlock(unref(SelectArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
										"data-slot": "arrow",
										class: ui.value.arrow({ class: unref(props).ui?.arrow })
									}), null, 16, ["class"])) : createCommentVNode("", true)
								]),
								_: 3
							}, 16, ["class"])]),
							_: 3
						})]),
						_: 3
					}, 16)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$5 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
// node_modules/@nuxt/ui/dist/runtime/utils/virtualizer.js
function itemHasDescription(item, descriptionKey) {
	if (typeof item !== "object" || item === null) return false;
	const value = get(item, descriptionKey);
	return value !== void 0 && value !== null && value !== "";
}
function getSize(size, hasDescription) {
	const sizes = hasDescription ? {
		xs: 44,
		sm: 48,
		md: 52,
		lg: 56,
		xl: 60
	} : {
		xs: 24,
		sm: 28,
		md: 32,
		lg: 36,
		xl: 40
	};
	return sizes[size] ?? sizes.md;
}
function getEstimateSize(items, size, descriptionKey, hasDescriptionSlot) {
	const sizeWithDescription = getSize(size, true);
	const sizeWithoutDescription = getSize(size, false);
	if (hasDescriptionSlot) return () => sizeWithDescription;
	if (!descriptionKey) return () => sizeWithoutDescription;
	return (index) => {
		return itemHasDescription(items[index], descriptionKey) ? sizeWithDescription : sizeWithoutDescription;
	};
}
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fselect-menu.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fselect_menu_default = {
	"slots": {
		"base": ["relative group rounded-md inline-flex items-center disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"],
		"leading": "absolute inset-y-0 start-0 flex items-center",
		"leadingIcon": "shrink-0 text-dimmed",
		"leadingAvatar": "shrink-0",
		"leadingAvatarSize": "",
		"trailing": "absolute inset-y-0 end-0 flex items-center",
		"trailingIcon": "shrink-0 text-dimmed",
		"value": "truncate pointer-events-none",
		"placeholder": "truncate text-dimmed",
		"arrow": "fill-bg stroke-default",
		"content": ["max-h-[min(15rem,var(--reka-select-content-available-height,15rem))] w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden origin-(--reka-select-content-transform-origin) pointer-events-auto data-[state=closed]:pointer-events-none! flex flex-col", "max-h-[min(15rem,var(--reka-combobox-content-available-height,15rem))] origin-(--reka-combobox-content-transform-origin) w-(--reka-combobox-trigger-width)"],
		"viewport": "relative scroll-py-1 overflow-y-auto flex-1",
		"group": "p-1 isolate",
		"empty": "text-center text-muted",
		"label": "font-semibold text-highlighted",
		"separator": "-mx-1 my-1 h-px bg-border",
		"item": ["group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50", "transition-colors before:transition-colors"],
		"itemLeadingIcon": ["shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default", "transition-colors"],
		"itemLeadingAvatar": "shrink-0",
		"itemLeadingAvatarSize": "",
		"itemLeadingChip": "shrink-0",
		"itemLeadingChipSize": "",
		"itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
		"itemTrailingIcon": "shrink-0",
		"itemWrapper": "flex-1 flex flex-col min-w-0",
		"itemLabel": "truncate",
		"itemDescription": "truncate text-muted",
		"input": "border-b border-default",
		"focusScope": "flex flex-col min-h-0 focus:outline-none",
		"trailingClear": "p-0"
	},
	"variants": {
		"fieldGroup": {
			"horizontal": "first:not-nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-e-none not-first:nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-s-none not-first:not-nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-none focus-visible:z-[1]",
			"vertical": "first:not-nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-b-none not-first:nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-t-none not-first:not-nth-last-[1_of_:not(input[aria-hidden],select[aria-hidden])]:rounded-none focus-visible:z-[1]"
		},
		"size": {
			"xs": {
				"base": "px-2 py-1 text-sm/4 gap-1",
				"leading": "ps-2",
				"trailing": "pe-2",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4",
				"label": "p-1 text-[10px]/3 gap-1",
				"item": "p-1 text-xs gap-1",
				"itemLeadingIcon": "size-4",
				"itemLeadingAvatarSize": "3xs",
				"itemLeadingChip": "size-4",
				"itemLeadingChipSize": "sm",
				"itemTrailingIcon": "size-4",
				"empty": "p-2 text-xs"
			},
			"sm": {
				"base": "px-2.5 py-1.5 text-sm/4 gap-1.5",
				"leading": "ps-2.5",
				"trailing": "pe-2.5",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4",
				"label": "p-1.5 text-[10px]/3 gap-1.5",
				"item": "p-1.5 text-xs gap-1.5",
				"itemLeadingIcon": "size-4",
				"itemLeadingAvatarSize": "3xs",
				"itemLeadingChip": "size-4",
				"itemLeadingChipSize": "sm",
				"itemTrailingIcon": "size-4",
				"empty": "p-2.5 text-xs"
			},
			"md": {
				"base": "px-2.5 py-1.5 text-base/5 gap-1.5",
				"leading": "ps-2.5",
				"trailing": "pe-2.5",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5",
				"label": "p-1.5 text-xs gap-1.5",
				"item": "p-1.5 text-sm gap-1.5",
				"itemLeadingIcon": "size-5",
				"itemLeadingAvatarSize": "2xs",
				"itemLeadingChip": "size-5",
				"itemLeadingChipSize": "md",
				"itemTrailingIcon": "size-5",
				"empty": "p-2.5 text-sm"
			},
			"lg": {
				"base": "px-3 py-2 text-base/5 gap-2",
				"leading": "ps-3",
				"trailing": "pe-3",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5",
				"label": "p-2 text-xs gap-2",
				"item": "p-2 text-sm gap-2",
				"itemLeadingIcon": "size-5",
				"itemLeadingAvatarSize": "2xs",
				"itemLeadingChip": "size-5",
				"itemLeadingChipSize": "md",
				"itemTrailingIcon": "size-5",
				"empty": "p-3 text-sm"
			},
			"xl": {
				"base": "px-3 py-2 text-base gap-2",
				"leading": "ps-3",
				"trailing": "pe-3",
				"leadingIcon": "size-6",
				"leadingAvatarSize": "xs",
				"trailingIcon": "size-6",
				"label": "p-2 text-sm gap-2",
				"item": "p-2 text-base gap-2",
				"itemLeadingIcon": "size-6",
				"itemLeadingAvatarSize": "xs",
				"itemLeadingChip": "size-6",
				"itemLeadingChipSize": "lg",
				"itemTrailingIcon": "size-6",
				"empty": "p-3 text-base"
			}
		},
		"variant": {
			"outline": "text-highlighted bg-default ring ring-inset ring-accented hover:bg-elevated disabled:bg-default",
			"soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
			"subtle": "text-highlighted bg-elevated ring ring-inset ring-accented hover:bg-accented/75 disabled:bg-elevated",
			"ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
			"none": "text-highlighted bg-transparent focus:outline-none"
		},
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"leading": { "true": "" },
		"trailing": { "true": "" },
		"loading": { "true": "" },
		"highlight": { "true": "" },
		"fixed": { "false": "" },
		"type": { "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none" },
		"position": {
			"popper": { "content": "data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)]" },
			"item-aligned": { "content": "" }
		},
		"multiple": { "true": "" },
		"virtualize": {
			"true": { "viewport": "p-1 isolate" },
			"false": { "viewport": "divide-y divide-default" }
		}
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": ["outline", "subtle"],
			"class": "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			"color": "secondary",
			"variant": ["outline", "subtle"],
			"class": "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			"color": "success",
			"variant": ["outline", "subtle"],
			"class": "outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			"color": "info",
			"variant": ["outline", "subtle"],
			"class": "outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			"color": "warning",
			"variant": ["outline", "subtle"],
			"class": "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			"color": "error",
			"variant": ["outline", "subtle"],
			"class": "outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			"color": "primary",
			"variant": ["soft", "ghost"],
			"class": "outline-primary/25 focus-visible:outline-3"
		},
		{
			"color": "secondary",
			"variant": ["soft", "ghost"],
			"class": "outline-secondary/25 focus-visible:outline-3"
		},
		{
			"color": "success",
			"variant": ["soft", "ghost"],
			"class": "outline-success/25 focus-visible:outline-3"
		},
		{
			"color": "info",
			"variant": ["soft", "ghost"],
			"class": "outline-info/25 focus-visible:outline-3"
		},
		{
			"color": "warning",
			"variant": ["soft", "ghost"],
			"class": "outline-warning/25 focus-visible:outline-3"
		},
		{
			"color": "error",
			"variant": ["soft", "ghost"],
			"class": "outline-error/25 focus-visible:outline-3"
		},
		{
			"color": "primary",
			"highlight": true,
			"class": "ring ring-inset ring-primary"
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": "ring ring-inset ring-secondary"
		},
		{
			"color": "success",
			"highlight": true,
			"class": "ring ring-inset ring-success"
		},
		{
			"color": "info",
			"highlight": true,
			"class": "ring ring-inset ring-info"
		},
		{
			"color": "warning",
			"highlight": true,
			"class": "ring ring-inset ring-warning"
		},
		{
			"color": "error",
			"highlight": true,
			"class": "ring ring-inset ring-error"
		},
		{
			"color": "neutral",
			"variant": ["outline", "subtle"],
			"class": "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			"color": "neutral",
			"variant": ["soft", "ghost"],
			"class": "outline-inverted/25 focus-visible:outline-3"
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": "ring ring-inset ring-inverted"
		},
		{
			"leading": true,
			"size": "xs",
			"class": "ps-7"
		},
		{
			"leading": true,
			"size": "sm",
			"class": "ps-8"
		},
		{
			"leading": true,
			"size": "md",
			"class": "ps-9"
		},
		{
			"leading": true,
			"size": "lg",
			"class": "ps-10"
		},
		{
			"leading": true,
			"size": "xl",
			"class": "ps-11"
		},
		{
			"trailing": true,
			"size": "xs",
			"class": "pe-7"
		},
		{
			"trailing": true,
			"size": "sm",
			"class": "pe-8"
		},
		{
			"trailing": true,
			"size": "md",
			"class": "pe-9"
		},
		{
			"trailing": true,
			"size": "lg",
			"class": "pe-10"
		},
		{
			"trailing": true,
			"size": "xl",
			"class": "pe-11"
		},
		{
			"loading": true,
			"leading": true,
			"class": { "leadingIcon": "animate-spin" }
		},
		{
			"loading": true,
			"leading": false,
			"trailing": true,
			"class": { "trailingIcon": "animate-spin" }
		},
		{
			"fixed": false,
			"size": "xs",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "sm",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "md",
			"class": "md:text-sm"
		},
		{
			"fixed": false,
			"size": "lg",
			"class": "md:text-sm"
		}
	],
	"defaultVariants": {
		"size": "md",
		"color": "primary",
		"variant": "outline",
		"position": "popper"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue
var _sfc_main$3 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "USelectMenu",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		id: {
			type: String,
			required: false
		},
		placeholder: {
			type: String,
			required: false
		},
		searchInput: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		color: {
			type: null,
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
		required: {
			type: Boolean,
			required: false
		},
		trailingIcon: {
			type: null,
			required: false
		},
		selectedIcon: {
			type: null,
			required: false
		},
		clear: {
			type: [Boolean, Object],
			required: false
		},
		clearIcon: {
			type: null,
			required: false
		},
		content: {
			type: Object,
			required: false
		},
		arrow: {
			type: [Boolean, Object],
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		virtualize: {
			type: [Boolean, Object],
			required: false,
			default: false
		},
		valueKey: {
			type: null,
			required: false
		},
		labelKey: {
			type: null,
			required: false,
			default: "label"
		},
		descriptionKey: {
			type: null,
			required: false,
			default: "description"
		},
		items: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		modelModifiers: {
			type: null,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		highlight: {
			type: Boolean,
			required: false
		},
		fixed: {
			type: Boolean,
			required: false
		},
		createItem: {
			type: [
				Boolean,
				String,
				Object
			],
			required: false
		},
		filterFields: {
			type: Array,
			required: false
		},
		ignoreFilter: {
			type: Boolean,
			required: false
		},
		autofocus: {
			type: Boolean,
			required: false
		},
		autofocusDelay: {
			type: Number,
			required: false,
			default: 0
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		resetSearchTermOnBlur: {
			type: Boolean,
			required: false,
			default: true
		},
		resetSearchTermOnSelect: {
			type: Boolean,
			required: false,
			default: true
		},
		resetModelValueOnClear: {
			type: Boolean,
			required: false,
			default: true
		},
		highlightOnHover: {
			type: Boolean,
			required: false
		},
		loop: {
			type: Boolean,
			required: false
		},
		by: {
			type: [String, Function],
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
		leading: {
			type: Boolean,
			required: false
		},
		leadingIcon: {
			type: null,
			required: false
		},
		trailing: {
			type: Boolean,
			required: false
		},
		loading: {
			type: Boolean,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		}
	}, {
		"searchTerm": {
			type: String,
			default: ""
		},
		"searchTermModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels([
		"change",
		"blur",
		"focus",
		"create",
		"clear",
		"highlight",
		"update:modelValue",
		"update:open"
	], ["update:searchTerm"]),
	setup(__props, { expose: __expose, emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("selectMenu", _props);
		const searchTerm = useModel(__props, "searchTerm", {
			type: String,
			default: ""
		});
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const { filterGroups } = useFilter();
		const rootProps = useForwardProps(props, [
			"modelValue",
			"defaultValue",
			"open",
			"defaultOpen",
			"required",
			"multiple",
			"resetSearchTermOnBlur",
			"resetSearchTermOnSelect",
			"resetModelValueOnClear",
			"highlightOnHover",
			"loop",
			"by"
		], emits);
		const portalProps = usePortal(toRef(() => props.portal));
		const contentProps = toRef(() => defu(props.content, {
			side: "bottom",
			sideOffset: 8,
			collisionPadding: 8,
			position: "popper"
		}));
		const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
		const clearProps = computed(() => typeof props.clear === "object" ? props.clear : {});
		const virtualizerProps = toRef(() => {
			if (!props.virtualize) return false;
			return defu(typeof props.virtualize === "boolean" ? {} : props.virtualize, { estimateSize: getEstimateSize(filteredItems.value, size.value ?? "md", props.descriptionKey, !!slots["item-description"]) });
		});
		const searchInputProps = toRef(() => defu(props.searchInput, {
			placeholder: t("selectMenu.search"),
			variant: "none",
			fixed: props.fixed
		}));
		const { emitFormBlur, emitFormFocus, emitFormInput, emitFormChange, size: formFieldSize, color: formFieldColor, id, name, highlight: formFieldHighlight, disabled: formFieldDisabled, ariaAttrs } = useFormField(_props);
		const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
		const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(computed(() => ({
			icon: props.icon,
			leading: props.leading,
			leadingIcon: props.leadingIcon,
			trailing: props.trailing,
			trailingIcon: props.trailingIcon ?? appConfig.ui.icons.chevronDown,
			loading: props.loading,
			loadingIcon: props.loadingIcon
		})));
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => fieldGroupSize.value ?? formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const [DefineCreateItemTemplate, ReuseCreateItemTemplate] = createReusableTemplate();
		const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({ props: {
			item: {
				type: [
					Object,
					String,
					Number,
					Boolean
				],
				required: true
			},
			index: {
				type: Number,
				required: false
			}
		} });
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fselect_menu_default,
			...appConfig.ui?.selectMenu || {}
		})({
			color: color.value,
			variant: props.variant,
			size: size.value,
			loading: props.loading,
			highlight: highlight.value,
			fixed: props.fixed,
			leading: isLeading.value || !!props.avatar || !!slots.leading,
			trailing: isTrailing.value || !!slots.trailing,
			fieldGroup: orientation.value,
			virtualize: !!props.virtualize,
			multiple: props.multiple
		}));
		function displayValue(value) {
			if (props.multiple && Array.isArray(value)) {
				const displayedValues = value.map((item) => getDisplayValue(items.value, item, {
					labelKey: props.labelKey,
					valueKey: props.valueKey,
					by: props.by
				})).filter((v) => v != null && v !== "");
				return displayedValues.length > 0 ? displayedValues.join(", ") : void 0;
			}
			return getDisplayValue(items.value, value, {
				labelKey: props.labelKey,
				valueKey: props.valueKey,
				by: props.by
			});
		}
		function resolveSelectedItem(slot, value) {
			if (!slots[slot]) return;
			return getSelectedItem(items.value, value, {
				valueKey: props.valueKey,
				by: props.by,
				multiple: props.multiple
			});
		}
		const groups = computed(() => props.items?.length ? isArrayOfArray(props.items) ? props.items : [props.items] : []);
		const items = computed(() => groups.value.flatMap((group) => group));
		const filteredGroups = computed(() => {
			if (props.ignoreFilter || !searchTerm.value) return groups.value;
			const fields = Array.isArray(props.filterFields) ? props.filterFields : [props.labelKey];
			return filterGroups(groups.value, searchTerm.value, {
				fields,
				isStructural: (item) => isSelectItem(item) && !!item.type && ["label", "separator"].includes(item.type)
			});
		});
		const filteredItems = computed(() => filteredGroups.value.flatMap((group) => group));
		const createItem = computed(() => {
			if (!props.createItem || !searchTerm.value) return false;
			const newItem = props.valueKey ? { [props.valueKey]: searchTerm.value } : searchTerm.value;
			if (typeof props.createItem === "object" && props.createItem.when === "always" || props.createItem === "always") return !filteredItems.value.find((item) => compare$2(item, newItem, props.by ?? props.valueKey));
			return !filteredItems.value.length;
		});
		const createItemPosition = computed(() => typeof props.createItem === "object" ? props.createItem.position : "bottom");
		const triggerRef = useTemplateRef("triggerRef");
		let autofocusTimeoutId;
		onScopeDispose(() => clearTimeout(autofocusTimeoutId));
		function onUpdate(value) {
			if (toRaw(props.modelValue) === value) return;
			if (props.modelModifiers?.trim && (typeof value === "string" || value === null || value === void 0)) value = value?.trim() ?? null;
			if (props.modelModifiers?.number) value = looseToNumber(value);
			if (props.modelModifiers?.nullable) value ??= null;
			if (props.modelModifiers?.optional && !props.modelModifiers?.nullable && value !== null) value ??= void 0;
			const event = new Event("change", { target: { value } });
			emits("change", event);
			emitFormChange();
			emitFormInput();
		}
		const isOpen = ref(false);
		let timeoutId;
		onScopeDispose(() => clearTimeout(timeoutId));
		function onUpdateOpen(value) {
			isOpen.value = value;
			if (!value) {
				const event = new FocusEvent("blur");
				emits("blur", event);
				emitFormBlur();
				if (props.resetSearchTermOnBlur) timeoutId = setTimeout(() => {
					searchTerm.value = "";
				}, 100);
			} else {
				const event = new FocusEvent("focus");
				emits("focus", event);
				emitFormFocus();
				clearTimeout(timeoutId);
			}
		}
		function onTriggerKeydown(e) {
			if (isOpen.value) return;
			const trigger = e.currentTarget;
			e.preventDefault();
			trigger.click();
		}
		function onCreate(e) {
			e.preventDefault();
			e.stopPropagation();
			emits("create", searchTerm.value);
		}
		function onSelect(e, item) {
			if (isSelectItem(item)) {
				if (item.disabled) {
					e.preventDefault();
					return;
				}
				item.onSelect?.(e);
			}
			if (!e.defaultPrevented && props.resetSearchTermOnSelect) searchTerm.value = "";
		}
		function isSelectItem(item) {
			return typeof item === "object" && item !== null;
		}
		function isModelValueEmpty(modelValue) {
			if (props.multiple && Array.isArray(modelValue)) return modelValue.length === 0;
			return modelValue === void 0 || modelValue === null || modelValue === "";
		}
		function onClear() {
			if (disabled.value) return;
			if (props.resetSearchTermOnSelect) searchTerm.value = "";
			emits("clear");
		}
		const focusScopeRef = useTemplateRef("focusScopeRef");
		function onMountAutoFocus(event) {
			if (searchInputProps.value.autofocus === false) {
				event.preventDefault();
				(focusScopeRef.value?.$el)?.focus({ preventScroll: true });
			}
		}
		function onFocusScopeKeydown(event) {
			if (event.target !== event.currentTarget) return;
			const input = event.currentTarget.querySelector("[data-slot=\"input\"] input");
			if (!input) return;
			event.preventDefault();
			input.dispatchEvent(new KeyboardEvent("keydown", {
				key: event.key,
				shiftKey: event.shiftKey,
				bubbles: true,
				cancelable: true
			}));
		}
		function onFocusOutside(event) {
			const el = focusScopeRef.value?.$el;
			if (event.defaultPrevented || el?.parentElement?.dataset.state !== "open") return;
			event.preventDefault();
			((searchInputProps.value.autofocus !== false ? el.querySelector("[data-slot=\"input\"] input") : null) ?? el).focus({ preventScroll: true });
		}
		function onUnmountAutoFocus(event) {
			const activeElement = (void 0).activeElement;
			if (activeElement && activeElement !== (void 0).body && !event.target.contains(activeElement)) event.preventDefault();
		}
		const viewportRef = useTemplateRef("viewportRef");
		const selectMenuId = useId();
		const triggerId = computed(() => id.value ?? `select-menu-${selectMenuId}`);
		const listboxId = `select-menu-listbox-${selectMenuId}`;
		const comboboxRootRef = useTemplateRef("comboboxRootRef");
		watch(() => props.items, async () => {
			if (!isOpen.value || !props.createItem) return;
			await nextTick();
			comboboxRootRef.value?.highlightFirstItem?.();
		}, { flush: "post" });
		__expose({
			triggerRef: toRef(() => triggerRef.value?.$el),
			viewportRef: toRef(() => viewportRef.value)
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(DefineCreateItemTemplate), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(ComboboxItem_default), {
						"data-slot": "item",
						class: ui.value.item({ class: unref(props).ui?.item }),
						value: searchTerm.value,
						onSelect: onCreate
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<span data-slot="itemLabel" class="${ssrRenderClass(ui.value.itemLabel({ class: unref(props).ui?.itemLabel }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => {
									_push(`${ssrInterpolate(unref(t)("selectMenu.create", { label: searchTerm.value }))}`);
								}, _push, _parent, _scopeId);
								_push(`</span>`);
							} else return [createVNode("span", {
								"data-slot": "itemLabel",
								class: ui.value.itemLabel({ class: unref(props).ui?.itemLabel })
							}, [renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)])], 2)];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(ComboboxItem_default), {
						"data-slot": "item",
						class: ui.value.item({ class: unref(props).ui?.item }),
						value: searchTerm.value,
						onSelect: onCreate
					}, {
						default: withCtx(() => [createVNode("span", {
							"data-slot": "itemLabel",
							class: ui.value.itemLabel({ class: unref(props).ui?.itemLabel })
						}, [renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)])], 2)]),
						_: 3
					}, 8, ["class", "value"])];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(unref(DefineItemTemplate), null, {
				default: withCtx(({ item, index }, _push, _parent, _scopeId) => {
					if (_push) {
						if (isSelectItem(item) && item.type === "label") _push(ssrRenderComponent(unref(ComboboxLabel_default), {
							"data-slot": "label",
							class: ui.value.label({ class: [
								unref(props).ui?.label,
								item.ui?.label,
								item.class
							] })
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`${ssrInterpolate(unref(get)(item, unref(props).labelKey))}`);
								else return [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)];
							}),
							_: 2
						}, _parent, _scopeId));
						else if (isSelectItem(item) && item.type === "separator") _push(ssrRenderComponent(unref(ComboboxSeparator_default), {
							"data-slot": "separator",
							class: ui.value.separator({ class: [
								unref(props).ui?.separator,
								item.ui?.separator,
								item.class
							] })
						}, null, _parent, _scopeId));
						else _push(ssrRenderComponent(unref(ComboboxItem_default), {
							"data-slot": "item",
							class: ui.value.item({ class: [
								unref(props).ui?.item,
								isSelectItem(item) && item.ui?.item,
								isSelectItem(item) && item.class
							] }),
							disabled: isSelectItem(item) && item.disabled,
							value: unref(props).valueKey && isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
							onSelect: ($event) => onSelect($event, item)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "item", {
									item,
									index,
									ui: ui.value
								}, () => {
									ssrRenderSlot(_ctx.$slots, "item-leading", {
										item,
										index,
										ui: ui.value
									}, () => {
										if (isSelectItem(item) && item.icon) _push(ssrRenderComponent(_sfc_main$5$1, {
											name: item.icon,
											"data-slot": "itemLeadingIcon",
											class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
										}, null, _parent, _scopeId));
										else if (isSelectItem(item) && item.avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize() }, item.avatar, {
											"data-slot": "itemLeadingAvatar",
											class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
										}), null, _parent, _scopeId));
										else if (isSelectItem(item) && item.chip) _push(ssrRenderComponent(_sfc_main$4$1, mergeProps({
											size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
											inset: "",
											standalone: ""
										}, item.chip, {
											"data-slot": "itemLeadingChip",
											class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
										}), null, _parent, _scopeId));
										else _push(`<!---->`);
									}, _push, _parent, _scopeId);
									_push(`<span data-slot="itemWrapper" class="${ssrRenderClass(ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] }))}"${_scopeId}><span data-slot="itemLabel" class="${ssrRenderClass(ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "item-label", {
										item,
										index
									}, () => {
										_push(`${ssrInterpolate(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item)}`);
									}, _push, _parent, _scopeId);
									_push(`</span>`);
									if (isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"])) {
										_push(`<span data-slot="itemDescription" class="${ssrRenderClass(ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] }))}"${_scopeId}>`);
										ssrRenderSlot(_ctx.$slots, "item-description", {
											item,
											index
										}, () => {
											_push(`${ssrInterpolate(unref(get)(item, unref(props).descriptionKey))}`);
										}, _push, _parent, _scopeId);
										_push(`</span>`);
									} else _push(`<!---->`);
									_push(`</span><span data-slot="itemTrailing" class="${ssrRenderClass(ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] }))}"${_scopeId}>`);
									ssrRenderSlot(_ctx.$slots, "item-trailing", {
										item,
										index,
										ui: ui.value
									}, null, _push, _parent, _scopeId);
									_push(ssrRenderComponent(unref(ComboboxItemIndicator_default), { "as-child": "" }, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(ssrRenderComponent(_sfc_main$5$1, {
												name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
												"data-slot": "itemTrailingIcon",
												class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
											}, null, _parent, _scopeId));
											else return [createVNode(_sfc_main$5$1, {
												name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
												"data-slot": "itemTrailingIcon",
												class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
											}, null, 8, ["name", "class"])];
										}),
										_: 2
									}, _parent, _scopeId));
									_push(`</span>`);
								}, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "item", {
									item,
									index,
									ui: ui.value
								}, () => [
									renderSlot(_ctx.$slots, "item-leading", {
										item,
										index,
										ui: ui.value
									}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
										key: 0,
										name: item.icon,
										"data-slot": "itemLeadingIcon",
										class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
									}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
										key: 1,
										size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
									}, item.avatar, {
										"data-slot": "itemLeadingAvatar",
										class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
									}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
										key: 2,
										size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
										inset: "",
										standalone: ""
									}, item.chip, {
										"data-slot": "itemLeadingChip",
										class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
									}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
									createVNode("span", {
										"data-slot": "itemWrapper",
										class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
									}, [createVNode("span", {
										"data-slot": "itemLabel",
										class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
									}, [renderSlot(_ctx.$slots, "item-label", {
										item,
										index
									}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])], 2), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
										key: 0,
										"data-slot": "itemDescription",
										class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
									}, [renderSlot(_ctx.$slots, "item-description", {
										item,
										index
									}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
									createVNode("span", {
										"data-slot": "itemTrailing",
										class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
									}, [renderSlot(_ctx.$slots, "item-trailing", {
										item,
										index,
										ui: ui.value
									}), createVNode(unref(ComboboxItemIndicator_default), { "as-child": "" }, {
										default: withCtx(() => [createVNode(_sfc_main$5$1, {
											name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
											"data-slot": "itemTrailingIcon",
											class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
										}, null, 8, ["name", "class"])]),
										_: 2
									}, 1024)], 2)
								])];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel_default), {
						key: 0,
						"data-slot": "label",
						class: ui.value.label({ class: [
							unref(props).ui?.label,
							item.ui?.label,
							item.class
						] })
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
						_: 2
					}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator_default), {
						key: 1,
						"data-slot": "separator",
						class: ui.value.separator({ class: [
							unref(props).ui?.separator,
							item.ui?.separator,
							item.class
						] })
					}, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem_default), {
						key: 2,
						"data-slot": "item",
						class: ui.value.item({ class: [
							unref(props).ui?.item,
							isSelectItem(item) && item.ui?.item,
							isSelectItem(item) && item.class
						] }),
						disabled: isSelectItem(item) && item.disabled,
						value: unref(props).valueKey && isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
						onSelect: ($event) => onSelect($event, item)
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
							item,
							index,
							ui: ui.value
						}, () => [
							renderSlot(_ctx.$slots, "item-leading", {
								item,
								index,
								ui: ui.value
							}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
								key: 0,
								name: item.icon,
								"data-slot": "itemLeadingIcon",
								class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
							}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
								key: 1,
								size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
							}, item.avatar, {
								"data-slot": "itemLeadingAvatar",
								class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
							}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
								key: 2,
								size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
								inset: "",
								standalone: ""
							}, item.chip, {
								"data-slot": "itemLeadingChip",
								class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
							}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
							createVNode("span", {
								"data-slot": "itemWrapper",
								class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
							}, [createVNode("span", {
								"data-slot": "itemLabel",
								class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
							}, [renderSlot(_ctx.$slots, "item-label", {
								item,
								index
							}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])], 2), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
								key: 0,
								"data-slot": "itemDescription",
								class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
							}, [renderSlot(_ctx.$slots, "item-description", {
								item,
								index
							}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
							createVNode("span", {
								"data-slot": "itemTrailing",
								class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
							}, [renderSlot(_ctx.$slots, "item-trailing", {
								item,
								index,
								ui: ui.value
							}), createVNode(unref(ComboboxItemIndicator_default), { "as-child": "" }, {
								default: withCtx(() => [createVNode(_sfc_main$5$1, {
									name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
									"data-slot": "itemTrailingIcon",
									class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
								}, null, 8, ["name", "class"])]),
								_: 2
							}, 1024)], 2)
						])]),
						_: 2
					}, 1032, [
						"class",
						"disabled",
						"value",
						"onSelect"
					]))];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(unref(ComboboxRoot_default), mergeProps({
				ref_key: "comboboxRootRef",
				ref: comboboxRootRef
			}, unref(rootProps), {
				"ignore-filter": "",
				"as-child": "",
				name: unref(name),
				disabled: disabled.value,
				"onUpdate:modelValue": onUpdate,
				"onUpdate:open": onUpdateOpen
			}), {
				default: withCtx(({ modelValue, open }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(ComboboxAnchor_default), { "as-child": "" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(ComboboxTrigger_default), mergeProps({
									id: triggerId.value,
									ref_key: "triggerRef",
									ref: triggerRef,
									"data-slot": "base",
									class: ui.value.base({ class: [unref(props).ui?.base, unref(props).class] }),
									tabindex: "0"
								}, {
									"aria-label": void 0,
									...unref(omitUnsafeAttrs)(_ctx.$attrs),
									...unref(ariaAttrs)
								}, {
									"aria-controls": listboxId,
									onKeydown: [onTriggerKeydown, onTriggerKeydown]
								}), {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
												_push(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
												ssrRenderSlot(_ctx.$slots, "leading", {
													modelValue,
													item: resolveSelectedItem("leading", modelValue),
													open,
													ui: ui.value
												}, () => {
													if (unref(isLeading) && unref(leadingIconName)) _push(ssrRenderComponent(_sfc_main$5$1, {
														name: unref(leadingIconName),
														"data-slot": "leadingIcon",
														class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
													}, null, _parent, _scopeId));
													else if (!!unref(props).avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize() }, unref(props).avatar, {
														"data-slot": "itemLeadingAvatar",
														class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
													}), null, _parent, _scopeId));
													else _push(`<!---->`);
												}, _push, _parent, _scopeId);
												_push(`</span>`);
											} else _push(`<!---->`);
											ssrRenderSlot(_ctx.$slots, "default", {
												modelValue,
												item: resolveSelectedItem("default", modelValue),
												open,
												ui: ui.value
											}, () => {
												_push(`<!--[-->`);
												ssrRenderList$2([displayValue(modelValue)], (displayedModelValue) => {
													_push(`<!--[-->`);
													if (displayedModelValue !== void 0 && displayedModelValue !== null) _push(`<span data-slot="value" class="${ssrRenderClass(ui.value.value({ class: unref(props).ui?.value }))}"${_scopeId}>${ssrInterpolate(displayedModelValue)}</span>`);
													else _push(`<span data-slot="placeholder" class="${ssrRenderClass(ui.value.placeholder({ class: unref(props).ui?.placeholder }))}"${_scopeId}>${ssrInterpolate(unref(props).placeholder ?? "\xA0")}</span>`);
													_push(`<!--]-->`);
												});
												_push(`<!--]-->`);
											}, _push, _parent, _scopeId);
											if (unref(isTrailing) || !!slots.trailing || !!unref(props).clear) {
												_push(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: unref(props).ui?.trailing }))}"${_scopeId}>`);
												ssrRenderSlot(_ctx.$slots, "trailing", {
													modelValue,
													item: resolveSelectedItem("trailing", modelValue),
													open,
													ui: ui.value
												}, () => {
													if (!!unref(props).clear && !disabled.value && !isModelValueEmpty(modelValue)) _push(ssrRenderComponent(unref(ComboboxCancel_default), { "as-child": "" }, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) _push(ssrRenderComponent(_sfc_main$6, mergeProps({
																as: "span",
																icon: unref(props).clearIcon || unref(appConfig).ui.icons.close,
																size: size.value,
																variant: "link",
																color: "neutral",
																tabindex: "-1"
															}, clearProps.value, {
																"data-slot": "trailingClear",
																class: ui.value.trailingClear({ class: unref(props).ui?.trailingClear }),
																onClick: onClear
															}), null, _parent, _scopeId));
															else return [createVNode(_sfc_main$6, mergeProps({
																as: "span",
																icon: unref(props).clearIcon || unref(appConfig).ui.icons.close,
																size: size.value,
																variant: "link",
																color: "neutral",
																tabindex: "-1"
															}, clearProps.value, {
																"data-slot": "trailingClear",
																class: ui.value.trailingClear({ class: unref(props).ui?.trailingClear }),
																onClick: withModifiers(onClear, ["stop"])
															}), null, 16, [
																"icon",
																"size",
																"class"
															])];
														}),
														_: 2
													}, _parent, _scopeId));
													else if (unref(trailingIconName)) _push(ssrRenderComponent(_sfc_main$5$1, {
														name: unref(trailingIconName),
														"data-slot": "trailingIcon",
														class: ui.value.trailingIcon({
															class: unref(props).ui?.trailingIcon,
															leading: unref(isLeading)
														})
													}, null, _parent, _scopeId));
													else _push(`<!---->`);
												}, _push, _parent, _scopeId);
												_push(`</span>`);
											} else _push(`<!---->`);
										} else return [
											unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
												key: 0,
												"data-slot": "leading",
												class: ui.value.leading({ class: unref(props).ui?.leading })
											}, [renderSlot(_ctx.$slots, "leading", {
												modelValue,
												item: resolveSelectedItem("leading", modelValue),
												open,
												ui: ui.value
											}, () => [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
												key: 0,
												name: unref(leadingIconName),
												"data-slot": "leadingIcon",
												class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
											}, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
												key: 1,
												size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
											}, unref(props).avatar, {
												"data-slot": "itemLeadingAvatar",
												class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
											}), null, 16, ["size", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
											renderSlot(_ctx.$slots, "default", {
												modelValue,
												item: resolveSelectedItem("default", modelValue),
												open,
												ui: ui.value
											}, () => [(openBlock(true), createBlock(Fragment, null, renderList$2([displayValue(modelValue)], (displayedModelValue) => {
												return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [displayedModelValue !== void 0 && displayedModelValue !== null ? (openBlock(), createBlock("span", {
													key: 0,
													"data-slot": "value",
													class: ui.value.value({ class: unref(props).ui?.value })
												}, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
													key: 1,
													"data-slot": "placeholder",
													class: ui.value.placeholder({ class: unref(props).ui?.placeholder })
												}, toDisplayString(unref(props).placeholder ?? "\xA0"), 3))], 64);
											}), 128))]),
											unref(isTrailing) || !!slots.trailing || !!unref(props).clear ? (openBlock(), createBlock("span", {
												key: 1,
												"data-slot": "trailing",
												class: ui.value.trailing({ class: unref(props).ui?.trailing })
											}, [renderSlot(_ctx.$slots, "trailing", {
												modelValue,
												item: resolveSelectedItem("trailing", modelValue),
												open,
												ui: ui.value
											}, () => [!!unref(props).clear && !disabled.value && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(ComboboxCancel_default), {
												key: 0,
												"as-child": ""
											}, {
												default: withCtx(() => [createVNode(_sfc_main$6, mergeProps({
													as: "span",
													icon: unref(props).clearIcon || unref(appConfig).ui.icons.close,
													size: size.value,
													variant: "link",
													color: "neutral",
													tabindex: "-1"
												}, clearProps.value, {
													"data-slot": "trailingClear",
													class: ui.value.trailingClear({ class: unref(props).ui?.trailingClear }),
													onClick: withModifiers(onClear, ["stop"])
												}), null, 16, [
													"icon",
													"size",
													"class"
												])]),
												_: 1
											})) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
												key: 1,
												name: unref(trailingIconName),
												"data-slot": "trailingIcon",
												class: ui.value.trailingIcon({
													class: unref(props).ui?.trailingIcon,
													leading: unref(isLeading)
												})
											}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
										];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(ComboboxTrigger_default), mergeProps({
									id: triggerId.value,
									ref_key: "triggerRef",
									ref: triggerRef,
									"data-slot": "base",
									class: ui.value.base({ class: [unref(props).ui?.base, unref(props).class] }),
									tabindex: "0"
								}, {
									"aria-label": void 0,
									...unref(omitUnsafeAttrs)(_ctx.$attrs),
									...unref(ariaAttrs)
								}, {
									"aria-controls": listboxId,
									onKeydown: [withKeys(onTriggerKeydown, ["down"]), withKeys(onTriggerKeydown, ["up"])]
								}), {
									default: withCtx(() => [
										unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
											key: 0,
											"data-slot": "leading",
											class: ui.value.leading({ class: unref(props).ui?.leading })
										}, [renderSlot(_ctx.$slots, "leading", {
											modelValue,
											item: resolveSelectedItem("leading", modelValue),
											open,
											ui: ui.value
										}, () => [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
											key: 0,
											name: unref(leadingIconName),
											"data-slot": "leadingIcon",
											class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
										}, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
											key: 1,
											size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
										}, unref(props).avatar, {
											"data-slot": "itemLeadingAvatar",
											class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
										}), null, 16, ["size", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
										renderSlot(_ctx.$slots, "default", {
											modelValue,
											item: resolveSelectedItem("default", modelValue),
											open,
											ui: ui.value
										}, () => [(openBlock(true), createBlock(Fragment, null, renderList$2([displayValue(modelValue)], (displayedModelValue) => {
											return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [displayedModelValue !== void 0 && displayedModelValue !== null ? (openBlock(), createBlock("span", {
												key: 0,
												"data-slot": "value",
												class: ui.value.value({ class: unref(props).ui?.value })
											}, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
												key: 1,
												"data-slot": "placeholder",
												class: ui.value.placeholder({ class: unref(props).ui?.placeholder })
											}, toDisplayString(unref(props).placeholder ?? "\xA0"), 3))], 64);
										}), 128))]),
										unref(isTrailing) || !!slots.trailing || !!unref(props).clear ? (openBlock(), createBlock("span", {
											key: 1,
											"data-slot": "trailing",
											class: ui.value.trailing({ class: unref(props).ui?.trailing })
										}, [renderSlot(_ctx.$slots, "trailing", {
											modelValue,
											item: resolveSelectedItem("trailing", modelValue),
											open,
											ui: ui.value
										}, () => [!!unref(props).clear && !disabled.value && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(ComboboxCancel_default), {
											key: 0,
											"as-child": ""
										}, {
											default: withCtx(() => [createVNode(_sfc_main$6, mergeProps({
												as: "span",
												icon: unref(props).clearIcon || unref(appConfig).ui.icons.close,
												size: size.value,
												variant: "link",
												color: "neutral",
												tabindex: "-1"
											}, clearProps.value, {
												"data-slot": "trailingClear",
												class: ui.value.trailingClear({ class: unref(props).ui?.trailingClear }),
												onClick: withModifiers(onClear, ["stop"])
											}), null, 16, [
												"icon",
												"size",
												"class"
											])]),
											_: 1
										})) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
											key: 1,
											name: unref(trailingIconName),
											"data-slot": "trailingIcon",
											class: ui.value.trailingIcon({
												class: unref(props).ui?.trailingIcon,
												leading: unref(isLeading)
											})
										}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
									]),
									_: 2
								}, 1040, ["id", "class"])];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(ComboboxPortal_default), unref(portalProps), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(unref(ComboboxContent_default), mergeProps({
											"data-slot": "content",
											class: ui.value.content({ class: unref(props).ui?.content })
										}, contentProps.value, {
											role: void 0,
											"aria-orientation": void 0,
											"aria-multiselectable": void 0,
											onFocusOutside
										}), {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													_push(ssrRenderComponent(unref(FocusScope_default), {
														ref_key: "focusScopeRef",
														ref: focusScopeRef,
														loop: "",
														"data-slot": "focusScope",
														class: ui.value.focusScope({ class: unref(props).ui?.focusScope }),
														onMountAutoFocus,
														onUnmountAutoFocus,
														onKeydown: onFocusScopeKeydown
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) {
																ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push, _parent, _scopeId);
																if (!!unref(props).searchInput) _push(ssrRenderComponent(unref(ComboboxInput_default), {
																	modelValue: searchTerm.value,
																	"onUpdate:modelValue": ($event) => searchTerm.value = $event,
																	"display-value": () => searchTerm.value,
																	"aria-controls": listboxId,
																	"as-child": ""
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(_sfc_main$7, mergeProps({
																			autofocus: "",
																			autocomplete: "off",
																			size: size.value
																		}, searchInputProps.value, {
																			"model-modifiers": { trim: unref(props).modelModifiers?.trim },
																			"data-slot": "input",
																			class: ui.value.input({ class: unref(props).ui?.input }),
																			onChange: () => {}
																		}), null, _parent, _scopeId));
																		else return [createVNode(_sfc_main$7, mergeProps({
																			autofocus: "",
																			autocomplete: "off",
																			size: size.value
																		}, searchInputProps.value, {
																			"model-modifiers": { trim: unref(props).modelModifiers?.trim },
																			"data-slot": "input",
																			class: ui.value.input({ class: unref(props).ui?.input }),
																			onChange: withModifiers(() => {}, ["stop"])
																		}), null, 16, [
																			"size",
																			"model-modifiers",
																			"class",
																			"onChange"
																		])];
																	}),
																	_: 2
																}, _parent, _scopeId));
																else _push(`<!---->`);
																_push(ssrRenderComponent(unref(ComboboxEmpty_default), {
																	"data-slot": "empty",
																	class: ui.value.empty({ class: unref(props).ui?.empty })
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
																			_push(`${ssrInterpolate(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData"))}`);
																		}, _push, _parent, _scopeId);
																		else return [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)])];
																	}),
																	_: 2
																}, _parent, _scopeId));
																_push(`<div${ssrRenderAttr("id", listboxId)} role="listbox"${ssrRenderAttr("aria-labelledby", triggerId.value)}${ssrRenderAttr("aria-multiselectable", !!unref(props).multiple)} aria-orientation="vertical" data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: unref(props).ui?.viewport }))}"${_scopeId}>`);
																if (!!unref(props).virtualize) {
																	_push(`<!--[-->`);
																	if (createItem.value && createItemPosition.value === "top") _push(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent, _scopeId));
																	else _push(`<!---->`);
																	_push(ssrRenderComponent(unref(ComboboxVirtualizer_default), mergeProps({
																		options: filteredItems.value,
																		"text-content": (item2) => isSelectItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
																	}, virtualizerProps.value), {
																		default: withCtx(({ option: item, virtualItem }, _push, _parent, _scopeId) => {
																			if (_push) _push(ssrRenderComponent(unref(ReuseItemTemplate), {
																				item,
																				index: virtualItem.index
																			}, null, _parent, _scopeId));
																			else return [createVNode(unref(ReuseItemTemplate), {
																				item,
																				index: virtualItem.index
																			}, null, 8, ["item", "index"])];
																		}),
																		_: 2
																	}, _parent, _scopeId));
																	if (createItem.value && createItemPosition.value === "bottom") _push(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent, _scopeId));
																	else _push(`<!---->`);
																	_push(`<!--]-->`);
																} else {
																	_push(`<!--[-->`);
																	if (createItem.value && createItemPosition.value === "top") _push(ssrRenderComponent(unref(ComboboxGroup_default), {
																		"data-slot": "group",
																		class: ui.value.group({ class: unref(props).ui?.group })
																	}, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) _push(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent, _scopeId));
																			else return [createVNode(unref(ReuseCreateItemTemplate))];
																		}),
																		_: 2
																	}, _parent, _scopeId));
																	else _push(`<!---->`);
																	_push(`<!--[-->`);
																	ssrRenderList$2(filteredGroups.value, (group, groupIndex) => {
																		_push(ssrRenderComponent(unref(ComboboxGroup_default), {
																			key: `group-${groupIndex}`,
																			"data-slot": "group",
																			class: ui.value.group({ class: unref(props).ui?.group })
																		}, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) {
																					_push(`<!--[-->`);
																					ssrRenderList$2(group, (item, index) => {
																						_push(ssrRenderComponent(unref(ReuseItemTemplate), {
																							key: `group-${groupIndex}-${index}`,
																							item,
																							index
																						}, null, _parent, _scopeId));
																					});
																					_push(`<!--]-->`);
																				} else return [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
																					return openBlock(), createBlock(unref(ReuseItemTemplate), {
																						key: `group-${groupIndex}-${index}`,
																						item,
																						index
																					}, null, 8, ["item", "index"]);
																				}), 128))];
																			}),
																			_: 2
																		}, _parent, _scopeId));
																	});
																	_push(`<!--]-->`);
																	if (createItem.value && createItemPosition.value === "bottom") _push(ssrRenderComponent(unref(ComboboxGroup_default), {
																		"data-slot": "group",
																		class: ui.value.group({ class: unref(props).ui?.group })
																	}, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) _push(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent, _scopeId));
																			else return [createVNode(unref(ReuseCreateItemTemplate))];
																		}),
																		_: 2
																	}, _parent, _scopeId));
																	else _push(`<!---->`);
																	_push(`<!--]-->`);
																}
																_push(`</div>`);
																ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push, _parent, _scopeId);
															} else return [
																renderSlot(_ctx.$slots, "content-top"),
																!!unref(props).searchInput ? (openBlock(), createBlock(unref(ComboboxInput_default), {
																	key: 0,
																	modelValue: searchTerm.value,
																	"onUpdate:modelValue": ($event) => searchTerm.value = $event,
																	"display-value": () => searchTerm.value,
																	"aria-controls": listboxId,
																	"as-child": ""
																}, {
																	default: withCtx(() => [createVNode(_sfc_main$7, mergeProps({
																		autofocus: "",
																		autocomplete: "off",
																		size: size.value
																	}, searchInputProps.value, {
																		"model-modifiers": { trim: unref(props).modelModifiers?.trim },
																		"data-slot": "input",
																		class: ui.value.input({ class: unref(props).ui?.input }),
																		onChange: withModifiers(() => {}, ["stop"])
																	}), null, 16, [
																		"size",
																		"model-modifiers",
																		"class",
																		"onChange"
																	])]),
																	_: 1
																}, 8, [
																	"modelValue",
																	"onUpdate:modelValue",
																	"display-value"
																])) : createCommentVNode("", true),
																createVNode(unref(ComboboxEmpty_default), {
																	"data-slot": "empty",
																	class: ui.value.empty({ class: unref(props).ui?.empty })
																}, {
																	default: withCtx(() => [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)])]),
																	_: 3
																}, 8, ["class"]),
																createVNode("div", {
																	id: listboxId,
																	ref_key: "viewportRef",
																	ref: viewportRef,
																	role: "listbox",
																	"aria-labelledby": triggerId.value,
																	"aria-multiselectable": !!unref(props).multiple,
																	"aria-orientation": "vertical",
																	"data-slot": "viewport",
																	class: ui.value.viewport({ class: unref(props).ui?.viewport })
																}, [!!unref(props).virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
																	createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
																	createVNode(unref(ComboboxVirtualizer_default), mergeProps({
																		options: filteredItems.value,
																		"text-content": (item2) => isSelectItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
																	}, virtualizerProps.value), {
																		default: withCtx(({ option: item, virtualItem }) => [createVNode(unref(ReuseItemTemplate), {
																			item,
																			index: virtualItem.index
																		}, null, 8, ["item", "index"])]),
																		_: 1
																	}, 16, ["options", "text-content"]),
																	createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
																], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
																	createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ComboboxGroup_default), {
																		key: 0,
																		"data-slot": "group",
																		class: ui.value.group({ class: unref(props).ui?.group })
																	}, {
																		default: withCtx(() => [createVNode(unref(ReuseCreateItemTemplate))]),
																		_: 1
																	}, 8, ["class"])) : createCommentVNode("", true),
																	(openBlock(true), createBlock(Fragment, null, renderList$2(filteredGroups.value, (group, groupIndex) => {
																		return openBlock(), createBlock(unref(ComboboxGroup_default), {
																			key: `group-${groupIndex}`,
																			"data-slot": "group",
																			class: ui.value.group({ class: unref(props).ui?.group })
																		}, {
																			default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
																				return openBlock(), createBlock(unref(ReuseItemTemplate), {
																					key: `group-${groupIndex}-${index}`,
																					item,
																					index
																				}, null, 8, ["item", "index"]);
																			}), 128))]),
																			_: 2
																		}, 1032, ["class"]);
																	}), 128)),
																	createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ComboboxGroup_default), {
																		key: 1,
																		"data-slot": "group",
																		class: ui.value.group({ class: unref(props).ui?.group })
																	}, {
																		default: withCtx(() => [createVNode(unref(ReuseCreateItemTemplate))]),
																		_: 1
																	}, 8, ["class"])) : createCommentVNode("", true)
																], 64))], 10, ["aria-labelledby", "aria-multiselectable"]),
																renderSlot(_ctx.$slots, "content-bottom")
															];
														}),
														_: 2
													}, _parent, _scopeId));
													if (!!unref(props).arrow) _push(ssrRenderComponent(unref(ComboboxArrow_default), mergeProps(arrowProps.value, {
														"data-slot": "arrow",
														class: ui.value.arrow({ class: unref(props).ui?.arrow })
													}), null, _parent, _scopeId));
													else _push(`<!---->`);
												} else return [createVNode(unref(FocusScope_default), {
													ref_key: "focusScopeRef",
													ref: focusScopeRef,
													loop: "",
													"data-slot": "focusScope",
													class: ui.value.focusScope({ class: unref(props).ui?.focusScope }),
													onMountAutoFocus,
													onUnmountAutoFocus,
													onKeydown: withKeys(onFocusScopeKeydown, [
														"down",
														"up",
														"home",
														"end"
													])
												}, {
													default: withCtx(() => [
														renderSlot(_ctx.$slots, "content-top"),
														!!unref(props).searchInput ? (openBlock(), createBlock(unref(ComboboxInput_default), {
															key: 0,
															modelValue: searchTerm.value,
															"onUpdate:modelValue": ($event) => searchTerm.value = $event,
															"display-value": () => searchTerm.value,
															"aria-controls": listboxId,
															"as-child": ""
														}, {
															default: withCtx(() => [createVNode(_sfc_main$7, mergeProps({
																autofocus: "",
																autocomplete: "off",
																size: size.value
															}, searchInputProps.value, {
																"model-modifiers": { trim: unref(props).modelModifiers?.trim },
																"data-slot": "input",
																class: ui.value.input({ class: unref(props).ui?.input }),
																onChange: withModifiers(() => {}, ["stop"])
															}), null, 16, [
																"size",
																"model-modifiers",
																"class",
																"onChange"
															])]),
															_: 1
														}, 8, [
															"modelValue",
															"onUpdate:modelValue",
															"display-value"
														])) : createCommentVNode("", true),
														createVNode(unref(ComboboxEmpty_default), {
															"data-slot": "empty",
															class: ui.value.empty({ class: unref(props).ui?.empty })
														}, {
															default: withCtx(() => [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)])]),
															_: 3
														}, 8, ["class"]),
														createVNode("div", {
															id: listboxId,
															ref_key: "viewportRef",
															ref: viewportRef,
															role: "listbox",
															"aria-labelledby": triggerId.value,
															"aria-multiselectable": !!unref(props).multiple,
															"aria-orientation": "vertical",
															"data-slot": "viewport",
															class: ui.value.viewport({ class: unref(props).ui?.viewport })
														}, [!!unref(props).virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
															createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
															createVNode(unref(ComboboxVirtualizer_default), mergeProps({
																options: filteredItems.value,
																"text-content": (item2) => isSelectItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
															}, virtualizerProps.value), {
																default: withCtx(({ option: item, virtualItem }) => [createVNode(unref(ReuseItemTemplate), {
																	item,
																	index: virtualItem.index
																}, null, 8, ["item", "index"])]),
																_: 1
															}, 16, ["options", "text-content"]),
															createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
														], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
															createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ComboboxGroup_default), {
																key: 0,
																"data-slot": "group",
																class: ui.value.group({ class: unref(props).ui?.group })
															}, {
																default: withCtx(() => [createVNode(unref(ReuseCreateItemTemplate))]),
																_: 1
															}, 8, ["class"])) : createCommentVNode("", true),
															(openBlock(true), createBlock(Fragment, null, renderList$2(filteredGroups.value, (group, groupIndex) => {
																return openBlock(), createBlock(unref(ComboboxGroup_default), {
																	key: `group-${groupIndex}`,
																	"data-slot": "group",
																	class: ui.value.group({ class: unref(props).ui?.group })
																}, {
																	default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
																		return openBlock(), createBlock(unref(ReuseItemTemplate), {
																			key: `group-${groupIndex}-${index}`,
																			item,
																			index
																		}, null, 8, ["item", "index"]);
																	}), 128))]),
																	_: 2
																}, 1032, ["class"]);
															}), 128)),
															createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ComboboxGroup_default), {
																key: 1,
																"data-slot": "group",
																class: ui.value.group({ class: unref(props).ui?.group })
															}, {
																default: withCtx(() => [createVNode(unref(ReuseCreateItemTemplate))]),
																_: 1
															}, 8, ["class"])) : createCommentVNode("", true)
														], 64))], 10, ["aria-labelledby", "aria-multiselectable"]),
														renderSlot(_ctx.$slots, "content-bottom")
													]),
													_: 3
												}, 8, ["class"]), !!unref(props).arrow ? (openBlock(), createBlock(unref(ComboboxArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
													"data-slot": "arrow",
													class: ui.value.arrow({ class: unref(props).ui?.arrow })
												}), null, 16, ["class"])) : createCommentVNode("", true)];
											}),
											_: 2
										}, _parent, _scopeId));
										else return [createVNode(unref(ComboboxContent_default), mergeProps({
											"data-slot": "content",
											class: ui.value.content({ class: unref(props).ui?.content })
										}, contentProps.value, {
											role: void 0,
											"aria-orientation": void 0,
											"aria-multiselectable": void 0,
											onFocusOutside
										}), {
											default: withCtx(() => [createVNode(unref(FocusScope_default), {
												ref_key: "focusScopeRef",
												ref: focusScopeRef,
												loop: "",
												"data-slot": "focusScope",
												class: ui.value.focusScope({ class: unref(props).ui?.focusScope }),
												onMountAutoFocus,
												onUnmountAutoFocus,
												onKeydown: withKeys(onFocusScopeKeydown, [
													"down",
													"up",
													"home",
													"end"
												])
											}, {
												default: withCtx(() => [
													renderSlot(_ctx.$slots, "content-top"),
													!!unref(props).searchInput ? (openBlock(), createBlock(unref(ComboboxInput_default), {
														key: 0,
														modelValue: searchTerm.value,
														"onUpdate:modelValue": ($event) => searchTerm.value = $event,
														"display-value": () => searchTerm.value,
														"aria-controls": listboxId,
														"as-child": ""
													}, {
														default: withCtx(() => [createVNode(_sfc_main$7, mergeProps({
															autofocus: "",
															autocomplete: "off",
															size: size.value
														}, searchInputProps.value, {
															"model-modifiers": { trim: unref(props).modelModifiers?.trim },
															"data-slot": "input",
															class: ui.value.input({ class: unref(props).ui?.input }),
															onChange: withModifiers(() => {}, ["stop"])
														}), null, 16, [
															"size",
															"model-modifiers",
															"class",
															"onChange"
														])]),
														_: 1
													}, 8, [
														"modelValue",
														"onUpdate:modelValue",
														"display-value"
													])) : createCommentVNode("", true),
													createVNode(unref(ComboboxEmpty_default), {
														"data-slot": "empty",
														class: ui.value.empty({ class: unref(props).ui?.empty })
													}, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)])]),
														_: 3
													}, 8, ["class"]),
													createVNode("div", {
														id: listboxId,
														ref_key: "viewportRef",
														ref: viewportRef,
														role: "listbox",
														"aria-labelledby": triggerId.value,
														"aria-multiselectable": !!unref(props).multiple,
														"aria-orientation": "vertical",
														"data-slot": "viewport",
														class: ui.value.viewport({ class: unref(props).ui?.viewport })
													}, [!!unref(props).virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
														createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
														createVNode(unref(ComboboxVirtualizer_default), mergeProps({
															options: filteredItems.value,
															"text-content": (item2) => isSelectItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
														}, virtualizerProps.value), {
															default: withCtx(({ option: item, virtualItem }) => [createVNode(unref(ReuseItemTemplate), {
																item,
																index: virtualItem.index
															}, null, 8, ["item", "index"])]),
															_: 1
														}, 16, ["options", "text-content"]),
														createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
													], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
														createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ComboboxGroup_default), {
															key: 0,
															"data-slot": "group",
															class: ui.value.group({ class: unref(props).ui?.group })
														}, {
															default: withCtx(() => [createVNode(unref(ReuseCreateItemTemplate))]),
															_: 1
														}, 8, ["class"])) : createCommentVNode("", true),
														(openBlock(true), createBlock(Fragment, null, renderList$2(filteredGroups.value, (group, groupIndex) => {
															return openBlock(), createBlock(unref(ComboboxGroup_default), {
																key: `group-${groupIndex}`,
																"data-slot": "group",
																class: ui.value.group({ class: unref(props).ui?.group })
															}, {
																default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
																	return openBlock(), createBlock(unref(ReuseItemTemplate), {
																		key: `group-${groupIndex}-${index}`,
																		item,
																		index
																	}, null, 8, ["item", "index"]);
																}), 128))]),
																_: 2
															}, 1032, ["class"]);
														}), 128)),
														createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ComboboxGroup_default), {
															key: 1,
															"data-slot": "group",
															class: ui.value.group({ class: unref(props).ui?.group })
														}, {
															default: withCtx(() => [createVNode(unref(ReuseCreateItemTemplate))]),
															_: 1
														}, 8, ["class"])) : createCommentVNode("", true)
													], 64))], 10, ["aria-labelledby", "aria-multiselectable"]),
													renderSlot(_ctx.$slots, "content-bottom")
												]),
												_: 3
											}, 8, ["class"]), !!unref(props).arrow ? (openBlock(), createBlock(unref(ComboboxArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
												"data-slot": "arrow",
												class: ui.value.arrow({ class: unref(props).ui?.arrow })
											}), null, 16, ["class"])) : createCommentVNode("", true)]),
											_: 3
										}, 16, ["class"])];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(FieldGroupReset), null, {
									default: withCtx(() => [createVNode(unref(ComboboxContent_default), mergeProps({
										"data-slot": "content",
										class: ui.value.content({ class: unref(props).ui?.content })
									}, contentProps.value, {
										role: void 0,
										"aria-orientation": void 0,
										"aria-multiselectable": void 0,
										onFocusOutside
									}), {
										default: withCtx(() => [createVNode(unref(FocusScope_default), {
											ref_key: "focusScopeRef",
											ref: focusScopeRef,
											loop: "",
											"data-slot": "focusScope",
											class: ui.value.focusScope({ class: unref(props).ui?.focusScope }),
											onMountAutoFocus,
											onUnmountAutoFocus,
											onKeydown: withKeys(onFocusScopeKeydown, [
												"down",
												"up",
												"home",
												"end"
											])
										}, {
											default: withCtx(() => [
												renderSlot(_ctx.$slots, "content-top"),
												!!unref(props).searchInput ? (openBlock(), createBlock(unref(ComboboxInput_default), {
													key: 0,
													modelValue: searchTerm.value,
													"onUpdate:modelValue": ($event) => searchTerm.value = $event,
													"display-value": () => searchTerm.value,
													"aria-controls": listboxId,
													"as-child": ""
												}, {
													default: withCtx(() => [createVNode(_sfc_main$7, mergeProps({
														autofocus: "",
														autocomplete: "off",
														size: size.value
													}, searchInputProps.value, {
														"model-modifiers": { trim: unref(props).modelModifiers?.trim },
														"data-slot": "input",
														class: ui.value.input({ class: unref(props).ui?.input }),
														onChange: withModifiers(() => {}, ["stop"])
													}), null, 16, [
														"size",
														"model-modifiers",
														"class",
														"onChange"
													])]),
													_: 1
												}, 8, [
													"modelValue",
													"onUpdate:modelValue",
													"display-value"
												])) : createCommentVNode("", true),
												createVNode(unref(ComboboxEmpty_default), {
													"data-slot": "empty",
													class: ui.value.empty({ class: unref(props).ui?.empty })
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)])]),
													_: 3
												}, 8, ["class"]),
												createVNode("div", {
													id: listboxId,
													ref_key: "viewportRef",
													ref: viewportRef,
													role: "listbox",
													"aria-labelledby": triggerId.value,
													"aria-multiselectable": !!unref(props).multiple,
													"aria-orientation": "vertical",
													"data-slot": "viewport",
													class: ui.value.viewport({ class: unref(props).ui?.viewport })
												}, [!!unref(props).virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
													createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
													createVNode(unref(ComboboxVirtualizer_default), mergeProps({
														options: filteredItems.value,
														"text-content": (item2) => isSelectItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
													}, virtualizerProps.value), {
														default: withCtx(({ option: item, virtualItem }) => [createVNode(unref(ReuseItemTemplate), {
															item,
															index: virtualItem.index
														}, null, 8, ["item", "index"])]),
														_: 1
													}, 16, ["options", "text-content"]),
													createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
												], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
													createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ComboboxGroup_default), {
														key: 0,
														"data-slot": "group",
														class: ui.value.group({ class: unref(props).ui?.group })
													}, {
														default: withCtx(() => [createVNode(unref(ReuseCreateItemTemplate))]),
														_: 1
													}, 8, ["class"])) : createCommentVNode("", true),
													(openBlock(true), createBlock(Fragment, null, renderList$2(filteredGroups.value, (group, groupIndex) => {
														return openBlock(), createBlock(unref(ComboboxGroup_default), {
															key: `group-${groupIndex}`,
															"data-slot": "group",
															class: ui.value.group({ class: unref(props).ui?.group })
														}, {
															default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
																return openBlock(), createBlock(unref(ReuseItemTemplate), {
																	key: `group-${groupIndex}-${index}`,
																	item,
																	index
																}, null, 8, ["item", "index"]);
															}), 128))]),
															_: 2
														}, 1032, ["class"]);
													}), 128)),
													createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ComboboxGroup_default), {
														key: 1,
														"data-slot": "group",
														class: ui.value.group({ class: unref(props).ui?.group })
													}, {
														default: withCtx(() => [createVNode(unref(ReuseCreateItemTemplate))]),
														_: 1
													}, 8, ["class"])) : createCommentVNode("", true)
												], 64))], 10, ["aria-labelledby", "aria-multiselectable"]),
												renderSlot(_ctx.$slots, "content-bottom")
											]),
											_: 3
										}, 8, ["class"]), !!unref(props).arrow ? (openBlock(), createBlock(unref(ComboboxArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
											"data-slot": "arrow",
											class: ui.value.arrow({ class: unref(props).ui?.arrow })
										}), null, 16, ["class"])) : createCommentVNode("", true)]),
										_: 3
									}, 16, ["class"])]),
									_: 3
								})];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [createVNode(unref(ComboboxAnchor_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(unref(ComboboxTrigger_default), mergeProps({
							id: triggerId.value,
							ref_key: "triggerRef",
							ref: triggerRef,
							"data-slot": "base",
							class: ui.value.base({ class: [unref(props).ui?.base, unref(props).class] }),
							tabindex: "0"
						}, {
							"aria-label": void 0,
							...unref(omitUnsafeAttrs)(_ctx.$attrs),
							...unref(ariaAttrs)
						}, {
							"aria-controls": listboxId,
							onKeydown: [withKeys(onTriggerKeydown, ["down"]), withKeys(onTriggerKeydown, ["up"])]
						}), {
							default: withCtx(() => [
								unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
									key: 0,
									"data-slot": "leading",
									class: ui.value.leading({ class: unref(props).ui?.leading })
								}, [renderSlot(_ctx.$slots, "leading", {
									modelValue,
									item: resolveSelectedItem("leading", modelValue),
									open,
									ui: ui.value
								}, () => [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
									key: 0,
									name: unref(leadingIconName),
									"data-slot": "leadingIcon",
									class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
								}, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
									key: 1,
									size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
								}, unref(props).avatar, {
									"data-slot": "itemLeadingAvatar",
									class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
								}), null, 16, ["size", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
								renderSlot(_ctx.$slots, "default", {
									modelValue,
									item: resolveSelectedItem("default", modelValue),
									open,
									ui: ui.value
								}, () => [(openBlock(true), createBlock(Fragment, null, renderList$2([displayValue(modelValue)], (displayedModelValue) => {
									return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [displayedModelValue !== void 0 && displayedModelValue !== null ? (openBlock(), createBlock("span", {
										key: 0,
										"data-slot": "value",
										class: ui.value.value({ class: unref(props).ui?.value })
									}, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
										key: 1,
										"data-slot": "placeholder",
										class: ui.value.placeholder({ class: unref(props).ui?.placeholder })
									}, toDisplayString(unref(props).placeholder ?? "\xA0"), 3))], 64);
								}), 128))]),
								unref(isTrailing) || !!slots.trailing || !!unref(props).clear ? (openBlock(), createBlock("span", {
									key: 1,
									"data-slot": "trailing",
									class: ui.value.trailing({ class: unref(props).ui?.trailing })
								}, [renderSlot(_ctx.$slots, "trailing", {
									modelValue,
									item: resolveSelectedItem("trailing", modelValue),
									open,
									ui: ui.value
								}, () => [!!unref(props).clear && !disabled.value && !isModelValueEmpty(modelValue) ? (openBlock(), createBlock(unref(ComboboxCancel_default), {
									key: 0,
									"as-child": ""
								}, {
									default: withCtx(() => [createVNode(_sfc_main$6, mergeProps({
										as: "span",
										icon: unref(props).clearIcon || unref(appConfig).ui.icons.close,
										size: size.value,
										variant: "link",
										color: "neutral",
										tabindex: "-1"
									}, clearProps.value, {
										"data-slot": "trailingClear",
										class: ui.value.trailingClear({ class: unref(props).ui?.trailingClear }),
										onClick: withModifiers(onClear, ["stop"])
									}), null, 16, [
										"icon",
										"size",
										"class"
									])]),
									_: 1
								})) : unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
									key: 1,
									name: unref(trailingIconName),
									"data-slot": "trailingIcon",
									class: ui.value.trailingIcon({
										class: unref(props).ui?.trailingIcon,
										leading: unref(isLeading)
									})
								}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
							]),
							_: 2
						}, 1040, ["id", "class"])]),
						_: 2
					}, 1024), createVNode(unref(ComboboxPortal_default), unref(portalProps), {
						default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
							default: withCtx(() => [createVNode(unref(ComboboxContent_default), mergeProps({
								"data-slot": "content",
								class: ui.value.content({ class: unref(props).ui?.content })
							}, contentProps.value, {
								role: void 0,
								"aria-orientation": void 0,
								"aria-multiselectable": void 0,
								onFocusOutside
							}), {
								default: withCtx(() => [createVNode(unref(FocusScope_default), {
									ref_key: "focusScopeRef",
									ref: focusScopeRef,
									loop: "",
									"data-slot": "focusScope",
									class: ui.value.focusScope({ class: unref(props).ui?.focusScope }),
									onMountAutoFocus,
									onUnmountAutoFocus,
									onKeydown: withKeys(onFocusScopeKeydown, [
										"down",
										"up",
										"home",
										"end"
									])
								}, {
									default: withCtx(() => [
										renderSlot(_ctx.$slots, "content-top"),
										!!unref(props).searchInput ? (openBlock(), createBlock(unref(ComboboxInput_default), {
											key: 0,
											modelValue: searchTerm.value,
											"onUpdate:modelValue": ($event) => searchTerm.value = $event,
											"display-value": () => searchTerm.value,
											"aria-controls": listboxId,
											"as-child": ""
										}, {
											default: withCtx(() => [createVNode(_sfc_main$7, mergeProps({
												autofocus: "",
												autocomplete: "off",
												size: size.value
											}, searchInputProps.value, {
												"model-modifiers": { trim: unref(props).modelModifiers?.trim },
												"data-slot": "input",
												class: ui.value.input({ class: unref(props).ui?.input }),
												onChange: withModifiers(() => {}, ["stop"])
											}), null, 16, [
												"size",
												"model-modifiers",
												"class",
												"onChange"
											])]),
											_: 1
										}, 8, [
											"modelValue",
											"onUpdate:modelValue",
											"display-value"
										])) : createCommentVNode("", true),
										createVNode(unref(ComboboxEmpty_default), {
											"data-slot": "empty",
											class: ui.value.empty({ class: unref(props).ui?.empty })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)])]),
											_: 3
										}, 8, ["class"]),
										createVNode("div", {
											id: listboxId,
											ref_key: "viewportRef",
											ref: viewportRef,
											role: "listbox",
											"aria-labelledby": triggerId.value,
											"aria-multiselectable": !!unref(props).multiple,
											"aria-orientation": "vertical",
											"data-slot": "viewport",
											class: ui.value.viewport({ class: unref(props).ui?.viewport })
										}, [!!unref(props).virtualize ? (openBlock(), createBlock(Fragment, { key: 0 }, [
											createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
											createVNode(unref(ComboboxVirtualizer_default), mergeProps({
												options: filteredItems.value,
												"text-content": (item2) => isSelectItem(item2) ? unref(get)(item2, unref(props).labelKey) : String(item2)
											}, virtualizerProps.value), {
												default: withCtx(({ option: item, virtualItem }) => [createVNode(unref(ReuseItemTemplate), {
													item,
													index: virtualItem.index
												}, null, 8, ["item", "index"])]),
												_: 1
											}, 16, ["options", "text-content"]),
											createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
										], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
											createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ComboboxGroup_default), {
												key: 0,
												"data-slot": "group",
												class: ui.value.group({ class: unref(props).ui?.group })
											}, {
												default: withCtx(() => [createVNode(unref(ReuseCreateItemTemplate))]),
												_: 1
											}, 8, ["class"])) : createCommentVNode("", true),
											(openBlock(true), createBlock(Fragment, null, renderList$2(filteredGroups.value, (group, groupIndex) => {
												return openBlock(), createBlock(unref(ComboboxGroup_default), {
													key: `group-${groupIndex}`,
													"data-slot": "group",
													class: ui.value.group({ class: unref(props).ui?.group })
												}, {
													default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
														return openBlock(), createBlock(unref(ReuseItemTemplate), {
															key: `group-${groupIndex}-${index}`,
															item,
															index
														}, null, 8, ["item", "index"]);
													}), 128))]),
													_: 2
												}, 1032, ["class"]);
											}), 128)),
											createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ComboboxGroup_default), {
												key: 1,
												"data-slot": "group",
												class: ui.value.group({ class: unref(props).ui?.group })
											}, {
												default: withCtx(() => [createVNode(unref(ReuseCreateItemTemplate))]),
												_: 1
											}, 8, ["class"])) : createCommentVNode("", true)
										], 64))], 10, ["aria-labelledby", "aria-multiselectable"]),
										renderSlot(_ctx.$slots, "content-bottom")
									]),
									_: 3
								}, 8, ["class"]), !!unref(props).arrow ? (openBlock(), createBlock(unref(ComboboxArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
									"data-slot": "arrow",
									class: ui.value.arrow({ class: unref(props).ui?.arrow })
								}), null, 16, ["class"])) : createCommentVNode("", true)]),
								_: 3
							}, 16, ["class"])]),
							_: 3
						})]),
						_: 3
					}, 16)];
				}),
				_: 3
			}, _parent));
			_push(`<!--]-->`);
		};
	}
});
var _sfc_setup$4 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Finput-tags.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Finput_tags_default = {
	"slots": {
		"root": ["relative inline-flex items-center", "flex-wrap"],
		"base": ["rounded-md", "transition-colors"],
		"leading": "absolute inset-y-0 start-0 flex items-center",
		"leadingIcon": "shrink-0 text-dimmed",
		"leadingAvatar": "shrink-0",
		"leadingAvatarSize": "",
		"trailing": "absolute inset-y-0 end-0 flex items-center",
		"trailingIcon": "shrink-0 text-dimmed",
		"item": "px-1.5 py-0.5 rounded-sm font-medium inline-flex items-center gap-0.5 ring ring-inset ring-accented bg-elevated text-default data-disabled:cursor-not-allowed data-disabled:opacity-75 wrap-anywhere data-[state=active]:bg-accented",
		"itemText": "",
		"itemDelete": ["inline-flex items-center rounded-xs text-dimmed hover:text-default hover:bg-accented/75 disabled:pointer-events-none", "transition-colors"],
		"itemDeleteIcon": "shrink-0",
		"input": "flex-1 border-0 bg-transparent placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
	},
	"variants": {
		"fieldGroup": {
			"horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
			"vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
		},
		"size": {
			"xs": {
				"base": "px-2 py-1 text-sm/4 gap-1",
				"leading": "ps-2",
				"trailing": "pe-2",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4",
				"item": "text-[10px]/3",
				"itemDeleteIcon": "size-3"
			},
			"sm": {
				"base": "px-2.5 py-1.5 text-sm/4 gap-1.5",
				"leading": "ps-2.5",
				"trailing": "pe-2.5",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4",
				"item": "text-[10px]/3",
				"itemDeleteIcon": "size-3"
			},
			"md": {
				"base": "px-2.5 py-1.5 text-base/5 gap-1.5",
				"leading": "ps-2.5",
				"trailing": "pe-2.5",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5",
				"item": "text-xs",
				"itemDeleteIcon": "size-3.5"
			},
			"lg": {
				"base": "px-3 py-2 text-base/5 gap-2",
				"leading": "ps-3",
				"trailing": "pe-3",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5",
				"item": "text-xs",
				"itemDeleteIcon": "size-3.5"
			},
			"xl": {
				"base": "px-3 py-2 text-base gap-2",
				"leading": "ps-3",
				"trailing": "pe-3",
				"leadingIcon": "size-6",
				"leadingAvatarSize": "xs",
				"trailingIcon": "size-6",
				"item": "text-sm",
				"itemDeleteIcon": "size-4"
			}
		},
		"variant": {
			"outline": "text-highlighted bg-default ring ring-inset ring-accented",
			"soft": "text-highlighted bg-elevated/50 hover:bg-elevated has-focus:bg-elevated disabled:bg-elevated/50",
			"subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
			"ghost": "text-highlighted bg-transparent hover:bg-elevated has-focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
			"none": "text-highlighted bg-transparent has-focus:outline-none"
		},
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"leading": { "true": "" },
		"trailing": { "true": "" },
		"loading": { "true": "" },
		"highlight": { "true": "" },
		"fixed": { "false": "" },
		"type": { "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none" }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": ["outline", "subtle"],
			"class": "outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-primary"
		},
		{
			"color": "secondary",
			"variant": ["outline", "subtle"],
			"class": "outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-secondary"
		},
		{
			"color": "success",
			"variant": ["outline", "subtle"],
			"class": "outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-success"
		},
		{
			"color": "info",
			"variant": ["outline", "subtle"],
			"class": "outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-info"
		},
		{
			"color": "warning",
			"variant": ["outline", "subtle"],
			"class": "outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-warning"
		},
		{
			"color": "error",
			"variant": ["outline", "subtle"],
			"class": "outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-error"
		},
		{
			"color": "primary",
			"variant": ["soft", "ghost"],
			"class": "outline-primary/25 has-focus-visible:outline-3"
		},
		{
			"color": "secondary",
			"variant": ["soft", "ghost"],
			"class": "outline-secondary/25 has-focus-visible:outline-3"
		},
		{
			"color": "success",
			"variant": ["soft", "ghost"],
			"class": "outline-success/25 has-focus-visible:outline-3"
		},
		{
			"color": "info",
			"variant": ["soft", "ghost"],
			"class": "outline-info/25 has-focus-visible:outline-3"
		},
		{
			"color": "warning",
			"variant": ["soft", "ghost"],
			"class": "outline-warning/25 has-focus-visible:outline-3"
		},
		{
			"color": "error",
			"variant": ["soft", "ghost"],
			"class": "outline-error/25 has-focus-visible:outline-3"
		},
		{
			"color": "primary",
			"highlight": true,
			"class": "ring ring-inset ring-primary"
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": "ring ring-inset ring-secondary"
		},
		{
			"color": "success",
			"highlight": true,
			"class": "ring ring-inset ring-success"
		},
		{
			"color": "info",
			"highlight": true,
			"class": "ring ring-inset ring-info"
		},
		{
			"color": "warning",
			"highlight": true,
			"class": "ring ring-inset ring-warning"
		},
		{
			"color": "error",
			"highlight": true,
			"class": "ring ring-inset ring-error"
		},
		{
			"color": "neutral",
			"variant": ["outline", "subtle"],
			"class": "outline-inverted/25 has-focus-visible:outline-3 has-focus-visible:ring-inverted"
		},
		{
			"color": "neutral",
			"variant": ["soft", "ghost"],
			"class": "outline-inverted/25 has-focus-visible:outline-3"
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": "ring ring-inset ring-inverted"
		},
		{
			"leading": true,
			"size": "xs",
			"class": "ps-7"
		},
		{
			"leading": true,
			"size": "sm",
			"class": "ps-8"
		},
		{
			"leading": true,
			"size": "md",
			"class": "ps-9"
		},
		{
			"leading": true,
			"size": "lg",
			"class": "ps-10"
		},
		{
			"leading": true,
			"size": "xl",
			"class": "ps-11"
		},
		{
			"trailing": true,
			"size": "xs",
			"class": "pe-7"
		},
		{
			"trailing": true,
			"size": "sm",
			"class": "pe-8"
		},
		{
			"trailing": true,
			"size": "md",
			"class": "pe-9"
		},
		{
			"trailing": true,
			"size": "lg",
			"class": "pe-10"
		},
		{
			"trailing": true,
			"size": "xl",
			"class": "pe-11"
		},
		{
			"loading": true,
			"leading": true,
			"class": { "leadingIcon": "animate-spin" }
		},
		{
			"loading": true,
			"leading": false,
			"trailing": true,
			"class": { "trailingIcon": "animate-spin" }
		},
		{
			"fixed": false,
			"size": "xs",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "sm",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "md",
			"class": "md:text-sm"
		},
		{
			"fixed": false,
			"size": "lg",
			"class": "md:text-sm"
		}
	],
	"defaultVariants": {
		"size": "md",
		"color": "primary",
		"variant": "outline"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/InputTags.vue
var _sfc_main$2 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UInputTags",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		placeholder: {
			type: String,
			required: false
		},
		maxLength: {
			type: Number,
			required: false
		},
		color: {
			type: null,
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
		autofocus: {
			type: Boolean,
			required: false
		},
		autofocusDelay: {
			type: Number,
			required: false,
			default: 0
		},
		deleteIcon: {
			type: null,
			required: false
		},
		highlight: {
			type: Boolean,
			required: false
		},
		fixed: {
			type: Boolean,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		modelValue: {
			type: [Array, null],
			required: false
		},
		defaultValue: {
			type: Array,
			required: false
		},
		addOnPaste: {
			type: Boolean,
			required: false
		},
		addOnTab: {
			type: Boolean,
			required: false
		},
		addOnBlur: {
			type: Boolean,
			required: false
		},
		duplicate: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		delimiter: {
			type: null,
			required: false
		},
		max: {
			type: Number,
			required: false
		},
		id: {
			type: String,
			required: false
		},
		convertValue: {
			type: Function,
			required: false
		},
		displayValue: {
			type: Function,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
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
		leading: {
			type: Boolean,
			required: false
		},
		leadingIcon: {
			type: null,
			required: false
		},
		trailing: {
			type: Boolean,
			required: false
		},
		trailingIcon: {
			type: null,
			required: false
		},
		loading: {
			type: Boolean,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		}
	},
	emits: [
		"change",
		"blur",
		"focus",
		"update:modelValue",
		"invalid",
		"addTag",
		"removeTag"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("inputTags", _props);
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(props, [
			"as",
			"addOnPaste",
			"addOnTab",
			"addOnBlur",
			"duplicate",
			"delimiter",
			"max",
			"convertValue",
			"displayValue",
			"required"
		], emits);
		const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, size: formFieldSize, color: formFieldColor, id, name, highlight: formFieldHighlight, disabled: formFieldDisabled, ariaAttrs } = useFormField(_props);
		const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
		const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => fieldGroupSize.value ?? formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Finput_tags_default,
			...appConfig.ui?.inputTags || {}
		})({
			color: color.value,
			variant: props.variant,
			size: size.value,
			loading: props.loading,
			highlight: highlight.value,
			fixed: props.fixed,
			leading: isLeading.value || !!props.avatar || !!slots.leading,
			trailing: isTrailing.value || !!slots.trailing,
			fieldGroup: orientation.value
		}));
		const inputRef = useTemplateRef("inputRef");
		let autofocusTimeoutId;
		onScopeDispose(() => clearTimeout(autofocusTimeoutId));
		function onUpdate(value) {
			if (toRaw(props.modelValue) === value) return;
			const event = new Event("change", { target: { value } });
			emits("change", event);
			emitFormChange();
			emitFormInput();
		}
		function onBlur(event) {
			emits("blur", event);
			emitFormBlur();
		}
		function onFocus(event) {
			emits("focus", event);
			emitFormFocus();
		}
		__expose({ inputRef: toRef(() => inputRef.value?.$el) });
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(TagsInputRoot_default), mergeProps({
				id: unref(id),
				"model-value": unref(props).modelValue,
				"default-value": unref(props).defaultValue,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [
					ui.value.base({ class: unref(props).ui?.base }),
					unref(props).ui?.root,
					unref(props).class
				] })
			}, unref(rootProps), {
				name: unref(name),
				disabled: disabled.value,
				"onUpdate:modelValue": onUpdate
			}, _attrs), {
				default: withCtx(({ modelValue: tags }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<!--[-->`);
						ssrRenderList$2(tags, (item, index) => {
							_push(ssrRenderComponent(unref(TagsInputItem_default), {
								key: index,
								value: item,
								"data-slot": "item",
								class: ui.value.item({ class: [unref(props).ui?.item] })
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(ssrRenderComponent(unref(TagsInputItemText_default), {
											"data-slot": "itemText",
											class: ui.value.itemText({ class: [unref(props).ui?.itemText] })
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													if (!!slots["item-text"]) ssrRenderSlot(_ctx.$slots, "item-text", {
														item,
														index,
														ui: ui.value
													}, null, _push, _parent, _scopeId);
													else _push(`<!---->`);
												} else return [!!slots["item-text"] ? renderSlot(_ctx.$slots, "item-text", {
													item,
													index,
													ui: ui.value
												}, void 0, void 0, 0) : createCommentVNode("", true)];
											}),
											_: 2
										}, _parent, _scopeId));
										_push(ssrRenderComponent(unref(TagsInputItemDelete_default), {
											"data-slot": "itemDelete",
											class: ui.value.itemDelete({ class: [unref(props).ui?.itemDelete] }),
											disabled: disabled.value
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) ssrRenderSlot(_ctx.$slots, "item-delete", {
													item,
													index,
													ui: ui.value
												}, () => {
													_push(ssrRenderComponent(_sfc_main$5$1, {
														name: unref(props).deleteIcon || unref(appConfig).ui.icons.close,
														"data-slot": "itemDeleteIcon",
														class: ui.value.itemDeleteIcon({ class: [unref(props).ui?.itemDeleteIcon] })
													}, null, _parent, _scopeId));
												}, _push, _parent, _scopeId);
												else return [renderSlot(_ctx.$slots, "item-delete", {
													item,
													index,
													ui: ui.value
												}, () => [createVNode(_sfc_main$5$1, {
													name: unref(props).deleteIcon || unref(appConfig).ui.icons.close,
													"data-slot": "itemDeleteIcon",
													class: ui.value.itemDeleteIcon({ class: [unref(props).ui?.itemDeleteIcon] })
												}, null, 8, ["name", "class"])])];
											}),
											_: 2
										}, _parent, _scopeId));
									} else return [createVNode(unref(TagsInputItemText_default), {
										"data-slot": "itemText",
										class: ui.value.itemText({ class: [unref(props).ui?.itemText] })
									}, {
										default: withCtx(() => [!!slots["item-text"] ? renderSlot(_ctx.$slots, "item-text", {
											item,
											index,
											ui: ui.value
										}, void 0, void 0, 0) : createCommentVNode("", true)]),
										_: 2
									}, 1032, ["class"]), createVNode(unref(TagsInputItemDelete_default), {
										"data-slot": "itemDelete",
										class: ui.value.itemDelete({ class: [unref(props).ui?.itemDelete] }),
										disabled: disabled.value
									}, {
										default: withCtx(() => [renderSlot(_ctx.$slots, "item-delete", {
											item,
											index,
											ui: ui.value
										}, () => [createVNode(_sfc_main$5$1, {
											name: unref(props).deleteIcon || unref(appConfig).ui.icons.close,
											"data-slot": "itemDeleteIcon",
											class: ui.value.itemDeleteIcon({ class: [unref(props).ui?.itemDeleteIcon] })
										}, null, 8, ["name", "class"])])]),
										_: 2
									}, 1032, ["class", "disabled"])];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]-->`);
						_push(ssrRenderComponent(unref(TagsInputInput_default), mergeProps({
							ref_key: "inputRef",
							ref: inputRef
						}, {
							..._ctx.$attrs,
							...unref(ariaAttrs)
						}, {
							placeholder: unref(props).placeholder,
							"max-length": unref(props).maxLength,
							"data-slot": "input",
							class: ui.value.input({ class: unref(props).ui?.input }),
							onBlur,
							onFocus
						}), null, _parent, _scopeId));
						ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push, _parent, _scopeId);
						if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
							_push(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
								if (unref(isLeading) && unref(leadingIconName)) _push(ssrRenderComponent(_sfc_main$5$1, {
									name: unref(leadingIconName),
									"data-slot": "leadingIcon",
									class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
								}, null, _parent, _scopeId));
								else if (!!unref(props).avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize() }, unref(props).avatar, {
									"data-slot": "leadingAvatar",
									class: ui.value.leadingAvatar({ class: unref(props).ui?.leadingAvatar })
								}), null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</span>`);
						} else _push(`<!---->`);
						if (unref(isTrailing) || !!slots.trailing) {
							_push(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: unref(props).ui?.trailing }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
								if (unref(trailingIconName)) _push(ssrRenderComponent(_sfc_main$5$1, {
									name: unref(trailingIconName),
									"data-slot": "trailingIcon",
									class: ui.value.trailingIcon({
										class: unref(props).ui?.trailingIcon,
										leading: unref(isLeading)
									})
								}, null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</span>`);
						} else _push(`<!---->`);
					} else return [
						(openBlock(true), createBlock(Fragment, null, renderList$2(tags, (item, index) => {
							return openBlock(), createBlock(unref(TagsInputItem_default), {
								key: index,
								value: item,
								"data-slot": "item",
								class: ui.value.item({ class: [unref(props).ui?.item] })
							}, {
								default: withCtx(() => [createVNode(unref(TagsInputItemText_default), {
									"data-slot": "itemText",
									class: ui.value.itemText({ class: [unref(props).ui?.itemText] })
								}, {
									default: withCtx(() => [!!slots["item-text"] ? renderSlot(_ctx.$slots, "item-text", {
										item,
										index,
										ui: ui.value
									}, void 0, void 0, 0) : createCommentVNode("", true)]),
									_: 2
								}, 1032, ["class"]), createVNode(unref(TagsInputItemDelete_default), {
									"data-slot": "itemDelete",
									class: ui.value.itemDelete({ class: [unref(props).ui?.itemDelete] }),
									disabled: disabled.value
								}, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "item-delete", {
										item,
										index,
										ui: ui.value
									}, () => [createVNode(_sfc_main$5$1, {
										name: unref(props).deleteIcon || unref(appConfig).ui.icons.close,
										"data-slot": "itemDeleteIcon",
										class: ui.value.itemDeleteIcon({ class: [unref(props).ui?.itemDeleteIcon] })
									}, null, 8, ["name", "class"])])]),
									_: 2
								}, 1032, ["class", "disabled"])]),
								_: 2
							}, 1032, ["value", "class"]);
						}), 128)),
						createVNode(unref(TagsInputInput_default), mergeProps({
							ref_key: "inputRef",
							ref: inputRef
						}, {
							..._ctx.$attrs,
							...unref(ariaAttrs)
						}, {
							placeholder: unref(props).placeholder,
							"max-length": unref(props).maxLength,
							"data-slot": "input",
							class: ui.value.input({ class: unref(props).ui?.input }),
							onBlur,
							onFocus
						}), null, 16, [
							"placeholder",
							"max-length",
							"class"
						]),
						renderSlot(_ctx.$slots, "default", { ui: ui.value }),
						unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
							key: 0,
							"data-slot": "leading",
							class: ui.value.leading({ class: unref(props).ui?.leading })
						}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
							key: 0,
							name: unref(leadingIconName),
							"data-slot": "leadingIcon",
							class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
						}, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
							key: 1,
							size: unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
						}, unref(props).avatar, {
							"data-slot": "leadingAvatar",
							class: ui.value.leadingAvatar({ class: unref(props).ui?.leadingAvatar })
						}), null, 16, ["size", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
						unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
							key: 1,
							"data-slot": "trailing",
							class: ui.value.trailing({ class: unref(props).ui?.trailing })
						}, [renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
							key: 0,
							name: unref(trailingIconName),
							"data-slot": "trailingIcon",
							class: ui.value.trailingIcon({
								class: unref(props).ui?.trailingIcon,
								leading: unref(isLeading)
							})
						}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$3 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/InputTags.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Ftextarea.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ftextarea_default = {
	"slots": {
		"root": "relative inline-flex items-center",
		"base": ["w-full rounded-md border-0 appearance-none placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"],
		"leading": "absolute start-0 flex items-start",
		"leadingIcon": "shrink-0 text-dimmed",
		"leadingAvatar": "shrink-0",
		"leadingAvatarSize": "",
		"trailing": "absolute end-0 flex items-start",
		"trailingIcon": "shrink-0 text-dimmed"
	},
	"variants": {
		"fieldGroup": {
			"horizontal": {
				"root": "group has-focus-visible:z-[1]",
				"base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
			},
			"vertical": {
				"root": "group has-focus-visible:z-[1]",
				"base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
			}
		},
		"size": {
			"xs": {
				"base": "px-2 py-1 text-sm/4 gap-1",
				"leading": "ps-2 inset-y-1",
				"trailing": "pe-2 inset-y-1",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4"
			},
			"sm": {
				"base": "px-2.5 py-1.5 text-sm/4 gap-1.5",
				"leading": "ps-2.5 inset-y-1.5",
				"trailing": "pe-2.5 inset-y-1.5",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4"
			},
			"md": {
				"base": "px-2.5 py-1.5 text-base/5 gap-1.5",
				"leading": "ps-2.5 inset-y-1.5",
				"trailing": "pe-2.5 inset-y-1.5",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5"
			},
			"lg": {
				"base": "px-3 py-2 text-base/5 gap-2",
				"leading": "ps-3 inset-y-2",
				"trailing": "pe-3 inset-y-2",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5"
			},
			"xl": {
				"base": "px-3 py-2 text-base gap-2",
				"leading": "ps-3 inset-y-2",
				"trailing": "pe-3 inset-y-2",
				"leadingIcon": "size-6",
				"leadingAvatarSize": "xs",
				"trailingIcon": "size-6"
			}
		},
		"variant": {
			"outline": "text-highlighted bg-default ring ring-inset ring-accented",
			"soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
			"subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
			"ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
			"none": "text-highlighted bg-transparent focus:outline-none"
		},
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"leading": { "true": "" },
		"trailing": { "true": "" },
		"loading": { "true": "" },
		"highlight": { "true": "" },
		"fixed": { "false": "" },
		"type": { "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none" },
		"autoresize": { "true": { "base": "resize-none" } }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": ["outline", "subtle"],
			"class": "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			"color": "secondary",
			"variant": ["outline", "subtle"],
			"class": "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			"color": "success",
			"variant": ["outline", "subtle"],
			"class": "outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			"color": "info",
			"variant": ["outline", "subtle"],
			"class": "outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			"color": "warning",
			"variant": ["outline", "subtle"],
			"class": "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			"color": "error",
			"variant": ["outline", "subtle"],
			"class": "outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			"color": "primary",
			"variant": ["soft", "ghost"],
			"class": "outline-primary/25 focus-visible:outline-3"
		},
		{
			"color": "secondary",
			"variant": ["soft", "ghost"],
			"class": "outline-secondary/25 focus-visible:outline-3"
		},
		{
			"color": "success",
			"variant": ["soft", "ghost"],
			"class": "outline-success/25 focus-visible:outline-3"
		},
		{
			"color": "info",
			"variant": ["soft", "ghost"],
			"class": "outline-info/25 focus-visible:outline-3"
		},
		{
			"color": "warning",
			"variant": ["soft", "ghost"],
			"class": "outline-warning/25 focus-visible:outline-3"
		},
		{
			"color": "error",
			"variant": ["soft", "ghost"],
			"class": "outline-error/25 focus-visible:outline-3"
		},
		{
			"color": "primary",
			"highlight": true,
			"class": "ring ring-inset ring-primary"
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": "ring ring-inset ring-secondary"
		},
		{
			"color": "success",
			"highlight": true,
			"class": "ring ring-inset ring-success"
		},
		{
			"color": "info",
			"highlight": true,
			"class": "ring ring-inset ring-info"
		},
		{
			"color": "warning",
			"highlight": true,
			"class": "ring ring-inset ring-warning"
		},
		{
			"color": "error",
			"highlight": true,
			"class": "ring ring-inset ring-error"
		},
		{
			"color": "neutral",
			"variant": ["outline", "subtle"],
			"class": "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			"color": "neutral",
			"variant": ["soft", "ghost"],
			"class": "outline-inverted/25 focus-visible:outline-3"
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": "ring ring-inset ring-inverted"
		},
		{
			"leading": true,
			"size": "xs",
			"class": "ps-7"
		},
		{
			"leading": true,
			"size": "sm",
			"class": "ps-8"
		},
		{
			"leading": true,
			"size": "md",
			"class": "ps-9"
		},
		{
			"leading": true,
			"size": "lg",
			"class": "ps-10"
		},
		{
			"leading": true,
			"size": "xl",
			"class": "ps-11"
		},
		{
			"trailing": true,
			"size": "xs",
			"class": "pe-7"
		},
		{
			"trailing": true,
			"size": "sm",
			"class": "pe-8"
		},
		{
			"trailing": true,
			"size": "md",
			"class": "pe-9"
		},
		{
			"trailing": true,
			"size": "lg",
			"class": "pe-10"
		},
		{
			"trailing": true,
			"size": "xl",
			"class": "pe-11"
		},
		{
			"loading": true,
			"leading": true,
			"class": { "leadingIcon": "animate-spin" }
		},
		{
			"loading": true,
			"leading": false,
			"trailing": true,
			"class": { "trailingIcon": "animate-spin" }
		},
		{
			"fixed": false,
			"size": "xs",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "sm",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "md",
			"class": "md:text-sm"
		},
		{
			"fixed": false,
			"size": "lg",
			"class": "md:text-sm"
		}
	],
	"defaultVariants": {
		"size": "md",
		"color": "primary",
		"variant": "outline"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue
var _sfc_main$1 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UTextarea",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		id: {
			type: String,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		placeholder: {
			type: String,
			required: false
		},
		color: {
			type: null,
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
		required: {
			type: Boolean,
			required: false
		},
		autofocus: {
			type: Boolean,
			required: false
		},
		autofocusDelay: {
			type: Number,
			required: false,
			default: 0
		},
		autoresize: {
			type: Boolean,
			required: false
		},
		autoresizeDelay: {
			type: Number,
			required: false,
			default: 0
		},
		disabled: {
			type: Boolean,
			required: false
		},
		rows: {
			type: Number,
			required: false,
			default: 3
		},
		maxrows: {
			type: Number,
			required: false,
			default: 0
		},
		highlight: {
			type: Boolean,
			required: false
		},
		fixed: {
			type: Boolean,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		modelModifiers: {
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
		},
		icon: {
			type: null,
			required: false
		},
		avatar: {
			type: Object,
			required: false
		},
		leading: {
			type: Boolean,
			required: false
		},
		leadingIcon: {
			type: null,
			required: false
		},
		trailing: {
			type: Boolean,
			required: false
		},
		trailingIcon: {
			type: null,
			required: false
		},
		loading: {
			type: Boolean,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		}
	},
	emits: [
		"update:modelValue",
		"blur",
		"change"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("textarea", _props);
		const modelValue = useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
		const appConfig = useAppConfig();
		const { emitFormFocus, emitFormBlur, emitFormInput, emitFormChange, size: formFieldSize, color: formFieldColor, id, name, highlight: formFieldHighlight, disabled: formFieldDisabled, ariaAttrs } = useFormField(_props, { deferInputValidation: true });
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ftextarea_default,
			...appConfig.ui?.textarea || {}
		})({
			color: color.value,
			variant: props.variant,
			size: size.value,
			loading: props.loading,
			highlight: highlight.value,
			fixed: props.fixed,
			autoresize: props.autoresize,
			leading: isLeading.value || !!props.avatar || !!slots.leading,
			trailing: isTrailing.value || !!slots.trailing
		}));
		const textareaRef = useTemplateRef("textareaRef");
		function updateInput(value) {
			if (props.modelModifiers?.trim && (typeof value === "string" || value === null || value === void 0)) value = value?.trim() ?? null;
			if (props.modelModifiers?.number) value = looseToNumber(value);
			if (props.modelModifiers?.nullable && isEmpty(value)) value = null;
			if (props.modelModifiers?.optional && !props.modelModifiers?.nullable && value !== null && isEmpty(value)) value = void 0;
			modelValue.value = value;
			emitFormInput();
		}
		function onInput(event) {
			autoResize();
			if (!props.modelModifiers?.lazy) updateInput(event.target.value);
		}
		function onChange(event) {
			const value = event.target.value;
			if (props.modelModifiers?.lazy) updateInput(value);
			if (props.modelModifiers?.trim) event.target.value = value.trim();
			emitFormChange();
			emits("change", event);
		}
		function onBlur(event) {
			emitFormBlur();
			emits("blur", event);
		}
		function autoResize() {
			if (props.autoresize && textareaRef.value) {
				textareaRef.value.rows = props.rows;
				const overflow = textareaRef.value.style.overflow;
				textareaRef.value.style.overflow = "hidden";
				const styles = (void 0).getComputedStyle(textareaRef.value);
				const padding = Number.parseInt(styles.paddingTop) + Number.parseInt(styles.paddingBottom);
				const lineHeight = Number.parseInt(styles.lineHeight);
				const { scrollHeight } = textareaRef.value;
				const newRows = (scrollHeight - padding) / lineHeight;
				if (newRows > props.rows) textareaRef.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows;
				textareaRef.value.style.overflow = overflow;
			}
		}
		watch(modelValue, () => {
			nextTick(autoResize);
		});
		let autofocusTimeoutId;
		let autoresizeTimeoutId;
		onScopeDispose(() => {
			clearTimeout(autofocusTimeoutId);
			clearTimeout(autoresizeTimeoutId);
		});
		__expose({
			textareaRef,
			autoResize
		});
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
							id: unref(id),
							ref_key: "textareaRef",
							ref: textareaRef,
							value: unref(modelValue),
							name: unref(name),
							rows: unref(props).rows,
							placeholder: unref(props).placeholder,
							class: ui.value.base({ class: unref(props).ui?.base }),
							disabled: disabled.value,
							required: unref(props).required
						}, {
							..._ctx.$attrs,
							...unref(ariaAttrs)
						}, { "data-slot": "base" }), "textarea")}${_scopeId}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
						ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push, _parent, _scopeId);
						if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
							_push(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
								if (unref(isLeading) && unref(leadingIconName)) _push(ssrRenderComponent(_sfc_main$5$1, {
									name: unref(leadingIconName),
									"data-slot": "leadingIcon",
									class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
								}, null, _parent, _scopeId));
								else if (!!unref(props).avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize() }, unref(props).avatar, {
									"data-slot": "leadingAvatar",
									class: ui.value.leadingAvatar({ class: unref(props).ui?.leadingAvatar })
								}), null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</span>`);
						} else _push(`<!---->`);
						if (unref(isTrailing) || !!slots.trailing) {
							_push(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: unref(props).ui?.trailing }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
								if (unref(trailingIconName)) _push(ssrRenderComponent(_sfc_main$5$1, {
									name: unref(trailingIconName),
									"data-slot": "trailingIcon",
									class: ui.value.trailingIcon({
										class: unref(props).ui?.trailingIcon,
										leading: unref(isLeading)
									})
								}, null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</span>`);
						} else _push(`<!---->`);
					} else return [
						createVNode("textarea", mergeProps({
							id: unref(id),
							ref_key: "textareaRef",
							ref: textareaRef,
							value: unref(modelValue),
							name: unref(name),
							rows: unref(props).rows,
							placeholder: unref(props).placeholder,
							class: ui.value.base({ class: unref(props).ui?.base }),
							disabled: disabled.value,
							required: unref(props).required
						}, {
							..._ctx.$attrs,
							...unref(ariaAttrs)
						}, {
							"data-slot": "base",
							onInput,
							onBlur,
							onChange,
							onFocus: unref(emitFormFocus)
						}), null, 16, [
							"id",
							"value",
							"name",
							"rows",
							"placeholder",
							"disabled",
							"required",
							"onFocus"
						]),
						renderSlot(_ctx.$slots, "default", { ui: ui.value }),
						unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
							key: 0,
							"data-slot": "leading",
							class: ui.value.leading({ class: unref(props).ui?.leading })
						}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
							key: 0,
							name: unref(leadingIconName),
							"data-slot": "leadingIcon",
							class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
						}, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
							key: 1,
							size: unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
						}, unref(props).avatar, {
							"data-slot": "leadingAvatar",
							class: ui.value.leadingAvatar({ class: unref(props).ui?.leadingAvatar })
						}), null, 16, ["size", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
						unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
							key: 1,
							"data-slot": "trailing",
							class: ui.value.trailing({ class: unref(props).ui?.trailing })
						}, [renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5$1, {
							key: 0,
							name: unref(trailingIconName),
							"data-slot": "trailingIcon",
							class: ui.value.trailingIcon({
								class: unref(props).ui?.trailingIcon,
								leading: unref(isLeading)
							})
						}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$2 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
// node_modules/@nuxt/ui/dist/runtime/utils/attributes.js
var hoverTriggerAttrs = [
	"onPointermove",
	"onPointerenter",
	"onPointerleave",
	"data-grace-area-trigger"
];
function getFormControlAttrs(attrs, target) {
	return target === "root" ? pick(attrs, hoverTriggerAttrs) : omit(attrs, ["data-state", ...hoverTriggerAttrs]);
}
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fswitch.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fswitch_default = {
	"slots": {
		"root": "relative flex items-start",
		"base": ["group/switch inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-3 data-[state=unchecked]:bg-accented", "transition-[background] duration-200 ease-out"],
		"container": "flex items-center",
		"thumb": "group pointer-events-none rounded-full bg-default shadow-lg ring-0 transition-[transform,translate,scale,rotate,width] duration-200 ease-out motion-reduce:transition-none data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center",
		"icon": ["absolute shrink-0 group-data-[state=unchecked]:text-dimmed opacity-0 size-10/12", "transition-[color,opacity] duration-200 ease-out"],
		"wrapper": "ms-2",
		"label": "block font-medium text-default",
		"description": "text-muted"
	},
	"variants": {
		"color": {
			"primary": {
				"base": "data-[state=checked]:bg-primary outline-primary/25",
				"icon": "group-data-[state=checked]:text-primary"
			},
			"secondary": {
				"base": "data-[state=checked]:bg-secondary outline-secondary/25",
				"icon": "group-data-[state=checked]:text-secondary"
			},
			"success": {
				"base": "data-[state=checked]:bg-success outline-success/25",
				"icon": "group-data-[state=checked]:text-success"
			},
			"info": {
				"base": "data-[state=checked]:bg-info outline-info/25",
				"icon": "group-data-[state=checked]:text-info"
			},
			"warning": {
				"base": "data-[state=checked]:bg-warning outline-warning/25",
				"icon": "group-data-[state=checked]:text-warning"
			},
			"error": {
				"base": "data-[state=checked]:bg-error outline-error/25",
				"icon": "group-data-[state=checked]:text-error"
			},
			"neutral": {
				"base": "data-[state=checked]:bg-inverted outline-inverted/25",
				"icon": "group-data-[state=checked]:text-highlighted"
			}
		},
		"size": {
			"xs": {
				"base": "w-7",
				"container": "h-4",
				"thumb": "size-3 group-active/switch:w-3.5 data-[state=checked]:translate-x-3 data-[state=checked]:group-active/switch:translate-x-2.5 data-[state=checked]:rtl:-translate-x-3 data-[state=checked]:rtl:group-active/switch:-translate-x-2.5",
				"wrapper": "text-xs"
			},
			"sm": {
				"base": "w-8",
				"container": "h-4",
				"thumb": "size-3.5 group-active/switch:w-4 data-[state=checked]:translate-x-3.5 data-[state=checked]:group-active/switch:translate-x-3 data-[state=checked]:rtl:-translate-x-3.5 data-[state=checked]:rtl:group-active/switch:-translate-x-3",
				"wrapper": "text-xs"
			},
			"md": {
				"base": "w-9",
				"container": "h-5",
				"thumb": "size-4 group-active/switch:w-5 data-[state=checked]:translate-x-4 data-[state=checked]:group-active/switch:translate-x-3 data-[state=checked]:rtl:-translate-x-4 data-[state=checked]:rtl:group-active/switch:-translate-x-3",
				"wrapper": "text-sm"
			},
			"lg": {
				"base": "w-10",
				"container": "h-5",
				"thumb": "size-4.5 group-active/switch:w-5.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:group-active/switch:translate-x-3.5 data-[state=checked]:rtl:-translate-x-4.5 data-[state=checked]:rtl:group-active/switch:-translate-x-3.5",
				"wrapper": "text-sm"
			},
			"xl": {
				"base": "w-11",
				"container": "h-6",
				"thumb": "size-5 group-active/switch:w-6 data-[state=checked]:translate-x-5 data-[state=checked]:group-active/switch:translate-x-4 data-[state=checked]:rtl:-translate-x-5 data-[state=checked]:rtl:group-active/switch:-translate-x-4",
				"wrapper": "text-base"
			}
		},
		"checked": { "true": { "icon": "group-data-[state=checked]:opacity-100" } },
		"unchecked": { "true": { "icon": "group-data-[state=unchecked]:opacity-100" } },
		"loading": { "true": { "icon": "animate-spin" } },
		"highlight": { "true": "" },
		"required": { "true": { "label": "after:content-['*'] after:ms-0.5 after:text-error" } },
		"disabled": { "true": {
			"root": "opacity-75",
			"base": "cursor-not-allowed",
			"label": "cursor-not-allowed",
			"description": "cursor-not-allowed"
		} }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"highlight": true,
			"class": { "base": "ring ring-primary" }
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": { "base": "ring ring-secondary" }
		},
		{
			"color": "success",
			"highlight": true,
			"class": { "base": "ring ring-success" }
		},
		{
			"color": "info",
			"highlight": true,
			"class": { "base": "ring ring-info" }
		},
		{
			"color": "warning",
			"highlight": true,
			"class": { "base": "ring ring-warning" }
		},
		{
			"color": "error",
			"highlight": true,
			"class": { "base": "ring ring-error" }
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": { "base": "ring ring-inverted" }
		}
	],
	"defaultVariants": {
		"color": "primary",
		"size": "md"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/Switch.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "USwitch",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		size: {
			type: null,
			required: false
		},
		highlight: {
			type: Boolean,
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
		checkedIcon: {
			type: null,
			required: false
		},
		uncheckedIcon: {
			type: null,
			required: false
		},
		label: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		id: {
			type: String,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		},
		value: {
			type: String,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		trueValue: {
			type: null,
			required: false
		},
		falseValue: {
			type: null,
			required: false
		}
	},
	emits: ["change", "update:modelValue"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const slots = useSlots();
		const emits = __emit;
		const props = useComponentProps("switch", _props);
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(props, [
			"required",
			"value",
			"defaultValue",
			"modelValue",
			"trueValue",
			"falseValue"
		], emits);
		const { id: _id, emitFormChange, emitFormInput, size: formFieldSize, color: formFieldColor, highlight: formFieldHighlight, name, disabled: formFieldDisabled, ariaAttrs } = useFormField(_props);
		const id = _id.value ?? useId();
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fswitch_default,
			...appConfig.ui?.switch || {}
		})({
			size: size.value,
			color: color.value,
			highlight: highlight.value,
			required: props.required,
			loading: props.loading,
			disabled: disabled.value || props.loading
		}));
		function onUpdate(value) {
			const event = new Event("change", { target: { value } });
			emits("change", event);
			emitFormChange();
			emitFormInput();
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({ as: unref(props).as }, unref(getFormControlAttrs)(_ctx.$attrs, "root"), {
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: unref(props).ui?.container }))}"${_scopeId}>`);
						_push(ssrRenderComponent(unref(SwitchRoot_default), mergeProps({ id: unref(id) }, {
							...unref(rootProps),
							...unref(getFormControlAttrs)(_ctx.$attrs, "base"),
							...unref(ariaAttrs)
						}, {
							name: unref(name),
							disabled: disabled.value || unref(props).loading,
							"data-slot": "base",
							class: ui.value.base({ class: unref(props).ui?.base }),
							"onUpdate:modelValue": onUpdate
						}), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(SwitchThumb_default), {
									"data-slot": "thumb",
									class: ui.value.thumb({ class: unref(props).ui?.thumb })
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											if (unref(props).loading) _push(ssrRenderComponent(_sfc_main$5$1, {
												name: unref(props).loadingIcon || unref(appConfig).ui.icons.loading,
												"data-slot": "icon",
												class: ui.value.icon({
													class: unref(props).ui?.icon,
													checked: true,
													unchecked: true
												})
											}, null, _parent, _scopeId));
											else {
												_push(`<!--[-->`);
												if (unref(props).checkedIcon) _push(ssrRenderComponent(_sfc_main$5$1, {
													name: unref(props).checkedIcon,
													"data-slot": "icon",
													class: ui.value.icon({
														class: unref(props).ui?.icon,
														checked: true
													})
												}, null, _parent, _scopeId));
												else _push(`<!---->`);
												if (unref(props).uncheckedIcon) _push(ssrRenderComponent(_sfc_main$5$1, {
													name: unref(props).uncheckedIcon,
													"data-slot": "icon",
													class: ui.value.icon({
														class: unref(props).ui?.icon,
														unchecked: true
													})
												}, null, _parent, _scopeId));
												else _push(`<!---->`);
												_push(`<!--]-->`);
											}
										} else return [unref(props).loading ? (openBlock(), createBlock(_sfc_main$5$1, {
											key: 0,
											name: unref(props).loadingIcon || unref(appConfig).ui.icons.loading,
											"data-slot": "icon",
											class: ui.value.icon({
												class: unref(props).ui?.icon,
												checked: true,
												unchecked: true
											})
										}, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).checkedIcon ? (openBlock(), createBlock(_sfc_main$5$1, {
											key: 0,
											name: unref(props).checkedIcon,
											"data-slot": "icon",
											class: ui.value.icon({
												class: unref(props).ui?.icon,
												checked: true
											})
										}, null, 8, ["name", "class"])) : createCommentVNode("", true), unref(props).uncheckedIcon ? (openBlock(), createBlock(_sfc_main$5$1, {
											key: 1,
											name: unref(props).uncheckedIcon,
											"data-slot": "icon",
											class: ui.value.icon({
												class: unref(props).ui?.icon,
												unchecked: true
											})
										}, null, 8, ["name", "class"])) : createCommentVNode("", true)], 64))];
									}),
									_: 1
								}, _parent, _scopeId));
								else return [createVNode(unref(SwitchThumb_default), {
									"data-slot": "thumb",
									class: ui.value.thumb({ class: unref(props).ui?.thumb })
								}, {
									default: withCtx(() => [unref(props).loading ? (openBlock(), createBlock(_sfc_main$5$1, {
										key: 0,
										name: unref(props).loadingIcon || unref(appConfig).ui.icons.loading,
										"data-slot": "icon",
										class: ui.value.icon({
											class: unref(props).ui?.icon,
											checked: true,
											unchecked: true
										})
									}, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).checkedIcon ? (openBlock(), createBlock(_sfc_main$5$1, {
										key: 0,
										name: unref(props).checkedIcon,
										"data-slot": "icon",
										class: ui.value.icon({
											class: unref(props).ui?.icon,
											checked: true
										})
									}, null, 8, ["name", "class"])) : createCommentVNode("", true), unref(props).uncheckedIcon ? (openBlock(), createBlock(_sfc_main$5$1, {
										key: 1,
										name: unref(props).uncheckedIcon,
										"data-slot": "icon",
										class: ui.value.icon({
											class: unref(props).ui?.icon,
											unchecked: true
										})
									}, null, 8, ["name", "class"])) : createCommentVNode("", true)], 64))]),
									_: 1
								}, 8, ["class"])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
						if (unref(props).label || !!slots.label || unref(props).description || !!slots.description) {
							_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
							if (unref(props).label || !!slots.label) _push(ssrRenderComponent(unref(Label_default), {
								for: unref(id),
								"data-slot": "label",
								class: ui.value.label({ class: unref(props).ui?.label })
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) ssrRenderSlot(_ctx.$slots, "label", { label: unref(props).label }, () => {
										_push(`${ssrInterpolate(unref(props).label)}`);
									}, _push, _parent, _scopeId);
									else return [renderSlot(_ctx.$slots, "label", { label: unref(props).label }, () => [createTextVNode(toDisplayString(unref(props).label), 1)])];
								}),
								_: 3
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(props).description || !!slots.description) {
								_push(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "description", { description: unref(props).description }, () => {
									_push(`${ssrInterpolate(unref(props).description)}`);
								}, _push, _parent, _scopeId);
								_push(`</p>`);
							} else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [createVNode("div", {
						"data-slot": "container",
						class: ui.value.container({ class: unref(props).ui?.container })
					}, [createVNode(unref(SwitchRoot_default), mergeProps({ id: unref(id) }, {
						...unref(rootProps),
						...unref(getFormControlAttrs)(_ctx.$attrs, "base"),
						...unref(ariaAttrs)
					}, {
						name: unref(name),
						disabled: disabled.value || unref(props).loading,
						"data-slot": "base",
						class: ui.value.base({ class: unref(props).ui?.base }),
						"onUpdate:modelValue": onUpdate
					}), {
						default: withCtx(() => [createVNode(unref(SwitchThumb_default), {
							"data-slot": "thumb",
							class: ui.value.thumb({ class: unref(props).ui?.thumb })
						}, {
							default: withCtx(() => [unref(props).loading ? (openBlock(), createBlock(_sfc_main$5$1, {
								key: 0,
								name: unref(props).loadingIcon || unref(appConfig).ui.icons.loading,
								"data-slot": "icon",
								class: ui.value.icon({
									class: unref(props).ui?.icon,
									checked: true,
									unchecked: true
								})
							}, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).checkedIcon ? (openBlock(), createBlock(_sfc_main$5$1, {
								key: 0,
								name: unref(props).checkedIcon,
								"data-slot": "icon",
								class: ui.value.icon({
									class: unref(props).ui?.icon,
									checked: true
								})
							}, null, 8, ["name", "class"])) : createCommentVNode("", true), unref(props).uncheckedIcon ? (openBlock(), createBlock(_sfc_main$5$1, {
								key: 1,
								name: unref(props).uncheckedIcon,
								"data-slot": "icon",
								class: ui.value.icon({
									class: unref(props).ui?.icon,
									unchecked: true
								})
							}, null, 8, ["name", "class"])) : createCommentVNode("", true)], 64))]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					}, 16, [
						"id",
						"name",
						"disabled",
						"class"
					])], 2), unref(props).label || !!slots.label || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "wrapper",
						class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
					}, [unref(props).label || !!slots.label ? (openBlock(), createBlock(unref(Label_default), {
						key: 0,
						for: unref(id),
						"data-slot": "label",
						class: ui.value.label({ class: unref(props).ui?.label })
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "label", { label: unref(props).label }, () => [createTextVNode(toDisplayString(unref(props).label), 1)])]),
						_: 3
					}, 8, ["for", "class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock("p", {
						key: 1,
						"data-slot": "description",
						class: ui.value.description({ class: unref(props).ui?.description })
					}, [renderSlot(_ctx.$slots, "description", { description: unref(props).description }, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$1 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
// app/pages/admin/controles.vue?vue&type=script&setup=true&lang.ts
var pageSize = 20;
var controles_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "controles",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		const page = ref(1);
		const search = ref("");
		const appliedSearch = ref("");
		const query = computed(() => ({
			q: appliedSearch.value,
			page: page.value,
			pageSize
		}));
		const { data, status, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/controls", { query }, "$rM6u4Azt1T")), __temp = await __temp, __restore(), __temp);
		const { data: brands, error: brandsError, refresh: refreshBrands } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/admin/brands", "$vNaiD8jEo9")), __temp = await __temp, __restore(), __temp);
		const brandOptions = computed(() => (brands.value ?? []).map((brand) => ({
			label: brand.name,
			value: brand.id
		})));
		const categories = [
			{
				label: "TV",
				value: "tv"
			},
			{
				label: "Ar-condicionado",
				value: "ac"
			},
			{
				label: "Receptor",
				value: "receptor"
			}
		];
		const showEditor = ref(false);
		const loadingEditor = ref(false);
		const saving = ref(false);
		const deleting = ref(false);
		const editingId = ref();
		const creatingDraft = ref(false);
		const uploadingDraft = ref(false);
		let draftId;
		const photoUrl = ref(null);
		const file = shallowRef();
		const removePhoto = ref(false);
		const submitError = ref("");
		const actionError = ref("");
		const savedMessage = ref("");
		const deleteTarget = ref();
		const showDelete = ref(false);
		const form = reactive(emptyForm());
		const imageAnalysis = ref();
		const analysisBusy = ref(false);
		const analysisError = ref("");
		const addedSuggestions = ref(false);
		const fetchAnalysis = $fetch$1;
		async function loadAnalysis(method) {
			const id = editingId.value;
			if (!id || analysisBusy.value) return;
			analysisBusy.value = true;
			analysisError.value = "";
			try {
				imageAnalysis.value = await fetchAnalysis(`/api/admin/controls/${id}/suggest-models`, {
					method,
					retry: 0
				});
			} catch (error) {
				analysisError.value = error.data?.message || "Não foi possível consultar a análise. Tenta novamente.";
			} finally {
				analysisBusy.value = false;
			}
		}
		function addSuggestions(suggestions) {
			const models = new Map(form.models.map((model) => [model.trim().toLowerCase(), model]));
			for (const { model } of suggestions) {
				if (models.size >= 100) break;
				if (!models.has(model.toLowerCase())) models.set(model.toLowerCase(), model);
			}
			form.models = [...models.values()];
			addedSuggestions.value = true;
		}
		let suggestedCode = "";
		let suggestedBrandId;
		function normalizeBrandName(value) {
			const name = value.normalize("NFD").replace(/\p{M}/gu, "").trim().replace(/\s+/g, " ").toLowerCase();
			return name === "phillips" ? "philips" : name;
		}
		watch(file, (image) => {
			if (!creatingDraft.value || editingId.value || !image) return;
			fillFromFilename(image.name);
			uploadDraftPhoto(image);
		});
		function fillFromFilename(filename) {
			const match = /^(.+?)\s+(\d+)\.png$/i.exec(filename.trim());
			const code = match?.[2] ?? "";
			if (!form.vipoCode.trim() || form.vipoCode === suggestedCode) {
				form.vipoCode = code;
				suggestedCode = code;
			}
			const brandName = match?.[1];
			const brand = brandName ? brands.value?.find((item) => item.name.trim().toLowerCase() === brandName.trim().toLowerCase()) ?? brands.value?.find((item) => normalizeBrandName(item.name) === normalizeBrandName(brandName)) : void 0;
			if (!form.brandIds.length || form.brandIds.length === 1 && form.brandIds[0] === suggestedBrandId) {
				form.brandIds = brand ? [brand.id] : [];
				suggestedBrandId = brand?.id;
			}
		}
		const postDraft = $fetch$1;
		function validatePhoto(image) {
			const isPng = image.type === "image/png" || /\.png$/i.test(image.name);
			if (image.size <= (isPng ? pngUploadMaxBytes : photoMaxBytes)) return true;
			submitError.value = isPng ? "O PNG deve ter até 3 MiB." : "A foto deve ter até 750 KiB.";
			return false;
		}
		async function uploadDraftPhoto(image) {
			if (uploadingDraft.value || editingId.value) return;
			submitError.value = "";
			if (!validatePhoto(image)) return;
			uploadingDraft.value = true;
			try {
				draftId ??= crypto.randomUUID();
				const draft = await postDraft("/api/admin/controls/draft", {
					method: "POST",
					body: {
						id: draftId,
						photo: await fileToBase64(image)
					},
					retry: 0
				});
				editingId.value = draft.id;
				photoUrl.value = draft.photoUrl;
				file.value = void 0;
				loadAnalysis("GET");
				refresh();
			} catch (error) {
				submitError.value = errorMessage(error, "Não foi possível enviar a foto.");
			} finally {
				uploadingDraft.value = false;
			}
		}
		function retryDraftPhoto() {
			if (file.value) return uploadDraftPhoto(file.value);
		}
		function emptyForm() {
			return {
				vipoCode: "",
				category: "tv",
				notes: "",
				active: true,
				brandIds: [],
				models: []
			};
		}
		function applyFilters() {
			page.value = 1;
			appliedSearch.value = search.value.trim();
		}
		function resetFilters() {
			search.value = "";
			applyFilters();
		}
		function createControl() {
			Object.assign(form, emptyForm());
			creatingDraft.value = true;
			draftId = void 0;
			suggestedCode = "";
			suggestedBrandId = void 0;
			imageAnalysis.value = void 0;
			analysisError.value = "";
			addedSuggestions.value = false;
			editingId.value = void 0;
			photoUrl.value = null;
			file.value = void 0;
			removePhoto.value = false;
			submitError.value = "";
			actionError.value = "";
			savedMessage.value = "";
			showEditor.value = true;
		}
		function errorMessage(error, fallback) {
			const request = error;
			if (request.statusCode === 409) return "Já existe um controle com esse código Vipo.";
			if (request.statusCode === 404) return "Este controle já não está no catálogo.";
			if (request.statusCode === 400) return request.data?.message || "Revise os campos e confira o formato e o tamanho da foto.";
			return fallback;
		}
		async function editControl(id) {
			loadingEditor.value = true;
			actionError.value = "";
			try {
				const control = await $fetch$1(`/api/admin/controls/${id}`);
				createControl();
				creatingDraft.value = control.isDraft;
				editingId.value = id;
				photoUrl.value = control.photoUrl;
				Object.assign(form, {
					vipoCode: control.isDraft ? "" : control.vipoCode,
					category: control.category,
					notes: control.notes ?? "",
					active: control.isDraft || control.active,
					brandIds: control.brands.map((brand) => brand.id),
					models: [...control.models]
				});
				if (photoUrl.value) loadAnalysis("GET");
			} catch (error) {
				actionError.value = errorMessage(error, "Não foi possível abrir o controle.");
			} finally {
				loadingEditor.value = false;
			}
		}
		async function save() {
			if (saving.value || analysisBusy.value || uploadingDraft.value || !editingId.value) return;
			submitError.value = "";
			const validated = remoteFields.safeParse(form);
			if (!validated.success) {
				const issue = validated.error.issues[0];
				submitError.value = issue?.message ?? "Confira os dados do controle.";
				return;
			}
			if (file.value && !validatePhoto(file.value)) return;
			if (!file.value && (!photoUrl.value || removePhoto.value)) {
				submitError.value = "Adiciona uma foto ao controle para salvar.";
				return;
			}
			saving.value = true;
			try {
				const photo = file.value ? await fileToBase64(file.value) : removePhoto.value ? null : void 0;
				const body = {
					...validated.data,
					photo
				};
				await $fetch$1(`/api/admin/controls/${editingId.value}`, {
					method: "PUT",
					body
				});
				showEditor.value = false;
				savedMessage.value = "Controle salvo.";
				await refresh();
			} catch (error) {
				submitError.value = errorMessage(error, "Não foi possível salvar o controle.");
			} finally {
				saving.value = false;
			}
		}
		function fileToBase64(image) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onerror = () => reject(reader.error);
				reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
				reader.readAsDataURL(image);
			});
		}
		function askDelete(control) {
			deleteTarget.value = {
				id: control.id,
				vipoCode: control.isDraft ? "em rascunho" : control.vipoCode
			};
			actionError.value = "";
			savedMessage.value = "";
			showDelete.value = true;
		}
		async function deleteSelected() {
			if (!deleteTarget.value || deleting.value) return;
			deleting.value = true;
			actionError.value = "";
			try {
				await $fetch$1(`/api/admin/controls/${deleteTarget.value.id}`, { method: "DELETE" });
				showDelete.value = false;
				savedMessage.value = "Controle apagado.";
				if (page.value > 1 && data.value?.items.length === 1) page.value--;
				else await refresh();
			} catch (error) {
				showDelete.value = false;
				actionError.value = errorMessage(error, "Não foi possível apagar o controle.");
			} finally {
				deleting.value = false;
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-3"><h1 class="text-2xl font-semibold">Controles</h1>`);
			_push(ssrRenderComponent(_sfc_main$6, {
				icon: "i-lucide-plus",
				disabled: unref(loadingEditor),
				onClick: createControl
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Novo controle`);
					else return [createTextVNode("Novo controle")];
				}),
				_: 1
			}, _parent));
			_push(`</div><form class="admin-panel"><div class="flex items-stretch gap-2">`);
			_push(ssrRenderComponent(_sfc_main$7, {
				modelValue: unref(search),
				"onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
				class: "min-w-0 flex-1",
				maxlength: "160",
				"aria-label": "Buscar controles",
				placeholder: "Marca, modelo ou código"
			}, {
				trailing: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(search) || unref(appliedSearch)) _push(ssrRenderComponent(_sfc_main$6, {
							type: "button",
							icon: "i-lucide-x",
							size: "xs",
							color: "neutral",
							variant: "ghost",
							"aria-label": "Limpar busca",
							onClick: resetFilters
						}, null, _parent, _scopeId));
						else _push(`<!---->`);
					} else return [unref(search) || unref(appliedSearch) ? (openBlock(), createBlock(_sfc_main$6, {
						key: 0,
						type: "button",
						icon: "i-lucide-x",
						size: "xs",
						color: "neutral",
						variant: "ghost",
						"aria-label": "Limpar busca",
						onClick: resetFilters
					})) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$6, {
				type: "submit",
				icon: "i-lucide-search"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Buscar`);
					else return [createTextVNode("Buscar")];
				}),
				_: 1
			}, _parent));
			_push(`</div></form>`);
			if (unref(actionError)) _push(ssrRenderComponent(_sfc_main$8, {
				color: "error",
				title: unref(actionError),
				role: "alert"
			}, null, _parent));
			else _push(`<!---->`);
			if (unref(savedMessage)) _push(`<p role="status" class="text-sm text-success">${ssrInterpolate(unref(savedMessage))}</p>`);
			else _push(`<!---->`);
			_push(`<section class="admin-panel" aria-label="Lista de controles">`);
			if (unref(error)) _push(ssrRenderComponent(_sfc_main$8, {
				color: "error",
				title: "Não foi possível carregar os controles."
			}, null, _parent));
			else if (unref(status) === "pending") _push(`<p>Carregando…</p>`);
			else if (!unref(data)?.items.length) _push(`<p>Nenhum controle encontrado.</p>`);
			else {
				_push(`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead><tr><th scope="col" class="whitespace-nowrap p-2"># Controle</th><th scope="col" class="p-2">Marca</th><th scope="col" class="p-2">Aparelhos compatíveis</th><th scope="col" class="p-2 text-end">Ações</th></tr></thead><tbody><!--[-->`);
				ssrRenderList$2(unref(data).items, (item) => {
					_push(`<tr class="border-t border-default"><td class="p-2 min-w-30"><button type="button" class="flex items-center gap-2 cursor-pointer rounded text-start font-medium hover:underline"${includeBooleanAttr(unref(loadingEditor)) ? " disabled" : ""}>`);
					_push(ssrRenderComponent(_sfc_main$5$1, {
						name: item.active ? "i-lucide-check" : "i-lucide-minus",
						"aria-hidden": "true",
						class: ["size-4 shrink-0", item.active ? "text-success" : "text-muted"]
					}, null, _parent));
					_push(`<span class="sr-only">${ssrInterpolate(item.active ? "Ativo" : "Inativo")}</span>`);
					_push(ssrRenderComponent(IconCategory_default, { item }, null, _parent));
					_push(` ${ssrInterpolate(item.isDraft ? "Rascunho" : item.vipoCode)}</button></td><td class="p-2 min-w-30">${ssrInterpolate(item.brands.map((brand) => brand.name).join(", ") || "—")}</td><td class="p-2">`);
					if (item.models.length) _push(`<div class="text-muted">${ssrInterpolate(item.models.join(", "))}</div>`);
					else _push(`<!---->`);
					_push(`</td><td class="p-2 text-end">`);
					_push(ssrRenderComponent(_sfc_main$1$1, {
						modal: false,
						items: [{
							label: "Editar",
							icon: "i-lucide-pencil",
							onSelect: () => editControl(item.id)
						}, {
							label: "Apagar",
							icon: "i-lucide-trash-2",
							color: "error",
							onSelect: () => askDelete(item)
						}],
						content: { align: "end" }
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(_sfc_main$6, {
								type: "button",
								icon: "i-lucide-ellipsis-vertical",
								color: "neutral",
								variant: "ghost",
								"aria-label": `Ações de ${item.vipoCode}`,
								disabled: unref(loadingEditor)
							}, null, _parent, _scopeId));
							else return [createVNode(_sfc_main$6, {
								type: "button",
								icon: "i-lucide-ellipsis-vertical",
								color: "neutral",
								variant: "ghost",
								"aria-label": `Ações de ${item.vipoCode}`,
								disabled: unref(loadingEditor)
							}, null, 8, ["aria-label", "disabled"])];
						}),
						_: 2
					}, _parent));
					_push(`</td></tr>`);
				});
				_push(`<!--]--></tbody></table></div>`);
			}
			if (unref(data) && unref(data).total > pageSize) _push(ssrRenderComponent(_sfc_main$9, {
				page: unref(page),
				"onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
				total: unref(data).total,
				"items-per-page": pageSize
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</section>`);
			_push(ssrRenderComponent(_sfc_main$b, {
				open: unref(showEditor),
				"onUpdate:open": ($event) => isRef(showEditor) ? showEditor.value = $event : null,
				title: unref(creatingDraft) ? "Novo controle" : "Editar controle",
				dismissible: !unref(saving) && !unref(analysisBusy) && !unref(uploadingDraft),
				close: !unref(saving) && !unref(analysisBusy) && !unref(uploadingDraft),
				ui: { content: "max-w-4xl" }
			}, {
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<form class="space-y-4"${_scopeId}><fieldset${includeBooleanAttr(unref(saving)) ? " disabled" : ""} class="${ssrRenderClass([unref(editingId) ? "md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]" : "justify-items-center", "grid items-start gap-6"])}"${_scopeId}><div class="w-full min-w-0 max-w-72 md:max-w-none"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$a, { label: "Foto" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (unref(photoUrl) && !unref(removePhoto) && !unref(file)) {
										_push(`<div class="mb-2 space-y-2"${_scopeId}><img${ssrRenderAttr("src", unref(photoUrl))} alt="Foto atual do controle" class="aspect-3/4 w-full rounded-lg bg-elevated object-contain"${_scopeId}>`);
										_push(ssrRenderComponent(_sfc_main$6, {
											type: "button",
											size: "sm",
											color: "neutral",
											variant: "ghost",
											onClick: ($event) => void (removePhoto.value = true)
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(`Remover foto atual`);
												else return [createTextVNode("Remover foto atual")];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(`</div>`);
									} else _push(`<!---->`);
									if (unref(removePhoto) && !unref(file)) _push(ssrRenderComponent(_sfc_main$6, {
										type: "button",
										size: "sm",
										color: "neutral",
										variant: "ghost",
										onClick: ($event) => void (removePhoto.value = false)
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`Manter foto atual`);
											else return [createTextVNode("Manter foto atual")];
										}),
										_: 1
									}, _parent, _scopeId));
									else _push(`<!---->`);
									_push(ssrRenderComponent(_sfc_main$5, {
										modelValue: unref(file),
										"onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
										disabled: unref(uploadingDraft) || unref(analysisBusy),
										accept: "image/jpeg,image/png,image/webp,image/avif",
										label: unref(photoUrl) ? "Escolher nova foto" : "Escolher foto",
										description: "PNG até 3 MiB, convertido em WebP. JPG, WebP ou AVIF até 750 KiB.",
										layout: "grid",
										class: "w-full",
										ui: {
											base: unref(photoUrl) && !unref(removePhoto) && !unref(file) ? "" : "aspect-[3/4]",
											fileLeadingAvatar: "[&_img]:object-contain"
										}
									}, null, _parent, _scopeId));
								} else return [
									unref(photoUrl) && !unref(removePhoto) && !unref(file) ? (openBlock(), createBlock("div", {
										key: 0,
										class: "mb-2 space-y-2"
									}, [createVNode("img", {
										src: unref(photoUrl),
										alt: "Foto atual do controle",
										class: "aspect-3/4 w-full rounded-lg bg-elevated object-contain"
									}, null, 8, ["src"]), createVNode(_sfc_main$6, {
										type: "button",
										size: "sm",
										color: "neutral",
										variant: "ghost",
										onClick: ($event) => void (removePhoto.value = true)
									}, {
										default: withCtx(() => [createTextVNode("Remover foto atual")]),
										_: 1
									}, 8, ["onClick"])])) : createCommentVNode("", true),
									unref(removePhoto) && !unref(file) ? (openBlock(), createBlock(_sfc_main$6, {
										key: 1,
										type: "button",
										size: "sm",
										color: "neutral",
										variant: "ghost",
										onClick: ($event) => void (removePhoto.value = false)
									}, {
										default: withCtx(() => [createTextVNode("Manter foto atual")]),
										_: 1
									}, 8, ["onClick"])) : createCommentVNode("", true),
									createVNode(_sfc_main$5, {
										modelValue: unref(file),
										"onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
										disabled: unref(uploadingDraft) || unref(analysisBusy),
										accept: "image/jpeg,image/png,image/webp,image/avif",
										label: unref(photoUrl) ? "Escolher nova foto" : "Escolher foto",
										description: "PNG até 3 MiB, convertido em WebP. JPG, WebP ou AVIF até 750 KiB.",
										layout: "grid",
										class: "w-full",
										ui: {
											base: unref(photoUrl) && !unref(removePhoto) && !unref(file) ? "" : "aspect-[3/4]",
											fileLeadingAvatar: "[&_img]:object-contain"
										}
									}, null, 8, [
										"modelValue",
										"onUpdate:modelValue",
										"disabled",
										"label",
										"ui"
									])
								];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
						if (unref(editingId)) {
							_push(`<div class="min-w-0 space-y-4"${_scopeId}><div class="grid gap-3 sm:grid-cols-2"${_scopeId}>`);
							_push(ssrRenderComponent(_sfc_main$a, {
								label: "Código Vipo",
								required: ""
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(_sfc_main$7, {
										modelValue: unref(form).vipoCode,
										"onUpdate:modelValue": ($event) => unref(form).vipoCode = $event,
										class: "w-full",
										maxlength: "60",
										required: ""
									}, null, _parent, _scopeId));
									else return [createVNode(_sfc_main$7, {
										modelValue: unref(form).vipoCode,
										"onUpdate:modelValue": ($event) => unref(form).vipoCode = $event,
										class: "w-full",
										maxlength: "60",
										required: ""
									}, null, 8, ["modelValue", "onUpdate:modelValue"])];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(ssrRenderComponent(_sfc_main$a, {
								label: "Categoria",
								required: ""
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(_sfc_main$4, {
										modelValue: unref(form).category,
										"onUpdate:modelValue": ($event) => unref(form).category = $event,
										items: categories,
										class: "w-full"
									}, null, _parent, _scopeId));
									else return [createVNode(_sfc_main$4, {
										modelValue: unref(form).category,
										"onUpdate:modelValue": ($event) => unref(form).category = $event,
										items: categories,
										class: "w-full"
									}, null, 8, ["modelValue", "onUpdate:modelValue"])];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`</div><section class="space-y-2" aria-label="Aparelhos compatíveis"${_scopeId}><h3 class="text-sm font-semibold"${_scopeId}>Aparelhos compatíveis</h3>`);
							if (unref(brandsError)) {
								_push(`<div class="flex flex-wrap items-center gap-2"${_scopeId}><p class="text-sm text-error"${_scopeId}>Não foi possível carregar as marcas.</p>`);
								_push(ssrRenderComponent(_sfc_main$6, {
									type: "button",
									size: "sm",
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
							} else _push(ssrRenderComponent(_sfc_main$a, { label: "Marcas" }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(_sfc_main$3, {
										modelValue: unref(form).brandIds,
										"onUpdate:modelValue": ($event) => unref(form).brandIds = $event,
										items: unref(brandOptions),
										"value-key": "value",
										multiple: "",
										disabled: !unref(brandOptions).length,
										placeholder: "Selecione as marcas",
										class: "w-full"
									}, null, _parent, _scopeId));
									else return [createVNode(_sfc_main$3, {
										modelValue: unref(form).brandIds,
										"onUpdate:modelValue": ($event) => unref(form).brandIds = $event,
										items: unref(brandOptions),
										"value-key": "value",
										multiple: "",
										disabled: !unref(brandOptions).length,
										placeholder: "Selecione as marcas",
										class: "w-full"
									}, null, 8, [
										"modelValue",
										"onUpdate:modelValue",
										"items",
										"disabled"
									])];
								}),
								_: 1
							}, _parent, _scopeId));
							if (!unref(brandsError) && !unref(brandOptions).length) {
								_push(`<p class="text-sm text-muted"${_scopeId}> Cadastre uma marca em `);
								_push(ssrRenderNuxtLink(NuxtLink, {
									to: "/admin/marcas",
									class: "underline"
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(`Marcas`);
										else return [createTextVNode("Marcas")];
									}),
									_: 1
								}, _parent, _scopeId));
								_push(` para selecioná-la aqui. </p>`);
							} else _push(`<!---->`);
							_push(ssrRenderComponent(_sfc_main$a, {
								label: "Modelos ou linhas",
								description: "Pressione Enter após digitar cada modelo."
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(_sfc_main$2, {
										modelValue: unref(form).models,
										"onUpdate:modelValue": ($event) => unref(form).models = $event,
										max: 100,
										"max-length": 140,
										"add-on-blur": "",
										placeholder: "Ex.: Sky-7067",
										class: "w-full"
									}, null, _parent, _scopeId));
									else return [createVNode(_sfc_main$2, {
										modelValue: unref(form).models,
										"onUpdate:modelValue": ($event) => unref(form).models = $event,
										max: 100,
										"max-length": 140,
										"add-on-blur": "",
										placeholder: "Ex.: Sky-7067",
										class: "w-full"
									}, null, 8, ["modelValue", "onUpdate:modelValue"])];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`<div class="space-y-2"${_scopeId}>`);
							if (!unref(editingId) || !unref(photoUrl) || unref(file) || unref(removePhoto)) _push(`<p class="text-sm text-muted"${_scopeId}> Salva o controle com a foto antes de sugerir modelos. </p>`);
							else _push(`<!---->`);
							if (unref(imageAnalysis)?.state === "unavailable") _push(`<p class="text-sm text-muted"${_scopeId}> A análise por foto precisa ser configurada no servidor. </p>`);
							else _push(`<!---->`);
							_push(ssrRenderComponent(_sfc_main$6, {
								type: "button",
								size: "sm",
								variant: "outline",
								icon: "i-lucide-sparkles",
								loading: unref(analysisBusy),
								disabled: !unref(editingId) || !unref(photoUrl) || !!unref(file) || unref(removePhoto) || unref(imageAnalysis)?.state !== "available",
								onClick: ($event) => loadAnalysis("POST")
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`${ssrInterpolate(unref(imageAnalysis)?.state === "done" ? "Foto já analisada" : "Sugerir modelos pela foto")}`);
									else return [createTextVNode(toDisplayString(unref(imageAnalysis)?.state === "done" ? "Foto já analisada" : "Sugerir modelos pela foto"), 1)];
								}),
								_: 1
							}, _parent, _scopeId));
							if (unref(imageAnalysis)?.state === "running" || !unref(imageAnalysis) && unref(analysisError)) _push(ssrRenderComponent(_sfc_main$6, {
								type: "button",
								size: "sm",
								variant: "ghost",
								disabled: unref(analysisBusy),
								onClick: ($event) => loadAnalysis("GET")
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` Atualizar situação `);
									else return [createTextVNode(" Atualizar situação ")];
								}),
								_: 1
							}, _parent, _scopeId));
							else _push(`<!---->`);
							if (unref(imageAnalysis)?.state === "running") _push(`<p class="text-sm text-muted"${_scopeId}>Análise em andamento.</p>`);
							else _push(`<!---->`);
							if (unref(analysisError)) _push(`<p role="alert" class="text-sm text-error"${_scopeId}>${ssrInterpolate(unref(analysisError))}</p>`);
							else _push(`<!---->`);
							if (unref(imageAnalysis)?.state === "done") {
								_push(`<!--[-->`);
								if (!unref(imageAnalysis).suggestions.length) _push(`<p class="text-sm text-muted"${_scopeId}> Análise concluída sem sugestões verificáveis. Podes preencher os modelos manualmente. </p>`);
								else {
									_push(`<!--[--><p class="text-sm text-muted"${_scopeId}>Confere os modelos e suas fontes antes de adicionar.</p><ul class="max-h-36 list-disc overflow-auto pl-5 text-sm"${_scopeId}><!--[-->`);
									ssrRenderList$2(unref(imageAnalysis).suggestions, (suggestion) => {
										_push(`<li${_scopeId}>${ssrInterpolate(suggestion.model)} <a${ssrRenderAttr("href", suggestion.source)} class="underline" target="_blank" rel="noopener noreferrer"${_scopeId}>Fonte</a></li>`);
									});
									_push(`<!--]--></ul>`);
									_push(ssrRenderComponent(_sfc_main$6, {
										type: "button",
										size: "sm",
										variant: "soft",
										disabled: unref(addedSuggestions) || unref(form).models.length >= 100,
										onClick: ($event) => addSuggestions(unref(imageAnalysis).suggestions)
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) _push(`${ssrInterpolate(unref(addedSuggestions) ? "Sugestões adicionadas ao formulário" : "Adicionar modelos")}`);
											else return [createTextVNode(toDisplayString(unref(addedSuggestions) ? "Sugestões adicionadas ao formulário" : "Adicionar modelos"), 1)];
										}),
										_: 1
									}, _parent, _scopeId));
									_push(`<!--]-->`);
								}
								_push(`<!--]-->`);
							} else _push(`<!---->`);
							_push(`</div></section>`);
							_push(ssrRenderComponent(_sfc_main$a, { label: "Observações" }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(ssrRenderComponent(_sfc_main$1, {
										modelValue: unref(form).notes,
										"onUpdate:modelValue": ($event) => unref(form).notes = $event,
										class: "w-full",
										maxlength: "2000"
									}, null, _parent, _scopeId));
									else return [createVNode(_sfc_main$1, {
										modelValue: unref(form).notes,
										"onUpdate:modelValue": ($event) => unref(form).notes = $event,
										class: "w-full",
										maxlength: "2000"
									}, null, 8, ["modelValue", "onUpdate:modelValue"])];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(ssrRenderComponent(_sfc_main, {
								modelValue: unref(form).active,
								"onUpdate:modelValue": ($event) => unref(form).active = $event,
								label: "Exibir no catálogo público"
							}, null, _parent, _scopeId));
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</fieldset>`);
						if (unref(uploadingDraft)) _push(`<p class="text-sm text-muted" role="status"${_scopeId}>Enviando a foto…</p>`);
						else _push(`<!---->`);
						if (!unref(editingId) && unref(file) && unref(submitError)) _push(ssrRenderComponent(_sfc_main$6, {
							type: "button",
							variant: "outline",
							disabled: unref(uploadingDraft),
							onClick: retryDraftPhoto
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Tentar enviar novamente`);
								else return [createTextVNode("Tentar enviar novamente")];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						if (unref(submitError)) _push(ssrRenderComponent(_sfc_main$8, {
							color: "error",
							title: unref(submitError),
							role: "alert"
						}, null, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`<div class="flex justify-end gap-2"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$6, {
							type: "button",
							color: "neutral",
							variant: "ghost",
							disabled: unref(saving) || unref(analysisBusy) || unref(uploadingDraft),
							onClick: ($event) => void (showEditor.value = false)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Cancelar`);
								else return [createTextVNode("Cancelar")];
							}),
							_: 1
						}, _parent, _scopeId));
						if (unref(editingId)) _push(ssrRenderComponent(_sfc_main$6, {
							type: "submit",
							loading: unref(saving),
							disabled: unref(analysisBusy)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Salvar`);
								else return [createTextVNode("Salvar")];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`</div></form>`);
					} else return [createVNode("form", {
						class: "space-y-4",
						onSubmit: withModifiers(save, ["prevent"])
					}, [
						createVNode("fieldset", {
							disabled: unref(saving),
							class: ["grid items-start gap-6", unref(editingId) ? "md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]" : "justify-items-center"]
						}, [createVNode("div", { class: "w-full min-w-0 max-w-72 md:max-w-none" }, [createVNode(_sfc_main$a, { label: "Foto" }, {
							default: withCtx(() => [
								unref(photoUrl) && !unref(removePhoto) && !unref(file) ? (openBlock(), createBlock("div", {
									key: 0,
									class: "mb-2 space-y-2"
								}, [createVNode("img", {
									src: unref(photoUrl),
									alt: "Foto atual do controle",
									class: "aspect-3/4 w-full rounded-lg bg-elevated object-contain"
								}, null, 8, ["src"]), createVNode(_sfc_main$6, {
									type: "button",
									size: "sm",
									color: "neutral",
									variant: "ghost",
									onClick: ($event) => void (removePhoto.value = true)
								}, {
									default: withCtx(() => [createTextVNode("Remover foto atual")]),
									_: 1
								}, 8, ["onClick"])])) : createCommentVNode("", true),
								unref(removePhoto) && !unref(file) ? (openBlock(), createBlock(_sfc_main$6, {
									key: 1,
									type: "button",
									size: "sm",
									color: "neutral",
									variant: "ghost",
									onClick: ($event) => void (removePhoto.value = false)
								}, {
									default: withCtx(() => [createTextVNode("Manter foto atual")]),
									_: 1
								}, 8, ["onClick"])) : createCommentVNode("", true),
								createVNode(_sfc_main$5, {
									modelValue: unref(file),
									"onUpdate:modelValue": ($event) => isRef(file) ? file.value = $event : null,
									disabled: unref(uploadingDraft) || unref(analysisBusy),
									accept: "image/jpeg,image/png,image/webp,image/avif",
									label: unref(photoUrl) ? "Escolher nova foto" : "Escolher foto",
									description: "PNG até 3 MiB, convertido em WebP. JPG, WebP ou AVIF até 750 KiB.",
									layout: "grid",
									class: "w-full",
									ui: {
										base: unref(photoUrl) && !unref(removePhoto) && !unref(file) ? "" : "aspect-[3/4]",
										fileLeadingAvatar: "[&_img]:object-contain"
									}
								}, null, 8, [
									"modelValue",
									"onUpdate:modelValue",
									"disabled",
									"label",
									"ui"
								])
							]),
							_: 1
						})]), unref(editingId) ? (openBlock(), createBlock("div", {
							key: 0,
							class: "min-w-0 space-y-4"
						}, [
							createVNode("div", { class: "grid gap-3 sm:grid-cols-2" }, [createVNode(_sfc_main$a, {
								label: "Código Vipo",
								required: ""
							}, {
								default: withCtx(() => [createVNode(_sfc_main$7, {
									modelValue: unref(form).vipoCode,
									"onUpdate:modelValue": ($event) => unref(form).vipoCode = $event,
									class: "w-full",
									maxlength: "60",
									required: ""
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}), createVNode(_sfc_main$a, {
								label: "Categoria",
								required: ""
							}, {
								default: withCtx(() => [createVNode(_sfc_main$4, {
									modelValue: unref(form).category,
									"onUpdate:modelValue": ($event) => unref(form).category = $event,
									items: categories,
									class: "w-full"
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							})]),
							createVNode("section", {
								class: "space-y-2",
								"aria-label": "Aparelhos compatíveis"
							}, [
								createVNode("h3", { class: "text-sm font-semibold" }, "Aparelhos compatíveis"),
								unref(brandsError) ? (openBlock(), createBlock("div", {
									key: 0,
									class: "flex flex-wrap items-center gap-2"
								}, [createVNode("p", { class: "text-sm text-error" }, "Não foi possível carregar as marcas."), createVNode(_sfc_main$6, {
									type: "button",
									size: "sm",
									variant: "ghost",
									onClick: () => unref(refreshBrands)()
								}, {
									default: withCtx(() => [createTextVNode("Tentar novamente")]),
									_: 1
								}, 8, ["onClick"])])) : (openBlock(), createBlock(_sfc_main$a, {
									key: 1,
									label: "Marcas"
								}, {
									default: withCtx(() => [createVNode(_sfc_main$3, {
										modelValue: unref(form).brandIds,
										"onUpdate:modelValue": ($event) => unref(form).brandIds = $event,
										items: unref(brandOptions),
										"value-key": "value",
										multiple: "",
										disabled: !unref(brandOptions).length,
										placeholder: "Selecione as marcas",
										class: "w-full"
									}, null, 8, [
										"modelValue",
										"onUpdate:modelValue",
										"items",
										"disabled"
									])]),
									_: 1
								})),
								!unref(brandsError) && !unref(brandOptions).length ? (openBlock(), createBlock("p", {
									key: 2,
									class: "text-sm text-muted"
								}, [
									createTextVNode(" Cadastre uma marca em "),
									createVNode(NuxtLink, {
										to: "/admin/marcas",
										class: "underline"
									}, {
										default: withCtx(() => [createTextVNode("Marcas")]),
										_: 1
									}),
									createTextVNode(" para selecioná-la aqui. ")
								])) : createCommentVNode("", true),
								createVNode(_sfc_main$a, {
									label: "Modelos ou linhas",
									description: "Pressione Enter após digitar cada modelo."
								}, {
									default: withCtx(() => [createVNode(_sfc_main$2, {
										modelValue: unref(form).models,
										"onUpdate:modelValue": ($event) => unref(form).models = $event,
										max: 100,
										"max-length": 140,
										"add-on-blur": "",
										placeholder: "Ex.: Sky-7067",
										class: "w-full"
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								}),
								createVNode("div", { class: "space-y-2" }, [
									!unref(editingId) || !unref(photoUrl) || unref(file) || unref(removePhoto) ? (openBlock(), createBlock("p", {
										key: 0,
										class: "text-sm text-muted"
									}, " Salva o controle com a foto antes de sugerir modelos. ")) : createCommentVNode("", true),
									unref(imageAnalysis)?.state === "unavailable" ? (openBlock(), createBlock("p", {
										key: 1,
										class: "text-sm text-muted"
									}, " A análise por foto precisa ser configurada no servidor. ")) : createCommentVNode("", true),
									createVNode(_sfc_main$6, {
										type: "button",
										size: "sm",
										variant: "outline",
										icon: "i-lucide-sparkles",
										loading: unref(analysisBusy),
										disabled: !unref(editingId) || !unref(photoUrl) || !!unref(file) || unref(removePhoto) || unref(imageAnalysis)?.state !== "available",
										onClick: ($event) => loadAnalysis("POST")
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(unref(imageAnalysis)?.state === "done" ? "Foto já analisada" : "Sugerir modelos pela foto"), 1)]),
										_: 1
									}, 8, [
										"loading",
										"disabled",
										"onClick"
									]),
									unref(imageAnalysis)?.state === "running" || !unref(imageAnalysis) && unref(analysisError) ? (openBlock(), createBlock(_sfc_main$6, {
										key: 2,
										type: "button",
										size: "sm",
										variant: "ghost",
										disabled: unref(analysisBusy),
										onClick: ($event) => loadAnalysis("GET")
									}, {
										default: withCtx(() => [createTextVNode(" Atualizar situação ")]),
										_: 1
									}, 8, ["disabled", "onClick"])) : createCommentVNode("", true),
									unref(imageAnalysis)?.state === "running" ? (openBlock(), createBlock("p", {
										key: 3,
										class: "text-sm text-muted"
									}, "Análise em andamento.")) : createCommentVNode("", true),
									unref(analysisError) ? (openBlock(), createBlock("p", {
										key: 4,
										role: "alert",
										class: "text-sm text-error"
									}, toDisplayString(unref(analysisError)), 1)) : createCommentVNode("", true),
									unref(imageAnalysis)?.state === "done" ? (openBlock(), createBlock(Fragment, { key: 5 }, [!unref(imageAnalysis).suggestions.length ? (openBlock(), createBlock("p", {
										key: 0,
										class: "text-sm text-muted"
									}, " Análise concluída sem sugestões verificáveis. Podes preencher os modelos manualmente. ")) : (openBlock(), createBlock(Fragment, { key: 1 }, [
										createVNode("p", { class: "text-sm text-muted" }, "Confere os modelos e suas fontes antes de adicionar."),
										createVNode("ul", { class: "max-h-36 list-disc overflow-auto pl-5 text-sm" }, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(imageAnalysis).suggestions, (suggestion) => {
											return openBlock(), createBlock("li", { key: suggestion.model }, [createTextVNode(toDisplayString(suggestion.model) + " ", 1), createVNode("a", {
												href: suggestion.source,
												class: "underline",
												target: "_blank",
												rel: "noopener noreferrer"
											}, "Fonte", 8, ["href"])]);
										}), 128))]),
										createVNode(_sfc_main$6, {
											type: "button",
											size: "sm",
											variant: "soft",
											disabled: unref(addedSuggestions) || unref(form).models.length >= 100,
											onClick: ($event) => addSuggestions(unref(imageAnalysis).suggestions)
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(unref(addedSuggestions) ? "Sugestões adicionadas ao formulário" : "Adicionar modelos"), 1)]),
											_: 1
										}, 8, ["disabled", "onClick"])
									], 64))], 64)) : createCommentVNode("", true)
								])
							]),
							createVNode(_sfc_main$a, { label: "Observações" }, {
								default: withCtx(() => [createVNode(_sfc_main$1, {
									modelValue: unref(form).notes,
									"onUpdate:modelValue": ($event) => unref(form).notes = $event,
									class: "w-full",
									maxlength: "2000"
								}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
								_: 1
							}),
							createVNode(_sfc_main, {
								modelValue: unref(form).active,
								"onUpdate:modelValue": ($event) => unref(form).active = $event,
								label: "Exibir no catálogo público"
							}, null, 8, ["modelValue", "onUpdate:modelValue"])
						])) : createCommentVNode("", true)], 10, ["disabled"]),
						unref(uploadingDraft) ? (openBlock(), createBlock("p", {
							key: 0,
							class: "text-sm text-muted",
							role: "status"
						}, "Enviando a foto…")) : createCommentVNode("", true),
						!unref(editingId) && unref(file) && unref(submitError) ? (openBlock(), createBlock(_sfc_main$6, {
							key: 1,
							type: "button",
							variant: "outline",
							disabled: unref(uploadingDraft),
							onClick: retryDraftPhoto
						}, {
							default: withCtx(() => [createTextVNode("Tentar enviar novamente")]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true),
						unref(submitError) ? (openBlock(), createBlock(_sfc_main$8, {
							key: 2,
							color: "error",
							title: unref(submitError),
							role: "alert"
						}, null, 8, ["title"])) : createCommentVNode("", true),
						createVNode("div", { class: "flex justify-end gap-2" }, [createVNode(_sfc_main$6, {
							type: "button",
							color: "neutral",
							variant: "ghost",
							disabled: unref(saving) || unref(analysisBusy) || unref(uploadingDraft),
							onClick: ($event) => void (showEditor.value = false)
						}, {
							default: withCtx(() => [createTextVNode("Cancelar")]),
							_: 1
						}, 8, ["disabled", "onClick"]), unref(editingId) ? (openBlock(), createBlock(_sfc_main$6, {
							key: 0,
							type: "submit",
							loading: unref(saving),
							disabled: unref(analysisBusy)
						}, {
							default: withCtx(() => [createTextVNode("Salvar")]),
							_: 1
						}, 8, ["loading", "disabled"])) : createCommentVNode("", true)])
					], 32)];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_sfc_main$b, {
				open: unref(showDelete),
				"onUpdate:open": ($event) => isRef(showDelete) ? showDelete.value = $event : null,
				title: "Apagar controle",
				dismissible: !unref(deleting),
				close: !unref(deleting),
				description: `O controle ${unref(deleteTarget)?.vipoCode ?? ""} e sua foto serão apagados permanentemente.`
			}, {
				footer: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_sfc_main$6, {
							color: "neutral",
							variant: "ghost",
							disabled: unref(deleting),
							onClick: ($event) => void (showDelete.value = false)
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Cancelar`);
								else return [createTextVNode("Cancelar")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_sfc_main$6, {
							color: "error",
							loading: unref(deleting),
							onClick: deleteSelected
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Apagar controle`);
								else return [createTextVNode("Apagar controle")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_sfc_main$6, {
						color: "neutral",
						variant: "ghost",
						disabled: unref(deleting),
						onClick: ($event) => void (showDelete.value = false)
					}, {
						default: withCtx(() => [createTextVNode("Cancelar")]),
						_: 1
					}, 8, ["disabled", "onClick"]), createVNode(_sfc_main$6, {
						color: "error",
						loading: unref(deleting),
						onClick: deleteSelected
					}, {
						default: withCtx(() => [createTextVNode("Apagar controle")]),
						_: 1
					}, 8, ["loading"])];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
		};
	}
});
// app/pages/admin/controles.vue
var _sfc_setup = controles_vue_vue_type_script_setup_true_lang_default.setup;
controles_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/controles.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var controles_default = controles_vue_vue_type_script_setup_true_lang_default;

export { controles_default as default };
//# sourceMappingURL=controles-BrNDx3xY.mjs.map
