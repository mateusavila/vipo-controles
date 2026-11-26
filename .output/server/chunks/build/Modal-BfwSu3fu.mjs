import { a as useComponentProps, b as useAppConfig, g as useForwardProps, r as renderList$2, f as useLocale, h as usePortal, V as VisuallyHidden_default, j as useForwardExpose, P as Primitive, i as get, s as ssrRenderList$2, t as tv, z as omit, Z as focus, q as getActiveElement, _ as containsComposed, a0 as AUTOFOCUS_ON_UNMOUNT, a1 as EVENT_OPTIONS$1, a2 as AUTOFOCUS_ON_MOUNT, a3 as focusFirst$2, a4 as getTabbableCandidates, a5 as getTabbableEdges, a6 as useEmitAsProps, T as Teleport_default, A as createContext, w as usePrimitiveElement, B as useForwardProps$1, p as isArrayOfArray, k as useCollection, C as injectConfigProviderContext } from '../virtual/entry.mjs';
import { u as useId$1, a as useForwardPropsEmits, _ as _sfc_main$4, c as useDirection, P as PopperAnchor_default, b as PopperArrow_default, d as PopperRoot_default, D as DismissableLayer_default, e as PopperContent_default, g as PopperContentPropsDefaultValue, i as acquireBodyPointerEvents, r as releaseBodyPointerEvents } from './Kbd-CdJL61Dx.mjs';
import { P as Presence_default } from './Presence-DAl9-TXs.mjs';
import { _ as _sfc_main$3, F as FieldGroupReset, a as _sfc_main$5, b as _sfc_main$3$1, f as _sfc_main$1$1, p as pickLinkProps, g as _sfc_main$2$1 } from './Button-LO2h-wN-.mjs';
import { _ as _sfc_main$6 } from './Input--Ghsdvyo.mjs';
import { X as defu } from '../nitro/nitro.mjs';
import { createReusableTemplate, reactiveOmit, useVModel, createSharedComposable, unrefElement, createGlobalState, useEventListener } from '@vueuse/core';
import { isClient, refAutoReset, reactiveOmit as reactiveOmit$1, tryOnBeforeUnmount, isIOS } from '@vueuse/shared';
import { hideOthers } from 'aria-hidden';
import { ae as useSlots, af as useModel, J as ssrRenderComponent, S as withCtx, u as unref, T as ssrRenderSlot, U as renderSlot, y as mergeProps, au as createSlots, V as openBlock, W as createBlock, $ as createCommentVNode, L as createVNode, ah as mergeModels, j as toRef, aq as toHandlers, a8 as ssrInterpolate, a7 as createTextVNode, ac as toDisplayString, aa as ssrRenderClass, F as Fragment, v as defineComponent, ag as withKeys, a1 as nextTick, K as renderVNode, M as resolveDynamicComponent, ad as withModifiers, p as computed, Y as normalizeProps, Z as guardReactiveProps, _ as toRefs, l as isRef, k as ref, w as watchEffect, D as watch, b as reactive, am as withDirectives, an as vShow, ar as watchSyncEffect, av as mergeDefaults, Q as useSSRContext } from '../_/vue.mjs';

