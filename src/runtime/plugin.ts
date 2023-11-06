import type {ItemType} from './types/ItemType'
import {useItems} from './composables/useItems'
import {useBreadcrumbs} from './composables/useBreadcrumbs'

export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-test', (to, from) => {
        if (to.path !== from.path) {
            useBreadcrumbs().value = []
        }
    }, {global: true})

    const registerItem = (item: ItemType, parent: ItemType | null) => {
        if (item.children && Array.isArray(item.children)) {
            item.children.forEach(child => registerItem(child, item))
        }
        item.parent = item?.parent ? item.parent : parent?.name
        delete item.children
        //@ts-ignore
        useItems()[item.name] = item
    }

    const registerBreadcrumb = (item: ItemType): void => {
        registerItem(item, null)
    }

    const registerBreadcrumbs = (items: Array<ItemType>): void => {
        items.forEach(item => {
            registerItem(item, null)
        })
    }

    return {
        provide: {
            registerBreadcrumb,
            registerBreadcrumbs
        }
    }
})