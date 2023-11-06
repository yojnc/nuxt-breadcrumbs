import type { ItemType } from './types/ItemType';
declare const _default: import("nuxt/app").Plugin<{
    registerBreadcrumb: (item: ItemType) => void;
    registerBreadcrumbs: (items: Array<ItemType> | ItemType) => void;
}> & import("nuxt/app").ObjectPlugin<{
    registerBreadcrumb: (item: ItemType) => void;
    registerBreadcrumbs: (items: Array<ItemType> | ItemType) => void;
}>;
export default _default;