// node_modules/reka-ui/dist/shared/useArrowNavigation.js
var ignoredElement = ["INPUT", "TEXTAREA"];
/**
* Allow arrow navigation for every html element with data-reka-collection-item tag
*
* @param e               Keyboard event
* @param currentElement  Event initiator element or any element that wants to handle the navigation
* @param parentElement   Parent element where contains all the collection items, this will collect every item to be used when nav
* @param options         further options
* @returns               the navigated html element or null if none
*/
function useArrowNavigation(e, currentElement, parentElement, options = {}) {
	if (!currentElement || options.enableIgnoredElement && ignoredElement.includes(currentElement.nodeName)) return null;
	const { arrowKeyOptions = "both", attributeName = "[data-reka-collection-item]", itemsArray = [], loop = true, dir = "ltr", preventScroll = true, focus = false } = options;
	const [right, left, up, down, home, end] = [
		e.key === "ArrowRight",
		e.key === "ArrowLeft",
		e.key === "ArrowUp",
		e.key === "ArrowDown",
		e.key === "Home",
		e.key === "End"
	];
	const goingVertical = up || down;
	const goingHorizontal = right || left;
	if (!home && !end && (!goingVertical && !goingHorizontal || arrowKeyOptions === "vertical" && goingHorizontal || arrowKeyOptions === "horizontal" && goingVertical)) return null;
	const allCollectionItems = parentElement ? Array.from(parentElement.querySelectorAll(attributeName)) : itemsArray;
	if (!allCollectionItems.length) return null;
	if (preventScroll) e.preventDefault();
	let item = null;
	if (goingHorizontal || goingVertical) item = findNextFocusableElement(allCollectionItems, currentElement, {
		goForward: goingVertical ? down : dir === "ltr" ? right : left,
		loop
	});
	else if (home) item = allCollectionItems.at(0) || null;
	else if (end) item = allCollectionItems.at(-1) || null;
	if (focus) item?.focus();
	return item;
}
/**
* Recursive function to find the next focusable element to avoid disabled elements
*
* @param elements Elements to navigate
* @param currentElement Current active element
* @param options
* @returns next focusable element
*/
function findNextFocusableElement(elements, currentElement, options, iterations = !elements.includes(currentElement) ? elements.length + 1 : elements.length) {
	if (--iterations === 0) return null;
	const index = elements.indexOf(currentElement);
	let newIndex;
	if (index === -1) newIndex = options.goForward ? 0 : elements.length - 1;
	else newIndex = options.goForward ? index + 1 : index - 1;
	if (!options.loop && (newIndex < 0 || newIndex >= elements.length)) return null;
	const candidate = elements[(newIndex + elements.length) % elements.length];
	if (!candidate) return null;
	if (candidate.hasAttribute("disabled") && candidate.getAttribute("disabled") !== "false") return findNextFocusableElement(elements, candidate, options, iterations);
	return candidate;
}
// node_modules/reka-ui/dist/shared/useBodyScrollLock.js
var pointerEventsOwner = Symbol("useBodyScrollLock");
var useBodyLockStackCount = createSharedComposable(() => {
	const map = ref(/* @__PURE__ */ new Map());
	const initialOverflow = ref();
	const locked = computed(() => {
		for (const value of map.value.values()) if (value) return true;
		return false;
	});
	const context = injectConfigProviderContext({ scrollBody: ref(true) });
	let stopTouchMoveListener = null;
	const resetBodyStyle = () => {
		(void 0).body.style.paddingRight = "";
		(void 0).body.style.marginRight = "";
		releaseBodyPointerEvents(void 0, pointerEventsOwner);
		(void 0).documentElement.style.removeProperty("--scrollbar-width");
		(void 0).body.style.overflow = initialOverflow.value ?? "";
		isIOS && stopTouchMoveListener?.();
		initialOverflow.value = void 0;
	};
	watch(locked, (val, oldVal) => {
		if (!isClient) return;
		if (!val) {
			if (oldVal) resetBodyStyle();
			return;
		}
		if (initialOverflow.value === void 0) initialOverflow.value = (void 0).body.style.overflow;
		const verticalScrollbarWidth = (void 0).innerWidth - (void 0).documentElement.clientWidth;
		const defaultConfig = {
			padding: verticalScrollbarWidth,
			margin: 0
		};
		const config = context.scrollBody?.value ? typeof context.scrollBody.value === "object" ? defu({
			padding: context.scrollBody.value.padding === true ? verticalScrollbarWidth : context.scrollBody.value.padding,
			margin: context.scrollBody.value.margin === true ? verticalScrollbarWidth : context.scrollBody.value.margin
		}, defaultConfig) : defaultConfig : {
			padding: 0,
			margin: 0
		};
		if (verticalScrollbarWidth > 0) {
			(void 0).body.style.paddingRight = typeof config.padding === "number" ? `${config.padding}px` : String(config.padding);
			(void 0).body.style.marginRight = typeof config.margin === "number" ? `${config.margin}px` : String(config.margin);
			(void 0).documentElement.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
			(void 0).body.style.overflow = "hidden";
		}
		if (isIOS) stopTouchMoveListener = useEventListener(void 0, "touchmove", (e) => preventDefault(e), { passive: false });
		nextTick(() => {
			if (!locked.value) return;
			acquireBodyPointerEvents(void 0, pointerEventsOwner);
			(void 0).body.style.overflow = "hidden";
		});
	}, {
		immediate: true,
		flush: "sync"
	});
	return map;
});
function useBodyScrollLock(initialState) {
	const id = Math.random().toString(36).substring(2, 7);
	const map = useBodyLockStackCount();
	map.value.set(id, initialState ?? false);
	const locked = computed({
		get: () => map.value.get(id) ?? false,
		set: (value) => map.value.set(id, value)
	});
	tryOnBeforeUnmount(() => {
		map.value.delete(id);
	});
	return locked;
}
function checkOverflowScroll(ele) {
	const style = (void 0).getComputedStyle(ele);
	if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
	else {
		const parent = ele.parentNode;
		if (!(parent instanceof Element) || parent.tagName === "BODY") return false;
		return checkOverflowScroll(parent);
	}
}
function preventDefault(rawEvent) {
	const e = rawEvent || (void 0).event;
	const _target = e.target;
	if (_target instanceof Element && checkOverflowScroll(_target)) return false;
	if (e.touches.length > 1) return true;
	if (e.preventDefault && e.cancelable) e.preventDefault();
	return false;
}
// node_modules/reka-ui/dist/shared/useComposing.js
var imeScriptRE = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Bopomofo}]/u;
function useComposing(onEnd) {
	const isComposing = ref(false);
	const isImeComposition = ref(true);
	const sawImeScript = ref(false);
	const shouldDeferInput = computed(() => isComposing.value && isImeComposition.value);
	function handleCompositionStart() {
		isComposing.value = true;
		isImeComposition.value = true;
		sawImeScript.value = false;
	}
	function handleCompositionUpdate(event) {
		if (!event.data) return;
		if (imeScriptRE.test(event.data)) {
			isImeComposition.value = true;
			sawImeScript.value = true;
		}
	}
	function handleCompositionEnd(event) {
		nextTick(() => {
			isComposing.value = false;
			onEnd?.(event);
		});
	}
	return {
		isComposing,
		shouldDeferInput,
		handleCompositionStart,
		handleCompositionUpdate,
		handleCompositionEnd
	};
}
// node_modules/reka-ui/dist/shared/useFilter.js
/**
* Provides locale-aware string filtering functions.
* Uses `Intl.Collator` for comparison to ensure proper Unicode handling.
*
* @param options - Optional collator options to customize comparison behavior.
*   See [Intl.CollatorOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options) for details.
* @returns An object with methods to check if a string starts with, ends with, or contains a substring.
*
* @example
* const { startsWith, endsWith, contains } = useFilter();
*
* startsWith('hello', 'he'); // true
* endsWith('hello', 'lo'); // true
* contains('hello', 'ell'); // true
*/
function useFilter$1(options) {
	const computedOptions = computed(() => unref(options));
	const collator = computed(() => new Intl.Collator("en", {
		usage: "search",
		...computedOptions.value
	}));
	const startsWith = (string, substring) => {
		if (substring.length === 0) return true;
		string = string.normalize("NFC");
		substring = substring.normalize("NFC");
		return collator.value.compare(string.slice(0, substring.length), substring) === 0;
	};
	const endsWith = (string, substring) => {
		if (substring.length === 0) return true;
		string = string.normalize("NFC");
		substring = substring.normalize("NFC");
		return collator.value.compare(string.slice(-substring.length), substring) === 0;
	};
	const contains = (string, substring) => {
		if (substring.length === 0) return true;
		string = string.normalize("NFC");
		substring = substring.normalize("NFC");
		if (substring.length > string.length) return false;
		const compare = collator.value.compare;
		if (string.includes(substring)) return true;
		const sliceLen = substring.length;
		for (let scan = 0; scan + sliceLen <= string.length; scan++) if (compare(substring, string.slice(scan, scan + sliceLen)) === 0) return true;
		return false;
	};
	return {
		startsWith,
		endsWith,
		contains
	};
}
// node_modules/reka-ui/dist/shared/useFocusGuards.js
/** Number of components which have requested interest to have focus guards */
var count = 0;
/**
* Injects a pair of focus guards at the edges of the whole DOM tree
* to ensure `focusin` & `focusout` events can be caught consistently.
*/
function useFocusGuards() {
	watchEffect((cleanupFn) => {
		if (!isClient) return;
		const edgeGuards = (void 0).querySelectorAll("[data-reka-focus-guard]");
		(void 0).body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
		(void 0).body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
		count++;
		cleanupFn(() => {
			if (count === 1) (void 0).querySelectorAll("[data-reka-focus-guard]").forEach((node) => node.remove());
			count--;
		});
	});
}
function createFocusGuard() {
	const element = (void 0).createElement("span");
	element.setAttribute("data-reka-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
// node_modules/reka-ui/dist/shared/useHideOthers.js
/**
* The `useHideOthers` function is a TypeScript function that takes a target element reference and
* hides all other elements in ARIA when the target element is present, and restores the visibility of the
* hidden elements when the target element is removed.
* @param {MaybeElementRef} target - The `target` parameter is a reference to the element that you want
* to hide other elements when it is clicked or focused.
*/
function useHideOthers(target) {
	let undo;
	watch(() => unrefElement(target), (el) => {
		let isInsideClosedPopover = false;
		try {
			isInsideClosedPopover = !!el?.closest("[popover]:not(:popover-open)");
		} catch {}
		if (el && !isInsideClosedPopover) undo = hideOthers(el);
		else if (undo) undo();
	});
}
// node_modules/reka-ui/dist/shared/useTypeahead.js
function useTypeahead(callback) {
	const search = refAutoReset("", 1e3);
	const handleTypeaheadSearch = (key, items) => {
		search.value = search.value + key;
		{
			const currentItem = getActiveElement();
			const itemsWithTextValue = items.map((item) => ({
				...item,
				textValue: item.value?.textValue ?? item.ref.textContent?.trim() ?? ""
			}));
			const currentMatch = itemsWithTextValue.find((item) => item.ref === currentItem);
			const nextMatch = getNextMatch(itemsWithTextValue.map((item) => item.textValue), search.value, currentMatch?.textValue);
			const newItem = itemsWithTextValue.find((item) => item.textValue === nextMatch);
			if (newItem) newItem.ref.focus();
			return newItem?.ref;
		}
	};
	const resetTypeahead = () => {
		search.value = "";
	};
	return {
		search,
		handleTypeaheadSearch,
		resetTypeahead
	};
}
/**
* Wraps an array around itself at a given start index
* Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
*/
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
/**
* This is the "meat" of the typeahead matching logic. It takes in all the values,
* the search and the current match, and returns the next match (or `undefined`).
*
* We normalize the search because if a user has repeatedly pressed a character,
* we want the exact same behavior as if we only had that one character
* (ie. cycle through options starting with that character)
*
* We also reorder the values by wrapping the array around the current match.
* This is so we always look forward from the current match, and picking the first
* match will always be the correct one.
*
* Finally, if the normalized search is exactly one character, we exclude the
* current match from the values because otherwise it would be the first to match always
* and focus would never move. This is as opposed to the regular case, where we
* don't want focus to move if the current match still matches.
*/
function getNextMatch(values, search, currentMatch) {
	const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
	let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
	if (normalizedSearch.length === 1) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
	const nextMatch = wrappedValues.find((value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
	return nextMatch !== currentMatch ? nextMatch : void 0;
}
// node_modules/reka-ui/dist/Dialog/DialogRoot.js
var [injectDialogRootContext, provideDialogRootContext] = /*#__PURE__*/ createContext("DialogRoot");
var DialogRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DialogRoot",
	props: {
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			required: false,
			default: false
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		},
		unmountOnHide: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const open = useVModel(props, "open", __emit, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		const triggerElement = ref();
		const contentElement = ref();
		const { modal, unmountOnHide } = toRefs(props);
		provideDialogRootContext({
			open,
			modal,
			unmountOnHide,
			openModal: () => {
				open.value = true;
			},
			onOpenChange: (value) => {
				open.value = value;
			},
			onOpenToggle: () => {
				open.value = !open.value;
			},
			contentId: "",
			titleId: "",
			descriptionId: "",
			triggerElement,
			contentElement
		});
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default", {
				open: unref(open),
				close: () => open.value = false
			});
		};
	}
});
// node_modules/reka-ui/dist/Dialog/DialogClose.js
var DialogClose_default = /* @__PURE__ */ defineComponent({
	__name: "DialogClose",
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
		const rootContext = injectDialogRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				type: __props.as === "button" ? "button" : void 0,
				onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["type"]);
		};
	}
});
// node_modules/reka-ui/dist/FocusScope/stack.js
var useFocusStackState = createGlobalState(() => {
	return ref([]);
});
function createFocusScopesStack() {
	/** A stack of focus scopes, with the active one at the top */
	const stack = useFocusStackState();
	return {
		add(focusScope) {
			const activeFocusScope = stack.value[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack.value = arrayRemove(stack.value, focusScope);
			stack.value.unshift(focusScope);
		},
		remove(focusScope) {
			stack.value = arrayRemove(stack.value, focusScope);
			stack.value[0]?.resume();
		}
	};
}
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
// node_modules/reka-ui/dist/FocusScope/FocusScope.js
var FocusScope_default = /* @__PURE__ */ defineComponent({
	__name: "FocusScope",
	props: {
		loop: {
			type: Boolean,
			required: false,
			default: false
		},
		trapped: {
			type: Boolean,
			required: false,
			default: false
		},
		present: {
			type: Boolean,
			required: false,
			default: true
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
	emits: ["mountAutoFocus", "unmountAutoFocus"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { currentRef, currentElement } = useForwardExpose();
		const lastFocusedElementRef = ref(null);
		const focusScopesStack = createFocusScopesStack();
		const focusScope = /*#__PURE__*/ reactive({
			paused: false,
			pause() {
				this.paused = true;
			},
			resume() {
				this.paused = false;
			}
		});
		watchEffect((cleanupFn) => {
			if (!isClient) return;
			const container = currentElement.value;
			if (!props.trapped) return;
			const ownerDocument = container?.ownerDocument ?? void 0;
			const root = container ? container.getRootNode() : ownerDocument;
			function handleFocusIn(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.value = target;
				else focus(lastFocusedElementRef.value, { select: true });
			}
			function handleFocusOut(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.value, { select: true });
			}
			function handleMutations(mutations) {
				const lastFocusedElement = lastFocusedElementRef.value;
				if (lastFocusedElement === null) return;
				if (!mutations.some((m) => m.removedNodes.length > 0)) return;
				const activeElement = getActiveElement();
				if (activeElement && container.contains(activeElement)) return;
				if (!container.contains(lastFocusedElement)) focus(container);
			}
			function handleDocumentFocusIn(event) {
				if (focusScope.paused || !container) return;
				const target = event.composedPath()[0];
				if (!containsComposed(container, target)) focus(lastFocusedElementRef.value, { select: true });
			}
			root.addEventListener("focusin", handleFocusIn);
			root.addEventListener("focusout", handleFocusOut);
			if (root !== ownerDocument) ownerDocument.addEventListener("focusin", handleDocumentFocusIn);
			const mutationObserver = new MutationObserver(handleMutations);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			cleanupFn(() => {
				root.removeEventListener("focusin", handleFocusIn);
				root.removeEventListener("focusout", handleFocusOut);
				if (root !== ownerDocument) ownerDocument.removeEventListener("focusin", handleDocumentFocusIn);
				mutationObserver.disconnect();
			});
		});
		function dispatchMountAutoFocus(container, previouslyFocusedElement) {
			const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
			const handleMountAutoFocus = (ev) => emits("mountAutoFocus", ev);
			container.addEventListener(AUTOFOCUS_ON_MOUNT, handleMountAutoFocus);
			container.dispatchEvent(mountEvent);
			container.removeEventListener(AUTOFOCUS_ON_MOUNT, handleMountAutoFocus);
			if (!mountEvent.defaultPrevented) {
				focusFirst$2(getTabbableCandidates(container), { select: true });
				if (getActiveElement() === previouslyFocusedElement) focus(container);
			}
		}
		watchEffect(async (cleanupFn) => {
			const container = currentElement.value;
			await nextTick();
			if (!container) return;
			if (props.present !== false) focusScopesStack.add(focusScope);
			const previouslyFocusedElement = getActiveElement();
			if (!container.contains(previouslyFocusedElement) && props.present !== false) dispatchMountAutoFocus(container, previouslyFocusedElement);
			cleanupFn(() => {
				const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
				const unmountEventHandler = (ev) => {
					emits("unmountAutoFocus", ev);
				};
				container.addEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
				container.dispatchEvent(unmountEvent);
				container.setAttribute("data-focus-scope-unmounting", "");
				setTimeout(() => {
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? (void 0).body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
					focusScopesStack.remove(focusScope);
					container.removeAttribute("data-focus-scope-unmounting");
				}, 0);
			});
		});
		watch(() => props.present, async (present, prevPresent) => {
			if (!isClient) return;
			if (present === false && prevPresent === true) {
				focusScopesStack.remove(focusScope);
				return;
			}
			if (present !== true || prevPresent !== false) return;
			focusScopesStack.add(focusScope);
			await nextTick();
			const container = currentElement.value;
			if (!container) return;
			const previouslyFocusedElement = getActiveElement();
			if (!container.contains(previouslyFocusedElement)) dispatchMountAutoFocus(container, previouslyFocusedElement);
		});
		function handleKeyDown(event) {
			if (!props.loop && !props.trapped) return;
			if (focusScope.paused) return;
			const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
			const focusedElement = getActiveElement();
			if (isTabKey && focusedElement) {
				const container = event.currentTarget;
				const [first, last] = getTabbableEdges(container);
				if (!(first && last)) {
					if (focusedElement === container) event.preventDefault();
				} else if (!event.shiftKey && focusedElement === last) {
					event.preventDefault();
					if (props.loop) focus(first, { select: true });
				} else if (event.shiftKey && focusedElement === first) {
					event.preventDefault();
					if (props.loop) focus(last, { select: true });
				}
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref_key: "currentRef",
				ref: currentRef,
				tabindex: "-1",
				"as-child": __props.asChild,
				as: __props.as,
				onKeydown: handleKeyDown
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["as-child", "as"]);
		};
	}
});
// node_modules/reka-ui/dist/Menu/utils.js
var ITEM_SELECT = "menu.itemSelect";
var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = [
	"ArrowDown",
	"PageUp",
	"Home"
];
var LAST_KEYS = [
	"ArrowUp",
	"PageDown",
	"End"
];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
	ltr: [...SELECTION_KEYS, "ArrowRight"],
	rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
};
function getOpenState(open) {
	return open ? "open" : "closed";
}
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
function getCheckedState(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
/**
* `entryFocus` is internal to the menu content wrappers (DropdownMenu, ContextMenu, Menubar),
* so drop a consumer's `@entry-focus` listener instead of letting it fall through to `MenuContent`.
*/
function omitEntryFocusListener(attrs) {
	const { onEntryFocus: _, onEntryFocusOnce: __, ...rest } = attrs;
	return rest;
}
function focusFirst$1(candidates) {
	const PREVIOUSLY_FOCUSED_ELEMENT = getActiveElement();
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus();
		if (getActiveElement() !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
function isPointInPolygon(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const xi = polygon[i].x;
		const yi = polygon[i].y;
		const xj = polygon[j].x;
		const yj = polygon[j].y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
	}
	return inside;
}
function isPointerInGraceArea(event, area) {
	if (!area) return false;
	return isPointInPolygon({
		x: event.clientX,
		y: event.clientY
	}, area);
}
function isMouseEvent(event) {
	return event.pointerType === "mouse";
}
// node_modules/reka-ui/dist/Dialog/DialogContentImpl.js
var DialogContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContentImpl",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		trapFocus: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
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
		},
		present: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectDialogRootContext();
		const { forwardRef} = useForwardExpose();
		rootContext.titleId ||= useId$1(void 0, "reka-dialog-title");
		rootContext.descriptionId ||= useId$1(void 0, "reka-dialog-description");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(FocusScope_default), {
				"as-child": "",
				loop: "",
				trapped: props.trapFocus,
				present: props.present,
				onMountAutoFocus: _cache[5] || (_cache[5] = ($event) => emits("openAutoFocus", $event)),
				onUnmountAutoFocus: _cache[6] || (_cache[6] = ($event) => emits("closeAutoFocus", $event))
			}, {
				default: withCtx(() => [createVNode(unref(DismissableLayer_default), mergeProps({
					id: unref(rootContext).contentId,
					ref: unref(forwardRef),
					as: __props.as,
					"as-child": __props.asChild,
					present: props.present,
					"disable-outside-pointer-events": __props.disableOutsidePointerEvents,
					role: "dialog",
					"aria-describedby": unref(rootContext).descriptionId,
					"aria-labelledby": unref(rootContext).titleId,
					"data-state": unref(getOpenState)(unref(rootContext).open.value)
				}, _ctx.$attrs, {
					onDismiss: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false)),
					onEscapeKeyDown: _cache[1] || (_cache[1] = ($event) => emits("escapeKeyDown", $event)),
					onFocusOutside: _cache[2] || (_cache[2] = ($event) => emits("focusOutside", $event)),
					onInteractOutside: _cache[3] || (_cache[3] = ($event) => emits("interactOutside", $event)),
					onPointerDownOutside: _cache[4] || (_cache[4] = ($event) => emits("pointerDownOutside", $event))
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"id",
					"as",
					"as-child",
					"present",
					"disable-outside-pointer-events",
					"aria-describedby",
					"aria-labelledby",
					"data-state"
				])]),
				_: 3
			}, 8, ["trapped", "present"]);
		};
	}
});
// node_modules/reka-ui/dist/Dialog/DialogContentModal.js
var DialogContentModal_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContentModal",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		trapFocus: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		present: {
			type: Boolean,
			required: true
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectDialogRootContext();
		const emitsAsProps = useEmitAsProps(emits);
		const { forwardRef, currentElement } = useForwardExpose();
		useHideOthers(computed(() => props.present ? currentElement.value : void 0));
		const forwardedProps = computed(() => {
			const { present: _, ...rest } = props;
			return rest;
		});
		watch(() => props.present, (isPresent, wasPresent) => {
			if (!isPresent && wasPresent) rootContext.triggerElement.value?.focus();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(DialogContentImpl_default, mergeProps({
				...forwardedProps.value,
				...unref(emitsAsProps)
			}, {
				ref: unref(forwardRef),
				present: __props.present,
				"trap-focus": unref(rootContext).open.value,
				"disable-outside-pointer-events": props.disableOutsidePointerEvents,
				onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
					if (!event.defaultPrevented) {
						event.preventDefault();
						unref(rootContext).triggerElement.value?.focus();
					}
				}),
				onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
					const originalEvent = event.detail.originalEvent;
					const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
					if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
				}),
				onFocusOutside: _cache[2] || (_cache[2] = (event) => {
					event.preventDefault();
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"present",
				"trap-focus",
				"disable-outside-pointer-events"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Dialog/DialogContentNonModal.js
var DialogContentNonModal_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContentNonModal",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		trapFocus: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
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
		},
		present: {
			type: Boolean,
			required: true
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emitsAsProps = useEmitAsProps(__emit);
		useForwardExpose();
		const rootContext = injectDialogRootContext();
		const hasInteractedOutsideRef = ref(false);
		const hasPointerDownOutsideRef = ref(false);
		const forwardedProps = computed(() => {
			const { present: _, ...rest } = props;
			return rest;
		});
		watch(() => props.present, (isPresent, wasPresent) => {
			if (!isPresent && wasPresent) {
				if (!hasInteractedOutsideRef.value) rootContext.triggerElement.value?.focus();
				hasInteractedOutsideRef.value = false;
				hasPointerDownOutsideRef.value = false;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(DialogContentImpl_default, mergeProps({
				...forwardedProps.value,
				...unref(emitsAsProps)
			}, {
				present: __props.present,
				"trap-focus": false,
				"disable-outside-pointer-events": false,
				onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
					if (!event.defaultPrevented) {
						if (!hasInteractedOutsideRef.value) unref(rootContext).triggerElement.value?.focus();
						event.preventDefault();
					}
					hasInteractedOutsideRef.value = false;
					hasPointerDownOutsideRef.value = false;
				}),
				onInteractOutside: _cache[1] || (_cache[1] = (event) => {
					if (!event.defaultPrevented) {
						hasInteractedOutsideRef.value = true;
						if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.value = true;
					}
					const target = event.target;
					if (unref(rootContext).triggerElement.value?.contains(target)) event.preventDefault();
					if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.value) event.preventDefault();
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["present"]);
		};
	}
});
// node_modules/reka-ui/dist/Dialog/DialogContent.js
var DialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false,
			default: void 0
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
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectDialogRootContext();
		const emitsAsProps = useEmitAsProps(emits);
		const { forwardRef } = useForwardExpose();
		const staysMounted = computed(() => props.forceMount || !rootContext.unmountOnHide.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), {
				present: unref(rootContext).open.value,
				"force-mount": staysMounted.value
			}, {
				default: withCtx(({ present }) => [unref(rootContext).modal.value ? withDirectives((openBlock(), createBlock(DialogContentModal_default, mergeProps({
					key: 0,
					ref: unref(forwardRef),
					present: staysMounted.value ? present : true
				}, {
					...props,
					...unref(emitsAsProps),
					..._ctx.$attrs
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["present"])), [[vShow, __props.forceMount || unref(rootContext).unmountOnHide.value || present]]) : withDirectives((openBlock(), createBlock(DialogContentNonModal_default, mergeProps({
					key: 1,
					ref: unref(forwardRef),
					present: staysMounted.value ? present : true
				}, {
					...props,
					...unref(emitsAsProps),
					..._ctx.$attrs
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, ["present"])), [[vShow, __props.forceMount || unref(rootContext).unmountOnHide.value || present]])]),
				_: 3
			}, 8, ["present", "force-mount"]);
		};
	}
});
// node_modules/reka-ui/dist/Dialog/DialogDescription.js
var DialogDescription_default = /* @__PURE__ */ defineComponent({
	__name: "DialogDescription",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "p"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const rootContext = injectDialogRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(rootContext).descriptionId }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
// node_modules/reka-ui/dist/Dialog/DialogOverlayImpl.js
var DialogOverlayImpl_default = /* @__PURE__ */ defineComponent({
	__name: "DialogOverlayImpl",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		present: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectDialogRootContext();
		const scrollLocked = useBodyScrollLock(props.present);
		watch(() => props.present, (val) => scrollLocked.value = val);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: __props.as,
				"as-child": __props.asChild,
				"data-state": unref(rootContext).open.value ? "open" : "closed",
				style: { "pointer-events": "auto" },
				onPointerdown: _cache[0] || (_cache[0] = withModifiers(() => {}, [
					"left",
					"self",
					"prevent"
				]))
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-state"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Dialog/DialogOverlay.js
var DialogOverlay_default = /* @__PURE__ */ defineComponent({
	__name: "DialogOverlay",
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
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectDialogRootContext();
		const { forwardRef } = useForwardExpose();
		const staysMounted = computed(() => props.forceMount || !rootContext.unmountOnHide.value);
		return (_ctx, _cache) => {
			return unref(rootContext)?.modal.value ? (openBlock(), createBlock(unref(Presence_default), {
				key: 0,
				present: unref(rootContext).open.value,
				"force-mount": staysMounted.value
			}, {
				default: withCtx(({ present }) => [withDirectives(createVNode(DialogOverlayImpl_default, mergeProps(_ctx.$attrs, {
					ref: unref(forwardRef),
					as: __props.as,
					"as-child": __props.asChild,
					present: staysMounted.value ? present : true
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"as",
					"as-child",
					"present"
				]), [[vShow, __props.forceMount || unref(rootContext).unmountOnHide.value || present]])]),
				_: 3
			}, 8, ["present", "force-mount"])) : createCommentVNode("v-if", true);
		};
	}
});
// node_modules/reka-ui/dist/Dialog/DialogPortal.js
var DialogPortal_default = /* @__PURE__ */ defineComponent({
	__name: "DialogPortal",
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
// node_modules/reka-ui/dist/Dialog/DialogTitle.js
var DialogTitle_default = /* @__PURE__ */ defineComponent({
	__name: "DialogTitle",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "h2"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectDialogRootContext();
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(rootContext).titleId }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
// node_modules/reka-ui/dist/Dialog/DialogTrigger.js
var DialogTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "DialogTrigger",
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
		const rootContext = injectDialogRootContext();
		const { forwardRef} = useForwardExpose();
		rootContext.contentId ||= useId$1(void 0, "reka-dialog-content");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				ref: unref(forwardRef),
				type: __props.as === "button" ? "button" : void 0,
				"aria-haspopup": "dialog",
				"aria-expanded": unref(rootContext).open.value || false,
				"aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
				"data-state": unref(rootContext).open.value ? "open" : "closed",
				onClick: unref(rootContext).onOpenToggle
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"type",
				"aria-expanded",
				"aria-controls",
				"data-state",
				"onClick"
			]);
		};
	}
});
// node_modules/reka-ui/dist/RovingFocus/utils.js
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var MAP_KEY_TO_FOCUS_INTENT = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function getDirectionAwareKey(key, dir) {
	if (dir !== "rtl") return key;
	return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
	const key = getDirectionAwareKey(event.key, dir);
	if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
	if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
	return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
	const PREVIOUSLY_FOCUSED_ELEMENT = getActiveElement();
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus({ preventScroll });
		if (getActiveElement() !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
// node_modules/reka-ui/dist/RovingFocus/RovingFocusGroup.js
var [injectRovingFocusGroupContext, provideRovingFocusGroupContext] = /*#__PURE__*/ createContext("RovingFocusGroup");
var RovingFocusGroup_default = /* @__PURE__ */ defineComponent({
	__name: "RovingFocusGroup",
	props: {
		orientation: {
			type: String,
			required: false,
			default: void 0
		},
		dir: {
			type: String,
			required: false
		},
		loop: {
			type: Boolean,
			required: false,
			default: false
		},
		currentTabStopId: {
			type: [String, null],
			required: false
		},
		defaultCurrentTabStopId: {
			type: String,
			required: false
		},
		preventScrollOnEntryFocus: {
			type: Boolean,
			required: false,
			default: false
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
	emits: ["entryFocus", "update:currentTabStopId"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { loop, orientation, dir: propDir } = toRefs(props);
		const dir = useDirection(propDir);
		const currentTabStopId = useVModel(props, "currentTabStopId", emits, {
			defaultValue: props.defaultCurrentTabStopId,
			passive: props.currentTabStopId === void 0
		});
		const isTabbingBackOut = ref(false);
		const isClickFocus = ref(false);
		const focusableItemsCount = ref(0);
		const { getItems, CollectionSlot } = useCollection({ isProvider: true });
		function handleFocus(event) {
			const isKeyboardFocus = !isClickFocus.value;
			if (event.currentTarget && event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut.value) {
				const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
				event.currentTarget.dispatchEvent(entryFocusEvent);
				emits("entryFocus", entryFocusEvent);
				if (!entryFocusEvent.defaultPrevented) {
					const items = getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "");
					focusFirst([
						items.find((item) => item.getAttribute("data-active") === ""),
						items.find((item) => item.getAttribute("data-highlighted") === ""),
						items.find((item) => item.id === currentTabStopId.value),
						...items
					].filter(Boolean), props.preventScrollOnEntryFocus);
				}
			}
			isClickFocus.value = false;
		}
		function handleMouseUp() {
			setTimeout(() => {
				isClickFocus.value = false;
			}, 1);
		}
		__expose({ getItems });
		provideRovingFocusGroupContext({
			loop,
			dir,
			orientation,
			currentTabStopId,
			onItemFocus: (tabStopId) => {
				currentTabStopId.value = tabStopId;
			},
			onItemShiftTab: () => {
				isTabbingBackOut.value = true;
			},
			onFocusableItemAdd: () => {
				focusableItemsCount.value++;
			},
			onFocusableItemRemove: () => {
				focusableItemsCount.value--;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionSlot), null, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					tabindex: isTabbingBackOut.value || focusableItemsCount.value === 0 ? -1 : 0,
					"data-orientation": unref(orientation),
					as: __props.as,
					"as-child": __props.asChild,
					dir: unref(dir),
					style: { "outline": "none" },
					onMousedown: _cache[0] || (_cache[0] = ($event) => isClickFocus.value = true),
					onMouseup: handleMouseUp,
					onFocus: handleFocus,
					onBlur: _cache[1] || (_cache[1] = ($event) => isTabbingBackOut.value = false)
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"tabindex",
					"data-orientation",
					"as",
					"as-child",
					"dir"
				])]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuAnchor.js
var MenuAnchor_default = /* @__PURE__ */ defineComponent({
	__name: "MenuAnchor",
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
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperAnchor_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuArrow.js
var MenuArrow_default = /* @__PURE__ */ defineComponent({
	__name: "MenuArrow",
	props: {
		width: {
			type: Number,
			required: false
		},
		height: {
			type: Number,
			required: false
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
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/shared/useIsUsingKeyboard.js
function useIsUsingKeyboardImpl() {
	return ref(false);
}
var useIsUsingKeyboard = createSharedComposable(useIsUsingKeyboardImpl);
// node_modules/reka-ui/dist/Menu/MenuRoot.js
var [injectMenuContext, provideMenuContext] = /*#__PURE__*/ createContext(["MenuRoot", "MenuSub"], "MenuContext");
var [injectMenuRootContext, provideMenuRootContext] = /*#__PURE__*/ createContext("MenuRoot");
var MenuRoot_default = /* @__PURE__ */ defineComponent({
	__name: "MenuRoot",
	props: {
		open: {
			type: Boolean,
			required: false,
			default: false
		},
		dir: {
			type: String,
			required: false
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { modal, dir: propDir } = toRefs(props);
		const dir = useDirection(propDir);
		const open = useVModel(props, "open", emits);
		const content = ref();
		const isUsingKeyboardRef = useIsUsingKeyboard();
		provideMenuContext({
			open,
			onOpenChange: (value) => {
				open.value = value;
			},
			content,
			onContentChange: (element) => {
				content.value = element;
			}
		});
		provideMenuRootContext({
			onClose: () => {
				open.value = false;
			},
			isUsingKeyboardRef,
			dir,
			modal
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuContentImpl.js
var [injectMenuContentContext, provideMenuContentContext] = /*#__PURE__*/ createContext("MenuContent");
var MenuContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "MenuContentImpl",
	props: /* @__PURE__ */ mergeDefaults({
		loop: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		},
		disableOutsideScroll: {
			type: Boolean,
			required: false
		},
		trapFocus: {
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
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	}, { ...PopperContentPropsDefaultValue }),
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus",
		"dismiss"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const menuContext = injectMenuContext();
		const rootContext = injectMenuRootContext();
		const { trapFocus, disableOutsidePointerEvents, loop } = toRefs(props);
		useFocusGuards();
		useBodyScrollLock(disableOutsidePointerEvents.value);
		const searchRef = ref("");
		const timerRef = ref(0);
		const pointerGraceTimerRef = ref(0);
		const pointerGraceIntentRef = ref(null);
		const pointerDirRef = ref("right");
		const lastPointerXRef = ref(0);
		const currentItemId = ref(null);
		const rovingFocusGroupRef = ref();
		const { forwardRef, currentElement: contentElement } = useForwardExpose();
		const { handleTypeaheadSearch } = useTypeahead();
		const highlightedElement = ref();
		function onKeydownNavigation(event) {
			const el = useArrowNavigation(event, highlightedElement.value || getActiveElement(), contentElement.value, {
				loop: loop.value,
				arrowKeyOptions: "vertical",
				dir: rootContext?.dir.value,
				focus: false,
				attributeName: "[data-reka-collection-item]:not([data-disabled])"
			});
			if (el) {
				highlightedElement.value = el;
				el.scrollIntoView({ block: "nearest" });
			}
		}
		function onKeydownEnter() {
			if (highlightedElement.value) highlightedElement.value.click();
		}
		const filterElement = ref();
		const activeSubmenuContext = ref();
		watch(highlightedElement, (el) => {
			if (activeSubmenuContext.value && (el === void 0 || el !== activeSubmenuContext.value.trigger.value)) {
				if (el === void 0) return;
				activeSubmenuContext.value.onOpenChange(false);
				activeSubmenuContext.value = void 0;
			}
		});
		watch(contentElement, (el) => {
			menuContext.onContentChange(el);
		});
		function isPointerMovingToSubmenu(event) {
			return pointerDirRef.value === pointerGraceIntentRef.value?.side && isPointerInGraceArea(event, pointerGraceIntentRef.value?.area);
		}
		async function handleMountAutoFocus(event) {
			emits("openAutoFocus", event);
			if (event.defaultPrevented) return;
			event.preventDefault();
			contentElement.value?.focus({ preventScroll: true });
		}
		function handleKeyDown(event) {
			if (event.defaultPrevented) return;
			const target = event.target;
			const isKeyDownInside = target.closest("[data-reka-menu-content]") === event.currentTarget;
			const isKeyDownInTextField = ["input", "textarea"].includes(target.tagName.toLowerCase());
			const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
			const isCharacterKey = event.key.length === 1;
			const el = useArrowNavigation(event, getActiveElement(), contentElement.value, {
				loop: loop.value,
				arrowKeyOptions: "vertical",
				dir: rootContext?.dir.value,
				focus: true,
				attributeName: "[data-reka-collection-item]:not([data-disabled])"
			});
			if (el) return el?.focus();
			if (event.code === "Space") return;
			const collectionItems = rovingFocusGroupRef.value?.getItems() ?? [];
			if (isKeyDownInside) {
				if (event.key === "Tab" && rootContext.modal.value) event.preventDefault();
				if (!isModifierKey && isCharacterKey && !isKeyDownInTextField) handleTypeaheadSearch(event.key, collectionItems);
			}
			if (event.target !== contentElement.value) return;
			if (!FIRST_LAST_KEYS.includes(event.key)) return;
			event.preventDefault();
			const candidateNodes = [...collectionItems.map((item) => item.ref)];
			if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
			focusFirst$1(candidateNodes);
		}
		function handleBlur(event) {
			if (!event?.currentTarget?.contains?.(event.target)) {
				(void 0).clearTimeout(timerRef.value);
				searchRef.value = "";
			}
		}
		function handlePointerMove(event) {
			if (!isMouseEvent(event)) return;
			const target = event.target;
			const pointerXHasChanged = lastPointerXRef.value !== event.clientX;
			if ((event?.currentTarget)?.contains(target) && pointerXHasChanged) {
				const newDir = event.clientX > lastPointerXRef.value ? "right" : "left";
				pointerDirRef.value = newDir;
				lastPointerXRef.value = event.clientX;
			}
		}
		function handlePointerEnter(event) {
			if (!isMouseEvent(event)) return;
			if (filterElement.value) filterElement.value.focus();
		}
		provideMenuContentContext({
			onItemEnter: (event) => {
				if (isPointerMovingToSubmenu(event)) return true;
				else return false;
			},
			onItemLeave: (event) => {
				if (isPointerMovingToSubmenu(event)) return true;
				if (!["INPUT", "TEXTAREA"].includes(getActiveElement()?.tagName || "")) contentElement.value?.focus();
				currentItemId.value = null;
				return false;
			},
			onTriggerLeave: (event) => {
				if (isPointerMovingToSubmenu(event)) return true;
				else return false;
			},
			searchRef,
			highlightedElement,
			onKeydownNavigation,
			onKeydownEnter,
			filterElement,
			onFilterElementChange: (el) => {
				filterElement.value = el;
			},
			activeSubmenuContext,
			pointerGraceTimerRef,
			onPointerGraceIntentChange: (intent) => {
				pointerGraceIntentRef.value = intent;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(FocusScope_default), {
				"as-child": "",
				trapped: unref(trapFocus),
				onMountAutoFocus: handleMountAutoFocus,
				onUnmountAutoFocus: _cache[7] || (_cache[7] = ($event) => emits("closeAutoFocus", $event))
			}, {
				default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
					"as-child": "",
					"disable-outside-pointer-events": unref(disableOutsidePointerEvents),
					onEscapeKeyDown: _cache[2] || (_cache[2] = ($event) => emits("escapeKeyDown", $event)),
					onPointerDownOutside: _cache[3] || (_cache[3] = ($event) => emits("pointerDownOutside", $event)),
					onFocusOutside: _cache[4] || (_cache[4] = ($event) => emits("focusOutside", $event)),
					onInteractOutside: _cache[5] || (_cache[5] = ($event) => emits("interactOutside", $event)),
					onDismiss: _cache[6] || (_cache[6] = ($event) => emits("dismiss"))
				}, {
					default: withCtx(() => [createVNode(unref(RovingFocusGroup_default), {
						ref_key: "rovingFocusGroupRef",
						ref: rovingFocusGroupRef,
						"current-tab-stop-id": currentItemId.value,
						"onUpdate:currentTabStopId": _cache[0] || (_cache[0] = ($event) => currentItemId.value = $event),
						"as-child": "",
						orientation: "vertical",
						dir: unref(rootContext).dir.value,
						loop: unref(loop),
						onEntryFocus: _cache[1] || (_cache[1] = (event) => {
							emits("entryFocus", event);
							if (!unref(rootContext).isUsingKeyboardRef.value) event.preventDefault();
						})
					}, {
						default: withCtx(() => [createVNode(unref(PopperContent_default), {
							ref: unref(forwardRef),
							role: "menu",
							as: __props.as,
							"as-child": __props.asChild,
							"aria-orientation": "vertical",
							"data-reka-menu-content": "",
							"data-state": unref(getOpenState)(unref(menuContext).open.value),
							dir: unref(rootContext).dir.value,
							side: __props.side,
							"side-offset": __props.sideOffset,
							align: __props.align,
							"align-offset": __props.alignOffset,
							"avoid-collisions": __props.avoidCollisions,
							"collision-boundary": __props.collisionBoundary,
							"collision-padding": __props.collisionPadding,
							"arrow-padding": __props.arrowPadding,
							"prioritize-position": __props.prioritizePosition,
							"position-strategy": __props.positionStrategy,
							"update-position-strategy": __props.updatePositionStrategy,
							sticky: __props.sticky,
							"hide-when-detached": __props.hideWhenDetached,
							reference: __props.reference,
							onKeydown: handleKeyDown,
							onBlur: handleBlur,
							onPointermove: handlePointerMove,
							onPointerenter: handlePointerEnter
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 8, [
							"as",
							"as-child",
							"data-state",
							"dir",
							"side",
							"side-offset",
							"align",
							"align-offset",
							"avoid-collisions",
							"collision-boundary",
							"collision-padding",
							"arrow-padding",
							"prioritize-position",
							"position-strategy",
							"update-position-strategy",
							"sticky",
							"hide-when-detached",
							"reference"
						])]),
						_: 3
					}, 8, [
						"current-tab-stop-id",
						"dir",
						"loop"
					])]),
					_: 3
				}, 8, ["disable-outside-pointer-events"])]),
				_: 3
			}, 8, ["trapped"]);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuItemImpl.js
var MenuItemImpl_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "MenuItemImpl",
	props: {
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
	setup(__props) {
		const props = __props;
		const contentContext = injectMenuContentContext();
		const { forwardRef, currentElement } = useForwardExpose();
		const { CollectionItem } = useCollection();
		const isFocused = ref(false);
		const isHighlighted = computed(() => isFocused.value || currentElement.value != null && contentContext.highlightedElement.value === currentElement.value);
		async function handlePointerMove(event) {
			if (event.defaultPrevented || !isMouseEvent(event)) return;
			if (props.disabled) contentContext.onItemLeave(event);
			else if (!contentContext.onItemEnter(event)) {
				const item = event.currentTarget;
				contentContext.highlightedElement.value = item;
				if (!["INPUT", "TEXTAREA"].includes(getActiveElement()?.tagName || "")) item.focus({ preventScroll: true });
			}
		}
		async function handlePointerLeave(event) {
			await nextTick();
			if (event.defaultPrevented) return;
			if (!isMouseEvent(event)) return;
			if (contentContext.highlightedElement.value !== currentElement.value) return;
			if (!contentContext.onItemLeave(event) && contentContext.highlightedElement.value === currentElement.value) contentContext.highlightedElement.value = void 0;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionItem), { value: { textValue: __props.textValue } }, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					role: "menuitem",
					tabindex: "-1"
				}, _ctx.$attrs, {
					as: __props.as,
					"as-child": __props.asChild,
					"aria-disabled": __props.disabled || void 0,
					"data-disabled": __props.disabled ? "" : void 0,
					"data-highlighted": isHighlighted.value ? "" : void 0,
					onPointermove: handlePointerMove,
					onPointerleave: handlePointerLeave,
					onFocus: _cache[0] || (_cache[0] = async (event) => {
						const item = event.currentTarget;
						await nextTick();
						if (event.defaultPrevented || __props.disabled) return;
						isFocused.value = true;
						unref(contentContext).highlightedElement.value = item;
					}),
					onBlur: _cache[1] || (_cache[1] = async (event) => {
						await nextTick();
						if (event.defaultPrevented) return;
						isFocused.value = false;
					})
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"as",
					"as-child",
					"aria-disabled",
					"data-disabled",
					"data-highlighted"
				])]),
				_: 3
			}, 8, ["value"]);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuItem.js
var MenuItem_default = /* @__PURE__ */ defineComponent({
	__name: "MenuItem",
	props: {
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
		const { forwardRef, currentElement } = useForwardExpose();
		const rootContext = injectMenuRootContext();
		const contentContext = injectMenuContentContext();
		const isPointerDownRef = ref(false);
		async function handleSelect() {
			const menuItem = currentElement.value;
			if (!props.disabled && menuItem) {
				const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
					bubbles: true,
					cancelable: true
				});
				emits("select", itemSelectEvent);
				await nextTick();
				if (itemSelectEvent.defaultPrevented) isPointerDownRef.value = false;
				else rootContext.onClose();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuItemImpl_default, mergeProps(props, {
				ref: unref(forwardRef),
				onClick: handleSelect,
				onPointerdown: _cache[0] || (_cache[0] = () => {
					isPointerDownRef.value = true;
				}),
				onPointerup: _cache[1] || (_cache[1] = async (event) => {
					await nextTick();
					if (event.defaultPrevented) return;
					if (!isPointerDownRef.value) event.currentTarget?.click();
				}),
				onKeydown: _cache[2] || (_cache[2] = async (event) => {
					const isTypingAhead = unref(contentContext).searchRef.value !== "";
					if (__props.disabled || isTypingAhead && event.key === " ") return;
					if (unref(SELECTION_KEYS).includes(event.key)) {
						event.currentTarget?.click();
						/**
						* We prevent default browser behaviour for selection keys as they should trigger
						* a selection only:
						* - prevents space from scrolling the page.
						* - if keydown causes focus to move, prevents keydown from firing on the new target.
						*/
						event.preventDefault();
					}
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuItemIndicator.js
var [injectMenuItemIndicatorContext, provideMenuItemIndicatorContext] = /*#__PURE__*/ createContext(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext");
var MenuItemIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "MenuItemIndicator",
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
		const indicatorContext = injectMenuItemIndicatorContext({ modelValue: ref(false) });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: __props.forceMount || unref(isIndeterminate)(unref(indicatorContext).modelValue.value) || unref(indicatorContext).modelValue.value === true }, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					as: __props.as,
					"as-child": __props.asChild,
					"data-state": unref(getCheckedState)(unref(indicatorContext).modelValue.value)
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"as",
					"as-child",
					"data-state"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuCheckboxItem.js
var MenuCheckboxItem_default = /* @__PURE__ */ defineComponent({
	__name: "MenuCheckboxItem",
	props: {
		modelValue: {
			type: [Boolean, String],
			required: false,
			default: false
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
	emits: ["select", "update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const delegatedProps = reactiveOmit(props, ["modelValue"]);
		const forwarded = useForwardProps$1(delegatedProps);
		const modelValue = useVModel(props, "modelValue", emits);
		provideMenuItemIndicatorContext({ modelValue });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuItem_default, mergeProps({ role: "menuitemcheckbox" }, unref(forwarded), {
				"aria-checked": unref(isIndeterminate)(unref(modelValue)) ? "mixed" : unref(modelValue),
				"data-state": unref(getCheckedState)(unref(modelValue)),
				onSelect: _cache[0] || (_cache[0] = async (event) => {
					emits("select", event);
					if (unref(isIndeterminate)(unref(modelValue))) modelValue.value = true;
					else modelValue.value = !unref(modelValue);
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					checked: unref(modelValue),
					modelValue: unref(modelValue)
				})]),
				_: 3
			}, 16, ["aria-checked", "data-state"]);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuRootContentModal.js
var MenuRootContentModal_default = /* @__PURE__ */ defineComponent({
	__name: "MenuRootContentModal",
	props: {
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
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardPropsEmits(props, emits);
		const menuContext = injectMenuContext();
		const { forwardRef, currentElement } = useForwardExpose();
		useHideOthers(currentElement);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuContentImpl_default, mergeProps(unref(forwarded), {
				ref: unref(forwardRef),
				"trap-focus": unref(menuContext).open.value,
				"disable-outside-pointer-events": unref(menuContext).open.value,
				"disable-outside-scroll": true,
				onDismiss: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onOpenChange(false)),
				onFocusOutside: _cache[1] || (_cache[1] = withModifiers(($event) => emits("focusOutside", $event), ["prevent"]))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["trap-focus", "disable-outside-pointer-events"]);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuRootContentNonModal.js
var MenuRootContentNonModal_default = /* @__PURE__ */ defineComponent({
	__name: "MenuRootContentNonModal",
	props: {
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
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		const menuContext = injectMenuContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuContentImpl_default, mergeProps(unref(forwarded), {
				"trap-focus": false,
				"disable-outside-pointer-events": false,
				"disable-outside-scroll": false,
				onDismiss: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onOpenChange(false))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuContent.js
var MenuContent_default = /* @__PURE__ */ defineComponent({
	__name: "MenuContent",
	props: {
		forceMount: {
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
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		const menuContext = injectMenuContext();
		const rootContext = injectMenuRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: __props.forceMount || unref(menuContext).open.value }, {
				default: withCtx(() => [unref(rootContext).modal.value ? (openBlock(), createBlock(MenuRootContentModal_default, normalizeProps(mergeProps({ key: 0 }, {
					..._ctx.$attrs,
					...unref(forwarded)
				})), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16)) : (openBlock(), createBlock(MenuRootContentNonModal_default, normalizeProps(mergeProps({ key: 1 }, {
					..._ctx.$attrs,
					...unref(forwarded)
				})), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16))]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuGroup.js
var [injectMenuGroupContext, provideMenuGroupContext] = /*#__PURE__*/ createContext("MenuGroup");
var MenuGroup_default = /* @__PURE__ */ defineComponent({
	__name: "MenuGroup",
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
		const id = useId$1(void 0, "reka-menu-group");
		provideMenuGroupContext({ id });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ role: "group" }, props, { "aria-labelledby": unref(id) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["aria-labelledby"]);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuLabel.js
var MenuLabel_default = /* @__PURE__ */ defineComponent({
	__name: "MenuLabel",
	props: {
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
		const groupContext = injectMenuGroupContext({ id: "" });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(groupContext).id || void 0 }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuPortal.js
var MenuPortal_default = /* @__PURE__ */ defineComponent({
	__name: "MenuPortal",
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
// node_modules/reka-ui/dist/Menu/MenuSeparator.js
var MenuSeparator_default = /* @__PURE__ */ defineComponent({
	__name: "MenuSeparator",
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
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				role: "separator",
				"aria-orientation": "horizontal"
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuSub.js
var [injectMenuSubContext, provideMenuSubContext] = /*#__PURE__*/ createContext("MenuSub");
var MenuSub_default = /* @__PURE__ */ defineComponent({
	__name: "MenuSub",
	props: { open: {
		type: Boolean,
		required: false,
		default: void 0
	} },
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const open = useVModel(props, "open", __emit, {
			defaultValue: false,
			passive: props.open === void 0
		});
		const parentMenuContext = injectMenuContext();
		const trigger = ref();
		const content = ref();
		watchEffect((cleanupFn) => {
			if (parentMenuContext?.open.value === false) open.value = false;
			cleanupFn(() => open.value = false);
		});
		provideMenuContext({
			open,
			onOpenChange: (value) => {
				open.value = value;
			},
			content,
			onContentChange: (element) => {
				content.value = element;
			}
		});
		provideMenuSubContext({
			triggerId: "",
			contentId: "",
			trigger,
			onTriggerChange: (element) => {
				trigger.value = element;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuSubContent.js
var MenuSubContent_default = /* @__PURE__ */ defineComponent({
	__name: "MenuSubContent",
	props: {
		forceMount: {
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
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
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
			required: false,
			default: true
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
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		const menuContext = injectMenuContext();
		const rootContext = injectMenuRootContext();
		const menuSubContext = injectMenuSubContext();
		const parentContentContext = injectMenuContentContext();
		const { forwardRef, currentElement: subContentElement } = useForwardExpose();
		menuSubContext.contentId ||= useId$1(void 0, "reka-menu-sub-content");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: __props.forceMount || unref(menuContext).open.value }, {
				default: withCtx(() => [createVNode(MenuContentImpl_default, mergeProps(unref(forwarded), {
					id: unref(menuSubContext).contentId,
					ref: unref(forwardRef),
					"aria-labelledby": unref(menuSubContext).triggerId,
					align: "start",
					side: unref(rootContext).dir.value === "rtl" ? "left" : "right",
					"disable-outside-pointer-events": false,
					"disable-outside-scroll": false,
					"trap-focus": false,
					onOpenAutoFocus: _cache[0] || (_cache[0] = withModifiers((event) => {
						if (unref(rootContext).isUsingKeyboardRef.value) unref(subContentElement)?.focus();
					}, ["prevent"])),
					onCloseAutoFocus: _cache[1] || (_cache[1] = withModifiers(() => {}, ["prevent"])),
					onFocusOutside: _cache[2] || (_cache[2] = (event) => {
						if (event.defaultPrevented) return;
						const isMovingToParentContent = unref(parentContentContext).filterElement.value?.contains(event.target);
						if (event.target !== unref(menuSubContext).trigger.value && !isMovingToParentContent) unref(menuContext).onOpenChange(false);
					}),
					onEscapeKeyDown: _cache[3] || (_cache[3] = (event) => {
						unref(rootContext).onClose();
						event.preventDefault();
					}),
					onKeydown: _cache[4] || (_cache[4] = (event) => {
						const isKeyDownInside = event.currentTarget?.contains(event.target);
						const isCloseKey = unref(SUB_CLOSE_KEYS)[unref(rootContext).dir.value].includes(event.key);
						if (isKeyDownInside && isCloseKey) {
							unref(menuContext).onOpenChange(false);
							if (unref(parentContentContext).filterElement.value) {
								unref(parentContentContext).filterElement.value.focus();
								unref(parentContentContext).highlightedElement.value = unref(menuSubContext).trigger.value;
								unref(menuSubContext).trigger.value?.scrollIntoView({ block: "nearest" });
							} else unref(menuSubContext).trigger.value?.focus();
							event.preventDefault();
						}
					})
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"id",
					"aria-labelledby",
					"side"
				])]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
// node_modules/reka-ui/dist/Menu/MenuSubTrigger.js
var MenuSubTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "MenuSubTrigger",
	props: {
		graceDuration: {
			type: Number,
			required: false,
			default: 300
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
	setup(__props) {
		const props = __props;
		const itemProps = reactiveOmit$1(props, "graceDuration");
		const menuContext = injectMenuContext();
		const rootContext = injectMenuRootContext();
		const subContext = injectMenuSubContext();
		const contentContext = injectMenuContentContext();
		watch(menuContext.open, (open) => {
			if (open) contentContext.activeSubmenuContext.value = {
				onOpenChange: menuContext.onOpenChange,
				trigger: subContext.trigger
			};
			else if (contentContext.activeSubmenuContext.value?.trigger.value === subContext.trigger.value) contentContext.activeSubmenuContext.value = void 0;
		});
		const openTimerRef = ref(null);
		subContext.triggerId ||= useId$1(void 0, "reka-menu-sub-trigger");
		function clearOpenTimer() {
			if (openTimerRef.value) (void 0).clearTimeout(openTimerRef.value);
			openTimerRef.value = null;
		}
		function handlePointerMove(event) {
			if (!isMouseEvent(event)) return;
			if (contentContext.onItemEnter(event)) return;
			if (!props.disabled && !menuContext.open.value && !openTimerRef.value) {
				contentContext.onPointerGraceIntentChange(null);
				openTimerRef.value = (void 0).setTimeout(() => {
					menuContext.onOpenChange(true);
					clearOpenTimer();
				}, 100);
			}
		}
		async function handlePointerLeave(event) {
			if (!isMouseEvent(event)) return;
			clearOpenTimer();
			const contentRect = menuContext.content.value?.getBoundingClientRect();
			if (contentRect?.width) {
				const side = menuContext.content.value?.dataset.side;
				const rightSide = side === "right";
				const bleed = rightSide ? -5 : 5;
				const contentNearEdge = contentRect[rightSide ? "left" : "right"];
				const contentFarEdge = contentRect[rightSide ? "right" : "left"];
				contentContext.onPointerGraceIntentChange({
					area: [
						{
							x: event.clientX + bleed,
							y: event.clientY
						},
						{
							x: contentNearEdge,
							y: contentRect.top
						},
						{
							x: contentFarEdge,
							y: contentRect.top
						},
						{
							x: contentFarEdge,
							y: contentRect.bottom
						},
						{
							x: contentNearEdge,
							y: contentRect.bottom
						}
					],
					side
				});
				(void 0).clearTimeout(contentContext.pointerGraceTimerRef.value);
				contentContext.pointerGraceTimerRef.value = (void 0).setTimeout(() => contentContext.onPointerGraceIntentChange(null), props.graceDuration);
			} else {
				if (contentContext.onTriggerLeave(event)) return;
				contentContext.onPointerGraceIntentChange(null);
			}
		}
		async function handleKeyDown(event) {
			const isTypingAhead = contentContext.searchRef.value !== "";
			if (props.disabled || isTypingAhead && event.key === " ") return;
			if (SUB_OPEN_KEYS[rootContext.dir.value].includes(event.key)) {
				menuContext.onOpenChange(true);
				await nextTick();
				menuContext.content.value?.focus();
				event.preventDefault();
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MenuAnchor_default, { "as-child": "" }, {
				default: withCtx(() => [createVNode(MenuItemImpl_default, mergeProps(unref(itemProps), {
					id: unref(subContext).triggerId,
					ref: (vnode) => {
						if (!vnode) return void 0;
						unref(subContext)?.onTriggerChange(vnode?.$el);
					},
					"aria-haspopup": "menu",
					"aria-expanded": unref(menuContext).open.value,
					"aria-controls": unref(subContext).contentId,
					"data-state": unref(getOpenState)(unref(menuContext).open.value),
					onClick: _cache[0] || (_cache[0] = async (event) => {
						if (props.disabled || event.defaultPrevented) return;
						/**
						* We manually focus because iOS Safari doesn't always focus on click (e.g. buttons)
						* and we rely heavily on `onFocusOutside` for submenus to close when switching
						* between separate submenus.
						*/
						event.currentTarget?.focus();
						if (!unref(menuContext).open.value) unref(menuContext).onOpenChange(true);
					}),
					onPointermove: handlePointerMove,
					onPointerleave: handlePointerLeave,
					onKeydown: handleKeyDown
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"id",
					"aria-expanded",
					"aria-controls",
					"data-state"
				])]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuArrow.js
var DropdownMenuArrow_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuArrow",
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
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuArrow_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuCheckboxItem.js
var DropdownMenuCheckboxItem_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuCheckboxItem",
	props: {
		modelValue: {
			type: [Boolean, String],
			required: false
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
	emits: ["select", "update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emitsAsProps = useEmitAsProps(__emit);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuCheckboxItem_default), normalizeProps(guardReactiveProps({
				...props,
				...unref(emitsAsProps)
			})), {
				default: withCtx((slotProps) => [renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuRoot.js
var [injectDropdownMenuRootContext, provideDropdownMenuRootContext] = /*#__PURE__*/ createContext("DropdownMenuRoot");
var DropdownMenuRoot_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		dir: {
			type: String,
			required: false
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		useForwardExpose();
		const open = useVModel(props, "open", emit, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		const triggerElement = ref();
		const { modal, dir: propDir } = toRefs(props);
		const dir = useDirection(propDir);
		provideDropdownMenuRootContext({
			open,
			onOpenChange: (value) => {
				open.value = value;
			},
			onOpenToggle: () => {
				open.value = !open.value;
			},
			triggerId: "",
			triggerElement,
			contentId: "",
			modal,
			dir
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuRoot_default), {
				open: unref(open),
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(open) ? open.value = $event : null),
				dir: unref(dir),
				modal: unref(modal)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
				_: 3
			}, 8, [
				"open",
				"dir",
				"modal"
			]);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuContent.js
var DropdownMenuContent_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DropdownMenuContent",
	props: {
		forceMount: {
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
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		useForwardExpose();
		const rootContext = injectDropdownMenuRootContext();
		const hasInteractedOutsideRef = ref(false);
		function handleCloseAutoFocus(event) {
			if (event.defaultPrevented) return;
			if (!hasInteractedOutsideRef.value) setTimeout(() => {
				rootContext.triggerElement.value?.focus();
			}, 0);
			hasInteractedOutsideRef.value = false;
			event.preventDefault();
		}
		rootContext.contentId ||= useId$1(void 0, "reka-dropdown-menu-content");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuContent_default), mergeProps({
				id: unref(rootContext).contentId,
				"aria-labelledby": unref(rootContext)?.triggerId,
				style: {
					"--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
					"--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
					"--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
					"--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
					"--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
				}
			}, {
				...unref(forwarded),
				...unref(omitEntryFocusListener)(_ctx.$attrs)
			}, {
				onCloseAutoFocus: handleCloseAutoFocus,
				onInteractOutside: _cache[0] || (_cache[0] = (event) => {
					if (event.defaultPrevented) return;
					const originalEvent = event.detail.originalEvent;
					const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
					const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
					if (!unref(rootContext).modal.value || isRightClick) hasInteractedOutsideRef.value = true;
					if (unref(rootContext).triggerElement.value?.contains(event.target)) event.preventDefault();
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id", "aria-labelledby"]);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuFilter.js
var DropdownMenuFilter_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuFilter",
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
		injectMenuRootContext();
		const contentContext = injectMenuContentContext();
		injectMenuSubContext(null);
		watch(modelValue, (v) => {
			contentContext.searchRef.value = v ?? "";
		}, { immediate: true });
		const { primitiveElement} = usePrimitiveElement();
		const disabled = computed(() => props.disabled || false);
		const activedescendant = ref();
		watchSyncEffect(() => activedescendant.value = contentContext.highlightedElement.value?.id);
		const { isComposing, shouldDeferInput, handleCompositionStart, handleCompositionUpdate, handleCompositionEnd } = useComposing((event) => {
			const el = event.target;
			if (el) {
				modelValue.value = el.value;
				contentContext.searchRef.value = el.value;
			}
		});
		function handleInput(event) {
			if (disabled.value) return;
			if (shouldDeferInput.value) return;
			const target = event.target;
			modelValue.value = target.value;
			contentContext.searchRef.value = target.value;
		}
		function handleKeyDown(event) {
			if (disabled.value) return;
			if (isComposing.value) {
				event.stopPropagation();
				return;
			}
			if ([
				"ArrowDown",
				"ArrowUp",
				"Home",
				"End"
			].includes(event.key)) {
				event.preventDefault();
				contentContext.onKeydownNavigation(event);
			} else if (event.key === "Enter") {
				event.preventDefault();
				contentContext.onKeydownEnter(event);
			} else if (event.key === "Escape" && modelValue.value) {
				event.stopPropagation();
				modelValue.value = "";
				contentContext.searchRef.value = "";
			}
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
				"aria-disabled": disabled.value ? true : void 0,
				"aria-activedescendant": activedescendant.value,
				type: "text",
				role: "searchbox",
				onInput: handleInput,
				onKeydown: handleKeyDown,
				onCompositionstart: unref(handleCompositionStart),
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
				"onCompositionstart",
				"onCompositionupdate",
				"onCompositionend"
			]);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuGroup.js
var DropdownMenuGroup_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuGroup",
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
			return openBlock(), createBlock(unref(MenuGroup_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuItem.js
var DropdownMenuItem_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuItem",
	props: {
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
		const emitsAsProps = useEmitAsProps(__emit);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuItem_default), normalizeProps(guardReactiveProps({
				...props,
				...unref(emitsAsProps)
			})), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuItemIndicator.js
var DropdownMenuItemIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuItemIndicator",
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
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuItemIndicator_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuLabel.js
var DropdownMenuLabel_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuLabel",
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
			return openBlock(), createBlock(unref(MenuLabel_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuPortal.js
var DropdownMenuPortal_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuPortal",
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
			return openBlock(), createBlock(unref(MenuPortal_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuSeparator.js
var DropdownMenuSeparator_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSeparator",
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
			return openBlock(), createBlock(unref(MenuSeparator_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuSub.js
var DropdownMenuSub_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSub",
	props: {
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false,
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const open = useVModel(props, "open", __emit, {
			passive: props.open === void 0,
			defaultValue: props.defaultOpen ?? false
		});
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuSub_default), {
				open: unref(open),
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(open) ? open.value = $event : null)
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
				_: 3
			}, 8, ["open"]);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuSubContent.js
var DropdownMenuSubContent_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSubContent",
	props: {
		forceMount: {
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
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
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
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"entryFocus",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const forwarded = useForwardPropsEmits(__props, __emit);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuSubContent_default), mergeProps(unref(forwarded), { style: {
				"--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
				"--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
				"--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
			} }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuSubTrigger.js
var DropdownMenuSubTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuSubTrigger",
	props: {
		graceDuration: {
			type: Number,
			required: false
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
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuSubTrigger_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/DropdownMenu/DropdownMenuTrigger.js
var DropdownMenuTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "DropdownMenuTrigger",
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
		const rootContext = injectDropdownMenuRootContext();
		const { forwardRef} = useForwardExpose();
		rootContext.triggerId ||= useId$1(void 0, "reka-dropdown-menu-trigger");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(MenuAnchor_default), { "as-child": "" }, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					id: unref(rootContext).triggerId,
					ref: unref(forwardRef),
					type: __props.as === "button" ? "button" : void 0,
					"as-child": props.asChild,
					as: __props.as,
					"aria-haspopup": "menu",
					"aria-expanded": unref(rootContext).open.value,
					"aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
					"data-disabled": __props.disabled ? "" : void 0,
					disabled: __props.disabled,
					"data-state": unref(rootContext).open.value ? "open" : "closed",
					onClick: _cache[0] || (_cache[0] = async (event) => {
						if (event.defaultPrevented) return;
						if (!__props.disabled && event.button === 0 && event.ctrlKey === false) {
							unref(rootContext)?.onOpenToggle();
							await nextTick();
							if (unref(rootContext).open.value) event.preventDefault();
						}
					}),
					onKeydown: _cache[1] || (_cache[1] = withKeys((event) => {
						if (__props.disabled || event.defaultPrevented) return;
						if (["Enter", " "].includes(event.key)) unref(rootContext).onOpenToggle();
						if (event.key === "ArrowDown") unref(rootContext).onOpenChange(true);
						if ([
							"Enter",
							" ",
							"ArrowDown"
						].includes(event.key)) event.preventDefault();
					}, [
						"enter",
						"space",
						"arrow-down"
					]))
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"id",
					"type",
					"as-child",
					"as",
					"aria-expanded",
					"aria-controls",
					"data-disabled",
					"disabled",
					"data-state"
				])]),
				_: 3
			});
		};
	}
});
// node_modules/@nuxt/ui/dist/runtime/composables/useFilter.js
function useFilter() {
	const { contains, startsWith } = useFilter$1({ sensitivity: "base" });
	function score(value, searchTerm) {
		if (!contains(value, searchTerm)) return null;
		if (contains(searchTerm, value)) return 0;
		if (startsWith(value, searchTerm)) return 1;
		return 2;
	}
	function scoreItem(item, searchTerm, fields) {
		if (typeof item !== "object" || item === null) return score(String(item), searchTerm);
		let bestScore = null;
		for (const field of fields) {
			const value = get(item, field);
			if (value == null) continue;
			const values = Array.isArray(value) ? value.map(String) : [String(value)];
			for (const v of values) {
				const s = score(v, searchTerm);
				if (s !== null && (bestScore === null || s < bestScore)) bestScore = s;
				if (bestScore === 0) return 0;
			}
		}
		return bestScore;
	}
	function filter(items, searchTerm, fields) {
		if (!searchTerm) return items;
		const scored = [];
		for (const item of items) {
			const s = scoreItem(item, searchTerm, fields);
			if (s !== null) scored.push({
				item,
				score: s
			});
		}
		scored.sort((a, b) => a.score - b.score);
		return scored.map(({ item }) => item);
	}
	function filterGroups(groups, searchTerm, options) {
		if (!searchTerm) return groups;
		return groups.map((group) => {
			const result = [];
			for (const item of group) {
				if (item === void 0 || item === null) continue;
				if (options.isStructural?.(item)) {
					result.push({
						item,
						score: -1
					});
					continue;
				}
				const s = scoreItem(item, searchTerm, options.fields);
				if (s !== null) result.push({
					item,
					score: s
				});
			}
			let start = 0;
			for (let i = 0; i <= result.length; i++) if (i === result.length || result[i].score === -1) {
				result.splice(start, i - start, ...result.slice(start, i).sort((a, b) => a.score - b.score));
				start = i + 1;
			}
			return result.map(({ item }) => item);
		}).filter((group) => group.some((item) => !options.isStructural?.(item)));
	}
	return {
		score,
		scoreItem,
		filter,
		filterGroups
	};
}
// node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue
var _sfc_main$2 = {
	__name: "UDropdownMenuContent",
	__ssrInlineRender: true,
	props: {
		items: {
			type: null,
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true
		},
		sub: {
			type: Boolean,
			required: false
		},
		labelKey: {
			type: null,
			required: true
		},
		descriptionKey: {
			type: null,
			required: true
		},
		checkedIcon: {
			type: null,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		},
		externalIcon: {
			type: [Boolean, String],
			required: false,
			skipCheck: true
		},
		size: {
			type: null,
			required: false
		},
		filter: {
			type: [Boolean, Object],
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
		searchTerm: {
			type: String,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: true
		},
		uiOverride: {
			type: Object,
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
		}
	},
	emits: [
		"update:searchTerm",
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const DropdownMenu = {
			Portal: DropdownMenuPortal_default,
			Content: DropdownMenuContent_default,
			Item: DropdownMenuItem_default,
			Group: DropdownMenuGroup_default,
			Separator: DropdownMenuSeparator_default,
			CheckboxItem: DropdownMenuCheckboxItem_default,
			ItemIndicator: DropdownMenuItemIndicator_default,
			Label: DropdownMenuLabel_default,
			Sub: DropdownMenuSub_default,
			SubContent: DropdownMenuSubContent_default,
			SubTrigger: DropdownMenuSubTrigger_default,
			Filter: DropdownMenuFilter_default
		};
		const props = __props;
		const emits = __emit;
		const slots = useSlots();
		const { t, dir } = useLocale();
		const appConfig = useAppConfig();
		const { filterGroups } = useFilter();
		const _searchTerm = ref("");
		const searchTerm = computed({
			get: () => props.searchTerm ?? _searchTerm.value,
			set: (value) => {
				_searchTerm.value = value;
				emits("update:searchTerm", value);
			}
		});
		const inputProps = toRef(() => defu(props.filter, {
			placeholder: t("dropdownMenu.search"),
			variant: "none"
		}));
		const portalProps = usePortal(toRef(() => props.portal));
		const contentProps = useForwardPropsEmits(reactiveOmit(props, "sub", "items", "portal", "labelKey", "descriptionKey", "checkedIcon", "loadingIcon", "externalIcon", "size", "filter", "filterFields", "ignoreFilter", "searchTerm", "class", "ui", "uiOverride"), emits);
		const getProxySlots = () => omit(slots, ["default"]);
		const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate();
		const childrenIcon = computed(() => dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight);
		const groups = computed(() => {
			if (!props.items?.length) return [];
			return isArrayOfArray(props.items) ? props.items : [props.items];
		});
		const isStructuralItem = (item) => !!item.type && ["label", "separator"].includes(item.type);
		const filteredGroups = computed(() => {
			if (!props.filter || props.ignoreFilter || !searchTerm.value) return groups.value;
			const fields = Array.isArray(props.filterFields) && props.filterFields.length ? props.filterFields : [props.labelKey];
			return filterGroups(groups.value, searchTerm.value, {
				fields,
				isStructural: isStructuralItem
			});
		});
		const hasFilteredItems = computed(() => filteredGroups.value.some((group) => group.some((item) => !isStructuralItem(item))));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(DefineItemTemplate), null, {
				default: withCtx(({ item, active = false, index }, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, item.slot || "item", {
						item,
						active,
						index,
						ui: __props.ui
					}, () => {
						ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
							item,
							active,
							index,
							ui: __props.ui
						}, () => {
							if (item.loading) _push(ssrRenderComponent(_sfc_main$5, {
								name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
								"data-slot": "itemLeadingIcon",
								class: __props.ui.itemLeadingIcon({
									class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon],
									color: item?.color,
									loading: true
								})
							}, null, _parent, _scopeId));
							else if (item.icon) _push(ssrRenderComponent(_sfc_main$5, {
								name: item.icon,
								"data-slot": "itemLeadingIcon",
								class: __props.ui.itemLeadingIcon({
									class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon],
									color: item?.color,
									active
								})
							}, null, _parent, _scopeId));
							else if (item.avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: item.ui?.itemLeadingAvatarSize || __props.uiOverride?.itemLeadingAvatarSize || __props.ui.itemLeadingAvatarSize() }, item.avatar, {
								"data-slot": "itemLeadingAvatar",
								class: __props.ui.itemLeadingAvatar({
									class: [__props.uiOverride?.itemLeadingAvatar, item.ui?.itemLeadingAvatar],
									active
								})
							}), null, _parent, _scopeId));
							else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						if (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] || unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"]) {
							_push(`<span data-slot="itemWrapper" class="${ssrRenderClass(__props.ui.itemWrapper({ class: [__props.uiOverride?.itemWrapper, item.ui?.itemWrapper] }))}"${_scopeId}><span data-slot="itemLabel" class="${ssrRenderClass(__props.ui.itemLabel({
								class: [__props.uiOverride?.itemLabel, item.ui?.itemLabel],
								active
							}))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
								item,
								active,
								index
							}, () => {
								_push(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
							}, _push, _parent, _scopeId);
							if (item.target === "_blank" && __props.externalIcon !== false) _push(ssrRenderComponent(_sfc_main$5, {
								name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
								"data-slot": "itemLabelExternalIcon",
								class: __props.ui.itemLabelExternalIcon({
									class: [__props.uiOverride?.itemLabelExternalIcon, item.ui?.itemLabelExternalIcon],
									color: item?.color,
									active
								})
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</span>`);
							if (unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"]) {
								_push(`<span data-slot="itemDescription" class="${ssrRenderClass(__props.ui.itemDescription({ class: [__props.uiOverride?.itemDescription, item.ui?.itemDescription] }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "item-description", {
									item,
									active,
									index
								}, () => {
									_push(`${ssrInterpolate(unref(get)(item, props.descriptionKey))}`);
								}, _push, _parent, _scopeId);
								_push(`</span>`);
							} else _push(`<!---->`);
							_push(`</span>`);
						} else _push(`<!---->`);
						_push(`<span data-slot="itemTrailing" class="${ssrRenderClass(__props.ui.itemTrailing({ class: [__props.uiOverride?.itemTrailing, item.ui?.itemTrailing] }))}"${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
							item,
							active,
							index,
							ui: __props.ui
						}, () => {
							if (item.children?.length) _push(ssrRenderComponent(_sfc_main$5, {
								name: childrenIcon.value,
								"data-slot": "itemTrailingIcon",
								class: __props.ui.itemTrailingIcon({
									class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon],
									color: item?.color,
									active
								})
							}, null, _parent, _scopeId));
							else if (item.kbds?.length) {
								_push(`<span data-slot="itemTrailingKbds" class="${ssrRenderClass(__props.ui.itemTrailingKbds({ class: [__props.uiOverride?.itemTrailingKbds, item.ui?.itemTrailingKbds] }))}"${_scopeId}><!--[-->`);
								ssrRenderList$2(item.kbds, (kbd, kbdIndex) => {
									_push(ssrRenderComponent(_sfc_main$4, mergeProps({
										key: kbdIndex,
										size: item.ui?.itemTrailingKbdsSize || __props.uiOverride?.itemTrailingKbdsSize || __props.ui.itemTrailingKbdsSize()
									}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent, _scopeId));
								});
								_push(`<!--]--></span>`);
							} else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(ssrRenderComponent(DropdownMenu.ItemIndicator, { "as-child": "" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_sfc_main$5, {
									name: __props.checkedIcon || unref(appConfig).ui.icons.check,
									"data-slot": "itemTrailingIcon",
									class: __props.ui.itemTrailingIcon({
										class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon],
										color: item?.color
									})
								}, null, _parent, _scopeId));
								else return [createVNode(_sfc_main$5, {
									name: __props.checkedIcon || unref(appConfig).ui.icons.check,
									"data-slot": "itemTrailingIcon",
									class: __props.ui.itemTrailingIcon({
										class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon],
										color: item?.color
									})
								}, null, 8, ["name", "class"])];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(`</span>`);
					}, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, item.slot || "item", {
						item,
						active,
						index,
						ui: __props.ui
					}, () => [
						renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
							item,
							active,
							index,
							ui: __props.ui
						}, () => [item.loading ? (openBlock(), createBlock(_sfc_main$5, {
							key: 0,
							name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
							"data-slot": "itemLeadingIcon",
							class: __props.ui.itemLeadingIcon({
								class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon],
								color: item?.color,
								loading: true
							})
						}, null, 8, ["name", "class"])) : item.icon ? (openBlock(), createBlock(_sfc_main$5, {
							key: 1,
							name: item.icon,
							"data-slot": "itemLeadingIcon",
							class: __props.ui.itemLeadingIcon({
								class: [__props.uiOverride?.itemLeadingIcon, item.ui?.itemLeadingIcon],
								color: item?.color,
								active
							})
						}, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
							key: 2,
							size: item.ui?.itemLeadingAvatarSize || __props.uiOverride?.itemLeadingAvatarSize || __props.ui.itemLeadingAvatarSize()
						}, item.avatar, {
							"data-slot": "itemLeadingAvatar",
							class: __props.ui.itemLeadingAvatar({
								class: [__props.uiOverride?.itemLeadingAvatar, item.ui?.itemLeadingAvatar],
								active
							})
						}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
						unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] || unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"] ? (openBlock(), createBlock("span", {
							key: 0,
							"data-slot": "itemWrapper",
							class: __props.ui.itemWrapper({ class: [__props.uiOverride?.itemWrapper, item.ui?.itemWrapper] })
						}, [createVNode("span", {
							"data-slot": "itemLabel",
							class: __props.ui.itemLabel({
								class: [__props.uiOverride?.itemLabel, item.ui?.itemLabel],
								active
							})
						}, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
							item,
							active,
							index
						}, () => [createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)]), item.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5, {
							key: 0,
							name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
							"data-slot": "itemLabelExternalIcon",
							class: __props.ui.itemLabelExternalIcon({
								class: [__props.uiOverride?.itemLabelExternalIcon, item.ui?.itemLabelExternalIcon],
								color: item?.color,
								active
							})
						}, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2), unref(get)(item, props.descriptionKey) || !!slots[item.slot ? `${item.slot}-description` : "item-description"] ? (openBlock(), createBlock("span", {
							key: 0,
							"data-slot": "itemDescription",
							class: __props.ui.itemDescription({ class: [__props.uiOverride?.itemDescription, item.ui?.itemDescription] })
						}, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "item-description", {
							item,
							active,
							index
						}, () => [createTextVNode(toDisplayString(unref(get)(item, props.descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
						createVNode("span", {
							"data-slot": "itemTrailing",
							class: __props.ui.itemTrailing({ class: [__props.uiOverride?.itemTrailing, item.ui?.itemTrailing] })
						}, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
							item,
							active,
							index,
							ui: __props.ui
						}, () => [item.children?.length ? (openBlock(), createBlock(_sfc_main$5, {
							key: 0,
							name: childrenIcon.value,
							"data-slot": "itemTrailingIcon",
							class: __props.ui.itemTrailingIcon({
								class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon],
								color: item?.color,
								active
							})
						}, null, 8, ["name", "class"])) : item.kbds?.length ? (openBlock(), createBlock("span", {
							key: 1,
							"data-slot": "itemTrailingKbds",
							class: __props.ui.itemTrailingKbds({ class: [__props.uiOverride?.itemTrailingKbds, item.ui?.itemTrailingKbds] })
						}, [(openBlock(true), createBlock(Fragment, null, renderList$2(item.kbds, (kbd, kbdIndex) => {
							return openBlock(), createBlock(_sfc_main$4, mergeProps({
								key: kbdIndex,
								size: item.ui?.itemTrailingKbdsSize || __props.uiOverride?.itemTrailingKbdsSize || __props.ui.itemTrailingKbdsSize()
							}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
						}), 128))], 2)) : createCommentVNode("", true)]), createVNode(DropdownMenu.ItemIndicator, { "as-child": "" }, {
							default: withCtx(() => [createVNode(_sfc_main$5, {
								name: __props.checkedIcon || unref(appConfig).ui.icons.check,
								"data-slot": "itemTrailingIcon",
								class: __props.ui.itemTrailingIcon({
									class: [__props.uiOverride?.itemTrailingIcon, item.ui?.itemTrailingIcon],
									color: item?.color
								})
							}, null, 8, ["name", "class"])]),
							_: 2
						}, 1024)], 2)
					])];
				}),
				_: 3
			}, _parent));
			_push(ssrRenderComponent(DropdownMenu.Portal, unref(portalProps), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) renderVNode(_push, createVNode(resolveDynamicComponent(__props.sub ? DropdownMenu.SubContent : DropdownMenu.Content), mergeProps({
								"data-slot": "content",
								class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
							}, unref(contentProps)), {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										if (!!__props.filter) _push(ssrRenderComponent(DropdownMenu.Filter, {
											modelValue: searchTerm.value,
											"onUpdate:modelValue": ($event) => searchTerm.value = $event,
											"as-child": ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(_sfc_main$6, mergeProps({
													autofocus: "",
													autocomplete: "off",
													size: __props.size
												}, inputProps.value, {
													"data-slot": "input",
													class: __props.ui.input({ class: __props.uiOverride?.input }),
													onChange: () => {}
												}), null, _parent, _scopeId));
												else return [createVNode(_sfc_main$6, mergeProps({
													autofocus: "",
													autocomplete: "off",
													size: __props.size
												}, inputProps.value, {
													"data-slot": "input",
													class: __props.ui.input({ class: __props.uiOverride?.input }),
													onChange: withModifiers(() => {}, ["stop"])
												}), null, 16, [
													"size",
													"class",
													"onChange"
												])];
											}),
											_: 1
										}, _parent, _scopeId));
										else _push(`<!---->`);
										ssrRenderSlot(_ctx.$slots, "content-top", { sub: __props.sub ?? false }, null, _push, _parent, _scopeId);
										if (!searchTerm.value || hasFilteredItems.value) {
											_push(`<div role="presentation" data-slot="viewport" class="${ssrRenderClass(__props.ui.viewport({ class: __props.uiOverride?.viewport }))}"${_scopeId}><!--[-->`);
											ssrRenderList$2(filteredGroups.value, (group, groupIndex) => {
												_push(ssrRenderComponent(DropdownMenu.Group, {
													key: `group-${groupIndex}`,
													"data-slot": "group",
													class: __props.ui.group({ class: __props.uiOverride?.group })
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(`<!--[-->`);
															ssrRenderList$2(group, (item, index) => {
																_push(`<!--[-->`);
																if (item.type === "label") _push(ssrRenderComponent(DropdownMenu.Label, {
																	"data-slot": "label",
																	class: __props.ui.label({ class: [
																		__props.uiOverride?.label,
																		item.ui?.label,
																		item.class
																	] })
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(ReuseItemTemplate), {
																			item,
																			index
																		}, null, _parent, _scopeId));
																		else return [createVNode(unref(ReuseItemTemplate), {
																			item,
																			index
																		}, null, 8, ["item", "index"])];
																	}),
																	_: 2
																}, _parent, _scopeId));
																else if (item.type === "separator") _push(ssrRenderComponent(DropdownMenu.Separator, {
																	"data-slot": "separator",
																	class: __props.ui.separator({ class: [
																		__props.uiOverride?.separator,
																		item.ui?.separator,
																		item.class
																	] })
																}, null, _parent, _scopeId));
																else if (item?.children?.length) _push(ssrRenderComponent(DropdownMenu.Sub, {
																	open: item.open,
																	"default-open": item.defaultOpen
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) {
																			_push(ssrRenderComponent(DropdownMenu.SubTrigger, {
																				as: "button",
																				type: "button",
																				disabled: item.disabled,
																				"text-value": unref(get)(item, props.labelKey),
																				"data-slot": "item",
																				class: __props.ui.item({
																					class: [
																						__props.uiOverride?.item,
																						item.ui?.item,
																						item.class
																					],
																					color: item?.color
																				})
																			}, {
																				default: withCtx((_, _push, _parent, _scopeId) => {
																					if (_push) _push(ssrRenderComponent(unref(ReuseItemTemplate), {
																						item,
																						index
																					}, null, _parent, _scopeId));
																					else return [createVNode(unref(ReuseItemTemplate), {
																						item,
																						index
																					}, null, 8, ["item", "index"])];
																				}),
																				_: 2
																			}, _parent, _scopeId));
																			_push(ssrRenderComponent(_sfc_main$2, mergeProps({
																				sub: "",
																				class: item.ui?.content,
																				ui: __props.ui,
																				"ui-override": __props.uiOverride,
																				portal: __props.portal,
																				items: item.children,
																				align: "start",
																				"align-offset": -4,
																				"side-offset": 3,
																				"label-key": __props.labelKey,
																				"description-key": __props.descriptionKey,
																				"checked-icon": __props.checkedIcon,
																				"loading-icon": __props.loadingIcon,
																				"external-icon": __props.externalIcon,
																				size: __props.size,
																				filter: item.filter,
																				"filter-fields": item.filterFields || __props.filterFields,
																				"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
																			}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList$2(getProxySlots(), (_, name) => {
																				return {
																					name,
																					fn: withCtx((slotData, _push, _parent, _scopeId) => {
																						if (_push) ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData), null, _push, _parent, _scopeId);
																						else return [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))];
																					})
																				};
																			})]), _parent, _scopeId));
																		} else return [createVNode(DropdownMenu.SubTrigger, {
																			as: "button",
																			type: "button",
																			disabled: item.disabled,
																			"text-value": unref(get)(item, props.labelKey),
																			"data-slot": "item",
																			class: __props.ui.item({
																				class: [
																					__props.uiOverride?.item,
																					item.ui?.item,
																					item.class
																				],
																				color: item?.color
																			})
																		}, {
																			default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																				item,
																				index
																			}, null, 8, ["item", "index"])]),
																			_: 2
																		}, 1032, [
																			"disabled",
																			"text-value",
																			"class"
																		]), createVNode(_sfc_main$2, mergeProps({
																			sub: "",
																			class: item.ui?.content,
																			ui: __props.ui,
																			"ui-override": __props.uiOverride,
																			portal: __props.portal,
																			items: item.children,
																			align: "start",
																			"align-offset": -4,
																			"side-offset": 3,
																			"label-key": __props.labelKey,
																			"description-key": __props.descriptionKey,
																			"checked-icon": __props.checkedIcon,
																			"loading-icon": __props.loadingIcon,
																			"external-icon": __props.externalIcon,
																			size: __props.size,
																			filter: item.filter,
																			"filter-fields": item.filterFields || __props.filterFields,
																			"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
																		}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList$2(getProxySlots(), (_, name) => {
																			return {
																				name,
																				fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))])
																			};
																		})]), 1040, [
																			"class",
																			"ui",
																			"ui-override",
																			"portal",
																			"items",
																			"label-key",
																			"description-key",
																			"checked-icon",
																			"loading-icon",
																			"external-icon",
																			"size",
																			"filter",
																			"filter-fields",
																			"ignore-filter"
																		])];
																	}),
																	_: 2
																}, _parent, _scopeId));
																else if (item.type === "checkbox") _push(ssrRenderComponent(DropdownMenu.CheckboxItem, {
																	"model-value": item.checked,
																	disabled: item.disabled,
																	"text-value": unref(get)(item, props.labelKey),
																	"data-slot": "item",
																	class: __props.ui.item({
																		class: [
																			__props.uiOverride?.item,
																			item.ui?.item,
																			item.class
																		],
																		color: item?.color
																	}),
																	"onUpdate:modelValue": item.onUpdateChecked,
																	onSelect: item.onSelect
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(ReuseItemTemplate), {
																			item,
																			index
																		}, null, _parent, _scopeId));
																		else return [createVNode(unref(ReuseItemTemplate), {
																			item,
																			index
																		}, null, 8, ["item", "index"])];
																	}),
																	_: 2
																}, _parent, _scopeId));
																else _push(ssrRenderComponent(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(item), { custom: "" }), {
																	default: withCtx(({ active, ...slotProps }, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(DropdownMenu.Item, {
																			"as-child": "",
																			disabled: item.disabled,
																			"text-value": unref(get)(item, props.labelKey),
																			onSelect: item.onSelect
																		}, {
																			default: withCtx((_, _push, _parent, _scopeId) => {
																				if (_push) _push(ssrRenderComponent(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
																					"data-slot": "item",
																					class: __props.ui.item({
																						class: [
																							__props.uiOverride?.item,
																							item.ui?.item,
																							item.class
																						],
																						color: item?.color,
																						active
																					})
																				}), {
																					default: withCtx((_, _push, _parent, _scopeId) => {
																						if (_push) _push(ssrRenderComponent(unref(ReuseItemTemplate), {
																							item,
																							active,
																							index
																						}, null, _parent, _scopeId));
																						else return [createVNode(unref(ReuseItemTemplate), {
																							item,
																							active,
																							index
																						}, null, 8, [
																							"item",
																							"active",
																							"index"
																						])];
																					}),
																					_: 2
																				}, _parent, _scopeId));
																				else return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
																					"data-slot": "item",
																					class: __props.ui.item({
																						class: [
																							__props.uiOverride?.item,
																							item.ui?.item,
																							item.class
																						],
																						color: item?.color,
																						active
																					})
																				}), {
																					default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																						item,
																						active,
																						index
																					}, null, 8, [
																						"item",
																						"active",
																						"index"
																					])]),
																					_: 2
																				}, 1040, ["class"])];
																			}),
																			_: 2
																		}, _parent, _scopeId));
																		else return [createVNode(DropdownMenu.Item, {
																			"as-child": "",
																			disabled: item.disabled,
																			"text-value": unref(get)(item, props.labelKey),
																			onSelect: item.onSelect
																		}, {
																			default: withCtx(() => [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
																				"data-slot": "item",
																				class: __props.ui.item({
																					class: [
																						__props.uiOverride?.item,
																						item.ui?.item,
																						item.class
																					],
																					color: item?.color,
																					active
																				})
																			}), {
																				default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																					item,
																					active,
																					index
																				}, null, 8, [
																					"item",
																					"active",
																					"index"
																				])]),
																				_: 2
																			}, 1040, ["class"])]),
																			_: 2
																		}, 1032, [
																			"disabled",
																			"text-value",
																			"onSelect"
																		])];
																	}),
																	_: 2
																}, _parent, _scopeId));
																_push(`<!--]-->`);
															});
															_push(`<!--]-->`);
														} else return [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
															return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [item.type === "label" ? (openBlock(), createBlock(DropdownMenu.Label, {
																key: 0,
																"data-slot": "label",
																class: __props.ui.label({ class: [
																	__props.uiOverride?.label,
																	item.ui?.label,
																	item.class
																] })
															}, {
																default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																	item,
																	index
																}, null, 8, ["item", "index"])]),
																_: 2
															}, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(DropdownMenu.Separator, {
																key: 1,
																"data-slot": "separator",
																class: __props.ui.separator({ class: [
																	__props.uiOverride?.separator,
																	item.ui?.separator,
																	item.class
																] })
															}, null, 8, ["class"])) : item?.children?.length ? (openBlock(), createBlock(DropdownMenu.Sub, {
																key: 2,
																open: item.open,
																"default-open": item.defaultOpen
															}, {
																default: withCtx(() => [createVNode(DropdownMenu.SubTrigger, {
																	as: "button",
																	type: "button",
																	disabled: item.disabled,
																	"text-value": unref(get)(item, props.labelKey),
																	"data-slot": "item",
																	class: __props.ui.item({
																		class: [
																			__props.uiOverride?.item,
																			item.ui?.item,
																			item.class
																		],
																		color: item?.color
																	})
																}, {
																	default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																		item,
																		index
																	}, null, 8, ["item", "index"])]),
																	_: 2
																}, 1032, [
																	"disabled",
																	"text-value",
																	"class"
																]), createVNode(_sfc_main$2, mergeProps({
																	sub: "",
																	class: item.ui?.content,
																	ui: __props.ui,
																	"ui-override": __props.uiOverride,
																	portal: __props.portal,
																	items: item.children,
																	align: "start",
																	"align-offset": -4,
																	"side-offset": 3,
																	"label-key": __props.labelKey,
																	"description-key": __props.descriptionKey,
																	"checked-icon": __props.checkedIcon,
																	"loading-icon": __props.loadingIcon,
																	"external-icon": __props.externalIcon,
																	size: __props.size,
																	filter: item.filter,
																	"filter-fields": item.filterFields || __props.filterFields,
																	"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
																}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList$2(getProxySlots(), (_, name) => {
																	return {
																		name,
																		fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))])
																	};
																})]), 1040, [
																	"class",
																	"ui",
																	"ui-override",
																	"portal",
																	"items",
																	"label-key",
																	"description-key",
																	"checked-icon",
																	"loading-icon",
																	"external-icon",
																	"size",
																	"filter",
																	"filter-fields",
																	"ignore-filter"
																])]),
																_: 2
															}, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(DropdownMenu.CheckboxItem, {
																key: 3,
																"model-value": item.checked,
																disabled: item.disabled,
																"text-value": unref(get)(item, props.labelKey),
																"data-slot": "item",
																class: __props.ui.item({
																	class: [
																		__props.uiOverride?.item,
																		item.ui?.item,
																		item.class
																	],
																	color: item?.color
																}),
																"onUpdate:modelValue": item.onUpdateChecked,
																onSelect: item.onSelect
															}, {
																default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																	item,
																	index
																}, null, 8, ["item", "index"])]),
																_: 2
															}, 1032, [
																"model-value",
																"disabled",
																"text-value",
																"class",
																"onUpdate:modelValue",
																"onSelect"
															])) : (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
																key: 4,
																ref_for: true
															}, unref(pickLinkProps)(item), { custom: "" }), {
																default: withCtx(({ active, ...slotProps }) => [createVNode(DropdownMenu.Item, {
																	"as-child": "",
																	disabled: item.disabled,
																	"text-value": unref(get)(item, props.labelKey),
																	onSelect: item.onSelect
																}, {
																	default: withCtx(() => [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
																		"data-slot": "item",
																		class: __props.ui.item({
																			class: [
																				__props.uiOverride?.item,
																				item.ui?.item,
																				item.class
																			],
																			color: item?.color,
																			active
																		})
																	}), {
																		default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																			item,
																			active,
																			index
																		}, null, 8, [
																			"item",
																			"active",
																			"index"
																		])]),
																		_: 2
																	}, 1040, ["class"])]),
																	_: 2
																}, 1032, [
																	"disabled",
																	"text-value",
																	"onSelect"
																])]),
																_: 2
															}, 1040))], 64);
														}), 128))];
													}),
													_: 2
												}, _parent, _scopeId));
											});
											_push(`<!--]--></div>`);
										} else _push(`<!---->`);
										if (searchTerm.value && !hasFilteredItems.value) {
											_push(`<div data-slot="empty" class="${ssrRenderClass(__props.ui.empty({ class: __props.uiOverride?.empty }))}"${_scopeId}>`);
											ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
												_push(`${ssrInterpolate(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value }))}`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
										ssrRenderSlot(_ctx.$slots, "content-bottom", { sub: __props.sub ?? false }, null, _push, _parent, _scopeId);
									} else return [
										!!__props.filter ? (openBlock(), createBlock(DropdownMenu.Filter, {
											key: 0,
											modelValue: searchTerm.value,
											"onUpdate:modelValue": ($event) => searchTerm.value = $event,
											"as-child": ""
										}, {
											default: withCtx(() => [createVNode(_sfc_main$6, mergeProps({
												autofocus: "",
												autocomplete: "off",
												size: __props.size
											}, inputProps.value, {
												"data-slot": "input",
												class: __props.ui.input({ class: __props.uiOverride?.input }),
												onChange: withModifiers(() => {}, ["stop"])
											}), null, 16, [
												"size",
												"class",
												"onChange"
											])]),
											_: 1
										}, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
										renderSlot(_ctx.$slots, "content-top", { sub: __props.sub ?? false }),
										!searchTerm.value || hasFilteredItems.value ? (openBlock(), createBlock("div", {
											key: 1,
											role: "presentation",
											"data-slot": "viewport",
											class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
										}, [(openBlock(true), createBlock(Fragment, null, renderList$2(filteredGroups.value, (group, groupIndex) => {
											return openBlock(), createBlock(DropdownMenu.Group, {
												key: `group-${groupIndex}`,
												"data-slot": "group",
												class: __props.ui.group({ class: __props.uiOverride?.group })
											}, {
												default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
													return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [item.type === "label" ? (openBlock(), createBlock(DropdownMenu.Label, {
														key: 0,
														"data-slot": "label",
														class: __props.ui.label({ class: [
															__props.uiOverride?.label,
															item.ui?.label,
															item.class
														] })
													}, {
														default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
															item,
															index
														}, null, 8, ["item", "index"])]),
														_: 2
													}, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(DropdownMenu.Separator, {
														key: 1,
														"data-slot": "separator",
														class: __props.ui.separator({ class: [
															__props.uiOverride?.separator,
															item.ui?.separator,
															item.class
														] })
													}, null, 8, ["class"])) : item?.children?.length ? (openBlock(), createBlock(DropdownMenu.Sub, {
														key: 2,
														open: item.open,
														"default-open": item.defaultOpen
													}, {
														default: withCtx(() => [createVNode(DropdownMenu.SubTrigger, {
															as: "button",
															type: "button",
															disabled: item.disabled,
															"text-value": unref(get)(item, props.labelKey),
															"data-slot": "item",
															class: __props.ui.item({
																class: [
																	__props.uiOverride?.item,
																	item.ui?.item,
																	item.class
																],
																color: item?.color
															})
														}, {
															default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																item,
																index
															}, null, 8, ["item", "index"])]),
															_: 2
														}, 1032, [
															"disabled",
															"text-value",
															"class"
														]), createVNode(_sfc_main$2, mergeProps({
															sub: "",
															class: item.ui?.content,
															ui: __props.ui,
															"ui-override": __props.uiOverride,
															portal: __props.portal,
															items: item.children,
															align: "start",
															"align-offset": -4,
															"side-offset": 3,
															"label-key": __props.labelKey,
															"description-key": __props.descriptionKey,
															"checked-icon": __props.checkedIcon,
															"loading-icon": __props.loadingIcon,
															"external-icon": __props.externalIcon,
															size: __props.size,
															filter: item.filter,
															"filter-fields": item.filterFields || __props.filterFields,
															"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
														}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList$2(getProxySlots(), (_, name) => {
															return {
																name,
																fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))])
															};
														})]), 1040, [
															"class",
															"ui",
															"ui-override",
															"portal",
															"items",
															"label-key",
															"description-key",
															"checked-icon",
															"loading-icon",
															"external-icon",
															"size",
															"filter",
															"filter-fields",
															"ignore-filter"
														])]),
														_: 2
													}, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(DropdownMenu.CheckboxItem, {
														key: 3,
														"model-value": item.checked,
														disabled: item.disabled,
														"text-value": unref(get)(item, props.labelKey),
														"data-slot": "item",
														class: __props.ui.item({
															class: [
																__props.uiOverride?.item,
																item.ui?.item,
																item.class
															],
															color: item?.color
														}),
														"onUpdate:modelValue": item.onUpdateChecked,
														onSelect: item.onSelect
													}, {
														default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
															item,
															index
														}, null, 8, ["item", "index"])]),
														_: 2
													}, 1032, [
														"model-value",
														"disabled",
														"text-value",
														"class",
														"onUpdate:modelValue",
														"onSelect"
													])) : (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
														key: 4,
														ref_for: true
													}, unref(pickLinkProps)(item), { custom: "" }), {
														default: withCtx(({ active, ...slotProps }) => [createVNode(DropdownMenu.Item, {
															"as-child": "",
															disabled: item.disabled,
															"text-value": unref(get)(item, props.labelKey),
															onSelect: item.onSelect
														}, {
															default: withCtx(() => [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
																"data-slot": "item",
																class: __props.ui.item({
																	class: [
																		__props.uiOverride?.item,
																		item.ui?.item,
																		item.class
																	],
																	color: item?.color,
																	active
																})
															}), {
																default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																	item,
																	active,
																	index
																}, null, 8, [
																	"item",
																	"active",
																	"index"
																])]),
																_: 2
															}, 1040, ["class"])]),
															_: 2
														}, 1032, [
															"disabled",
															"text-value",
															"onSelect"
														])]),
														_: 2
													}, 1040))], 64);
												}), 128))]),
												_: 2
											}, 1032, ["class"]);
										}), 128))], 2)) : createCommentVNode("", true),
										searchTerm.value && !hasFilteredItems.value ? (openBlock(), createBlock("div", {
											key: 2,
											"data-slot": "empty",
											class: __props.ui.empty({ class: __props.uiOverride?.empty })
										}, [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)])], 2)) : createCommentVNode("", true),
										renderSlot(_ctx.$slots, "default"),
										renderSlot(_ctx.$slots, "content-bottom", { sub: __props.sub ?? false })
									];
								}),
								_: 3
							}), _parent, _scopeId);
							else return [(openBlock(), createBlock(resolveDynamicComponent(__props.sub ? DropdownMenu.SubContent : DropdownMenu.Content), mergeProps({
								"data-slot": "content",
								class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
							}, unref(contentProps)), {
								default: withCtx(() => [
									!!__props.filter ? (openBlock(), createBlock(DropdownMenu.Filter, {
										key: 0,
										modelValue: searchTerm.value,
										"onUpdate:modelValue": ($event) => searchTerm.value = $event,
										"as-child": ""
									}, {
										default: withCtx(() => [createVNode(_sfc_main$6, mergeProps({
											autofocus: "",
											autocomplete: "off",
											size: __props.size
										}, inputProps.value, {
											"data-slot": "input",
											class: __props.ui.input({ class: __props.uiOverride?.input }),
											onChange: withModifiers(() => {}, ["stop"])
										}), null, 16, [
											"size",
											"class",
											"onChange"
										])]),
										_: 1
									}, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
									renderSlot(_ctx.$slots, "content-top", { sub: __props.sub ?? false }),
									!searchTerm.value || hasFilteredItems.value ? (openBlock(), createBlock("div", {
										key: 1,
										role: "presentation",
										"data-slot": "viewport",
										class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
									}, [(openBlock(true), createBlock(Fragment, null, renderList$2(filteredGroups.value, (group, groupIndex) => {
										return openBlock(), createBlock(DropdownMenu.Group, {
											key: `group-${groupIndex}`,
											"data-slot": "group",
											class: __props.ui.group({ class: __props.uiOverride?.group })
										}, {
											default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
												return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [item.type === "label" ? (openBlock(), createBlock(DropdownMenu.Label, {
													key: 0,
													"data-slot": "label",
													class: __props.ui.label({ class: [
														__props.uiOverride?.label,
														item.ui?.label,
														item.class
													] })
												}, {
													default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
														item,
														index
													}, null, 8, ["item", "index"])]),
													_: 2
												}, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(DropdownMenu.Separator, {
													key: 1,
													"data-slot": "separator",
													class: __props.ui.separator({ class: [
														__props.uiOverride?.separator,
														item.ui?.separator,
														item.class
													] })
												}, null, 8, ["class"])) : item?.children?.length ? (openBlock(), createBlock(DropdownMenu.Sub, {
													key: 2,
													open: item.open,
													"default-open": item.defaultOpen
												}, {
													default: withCtx(() => [createVNode(DropdownMenu.SubTrigger, {
														as: "button",
														type: "button",
														disabled: item.disabled,
														"text-value": unref(get)(item, props.labelKey),
														"data-slot": "item",
														class: __props.ui.item({
															class: [
																__props.uiOverride?.item,
																item.ui?.item,
																item.class
															],
															color: item?.color
														})
													}, {
														default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
															item,
															index
														}, null, 8, ["item", "index"])]),
														_: 2
													}, 1032, [
														"disabled",
														"text-value",
														"class"
													]), createVNode(_sfc_main$2, mergeProps({
														sub: "",
														class: item.ui?.content,
														ui: __props.ui,
														"ui-override": __props.uiOverride,
														portal: __props.portal,
														items: item.children,
														align: "start",
														"align-offset": -4,
														"side-offset": 3,
														"label-key": __props.labelKey,
														"description-key": __props.descriptionKey,
														"checked-icon": __props.checkedIcon,
														"loading-icon": __props.loadingIcon,
														"external-icon": __props.externalIcon,
														size: __props.size,
														filter: item.filter,
														"filter-fields": item.filterFields || __props.filterFields,
														"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
													}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList$2(getProxySlots(), (_, name) => {
														return {
															name,
															fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))])
														};
													})]), 1040, [
														"class",
														"ui",
														"ui-override",
														"portal",
														"items",
														"label-key",
														"description-key",
														"checked-icon",
														"loading-icon",
														"external-icon",
														"size",
														"filter",
														"filter-fields",
														"ignore-filter"
													])]),
													_: 2
												}, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(DropdownMenu.CheckboxItem, {
													key: 3,
													"model-value": item.checked,
													disabled: item.disabled,
													"text-value": unref(get)(item, props.labelKey),
													"data-slot": "item",
													class: __props.ui.item({
														class: [
															__props.uiOverride?.item,
															item.ui?.item,
															item.class
														],
														color: item?.color
													}),
													"onUpdate:modelValue": item.onUpdateChecked,
													onSelect: item.onSelect
												}, {
													default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
														item,
														index
													}, null, 8, ["item", "index"])]),
													_: 2
												}, 1032, [
													"model-value",
													"disabled",
													"text-value",
													"class",
													"onUpdate:modelValue",
													"onSelect"
												])) : (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
													key: 4,
													ref_for: true
												}, unref(pickLinkProps)(item), { custom: "" }), {
													default: withCtx(({ active, ...slotProps }) => [createVNode(DropdownMenu.Item, {
														"as-child": "",
														disabled: item.disabled,
														"text-value": unref(get)(item, props.labelKey),
														onSelect: item.onSelect
													}, {
														default: withCtx(() => [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
															"data-slot": "item",
															class: __props.ui.item({
																class: [
																	__props.uiOverride?.item,
																	item.ui?.item,
																	item.class
																],
																color: item?.color,
																active
															})
														}), {
															default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
																item,
																active,
																index
															}, null, 8, [
																"item",
																"active",
																"index"
															])]),
															_: 2
														}, 1040, ["class"])]),
														_: 2
													}, 1032, [
														"disabled",
														"text-value",
														"onSelect"
													])]),
													_: 2
												}, 1040))], 64);
											}), 128))]),
											_: 2
										}, 1032, ["class"]);
									}), 128))], 2)) : createCommentVNode("", true),
									searchTerm.value && !hasFilteredItems.value ? (openBlock(), createBlock("div", {
										key: 2,
										"data-slot": "empty",
										class: __props.ui.empty({ class: __props.uiOverride?.empty })
									}, [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)])], 2)) : createCommentVNode("", true),
									renderSlot(_ctx.$slots, "default"),
									renderSlot(_ctx.$slots, "content-bottom", { sub: __props.sub ?? false })
								]),
								_: 3
							}, 16, ["class"]))];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(FieldGroupReset), null, {
						default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(__props.sub ? DropdownMenu.SubContent : DropdownMenu.Content), mergeProps({
							"data-slot": "content",
							class: __props.ui.content({ class: [__props.uiOverride?.content, props.class] })
						}, unref(contentProps)), {
							default: withCtx(() => [
								!!__props.filter ? (openBlock(), createBlock(DropdownMenu.Filter, {
									key: 0,
									modelValue: searchTerm.value,
									"onUpdate:modelValue": ($event) => searchTerm.value = $event,
									"as-child": ""
								}, {
									default: withCtx(() => [createVNode(_sfc_main$6, mergeProps({
										autofocus: "",
										autocomplete: "off",
										size: __props.size
									}, inputProps.value, {
										"data-slot": "input",
										class: __props.ui.input({ class: __props.uiOverride?.input }),
										onChange: withModifiers(() => {}, ["stop"])
									}), null, 16, [
										"size",
										"class",
										"onChange"
									])]),
									_: 1
								}, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
								renderSlot(_ctx.$slots, "content-top", { sub: __props.sub ?? false }),
								!searchTerm.value || hasFilteredItems.value ? (openBlock(), createBlock("div", {
									key: 1,
									role: "presentation",
									"data-slot": "viewport",
									class: __props.ui.viewport({ class: __props.uiOverride?.viewport })
								}, [(openBlock(true), createBlock(Fragment, null, renderList$2(filteredGroups.value, (group, groupIndex) => {
									return openBlock(), createBlock(DropdownMenu.Group, {
										key: `group-${groupIndex}`,
										"data-slot": "group",
										class: __props.ui.group({ class: __props.uiOverride?.group })
									}, {
										default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList$2(group, (item, index) => {
											return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [item.type === "label" ? (openBlock(), createBlock(DropdownMenu.Label, {
												key: 0,
												"data-slot": "label",
												class: __props.ui.label({ class: [
													__props.uiOverride?.label,
													item.ui?.label,
													item.class
												] })
											}, {
												default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
													item,
													index
												}, null, 8, ["item", "index"])]),
												_: 2
											}, 1032, ["class"])) : item.type === "separator" ? (openBlock(), createBlock(DropdownMenu.Separator, {
												key: 1,
												"data-slot": "separator",
												class: __props.ui.separator({ class: [
													__props.uiOverride?.separator,
													item.ui?.separator,
													item.class
												] })
											}, null, 8, ["class"])) : item?.children?.length ? (openBlock(), createBlock(DropdownMenu.Sub, {
												key: 2,
												open: item.open,
												"default-open": item.defaultOpen
											}, {
												default: withCtx(() => [createVNode(DropdownMenu.SubTrigger, {
													as: "button",
													type: "button",
													disabled: item.disabled,
													"text-value": unref(get)(item, props.labelKey),
													"data-slot": "item",
													class: __props.ui.item({
														class: [
															__props.uiOverride?.item,
															item.ui?.item,
															item.class
														],
														color: item?.color
													})
												}, {
													default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
														item,
														index
													}, null, 8, ["item", "index"])]),
													_: 2
												}, 1032, [
													"disabled",
													"text-value",
													"class"
												]), createVNode(_sfc_main$2, mergeProps({
													sub: "",
													class: item.ui?.content,
													ui: __props.ui,
													"ui-override": __props.uiOverride,
													portal: __props.portal,
													items: item.children,
													align: "start",
													"align-offset": -4,
													"side-offset": 3,
													"label-key": __props.labelKey,
													"description-key": __props.descriptionKey,
													"checked-icon": __props.checkedIcon,
													"loading-icon": __props.loadingIcon,
													"external-icon": __props.externalIcon,
													size: __props.size,
													filter: item.filter,
													"filter-fields": item.filterFields || __props.filterFields,
													"ignore-filter": item.ignoreFilter ?? __props.ignoreFilter
												}, { ref_for: true }, item.content), createSlots({ _: 2 }, [renderList$2(getProxySlots(), (_, name) => {
													return {
														name,
														fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData))])
													};
												})]), 1040, [
													"class",
													"ui",
													"ui-override",
													"portal",
													"items",
													"label-key",
													"description-key",
													"checked-icon",
													"loading-icon",
													"external-icon",
													"size",
													"filter",
													"filter-fields",
													"ignore-filter"
												])]),
												_: 2
											}, 1032, ["open", "default-open"])) : item.type === "checkbox" ? (openBlock(), createBlock(DropdownMenu.CheckboxItem, {
												key: 3,
												"model-value": item.checked,
												disabled: item.disabled,
												"text-value": unref(get)(item, props.labelKey),
												"data-slot": "item",
												class: __props.ui.item({
													class: [
														__props.uiOverride?.item,
														item.ui?.item,
														item.class
													],
													color: item?.color
												}),
												"onUpdate:modelValue": item.onUpdateChecked,
												onSelect: item.onSelect
											}, {
												default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
													item,
													index
												}, null, 8, ["item", "index"])]),
												_: 2
											}, 1032, [
												"model-value",
												"disabled",
												"text-value",
												"class",
												"onUpdate:modelValue",
												"onSelect"
											])) : (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
												key: 4,
												ref_for: true
											}, unref(pickLinkProps)(item), { custom: "" }), {
												default: withCtx(({ active, ...slotProps }) => [createVNode(DropdownMenu.Item, {
													"as-child": "",
													disabled: item.disabled,
													"text-value": unref(get)(item, props.labelKey),
													onSelect: item.onSelect
												}, {
													default: withCtx(() => [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, slotProps, {
														"data-slot": "item",
														class: __props.ui.item({
															class: [
																__props.uiOverride?.item,
																item.ui?.item,
																item.class
															],
															color: item?.color,
															active
														})
													}), {
														default: withCtx(() => [createVNode(unref(ReuseItemTemplate), {
															item,
															active,
															index
														}, null, 8, [
															"item",
															"active",
															"index"
														])]),
														_: 2
													}, 1040, ["class"])]),
													_: 2
												}, 1032, [
													"disabled",
													"text-value",
													"onSelect"
												])]),
												_: 2
											}, 1040))], 64);
										}), 128))]),
										_: 2
									}, 1032, ["class"]);
								}), 128))], 2)) : createCommentVNode("", true),
								searchTerm.value && !hasFilteredItems.value ? (openBlock(), createBlock("div", {
									key: 2,
									"data-slot": "empty",
									class: __props.ui.empty({ class: __props.uiOverride?.empty })
								}, [renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [createTextVNode(toDisplayString(unref(t)("dropdownMenu.noMatch", { searchTerm: searchTerm.value })), 1)])], 2)) : createCommentVNode("", true),
								renderSlot(_ctx.$slots, "default"),
								renderSlot(_ctx.$slots, "content-bottom", { sub: __props.sub ?? false })
							]),
							_: 3
						}, 16, ["class"]))]),
						_: 3
					})];
				}),
				_: 3
			}, _parent));
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fdropdown-menu.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fdropdown_menu_default = {
	"slots": {
		"content": "min-w-32 max-h-(--reka-dropdown-menu-content-available-height) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)] origin-(--reka-dropdown-menu-content-transform-origin) flex flex-col",
		"input": "border-b border-default",
		"empty": "text-center text-muted",
		"viewport": "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1",
		"arrow": "fill-bg stroke-default",
		"group": "p-1 isolate",
		"label": "w-full flex items-center font-semibold text-highlighted",
		"separator": "-mx-1 my-1 h-px bg-border",
		"item": "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
		"itemLeadingIcon": "shrink-0",
		"itemLeadingAvatar": "shrink-0",
		"itemLeadingAvatarSize": "",
		"itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
		"itemTrailingIcon": "shrink-0",
		"itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0",
		"itemTrailingKbdsSize": "",
		"itemWrapper": "flex-1 flex flex-col text-start min-w-0",
		"itemLabel": "truncate",
		"itemDescription": "truncate text-muted",
		"itemLabelExternalIcon": "inline-block size-3 align-top text-dimmed"
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
		"active": {
			"true": {
				"item": "text-highlighted before:bg-elevated",
				"itemLeadingIcon": "text-default"
			},
			"false": {
				"item": ["text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50", "transition-colors before:transition-colors"],
				"itemLeadingIcon": ["text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default", "transition-colors"]
			}
		},
		"loading": { "true": { "itemLeadingIcon": "animate-spin" } },
		"size": {
			"xs": {
				"label": "p-1 text-xs gap-1",
				"item": "p-1 text-xs gap-1",
				"empty": "p-2 text-xs",
				"itemLeadingIcon": "size-4",
				"itemLeadingAvatarSize": "3xs",
				"itemTrailingIcon": "size-4",
				"itemTrailingKbds": "gap-0.5",
				"itemTrailingKbdsSize": "sm"
			},
			"sm": {
				"label": "p-1.5 text-xs gap-1.5",
				"item": "p-1.5 text-xs gap-1.5",
				"empty": "p-2.5 text-xs",
				"itemLeadingIcon": "size-4",
				"itemLeadingAvatarSize": "3xs",
				"itemTrailingIcon": "size-4",
				"itemTrailingKbds": "gap-0.5",
				"itemTrailingKbdsSize": "sm"
			},
			"md": {
				"label": "p-1.5 text-sm gap-1.5",
				"item": "p-1.5 text-sm gap-1.5",
				"empty": "p-2.5 text-sm",
				"itemLeadingIcon": "size-5",
				"itemLeadingAvatarSize": "2xs",
				"itemTrailingIcon": "size-5",
				"itemTrailingKbds": "gap-0.5",
				"itemTrailingKbdsSize": "md"
			},
			"lg": {
				"label": "p-2 text-sm gap-2",
				"item": "p-2 text-sm gap-2",
				"empty": "p-3 text-sm",
				"itemLeadingIcon": "size-5",
				"itemLeadingAvatarSize": "2xs",
				"itemTrailingIcon": "size-5",
				"itemTrailingKbds": "gap-1",
				"itemTrailingKbdsSize": "md"
			},
			"xl": {
				"label": "p-2 text-base gap-2",
				"item": "p-2 text-base gap-2",
				"empty": "p-3 text-base",
				"itemLeadingIcon": "size-6",
				"itemLeadingAvatarSize": "xs",
				"itemTrailingIcon": "size-6",
				"itemTrailingKbds": "gap-1",
				"itemTrailingKbdsSize": "lg"
			}
		}
	},
	"compoundVariants": [
		{
			"color": "primary",
			"active": false,
			"class": {
				"item": "text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10",
				"itemLeadingIcon": "text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary"
			}
		},
		{
			"color": "secondary",
			"active": false,
			"class": {
				"item": "text-secondary data-highlighted:text-secondary data-highlighted:before:bg-secondary/10 data-[state=open]:before:bg-secondary/10",
				"itemLeadingIcon": "text-secondary/75 group-data-highlighted:text-secondary group-data-[state=open]:text-secondary"
			}
		},
		{
			"color": "success",
			"active": false,
			"class": {
				"item": "text-success data-highlighted:text-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10",
				"itemLeadingIcon": "text-success/75 group-data-highlighted:text-success group-data-[state=open]:text-success"
			}
		},
		{
			"color": "info",
			"active": false,
			"class": {
				"item": "text-info data-highlighted:text-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10",
				"itemLeadingIcon": "text-info/75 group-data-highlighted:text-info group-data-[state=open]:text-info"
			}
		},
		{
			"color": "warning",
			"active": false,
			"class": {
				"item": "text-warning data-highlighted:text-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10",
				"itemLeadingIcon": "text-warning/75 group-data-highlighted:text-warning group-data-[state=open]:text-warning"
			}
		},
		{
			"color": "error",
			"active": false,
			"class": {
				"item": "text-error data-highlighted:text-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10",
				"itemLeadingIcon": "text-error/75 group-data-highlighted:text-error group-data-[state=open]:text-error"
			}
		},
		{
			"color": "primary",
			"active": true,
			"class": {
				"item": "text-primary before:bg-primary/10",
				"itemLeadingIcon": "text-primary"
			}
		},
		{
			"color": "secondary",
			"active": true,
			"class": {
				"item": "text-secondary before:bg-secondary/10",
				"itemLeadingIcon": "text-secondary"
			}
		},
		{
			"color": "success",
			"active": true,
			"class": {
				"item": "text-success before:bg-success/10",
				"itemLeadingIcon": "text-success"
			}
		},
		{
			"color": "info",
			"active": true,
			"class": {
				"item": "text-info before:bg-info/10",
				"itemLeadingIcon": "text-info"
			}
		},
		{
			"color": "warning",
			"active": true,
			"class": {
				"item": "text-warning before:bg-warning/10",
				"itemLeadingIcon": "text-warning"
			}
		},
		{
			"color": "error",
			"active": true,
			"class": {
				"item": "text-error before:bg-error/10",
				"itemLeadingIcon": "text-error"
			}
		}
	],
	"defaultVariants": { "size": "md" }
};
// node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue
var _sfc_main$1 = {
	__name: "UDropdownMenu",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		size: {
			type: null,
			required: false
		},
		items: {
			type: null,
			required: false
		},
		checkedIcon: {
			type: null,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		},
		externalIcon: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
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
		filter: {
			type: [Boolean, Object],
			required: false,
			default: false
		},
		filterFields: {
			type: Array,
			required: false
		},
		ignoreFilter: {
			type: Boolean,
			required: false,
			default: false
		},
		disabled: {
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
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		}
	}, {
		"searchTerm": {
			type: String,
			default: ""
		},
		"searchTermModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["update:open"], ["update:searchTerm"]),
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const searchTerm = useModel(__props, "searchTerm", {
			type: String,
			default: ""
		});
		const props = useComponentProps("dropdownMenu", _props);
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(props, [
			"defaultOpen",
			"open",
			"modal"
		], emits);
		const contentProps = toRef(() => defu(props.content, {
			side: "bottom",
			sideOffset: 8,
			collisionPadding: 8
		}));
		const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
		const getProxySlots = () => omit(slots, ["default"]);
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fdropdown_menu_default,
			...appConfig.ui?.dropdownMenu || {}
		})({ size: props.size }));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DropdownMenuRoot_default), mergeProps(unref(rootProps), _attrs), {
				default: withCtx(({ open }, _push, _parent, _scopeId) => {
					if (_push) {
						if (!!slots.default) _push(ssrRenderComponent(unref(DropdownMenuTrigger_default), {
							"as-child": "",
							class: unref(props).class,
							disabled: unref(props).disabled
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "default", { open })];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(ssrRenderComponent(_sfc_main$2, mergeProps({
							"search-term": searchTerm.value,
							"onUpdate:searchTerm": ($event) => searchTerm.value = $event,
							class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] }),
							ui: ui.value,
							"ui-override": unref(props).ui
						}, contentProps.value, {
							items: unref(props).items,
							portal: unref(props).portal,
							"label-key": unref(props).labelKey,
							"description-key": unref(props).descriptionKey,
							"checked-icon": unref(props).checkedIcon,
							"loading-icon": unref(props).loadingIcon,
							"external-icon": unref(props).externalIcon,
							size: unref(props).size,
							filter: unref(props).filter,
							"filter-fields": unref(props).filterFields,
							"ignore-filter": unref(props).ignoreFilter
						}), createSlots({
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (!!unref(props).arrow) _push(ssrRenderComponent(unref(DropdownMenuArrow_default), mergeProps(arrowProps.value, {
										"data-slot": "arrow",
										class: ui.value.arrow({ class: unref(props).ui?.arrow })
									}), null, _parent, _scopeId));
									else _push(`<!---->`);
								} else return [!!unref(props).arrow ? (openBlock(), createBlock(unref(DropdownMenuArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
									"data-slot": "arrow",
									class: ui.value.arrow({ class: unref(props).ui?.arrow })
								}), null, 16, ["class"])) : createCommentVNode("", true)];
							}),
							_: 2
						}, [renderList$2(getProxySlots(), (_, name) => {
							return {
								name,
								fn: withCtx((slotData, _push, _parent, _scopeId) => {
									if (_push) ssrRenderSlot(_ctx.$slots, name, slotData, null, _push, _parent, _scopeId);
									else return [renderSlot(_ctx.$slots, name, slotData)];
								})
							};
						})]), _parent, _scopeId));
					} else return [!!slots.default ? (openBlock(), createBlock(unref(DropdownMenuTrigger_default), {
						key: 0,
						"as-child": "",
						class: unref(props).class,
						disabled: unref(props).disabled
					}, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
						_: 2
					}, 1032, ["class", "disabled"])) : createCommentVNode("", true), createVNode(_sfc_main$2, mergeProps({
						"search-term": searchTerm.value,
						"onUpdate:searchTerm": ($event) => searchTerm.value = $event,
						class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] }),
						ui: ui.value,
						"ui-override": unref(props).ui
					}, contentProps.value, {
						items: unref(props).items,
						portal: unref(props).portal,
						"label-key": unref(props).labelKey,
						"description-key": unref(props).descriptionKey,
						"checked-icon": unref(props).checkedIcon,
						"loading-icon": unref(props).loadingIcon,
						"external-icon": unref(props).externalIcon,
						size: unref(props).size,
						filter: unref(props).filter,
						"filter-fields": unref(props).filterFields,
						"ignore-filter": unref(props).ignoreFilter
					}), createSlots({
						default: withCtx(() => [!!unref(props).arrow ? (openBlock(), createBlock(unref(DropdownMenuArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
							"data-slot": "arrow",
							class: ui.value.arrow({ class: unref(props).ui?.arrow })
						}), null, 16, ["class"])) : createCommentVNode("", true)]),
						_: 2
					}, [renderList$2(getProxySlots(), (_, name) => {
						return {
							name,
							fn: withCtx((slotData) => [renderSlot(_ctx.$slots, name, slotData)])
						};
					})]), 1040, [
						"search-term",
						"onUpdate:searchTerm",
						"class",
						"ui",
						"ui-override",
						"items",
						"portal",
						"label-key",
						"description-key",
						"checked-icon",
						"loading-icon",
						"external-icon",
						"size",
						"filter",
						"filter-fields",
						"ignore-filter"
					])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
