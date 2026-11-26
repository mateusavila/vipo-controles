import { m as appSpaLoaderTag, n as appSpaLoaderAttrs, o as appRootTag, p as appRootAttrs, H as HookableCore, q as publicAssetsURL, t as buildAssetsURL, w as writeEarlyHints, c as createError, v as toPortableEvent, x as useNitroApp, y as getRouteRules, u as useRuntimeConfig, z as appId, A as createHead, N as NUXT_PRERENDER_NO_SSR_ROUTES, B as unheadOptions, C as appTeleportTag, D as appTeleportAttrs, E as NUXT_NO_SCRIPTS_PATTERNS, F as relative, G as joinURL, I as NUXT_PAGE_PATTERNS, J as getQuery, K as appHead, L as destr, M as appComponentHead, O as NUXT_SSR_STREAMING, P as renderSSRHeadOptions, Q as defineRenderHandler, R as toRequestEvent, a as setResponseHeader } from '../nitro/nitro.mjs';
import { defineDiagnostics, createConsoleReporter } from 'nostics';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'vue-bundle-renderer/runtime';
import { r as renderToSimpleStream, i as isReactive, a as isShallow, s as shallowReactive, b as reactive, t as toRaw } from '../_/vue.mjs';
import { propsToString, renderSSRHead } from 'unhead/server';
import { stringify, uneval } from 'devalue';
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

// src/runtime/utils/response.ts
/**
* The response the renderer builds, keeping its body as the renderer produced it.
*
* A real `Response` turns every body into a `ReadableStream`, which would send a rendered
* document as a chunked stream where nitro sends the string it was given. The renderer only
* reads the fields below back, so this describes just those.
*/
var NodeRenderResponse = class {
	body;
	status;
	statusText;
	headers;
	/** The rendered document as ordered chunks, which the render handler encodes in place of `body`. */
	chunks;
	constructor(body, init) {
		this.body = body;
		this.status = init?.status || 200;
		this.statusText = init?.statusText || "";
		this.headers = init?.headers instanceof Headers ? init.headers : new Headers(init?.headers);
	}
};
/**
* The headers of a node response as the record nitro's `render:response` hook passes,
* read from and written to the node response itself. `set-cookie` is omitted, as it
* cannot be represented as one string. The proxy target is kept as a snapshot for
* `util.inspect`, which bypasses the traps.
*/
function createResponseHeaderRecord(res) {
	const read = (name) => {
		if (typeof name !== "string" || name.toLowerCase() === "set-cookie") return;
		const value = res.getHeader(name);
		if (value === void 0) return;
		return Array.isArray(value) ? value.join(", ") : String(value);
	};
	const snapshot = {};
	const sync = (name) => {
		const value = read(name);
		if (value === void 0) delete snapshot[name.toLowerCase()];
		else snapshot[name.toLowerCase()] = value;
	};
	for (const name of res.getHeaderNames()) sync(name);
	return new Proxy(snapshot, {
		get: (_, name) => read(name),
		has: (_, name) => read(name) !== void 0,
		set(_, name, value) {
			if (typeof name === "string") {
				if (value === void 0 || value === null) res.removeHeader(name);
				else res.setHeader(name, value);
				sync(name);
			}
			return true;
		},
		deleteProperty(_, name) {
			if (typeof name === "string") {
				res.removeHeader(name);
				sync(name);
			}
			return true;
		},
		ownKeys: () => res.getHeaderNames().filter((name) => name !== "set-cookie"),
		getOwnPropertyDescriptor(_, name) {
			const value = read(name);
			return value === void 0 ? void 0 : {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			};
		}
	});
}

