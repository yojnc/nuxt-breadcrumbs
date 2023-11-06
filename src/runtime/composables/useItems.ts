import {ReactiveVariable} from 'vue/macros'
import {reactive} from 'vue'

const items:ReactiveVariable<Object> = reactive({})
export const useItems = () => items