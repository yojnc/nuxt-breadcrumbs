# Nuxt Breadcrumbs

<!--[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]
-->

Easy breadcrumbs management for **Nuxt 3**

## Features

- Register breadcrumbs
- Call generation for page
- Ready

## Quick Setup

1. Add `nuxt-breadcrumbs` dependency to your project

```bash
# Using pnpm
pnpm add nuxt-breadcrumbs

# Using yarn
yarn add nuxt-breadcrumbs

# Using npm
npm install nuxt-breadcrumbs --save
```

2. Add `nuxt-breadcrumbs` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-breadcrumbs'
  ]
})
```

That's it! You can now use Nuxt Breadcrumbs in your Nuxt app ✨

## How to use

### 1. Register breadcrumbs
Best place to define your application breadcrumbs is plugin

Add a new plugin:
```
npx nuxi add plugin breadcrumbs
```
Then register breadcrumbs
```js
    export default defineNuxtPlugin(nuxtApp => {
    const {$registerBreadcrumbs} = nuxtApp
    
    // Register single breadcrumb
    $registerBreadcrumbs({
        // route name. Can find in useRoute().name
        name: 'index',
        // Parent breadcrumb name, can be null|string
        parent: null,
        // Generated link data using context passed from page, 
        // its global for all breadcrumbs chain
        link: (ctx: any) => ({
            // Link to page
            to: '/',
            // Mouseover title
            title: 'Go to home page',
            // Displaying text in breadcrumbs
            text: 'Main',
            // Can be used for passing additional data, if you need
            add: null
        })
    })
    
    // You can register nested tree
    $registerBreadcrumbs([
        {
            name: 'index',
            link: () => ({
                to: '/',
                title: 'Go to home page',
                text: 'Home'
            }),
            children: [
                {
                    name: 'product',
                    link: () => ({
                        to: '/product',
                        title: 'Go to product list page',
                        text: 'Products',
                    }),
                    children: [
                        {
                            name: 'product-product',
                            link: (ctx: any) => {
                                return {
                                    to: `/product/${ctx.product.id}`,
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
```
### 2. Define breadcrumb
In Page/Component
```ts
// Pass data for generation link() data
const ctx: any|null = {
    product: {
        product: {
            name: 'Product name',
            id: 321,
        }
    }
}
// You dont need to pass, by default if doesnt passed will use current route name
const routeName: string|null = useRoute().name

defineBreadcrumbs(ctx, routeName)
```

### 3. Use for ui component
```ts
const breadcrumbs = useBreadcrumbs()
```
Will give you
```json
[
    {
      "to": "/",
      "title": "Go to home page",
      "text": "Main",
      "ctx": {
        "product": {
          "name": "Product Name",
          "id": 321
        }
      }
    },
    {
      "to": "/product",
      "title": "Go to product list page",
      "text": "ProductList",
      "ctx": {
        "product": {
          "name": "Product Name",
          "id": 321
        }
      }
    },
    {
      "to": "/d/product/321",
      "title": "Go to Product Name page",
      "text": "Product Name",
      "ctx": {
        "product": {
          "name": "Product Name",
          "id": 321
        }
      }
    }
  ]
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
