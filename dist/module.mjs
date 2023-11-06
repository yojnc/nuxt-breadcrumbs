import { defineNuxtModule, createResolver, addPlugin, addImports } from '@nuxt/kit';
import { fileURLToPath } from 'node:url';

const module = defineNuxtModule({
  meta: {
    name: "nuxt-breadcrumbs",
    configKey: "nuxt-breadcrumbs"
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  hooks: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve("./runtime/plugin"));
    addImports({
      from: resolve(runtimeDir, "composables/defineBreadcrumbs"),
      name: "defineBreadcrumbs",
      as: "defineBreadcrumbs"
    });
    addImports({
      from: resolve(runtimeDir, "composables/useBreadcrumbs"),
      name: "useBreadcrumbs",
      as: "useBreadcrumbs"
    });
  }
});

export { module as default };
