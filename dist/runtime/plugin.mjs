import { defineNuxtPlugin, addRouteMiddleware } from "nuxt/app";
import { useItems } from "./composables/useItems.mjs";
import { useBreadcrumbs } from "./composables/useBreadcrumbs.mjs";
export default defineNuxtPlugin(() => {
  addRouteMiddleware("global-test", (to, from) => {
    if (to.path !== from.path) {
      useBreadcrumbs().value = [];
    }
  }, { global: true });
  const registerItem = (item, parent) => {
    if (item.children && Array.isArray(item.children)) {
      item.children.forEach((child) => registerItem(child, item));
    }
    item.parent = item?.parent ? item.parent : parent?.name;
    delete item.children;
    useItems()[item.name] = item;
  };
  const registerBreadcrumb = (item) => {
    registerItem(item, null);
  };
  const registerBreadcrumbs = (items) => {
    if (Array.isArray(items)) {
      items.forEach((item) => {
        registerItem(item, null);
      });
    } else {
      throw new Error("Passed breadcrumbs must be an array!");
    }
  };
  return {
    provide: {
      registerBreadcrumb,
      registerBreadcrumbs
    }
  };
});
