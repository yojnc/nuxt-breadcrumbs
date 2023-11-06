<script lang="ts" setup>
import {useItems} from '../src/runtime/composables/useItems'

const items = useItems()
const breadcrumbs = useBreadcrumbs()
</script>

<template>
    <div>
        <div class="menu">
            <NuxtLink
                class="menu__item"
                to="/"
            >
                Index page
            </NuxtLink>
            <NuxtLink
                class="menu__item"
                to="/product"
            >
                ProductList page
            </NuxtLink>
            <NuxtLink
                class="menu__item"
                to="/product/123"
            >
                Product page
            </NuxtLink>
        </div>
        <NuxtPage/>
        <pre>
            {{ {items, breadcrumbs} }}
        </pre>
    </div>
</template>

<style scoped>
.menu {
    display: flex;
    align-items: center;
}

.menu__item {
    padding: 20px;
}
</style>
