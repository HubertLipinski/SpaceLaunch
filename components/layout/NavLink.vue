<template>
  <li>
    <nuxt-link :to="to" class="text-sm text-black font-light lg:text-white sm:text-base hover:text-primary">
      <slot></slot>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    to: {required: true, type: String, default: '/'}
  }
}
</script>

<style scoped>
  .nuxt-link-exact-active {
    @apply font-medium text-primary
  }
</style>