// node_modules/@nuxt/ui/dist/runtime/utils/overlay.js
function pointerDownOutside(e, options = {}) {
	const originalEvent = e.detail.originalEvent;
	const target = originalEvent.target;
	if (!target?.isConnected) {
		e.preventDefault();
		return;
	}
	if (options.scrollable) {
		if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) e.preventDefault();
	}
}
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fmodal.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fmodal_default = {
	"slots": {
		"overlay": "fixed inset-0",
		"content": "bg-default divide-y divide-default flex flex-col focus:outline-none",
		"header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-(--ui-header-height)",
		"wrapper": "",
		"body": "flex-1 p-4 sm:p-6",
		"footer": "flex items-center gap-1.5 p-4 sm:px-6",
		"title": "text-highlighted font-semibold",
		"description": "mt-1 text-muted text-sm",
		"close": "absolute top-4 end-4"
	},
	"variants": {
		"transition": { "true": {
			"overlay": "data-[state=open]:animate-[fade-in_200ms_var(--ease-out)] data-[state=closed]:animate-[fade-out_200ms_var(--ease-out)]",
			"content": "data-[state=open]:animate-[scale-in_200ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_200ms_var(--ease-out)]"
		} },
		"fullscreen": {
			"true": { "content": "inset-0" },
			"false": { "content": "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-default" }
		},
		"overlay": { "true": { "overlay": "bg-elevated/75" } },
		"scrollable": {
			"true": {
				"overlay": "overflow-y-auto",
				"content": "relative"
			},
			"false": {
				"content": "fixed",
				"body": "overflow-y-auto"
			}
		}
	},
	"compoundVariants": [{
		"scrollable": true,
		"fullscreen": false,
		"class": { "overlay": "grid place-items-center p-4 sm:py-8" }
	}, {
		"scrollable": false,
		"fullscreen": false,
		"class": { "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden" }
	}]
};
// node_modules/@nuxt/ui/dist/runtime/components/Modal.vue
var _sfc_main = {
	__name: "UModal",
	__ssrInlineRender: true,
	props: {
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		content: {
			type: Object,
			required: false
		},
		overlay: {
			type: Boolean,
			required: false,
			default: true
		},
		scrollable: {
			type: Boolean,
			required: false
		},
		transition: {
			type: Boolean,
			required: false,
			default: true
		},
		fullscreen: {
			type: Boolean,
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		close: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		closeIcon: {
			type: null,
			required: false
		},
		dismissible: {
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
		},
		open: {
			type: Boolean,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		},
		unmountOnHide: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"leave",
		"after:leave",
		"enter",
		"after:enter",
		"close:prevent",
		"update:open"
	],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("modal", _props);
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(props, [
			"open",
			"defaultOpen",
			"modal",
			"unmountOnHide"
		], emits);
		const portalProps = usePortal(toRef(() => props.portal));
		const contentProps = toRef(() => props.content);
		const contentEvents = computed(() => {
			if (!props.dismissible) return ["interactOutside", "escapeKeyDown"].reduce((acc, curr) => {
				acc[curr] = (e) => {
					e.preventDefault();
					emits("close:prevent");
				};
				return acc;
			}, {});
			return { pointerDownOutside: (e) => pointerDownOutside(e, { scrollable: props.scrollable }) };
		});
		const [DefineContentTemplate, ReuseContentTemplate] = createReusableTemplate();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fmodal_default,
			...appConfig.ui?.modal || {}
		})({
			transition: props.transition,
			fullscreen: props.fullscreen,
			overlay: props.overlay,
			scrollable: props.scrollable
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogRoot_default), mergeProps(unref(rootProps), _attrs), {
				default: withCtx(({ open, close }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(DefineContentTemplate), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(DialogContent_default), mergeProps({
									"data-slot": "content",
									class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
								}, contentProps.value, {
									onEnter: ($event) => !unref(props).scrollable && emits("enter"),
									onAfterEnter: ($event) => !unref(props).scrollable && emits("after:enter"),
									onLeave: ($event) => !unref(props).scrollable && emits("leave"),
									onAfterLeave: ($event) => !unref(props).scrollable && emits("after:leave")
								}, toHandlers(contentEvents.value)), {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											if (!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content) _push(ssrRenderComponent(unref(VisuallyHidden_default), null, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) {
														if (!unref(props).title && !slots.title) _push(ssrRenderComponent(unref(DialogTitle_default), null, null, _parent, _scopeId));
														else if (!!slots.content) _push(ssrRenderComponent(unref(DialogTitle_default), null, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
																	_push(`${ssrInterpolate(unref(props).title)}`);
																}, _push, _parent, _scopeId);
																else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
															}),
															_: 2
														}, _parent, _scopeId));
														else _push(`<!---->`);
														if (!unref(props).description && !slots.description) _push(ssrRenderComponent(unref(DialogDescription_default), null, null, _parent, _scopeId));
														else if (!!slots.content) _push(ssrRenderComponent(unref(DialogDescription_default), null, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
																	_push(`${ssrInterpolate(unref(props).description)}`);
																}, _push, _parent, _scopeId);
																else return [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])];
															}),
															_: 2
														}, _parent, _scopeId));
														else _push(`<!---->`);
													} else return [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
														_: 3
													})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
														_: 3
													})) : createCommentVNode("", true)];
												}),
												_: 2
											}, _parent, _scopeId));
											else _push(`<!---->`);
											ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
												if (!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close) {
													_push(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
														if (unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
															_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
															if (unref(props).title || !!slots.title) _push(ssrRenderComponent(unref(DialogTitle_default), {
																"data-slot": "title",
																class: ui.value.title({ class: unref(props).ui?.title })
															}, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
																		_push(`${ssrInterpolate(unref(props).title)}`);
																	}, _push, _parent, _scopeId);
																	else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
																}),
																_: 2
															}, _parent, _scopeId));
															else _push(`<!---->`);
															if (unref(props).description || !!slots.description) _push(ssrRenderComponent(unref(DialogDescription_default), {
																"data-slot": "description",
																class: ui.value.description({ class: unref(props).ui?.description })
															}, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
																		_push(`${ssrInterpolate(unref(props).description)}`);
																	}, _push, _parent, _scopeId);
																	else return [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])];
																}),
																_: 2
															}, _parent, _scopeId));
															else _push(`<!---->`);
															_push(`</div>`);
														} else _push(`<!---->`);
														ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent, _scopeId);
														if (unref(props).close || !!slots.close) _push(ssrRenderComponent(unref(DialogClose_default), { "as-child": "" }, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
																	if (unref(props).close) _push(ssrRenderComponent(_sfc_main$3, mergeProps({
																		icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
																		color: "neutral",
																		variant: "ghost",
																		"aria-label": unref(t)("modal.close")
																	}, typeof unref(props).close === "object" ? unref(props).close : {}, {
																		"data-slot": "close",
																		class: ui.value.close({ class: unref(props).ui?.close })
																	}), null, _parent, _scopeId));
																	else _push(`<!---->`);
																}, _push, _parent, _scopeId);
																else return [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
																	key: 0,
																	icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
																	color: "neutral",
																	variant: "ghost",
																	"aria-label": unref(t)("modal.close")
																}, typeof unref(props).close === "object" ? unref(props).close : {}, {
																	"data-slot": "close",
																	class: ui.value.close({ class: unref(props).ui?.close })
																}), null, 16, [
																	"icon",
																	"aria-label",
																	"class"
																])) : createCommentVNode("", true)])];
															}),
															_: 2
														}, _parent, _scopeId));
														else _push(`<!---->`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if (!!slots.body) {
													_push(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if (!!slots.footer) {
													_push(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: unref(props).ui?.footer }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
										} else return [!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 0 }, {
											default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
												_: 3
											})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
												_: 3
											})) : createCommentVNode("", true)]),
											_: 3
										})) : createCommentVNode("", true), renderSlot(_ctx.$slots, "content", { close }, () => [
											!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
												key: 0,
												"data-slot": "header",
												class: ui.value.header({ class: unref(props).ui?.header })
											}, [renderSlot(_ctx.$slots, "header", { close }, () => [
												unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
													key: 0,
													"data-slot": "wrapper",
													class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
												}, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
													key: 0,
													"data-slot": "title",
													class: ui.value.title({ class: unref(props).ui?.title })
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
													_: 3
												}, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
													key: 1,
													"data-slot": "description",
													class: ui.value.description({ class: unref(props).ui?.description })
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
													_: 3
												}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
												renderSlot(_ctx.$slots, "actions"),
												unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose_default), {
													key: 1,
													"as-child": ""
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
														key: 0,
														icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
														color: "neutral",
														variant: "ghost",
														"aria-label": unref(t)("modal.close")
													}, typeof unref(props).close === "object" ? unref(props).close : {}, {
														"data-slot": "close",
														class: ui.value.close({ class: unref(props).ui?.close })
													}), null, 16, [
														"icon",
														"aria-label",
														"class"
													])) : createCommentVNode("", true)])]),
													_: 2
												}, 1024)) : createCommentVNode("", true)
											])], 2)) : createCommentVNode("", true),
											!!slots.body ? (openBlock(), createBlock("div", {
												key: 1,
												"data-slot": "body",
												class: ui.value.body({ class: unref(props).ui?.body })
											}, [renderSlot(_ctx.$slots, "body", { close })], 2)) : createCommentVNode("", true),
											!!slots.footer ? (openBlock(), createBlock("div", {
												key: 2,
												"data-slot": "footer",
												class: ui.value.footer({ class: unref(props).ui?.footer })
											}, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
										])];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(DialogContent_default), mergeProps({
									"data-slot": "content",
									class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
								}, contentProps.value, {
									onEnter: ($event) => !unref(props).scrollable && emits("enter"),
									onAfterEnter: ($event) => !unref(props).scrollable && emits("after:enter"),
									onLeave: ($event) => !unref(props).scrollable && emits("leave"),
									onAfterLeave: ($event) => !unref(props).scrollable && emits("after:leave")
								}, toHandlers(contentEvents.value)), {
									default: withCtx(() => [!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 0 }, {
										default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
											_: 3
										})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
											_: 3
										})) : createCommentVNode("", true)]),
										_: 3
									})) : createCommentVNode("", true), renderSlot(_ctx.$slots, "content", { close }, () => [
										!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
											key: 0,
											"data-slot": "header",
											class: ui.value.header({ class: unref(props).ui?.header })
										}, [renderSlot(_ctx.$slots, "header", { close }, () => [
											unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
												key: 0,
												"data-slot": "wrapper",
												class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
											}, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
												key: 0,
												"data-slot": "title",
												class: ui.value.title({ class: unref(props).ui?.title })
											}, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
												_: 3
											}, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
												key: 1,
												"data-slot": "description",
												class: ui.value.description({ class: unref(props).ui?.description })
											}, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
												_: 3
											}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
											renderSlot(_ctx.$slots, "actions"),
											unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose_default), {
												key: 1,
												"as-child": ""
											}, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
													key: 0,
													icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
													color: "neutral",
													variant: "ghost",
													"aria-label": unref(t)("modal.close")
												}, typeof unref(props).close === "object" ? unref(props).close : {}, {
													"data-slot": "close",
													class: ui.value.close({ class: unref(props).ui?.close })
												}), null, 16, [
													"icon",
													"aria-label",
													"class"
												])) : createCommentVNode("", true)])]),
												_: 2
											}, 1024)) : createCommentVNode("", true)
										])], 2)) : createCommentVNode("", true),
										!!slots.body ? (openBlock(), createBlock("div", {
											key: 1,
											"data-slot": "body",
											class: ui.value.body({ class: unref(props).ui?.body })
										}, [renderSlot(_ctx.$slots, "body", { close })], 2)) : createCommentVNode("", true),
										!!slots.footer ? (openBlock(), createBlock("div", {
											key: 2,
											"data-slot": "footer",
											class: ui.value.footer({ class: unref(props).ui?.footer })
										}, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
									])]),
									_: 2
								}, 1040, [
									"class",
									"onEnter",
									"onAfterEnter",
									"onLeave",
									"onAfterLeave"
								])];
							}),
							_: 2
						}, _parent, _scopeId));
						if (!!slots.default) _push(ssrRenderComponent(unref(DialogTrigger_default), {
							"as-child": "",
							class: unref(props).class
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "default", { open })];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(ssrRenderComponent(unref(DialogPortal_default), mergeProps(unref(portalProps), { "force-mount": unref(portalProps).disabled && unref(props).unmountOnHide === false || void 0 }), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											if (unref(props).scrollable) _push(ssrRenderComponent(unref(DialogOverlay_default), {
												"data-slot": "overlay",
												class: ui.value.overlay({ class: unref(props).ui?.overlay }),
												onEnter: ($event) => emits("enter"),
												onAfterEnter: ($event) => emits("after:enter"),
												onLeave: ($event) => emits("leave"),
												onAfterLeave: ($event) => emits("after:leave")
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent, _scopeId));
													else return [createVNode(unref(ReuseContentTemplate))];
												}),
												_: 2
											}, _parent, _scopeId));
											else {
												_push(`<!--[-->`);
												if (unref(props).overlay) _push(ssrRenderComponent(unref(DialogOverlay_default), {
													"data-slot": "overlay",
													class: ui.value.overlay({ class: unref(props).ui?.overlay })
												}, null, _parent, _scopeId));
												else _push(`<!---->`);
												_push(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent, _scopeId));
												_push(`<!--]-->`);
											}
										} else return [unref(props).scrollable ? (openBlock(), createBlock(unref(DialogOverlay_default), {
											key: 0,
											"data-slot": "overlay",
											class: ui.value.overlay({ class: unref(props).ui?.overlay }),
											onEnter: ($event) => emits("enter"),
											onAfterEnter: ($event) => emits("after:enter"),
											onLeave: ($event) => emits("leave"),
											onAfterLeave: ($event) => emits("after:leave")
										}, {
											default: withCtx(() => [createVNode(unref(ReuseContentTemplate))]),
											_: 1
										}, 8, [
											"class",
											"onEnter",
											"onAfterEnter",
											"onLeave",
											"onAfterLeave"
										])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
											key: 0,
											"data-slot": "overlay",
											class: ui.value.overlay({ class: unref(props).ui?.overlay })
										}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(ReuseContentTemplate))], 64))];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(FieldGroupReset), null, {
									default: withCtx(() => [unref(props).scrollable ? (openBlock(), createBlock(unref(DialogOverlay_default), {
										key: 0,
										"data-slot": "overlay",
										class: ui.value.overlay({ class: unref(props).ui?.overlay }),
										onEnter: ($event) => emits("enter"),
										onAfterEnter: ($event) => emits("after:enter"),
										onLeave: ($event) => emits("leave"),
										onAfterLeave: ($event) => emits("after:leave")
									}, {
										default: withCtx(() => [createVNode(unref(ReuseContentTemplate))]),
										_: 1
									}, 8, [
										"class",
										"onEnter",
										"onAfterEnter",
										"onLeave",
										"onAfterLeave"
									])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
										key: 0,
										"data-slot": "overlay",
										class: ui.value.overlay({ class: unref(props).ui?.overlay })
									}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(ReuseContentTemplate))], 64))]),
									_: 1
								})];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(DefineContentTemplate), null, {
							default: withCtx(() => [createVNode(unref(DialogContent_default), mergeProps({
								"data-slot": "content",
								class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
							}, contentProps.value, {
								onEnter: ($event) => !unref(props).scrollable && emits("enter"),
								onAfterEnter: ($event) => !unref(props).scrollable && emits("after:enter"),
								onLeave: ($event) => !unref(props).scrollable && emits("leave"),
								onAfterLeave: ($event) => !unref(props).scrollable && emits("after:leave")
							}, toHandlers(contentEvents.value)), {
								default: withCtx(() => [!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 0 }, {
									default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
										default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
										_: 3
									})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
										default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
										_: 3
									})) : createCommentVNode("", true)]),
									_: 3
								})) : createCommentVNode("", true), renderSlot(_ctx.$slots, "content", { close }, () => [
									!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
										key: 0,
										"data-slot": "header",
										class: ui.value.header({ class: unref(props).ui?.header })
									}, [renderSlot(_ctx.$slots, "header", { close }, () => [
										unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
											key: 0,
											"data-slot": "wrapper",
											class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
										}, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
											key: 0,
											"data-slot": "title",
											class: ui.value.title({ class: unref(props).ui?.title })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
											_: 3
										}, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
											key: 1,
											"data-slot": "description",
											class: ui.value.description({ class: unref(props).ui?.description })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
											_: 3
										}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
										renderSlot(_ctx.$slots, "actions"),
										unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose_default), {
											key: 1,
											"as-child": ""
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
												key: 0,
												icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
												color: "neutral",
												variant: "ghost",
												"aria-label": unref(t)("modal.close")
											}, typeof unref(props).close === "object" ? unref(props).close : {}, {
												"data-slot": "close",
												class: ui.value.close({ class: unref(props).ui?.close })
											}), null, 16, [
												"icon",
												"aria-label",
												"class"
											])) : createCommentVNode("", true)])]),
											_: 2
										}, 1024)) : createCommentVNode("", true)
									])], 2)) : createCommentVNode("", true),
									!!slots.body ? (openBlock(), createBlock("div", {
										key: 1,
										"data-slot": "body",
										class: ui.value.body({ class: unref(props).ui?.body })
									}, [renderSlot(_ctx.$slots, "body", { close })], 2)) : createCommentVNode("", true),
									!!slots.footer ? (openBlock(), createBlock("div", {
										key: 2,
										"data-slot": "footer",
										class: ui.value.footer({ class: unref(props).ui?.footer })
									}, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
								])]),
								_: 2
							}, 1040, [
								"class",
								"onEnter",
								"onAfterEnter",
								"onLeave",
								"onAfterLeave"
							])]),
							_: 2
						}, 1024),
						!!slots.default ? (openBlock(), createBlock(unref(DialogTrigger_default), {
							key: 0,
							"as-child": "",
							class: unref(props).class
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
							_: 2
						}, 1032, ["class"])) : createCommentVNode("", true),
						createVNode(unref(DialogPortal_default), mergeProps(unref(portalProps), { "force-mount": unref(portalProps).disabled && unref(props).unmountOnHide === false || void 0 }), {
							default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
								default: withCtx(() => [unref(props).scrollable ? (openBlock(), createBlock(unref(DialogOverlay_default), {
									key: 0,
									"data-slot": "overlay",
									class: ui.value.overlay({ class: unref(props).ui?.overlay }),
									onEnter: ($event) => emits("enter"),
									onAfterEnter: ($event) => emits("after:enter"),
									onLeave: ($event) => emits("leave"),
									onAfterLeave: ($event) => emits("after:leave")
								}, {
									default: withCtx(() => [createVNode(unref(ReuseContentTemplate))]),
									_: 1
								}, 8, [
									"class",
									"onEnter",
									"onAfterEnter",
									"onLeave",
									"onAfterLeave"
								])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
									key: 0,
									"data-slot": "overlay",
									class: ui.value.overlay({ class: unref(props).ui?.overlay })
								}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(ReuseContentTemplate))], 64))]),
								_: 1
							})]),
							_: 1
						}, 16, ["force-mount"])
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { FocusScope_default as F, MAP_KEY_TO_FOCUS_INTENT as M, _sfc_main$1 as _, _sfc_main as a, useComposing as b, useArrowNavigation as c, useFocusGuards as d, useBodyScrollLock as e, useHideOthers as f, focusFirst$1 as g, getNextMatch as h, useFilter as i, getFocusIntent as j, useFilter$1 as k, useTypeahead as u, wrapArray as w };
//# sourceMappingURL=Modal-BfwSu3fu.mjs.map
