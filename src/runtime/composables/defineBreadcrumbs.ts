import {useBreadcrumbs} from './useBreadcrumbs'
import {useItems} from './useItems'
import {useRoute} from 'nuxt/app'
import type {ItemType} from '../types/ItemType'
import type {BreadcrumbType} from '../types/BreadcrumbType'

const breads = useBreadcrumbs()

export const defineBreadcrumbs = (ctx?: any, name?: string | null): void => {
    if (!name) {
        name = useRoute().name as string
    }
    const data = useItems()

    let result = []
    let item: ItemType | null = null
    let prevItem: ItemType | null = null
    while (name) {
        prevItem = item
        item = findItem(name, data)
        if (item && item.name === prevItem?.name) {
            let msg = 'You have registered breadcrumbs with endless loop, that will not work. Please check "name" and "parent" values on registered breadcrumbs'
            throw new Error(msg)
        }
        if (item) result.push(makeBreadcrumb(item, ctx))
        name = item?.parent ? item?.parent : null
    }

    breads.value = result.reverse()
}

const findItem = (name: string | undefined | null, data: Object): ItemType | null => {
    if (!name) return null
    //@ts-ignore
    let item = data[name]
    return item ? item : null
}

const makeBreadcrumb = (item: ItemType, ctx?: any): BreadcrumbType => {
    return {...item.link(ctx), ctx}
}
