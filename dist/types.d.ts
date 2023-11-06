
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['nuxt-breadcrumbs']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['nuxt-breadcrumbs']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['nuxt-breadcrumbs']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['nuxt-breadcrumbs']?: ModuleOptions }
}


export { ModuleOptions, default } from './module'
