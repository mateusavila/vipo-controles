import { E as useRouter, F as encodeRoutePath, G as sanitizeAnchorHref, H as parseQuery$1, I as isAbsoluteHref, n as navigateTo, J as useNuxtApp, K as useRuntimeConfig, L as resolveRouteObject, M as isRootedPath, N as nuxtLinkDefaults } from '../virtual/entry.mjs';
import { G as joinURL, a1 as hasProtocol, a2 as withTrailingSlash, a3 as withoutTrailingSlash } from '../nitro/nitro.mjs';
import { J as ssrRenderComponent, a6 as ssrRenderAttrs, K as renderVNode, x as h, d as getCurrentInstance, v as defineComponent, as as resolveComponent, q as camelize, e as escapeHtml, u as unref, p as computed, O as shallowRef } from '../_/vue.mjs';

// node_modules/nuxt/dist/app/components/nuxt-link-ssr-render.js
/**
* Renders a template `<NuxtLink>` straight into the parent's SSR buffer, without a component
* instance, when the link resolves to a static anchor.
*/
function ssrRenderNuxtLink(comp, props, slots, parent, slotScopeId) {
	const state = props && slots && comp.__ssrLink?.(props, parent);
	if (!state || !slots) return ssrRenderComponent(comp, props, slots, parent, slotScopeId);
	let html = (state.openTag ?? `<a${ssrRenderAttrs(state.attrs())}`) + ssrScopeIds(slotScopeId) + ">";
	let buffer;
	const push = (item) => {
		if (buffer) buffer.push(item);
		else if (typeof item === "string") html += item;
		else {
			buffer = [html, item];
			buffer.hasAsync = true;
		}
	};
	const ret = slots.default?.(state.link, push, parent, slotScopeId ? " " + slotScopeId : "");
	if (ret !== void 0) {
		html = "";
		buffer = void 0;
		renderVNode(push, h("a", state.attrs(), ret), parent, slotScopeId);
		return buffer ?? html;
	}
	if (buffer) {
		buffer.push("</a>");
		return buffer;
	}
	return html + "</a>";
}
function ssrScopeIds(slotScopeId) {
	const scopeId = (getCurrentInstance()?.type)?.__scopeId;
	let ids = scopeId ? " " + scopeId : "";
	if (slotScopeId) {
		for (const id of slotScopeId.trim().split(" ")) if (id && id !== scopeId) ids += " " + id;
	}
	return ids;
}
// node_modules/nuxt/dist/app/components/route-match.js
/** An absolute path with no query, hash or percent-encoding: its `href` is the history base plus the path. */
function isPlainAbsolutePath(to) {
	return to[0] === "/" && !to.includes("?") && !to.includes("#") && !to.includes("%");
}
var PARAM_SEGMENT_RE = /^:\w+\(\)$/;
var routePatternCache = /* @__PURE__ */ new WeakMap();
/**
* Whether `path` might resolve to a record in `currentRoute.matched`, the precondition for a
* link being active. Conservative: `true` unless every record's path is a plain mix of static
* and required param segments and none can match.
*/
function mayMatchCurrentRoute(currentRoute, path) {
	const matched = currentRoute.matched;
	let patterns = routePatternCache.get(matched);
	if (patterns === void 0) {
		patterns = [];
		for (const record of matched) {
			if (record.aliasOf || record.alias) {
				patterns = null;
				break;
			}
			const segments = splitSegments(record.path);
			for (const segment of segments) if (segment.includes(":") ? !PARAM_SEGMENT_RE.test(segment) : /[?*+()]/.test(segment)) {
				patterns = null;
				break;
			}
			if (!patterns) break;
			patterns.push(segments);
		}
		routePatternCache.set(matched, patterns);
	}
	if (!patterns) return true;
	const count = countSegments(path);
	let target;
	outer: for (const pattern of patterns) {
		if (pattern.length !== count) continue;
		target ??= splitSegments(path);
		for (let i = 0; i < pattern.length; i++) {
			const p = pattern[i];
			const t = target[i];
			if (p[0] === ":") {
				if (!t) continue outer;
			} else if (p.toLowerCase() !== t.toLowerCase()) continue outer;
		}
		return true;
	}
	return false;
}
/** The number of segments `splitSegments` returns for `path`. */
function countSegments(path) {
	let count = 1;
	for (let i = path.indexOf("/"); i !== -1; i = path.indexOf("/", i + 1)) count++;
	return count > 1 && path.endsWith("/") ? count - 1 : count;
}
function splitSegments(path) {
	const segments = path.split("/");
	if (segments.length > 1 && segments[segments.length - 1] === "") segments.pop();
	return segments;
}
// node_modules/nuxt/dist/app/components/nuxt-link.js
var firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
/* @__NO_SIDE_EFFECTS__ */
function defineNuxtLink(options) {
	const componentName = options.componentName || "NuxtLink";
	function isHashLinkWithoutHashMode(link) {
		return typeof link === "string" && link.startsWith("#");
	}
	function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
		const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
		if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") return to;
		if (typeof to === "string") return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
		const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
		return {
			...to,
			name: void 0,
			path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
		};
	}
	/**
	* The link state `<NuxtLink>` renders with. Kept separate from `useNuxtLink` so the component
	* does not resolve the `<RouterLink>` link state backing `route`/`isActive`/`isExactActive`,
	* which it never reads.
	*/
	function useLinkTarget(props, attrs) {
		const router = useRouter();
		const config = /* @__PURE__ */ useRuntimeConfig();
		const rootedHref = router.options?.history?.createHref ?? ((path) => joinURL(config.app.baseURL, path));
		const hasTarget = computed(() => !!unref(props.target) && unref(props.target) !== "_self");
		const isAbsoluteUrl = computed(() => {
			const path = unref(props.to) || unref(props.href) || "";
			return typeof path === "string" && isAbsoluteHref(path);
		});
		const download = computed(() => attrs?.download !== void 0);
		const isExternal = computed(() => {
			if (unref(props.external)) return true;
			const path = unref(props.to) || unref(props.href) || "";
			if (typeof path === "object") return false;
			return path === "" || isAbsoluteUrl.value;
		});
		const to = computed(() => {
			const path = unref(props.to) || unref(props.href) || "";
			if (isExternal.value) return path;
			return resolveTrailingSlashBehavior(path, router.resolve, unref(props.trailingSlash));
		});
		const href = computed(() => {
			const effectiveTrailingSlash = unref(props.trailingSlash) ?? options.trailingSlash;
			if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
				const raw = to.value;
				return typeof raw === "string" ? sanitizeAnchorHref(raw) : raw;
			}
			if (isExternal.value) {
				const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
				const href = typeof path === "object" ? router.resolve(path).href : path;
				const safe = typeof href === "string" ? sanitizeAnchorHref(href) : href;
				return safe === null ? null : applyTrailingSlashBehavior(safe, effectiveTrailingSlash);
			}
			if (typeof to.value === "object") return router.resolve(to.value)?.href ?? null;
			if (download.value && isRootedPath(to.value)) return joinURL(config.app.baseURL, to.value);
			return applyTrailingSlashBehavior(isRootedPath(to.value) ? rootedHref(to.value) : router.resolve(to.value).href, effectiveTrailingSlash);
		});
		return {
			to,
			hasTarget,
			isAbsoluteUrl,
			isExternal,
			download,
			href,
			async navigate(_e) {
				if (href.value === null) return;
				await navigateTo(href.value, {
					replace: unref(props.replace),
					external: isExternal.value || hasTarget.value
				});
			}
		};
	}
	function useNuxtLink(props) {
		const router = useRouter();
		const target = useLinkTarget(props);
		const builtinRouterLink = resolveComponent("RouterLink");
		const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
		const link = target.isExternal.value ? void 0 : useBuiltinLink?.({
			...props,
			to: target.to,
			viewTransition: unref(props.viewTransition)
		});
		return {
			...target,
			isActive: link?.isActive ?? computed(() => target.to.value === router.currentRoute.value.path),
			isExactActive: link?.isExactActive ?? computed(() => target.to.value === router.currentRoute.value.path),
			route: link?.route ?? computed(() => router.resolve(target.to.value))
		};
	}
	/**
	* Resolve the link state `<RouterLink>` exposes for an internal location.
	*/
	function resolveStaticLink(props, router, rawTo, currentRoute = router.currentRoute.value) {
		let route;
		let href;
		let isActive = false;
		let isExactActive = false;
		if (typeof rawTo === "string" && router.options.history && isPlainAbsolutePath(rawTo) && !props.trailingSlash && !options.trailingSlash && !mayMatchCurrentRoute(currentRoute, rawTo)) href = router.options.history.base + rawTo;
		else {
			route = router.resolve(resolveTrailingSlashBehavior(rawTo, router.resolve, props.trailingSlash));
			href = route.href;
			const index = activeRecordIndex(route, currentRoute);
			isActive = index > -1 && includesParams(currentRoute.params, route.params);
			isExactActive = index > -1 && index === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.params);
		}
		return new StaticLink(router, rawTo, route, href, isActive, isExactActive, props.replace);
	}
	/**
	* Render an internal link as a plain anchor, matching the markup `<RouterLink>` produces
	* for the same location.
	*/
	function renderStaticInternalLink(props, slots, router, rawTo, nuxtApp) {
		const link = resolveStaticLink(props, router, rawTo);
		return h("a", staticInternalLinkAttrs(props, router, link), slots.default?.(link));
	}
	function staticInternalLinkClasses(props, router) {
		return [getLinkClass(props.activeClass || options.activeClass, router.options.linkActiveClass, "router-link-active"), getLinkClass(props.exactActiveClass || options.exactActiveClass, router.options.linkExactActiveClass, "router-link-exact-active")];
	}
	function staticInternalLinkAttrs(props, router, link, nuxtApp) {
		const linkClass = staticInternalLinkClass(props, router, link);
		return {
			"aria-current": link.isExactActive ? props.ariaCurrentValue ?? "page" : null,
			"href": link.href,
			...linkClass && { class: linkClass },
			"rel": props.rel || void 0,
			"data-internal": void 0
		};
	}
	function staticInternalLinkClass(props, router, link) {
		if (!link.isActive && !link.isExactActive) return "";
		const [activeClass, exactActiveClass] = staticInternalLinkClasses(props, router);
		return link.isExactActive ? activeClass === exactActiveClass ? activeClass : `${activeClass} ${exactActiveClass}` : activeClass !== exactActiveClass ? activeClass : "";
	}
	function staticInternalLinkOpenTag(props, router, link, nuxtApp) {
		let tag = "<a";
		if (link.isExactActive) tag += ` aria-current="${escapeHtml(props.ariaCurrentValue ?? "page")}"`;
		tag += ` href="${escapeHtml(link.href)}"`;
		const linkClass = staticInternalLinkClass(props, router, link);
		if (linkClass) tag += ` class="${escapeHtml(linkClass)}"`;
		if (props.rel) tag += ` rel="${escapeHtml(props.rel)}"`;
		return tag;
	}
	function isStaticInternalLink(props, rawTo, download = false) {
		return !(props.external || download || typeof rawTo === "string" && (rawTo === "" || isAbsoluteHref(rawTo))) && !isHashLinkWithoutHashMode(rawTo) && (!props.target || props.target === "_self");
	}
	/** Resolves the anchor of a template `<NuxtLink>` that can be rendered without a component instance. */
	function resolveSsrLink(rawProps, parent) {
		const props = directRenderProps(rawProps);
		const rawTo = props?.to;
		if (!props || !rawTo || !isStaticInternalLink(props, rawTo, props.attrs?.download !== void 0)) return;
		const nuxtApp = parent.appContext.app.$nuxt;
		const router = nuxtApp?.$router ?? useRouter();
		const link = resolveStaticLink(props, router, rawTo);
		return {
			link,
			openTag: props.class || props.style || props.attrs ? void 0 : staticInternalLinkOpenTag(props, router, link),
			attrs: () => {
				const attrs = staticInternalLinkAttrs(props, router, link);
				if (props.attrs) Object.assign(attrs, props.attrs);
				if (props.class) attrs.class = [attrs.class, props.class];
				if (props.style) attrs.style = props.style;
				return attrs;
			}
		};
	}
	/**
	* Render the slot of an internal `custom` link with the props `<RouterLink custom>` passes to it.
	*/
	function renderStaticCustomLink(props, slots, router, rawTo) {
		const link = resolveStaticLink(props, router, rawTo);
		const vnodes = slots.default?.({
			...link,
			route: link.route,
			rel: firstNonUndefined(props.noRel ? "" : props.rel, options.externalRelAttribute, "") || null,
			target: props.target || null,
			isExternal: false,
			prefetch: async () => {},
			prefetched: false,
			shouldPrefetch: () => false
		});
		return vnodes?.length === 1 ? vnodes[0] : vnodes;
	}
	const component = defineComponent({
		name: componentName,
		props: {
			to: {
				type: [String, Object],
				required: false
			},
			href: {
				type: [String, Object],
				required: false
			},
			target: {
				type: String,
				required: false
			},
			rel: {
				type: String,
				required: false
			},
			noRel: {
				type: Boolean,
				default: void 0,
				required: false
			},
			prefetch: {
				type: Boolean,
				default: void 0,
				required: false
			},
			prefetchOn: {
				type: [String, Object],
				required: false
			},
			noPrefetch: {
				type: Boolean,
				default: void 0,
				required: false
			},
			activeClass: {
				type: String,
				required: false
			},
			exactActiveClass: {
				type: String,
				required: false
			},
			prefetchedClass: {
				type: String,
				required: false
			},
			replace: {
				type: Boolean,
				default: void 0,
				required: false
			},
			ariaCurrentValue: {
				type: String,
				required: false
			},
			external: {
				type: Boolean,
				default: void 0,
				required: false
			},
			custom: {
				type: Boolean,
				default: void 0,
				required: false
			},
			trailingSlash: {
				type: String,
				required: false
			}
		},
		useLink: useNuxtLink,
		setup(props, { slots, attrs }) {
			const router = useRouter();
			{
				const rawTo = props.to || props.href || "";
				if (isStaticInternalLink(props, rawTo, attrs.download !== void 0)) {
					if (props.custom) return () => renderStaticCustomLink(props, slots, router, rawTo);
					return () => renderStaticInternalLink(props, slots, router, rawTo);
				}
			}
			const routerLinkComponent = resolveComponent("RouterLink");
			const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl, download } = useLinkTarget(props, attrs);
			const prefetched = shallowRef(false);
			const el = void 0;
			const elRef = void 0;
			function shouldPrefetch(mode) {
				return false;
			}
			async function prefetch(nuxtApp = useNuxtApp()) {}
			return () => {
				const target = props.target || null;
				const rel = firstNonUndefined(props.noRel ? "" : props.rel, options.externalRelAttribute, isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : "") || null;
				const getCustomSlotProps = (routerLinkSlotProps) => ({
					navigate,
					get route() {
						if (!href.value) return;
						const url = new URL(href.value, "http://localhost");
						return {
							path: url.pathname,
							fullPath: url.pathname,
							get query() {
								return url.search ? parseQuery$1(url.search) : {};
							},
							hash: url.hash,
							params: {},
							name: void 0,
							matched: [],
							redirectedFrom: void 0,
							meta: {},
							href: href.value
						};
					},
					rel,
					target,
					isExternal: isExternal.value || hasTarget.value,
					isActive: false,
					isExactActive: false,
					...routerLinkSlotProps,
					href: typeof routerLinkSlotProps?.href === "string" ? sanitizeAnchorHref(routerLinkSlotProps.href) : href.value,
					prefetch,
					prefetched: prefetched.value,
					shouldPrefetch
				});
				if (!isExternal.value && !download.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
					const routerLinkProps = {
						ref: elRef,
						to: to.value,
						activeClass: props.activeClass || options.activeClass,
						exactActiveClass: props.exactActiveClass || options.exactActiveClass,
						replace: props.replace,
						ariaCurrentValue: props.ariaCurrentValue,
						custom: props.custom
					};
					if (!props.custom) routerLinkProps.rel = props.rel || void 0;
					return h(routerLinkComponent, routerLinkProps, props.custom && slots.default ? { default: (slotProps) => slots.default(getCustomSlotProps(slotProps)) } : slots.default);
				}
				if (props.custom) {
					if (!slots.default) return null;
					return slots.default(getCustomSlotProps());
				}
				return h("a", {
					ref: el,
					href: href.value || null,
					rel,
					target,
					onClick: async (event) => {
						if (isExternal.value || hasTarget.value || download.value) return;
						event.preventDefault();
						try {
							const encodedHref = encodeRoutePath(href.value ?? "");
							return await (props.replace ? router.replace(encodedHref) : router.push(encodedHref));
						} finally {}
					}
				}, slots.default?.());
			};
		}
	});
	component.__ssrLink = resolveSsrLink;
	return component;
}
var NuxtLink = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
function isEquivalentArray(a, b) {
	return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function isSameParamValue(a, b) {
	return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : (a && a.valueOf()) === (b && b.valueOf());
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (!isSameParamValue(a[key], b[key])) return false;
	return true;
}
/** The link state `<RouterLink>` exposes for an internal location, resolving `route` when it is read. */
var StaticLink = class {
	href;
	isActive;
	isExactActive;
	navigate;
	#router;
	#to;
	#route;
	constructor(router, to, route, href, isActive, isExactActive, replace) {
		this.href = sanitizeAnchorHref(href);
		this.isActive = isActive;
		this.isExactActive = isExactActive;
		this.navigate = async () => {
			await navigateTo(href, { replace });
		};
		this.#router = router;
		this.#to = to;
		this.#route = route;
	}
	get route() {
		return this.#route ??= this.#router.resolve(this.#to);
	}
};
var DIRECT_RENDER_PROPS = /* @__PURE__ */ new Set([
	"key",
	"to",
	"class",
	"style",
	"rel",
	"activeClass",
	"exactActiveClass",
	"ariaCurrentValue",
	"prefetchOn",
	"prefetchedClass"
]);
var COMPONENT_RENDER_KEYS = /* @__PURE__ */ new Set([
	"href",
	"target",
	"noRel",
	"prefetch",
	"noPrefetch",
	"replace",
	"external",
	"custom",
	"trailingSlash",
	"viewTransition",
	"ref",
	"ref_for",
	"ref_key",
	"innerHTML",
	"textContent"
]);
function directRenderProps(raw) {
	let props = raw;
	let attrs;
	for (const key in raw) {
		const name = key.includes("-") ? camelize(key) : key;
		if (!DIRECT_RENDER_PROPS.has(name)) {
			if (COMPONENT_RENDER_KEYS.has(name) || key.startsWith("onVnode")) return;
			(attrs ??= {})[key] = raw[key];
		} else if (name !== key) {
			if (props === raw) props = { ...raw };
			props[name] = raw[key];
		}
	}
	if (attrs) {
		if (props === raw) props = { ...raw };
		props.attrs = attrs;
	}
	return props;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value.valueOf() !== outerValue[i].valueOf())) return false;
	}
	return true;
}
function activeRecordIndex(route, currentRoute) {
	const { matched } = route;
	const { length } = matched;
	const routeMatched = matched[length - 1];
	const currentMatched = currentRoute.matched;
	if (!routeMatched || !currentMatched.length) return -1;
	const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
	if (index > -1) return index;
	const parentRecordPath = getOriginalPath(matched[length - 2]);
	return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
}
/** Resolve an active-link class, falling back from the per-link value to the router-wide one. */
function getLinkClass(propClass, globalClass, defaultClass) {
	return propClass ?? globalClass ?? defaultClass;
}
function applyTrailingSlashBehavior(to, trailingSlash) {
	if (trailingSlash !== "append" && trailingSlash !== "remove") return to;
	const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
	if (hasProtocol(to) && !to.startsWith("http")) return to;
	return normalizeFn(to, true);
}

export { NuxtLink as N, ssrRenderNuxtLink as s };
//# sourceMappingURL=nuxt-link-Bdrn-Ybx.mjs.map
