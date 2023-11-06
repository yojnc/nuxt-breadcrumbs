import type {BreadcrumbType} from '../types/BreadcrumbType'

const items:Ref<Array<BreadcrumbType>> = ref([])
export const useBreadcrumbs = () => items