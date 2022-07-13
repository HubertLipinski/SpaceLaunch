<template>
  <li>
    <nuxt-link :to="url" class="nav-link">
      <slot></slot>
    </nuxt-link>
  </li>
</template>

<script>
  export default {
    props: {
      url: {required: true, type: String}
    }
  }
</script>
