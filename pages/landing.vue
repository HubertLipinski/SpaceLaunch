<template>
  <main class="px-6 xl:px-0">
    <header class="container mx-auto h-24 flex justify-between items-center z-10">
        <h1 class="text-primary tracking-[0.1em] sm:text-lg md:text-[30px] font-bold">SpaceLaunch</h1>
        <nav class="text-center">
          <ul class="w-full flex space-x-2">
            <li>
              <nuxt-link to="/" class="text-sm sm:text-base lg:text-[20px] hover:text-primary">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/details" class="text-sm sm:text-base lg:text-[20px] hover:text-primary">Details</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/rockets" class="text-sm sm:text-base lg:text-[20px] hover:text-primary">Rockets</nuxt-link>
            </li>
          </ul>
        </nav>
    </header>

    <section class="h-screen w-full xl:bg-hero-landing bg-cover bg-no-repeat bg-center">
      <div class="container h-full m-auto -mt-24 xl:flex xl:items-center">
        <div class="h-full flex flex-col justify-center space-y-28 xl:h-2/3 xl:w-7/12 xl:justify-around xl:gap-5 xl:space-y-0">
          <header>
            <p class="text-sm font-extrabold tracking-[0.35em] uppercase text-gray-500 text-gray sm:text-base md:text-lg lg:text-xl 2xl:text-[35px] 2xl:leading-[46px]">Next mission launch</p>
            <h1 class="text-3xl font-extrabold tracking-[0.05em] text-black sm:text-5xl lg:text-6xl 2xl:text-[80px] 2xl:leading-[100px]">Starlink 4-21 (v1.5)</h1>
          </header>

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

          <div class="bg-primary text-white text-center rounded-full text-base w-36 py-3">Learn more</div>
        </div>
      </div>
    </section>

    <section class="h-screen">
      <h1>test</h1>
    </section>
  </main>
</template>


<style scoped>
.timer-value {
  @apply text-black text-5xl sm:text-7xl md:text-8xl 2xl:text-[110px] 2xl:leading-[90px];
}
.timer-caption{
  @apply text-gray-500 uppercase pt-3 md:pt-1 xl:pt-0 font-light sm:text-xl md:text-2xl 2xl:text-[30px] 2xl:leading-[85px];
}
</style>
