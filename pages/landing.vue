<template>
  <main>
    <header class="container mx-auto">
      <div class="w-full h-24 py-8 px-8 flex justify-between items-center text-center fixed top-0 left-0">
        <h1 class="text-primary tracking-[0.1em] md:text-[30px] font-bold">SpaceLaunch</h1>
        <nav class="text-center">
          <ul class="w-full flex space-x-2">
            <li>
              <nuxt-link to="/" class="text-sm md:text-[20px] hover:text-primary">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/details" class="text-sm md:text-[20px] hover:text-primary">Details</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/rockets" class="text-sm md:text-[20px] hover:text-primary">Rockets</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <section class="h-screen w-full xl:bg-hero-landing bg-cover bg-no-repeat">
      <div class="container h-full m-auto px-8">
        <div class="h-full flex flex-col justify-center space-y-24">
          <header>
            <p class="text-sm font-extrabold tracking-[0.35em] uppercase text-gray-500 text-gray">Next mission launch</p>
            <h1 class="text-3xl font-extrabold tracking-[0.05em] text-black">Starlink 4-21 (v1.5)</h1>
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

          <div class="bg-primary text-white rounded-[25px] text-center text-[22px]">Learn more</div>
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
  @apply text-black text-5xl;
}
.timer-caption{
  @apply text-gray-500 uppercase pt-2;
}
</style>
