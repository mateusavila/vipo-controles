import { d as defineNuxtRouteMiddleware, u as useRequestFetch, e as executeAsync, n as navigateTo, c as createError$2 } from '../virtual/entry.mjs';
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

// app/middleware/admin.ts
var admin_default = defineNuxtRouteMiddleware(async () => {
	let __temp, __restore;
	const request = useRequestFetch();
	try {
		[__temp, __restore] = executeAsync(() => request("/api/identity/me")), await __temp, __restore();
	} catch (error) {
		const { statusCode } = error;
		if (statusCode === 401) return navigateTo("/login");
		throw createError$2({
			statusCode: 503,
			message: "Não foi possível verificar a sessão. Tenta recarregar a página."
		});
	}
});

export { admin_default as default };
//# sourceMappingURL=admin-DynKbr1-.mjs.map
