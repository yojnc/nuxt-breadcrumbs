import type {BreadcrumbType} from '../types/BreadcrumbType'
import type {Ref} from 'vue'
import {ref} from 'vue'

const items:Ref<Array<BreadcrumbType>> = ref([])
export const useBreadcrumbs = () => items