<template>
  <div class="container mx-auto h-28 px-4 flex justify-between items-center z-50" :class="fixed ? 'fixed top-0 left-0 right-0' : ''">
    <h1 class="text-primary tracking-[0.1em] sm:text-lg md:text-xl lg:text-[30px] font-bold">SpaceLaunch</h1>
    <nav class="w-full text-center md:w-1/4">
      <ul class="w-full flex space-x-4 md:space-x-6 justify-end xl:space-x-0 xl:justify-between">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/details">Details</NavLink>
        <NavLink to="/Rockets">Rockets</NavLink>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    fixed: {required: false, type: Boolean, default: false}
  }
}
</script>

<style scoped>

</style>
