import { a as useComponentProps, f as useLocale, b as useAppConfig, g as useForwardProps, s as ssrRenderList$2, r as renderList$2, j as useForwardExpose, P as Primitive, t as tv, Y as injectTooltipProviderContext, h as usePortal, A as createContext, T as Teleport_default, V as VisuallyHidden_default, B as useForwardProps$1 } from '../virtual/entry.mjs';
import { f as useKbd, _ as _sfc_main$3, u as useId$1, P as PopperAnchor_default, a as useForwardPropsEmits, b as PopperArrow_default, d as PopperRoot_default, e as PopperContent_default, D as DismissableLayer_default } from './Kbd-CdJL61Dx.mjs';
import { P as Presence_default } from './Presence-DAl9-TXs.mjs';
import { _ as _sfc_main$2, a as _sfc_main$5, F as FieldGroupReset } from './Button-LO2h-wN-.mjs';
import { X as defu } from '../nitro/nitro.mjs';
import { useVModel, useTimeoutFn, useEventListener } from '@vueuse/core';
import { refAutoReset, tryOnScopeDispose, createEventHook } from '@vueuse/shared';
import { ae as useSlots, J as ssrRenderComponent, S as withCtx, u as unref, T as ssrRenderSlot, U as renderSlot, L as createVNode, y as mergeProps, V as openBlock, W as createBlock, $ as createCommentVNode, F as Fragment, v as defineComponent, a8 as ssrInterpolate, ac as toDisplayString, p as computed, Y as normalizeProps, Z as guardReactiveProps, a7 as createTextVNode, _ as toRefs, j as toRef, aa as ssrRenderClass, D as watch, aq as toHandlers, M as resolveDynamicComponent, k as ref, ad as withModifiers, w as watchEffect, Q as useSSRContext } from '../_/vue.mjs';

