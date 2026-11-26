export { l as loadIcon, s as setupIconify } from './shared-mywlFxTX.mjs';
export { addIcon, getIcon } from '@iconify/vue';
import { getIconCSS } from '@iconify/utils/lib/css/icon';
import '../virtual/entry.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import '../nitro/nitro.mjs';
import 'unhead/server';
import '../_/vue.mjs';
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

// node_modules/@nuxt/icon/dist/runtime/components/css-cache.js
var MAX_SIZE = 1e3;
var cache = /* @__PURE__ */ new Map();
function isSameIcon(a, b) {
	const keys = Object.keys(a);
	return keys.length === Object.keys(b).length && keys.every((key) => Object.hasOwn(b, key) && a[key] === b[key]);
}
function getCachedIconCSS(icon, iconSelector, customise) {
	if (customise) return getIconCSS(icon, {
		iconSelector,
		format: "compressed",
		customise
	});
	const cached = cache.get(iconSelector);
	if (cached && isSameIcon(cached.icon, icon)) return cached.css;
	const css = getIconCSS(icon, {
		iconSelector,
		format: "compressed"
	});
	if (!cached && cache.size >= MAX_SIZE) cache.clear();
	cache.set(iconSelector, {
		icon: { ...icon },
		css
	});
	return css;
}

export { getCachedIconCSS };
//# sourceMappingURL=css-runtime-BRRzaoTv.mjs.map
