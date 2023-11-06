import { ref } from "vue";
const items = ref([]);
export const useBreadcrumbs = () => items;
