<template>
    <section class="relative h-screen w-full">
      <div class="w-full h-full bg-hero-landing-full clip-path-bg bg-cover bg-no-repeat bg-top lg:bg-center lg:bg-hero-landing absolute top-0 left-0 -z-20"></div>
      <div class="container h-full m-auto lg:flex lg:items-center px-4">
        <div class="h-full flex flex-col justify-center space-y-24 sm:space-y-28 lg:h-2/3 lg:w-7/12 lg:justify-around lg:gap-5 lg:space-y-0">
          <header>
            <p class="text-sm font-extrabold tracking-[0.35em] uppercase text-gray-500 text-gray sm:text-base md:text-lg lg:text-xl 2xl:text-[35px] 2xl:leading-[46px]">Next mission launch</p>
            <h1 class="text-3xl font-extrabold tracking-[0.05em] text-black sm:text-5xl xl:text-6xl 2xl:text-[80px] 2xl:leading-[100px]">Starlink 4-21 (v1.5)</h1>
          </header>

          <!-- todo components -->
          <div class="w-full flex flex-row justify-between">
            <div class="flex flex-col text-center">
              <p class="timer-value">01</p>
              <p class="timer-caption">days</p>
            </div>
            <div class="flex flex-col text-center">
              <p class="timer-value">12</p>
              <p class="timer-caption">hours</p>
            </div>
            <div class="flex flex-col text-center">
              <p class="timer-value">07</p>
              <p class="timer-caption">minutes</p>
            </div>
            <div class="flex flex-col text-center">
              <p class="timer-value">59</p>
              <p class="timer-caption">seconds</p>
            </div>
          </div>

          <a href="#" class="bg-primary text-white text-center rounded-full text-sm w-28 py-2.5 sm:py-3 sm:w-32 sm:text-base md:py-3.5 lg:text-lg lg:w-48 hover:text-white hover:scale-105 hover:bg-sky-500">Learn more</a>
        </div>
      </div>
    </section>
</template>

<script>
  export default {
    mounted() {
      // todo
    }
  }
</script>

<style scoped>
.timer-value {
  @apply text-black text-5xl tracking-tight sm:tracking-widest lg:tracking-tight xl:tracking-widest sm:text-7xl md:text-8xl 2xl:text-[110px] 2xl:leading-[90px];
}
.timer-caption {
  @apply text-gray-500 uppercase pt-3 md:pt-1 xl:pt-0 font-light sm:text-xl md:text-2xl 2xl:text-[30px] 2xl:leading-[85px];
}
</style>