/**
* E8xxx
* SSR rendering diagnostics, sharing the range with the server runtime that
* hosts the renderer.
*/
const docsBase = (code) => `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
const rendererDiagnostics = /* #__PURE__ */ defineDiagnostics({
	docsBase,
	reporters: [/* @__PURE__ */ createConsoleReporter(void 0)],
	codes: {
		NUXT_E8001: {
			why: (p) => `\`render:html\` mutated \`body\`/\`bodyAppend\` while streaming (\`${p.path}\`). These fields are silently dropped because the body is about to stream.`,
			fix: "Use the `render:html:close` hook instead.",
			docs: false
		},
		NUXT_E8002: {
			why: (p) => `SSR streaming committed the response before render completed (\`${p.path}\`). The following mutations did not reach the client and were dropped:\n  - ${p.mutations}`,
			fix: (p) => `Move the mutation into a plugin (which runs before the shell is flushed), or opt this route out of streaming with \`routeRules: { '${p.path}': { streaming: false } }\` or the \`render:route\` hook.`,
			docs: false
		},
		NUXT_E8004: {
			why: "The server bundle is not available.",
			fix: "Ensure the Nuxt build completed successfully and the server entry was emitted by your builder.",
			docs: false
		},
		NUXT_E8006: {
			why: (p) => `The payload for \`${p.path}\` is ${p.size}, which will increase the page size and slow down hydration.${p.keys ? ` Largest payload keys:\n  - ${p.keys}` : ""}`,
			fix: "Use the `pick` or `transform` options of `useAsyncData`/`useFetch` to strip out data the client does not need.",
			docs: false
		},
		NUXT_E8007: {
			why: (p) => `\`${p.path}\` relies on client-side JavaScript, but \`features.noScripts: 'production'\` will strip scripts from this route in production:\n  - ${p.reasons}`,
			fix: "Remove the client-side dependency from this route, or scope script stripping with the `noScripts` route rule instead of enabling it globally."
		},
		NUXT_E8009: {
			why: (p) => `A page error interrupted the stream for \`${p.path}\`, and ${p.what} also failed while rendering the error response.\n  ${p.cause}`,
			fix: "Fix the page error first. If it keeps happening, report the failure below - the browser will show a blank or partial page instead of the error page."
		}
	}
});

// src/runtime/server/renderer/cache.ts
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) res = fn().catch((err) => {
			res = null;
			throw err;
		});
		return res;
	};
}

