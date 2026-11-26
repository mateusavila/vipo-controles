import { C as injectConfigProviderContext, B as useForwardProps, a6 as useEmitAsProps, a as useComponentProps, b as useAppConfig, a7 as useHead, P as Primitive, j as useForwardExpose, t as tv, A as createContext } from '../virtual/entry.mjs';
import { useMounted, onKeyStroke, createSharedComposable } from '@vueuse/core';
import { isClient } from '@vueuse/shared';
import { useFloating, autoUpdate, offset, flip, shift, limitShift, size, arrow, hide } from '@floating-ui/vue';
import { X as useId, p as computed, J as ssrRenderComponent, S as withCtx, T as ssrRenderSlot, aa as ssrRenderClass, u as unref, a8 as ssrInterpolate, U as renderSlot, V as openBlock, W as createBlock, F as Fragment, L as createVNode, ac as toDisplayString, a7 as createTextVNode, y as mergeProps, k as ref, v as defineComponent, aw as watchPostEffect, ak as createElementBlock, a0 as normalizeStyle, d as getCurrentInstance, O as shallowRef, D as watch, w as watchEffect, al as withMemo, av as mergeDefaults, ap as toValue, a1 as nextTick, b as reactive, Q as useSSRContext } from '../_/vue.mjs';

// node_modules/reka-ui/dist/shared/handleAndDispatchCustomEvent.js
function handleAndDispatchCustomEvent(name, handler, detail) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) target.addEventListener(name, handler, { once: true });
	target.dispatchEvent(event);
}
// node_modules/reka-ui/dist/shared/bodyPointerEvents.js
var locks = /* @__PURE__ */ new WeakMap();
/**
* Adds `owner` to the body `pointer-events` lock of `doc` and sets it to `none`.
* The first owner saves the body's current inline value.
*/
function acquireBodyPointerEvents(doc, owner) {
	let lock = locks.get(doc);
	if (!lock) {
		lock = {
			owners: /* @__PURE__ */ new Set(),
			original: doc.body.style.pointerEvents
		};
		locks.set(doc, lock);
	}
	lock.owners.add(owner);
	doc.body.style.pointerEvents = "none";
}
/**
* Removes `owner` from the lock of `doc`; the last owner out restores the saved
* value. Releasing an owner that never acquired is a no-op.
*/
function releaseBodyPointerEvents(doc, owner) {
	const lock = locks.get(doc);
	if (!lock?.owners.delete(owner)) return;
	if (lock.owners.size === 0) {
		locks.delete(doc);
		doc.body.style.pointerEvents = lock.original;
	}
}
// node_modules/reka-ui/dist/shared/useDirection.js
/**
* The `useDirection` function provides a way to access the current direction in your application.
* @param {Ref<Direction | undefined>} [dir] - An optional ref containing the direction (ltr or rtl).
* @returns  computed value that combines with the resolved direction.
*/
function useDirection(dir) {
	const context = injectConfigProviderContext({ dir: ref("ltr") });
	return computed(() => dir?.value || context.dir?.value || "ltr");
}
// node_modules/reka-ui/dist/shared/useForwardPropsEmits.js
function useForwardPropsEmits(props, emit) {
	const parsedProps = useForwardProps(props);
	const emitsAsProps = emit ? useEmitAsProps(emit) : {};
	return computed(() => ({
		...parsedProps.value,
		...emitsAsProps
	}));
}
/**
* The `useId` function generates a unique identifier using a provided deterministic ID,
* a configured `<ConfigProvider>` ID source, Vue's native `useId`, or a fallback counter.
* @param {string | null | undefined} [deterministicId] - The `useId` function you provided takes an
* optional parameter `deterministicId`, which can be a string, null, or undefined. If
* `deterministicId` is provided, the function will return it. Otherwise, it will generate an id using
* the configured ID source.
*/
function useId$1(deterministicId, prefix = "reka") {
	let id;
	const configProviderContext = injectConfigProviderContext({ useId: void 0 });
	if (configProviderContext.useId) id = configProviderContext.useId();
	else id = useId?.();
	return prefix ? `${prefix}-${id}` : id;
}
// node_modules/reka-ui/dist/shared/useSize.js
function useSize(element) {
	const size = ref();
	return {
		width: computed(() => size.value?.width ?? 0),
		height: computed(() => size.value?.height ?? 0)
	};
}
// node_modules/reka-ui/dist/DismissableLayer/utils.js
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
function isElement(node) {
	if (typeof node !== "object" || node === null) return false;
	const ownerWindow = node.ownerDocument?.defaultView;
	return typeof Element !== "undefined" && node instanceof Element || !!ownerWindow && node instanceof ownerWindow.Element;
}
function isLayerExist(layerElement, targetElement) {
	if (!isElement(targetElement)) return false;
	if (layerElement.contains(targetElement)) return true;
	const targetLayer = targetElement.closest("[data-dismissable-layer]");
	const mainLayer = layerElement.dataset.dismissableLayer === "" ? layerElement : layerElement.querySelector("[data-dismissable-layer]");
	const nodeList = Array.from(layerElement.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
	if (targetLayer && (mainLayer === targetLayer || nodeList.indexOf(mainLayer) < nodeList.indexOf(targetLayer))) return true;
	else return false;
}
/**
* Listens for `pointerdown` outside a DOM subtree. We use `pointerdown` rather than `pointerup`
* to mimic layer dismissing behaviour present in OS.
* Returns props to pass to the node we want to check for outside events.
*/
function usePointerDownOutside(onPointerDownOutside, element, enabled = true) {
	const isPointerInsideDOMTree = ref(false);
	const handleClickRef = ref(() => {});
	watchEffect((cleanupFn) => {
		if (!isClient || !toValue(enabled)) return;
		const ownerDocument = element?.value?.ownerDocument ?? globalThis.document;
		const handlePointerDown = async (event) => {
			const target = event.target;
			if (!element?.value || !target) return;
			if (isLayerExist(element.value, target)) {
				ownerDocument.removeEventListener("click", handleClickRef.value);
				isPointerInsideDOMTree.value = false;
				return;
			}
			if (event.target && !isPointerInsideDOMTree.value) {
				const eventDetail = { originalEvent: event };
				function handleAndDispatchPointerDownOutsideEvent() {
					handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, onPointerDownOutside, eventDetail);
				}
				/**
				* On touch devices, we need to wait for a click event because browsers implement
				* a ~350ms delay between the time the user stops touching the display and when the
				* browser executes events. We need to ensure we don't reactivate pointer-events within
				* this timeframe otherwise the browser may execute events that should have been prevented.
				*
				* Additionally, this also lets us deal automatically with cancellations when a click event
				* isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
				*
				* This is why we also continuously remove the previous listener, because we cannot be
				* certain that it was raised, and therefore cleaned-up.
				*/
				if (event.pointerType === "touch") {
					ownerDocument.removeEventListener("click", handleClickRef.value);
					handleClickRef.value = handleAndDispatchPointerDownOutsideEvent;
					ownerDocument.addEventListener("click", handleClickRef.value, { once: true });
				} else handleAndDispatchPointerDownOutsideEvent();
			} else ownerDocument.removeEventListener("click", handleClickRef.value);
			isPointerInsideDOMTree.value = false;
		};
		/**
		* if this hook executes in a component that mounts via a `pointerdown` event, the event
		* would bubble up to the document and trigger a `pointerDownOutside` event. We avoid
		* this by delaying the event listener registration on the document.
		* This is how the DOM works, ie:
		* ```
		* button.addEventListener('pointerdown', () => {
		*   console.log('I will log');
		*   document.addEventListener('pointerdown', () => {
		*     console.log('I will also log');
		*   })
		* });
		*/
		const timerId = (void 0).setTimeout(() => {
			ownerDocument.addEventListener("pointerdown", handlePointerDown);
		}, 0);
		cleanupFn(() => {
			(void 0).clearTimeout(timerId);
			ownerDocument.removeEventListener("pointerdown", handlePointerDown);
			ownerDocument.removeEventListener("click", handleClickRef.value);
		});
	});
	return { onPointerDownCapture: () => {
		if (!toValue(enabled)) return;
		isPointerInsideDOMTree.value = true;
	} };
}
/**
* Listens for when focus happens outside a DOM subtree.
* Returns props to pass to the root (node) of the subtree we want to check.
*/
function useFocusOutside(onFocusOutside, element, enabled = true) {
	const isFocusInsideDOMTree = ref(false);
	watchEffect((cleanupFn) => {
		if (!isClient || !toValue(enabled)) return;
		const ownerDocument = element?.value?.ownerDocument ?? globalThis.document;
		const handleFocus = async (event) => {
			if (!element?.value) return;
			await nextTick();
			await nextTick();
			const target = event.target;
			if (!element.value || !target || isLayerExist(element.value, target)) return;
			if (event.target && !isFocusInsideDOMTree.value) handleAndDispatchCustomEvent(FOCUS_OUTSIDE, onFocusOutside, { originalEvent: event });
		};
		ownerDocument.addEventListener("focusin", handleFocus);
		cleanupFn(() => ownerDocument.removeEventListener("focusin", handleFocus));
	});
	return {
		onFocusCapture: () => {
			if (!toValue(enabled)) return;
			isFocusInsideDOMTree.value = true;
		},
		onBlurCapture: () => {
			if (!toValue(enabled)) return;
			isFocusInsideDOMTree.value = false;
		}
	};
}
// node_modules/reka-ui/dist/DismissableLayer/context.js
var context = /*#__PURE__*/ reactive({
	layersRoot: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
});
// node_modules/reka-ui/dist/DismissableLayer/DismissableLayer.js
var DismissableLayer_default = /* @__PURE__ */ defineComponent({
	__name: "DismissableLayer",
	props: {
		disableOutsidePointerEvents: {
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
		"interactOutside",
		"dismiss"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { forwardRef, currentElement: layerElement } = useForwardExpose();
		const ownerDocument = computed(() => layerElement.value?.ownerDocument ?? globalThis.document);
		const layers = computed(() => context.layersRoot);
		const index = computed(() => {
			return layerElement.value ? Array.from(layers.value).indexOf(layerElement.value) : -1;
		});
		const isBodyPointerEventsDisabled = computed(() => {
			return context.layersWithOutsidePointerEventsDisabled.size > 0;
		});
		const isPointerEventsEnabled = computed(() => {
			const localLayers = Array.from(layers.value);
			const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
			const highestLayerWithOutsidePointerEventsDisabledIndex = localLayers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
			return index.value >= highestLayerWithOutsidePointerEventsDisabledIndex;
		});
		const pointerDownOutside = usePointerDownOutside(async (event) => {
			const isPointerDownOnBranch = [...context.branches].some((branch) => branch?.contains(event.target));
			if (!props.present || !isPointerEventsEnabled.value || isPointerDownOnBranch) return;
			emits("pointerDownOutside", event);
			emits("interactOutside", event);
			await nextTick();
			if (!event.defaultPrevented) emits("dismiss");
		}, layerElement, () => props.present);
		const focusOutside = useFocusOutside((event) => {
			const isFocusInBranch = [...context.branches].some((branch) => branch?.contains(event.target));
			if (!props.present || isFocusInBranch) return;
			emits("focusOutside", event);
			emits("interactOutside", event);
			if (!event.defaultPrevented) emits("dismiss");
		}, layerElement);
		onKeyStroke("Escape", (event) => {
			if (!props.present) return;
			if (!(index.value === layers.value.size - 1)) return;
			emits("escapeKeyDown", event);
			if (!event.defaultPrevented) emits("dismiss");
		}, { target: () => ownerDocument.value?.defaultView ?? globalThis.window });
		watch([
			layerElement,
			() => props.disableOutsidePointerEvents,
			() => props.present
		], ([element, disableOutsidePointerEvents, present], _, onCleanup) => {
			if (!element || !present) return;
			if (disableOutsidePointerEvents) {
				const doc = element.ownerDocument;
				acquireBodyPointerEvents(doc, element);
				context.layersWithOutsidePointerEventsDisabled.add(element);
				onCleanup(() => {
					context.layersWithOutsidePointerEventsDisabled.delete(element);
					releaseBodyPointerEvents(doc, element);
				});
			}
		}, { immediate: true });
		watch([layerElement, () => props.present], ([element, present], _, onCleanup) => {
			if (!element || !present) return;
			layers.value.add(element);
			onCleanup(() => {
				layers.value.delete(element);
			});
		}, { immediate: true });
		watchEffect((cleanupFn) => {
			cleanupFn(() => {
				if (!layerElement.value) return;
				layers.value.delete(layerElement.value);
				context.layersWithOutsidePointerEventsDisabled.delete(layerElement.value);
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref: unref(forwardRef),
				"as-child": __props.asChild,
				as: __props.as,
				"data-dismissable-layer": "",
				style: normalizeStyle({ pointerEvents: isBodyPointerEventsDisabled.value ? isPointerEventsEnabled.value ? "auto" : "none" : void 0 }),
				onFocusCapture: unref(focusOutside).onFocusCapture,
				onBlurCapture: unref(focusOutside).onBlurCapture,
				onPointerdownCapture: unref(pointerDownOutside).onPointerDownCapture
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"as-child",
				"as",
				"style",
				"onFocusCapture",
				"onBlurCapture",
				"onPointerdownCapture"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Popper/PopperRoot.js
var [injectPopperRootContext, providePopperRootContext] = /*#__PURE__*/ createContext("PopperRoot");
var PopperRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PopperRoot",
	setup(__props) {
		const anchor = ref();
		providePopperRootContext({
			anchor,
			onAnchorChange: (element) => anchor.value = element
		});
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
});
// node_modules/reka-ui/dist/Popper/PopperAnchor.js
var PopperAnchor_default = /* @__PURE__ */ defineComponent({
	__name: "PopperAnchor",
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
		const { forwardRef, currentElement } = useForwardExpose();
		const rootContext = injectPopperRootContext();
		watchPostEffect(() => {
			rootContext.onAnchorChange(props.reference ?? currentElement.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref: unref(forwardRef),
				as: __props.as,
				"as-child": __props.asChild
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["as", "as-child"]);
		};
	}
});
// node_modules/reka-ui/dist/component/Arrow.js
var _hoisted_1$1 = {
	key: 0,
	d: "M0 0L6 6L12 0"
};
var _hoisted_2 = {
	key: 1,
	d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
};
var Arrow_default = /* @__PURE__ */ defineComponent({
	__name: "Arrow",
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
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				width: __props.width,
				height: __props.height,
				viewBox: __props.asChild ? void 0 : "0 0 12 6",
				preserveAspectRatio: __props.asChild ? void 0 : "none"
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [!__props.rounded ? (openBlock(), createElementBlock("path", _hoisted_1$1)) : (openBlock(), createElementBlock("path", _hoisted_2))])]),
				_: 3
			}, 16, [
				"width",
				"height",
				"viewBox",
				"preserveAspectRatio"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Popper/utils.js
function isNotNull(value) {
	return value !== null;
}
function transformOrigin(options) {
	return {
		name: "transformOrigin",
		options,
		fn(data) {
			const { placement, rects, middlewareData } = data;
			const isArrowHidden = middlewareData.arrow?.centerOffset !== 0;
			const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
			const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
			const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
			const noArrowAlignX = {
				start: options.dir === "rtl" ? "100%" : "0%",
				center: "50%",
				end: options.dir === "rtl" ? "0%" : "100%"
			}[placedAlign];
			const noArrowAlignY = {
				start: "0%",
				center: "50%",
				end: "100%"
			}[placedAlign];
			const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
			const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
			let x = "";
			let y = "";
			if (placedSide === "bottom") {
				x = isArrowHidden ? noArrowAlignX : `${arrowXCenter}px`;
				y = `${-arrowHeight}px`;
			} else if (placedSide === "top") {
				x = isArrowHidden ? noArrowAlignX : `${arrowXCenter}px`;
				y = `${rects.floating.height + arrowHeight}px`;
			} else if (placedSide === "right") {
				x = `${-arrowHeight}px`;
				y = isArrowHidden ? noArrowAlignY : `${arrowYCenter}px`;
			} else if (placedSide === "left") {
				x = `${rects.floating.width + arrowHeight}px`;
				y = isArrowHidden ? noArrowAlignY : `${arrowYCenter}px`;
			}
			return { data: {
				x,
				y
			} };
		}
	};
}
function getSideAndAlignFromPlacement(placement) {
	const [side, align = "center"] = placement.split("-");
	return [side, align];
}
// node_modules/reka-ui/dist/Popper/PopperContent.js
var _hoisted_1 = ["dir"];
var PopperContentPropsDefaultValue = {
	side: "bottom",
	sideOffset: 0,
	sideFlip: true,
	align: "center",
	alignOffset: 0,
	alignFlip: true,
	arrowPadding: 0,
	hideShiftedArrow: true,
	avoidCollisions: true,
	collisionBoundary: () => [],
	collisionPadding: 0,
	sticky: "partial",
	hideWhenDetached: false,
	positionStrategy: "fixed",
	updatePositionStrategy: "optimized",
	prioritizePosition: false
};
var [injectPopperContentContext, providePopperContentContext] = /*#__PURE__*/ createContext("PopperContent");
var PopperContent_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PopperContent",
	props: /* @__PURE__ */ mergeDefaults({
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
		}
	}, { ...PopperContentPropsDefaultValue }),
	emits: ["placed"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectPopperRootContext();
		const { forwardRef, currentElement: contentElement } = useForwardExpose();
		const dir = useDirection(computed(() => props.dir));
		const floatingRef = ref();
		const arrow$1 = ref();
		const { width: arrowWidth, height: arrowHeight } = useSize();
		const desiredPlacement = computed(() => props.side + (props.align !== "center" ? `-${props.align}` : ""));
		const collisionPadding = computed(() => {
			return typeof props.collisionPadding === "number" ? props.collisionPadding : {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				...props.collisionPadding
			};
		});
		const boundary = computed(() => {
			return Array.isArray(props.collisionBoundary) ? props.collisionBoundary : [props.collisionBoundary];
		});
		const detectOverflowOptions = computed(() => {
			return {
				padding: collisionPadding.value,
				boundary: boundary.value.filter(isNotNull),
				altBoundary: boundary.value.length > 0
			};
		});
		const flipOptions = computed(() => {
			return {
				mainAxis: props.sideFlip,
				crossAxis: props.alignFlip
			};
		});
		const computedMiddleware = computed(() => {
			return [
				offset({
					mainAxis: props.sideOffset + arrowHeight.value,
					alignmentAxis: props.alignOffset
				}),
				props.prioritizePosition && props.avoidCollisions && flip({
					...detectOverflowOptions.value,
					...flipOptions.value
				}),
				props.avoidCollisions && shift({
					mainAxis: true,
					crossAxis: !!props.prioritizePosition,
					limiter: props.sticky === "partial" ? limitShift() : void 0,
					...detectOverflowOptions.value
				}),
				!props.prioritizePosition && props.avoidCollisions && flip({
					...detectOverflowOptions.value,
					...flipOptions.value
				}),
				size({
					...detectOverflowOptions.value,
					apply: ({ elements, rects, availableWidth, availableHeight }) => {
						const { width: anchorWidth, height: anchorHeight } = rects.reference;
						const contentStyle = elements.floating.style;
						contentStyle.setProperty("--reka-popper-available-width", `${availableWidth}px`);
						contentStyle.setProperty("--reka-popper-available-height", `${availableHeight}px`);
						contentStyle.setProperty("--reka-popper-anchor-width", `${anchorWidth}px`);
						contentStyle.setProperty("--reka-popper-anchor-height", `${anchorHeight}px`);
					}
				}),
				arrow$1.value && arrow({
					element: arrow$1.value,
					padding: props.arrowPadding
				}),
				transformOrigin({
					arrowWidth: arrowWidth.value,
					arrowHeight: arrowHeight.value,
					dir: dir.value
				}),
				props.hideWhenDetached && hide({
					strategy: "referenceHidden",
					...detectOverflowOptions.value
				})
			];
		});
		const reference = computed(() => props.reference ?? rootContext.anchor.value);
		const { floatingStyles, placement, isPositioned, middlewareData, update } = useFloating(reference, floatingRef, {
			strategy: props.positionStrategy,
			placement: desiredPlacement,
			whileElementsMounted: (...args) => {
				return autoUpdate(...args, {
					layoutShift: !props.disableUpdateOnLayoutShift,
					animationFrame: props.updatePositionStrategy === "always"
				});
			},
			middleware: computedMiddleware
		});
		const placedSide = computed(() => getSideAndAlignFromPlacement(placement.value)[0]);
		const placedAlign = computed(() => getSideAndAlignFromPlacement(placement.value)[1]);
		watchPostEffect(() => {
			if (isPositioned.value) emits("placed");
		});
		const shouldHideArrow = computed(() => {
			const cannotCenterArrow = middlewareData.value.arrow?.centerOffset !== 0;
			return props.hideShiftedArrow && cannotCenterArrow;
		});
		const contentZIndex = ref("");
		watchEffect(() => {
			if (contentElement.value) contentZIndex.value = (void 0).getComputedStyle(contentElement.value).zIndex;
		});
		providePopperContentContext({
			placedSide,
			onArrowChange: (element) => arrow$1.value = element,
			arrowX: computed(() => middlewareData.value.arrow?.x ?? 0),
			arrowY: computed(() => middlewareData.value.arrow?.y ?? 0),
			shouldHideArrow
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "floatingRef",
				ref: floatingRef,
				"data-reka-popper-content-wrapper": "",
				dir: unref(dir),
				style: normalizeStyle({
					...unref(floatingStyles),
					transform: unref(isPositioned) ? unref(floatingStyles).transform : "translate(0, -200%)",
					minWidth: "max-content",
					zIndex: contentZIndex.value,
					["--reka-popper-transform-origin"]: [unref(middlewareData).transformOrigin?.x, unref(middlewareData).transformOrigin?.y].join(" "),
					...unref(middlewareData).hide?.referenceHidden && {
						visibility: "hidden",
						pointerEvents: "none"
					}
				})
			}, [props.memoDependencies ? withMemo([
				props.asChild,
				props.as,
				placedSide.value,
				placedAlign.value,
				unref(isPositioned),
				...Object.values(_ctx.$attrs),
				...props.memoDependencies
			], () => (openBlock(), createBlock(unref(Primitive), mergeProps({
				key: 0,
				ref: unref(forwardRef)
			}, _ctx.$attrs, {
				"as-child": props.asChild,
				as: props.as,
				"data-side": placedSide.value,
				"data-align": placedAlign.value,
				style: { animation: !unref(isPositioned) ? "none" : void 0 }
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"as-child",
				"as",
				"data-side",
				"data-align",
				"style"
			])), _cache, 0) : (openBlock(), createBlock(unref(Primitive), mergeProps({
				key: 1,
				ref: unref(forwardRef)
			}, _ctx.$attrs, {
				"as-child": props.asChild,
				as: props.as,
				"data-side": placedSide.value,
				"data-align": placedAlign.value,
				dir: unref(dir),
				style: { animation: !unref(isPositioned) ? "none" : void 0 }
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"as-child",
				"as",
				"data-side",
				"data-align",
				"dir",
				"style"
			]))], 12, _hoisted_1);
		};
	}
});
// node_modules/reka-ui/dist/Popper/PopperArrow.js
var OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
};
var PopperArrow_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "PopperArrow",
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
			required: false,
			default: "svg"
		}
	},
	setup(__props) {
		const { forwardRef } = useForwardExpose();
		const contentContext = injectPopperContentContext();
		const baseSide = computed(() => OPPOSITE_SIDE[contentContext.placedSide.value]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", {
				ref: (el) => {
					unref(contentContext).onArrowChange(el ?? void 0);
				},
				style: normalizeStyle({
					position: "absolute",
					left: unref(contentContext).arrowX?.value ? `${unref(contentContext).arrowX?.value}px` : void 0,
					top: unref(contentContext).arrowY?.value ? `${unref(contentContext).arrowY?.value}px` : void 0,
					[baseSide.value]: 0,
					transformOrigin: {
						top: "",
						right: "0 0",
						bottom: "center 0",
						left: "100% 0"
					}[unref(contentContext).placedSide.value],
					transform: {
						top: "translateY(100%)",
						right: "translateY(50%) rotate(90deg) translateX(-50%)",
						bottom: `rotate(180deg)`,
						left: "translateY(50%) rotate(-90deg) translateX(50%)"
					}[unref(contentContext).placedSide.value],
					visibility: unref(contentContext).shouldHideArrow.value ? "hidden" : void 0
				})
			}, [createVNode(Arrow_default, mergeProps(_ctx.$attrs, {
				ref: unref(forwardRef),
				style: { display: "block" },
				as: __props.as,
				"as-child": __props.asChild,
				rounded: __props.rounded,
				width: __props.width,
				height: __props.height
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"as",
				"as-child",
				"rounded",
				"width",
				"height"
			])], 4);
		};
	}
});
// node_modules/@nuxt/ui/dist/runtime/composables/useKbd.js
var kbdKeysMap = {
	meta: "",
	ctrl: "",
	alt: "",
	win: "⊞",
	command: "⌘",
	shift: "⇧",
	control: "⌃",
	option: "⌥",
	enter: "↵",
	delete: "⌦",
	backspace: "⌫",
	escape: "Esc",
	tab: "⇥",
	capslock: "⇪",
	arrowup: "↑",
	arrowright: "→",
	arrowdown: "↓",
	arrowleft: "←",
	pageup: "⇞",
	pagedown: "⇟",
	home: "↖",
	end: "↘"
};
var kbdKeysPlatformMap = {
	meta: {
		macos: kbdKeysMap.command,
		other: "Ctrl"
	},
	ctrl: {
		macos: kbdKeysMap.control,
		other: "Ctrl"
	},
	alt: {
		macos: kbdKeysMap.option,
		other: "Alt"
	}
};
var _useKbd = () => {
	return { macOS: computed(() => false) };
};
var useSharedKbd = /* @__PURE__ */ createSharedComposable(_useKbd);
function useKbd() {
	const { macOS } = useSharedKbd();
	const mounted = getCurrentInstance() ? useMounted() : shallowRef(false);
	function getKbdKey(value) {
		if (!value) return;
		if ([
			"meta",
			"alt",
			"ctrl"
		].includes(value)) return mounted.value ? kbdKeysPlatformMap[value][macOS.value ? "macos" : "other"] : " ";
		return kbdKeysMap[value] || value;
	}
	return {
		macOS,
		getKbdKey
	};
}
// node_modules/@nuxt/ui/dist/runtime/composables/usePrefix.js
function usePrefix() {
	const prefix = useAppConfig().ui?.prefix;
	return (classString) => {
		if (!prefix || !classString) return classString;
		return classString.split(/\s+/).filter(Boolean).map((cls) => `${prefix}:${cls}`).join(" ");
	};
}
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fkbd.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fkbd_default = {
	"base": "inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase",
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
			"solid": "",
			"outline": "",
			"soft": "",
			"subtle": ""
		},
		"size": {
			"sm": "h-4 min-w-[16px] text-[10px]",
			"md": "h-5 min-w-[20px] text-[11px]",
			"lg": "h-6 min-w-[24px] text-[12px]"
		}
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": "solid",
			"class": "text-inverted bg-primary"
		},
		{
			"color": "secondary",
			"variant": "solid",
			"class": "text-inverted bg-secondary"
		},
		{
			"color": "success",
			"variant": "solid",
			"class": "text-inverted bg-success"
		},
		{
			"color": "info",
			"variant": "solid",
			"class": "text-inverted bg-info"
		},
		{
			"color": "warning",
			"variant": "solid",
			"class": "text-inverted bg-warning"
		},
		{
			"color": "error",
			"variant": "solid",
			"class": "text-inverted bg-error"
		},
		{
			"color": "primary",
			"variant": "outline",
			"class": "ring ring-inset ring-primary/50 text-primary"
		},
		{
			"color": "secondary",
			"variant": "outline",
			"class": "ring ring-inset ring-secondary/50 text-secondary"
		},
		{
			"color": "success",
			"variant": "outline",
			"class": "ring ring-inset ring-success/50 text-success"
		},
		{
			"color": "info",
			"variant": "outline",
			"class": "ring ring-inset ring-info/50 text-info"
		},
		{
			"color": "warning",
			"variant": "outline",
			"class": "ring ring-inset ring-warning/50 text-warning"
		},
		{
			"color": "error",
			"variant": "outline",
			"class": "ring ring-inset ring-error/50 text-error"
		},
		{
			"color": "primary",
			"variant": "soft",
			"class": "text-primary bg-primary/10"
		},
		{
			"color": "secondary",
			"variant": "soft",
			"class": "text-secondary bg-secondary/10"
		},
		{
			"color": "success",
			"variant": "soft",
			"class": "text-success bg-success/10"
		},
		{
			"color": "info",
			"variant": "soft",
			"class": "text-info bg-info/10"
		},
		{
			"color": "warning",
			"variant": "soft",
			"class": "text-warning bg-warning/10"
		},
		{
			"color": "error",
			"variant": "soft",
			"class": "text-error bg-error/10"
		},
		{
			"color": "primary",
			"variant": "subtle",
			"class": "text-primary ring ring-inset ring-primary/25 bg-primary/10"
		},
		{
			"color": "secondary",
			"variant": "subtle",
			"class": "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10"
		},
		{
			"color": "success",
			"variant": "subtle",
			"class": "text-success ring ring-inset ring-success/25 bg-success/10"
		},
		{
			"color": "info",
			"variant": "subtle",
			"class": "text-info ring ring-inset ring-info/25 bg-info/10"
		},
		{
			"color": "warning",
			"variant": "subtle",
			"class": "text-warning ring ring-inset ring-warning/25 bg-warning/10"
		},
		{
			"color": "error",
			"variant": "subtle",
			"class": "text-error ring ring-inset ring-error/25 bg-error/10"
		},
		{
			"color": "neutral",
			"variant": "solid",
			"class": "text-inverted bg-inverted"
		},
		{
			"color": "neutral",
			"variant": "outline",
			"class": "ring ring-inset ring-accented text-default bg-default"
		},
		{
			"color": "neutral",
			"variant": "soft",
			"class": "text-default bg-elevated"
		},
		{
			"color": "neutral",
			"variant": "subtle",
			"class": "ring ring-inset ring-accented text-default bg-elevated"
		}
	],
	"defaultVariants": {
		"variant": "outline",
		"color": "neutral",
		"size": "md"
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue
var _sfc_main = {
	__name: "UKbd",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false,
			default: "kbd"
		},
		value: {
			type: null,
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
		const props = useComponentProps("kbd", __props);
		const { getKbdKey } = useKbd();
		const appConfig = useAppConfig();
		const prefix = usePrefix();
		const platformKey = computed(() => props.value && Object.hasOwn(kbdKeysPlatformMap, props.value) ? kbdKeysPlatformMap[props.value] : void 0);
		if (platformKey.value) useHead({ script: [{
			key: "ui-kbd-macos",
			innerHTML: `/Macintosh;/.test(navigator.userAgent)&&document.documentElement.classList.add('ui-macos')`,
			tagPosition: "head"
		}] });
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fkbd_default,
			...appConfig.ui?.kbd || {}
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				class: ui.value({
					class: [unref(props).ui?.base, unref(props).class],
					color: unref(props).color,
					variant: unref(props).variant,
					size: unref(props).size
				})
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, () => {
						if (platformKey.value) _push(`<!--[--><span class="${ssrRenderClass(unref(prefix)("hidden in-[.ui-macos]:inline"))}"${_scopeId}>${ssrInterpolate(platformKey.value.macos)}</span><span class="${ssrRenderClass(unref(prefix)("in-[.ui-macos]:hidden"))}"${_scopeId}>${ssrInterpolate(platformKey.value.other)}</span><!--]-->`);
						else _push(`<!--[-->${ssrInterpolate(unref(getKbdKey)(unref(props).value))}<!--]-->`);
					}, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default", {}, () => [platformKey.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [createVNode("span", { class: unref(prefix)("hidden in-[.ui-macos]:inline") }, toDisplayString(platformKey.value.macos), 3), createVNode("span", { class: unref(prefix)("in-[.ui-macos]:hidden") }, toDisplayString(platformKey.value.other), 3)], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(getKbdKey)(unref(props).value)), 1)], 64))])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { DismissableLayer_default as D, PopperAnchor_default as P, _sfc_main as _, useForwardPropsEmits as a, PopperArrow_default as b, useDirection as c, PopperRoot_default as d, PopperContent_default as e, useKbd as f, PopperContentPropsDefaultValue as g, handleAndDispatchCustomEvent as h, acquireBodyPointerEvents as i, releaseBodyPointerEvents as r, useId$1 as u };
//# sourceMappingURL=Kbd-CdJL61Dx.mjs.map
