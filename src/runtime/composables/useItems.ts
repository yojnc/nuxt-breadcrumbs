import {ReactiveVariable} from 'vue/macros'
const items:ReactiveVariable<Object> = reactive({})
export const useItems = () => items