// src/runtime/server/renderer/build-files.ts
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => import('../virtual/entry.mjs').then(function (n) { return n.ap; }).then((r) => r.default || r);
const getPrecomputedDependencies = () => import('../virtual/precomputed.mjs').then((r) => "default" in r ? r.default : r).then((r) => typeof r === "function" ? r() : r);
/** Load the build artifacts for a set of renderer options, caching each of them on the returned object. */
function createBuildFiles(options) {
	const buildAssetsURL = (...path) => options.buildAssetsURL(...path);
	const getSSRRenderer = lazyCachedFunction(async () => {
		const createSSRApp = await getServerEntry();
		if (!createSSRApp) throw rendererDiagnostics.NUXT_E8004();
		const precomputed = await getPrecomputedDependencies();
		const renderer = createRenderer(createSSRApp, {
			precomputed,
			manifest: void 0,
			renderToString,
			buildAssetsURL
		});
		async function renderToString(input, context = {}) {
			const chunks = await renderToChunks(input, context);
			let html = APP_ROOT_OPEN_TAG;
			for (const chunk of chunks) html += chunk;
			html += APP_ROOT_CLOSE_TAG;
			chunks.unshift(APP_ROOT_OPEN_TAG);
			chunks.push(APP_ROOT_CLOSE_TAG);
			context["~htmlChunks"] = chunks;
			return html;
		}
		return renderer;
	});
	const getSPARenderer = lazyCachedFunction(async () => {
		const precomputed = await getPrecomputedDependencies();
		const template = renderSPATemplate();
		const renderer = createRenderer(() => () => {}, {
			precomputed,
			manifest: void 0,
			renderToString: () => template,
			buildAssetsURL
		});
		const result = await renderer.renderToString({});
		const renderToString = (ssrContext) => {
			const config = ssrContext.runtimeConfig;
			ssrContext.modules ||= /* @__PURE__ */ new Set();
			ssrContext.payload.serverRendered = false;
			ssrContext.config = {
				public: config.public,
				app: config.app
			};
			return Promise.resolve(result);
		};
		return {
			rendererContext: renderer.rendererContext,
			renderToString
		};
	});
	return {
		getRenderer: (ssrContext) => ssrContext.noSSR ? getSPARenderer() : getSSRRenderer(),
		getSSRRenderer,
		getServerApp: lazyCachedFunction(getServerEntry)
	};
}
/** Render through Vue's simple stream so the markup is kept as the chunks Vue produced. */
function renderToChunks(input, context) {
	return new Promise((resolve, reject) => {
		const chunks = [];
		renderToSimpleStream(input, context, {
			push(chunk) {
				if (chunk === null) resolve(chunks);
				else chunks.push(chunk);
			},
			destroy: reject
		});
	});
}
function renderSPATemplate() {
	{
		`<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
		return APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG + ("");
	}
}

const plugins = [];

// src/runtime/server/renderer/plugins.ts
/** Fresh hooks with every renderer plugin registered on them, or `undefined` when there are none. */
function createRendererPluginHooks() {
	if (!plugins.length) return;
	const hooks = new HookableCore();
	const context = { hooks: { hook: hooks.hook.bind(hooks) } };
	for (const plugin of plugins) plugin(context);
	return hooks;
}

// src/runtime/server/renderer/instance.ts
/**
* Create the renderer state for a set of options, calling each renderer plugin with the
* hooks of the new renderer.
*
* Called by `createNuxtRenderer()`; call it directly only to render against the same
* artifacts as a renderer created elsewhere (an island handler sharing the server bundle
* loaded for page renders), and pass the result to `createNuxtRenderer()`.
*/
function createRendererInstance(options) {
	return {
		options,
		hooks: createRendererHooks(options),
		...createBuildFiles(options)
	};
}
function createRendererHooks(options) {
	const own = createRendererPluginHooks();
	if (!own) return { callHook: (name, ...args) => options.hooks().callHook(name, ...args) };
	const pluginEvent = options.pluginEvent;
	return { callHook(name, ...args) {
		const [context, extra] = args;
		const pluginArgs = pluginEvent ? [context, {
			...extra,
			event: pluginEvent(extra.event)
		}] : args;
		const result = own.callHook(name, ...pluginArgs);
		if (result instanceof Promise) return result.then(() => options.hooks().callHook(name, ...args));
		return options.hooks().callHook(name, ...args);
	} };
}

// src/runtime/server/renderer/runtime.ts
/** The event to pass to application code and to the render hooks. */
function appEvent(event) {
	return event["~app"] ?? event;
}
function getRequestState(event) {
	return event.context.nuxt;
}

// src/runtime/utils/renderer/options.ts
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
/** The capabilities a nitropack v2 host provides to the Nuxt renderer. */
const rendererOptions = {
	runtimeConfig: (event) => useRuntimeConfig(appEvent(event)),
	buildAssetsURL,
	publicAssetsURL,
	getRouteRules: (event) => getRouteRules(appEvent(event)),
	hooks: () => useNitroApp().hooks,
	pluginEvent: (event) => toPortableEvent(event),
	createResponse: (body, init) => new NodeRenderResponse(body, init),
	createDocumentResponse: (chunks, init) => Object.assign(new NodeRenderResponse(null, init), { chunks }),
	createError: (init) => createError({
		statusCode: init.status,
		statusMessage: init.statusText,
		message: init.statusText,
		data: init.data
	}),
	writeEarlyHints: (event, hints) => writeEarlyHints(appEvent(event), hints.link),
	onRenderSuccess: void 0,
	prerender: void 0
};
/**
* The renderer the page and island handlers share, so that both render against a single
* load of the server bundle and its manifest.
*/
const rendererInstance = createRendererInstance(rendererOptions);

function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(sortContainers(omitEmptyContainers(opts.data)), opts.ssrContext["~payloadReducers"])) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	payload.id = "__NUXT_DATA__";
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
const PAYLOAD_CONTAINERS = [
	"data",
	"state",
	"once",
	"_errors"
];
/** The client creates these containers itself, so empty ones are left out of the document. */
function omitEmptyContainers(data) {
	let result = data;
	for (const key of PAYLOAD_CONTAINERS) {
		const value = data[key];
		if (value && typeof value === "object" && (value instanceof Set ? value.size === 0 : Object.keys(value).length === 0)) {
			if (result === data) result = { ...data };
			delete result[key];
		}
	}
	return result;
}
/** Keys are added in the order async work settles, so they are sorted to keep the output stable. */
function sortContainers(data) {
	const result = { ...data };
	for (const key of PAYLOAD_CONTAINERS) {
		const value = data[key];
		if (value instanceof Set) result[key] = new Set([...value].sort());
		else if (value && typeof value === "object") result[key] = withSortedKeys(value);
	}
	return result;
}
function withSortedKeys(container) {
	const raw = toRaw(container);
	const sorted = {};
	for (const key of Object.keys(raw).sort()) sorted[key] = raw[key];
	if (!isReactive(container)) return sorted;
	return isShallow(container) ? shallowReactive(sorted) : reactive(sorted);
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}

// src/runtime/server/renderer/url.ts
/**
* The fragment of a request URL, avoiding the lazy URL parse that reading `hash` triggers when
* there is none. A fragment is never sent over the wire, so it can only appear on a URL the
* server constructed itself.
*/
function urlHash(url) {
	return url.href.includes("#") ? url.hash : "";
}

/** Hand the error to the server runtime's error sink, which must never replace the error. */
async function captureError(runtime, event, error, tags) {
	try {
		await runtime.captureError?.(error, {
			event,
			tags
		});
	} catch {}
}

// src/runtime/server/renderer/app.ts
new Set(NUXT_PRERENDER_NO_SSR_ROUTES);
function createServerHead() {
	return createHead(unheadOptions);
}
function createSSRContext(options, event) {
	const url = event.url.pathname + event.url.search + urlHash(event.url);
	const ssrContext = {
		url,
		event: appEvent(event),
		runtimeConfig: options.runtimeConfig(event),
		noSSR: getRequestState(event)?.noSSR || (false),
		head: createServerHead(),
		error: false,
		nuxt: void 0,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		["~captureError"]: (error) => {
			captureError(options, event, error, ["async-data"]);
		},
		modules: /* @__PURE__ */ new Set()
	};
	return ssrContext;
}
/**
* Turn the response the renderer assembled into a web-standard `Response`, carrying the
* headers queued on the event alongside the ones the response names for itself.
*/
function returnRenderResponse(options, event, response) {
	const headers = new Headers(event.res.headers);
	for (const name in response.headers) headers.set(name, response.headers[name]);
	const init = {
		status: response.statusCode ?? event.res.status,
		statusText: response.statusMessage ?? event.res.statusText,
		headers
	};
	if (response.chunks) return options.createDocumentResponse ? options.createDocumentResponse(response.chunks, init) : options.createResponse(response.chunks.join(""), init);
	return options.createResponse(response.body ?? null, init);
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

// src/runtime/server/renderer/document.ts
const APP_TELEPORT_ID = appTeleportAttrs.id ? `#${appTeleportAttrs.id}` : void 0;
const APP_TELEPORT_OPEN_TAG = APP_TELEPORT_ID ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = APP_TELEPORT_ID ? `</${appTeleportTag}>` : "";
/** The app teleport target, holding what the render teleported into it. */
function renderAppTeleports(ssrContext) {
	return APP_TELEPORT_OPEN_TAG + (APP_TELEPORT_ID ? ssrContext.teleports?.[APP_TELEPORT_ID] ?? "" : "") + APP_TELEPORT_CLOSE_TAG;
}
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) result.push(chunk);
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) return "";
	return " " + chunks.join(" ");
}
/** The document up to and including `bodyPrepend`. */
function renderDocumentOpen(html) {
	return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}`;
}
function renderHTMLDocument(html) {
	return renderDocumentOpen(html) + `${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
/** The document with the app markup kept as the chunks it was rendered in. */
function renderHTMLDocumentChunks(html, appChunks) {
	return [
		renderDocumentOpen(html),
		...appChunks,
		`${html.body[1]}${joinTags(html.bodyAppend)}</body></html>`
	];
}

const entryFileName = "AX4YEmrX.js";

/** A stylesheet Vite serves inline in development, which needs no link. */
function isDevInlineStyle(file) {
	return false;
}
function pushEntryScripts(ssrContext, scripts, rendererContext, tagPosition = "head") {
	ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
		type: resource.module ? "module" : null,
		src: rendererContext.buildAssetsURL(resource.file),
		defer: resource.module ? null : true,
		tagPosition,
		crossorigin: ""
	})) });
}
/**
* The payload, inlined in full or split into the initial state and an external `_payload.json`.
* `prefetchLinks` is only read from a `_payload.json` another page prefetched, so an inlined
* payload leaves it out.
*/
function pushPayloadScript(ssrContext, inline, src, routeOptions) {
	const data = withoutPrefetchLinks(ssrContext.payload) ;
	ssrContext.head.push({ script: renderPayloadJsonScript({
		ssrContext,
		data})  }, {
		tagPosition: "bodyClose",
		tagPriority: "high"
	});
}
function withoutPrefetchLinks(payload) {
	if (!payload.prefetchLinks) return payload;
	const { prefetchLinks: _, ...rest } = payload;
	return rest;
}
/**
* Routes served without scripts navigate with full-page loads. This emits the
* declarative navigation hints that speed those up, on both the pages served
* without scripts (a blanket rule over same-origin links) and scripted pages
* that may link to them (rules scoped to the `noScripts` route patterns):
*
* - speculation rules, so supporting browsers prefetch and prerender the
*   target ahead of the navigation;
* - when view transitions are enabled, an opt-in to same-origin cross-document
*   view transitions, animating the navigation without a client runtime (the
*   client-side `startViewTransition` plugin is not shipped).
*
* Both tags are declarative and execute no JavaScript.
*/
function pushNoScriptsHints(ssrContext, noScripts) {
	if (noScripts) pushSpeculationRulesScript(ssrContext, NUXT_PAGE_PATTERNS.length ? NUXT_PAGE_PATTERNS : ["/*"]);
	else if (NUXT_NO_SCRIPTS_PATTERNS.length) pushSpeculationRulesScript(ssrContext, NUXT_NO_SCRIPTS_PATTERNS);
	else return;
}
function pushSpeculationRulesScript(ssrContext, patterns) {
	const rules = patterns.map((href_matches) => ({
		where: { href_matches },
		eagerness: "moderate"
	}));
	ssrContext.head.push({ script: [{
		tagPosition: "head",
		type: "speculationrules",
		innerHTML: {
			prefetch: rules,
			prerender: rules
		}
	}] });
}
const entryPaths = /* @__PURE__ */ new WeakMap();
/** Import map pinning `#entry` to the hashed entry chunk, so chunk hashes stay stable across it. */
function pushEntryImportMap(instance, event, ssrContext, options) {
	let path = entryPaths.get(instance);
	if (!path) {
		path = instance.options.buildAssetsURL(entryFileName);
		if (ssrContext.runtimeConfig.app.cdnURL || /^(?:\/|\.+\/)/.test(path)) entryPaths.set(instance, path);
		else {
			path = relative(event.url.pathname.replace(/\/[^/]+$/, "/"), joinURL("/", path));
			if (!/^(?:\/|\.+\/)/.test(path)) path = `./${path}`;
		}
	}
	ssrContext.head.push({ script: [{
		...options,
		type: "importmap",
		innerHTML: { imports: { "#entry": path } }
	}] });
}
/** Prefetch hints in an inert `<template>`, which the client moves into the head to activate them. */
function renderDeferredPrefetchHints(links) {
	let html = "";
	for (const link of links) html += `<link${propsToString("crossorigin" in link && link.crossorigin === "" ? {
		...link,
		crossorigin: true
	} : link)}>`;
	return html && `<template data-nuxt-prefetch>${html}</template>`;
}

