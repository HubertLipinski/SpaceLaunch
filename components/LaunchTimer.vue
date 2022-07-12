<template>
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
</template>

<script>
export default {
  name: "LaunchTimer"
}
</script>

<style scoped>
  .timer-value {
    @apply text-[110px] leading-[90px] text-black;
  }
  .timer-caption{
    @apply text-[30px] leading-[85px] text-gray-500 uppercase;
  }
</style>