// node_modules/reka-ui/dist/shared/useGraceArea.js
function useGraceArea(triggerElement, containerElement) {
	const isPointerInTransit = refAutoReset(false, 300);
	tryOnScopeDispose(() => {
		isPointerInTransit.value = false;
	});
	const pointerGraceArea = ref(null);
	const pointerExit = createEventHook();
	function handleRemoveGraceArea() {
		pointerGraceArea.value = null;
		isPointerInTransit.value = false;
	}
	function handleCreateGraceArea(event, hoverTarget) {
		if (!hoverTarget) return;
		const currentTarget = event.currentTarget;
		const exitPoint = {
			x: event.clientX,
			y: event.clientY
		};
		const paddedExitPoints = getPaddedExitPoints(exitPoint, getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect()), 1);
		const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
		const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
		pointerGraceArea.value = graceArea;
		isPointerInTransit.value = true;
	}
	watchEffect((cleanupFn) => {
		if (triggerElement.value && containerElement.value) {
			const trigger = triggerElement.value;
			const container = containerElement.value;
			const handleTriggerLeave = (event) => handleCreateGraceArea(event, container);
			const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
			trigger.addEventListener("pointerleave", handleTriggerLeave);
			container.addEventListener("pointerleave", handleContentLeave);
			cleanupFn(() => {
				trigger.removeEventListener("pointerleave", handleTriggerLeave);
				container.removeEventListener("pointerleave", handleContentLeave);
			});
		}
	});
	watchEffect((cleanupFn) => {
		if (pointerGraceArea.value) {
			const handleTrackPointerGrace = (event) => {
				if (!pointerGraceArea.value || !(event.target instanceof Element)) return;
				const target = event.target;
				const pointerPosition = {
					x: event.clientX,
					y: event.clientY
				};
				const hasEnteredTarget = triggerElement.value?.contains(target) || containerElement.value?.contains(target);
				const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea.value);
				const isAnotherGraceAreaTrigger = !!target.closest("[data-grace-area-trigger]");
				if (hasEnteredTarget) handleRemoveGraceArea();
				else if (isPointerOutsideGraceArea || isAnotherGraceAreaTrigger) {
					handleRemoveGraceArea();
					pointerExit.trigger();
				}
			};
			const ownerDocument = triggerElement.value?.ownerDocument;
			ownerDocument?.addEventListener("pointermove", handleTrackPointerGrace);
			cleanupFn(() => ownerDocument?.removeEventListener("pointermove", handleTrackPointerGrace));
		}
	});
	return {
		isPointerInTransit,
		onPointerExit: pointerExit.on
	};
}
function getExitSideFromRect(point, rect) {
	const top = Math.abs(rect.top - point.y);
	const bottom = Math.abs(rect.bottom - point.y);
	const right = Math.abs(rect.right - point.x);
	const left = Math.abs(rect.left - point.x);
	switch (Math.min(top, bottom, right, left)) {
		case left: return "left";
		case right: return "right";
		case top: return "top";
		case bottom: return "bottom";
		default: throw new Error("unreachable");
	}
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
	const paddedExitPoints = [];
	switch (exitSide) {
		case "top":
			paddedExitPoints.push({
				x: exitPoint.x - padding,
				y: exitPoint.y + padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y + padding
			});
			break;
		case "bottom":
			paddedExitPoints.push({
				x: exitPoint.x - padding,
				y: exitPoint.y - padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y - padding
			});
			break;
		case "left":
			paddedExitPoints.push({
				x: exitPoint.x + padding,
				y: exitPoint.y - padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y + padding
			});
			break;
		case "right": paddedExitPoints.push({
			x: exitPoint.x - padding,
			y: exitPoint.y - padding
		}, {
			x: exitPoint.x - padding,
			y: exitPoint.y + padding
		});
	}
	return paddedExitPoints;
}
function getPointsFromRect(rect) {
	const { top, right, bottom, left } = rect;
	return [
		{
			x: left,
			y: top
		},
		{
			x: right,
			y: top
		},
		{
			x: right,
			y: bottom
		},
		{
			x: left,
			y: bottom
		}
	];
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
function getHull(points) {
	const newPoints = points.slice();
	newPoints.sort((a, b) => {
		if (a.x < b.x) return -1;
		else if (a.x > b.x) return 1;
		else if (a.y < b.y) return -1;
		else if (a.y > b.y) return 1;
		else return 0;
	});
	return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
	if (points.length <= 1) return points.slice();
	const upperHull = [];
	for (let i = 0; i < points.length; i++) {
		const p = points[i];
		while (upperHull.length >= 2) {
			const q = upperHull.at(-1);
			const r = upperHull[upperHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
			else break;
		}
		upperHull.push(p);
	}
	upperHull.pop();
	const lowerHull = [];
	for (let i = points.length - 1; i >= 0; i--) {
		const p = points[i];
		while (lowerHull.length >= 2) {
			const q = lowerHull.at(-1);
			const r = lowerHull[lowerHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
			else break;
		}
		lowerHull.push(p);
	}
	lowerHull.pop();
	if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
	else return upperHull.concat(lowerHull);
}
// node_modules/reka-ui/dist/Pagination/PaginationEllipsis.js
var PaginationEllipsis_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationEllipsis",
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
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "data-type": "ellipsis" }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[0] || (_cache[0] = createTextVNode("…", -1))])]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Pagination/PaginationRoot.js
var [injectPaginationRootContext, providePaginationRootContext] = /*#__PURE__*/ createContext("PaginationRoot");
var PaginationRoot_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationRoot",
	props: {
		page: {
			type: Number,
			required: false
		},
		defaultPage: {
			type: Number,
			required: false,
			default: 1
		},
		itemsPerPage: {
			type: Number,
			required: true
		},
		total: {
			type: Number,
			required: false,
			default: 0
		},
		siblingCount: {
			type: Number,
			required: false,
			default: 2
		},
		disabled: {
			type: Boolean,
			required: false
		},
		showEdges: {
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
			required: false,
			default: "nav"
		}
	},
	emits: ["update:page"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { siblingCount, disabled, showEdges } = toRefs(props);
		useForwardExpose();
		const page = useVModel(props, "page", emits, {
			defaultValue: props.defaultPage,
			passive: props.page === void 0
		});
		const pageCount = computed(() => Math.max(1, Math.ceil(props.total / (props.itemsPerPage || 1))));
		providePaginationRootContext({
			page,
			onPageChange(value) {
				page.value = value;
			},
			pageCount,
			siblingCount,
			disabled,
			showEdges
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: __props.as,
				"as-child": __props.asChild
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					page: unref(page),
					pageCount: pageCount.value
				})]),
				_: 3
			}, 8, ["as", "as-child"]);
		};
	}
});
// node_modules/reka-ui/dist/Pagination/PaginationFirst.js
var PaginationFirst_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationFirst",
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
		const rootContext = injectPaginationRootContext();
		useForwardExpose();
		const disabled = computed(() => rootContext.page.value === 1 || rootContext.disabled.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"aria-label": "First Page",
				type: __props.as === "button" ? "button" : void 0,
				disabled: disabled.value,
				onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && unref(rootContext).onPageChange(1))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = createTextVNode("First page", -1))])]),
				_: 3
			}, 16, ["type", "disabled"]);
		};
	}
});
// node_modules/reka-ui/dist/Pagination/PaginationLast.js
var PaginationLast_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationLast",
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
		const rootContext = injectPaginationRootContext();
		useForwardExpose();
		const disabled = computed(() => rootContext.page.value === rootContext.pageCount.value || rootContext.disabled.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"aria-label": "Last Page",
				type: __props.as === "button" ? "button" : void 0,
				disabled: disabled.value,
				onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && unref(rootContext).onPageChange(unref(rootContext).pageCount.value))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = createTextVNode("Last page", -1))])]),
				_: 3
			}, 16, ["type", "disabled"]);
		};
	}
});
// node_modules/reka-ui/dist/Pagination/utils.js
function range(start, end) {
	const length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
}
function transform(items) {
	return items.map((value) => {
		if (typeof value === "number") return {
			type: "page",
			value
		};
		return { type: "ellipsis" };
	});
}
var ELLIPSIS = "ellipsis";
function getRange(currentPage, pageCount, siblingCount, showEdges) {
	const firstPageIndex = 1;
	const lastPageIndex = pageCount;
	const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPageIndex);
	const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPageIndex);
	if (showEdges) {
		const itemCount = Math.min(2 * siblingCount + 5, pageCount) - 2;
		const showLeftEllipsis = leftSiblingIndex > 3 && Math.abs(lastPageIndex - itemCount - firstPageIndex + 1) > 2 && Math.abs(leftSiblingIndex - firstPageIndex) > 2;
		const showRightEllipsis = rightSiblingIndex < lastPageIndex - 2 && Math.abs(lastPageIndex - itemCount) > 2 && Math.abs(lastPageIndex - rightSiblingIndex) > 2;
		if (!showLeftEllipsis && showRightEllipsis) return [
			...range(1, itemCount),
			ELLIPSIS,
			lastPageIndex
		];
		if (showLeftEllipsis && !showRightEllipsis) return [
			firstPageIndex,
			ELLIPSIS,
			...range(lastPageIndex - itemCount + 1, lastPageIndex)
		];
		if (showLeftEllipsis && showRightEllipsis) return [
			firstPageIndex,
			ELLIPSIS,
			...range(leftSiblingIndex, rightSiblingIndex),
			ELLIPSIS,
			lastPageIndex
		];
		return range(firstPageIndex, lastPageIndex);
	} else {
		const itemCount = siblingCount * 2 + 1;
		if (pageCount < itemCount) return range(1, lastPageIndex);
		else if (currentPage <= siblingCount + 1) return range(firstPageIndex, itemCount);
		else if (pageCount - currentPage <= siblingCount) return range(pageCount - itemCount + 1, lastPageIndex);
		else return range(leftSiblingIndex, rightSiblingIndex);
	}
}
// node_modules/reka-ui/dist/Pagination/PaginationList.js
var PaginationList_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationList",
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
		const rootContext = injectPaginationRootContext();
		const transformedRange = computed(() => {
			return transform(getRange(rootContext.page.value, rootContext.pageCount.value, rootContext.siblingCount.value, rootContext.showEdges.value));
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { items: transformedRange.value })]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Pagination/PaginationListItem.js
var PaginationListItem_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationListItem",
	props: {
		value: {
			type: Number,
			required: true
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
		useForwardExpose();
		const rootContext = injectPaginationRootContext();
		const isSelected = computed(() => rootContext.page.value === props.value);
		const disabled = computed(() => rootContext.disabled.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"data-type": "page",
				"aria-label": `Page ${__props.value}`,
				"aria-current": isSelected.value ? "page" : void 0,
				"data-selected": isSelected.value ? "true" : void 0,
				disabled: disabled.value,
				type: __props.as === "button" ? "button" : void 0,
				onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && unref(rootContext).onPageChange(__props.value))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(__props.value), 1)])]),
				_: 3
			}, 16, [
				"aria-label",
				"aria-current",
				"data-selected",
				"disabled",
				"type"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Pagination/PaginationNext.js
var PaginationNext_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationNext",
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
		const rootContext = injectPaginationRootContext();
		const disabled = computed(() => rootContext.page.value === rootContext.pageCount.value || rootContext.disabled.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"aria-label": "Next Page",
				type: __props.as === "button" ? "button" : void 0,
				disabled: disabled.value,
				onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && unref(rootContext).onPageChange(unref(rootContext).page.value + 1))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = createTextVNode("Next page", -1))])]),
				_: 3
			}, 16, ["type", "disabled"]);
		};
	}
});
// node_modules/reka-ui/dist/Pagination/PaginationPrev.js
var PaginationPrev_default = /* @__PURE__ */ defineComponent({
	__name: "PaginationPrev",
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
		const rootContext = injectPaginationRootContext();
		const disabled = computed(() => rootContext.page.value === 1 || rootContext.disabled.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				"aria-label": "Previous Page",
				type: __props.as === "button" ? "button" : void 0,
				disabled: disabled.value,
				onClick: _cache[0] || (_cache[0] = ($event) => !disabled.value && unref(rootContext).onPageChange(unref(rootContext).page.value - 1))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[1] || (_cache[1] = createTextVNode("Prev page", -1))])]),
				_: 3
			}, 16, ["type", "disabled"]);
		};
	}
});
// node_modules/reka-ui/dist/Tooltip/TooltipArrow.js
var TooltipArrow_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipArrow",
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
			return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Tooltip/utils.js
