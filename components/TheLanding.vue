<template>
  <section class="hero-image md:-mt-32 flex">
    <div class="container mx-auto flex items-center">
      <div class="h-2/3 w-7/12 flex flex-col justify-around gap-5">
        <header>
          <p class="subtext text-gray">Next mission launch</p>
          <h1 class="jumbotron">Starlink 4-21 (v1.5)</h1>
        </header>
        <LaunchTimer/>
        <div class="btn w-52 h-16 bg-primary text-white rounded-[25px] text-center text-[22px] leading-[70px]">Learn more</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-image {
  @apply bg-gray-50 w-full h-screen;
  background: url('./static/landing.png') center;
  background-size: cover;
}
</style>

