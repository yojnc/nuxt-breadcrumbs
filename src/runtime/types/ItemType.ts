export type ItemType = {
    name: string,
    parent?: string|null,
    children?: Array<ItemType>|null
    link: (ctx?: any|undefined) => {
        text: string,
        title: string,
        to: any,
        add?: any
    }
}