var TOOLTIP_OPEN = "tooltip.open";
// node_modules/reka-ui/dist/Tooltip/TooltipRoot.js
var [injectTooltipRootContext, provideTooltipRootContext] = /*#__PURE__*/ createContext("TooltipRoot");
var TooltipRoot_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: false,
			default: false
		},
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		delayDuration: {
			type: Number,
			required: false,
			default: void 0
		},
		disableHoverableContent: {
			type: Boolean,
			required: false,
			default: void 0
		},
		disableClosingTrigger: {
			type: Boolean,
			required: false,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: false,
			default: void 0
		},
		ignoreNonKeyboardFocus: {
			type: Boolean,
			required: false,
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		useForwardExpose();
		const providerContext = injectTooltipProviderContext();
		const disableHoverableContent = computed(() => props.disableHoverableContent ?? providerContext.disableHoverableContent.value);
		const disableClosingTrigger = computed(() => props.disableClosingTrigger ?? providerContext.disableClosingTrigger.value);
		const disableTooltip = computed(() => props.disabled ?? providerContext.disabled.value);
		const delayDuration = computed(() => props.delayDuration ?? providerContext.delayDuration.value);
		const ignoreNonKeyboardFocus = computed(() => props.ignoreNonKeyboardFocus ?? providerContext.ignoreNonKeyboardFocus.value);
		const open = useVModel(props, "open", emit, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		watch(open, (isOpen) => {
			if (!providerContext.onClose) return;
			if (isOpen) {
				providerContext.onOpen();
				(void 0).dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
			} else providerContext.onClose();
		});
		const wasOpenDelayedRef = ref(false);
		const trigger = ref();
		const stateAttribute = computed(() => {
			if (!open.value) return "closed";
			return wasOpenDelayedRef.value ? "delayed-open" : "instant-open";
		});
		const { start: startTimer, stop: clearTimer } = useTimeoutFn(() => {
			wasOpenDelayedRef.value = true;
			open.value = true;
		}, delayDuration, { immediate: false });
		function handleOpen() {
			clearTimer();
			wasOpenDelayedRef.value = false;
			open.value = true;
		}
		function handleClose() {
			clearTimer();
			open.value = false;
		}
		function handleDelayedOpen() {
			startTimer();
		}
		provideTooltipRootContext({
			contentId: "",
			open,
			stateAttribute,
			trigger,
			onTriggerChange(el) {
				trigger.value = el;
			},
			onTriggerEnter() {
				if (providerContext.isOpenDelayed.value) handleDelayedOpen();
				else handleOpen();
			},
			onTriggerLeave() {
				if (disableHoverableContent.value) handleClose();
				else clearTimer();
			},
			onOpen: handleOpen,
			onClose: handleClose,
			disableHoverableContent,
			disableClosingTrigger,
			disabled: disableTooltip,
			ignoreNonKeyboardFocus
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Tooltip/TooltipContentImpl.js
var TooltipContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipContentImpl",
	props: {
		ariaLabel: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false,
			default: void 0
		},
		as: {
			type: null,
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
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false,
			default: void 0
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
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false,
			default: void 0
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		}
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectTooltipRootContext();
		const providerContext = injectTooltipProviderContext();
		const { forwardRef, currentElement } = useForwardExpose();
		const ariaLabel = computed(() => props.ariaLabel || currentElement.value?.textContent);
		const popperContentProps = computed(() => {
			const { ariaLabel: _, ...restProps } = props;
			return defu(restProps, providerContext.content.value ?? {}, {
				side: "top",
				sideOffset: 0,
				align: "center",
				avoidCollisions: true,
				collisionBoundary: [],
				collisionPadding: 0,
				arrowPadding: 0,
				sticky: "partial",
				hideWhenDetached: false
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DismissableLayer_default), {
				"as-child": "",
				"disable-outside-pointer-events": false,
				onEscapeKeyDown: _cache[0] || (_cache[0] = ($event) => emits("escapeKeyDown", $event)),
				onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
					if (unref(rootContext).disableClosingTrigger.value && unref(rootContext).trigger.value?.contains(event.target)) event.preventDefault();
					emits("pointerDownOutside", event);
				}),
				onFocusOutside: _cache[2] || (_cache[2] = withModifiers(() => {}, ["prevent"])),
				onDismiss: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onClose())
			}, {
				default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps({
					ref: unref(forwardRef),
					"data-state": unref(rootContext).stateAttribute.value
				}, {
					..._ctx.$attrs,
					...popperContentProps.value
				}, { style: {
					"--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
					"--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
					"--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
					"--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
					"--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
				} }), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(VisuallyHidden_default), {
						id: unref(rootContext).contentId,
						role: "tooltip"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(ariaLabel.value), 1)]),
						_: 1
					}, 8, ["id"])]),
					_: 3
				}, 16, ["data-state"])]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Tooltip/TooltipContentHoverable.js
