export default defineNuxtPlugin(nuxtApp => {
    const {$registerBreadcrumbs} = nuxtApp
    //@ts-ignore
    $registerBreadcrumbs([
        {
            name: 'index',
            link: () => ({
                to: '/',
                title: 'Go to home page',
                text: 'Main'
            }),
            children: [
                {
                    name: 'product',
                    link: () => ({
                        to: '/product',
                        title: 'Go to product list page',
                        text: 'ProductList',
                    }),
                    children: [
                        {
                            name: 'product-product',
                            link: (ctx: any) => {
                                return {
                                    to: '/d/product/' + ctx.product.id,
                                    title: `Go to ${ctx.product.name} page`,
                                    text: ctx.product.name,
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ])
})