/**
* Create a Nuxt SSR renderer, returning a web-standard handler for the requests a Nuxt
* app serves from its pages.
*
* Everything the renderer reads belongs to the renderer it was created for, so a bundle
* may create as many as it needs. Pass an instance from `createRendererInstance()` to
* render against the artifacts already loaded for another renderer.
*/
function createNuxtRenderer(optionsOrInstance) {
	const instance = "getRenderer" in optionsOrInstance ? optionsOrInstance : createRendererInstance(optionsOrInstance);
	return { fetch: (event) => fetch(instance, event) };
}
function fetch(instance, event) {
	const runtime = instance.options;
	const isErrorRoute = event.url.pathname.startsWith("/__nuxt_error");
	if (isErrorRoute && !getRequestState(event)?.["~rendering-error"]) {
		const error = runtime.createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error"
		});
		return Promise.reject(error);
	}
	const ssrError = isErrorRoute ? getQuery(event.url.href) : null;
	const render = () => renderRoute(instance, event, ssrError).then((response) => returnRenderResponse(runtime, event, response));
	const rendering = render();
	return rendering;
}
async function renderRoute(instance, event, ssrError) {
	const runtime = instance.options;
	const hooks = instance.hooks;
	const hookEvent = appEvent(event);
	runtime.prerender?.payloadCache;
	const ssrContext = createSSRContext(runtime, event);
	ssrContext.head.push(appHead);
	if (ssrError) {
		const status = ssrError.status || ssrError.statusCode;
		if (status) ssrError.status = ssrError.statusCode = Number.parseInt(status);
		if (typeof ssrError.data === "string") try {
			ssrError.data = destr(ssrError.data);
		} catch {}
		setSSRError(ssrContext, ssrError);
	}
	const routeOptions = runtime.getRouteRules(event);
	const NO_SCRIPTS = !!routeOptions.noScripts;
	const DEFER_PREFETCH = !NO_SCRIPTS;
	if (routeOptions.ssr === false && true) ssrContext.noSSR = true;
	if (ssrContext.noSSR) for (const input of appComponentHead) ssrContext.head.push(input);
	!ssrContext.noSSR && !ssrError && false;
	const renderer = await instance.getRenderer(ssrContext);
	const { rendererContext } = renderer;
	const canStream = NUXT_SSR_STREAMING;
	const renderRouteContext = {
		canStream,
		prefersStream: false
	};
	await hooks.callHook("render:route", renderRouteContext, { event: hookEvent });
	const _rendered = await (renderer.renderToString(ssrContext)).catch(async (error) => {
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") return {};
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	const renderedHtml = _rendered.html;
	const [entryInlinedStyles, componentInlinedStyles] = [[], []];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	if (ssrContext.payload?.error && !ssrError) throw ssrContext.payload.error;
	const { styles, scripts } = getRequestDependencies(ssrContext, rendererContext);
	pushNoScriptsHints(ssrContext, NO_SCRIPTS);
	if (!NO_SCRIPTS) pushEntryImportMap(instance, event, ssrContext);
	if (entryInlinedStyles.length) ssrContext.head.push({ style: entryInlinedStyles });
	const link = [];
	const inlinedHrefs = [];
	for (const resource of Object.values(styles)) {
		if (isDevInlineStyle(resource.file)) ;
		link.push({
			rel: "stylesheet",
			href: rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (!NO_SCRIPTS) for (const href of inlinedHrefs) link.push({
		rel: "stylesheet",
		href,
		disabled: true
	});
	if (link.length) ssrContext.head.push({ link });
	if (componentInlinedStyles.length) ssrContext.head.push({ style: componentInlinedStyles });
	const dependencyOptions = {
		exclude: ssrContext["~lazyHydratedModules"]?.size ? ssrContext["~lazyHydratedModules"] : void 0,
		scripts: !NO_SCRIPTS
	};
	const excludeHrefs = new Set(link.map((l) => l.href));
	for (const href of inlinedHrefs) excludeHrefs.add(href);
	for (const resource of Object.values(scripts)) excludeHrefs.add(rendererContext.buildAssetsURL(resource.file));
	for (const id of ssrContext["~neverHydratedModules"] ?? []) {
		const file = (rendererContext.manifest ?? rendererContext.precomputed?.modules)?.[id]?.file;
		if (file) excludeHrefs.add(rendererContext.buildAssetsURL(file));
	}
	const hints = [];
	const deferredHints = [];
	let preloadContext = ssrContext;
	for (const l of getPreloadLinks(preloadContext, rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) hints.push(l);
	for (const l of getPrefetchLinks(preloadContext, rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) (DEFER_PREFETCH ? deferredHints : hints).push(l);
	if (hints.length) ssrContext.head.push({ link: hints });
	if (!NO_SCRIPTS) pushPayloadScript(ssrContext);
	if (!routeOptions.noScripts) pushEntryScripts(ssrContext, scripts, rendererContext, "head");
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	const devBadge = void 0;
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([
			headTags,
			renderDeferredPrefetchHints(deferredHints),
			devBadge
		]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [_rendered.html, renderAppTeleports(ssrContext)],
		bodyAppend: [bodyTags]
	};
	await hooks.callHook("render:html", htmlContext, { event: hookEvent });
	let documentHtml;
	let replaced = false;
	const documentContext = {
		get html() {
			return documentHtml ??= renderHTMLDocument(htmlContext);
		},
		set html(value) {
			documentHtml = value;
			replaced = true;
		}
	};
	await hooks.callHook("render:document", documentContext, { event: hookEvent });
	const response = {
		statusCode: event.res.status,
		statusMessage: event.res.statusText,
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
	const chunks = ssrContext["~htmlChunks"];
	if (!replaced && runtime.createDocumentResponse && chunks && htmlContext.body.length === 2 && htmlContext.body[0] === renderedHtml) return {
		...response,
		chunks: renderHTMLDocumentChunks(htmlContext, chunks)
	};
	return {
		...response,
		body: documentContext.html
	};
}

// src/runtime/server/renderer/encode.ts
const hasBuffer = typeof Buffer !== "undefined";
const textEncoder = new TextEncoder();
const MIN_SCRATCH_SIZE = 65536;
const MAX_SCRATCH_SIZE = 4194304;
const MIN_TRANSCODE_LENGTH = 2048;
const NON_LATIN1_RE = /[^\0-\xFF]/;
let scratch;
let utf16Scratch;
const nodeBuffer = hasBuffer && hasSlowUtf8Write() ? resolveTranscoder() : void 0;
function hasSlowUtf8Write() {
	const versions = globalThis.process?.versions;
	if (!versions?.node || versions.bun || versions.deno) return false;
	const [major = 0, minor = 0] = String(versions.node).split(".").map(Number);
	return major < 26 || major === 26 && minor < 8;
}
function resolveTranscoder() {
	try {
		const mod = globalThis.process?.getBuiltinModule?.("node:buffer");
		if (mod?.transcode && mod.transcode(Buffer.from("→", "utf16le"), "utf16le", "utf8").equals(Buffer.from("→"))) return mod;
	} catch {}
}
function writeUtf8(target, chunk, offset) {
	if (nodeBuffer && chunk.length >= MIN_TRANSCODE_LENGTH && NON_LATIN1_RE.test(chunk)) {
		const size = chunk.length * 2;
		if (!utf16Scratch || utf16Scratch.length < size) utf16Scratch = Buffer.allocUnsafeSlow(Math.max(size, (utf16Scratch?.length ?? 0) * 2));
		try {
			const bytes = nodeBuffer.transcode(utf16Scratch.subarray(0, utf16Scratch.write(chunk, 0, "utf16le")), "utf16le", "utf8");
			target.set(bytes, offset);
			return bytes.length;
		} catch {} finally {
			if (utf16Scratch.length > MAX_SCRATCH_SIZE) utf16Scratch = void 0;
		}
	}
	return target.write(chunk, offset);
}
/**
* Encode a rendered document, given as chunks, into one UTF-8 buffer. Each chunk is written
* separately, so a non-Latin1 character only affects the encoding speed of its own chunk.
*
* Documents are encoded through a reused buffer of at most 4MiB; larger documents get a
* buffer of their own, which is not retained.
*/
function encodeDocument(chunks) {
	let length = 0;
	for (const chunk of chunks) length += chunk.length;
	const needed = length * 3;
	if (needed > MAX_SCRATCH_SIZE) return hasBuffer ? encodeExact(chunks) : encodeVia(chunks, new Uint8Array(needed));
	if (!scratch || scratch.length < needed) {
		const size = Math.min(MAX_SCRATCH_SIZE, Math.max(needed, MIN_SCRATCH_SIZE, (scratch?.length ?? 0) * 2));
		scratch = hasBuffer ? Buffer.allocUnsafeSlow(size) : new Uint8Array(size);
	}
	return encodeVia(chunks, scratch);
}
/** Write each chunk in turn, rewriting a high surrogate that ends a chunk with the chunk after it. */
function writeChunks(chunks, write) {
	let offset = 0;
	let carry = "";
	for (let chunk of chunks) {
		if (carry) {
			chunk = carry + chunk;
			carry = "";
		}
		offset += write(chunk, offset);
		const last = chunk.charCodeAt(chunk.length - 1);
		if (last >= 55296 && last <= 56319) {
			offset -= 3;
			carry = chunk.slice(-1);
		}
	}
	if (carry) offset += write(carry, offset);
	return offset;
}
function encodeVia(chunks, target) {
	if (hasBuffer) {
		const offset = writeChunks(chunks, (chunk, offset) => writeUtf8(target, chunk, offset));
		return Buffer.from(target.subarray(0, offset));
	}
	const offset = writeChunks(chunks, (chunk, offset) => textEncoder.encodeInto(chunk, target.subarray(offset)).written);
	return target.slice(0, offset);
}
function encodeExact(chunks) {
	let size = 0;
	for (const chunk of chunks) size += Buffer.byteLength(chunk);
	const bytes = Buffer.allocUnsafe(size);
	return bytes.subarray(0, writeChunks(chunks, (chunk, offset) => writeUtf8(bytes, chunk, offset)));
}

const renderer = createNuxtRenderer(rendererInstance);
const handler = defineRenderHandler(async (event) => {
	const response = await renderer.fetch(toRequestEvent(event));
	for (const [name, value] of response.headers) {
		if (name === "set-cookie") continue;
		setResponseHeader(event, name, value);
	}
	const { chunks } = response;
	return {
		body: chunks ? toDocumentBody(event, chunks) : response.body,
		statusCode: response.status,
		statusMessage: response.statusText || void 0,
		headers: createResponseHeaderRecord(event.node.res)
	};
});
/**
* `render:response` listeners and nitro's cached handlers both expect a string body, so the
* document is only encoded to bytes when neither will read it.
*/
function toDocumentBody(event, chunks) {
	const listeners = useNitroApp().hooks._hooks?.["render:response"];
	if (event.context.cache || listeners?.length) return chunks.join("");
	return encodeDocument(chunks);
}

export { handler as default };
//# sourceMappingURL=renderer.mjs.map