var TooltipContentHoverable_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipContentHoverable",
	props: {
		ariaLabel: {
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
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
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
		}
	},
	setup(__props) {
		const forwardedProps = useForwardProps$1(__props);
		const { forwardRef, currentElement } = useForwardExpose();
		const { trigger, onClose } = injectTooltipRootContext();
		const providerContext = injectTooltipProviderContext();
		const { isPointerInTransit, onPointerExit } = useGraceArea(trigger, currentElement);
		providerContext.isPointerInTransitRef = isPointerInTransit;
		onPointerExit(() => {
			onClose();
		});
		useEventListener(currentElement, "pointermove", (event) => {
			const content = currentElement.value;
			if (!content || event.pointerType === "touch") return;
			if (content.ownerDocument.elementsFromPoint?.(event.clientX, event.clientY).some((el) => {
				if (content.contains(el)) return false;
				const coveredTrigger = el.closest("[data-grace-area-trigger]");
				return !!coveredTrigger && coveredTrigger !== trigger.value;
			})) onClose();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TooltipContentImpl_default, mergeProps({ ref: unref(forwardRef) }, unref(forwardedProps)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/Tooltip/TooltipContent.js
var TooltipContent_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		ariaLabel: {
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
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
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
		}
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectTooltipRootContext();
		const forwarded = useForwardPropsEmits(props, emits);
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: __props.forceMount || unref(rootContext).open.value }, {
				default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(rootContext).disableHoverableContent.value ? TooltipContentImpl_default : TooltipContentHoverable_default), mergeProps({ ref: unref(forwardRef) }, unref(forwarded)), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16))]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
// node_modules/reka-ui/dist/Tooltip/TooltipPortal.js
var TooltipPortal_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipPortal",
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
// node_modules/reka-ui/dist/Tooltip/TooltipTrigger.js
var TooltipTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipTrigger",
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
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectTooltipRootContext();
		const providerContext = injectTooltipProviderContext();
		rootContext.contentId ||= useId$1(void 0, "reka-tooltip-content");
		const { forwardRef, currentElement: triggerElement } = useForwardExpose();
		const isPointerDown = ref(false);
		const hasPointerMoveOpened = ref(false);
		const tooltipListeners = computed(() => {
			if (rootContext.disabled.value) return {};
			return {
				click: handleClick,
				focus: handleFocus,
				pointermove: handlePointerMove,
				pointerleave: handlePointerLeave,
				pointerdown: handlePointerDown,
				blur: handleBlur
			};
		});
		watch(triggerElement, (el) => {
			rootContext.onTriggerChange(el);
		}, { immediate: true });
		function handlePointerUp() {
			setTimeout(() => {
				isPointerDown.value = false;
			}, 1);
		}
		function handlePointerDown() {
			if (rootContext.open && !rootContext.disableClosingTrigger.value) rootContext.onClose();
			isPointerDown.value = true;
			(void 0).addEventListener("pointerup", handlePointerUp, { once: true });
		}
		function handlePointerMove(event) {
			if (event.pointerType === "touch") return;
			if (!hasPointerMoveOpened.value && !providerContext.isPointerInTransitRef.value) {
				rootContext.onTriggerEnter();
				hasPointerMoveOpened.value = true;
			}
		}
		function handlePointerLeave() {
			rootContext.onTriggerLeave();
			hasPointerMoveOpened.value = false;
		}
		function handleFocus(event) {
			if (isPointerDown.value) return;
			if (rootContext.ignoreNonKeyboardFocus.value && !event.target.matches?.(":focus-visible")) return;
			rootContext.onOpen();
		}
		function handleBlur() {
			rootContext.onClose();
		}
		function handleClick() {
			if (!rootContext.disableClosingTrigger.value) rootContext.onClose();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperAnchor_default), {
				"as-child": "",
				reference: __props.reference ?? unref(triggerElement)
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					"aria-describedby": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
					"data-state": unref(rootContext).stateAttribute.value,
					as: __props.as,
					"as-child": props.asChild,
					"data-grace-area-trigger": ""
				}, toHandlers(tooltipListeners.value)), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"aria-describedby",
					"data-state",
					"as",
					"as-child"
				])]),
				_: 3
			}, 8, ["reference"]);
		};
	}
});
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Ftooltip.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ftooltip_default = { "slots": {
	"content": "flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",
	"arrow": "fill-bg stroke-default",
	"text": "truncate",
	"kbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['·'] not-first-of-type:before:me-0.5",
	"kbdsSize": "sm"
} };
// node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue
var _sfc_main$1 = {
	__name: "UTooltip",
	__ssrInlineRender: true,
	props: {
		text: {
			type: String,
			required: false
		},
		kbds: {
			type: Array,
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
		reference: {
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
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		delayDuration: {
			type: Number,
			required: false
		},
		disableHoverableContent: {
			type: Boolean,
			required: false
		},
		disableClosingTrigger: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		ignoreNonKeyboardFocus: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("tooltip", _props);
		const appConfig = useAppConfig();
		const providerContext = injectTooltipProviderContext();
		const rootProps = useForwardProps(props, [
			"defaultOpen",
			"open",
			"delayDuration",
			"disableHoverableContent",
			"disableClosingTrigger",
			"ignoreNonKeyboardFocus"
		], emits);
		const portalProps = usePortal(toRef(() => props.portal));
		const contentProps = toRef(() => defu(props.content, providerContext.content.value, {
			side: "bottom",
			sideOffset: 8,
			collisionPadding: 8
		}));
		const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
		const { getKbdKey } = useKbd();
		const ariaLabel = computed(() => {
			if (contentProps.value.ariaLabel || slots.content) return contentProps.value.ariaLabel;
			return [props.text, ...(props.kbds || []).map((kbd) => getKbdKey(typeof kbd === "object" ? kbd.value : kbd))].filter(Boolean).join(" ");
		});
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ftooltip_default,
			...appConfig.ui?.tooltip || {}
		})({ side: contentProps.value.side }));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(TooltipRoot_default), mergeProps(unref(rootProps), { disabled: !(unref(props).text || unref(props).kbds?.length || !!slots.content) || unref(props).disabled }, _attrs), {
				default: withCtx(({ open }, _push, _parent, _scopeId) => {
					if (_push) {
						if (!!slots.default || !!unref(props).reference) _push(ssrRenderComponent(unref(TooltipTrigger_default), mergeProps(_ctx.$attrs, {
							"as-child": "",
							reference: unref(props).reference,
							class: unref(props).class
						}), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "default", { open })];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(ssrRenderComponent(unref(TooltipPortal_default), unref(portalProps), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(unref(TooltipContent_default), mergeProps(contentProps.value, {
											"aria-label": ariaLabel.value,
											"data-slot": "content",
											class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
										}), {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													ssrRenderSlot(_ctx.$slots, "content", { ui: ui.value }, () => {
														if (unref(props).text) _push(`<span data-slot="text" class="${ssrRenderClass(ui.value.text({ class: unref(props).ui?.text }))}"${_scopeId}>${ssrInterpolate(unref(props).text)}</span>`);
														else _push(`<!---->`);
														if (unref(props).kbds?.length) {
															_push(`<span data-slot="kbds" class="${ssrRenderClass(ui.value.kbds({ class: unref(props).ui?.kbds }))}"${_scopeId}><!--[-->`);
															ssrRenderList$2(unref(props).kbds, (kbd, index) => {
																_push(ssrRenderComponent(_sfc_main$3, mergeProps({
																	key: index,
																	size: unref(props).ui?.kbdsSize || ui.value.kbdsSize()
																}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent, _scopeId));
															});
															_push(`<!--]--></span>`);
														} else _push(`<!---->`);
													}, _push, _parent, _scopeId);
													if (!!unref(props).arrow) _push(ssrRenderComponent(unref(TooltipArrow_default), mergeProps(arrowProps.value, {
														"data-slot": "arrow",
														class: ui.value.arrow({ class: unref(props).ui?.arrow })
													}), null, _parent, _scopeId));
													else _push(`<!---->`);
												} else return [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [unref(props).text ? (openBlock(), createBlock("span", {
													key: 0,
													"data-slot": "text",
													class: ui.value.text({ class: unref(props).ui?.text })
												}, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), unref(props).kbds?.length ? (openBlock(), createBlock("span", {
													key: 1,
													"data-slot": "kbds",
													class: ui.value.kbds({ class: unref(props).ui?.kbds })
												}, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(props).kbds, (kbd, index) => {
													return openBlock(), createBlock(_sfc_main$3, mergeProps({
														key: index,
														size: unref(props).ui?.kbdsSize || ui.value.kbdsSize()
													}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
												}), 128))], 2)) : createCommentVNode("", true)]), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
													"data-slot": "arrow",
													class: ui.value.arrow({ class: unref(props).ui?.arrow })
												}), null, 16, ["class"])) : createCommentVNode("", true)];
											}),
											_: 2
										}, _parent, _scopeId));
										else return [createVNode(unref(TooltipContent_default), mergeProps(contentProps.value, {
											"aria-label": ariaLabel.value,
											"data-slot": "content",
											class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
										}), {
											default: withCtx(() => [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [unref(props).text ? (openBlock(), createBlock("span", {
												key: 0,
												"data-slot": "text",
												class: ui.value.text({ class: unref(props).ui?.text })
											}, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), unref(props).kbds?.length ? (openBlock(), createBlock("span", {
												key: 1,
												"data-slot": "kbds",
												class: ui.value.kbds({ class: unref(props).ui?.kbds })
											}, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(props).kbds, (kbd, index) => {
												return openBlock(), createBlock(_sfc_main$3, mergeProps({
													key: index,
													size: unref(props).ui?.kbdsSize || ui.value.kbdsSize()
												}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
											}), 128))], 2)) : createCommentVNode("", true)]), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
												"data-slot": "arrow",
												class: ui.value.arrow({ class: unref(props).ui?.arrow })
											}), null, 16, ["class"])) : createCommentVNode("", true)]),
											_: 3
										}, 16, ["aria-label", "class"])];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(FieldGroupReset), null, {
									default: withCtx(() => [createVNode(unref(TooltipContent_default), mergeProps(contentProps.value, {
										"aria-label": ariaLabel.value,
										"data-slot": "content",
										class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
									}), {
										default: withCtx(() => [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [unref(props).text ? (openBlock(), createBlock("span", {
											key: 0,
											"data-slot": "text",
											class: ui.value.text({ class: unref(props).ui?.text })
										}, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), unref(props).kbds?.length ? (openBlock(), createBlock("span", {
											key: 1,
											"data-slot": "kbds",
											class: ui.value.kbds({ class: unref(props).ui?.kbds })
										}, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(props).kbds, (kbd, index) => {
											return openBlock(), createBlock(_sfc_main$3, mergeProps({
												key: index,
												size: unref(props).ui?.kbdsSize || ui.value.kbdsSize()
											}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
										}), 128))], 2)) : createCommentVNode("", true)]), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
											"data-slot": "arrow",
											class: ui.value.arrow({ class: unref(props).ui?.arrow })
										}), null, 16, ["class"])) : createCommentVNode("", true)]),
										_: 3
									}, 16, ["aria-label", "class"])]),
									_: 3
								})];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [!!slots.default || !!unref(props).reference ? (openBlock(), createBlock(unref(TooltipTrigger_default), mergeProps({ key: 0 }, _ctx.$attrs, {
						"as-child": "",
						reference: unref(props).reference,
						class: unref(props).class
					}), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
						_: 2
					}, 1040, ["reference", "class"])) : createCommentVNode("", true), createVNode(unref(TooltipPortal_default), unref(portalProps), {
						default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
							default: withCtx(() => [createVNode(unref(TooltipContent_default), mergeProps(contentProps.value, {
								"aria-label": ariaLabel.value,
								"data-slot": "content",
								class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
							}), {
								default: withCtx(() => [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [unref(props).text ? (openBlock(), createBlock("span", {
									key: 0,
									"data-slot": "text",
									class: ui.value.text({ class: unref(props).ui?.text })
								}, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), unref(props).kbds?.length ? (openBlock(), createBlock("span", {
									key: 1,
									"data-slot": "kbds",
									class: ui.value.kbds({ class: unref(props).ui?.kbds })
								}, [(openBlock(true), createBlock(Fragment, null, renderList$2(unref(props).kbds, (kbd, index) => {
									return openBlock(), createBlock(_sfc_main$3, mergeProps({
										key: index,
										size: unref(props).ui?.kbdsSize || ui.value.kbdsSize()
									}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
								}), 128))], 2)) : createCommentVNode("", true)]), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
									"data-slot": "arrow",
									class: ui.value.arrow({ class: unref(props).ui?.arrow })
								}), null, 16, ["class"])) : createCommentVNode("", true)]),
								_: 3
							}, 16, ["aria-label", "class"])]),
							_: 3
						})]),
						_: 3
					}, 16)];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
