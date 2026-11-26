import { u as useAsyncData } from './asyncData-Clm5bn3w.mjs';
import { J as useNuxtApp, b as useAppConfig } from '../virtual/entry.mjs';
import { i as useResolvedName, r as resolveCustomizeFn } from './components-lUjYQ9V4.mjs';
import { s as setupIconify, i as init, l as loadIcon$1 } from './shared-mywlFxTX.mjs';
import { getIcon, Icon, addIcon } from '@iconify/vue';
import { v as defineComponent, H as onServerPrefetch, x as h } from '../_/vue.mjs';
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
import 'fnv1a-64';

// node_modules/@nuxt/icon/dist/runtime/components/svg.js
var NuxtIconSvg = /* @__PURE__ */ defineComponent({
	name: "NuxtIconSvg",
	props: {
		name: {
			type: String,
			required: true
		},
		customize: {
			type: [
				Function,
				Boolean,
				null
			],
			default: null,
			required: false
		}
	},
	setup(props, { slots }) {
		setupIconify();
		const nuxt = useNuxtApp();
		const options = useAppConfig().icon;
		const name = useResolvedName(() => props.name);
		const storeKey = "i-" + name.value;
		if (name.value) onServerPrefetch(async () => {
			{
				if (storeKey in nuxt.payload.data) return;
				init(addIcon);
				const icon = getIcon(name.value);
				if (icon) {
					nuxt.payload.data[storeKey] = icon;
					return;
				}
				await useAsyncData(storeKey, async () => await loadIcon$1(name.value, options.fetchTimeout), { deep: false });
			}
		});
		return () => h(Icon, {
			icon: name.value,
			ssr: true,
			customise: resolveCustomizeFn(props.customize, options.customize)
		}, slots);
	}
});

export { NuxtIconSvg };
//# sourceMappingURL=svg-QwccY7F7.mjs.map