// app/components/IconCategory.vue?vue&type=script&setup=true&lang.ts
var IconCategory_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "IconCategory",
	__ssrInlineRender: true,
	props: { item: {} },
	setup(__props) {
		const props = __props;
		const categories = {
			tv: {
				label: "TV",
				icon: "i-lucide-tv"
			},
			ac: {
				label: "Ar-condicionado",
				icon: "i-lucide-air-vent"
			},
			receptor: {
				label: "Receptor",
				icon: "i-lucide-satellite-dish"
			}
		};
		const category = computed(() => categories[props.item.category]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$1, mergeProps({ text: unref(category).label }, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span class="inline-flex shrink-0 rounded text-muted" tabindex="0"${_scopeId}>`);
						_push(ssrRenderComponent(_sfc_main$5, {
							name: unref(category).icon,
							class: "size-4",
							"aria-hidden": "true"
						}, null, _parent, _scopeId));
						_push(`<span class="sr-only"${_scopeId}>${ssrInterpolate(unref(category).label)}</span></span>`);
					} else return [createVNode("span", {
						class: "inline-flex shrink-0 rounded text-muted",
						tabindex: "0"
					}, [createVNode(_sfc_main$5, {
						name: unref(category).icon,
						class: "size-4",
						"aria-hidden": "true"
					}, null, 8, ["name"]), createVNode("span", { class: "sr-only" }, toDisplayString(unref(category).label), 1)])];
				}),
				_: 1
			}, _parent));
		};
	}
});
// app/components/IconCategory.vue
var _sfc_setup$1 = IconCategory_vue_vue_type_script_setup_true_lang_default.setup;
IconCategory_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IconCategory.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var IconCategory_default = Object.assign(IconCategory_vue_vue_type_script_setup_true_lang_default, { __name: "IconCategory" });
// virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fpagination.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpagination_default = { "slots": {
	"root": "",
	"list": "flex items-center gap-1",
	"ellipsis": "pointer-events-none",
	"label": "min-w-5 text-center",
	"first": "",
	"prev": "",
	"item": "",
	"next": "",
	"last": ""
} };
// node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue
var _sfc_main = {
	__name: "UPagination",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		firstIcon: {
			type: null,
			required: false
		},
		prevIcon: {
			type: null,
			required: false
		},
		nextIcon: {
			type: null,
			required: false
		},
		lastIcon: {
			type: null,
			required: false
		},
		ellipsisIcon: {
			type: null,
			required: false
		},
		color: {
			type: null,
			required: false,
			default: "neutral"
		},
		variant: {
			type: null,
			required: false,
			default: "outline"
		},
		activeColor: {
			type: null,
			required: false,
			default: "primary"
		},
		activeVariant: {
			type: null,
			required: false,
			default: "solid"
		},
		showControls: {
			type: Boolean,
			required: false,
			default: true
		},
		size: {
			type: null,
			required: false
		},
		to: {
			type: Function,
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
		defaultPage: {
			type: Number,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		itemsPerPage: {
			type: Number,
			required: false,
			default: 10
		},
		page: {
			type: Number,
			required: false
		},
		showEdges: {
			type: Boolean,
			required: false,
			default: false
		},
		siblingCount: {
			type: Number,
			required: false,
			default: 2
		},
		total: {
			type: Number,
			required: false,
			default: 0
		}
	},
	emits: ["update:page"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("pagination", _props);
		const { dir, t } = useLocale();
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(props, [
			"as",
			"defaultPage",
			"disabled",
			"itemsPerPage",
			"page",
			"showEdges",
			"siblingCount",
			"total"
		], emits);
		const firstIcon = computed(() => props.firstIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft));
		const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft));
		const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight));
		const lastIcon = computed(() => props.lastIcon || (dir.value === "rtl" ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight));
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fpagination_default,
			...appConfig.ui?.pagination || {}
		})());
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(PaginationRoot_default), mergeProps(unref(rootProps), {
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx(({ page, pageCount }, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(PaginationList_default), {
						"data-slot": "list",
						class: ui.value.list({ class: unref(props).ui?.list })
					}, {
						default: withCtx(({ items }, _push, _parent, _scopeId) => {
							if (_push) {
								if (unref(props).showControls || !!slots.first) _push(ssrRenderComponent(unref(PaginationFirst_default), {
									"as-child": "",
									"aria-label": unref(t)("pagination.first"),
									"data-slot": "first",
									class: ui.value.first({ class: unref(props).ui?.first })
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) ssrRenderSlot(_ctx.$slots, "first", {}, () => {
											_push(ssrRenderComponent(_sfc_main$2, {
												color: unref(props).color,
												variant: unref(props).variant,
												size: unref(props).size,
												icon: firstIcon.value,
												to: unref(props).to?.(1)
											}, null, _parent, _scopeId));
										}, _push, _parent, _scopeId);
										else return [renderSlot(_ctx.$slots, "first", {}, () => [createVNode(_sfc_main$2, {
											color: unref(props).color,
											variant: unref(props).variant,
											size: unref(props).size,
											icon: firstIcon.value,
											to: unref(props).to?.(1)
										}, null, 8, [
											"color",
											"variant",
											"size",
											"icon",
											"to"
										])])];
									}),
									_: 2
								}, _parent, _scopeId));
								else _push(`<!---->`);
								if (unref(props).showControls || !!slots.prev) _push(ssrRenderComponent(unref(PaginationPrev_default), {
									"as-child": "",
									"aria-label": unref(t)("pagination.prev"),
									"data-slot": "prev",
									class: ui.value.prev({ class: unref(props).ui?.prev })
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) ssrRenderSlot(_ctx.$slots, "prev", {}, () => {
											_push(ssrRenderComponent(_sfc_main$2, {
												color: unref(props).color,
												variant: unref(props).variant,
												size: unref(props).size,
												icon: prevIcon.value,
												to: page > 1 ? unref(props).to?.(page - 1) : void 0
											}, null, _parent, _scopeId));
										}, _push, _parent, _scopeId);
										else return [renderSlot(_ctx.$slots, "prev", {}, () => [createVNode(_sfc_main$2, {
											color: unref(props).color,
											variant: unref(props).variant,
											size: unref(props).size,
											icon: prevIcon.value,
											to: page > 1 ? unref(props).to?.(page - 1) : void 0
										}, null, 8, [
											"color",
											"variant",
											"size",
											"icon",
											"to"
										])])];
									}),
									_: 2
								}, _parent, _scopeId));
								else _push(`<!---->`);
								_push(`<!--[-->`);
								ssrRenderList$2(items, (item, index) => {
									_push(`<!--[-->`);
									if (item.type === "page") _push(ssrRenderComponent(unref(PaginationListItem_default), {
										"as-child": "",
										value: item.value,
										"aria-label": unref(t)("pagination.page", { page: item.value }),
										"data-slot": "item",
										class: ui.value.item({ class: unref(props).ui?.item })
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) ssrRenderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, {
												item,
												index,
												page,
												pageCount
											}), () => {
												_push(ssrRenderComponent(_sfc_main$2, {
													color: page === item.value ? unref(props).activeColor : unref(props).color,
													variant: page === item.value ? unref(props).activeVariant : unref(props).variant,
													size: unref(props).size,
													label: String(item.value),
													ui: { label: ui.value.label() },
													to: unref(props).to?.(item.value),
													square: ""
												}, null, _parent, _scopeId));
											}, _push, _parent, _scopeId);
											else return [renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, {
												item,
												index,
												page,
												pageCount
											}), () => [createVNode(_sfc_main$2, {
												color: page === item.value ? unref(props).activeColor : unref(props).color,
												variant: page === item.value ? unref(props).activeVariant : unref(props).variant,
												size: unref(props).size,
												label: String(item.value),
												ui: { label: ui.value.label() },
												to: unref(props).to?.(item.value),
												square: ""
											}, null, 8, [
												"color",
												"variant",
												"size",
												"label",
												"ui",
												"to"
											])])];
										}),
										_: 2
									}, _parent, _scopeId));
									else _push(ssrRenderComponent(unref(PaginationEllipsis_default), {
										"as-child": "",
										"data-slot": "ellipsis",
										class: ui.value.ellipsis({ class: unref(props).ui?.ellipsis })
									}, {
										default: withCtx((_, _push, _parent, _scopeId) => {
											if (_push) ssrRenderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => {
												_push(ssrRenderComponent(_sfc_main$2, {
													as: "div",
													color: unref(props).color,
													variant: unref(props).variant,
													size: unref(props).size,
													icon: unref(props).ellipsisIcon || unref(appConfig).ui.icons.ellipsis
												}, null, _parent, _scopeId));
											}, _push, _parent, _scopeId);
											else return [renderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => [createVNode(_sfc_main$2, {
												as: "div",
												color: unref(props).color,
												variant: unref(props).variant,
												size: unref(props).size,
												icon: unref(props).ellipsisIcon || unref(appConfig).ui.icons.ellipsis
											}, null, 8, [
												"color",
												"variant",
												"size",
												"icon"
											])])];
										}),
										_: 2
									}, _parent, _scopeId));
									_push(`<!--]-->`);
								});
								_push(`<!--]-->`);
								if (unref(props).showControls || !!slots.next) _push(ssrRenderComponent(unref(PaginationNext_default), {
									"as-child": "",
									"aria-label": unref(t)("pagination.next"),
									"data-slot": "next",
									class: ui.value.next({ class: unref(props).ui?.next })
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) ssrRenderSlot(_ctx.$slots, "next", {}, () => {
											_push(ssrRenderComponent(_sfc_main$2, {
												color: unref(props).color,
												variant: unref(props).variant,
												size: unref(props).size,
												icon: nextIcon.value,
												to: page < pageCount ? unref(props).to?.(page + 1) : void 0
											}, null, _parent, _scopeId));
										}, _push, _parent, _scopeId);
										else return [renderSlot(_ctx.$slots, "next", {}, () => [createVNode(_sfc_main$2, {
											color: unref(props).color,
											variant: unref(props).variant,
											size: unref(props).size,
											icon: nextIcon.value,
											to: page < pageCount ? unref(props).to?.(page + 1) : void 0
										}, null, 8, [
											"color",
											"variant",
											"size",
											"icon",
											"to"
										])])];
									}),
									_: 2
								}, _parent, _scopeId));
								else _push(`<!---->`);
								if (unref(props).showControls || !!slots.last) _push(ssrRenderComponent(unref(PaginationLast_default), {
									"as-child": "",
									"aria-label": unref(t)("pagination.last"),
									"data-slot": "last",
									class: ui.value.last({ class: unref(props).ui?.last })
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) ssrRenderSlot(_ctx.$slots, "last", {}, () => {
											_push(ssrRenderComponent(_sfc_main$2, {
												color: unref(props).color,
												variant: unref(props).variant,
												size: unref(props).size,
												icon: lastIcon.value,
												to: unref(props).to?.(pageCount)
											}, null, _parent, _scopeId));
										}, _push, _parent, _scopeId);
										else return [renderSlot(_ctx.$slots, "last", {}, () => [createVNode(_sfc_main$2, {
											color: unref(props).color,
											variant: unref(props).variant,
											size: unref(props).size,
											icon: lastIcon.value,
											to: unref(props).to?.(pageCount)
										}, null, 8, [
											"color",
											"variant",
											"size",
											"icon",
											"to"
										])])];
									}),
									_: 2
								}, _parent, _scopeId));
								else _push(`<!---->`);
							} else return [
								unref(props).showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst_default), {
									key: 0,
									"as-child": "",
									"aria-label": unref(t)("pagination.first"),
									"data-slot": "first",
									class: ui.value.first({ class: unref(props).ui?.first })
								}, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "first", {}, () => [createVNode(_sfc_main$2, {
										color: unref(props).color,
										variant: unref(props).variant,
										size: unref(props).size,
										icon: firstIcon.value,
										to: unref(props).to?.(1)
									}, null, 8, [
										"color",
										"variant",
										"size",
										"icon",
										"to"
									])])]),
									_: 3
								}, 8, ["aria-label", "class"])) : createCommentVNode("", true),
								unref(props).showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev_default), {
									key: 1,
									"as-child": "",
									"aria-label": unref(t)("pagination.prev"),
									"data-slot": "prev",
									class: ui.value.prev({ class: unref(props).ui?.prev })
								}, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "prev", {}, () => [createVNode(_sfc_main$2, {
										color: unref(props).color,
										variant: unref(props).variant,
										size: unref(props).size,
										icon: prevIcon.value,
										to: page > 1 ? unref(props).to?.(page - 1) : void 0
									}, null, 8, [
										"color",
										"variant",
										"size",
										"icon",
										"to"
									])])]),
									_: 2
								}, 1032, ["aria-label", "class"])) : createCommentVNode("", true),
								(openBlock(true), createBlock(Fragment, null, renderList$2(items, (item, index) => {
									return openBlock(), createBlock(Fragment, { key: index }, [item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem_default), {
										key: 0,
										"as-child": "",
										value: item.value,
										"aria-label": unref(t)("pagination.page", { page: item.value }),
										"data-slot": "item",
										class: ui.value.item({ class: unref(props).ui?.item })
									}, {
										default: withCtx(() => [renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, {
											item,
											index,
											page,
											pageCount
										}), () => [createVNode(_sfc_main$2, {
											color: page === item.value ? unref(props).activeColor : unref(props).color,
											variant: page === item.value ? unref(props).activeVariant : unref(props).variant,
											size: unref(props).size,
											label: String(item.value),
											ui: { label: ui.value.label() },
											to: unref(props).to?.(item.value),
											square: ""
										}, null, 8, [
											"color",
											"variant",
											"size",
											"label",
											"ui",
											"to"
										])])]),
										_: 2
									}, 1032, [
										"value",
										"aria-label",
										"class"
									])) : (openBlock(), createBlock(unref(PaginationEllipsis_default), {
										key: 1,
										"as-child": "",
										"data-slot": "ellipsis",
										class: ui.value.ellipsis({ class: unref(props).ui?.ellipsis })
									}, {
										default: withCtx(() => [renderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => [createVNode(_sfc_main$2, {
											as: "div",
											color: unref(props).color,
											variant: unref(props).variant,
											size: unref(props).size,
											icon: unref(props).ellipsisIcon || unref(appConfig).ui.icons.ellipsis
										}, null, 8, [
											"color",
											"variant",
											"size",
											"icon"
										])])]),
										_: 3
									}, 8, ["class"]))], 64);
								}), 128)),
								unref(props).showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext_default), {
									key: 2,
									"as-child": "",
									"aria-label": unref(t)("pagination.next"),
									"data-slot": "next",
									class: ui.value.next({ class: unref(props).ui?.next })
								}, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "next", {}, () => [createVNode(_sfc_main$2, {
										color: unref(props).color,
										variant: unref(props).variant,
										size: unref(props).size,
										icon: nextIcon.value,
										to: page < pageCount ? unref(props).to?.(page + 1) : void 0
									}, null, 8, [
										"color",
										"variant",
										"size",
										"icon",
										"to"
									])])]),
									_: 2
								}, 1032, ["aria-label", "class"])) : createCommentVNode("", true),
								unref(props).showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast_default), {
									key: 3,
									"as-child": "",
									"aria-label": unref(t)("pagination.last"),
									"data-slot": "last",
									class: ui.value.last({ class: unref(props).ui?.last })
								}, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "last", {}, () => [createVNode(_sfc_main$2, {
										color: unref(props).color,
										variant: unref(props).variant,
										size: unref(props).size,
										icon: lastIcon.value,
										to: unref(props).to?.(pageCount)
									}, null, 8, [
										"color",
										"variant",
										"size",
										"icon",
										"to"
									])])]),
									_: 2
								}, 1032, ["aria-label", "class"])) : createCommentVNode("", true)
							];
						}),
						_: 2
					}, _parent, _scopeId));
					else return [createVNode(unref(PaginationList_default), {
						"data-slot": "list",
						class: ui.value.list({ class: unref(props).ui?.list })
					}, {
						default: withCtx(({ items }) => [
							unref(props).showControls || !!slots.first ? (openBlock(), createBlock(unref(PaginationFirst_default), {
								key: 0,
								"as-child": "",
								"aria-label": unref(t)("pagination.first"),
								"data-slot": "first",
								class: ui.value.first({ class: unref(props).ui?.first })
							}, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "first", {}, () => [createVNode(_sfc_main$2, {
									color: unref(props).color,
									variant: unref(props).variant,
									size: unref(props).size,
									icon: firstIcon.value,
									to: unref(props).to?.(1)
								}, null, 8, [
									"color",
									"variant",
									"size",
									"icon",
									"to"
								])])]),
								_: 3
							}, 8, ["aria-label", "class"])) : createCommentVNode("", true),
							unref(props).showControls || !!slots.prev ? (openBlock(), createBlock(unref(PaginationPrev_default), {
								key: 1,
								"as-child": "",
								"aria-label": unref(t)("pagination.prev"),
								"data-slot": "prev",
								class: ui.value.prev({ class: unref(props).ui?.prev })
							}, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "prev", {}, () => [createVNode(_sfc_main$2, {
									color: unref(props).color,
									variant: unref(props).variant,
									size: unref(props).size,
									icon: prevIcon.value,
									to: page > 1 ? unref(props).to?.(page - 1) : void 0
								}, null, 8, [
									"color",
									"variant",
									"size",
									"icon",
									"to"
								])])]),
								_: 2
							}, 1032, ["aria-label", "class"])) : createCommentVNode("", true),
							(openBlock(true), createBlock(Fragment, null, renderList$2(items, (item, index) => {
								return openBlock(), createBlock(Fragment, { key: index }, [item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem_default), {
									key: 0,
									"as-child": "",
									value: item.value,
									"aria-label": unref(t)("pagination.page", { page: item.value }),
									"data-slot": "item",
									class: ui.value.item({ class: unref(props).ui?.item })
								}, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "item", mergeProps({ ref_for: true }, {
										item,
										index,
										page,
										pageCount
									}), () => [createVNode(_sfc_main$2, {
										color: page === item.value ? unref(props).activeColor : unref(props).color,
										variant: page === item.value ? unref(props).activeVariant : unref(props).variant,
										size: unref(props).size,
										label: String(item.value),
										ui: { label: ui.value.label() },
										to: unref(props).to?.(item.value),
										square: ""
									}, null, 8, [
										"color",
										"variant",
										"size",
										"label",
										"ui",
										"to"
									])])]),
									_: 2
								}, 1032, [
									"value",
									"aria-label",
									"class"
								])) : (openBlock(), createBlock(unref(PaginationEllipsis_default), {
									key: 1,
									"as-child": "",
									"data-slot": "ellipsis",
									class: ui.value.ellipsis({ class: unref(props).ui?.ellipsis })
								}, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "ellipsis", { ui: ui.value }, () => [createVNode(_sfc_main$2, {
										as: "div",
										color: unref(props).color,
										variant: unref(props).variant,
										size: unref(props).size,
										icon: unref(props).ellipsisIcon || unref(appConfig).ui.icons.ellipsis
									}, null, 8, [
										"color",
										"variant",
										"size",
										"icon"
									])])]),
									_: 3
								}, 8, ["class"]))], 64);
							}), 128)),
							unref(props).showControls || !!slots.next ? (openBlock(), createBlock(unref(PaginationNext_default), {
								key: 2,
								"as-child": "",
								"aria-label": unref(t)("pagination.next"),
								"data-slot": "next",
								class: ui.value.next({ class: unref(props).ui?.next })
							}, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "next", {}, () => [createVNode(_sfc_main$2, {
									color: unref(props).color,
									variant: unref(props).variant,
									size: unref(props).size,
									icon: nextIcon.value,
									to: page < pageCount ? unref(props).to?.(page + 1) : void 0
								}, null, 8, [
									"color",
									"variant",
									"size",
									"icon",
									"to"
								])])]),
								_: 2
							}, 1032, ["aria-label", "class"])) : createCommentVNode("", true),
							unref(props).showControls || !!slots.last ? (openBlock(), createBlock(unref(PaginationLast_default), {
								key: 3,
								"as-child": "",
								"aria-label": unref(t)("pagination.last"),
								"data-slot": "last",
								class: ui.value.last({ class: unref(props).ui?.last })
							}, {
								default: withCtx(() => [renderSlot(_ctx.$slots, "last", {}, () => [createVNode(_sfc_main$2, {
									color: unref(props).color,
									variant: unref(props).variant,
									size: unref(props).size,
									icon: lastIcon.value,
									to: unref(props).to?.(pageCount)
								}, null, 8, [
									"color",
									"variant",
									"size",
									"icon",
									"to"
								])])]),
								_: 2
							}, 1032, ["aria-label", "class"])) : createCommentVNode("", true)
						]),
						_: 2
					}, 1032, ["class"])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { IconCategory_default as I, _sfc_main as _ };
//# sourceMappingURL=Pagination-DfNA0vnB.mjs.map
